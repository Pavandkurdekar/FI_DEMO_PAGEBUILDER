const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const catalyst = require("zcatalyst-sdk-node");
const CryptoJS = require("crypto-js");

const app = express();
app.use(express.json());
// Constants
const STATIC_ACCESS_KEY = "dQvjCOWuo5TZvRmhlj7JXw=="; // Static Access Key
const STATIC_DEPARTMENT_ID = "SMS002504305_11_24"; // Static Department ID
const secretKey = "58VTYzd82o1jCWe5omJMYujngmb9QKiAZlS9nEcdsMk="; // Base64-encoded key
const ivParam = "9iSwMG4isu4MPoFp/a2nbg=="; // Base64-encoded IV

// AES Encryption Function
function encrypt(inputValue, key, ivParam) {
  try {
    const decodedKey = CryptoJS.enc.Base64.parse(key);
    const decodedIv = CryptoJS.enc.Base64.parse(ivParam);

    const encrypted = CryptoJS.AES.encrypt(inputValue, decodedKey, {
      iv: decodedIv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  } catch (error) {
    console.error("Encryption failed:", error);
    return null;
  }
}

// Middleware to parse URL-encoded data (form submissions) and JSON payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const credentials = {
  CRMConnector: {
    client_id: "1000.YUYUE1MA2D8KZ2XVGFR8B1TLAV9R8E",
    client_secret: "e7801223cffc4f08379e76ab549e3d8eae0e38d9b2",
    auth_url: "https://accounts.zoho.com/oauth/v2/token",
    refresh_url: "https://accounts.zoho.com/oauth/v2/token",
    refresh_token:
      "1000.0e2acaadd0aac833db7f4570658596fe.4c7b65267c02f009fab45231604dc7f5",
  },
};

// reCAPTCHA Verification Endpoint
app.post("/validCaptcha", async (req, res) => {
  const recaptchaToken = req.body["g-recaptcha-response"];
  if (!recaptchaToken) {
    return res
      .status(400)
      .send("reCAPTCHA token is missing. Please try again.");
  }

  try {
    // Initialize Catalyst
    const catalystApp = catalyst.initialize(req);

    // Run the ZCQL query to fetch the single row from SYS_CONFIG
    const zcqlQuery = "SELECT * from SYS_CONFIG";
    const queryResponse = await catalystApp.zcql().executeZCQLQuery(zcqlQuery);
    console.log("response from the table", queryResponse);

    if (queryResponse.length === 0) {
      return res.status(500).send("reCAPTCHA secret key not found.");
    }

    // Extract the secret key from the response
    const captchaKey = queryResponse[0].SYS_CONFIG.S_SECRET_KEY;
    // Assuming the secret key is stored in the column 'SECRET_KEY'

    // Verify the reCAPTCHA response with Google API
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: captchaKey,
          response: recaptchaToken,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (response.data.success) {
      res.send("reCAPTCHA verified! Form submitted successfully.");
    } else {
      res.status(400).send("reCAPTCHA verification failed. Please try again.");
    }
  } catch (error) {
    console.error(
      "Error during reCAPTCHA verification:",
      error.message || error
    );
    res.status(500).send("Error during reCAPTCHA verification.");
  }
});

// Helper function to get cache object with details
async function getCacheObjectWithDetails(segment, key) {
  try {
    const cacheObject = await segment.get(key);
    // console.log(`Cache object for key "${key}":`, cacheObject);
    return cacheObject;
  } catch (error) {
    console.error(
      `Error fetching cache object for key "${key}":`,
      error.message
    );
    throw error;
  }
}

// Endpoint to fetch all layouts for the Leads module
app.get("/crm/meta/layouts", async (req, res) => {
  try {
    const catalystApp = catalyst.initialize(req);
    const cache = catalystApp.cache();
    const segment = cache.segment();

    // Helper function to generate and store a new access token.
    async function generateNewToken() {
      console.log("Access token is null. Generating new token...");
      const newToken = await catalystApp
        .connection(credentials)
        .getConnector("CRMConnector")
        .getAccessToken();
      if (newToken) {
        console.log("New access token generated and storing in cache.");
        await segment.put("ZC_CONN_CRMConnector", newToken, 1);
      }
    }

    // Helper function that polls the cache until a valid token is available.
    async function waitForToken(timeout = 100, maxAttempts = 20) {
      let attempts = 0;
      return new Promise((resolve, reject) => {
        const interval = setInterval(async () => {
          attempts++;
          const cacheObject = await getCacheObjectWithDetails(
            segment,
            "ZC_CONN_CRMConnector"
          );
          const token = cacheObject ? cacheObject.cache_value : null;
          if (token) {
            clearInterval(interval);
            resolve(token);
          } else if (attempts >= maxAttempts) {
            clearInterval(interval);
            reject(new Error("Timeout waiting for token generation."));
          }
        }, timeout);
      });
    }

    // Check the cache for the access token.
    let cacheObject = await getCacheObjectWithDetails(
      segment,
      "ZC_CONN_CRMConnector"
    );
    let accessToken = cacheObject ? cacheObject.cache_value : null;

    // If access token is null, start token generation and wait until it's generated.
    if (!accessToken) {
      // Start token generation asynchronously.
      generateNewToken();

      // Wait for the token to appear in the cache.
      try {
        accessToken = await waitForToken();
      } catch (waitError) {
        return res
          .status(500)
          .send({ message: "Unable to generate access token in time." });
      }
    }

    // Now that we have a valid access token, fetch the layouts.
    const response = await axios.get(
      "https://www.zohoapis.com/crm/v7/settings/layouts?module=Leads",
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const layouts = response.data.layouts.map((layout) => ({
      name: layout.name,
      id: layout.id,
    }));

    res.status(200).send({ layouts });
  } catch (error) {
    console.error("Error fetching layouts:", error.message || error);
    res.status(500).send({ message: "Failed to fetch layouts." });
  }
});

// Endpoint to fetch fields for a specific layout
app.get("/crm/meta/fields", async (req, res) => {
  try {
    const { layoutId } = req.query;

    if (!layoutId) {
      return res.status(400).send({ message: "layoutId is required." });
    }

    const catalystApp = catalyst.initialize(req);
    const cache = catalystApp.cache();
    const segment = cache.segment();

    // Helper function to generate and store a new access token.
    async function generateNewToken() {
      console.log("Access token is null. Generating new token...");
      const newToken = await catalystApp
        .connection(credentials)
        .getConnector("CRMConnector")
        .getAccessToken();
      if (newToken) {
        console.log("New access token generated and storing in cache.");
        await segment.put("ZC_CONN_CRMConnector", newToken, 1);
      }
    }

    // Helper function that polls the cache until a valid token is available.
    async function waitForToken(timeout = 100, maxAttempts = 20) {
      let attempts = 0;
      return new Promise((resolve, reject) => {
        const interval = setInterval(async () => {
          attempts++;
          const cacheObject = await getCacheObjectWithDetails(
            segment,
            "ZC_CONN_CRMConnector"
          );
          const token = cacheObject ? cacheObject.cache_value : null;
          if (token) {
            clearInterval(interval);
            resolve(token);
          } else if (attempts >= maxAttempts) {
            clearInterval(interval);
            reject(new Error("Timeout waiting for token generation."));
          }
        }, timeout);
      });
    }

    // Check the cache for the access token.
    let cacheObject = await getCacheObjectWithDetails(
      segment,
      "ZC_CONN_CRMConnector"
    );
    let accessToken = cacheObject ? cacheObject.cache_value : null;

    // If access token is null, start token generation and wait until it's generated.
    if (!accessToken) {
      // Start token generation asynchronously.
      generateNewToken();

      // Wait for the token to appear in the cache.
      try {
        accessToken = await waitForToken();
      } catch (waitError) {
        return res
          .status(500)
          .send({ message: "Unable to generate access token in time." });
      }
    }

    // Fetch fields for the specified layout
    const response = await axios.get(
      `https://www.zohoapis.com/crm/v7/settings/layouts/${layoutId}?module=Leads`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract fields and map to field names, API names, and mandatory status
    const fields = response.data.layouts[0].sections
      .flatMap((section) => section.fields) // Combine fields from all sections
      .map((field) => ({
        label: field.field_label,
        api_name: field.api_name,
        is_mandatory: field.required || false, // Indicate if the field is mandatory
      }));

    res.status(200).send({ fields });
  } catch (error) {
    console.error("Error fetching fields:", error.message || error);
    res.status(500).send({ message: "Failed to fetch fields." });
  }
});

//OTP ROUTES

//OTP GENERATION ROUTE
app.post("/otp/generate", async (req, res) => {
  // console.log("Inside route");
  const { mobile } = req.body; // Extracting mobile from the request body

  if (!mobile) {
    return res
      .status(400)
      .json({ success: false, message: "Mobile number is required." });
  }

  // Build the URL for OTP generation with the fixed IP address and mobile parameter
  const otpApiUrl = `https://auth.instaalerts.zone:443/otpauthapi/otpgenservlet?ipaddress=15.207.225.39&mobile=91${mobile}`;

  try {
    // Make the API request to Karix with the required headers
    const response = await axios.get(otpApiUrl, {
      headers: {
        access_key: STATIC_ACCESS_KEY, // Include access key
        "department-id": STATIC_DEPARTMENT_ID, // Include department ID
      },
    });

    // Handle the response based on the success message
    if (
      response.data &&
      response.data.trim() === "OTP Generated Successfully"
    ) {
      return res.status(200).json({
        success: true,
        message: "OTP generated successfully.",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to generate OTP.",
      });
    }
  } catch (error) {
    console.error(error);

    // Handle different types of errors (network issues, API errors, etc.)
    if (error.response) {
      // The request was made and the server responded with a status code
      return res.status(error.response.status).json({
        success: false,
        message: error.response.data || "Error from Karix API",
      });
    } else if (error.request) {
      // The request was made but no response was received
      return res.status(500).json({
        success: false,
        message: "No response received from Karix API",
      });
    } else {
      // Something happened in setting up the request that triggered an error
      return res.status(500).json({
        success: false,
        message: "Error in OTP generation request",
      });
    }
  }
});

//OTP REGENERATION ROUTE

app.post("/otp/regenerate", async (req, res) => {
  //console.log("Inside regenerate route");
  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json({
      success: false,
      message: "Mobile number is required to regenerate OTP.",
    });
  }

  // API endpoint and static keys inside the function
  const REGEN_OTP_API_URL = `https://auth.instaalerts.zone:443/otpauthapi/otpregenservlet?ipaddress=15.207.225.39&mobile=91${mobile}`;

  try {
    // Make the API request to Karix with the required headers
    const response = await axios.get(REGEN_OTP_API_URL, {
      headers: {
        access_key: STATIC_ACCESS_KEY,
        "department-id": STATIC_DEPARTMENT_ID,
      },
    });

    //  console.log("Response = ", response.data);

    // Check if the response is exactly "OTP Generated Successfully"
    if (
      response.data &&
      response.data.trim() === "OTP Generated Successfully"
    ) {
      //   console.log(response);

      return res.status(200).json({
        success: true,
        message: "OTP regenerated successfully.",
      });
    } else if (response.data && response.data.trim() === "MAXREGEN") {
      //  console.log("Yes max tries");
      return res.status(200).json({
        success: false,
        message: "MAXREGEN",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to regenerate OTP.",
      });
    }
  } catch (error) {
    console.error(error);

    // Handle different types of errors (network issues, API errors, etc.)
    if (error.response) {
      // The request was made, and the server responded with a status code
      return res.status(error.response.status).json({
        success: false,
        message: error.response.data || "Error from Karix API",
      });
    } else if (error.request) {
      // The request was made, but no response was received
      return res.status(500).json({
        success: false,
        message: "No response received from Karix API",
      });
    } else {
      // Something happened in setting up the request that triggered an error
      return res.status(500).json({
        success: false,
        message: "Error in OTP regeneration request",
      });
    }
  }
});

// OTP Validation Route
app.post("/otp/validate", async (req, res) => {
  const { otp, mobile } = req.body;
  // console.log("OTP = ", otp);

  if (!otp || !mobile) {
    return res.status(400).json({
      success: false,
      message: "OTP and mobile number are required.",
    });
  }

  try {
    // Encrypt the OTP
    const encryptedOtp = encrypt(otp, secretKey, ivParam);
    if (!encryptedOtp) {
      return res.status(500).json({
        success: false,
        message: "Failed to encrypt OTP.",
      });
    }

    // Build the API URL with query parameters
    const apiUrl = `https://auth.instaalerts.zone:443/otpauthapi/otpvalidationservlet?ipaddress=15.207.225.39&otp=${encodeURIComponent(
      encryptedOtp
    )}&mobile=91${mobile}`;

    // Make the request to the Karix API
    const response = await axios.get(apiUrl, {
      headers: {
        access_key: STATIC_ACCESS_KEY, // Include access key
        "department-id": STATIC_DEPARTMENT_ID, // Include department ID
      },
    });

    // Handle the response based on the success message
    const responseMessage = response.data.trim(); // Use .trim() to remove any extra spaces/newlines
    //  console.log(responseMessage);

    if (responseMessage === "Verified successfully") {
      return res.status(200).json({
        success: true,
        message: "OTP is valid.",
      });
    } else if (responseMessage.startsWith("Wrong PIN")) {
      // Handle the specific case where a wrong PIN is entered
      return res.status(400).json({
        success: false,
        message: responseMessage, // Example: "Wrong PIN . No of Retries remaining # 1"
      });
    } else if (responseMessage.startsWith("Max no of  tries")) {
      // Handle the specific case where the maximum number of attempts is reached
      return res.status(400).json({
        success: false,
        message:
          "Max number of tries for this PIN has been reached. Please generate a new one.",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP.",
      });
    }
  } catch (error) {
    console.error("OTP validation failed:", error);

    // Handle different types of errors (network issues, API errors, etc.)
    if (error.response) {
      return res.status(error.response.status).json({
        success: false,
        message: error.response.data || "Error from Karix API.",
      });
    } else if (error.request) {
      return res.status(500).json({
        success: false,
        message: "No response received from Karix API.",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Error in OTP validation request.",
      });
    }
  }
});

//Manage the catpcha key to the backend
app.all("/manageCaptchaKey", async (req, res) => {
  console.log("Called with method:", req.method);

  try {
    const catalystApp = catalyst.initialize(req);
    const zcql = catalystApp.zcql();

    // Fetch existing record from SYS_CONFIG
    const query = "SELECT * FROM SYS_CONFIG";
    const queryResponse = await zcql.executeZCQLQuery(query);
    const results = queryResponse;
    const recordExists = results && results.length > 0;

    // Extract ROWID if record exists
    const ROWID = recordExists ? results[0].SYS_CONFIG.ROWID : null;
    console.log("Existing Record ID:", results);

    switch (req.method) {
      case "GET":
        // Return existing captcha keys if found
        if (recordExists) {
          res.json({
            success: true,
            siteKey: results[0].SYS_CONFIG.S_SITE_KEY,
            secretKey: results[0].SYS_CONFIG.S_SECRET_KEY,
          });
        } else {
          res.status(200).json({
            success: false,
            message: "No records found",
          });
        }
        break;

      case "POST":
        // Ensure both siteKey and secretKey are provided
        const { siteKey, secretKey } = req.body;
        if (!siteKey || !secretKey) {
          return res.status(400).json({
            success: false,
            message: "Both siteKey and secretKey are required.",
          });
        }

        if (recordExists) {
          // Update existing record with merged ROWID
          const updateData = {
            ROWID,
            S_SITE_KEY: siteKey,
            S_SECRET_KEY: secretKey,
          };

          await catalystApp
            .datastore()
            .table("SYS_CONFIG")
            .updateRow(updateData);
          res.json({
            success: true,
            message:
              "Captcha keys updated successfully (record already existed).",
          });
        } else {
          // Insert a new record
          await catalystApp.datastore().table("SYS_CONFIG").insertRow({
            S_SITE_KEY: siteKey,
            S_SECRET_KEY: secretKey,
          });
          res.json({
            success: true,
            message: "Captcha keys added successfully.",
          });
        }
        break;

      case "PUT":
        if (!recordExists) {
          return res.status(404).json({
            success: false,
            message: "Captcha key record not found for update.",
          });
        }

        if (!req.body.siteKey || !req.body.secretKey) {
          return res.status(400).json({
            success: false,
            message: "Both siteKey and secretKey are required for updating.",
          });
        }

        console.log("Updating with data:", req.body);

        // Update existing record with merged ROWID
        const updateData = {
          ROWID,
          S_SITE_KEY: req.body.siteKey,
          S_SECRET_KEY: req.body.secretKey,
        };

        await catalystApp.datastore().table("SYS_CONFIG").updateRow(updateData);

        res.json({
          success: true,
          message: "Captcha keys updated successfully.",
        });
        break;

      case "DELETE":
        if (!recordExists) {
          return res.status(404).json({
            success: false,
            message: "Captcha key record not found for deletion.",
          });
        }

        // Delete the record
        await catalystApp.datastore().table("SYS_CONFIG").deleteRow(ROWID);

        res.json({
          success: true,
          message: "Captcha keys deleted successfully.",
        });
        break;

      default:
        res.status(405).json({
          success: false,
          message: "Method not allowed.",
        });
    }
  } catch (error) {
    console.error("Error in /manageCaptchaKey:", error.message || error);
    res.status(500).json({
      success: false,
      message: "Error processing your request.",
      error: error.message || error,
    });
  }
});
// Endpoint to get the Dynamic Loan Product in the CRM
app.get("/crm/meta/lead/loan-products", async (req, res) => {
  try {
    const layoutId = "794899000000000167";
    const catalystApp = catalyst.initialize(req);
    const cache = catalystApp.cache();
    const segment = cache.segment();

    // Helper function to generate and store a new access token.
    async function generateNewToken() {
      console.log("Access token is null. Generating new token...");
      const newToken = await catalystApp
        .connection(credentials)
        .getConnector("CRMConnector")
        .getAccessToken();
      if (newToken) {
        console.log("New access token generated and storing in cache.");
        await segment.put("ZC_CONN_CRMConnector", newToken, 1);
      }
    }

    // Helper function that polls the cache until a valid token is available.
    async function waitForToken(timeout = 100, maxAttempts = 20) {
      let attempts = 0;
      return new Promise((resolve, reject) => {
        const interval = setInterval(async () => {
          attempts++;
          const cacheObject = await getCacheObjectWithDetails(
            segment,
            "ZC_CONN_CRMConnector"
          );
          const token = cacheObject ? cacheObject.cache_value : null;
          if (token) {
            clearInterval(interval);
            resolve(token);
          } else if (attempts >= maxAttempts) {
            clearInterval(interval);
            reject(new Error("Timeout waiting for token generation."));
          }
        }, timeout);
      });
    }

    // Check the cache for the access token.
    let cacheObject = await getCacheObjectWithDetails(
      segment,
      "ZC_CONN_CRMConnector"
    );
    let accessToken = cacheObject ? cacheObject.cache_value : null;

    // If access token is null, start token generation and wait until it's generated.
    if (!accessToken) {
      // Start token generation asynchronously.
      generateNewToken();

      // Wait for the token to appear in the cache.
      try {
        accessToken = await waitForToken();
      } catch (waitError) {
        return res
          .status(500)
          .send({ message: "Unable to generate access token in time." });
      }
    }

    // Fetch fields for the specified layout
    const response = await axios.get(
      `https://www.zohoapis.com/crm/v7/settings/layouts/${layoutId}?module=Leads`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // console.log("Response",response.data.layouts[0].sections);

    // Extract fields and map to field names, API names, and mandatory status
    const loanProductPicklistValues =
      response.data.layouts[0].sections
        .flatMap((section) => section.fields)
        .find(
          (field) =>
            field.field_label === "Loan Product" &&
            field.data_type === "picklist"
        )
        ?.pick_list_values.map((pv) => pv.display_value) || [];

    res.status(200).send({ loanProductPicklistValues });
  } catch (error) {
    console.error("Error fetching fields:", error.message || error);
    res.status(500).send({ message: "Failed to fetch fields." });
  }
});
module.exports = app;
