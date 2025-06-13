/* global grecaptcha */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import PageUnderMaintenance from "./PageUnderMaintenance";
import PageNotFound from "./PageNotFound";
import axios from "axios";
import { useMemo } from "react";
import { useSelector } from "react-redux";
//import { message } from "antd";

const PageViewer = () => {
  const { pageId, slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [showHoldOnMessage, setShowHoldOnMessage] = useState(false);
  const [pageStatus, setPageStatus] = useState(null);
  const [formDisabled, setFormDisabled] = useState(false); // State to disable form after submission
  const [siteKeyLoaded, setSiteKeyLoaded] = useState(false); // New state for site key
  const [resolvedPageId, setResolvedPageId] = useState(null);
  const [pagename, setPagename] = useState("");

  const captureleadapi = "/server/page_builder_function/submit/form";
  const userDetails = useSelector((state) => state.user);
  console.log("User Details = ", userDetails);

  // Ensure that we only run the page view logic the first time the page is opened.
  const isFirstOpen = useMemo(() => {
    const key = `pageOpened-${pageId}`;
    const pageOpened = localStorage.getItem(key);
    if (!pageOpened) {
      localStorage.setItem(key, "true");
      return true;
    }
    return false;
  }, [pageId]);

  useEffect(() => {
    const updateClickCount = async () => {
      // Check if it is the first open, and userDetails is either null or empty
      if (
        isFirstOpen &&
        (userDetails === null || Object.keys(userDetails).length === 0)
      ) {
        // console.log("Incrementing click count for page:", pageId);

        try {
          const response = await axios.put(
            `/server/page_builder_function/view-count?slug=${pageId}`
          );
          // console.log("Click count updated:", response.data);
        } catch (error) {
          console.error("Error updating click count:", error);
        }
      }
    };

    updateClickCount();
  }, [isFirstOpen, pageId, userDetails]);

  // Function to map form data to JSON structure
  const getUtmParamsFromHash = () => {
    const hash = window.location.hash; // e.g. "#/page/10918000000059332?utm_source=Facebook&utm_medium=social"
    const [, queryString] = hash.split("?");
    if (!queryString) return {};

    const params = new URLSearchParams(queryString);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    };
  };

  const mapFormDataToJson = (formData) => {
    const utmParams = getUtmParamsFromHash();
    const currentPageId = resolvedPageId ?? pageId;
    // console.log("All Paramaters", utmParams);
    return {
      ...formData,
      pageId: currentPageId,
      Landing_Page_Name: pagename || "null",
      otpVerified: sessionStorage.getItem("JsonOTP"),
      [sessionStorage.getItem("loanproductname")]:
        sessionStorage.getItem("loanProduct"),
      ...utmParams,
    };
  };

  const loadRecaptchaScript = () => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  };

  const fetchSiteKey = async () => {
    try {
      const response = await axios.get("/server/verification/manageCaptchaKey");

      if (response.data.success) {
        sessionStorage.setItem("site-key", response.data.siteKey);
        setSiteKeyLoaded(true);
      }
    } catch (error) {
      console.log("Error Fetching Site Key = ", error);
      setSiteKeyLoaded(true);
    }
  };

  useEffect(() => {
    fetchSiteKey();
    sessionStorage.setItem("JsonOTP", false);
    loadRecaptchaScript();
  }, []);

  useEffect(() => {
    if (!siteKeyLoaded) return;

    //  console.log("Site key is loaded, proceeding with fetchPageContent.");
    const fetchPageContent = async () => {
      try {
        if (!pageId && !slug) {
          console.error("Both pageId and slug are undefined.");
          setPageStatus("Deleted");
          setLoading(false);
          return;
        }

        // Check if pageId is valid (you can tweak the regex if IDs are not numbers)
        const isValidPageId = pageId && /^\d{8,}$/.test(pageId); // Adjust the digit count as needed
        const identifier = pageId || slug;
        const isSlug = !isValidPageId;

        //   console.log("Identifier:", identifier);
        //  console.log("Is Slug:", isSlug);

        const metadataURL = isSlug
          ? `/server/page_builder_function/metadata/slug/${identifier}`
          : `/server/page_builder_function/metadata/${identifier}`;

        const metadataResponse = await fetch(metadataURL);
        //  console.log("metaresponse", metadataResponse);

        if (!metadataResponse.ok) {
          throw new Error("Failed to fetch page metadata");
        }

        const metadata = await metadataResponse.json();
        //  console.log("Main meta data", metadata);
        const status = metadata.data[0].Status.toUpperCase();
        const idPage = metadata.data[0].ROWID;
        setResolvedPageId(idPage);

        if (metadata.success && status === "PUBLISHED") {
          const pageTitle = metadata.data[0].pageTitle;
          setPagename(metadata.data[0].PageName);
          //   console.log(metadata.data[0].PageName);
          //  console.log("New owner page title", pageTitle);

          const newTitle = document.createElement("title");
          newTitle.textContent = pageTitle;
          document.head.appendChild(newTitle);

          let metaDataContent = metadata.data[0]?.stepformdata;
          let dynamicFormHtml = "";
          try {
            metaDataContent = JSON.parse(metaDataContent);
            if (Array.isArray(metaDataContent) && metaDataContent.length > 0) {
              dynamicFormHtml = createDynamicForm(metaDataContent);
            }
          } catch (error) {
            console.error("Failed to parse metadata content as JSON", error);
          }
          //  console.log("getting the page id in the code", resolvedPageId);

          const contentResponse = await fetch(
            `/server/page_builder_function/page/${resolvedPageId}`
          );

          if (!contentResponse.ok) {
            throw new Error("Failed to fetch page content");
          }

          let pageContent = await contentResponse.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(pageContent, "text/html");

          // Inject Bootstrap and Tailwind CSS/JS
          const bootstrapCSSLink = doc.createElement("link");
          bootstrapCSSLink.rel = "stylesheet";
          bootstrapCSSLink.href =
            "https://digital.axisfinance.in/css/bootstrap.min.css";
          doc.head.appendChild(bootstrapCSSLink);

          const tailwindJS = doc.createElement("script");
          tailwindJS.src = "https://digital.axisfinance.in/js/tailwind.js";
          doc.head.appendChild(tailwindJS);

          const bootstrapJSLink = doc.createElement("script");
          bootstrapJSLink.src =
            "https://digital.axisfinance.in/js/bootstrap.bundle.min.js";
          bootstrapJSLink.defer = true;
          doc.body.appendChild(bootstrapJSLink);

          // Replace dynamic form
          const dynamicFormDiv = doc.querySelector(".dynamic-form");
          if (dynamicFormDiv) {
            dynamicFormDiv.outerHTML = dynamicFormHtml;
          }

          const finalHtml = doc.documentElement.outerHTML;
          document.open();
          document.write(finalHtml);
          setTimeout(() => {
            const newTitle = document.createElement("title");
            newTitle.textContent = pageTitle;
            document.head.appendChild(newTitle);
          }, 0);
          document.close();

          setTimeout(setupEventListeners, 100);
        } else if (status === "DRAFT") {
          setPageStatus("Draft");
        } else {
          setPageStatus("Deleted");
        }
      } catch (error) {
        console.warn("Error fetching page content:", error);
        // setPageStatus("Deleted");
      } finally {
        setLoading(false);
      }
    };

    const createDynamicForm = (formMetadata) => {
      setValidationVariables(formMetadata);

      let formHtml = "";
      const groupedByStep = formMetadata.reduce((acc, field) => {
        acc[field.step] = acc[field.step] || [];
        acc[field.step].push(field);
        return acc;
      }, {});

      const totalSteps = Object.keys(groupedByStep).length;
      const minHeight = "400px"; // Adjust this value to set a fixed form height

      Object.keys(groupedByStep).forEach((step) => {
        const hasOtpValidation = groupedByStep[step].some(
          (field) => field.otpValidation === "yes"
        );
        formHtml += `<div class="form-step" data-step="${step}" data-otp-validated="${!hasOtpValidation}" style="display: ${
          step === "1" ? "block" : "none"
        }; min-height: ${minHeight};">`;

        groupedByStep[step].forEach((field) => {
          formHtml += renderField(field);
        });

        // Buttons Section
        formHtml += `<div class="mt-4 flex justify-center" style="display: flex; gap: 20px;">`;

        // If step < totalSteps (Intermediate Steps)
        if (step < totalSteps && totalSteps > 1) {
          if (step > 1) {
            formHtml += `
              <button 
                id="pavan-back-button" 
                type="button" 
                onclick="prevStep(${step})" 
                class="px-4 py-2 bg-gray-400 text-white rounded" 
                style="cursor: pointer;" 
                ${formDisabled ? "disabled" : ""}>
                Back
              </button>`;
          }

          formHtml += `
            <button 
              type="button" 
              onclick="nextStep(${step})" 
              style="background-color:#97144d; color: white;" 
              id="nextButton${step}" 
              class="px-4 py-2 rounded bg-blue-300 text-white cursor-pointer" 
              ${formDisabled ? "disabled" : ""}>
              Next
            </button>`;
        }

        // If step == totalSteps (Final Step)
        if (step == totalSteps) {
          formHtml += `
          <div style="text-align: center; margin-top: 20px; width: 100%;">
            <!-- Checkbox Section -->
            <div style="text-align: left; margin-bottom: 20px;">
              <input 
                type="checkbox" 
                id="authorizeCheckbox2" 
                name="authorizeCheckbox" 
                required 
                class="mr-2 h-6 w-6" 
                onchange="handleCheckboxChange2()" 
                style="pointer-events: auto; cursor: pointer; vertical-align: middle; accent-color:green; appearance: auto;" 
              />
              <label 
                for="authorizeCheckbox2" 
                class="text-sm" 
                style="white-space: normal; line-height: 1.5; display: inline;">
                I authorise Fristine Infotech Ltd (FI) to contact me for products and services offered by FI or any service provider regarding marketing schemes, various other financial and insurance products, etc. in any of the following methods: (a) Telephone (b) E-mail (c) SMS (d) Whatsapp.
              </label>
              <div id="checkbox-error-message2" class="text-red-500 text-sm mt-2" style="color: red;"></div>
            </div>
            
            <!-- Buttons Section -->
            <div style="margin-top: 20px; display: flex; justify-content: center; gap: 20px;">
              ${
                totalSteps > 1
                  ? `<button 
                      id="pavan-back-button" 
                      type="button" 
                      onclick="prevStep(${step})" 
                      class="px-4 py-2 bg-gray-400 text-white rounded" 
                      style="cursor: pointer;" 
                      ${formDisabled ? "disabled" : ""}>
                      Back
                    </button>`
                  : ""
              }
              <button 
                type="button" 
                onclick="submitForm(${step})" 
                id="submitButton${step}" 
                style="padding: 12px 24px; background-color: rgb(49, 105, 190); color: white; border-radius: 8px; cursor: pointer; transition: background-color 0.3s ease;">
                SUBMIT
              </button>
            </div>
          </div>`;
        }

        formHtml += `</div></div>`;
      });

      formHtml += `<div class="form-submit-message hidden text-green-600 font-bold mt-4">Form submitted successfully!</div>`;
      return `<form class="dynamic-form container mt-4">${formHtml}<style>.hide-display-bar::-webkit-scrollbar { display: none; } </style></form>
      <div id="mainnotification" class="mt-2 text-red-500 text-sm text-center"></div>`;
    };

    const setValidationVariables = (formMetadata) => {
      // Clear all relevant local storage keys before setting new variables
      //console.log("Clearing previous validation states from sessionStorage...");
      sessionStorage.removeItem("phoneVal");
      sessionStorage.removeItem("pincodeVal");
      sessionStorage.removeItem("employeeVal");
      sessionStorage.removeItem("captchaVal");
      sessionStorage.removeItem("amountVal"); // Add this line to clear amount validation state
      //console.log("Previous validation states cleared.");

      formMetadata.forEach((field) => {
        switch (field.type) {
          case "amountValidator":
            const amountState = {
              step: field.step,
              validation: true, // Always set validation to true for amountValidator
              minValue: field.minValue,
              maxValue: field.maxValue,
            };
            sessionStorage.setItem("amountVal", JSON.stringify(amountState));
            //console.log("Amount Validation State Updated:", amountState);
            break;

          case "phone":
            const phoneState = {
              step: field.step,
              validation: field.otpValidation === "yes", // Set validation to true only if otpValidation is "yes"
            };
            sessionStorage.setItem("phoneVal", JSON.stringify(phoneState));
            //console.log("Phone Validation State Updated:", phoneState);
            break;

          case "pincode":
            const pincodeState = {
              step: field.step,
              validation: true, // Always set validation to true for pincode
            };
            sessionStorage.setItem("pincodeVal", JSON.stringify(pincodeState));
            //console.log("Pincode Validation State Updated:", pincodeState);
            break;

          case "employeeType":
            const employeeState = {
              step: field.step,
              validation: true, // Always set validation to true for employeeType
            };
            sessionStorage.setItem(
              "employeeVal",
              JSON.stringify(employeeState)
            );
            //console.log("Employee Type Validation State Updated:", employeeState);
            break;

          case "captcha":
            const captchaState = {
              step: field.step,
              validation: field.captchaValidation === "yes", // Set validation to true only if captchaValidation is "yes"
            };
            sessionStorage.setItem("captchaVal", JSON.stringify(captchaState));
            // console.log("Captcha Validation State Updated:", sessionStorage.getItem("site-key"));
            break;

          default:
            //console.log(`No validation logic for field type: ${field.type}`);
            break;
        }
      });
    };

    const renderField = (field) => {
      let fieldHtml = "";

      // Render the field label for all fields
      if (field.type !== "captcha" && field.type !== "loanProduct") {
        fieldHtml += `<label class="block text-gray-700 font-bold mb-2">${field.name}</label>`;
      }

      switch (field.type) {
        case "loanProduct":
          sessionStorage.setItem("loanProduct", field.loanProductType);
          sessionStorage.setItem("loanproductname", field.name);
          break;

        case "amountValidator":
          //console.log("Amount Validator = ", field);
          fieldHtml += `
            <div>
              <input 
                type="number" 
                name="${field.name}" 
                placeholder="Enter Amount" 
                value="${field.value || ""}" 
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" 
                required 
                id="amount" 
                oninput="validateAmountField(${field.step}, '${field.name}', ${
            field.minValue
          }, ${field.maxValue})" 
              />
              <div id="error-message-${
                field.step
              }" class="text-red-500 text-sm mt-2"></div>
            </div>
          `;
          break;

        // Other cases remain unchanged...

        case "captcha":
          // Conditionally render the Google reCAPTCHA widget based on `captchaValidation`
          if (field.captchaValidation === "yes") {
            //   captcha = true;

            // Create a message div to show any validation errors for captcha
            fieldHtml += `
              <div id="captcha-message-pavan" class="text-red-500 text-sm mt-2"></div>
              <div class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300">
                <!-- Google reCAPTCHA widget -->
                <div class="g-recaptcha" data-sitekey="${sessionStorage.getItem(
                  "site-key"
                )}"></div>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
              </div>
            `;
          }
          break;

        case "radio":
          // Render radio buttons for each option
          fieldHtml += `<div class="flex flex-col">`;
          field.options.forEach((option, index) => {
            fieldHtml += `
                    <label class="inline-flex items-center">
                        <input 
                            type="radio" 
                            name="${field.name}" 
                            value="${option}" 
                            class="form-radio text-blue-600"
                            id="${field.name}-${index}" 
                        />
                        <span class="ml-2">${option}</span>
                    </label>
                `;
          });
          fieldHtml += `</div>`;
          break;

        case "text":
          // Render a text field with input restriction (only letters and spaces allowed)
          fieldHtml += `
      <input 
        type="text" 
        name="${field.name}" 
        placeholder="Enter your ${field.name}" 
        class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" 
        required 
        id="textField${field.name}"
        oninput="allowOnlyLettersAndSpaces(event)" />
    `;
          break;

        case "date":
          // Calculate the min and max date based on the user's age (24 to 55)
          const today = new Date();
          const minDate = new Date(today.getFullYear() - 55, 0, 1); // Set the min date to Jan 1 of the year (55 years ago)
          const maxDate = new Date(today.getFullYear() - 24, 11, 31); // Set the max date to Dec 31 of the year (24 years ago)

          const minDateString = minDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
          const maxDateString = maxDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD

          // Render the date input with age restriction and readonly input
          fieldHtml += `
              <input 
                type="date" 
                onkeydown="return false"
                name="${field.name}" 
                placeholder="Enter your ${field.name}" 
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" 
                required 
                min="${minDateString}" 
                max="${maxDateString}"
                readonly
                onfocus="this.removeAttribute('readonly');"
                onblur="this.setAttribute('readonly', 'readonly');" />
            `;
          break;

        case "number":
          // Restrict to exactly field.digits digits
          fieldHtml += `
    <input
      type="text"
      name="${field.name}"
      placeholder="Enter your ${field.name}"
      class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
      required
      maxlength="${field.digits}"
      oninput="
        this.value = this.value
          .replace(/[^0-9]/g, '')
          .slice(0, ${field.digits});
      "
    />
  `;
          break;

        case "email":
          fieldHtml += `<input type="${field.type}" name="${field.name}" placeholder="Enter your ${field.name}" class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required/>
          <div id="error-message-for-email" class="text-red-500 text-sm mt-2"></div>`;
          break;

        case "phone":
          // Phone field with numeric input restriction and 10-digit limit
          if (field.otpValidation === "yes") {
            // Flex container to align input and button in the same row
            fieldHtml += `
                <div class="flex items-center space-x-2">
                  <input type="text" id="ph" name="${field.name}" minlength="10" maxlength="10" pattern="^[1-9][0-9]{9}$" placeholder="Enter your ${field.name}" 
                    class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" 
                    required oninput="this.value=this.value.replace(/[^0-9]/g, '');" />
                  
                   <button type="button" style="height:40px; background-color:#97144d;" onclick="getOTP('${field.name}', ${field.step})" id="otpButton${field.step}" 
class="px-4 bg-yellow-500 text-white rounded text-xs whitespace-nowrap">          <span id="otpButtonText${field.step}">Get OTP</span>
          <div id="otpButtonSpinner${field.step}" class="spinner-border spinner-border-sm text-white" role="status" style="display: none;"></div>
        </button>
                </div>
                <div id="error-message-for-phone" class="text-red-500 text-sm mt-2"></div>
              `;
          } else {
            sessionStorage.setItem("JsonOTP", false);
            fieldHtml += `
                <input type="text" id="ph" name="${field.name}" minlength="10" maxlength="10" pattern="^[1-9][0-9]{9}$" 
                  placeholder="Enter your ${field.name}" class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" 
                  required oninput="this.value=this.value.replace(/[^0-9]/g, '');" />
                <div id="error-message-for-phone" class="text-red-500 text-sm mt-2"></div>
              `;
          }

          // OTP functionality (other buttons remain unchanged)
          if (field.otpValidation === "yes") {
            sessionStorage.setItem("otpVarified", true);

            fieldHtml += `
                <div id="otpInputDiv${field.step}" class="mt-4 hidden">
                  <input type="text" name="OTP" id="otpInput${field.step}" placeholder="Enter OTP" class="px-2 py-1 border rounded w-full" />
                  <div id="otpTimer${field.step}" class="text-gray-500 text-sm mt-1 hidden"></div>
                  <div class="flex justify-center items-center mt-4 space-x-4">
                    
                    <button type="button" onclick="submitOtp('${field.name}',${field.step})" id="submitOtpButton${field.step}" class="px-4 py-2 bg-green-500 text-white rounded">
                      <span id="submitOtpButtonText${field.step}">Submit OTP</span>
                      <div id="submitOtpButtonSpinner${field.step}" class="spinner-border spinner-border-sm text-white" role="status" style="display: none;"></div>
                    </button>
          
                    <button type="button" onclick="resendOTP(${field.step},'${field.name}')" id="resendOtpButton${field.step}" class="px-4 py-2 bg-gray-500 text-white rounded" style="cursor: not-allowed;" disabled>
                      <span id="resendOtpButtonText${field.step}">Resend OTP</span>
                      <div id="resendOtpButtonSpinner${field.step}" class="spinner-border spinner-border-sm text-white" role="status" style="display: none;"></div>
                    </button>
          
                  </div>
                </div>
                <div id="otp-message" class="mt-2 text-red-500"></div>
              `;
          } else {
            sessionStorage.setItem("otpVarified", false);
          }
          break;

        case "dropdown":
          fieldHtml += `<select name="${
            field.name
          }" required class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" ${
            formDisabled ? "disabled" : ""
          }>${field.options
            .map((option) => `<option value="${option}">${option}</option>`)
            .join("")}</select>`;
          break;
        case "employeeType":
          fieldHtml += `<select name="${
            field.name
          }" required class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" ${
            formDisabled ? "disabled" : ""
          }>${field.options
            .map((option) => `<option value="${option}">${option}</option>`)
            .join("")}</select>`;
          fieldHtml += `<div id="salaryInputDiv${field.step}" class="mt-2">
                          <label class="block text-gray-700 font-bold mb-2">Loan Amount</label>
                          <input type="number" id="salaryInput${field.step}" 
                                          placeholder="Enter Loan Amount"

                          name="salary" required class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" oninput="validateSalary(${
                            field.step
                          }, ${field.minSalary})" data-minsalary="${
            field.minSalary
          }" ${formDisabled ? "disabled" : ""}/>
                          <small class="text-red-500 hidden" id="salaryError${
                            field.step
                          }">You are not eligible. Minimum salary should be ${
            field.minSalary
          }.</small>
                        </div>`;
          break;
        case "pincode":
          fieldHtml += `
    <input 
      placeholder="Enter Your Pincode"
      type="text" 
      name="${field.name}" 
      required 
      class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" 
      onchange="fetchAddress(${field.step}, this.value)" 
      oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 6);" 
      ${formDisabled ? "disabled" : ""} 
    />
    <div id="pincode-message-${field.step}" class="text-red-500 text-sm mt-2 ">
      <!-- This will display error messages related to the pincode -->
    </div>
  `;
          break;

        default:
          fieldHtml += `<input type="text" name="${
            field.name
          }" required class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" ${
            formDisabled ? "disabled" : ""
          }/>`;
      }

      return `<div class="form-field mb-4">${fieldHtml}</div>`;
    };

    window.handleCheckboxChange = () => {
      //  console.log("check box clicked");
      const otpButton = document.querySelector(".get-otp-button");
      const authorizeCheckbox = document.getElementById("authorizeCheckbox");

      // If checkbox is checked, enable the Get OTP button and disable the checkbox
      if (authorizeCheckbox.checked) {
        otpButton.hidden = false; // Enable the Get OTP button
        authorizeCheckbox.disabled = true; // Disable the checkbox
      } else {
        otpButton.disabled = true; // Disable the Get OTP button
        authorizeCheckbox.disabled = false; // Enable the checkbox
      }
    };

    window.handleCheckboxChange2 = () => {
      const authorizeCheckbox = document.getElementById("authorizeCheckbox2");

      if (authorizeCheckbox.checked) {
        authorizeCheckbox.style.pointerEvents = "none";
        authorizeCheckbox.style.accentColor =
          "rgb(34 197 94 / var(--tw-bg-opacity, 1))";
      } else {
        authorizeCheckbox.style.pointerEvents = "auto";
        authorizeCheckbox.style.cursor = "pointer";
      }
    };

    window.script = function () {
      // Find the burger icon and mobile menu elements
      const burgerIcon = this.querySelector(".burger-icon");
      const mobileMenu = this.querySelector(".mobile-menu");

      // When the burger icon is clicked, toggle the mobile menu visibility
      if (burgerIcon) {
        burgerIcon.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden"); // Toggle visibility of the mobile menu
          // console.log('Burger icon clicked. Mobile menu toggled!');
          // You can run other scripts here as well
        });
      }
    };

    window.allowOnlyLettersAndSpaces = (event) => {
      const value = event.target.value;
      //console.log("Input value:", value);  // Check what the value is when you type
      const cleanedValue = value.replace(/[^a-zA-Z\s]/g, "");
      event.target.value = cleanedValue;
    };

    window.fetchAddress = async (step, pincode) => {
      const pincodediv = document.getElementById(`pincode-message-${step}`);
      //console.log("Got PinCode error div = ", pincodediv)

      const addressDiv = document.getElementById(`addressDiv${step}`);
      //console.log("Address Div", addressDiv);
      const addressInput = document.getElementById(`addressInput${step}`);
      // //console.log("Address Input = ", addressInput);
      // const addressError = document.getElementById(`addressError${step}`);

      //console.log(addressDiv);
      try {
        const response = await fetch(
          `/server/page_builder_function/pincode/${pincode}`
        );
        const data = await response.json();
        //console.log("Address Data", data);

        // Check if data exists
        if (data.data) {
          //console.log("Matched Pincode", data.data);

          // Ensure addressInput is valid and accessible
          // if (addressInput) {
          //   //console.log("Inside if");
          //   addressInput.value = `${data.data.area_name}, ${data.data.city}, ${data.data.state}, ${data.data.country}`;
          // } else {
          //   console.error("Address input not found.");
          // }

          // Hide error message if data is found
          // if (addressError) {
          //   addressError.classList.add("hidden");
          // }

          // Update pincode validation state
          const pincodeState = {
            step: step,
            validation: false, // Update pincode validation to false
          };
          sessionStorage.setItem("pincodeVal", JSON.stringify(pincodeState));
          //console.log("Updated Pincode Validation State:", pincodeState);
        } else {
          if (pincodediv) {
            //console.log("Yes");
            pincodediv.innerHTML = "Please Enter A Valid PinCode";
            setTimeout(() => {
              pincodediv.innerHTML = ""; // Clear message after a delay
            }, 3000);
          }

          // If no address data is returned, clear the input and show the error
          if (addressInput) {
            addressInput.value = "";
          }
          // if (addressError) {
          //   addressError.classList.remove("hidden");
          // }
        }
      } catch (error) {
        console.error("Error fetching address:", error);
        // In case of error, clear the input and show the error
        if (addressInput) {
          addressInput.value = "";
        }
        // if (addressError) {
        //   addressError.classList.remove("hidden");
        // }
      }
    };

    const setupEventListeners = () => {
      window.verifyCaptcha = (step) => {
        //console.log("Captcha at step", step);
        //console.log("Validating...");

        // Send the POST request to the server
        fetch("/server/dental_management_function/validCaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json()) // Parse the JSON response
          .then((data) => {
            //console.log("Captcha Response =", data);
            if (data.success) {
              //console.log('Captcha verified successfully!');

              // Update captcha state in local storage
              const captchaState = {
                step: step,
                validation: false, // Set validation to false after successful verification
              };
              sessionStorage.setItem(
                "captchaVal",
                JSON.stringify(captchaState)
              );
              //console.log("Captcha Validation State Updated:", captchaState);
            } else {
              //console.log('Captcha verification failed');
            }
          })
          .catch((error) => {
            console.error("Error verifying captcha:", error);
          });
      };

      window.getOTP = async (fieldName, step) => {
        const otpInputDiv = document.getElementById(`otpInputDiv${step}`);
        const otpButton = document.getElementById(`otpButton${step}`);
        const spinner = document.getElementById(`otpButtonSpinner${step}`);
        const buttonText = document.getElementById(`otpButtonText${step}`); // Define buttonText correctly

        const resendOtpButton = document.getElementById(
          `resendOtpButton${step}`
        );
        const otpTimer = document.getElementById(`otpTimer${step}`);
        const notificationDiv = document.getElementById(`otp-message`);

        const mobileinput = document.getElementById(`ph`);
        const mobileNumber = document.querySelector(
          `input[name="${fieldName}"]`
        ).value;

        // Clear notifications
        if (notificationDiv) notificationDiv.innerHTML = "";

        // Validate mobile number
        if (!/^\d{10}$/.test(mobileNumber)) {
          if (notificationDiv) {
            // console.log("Yes");
            notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">Please enter a valid 10-digit mobile number.</p>`;
          }
          return; // Stop execution if the mobile number is invalid
        } else {
          // console.log("Disabling get otp button...");
          // otpButton.disabled = true;
          // otpButton.style.cursor = "not-allowed";
          try {
            // Make the OTP generation API request
            // Show the spinner and hide the text
            spinner.style.display = "inline-block";
            buttonText.style.display = "none";
            const response = await axios.post(
              "/server/verification/otp/generate",
              {
                mobile: mobileNumber,
              }
            );
            //  console.log("Response = ", response);
            // Check the response
            if (response.data.message === "OTP generated successfully.") {
              //  console.log("Got otp");
              // Show success notification
              if (notificationDiv) {
                notificationDiv.innerHTML = `<p class="text-green-500 text-sm mt-2">OTP has been Sent To Your Phone No. Please check your Phone.</p>`;
              }
              if (mobileinput) {
                //  console.log("Got mobile input disabling it");
                mobileinput.readOnly = true;
                mobileinput.style.cursor = "not-allowed"; // Change cursor to indicate non-editable
              }

              // Additional actions like starting a timer can be added here
              // Example: Start a timer to enable resend OTP button after some time
            } else {
              // Show failure notification
              if (notificationDiv) {
                notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">Failed to generate OTP. Please try again.</p>`;
              }
            }
          } catch (error) {
            // Handle errors and show appropriate notifications
            if (notificationDiv) {
              if (error.response) {
                // API responded with a status code
                notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">Error: ${
                  error.response.data || "Failed to generate OTP."
                }</p>`;
              } else if (error.request) {
                // No response received
                notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">No response from server. Please try again later.</p>`;
              } else {
                // Other errors
                notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">An error occurred: ${error.message}</p>`;
              }
            }
          } finally {
            // Optionally reset or manage buttons/timers
            spinner.style.display = "none";
            buttonText.style.display = "inline-block";
          }
        }

        // Show notification for OTP generation
        // if (notificationDiv) {
        //   notificationDiv.innerHTML = `<p class="text-blue-500 text-sm mt-2">Sending OTP... Please wait.</p>`;
        // }

        // Hide Validate Phone Number button and show OTP input
        if (otpButton) otpButton.classList.add("hidden");
        if (otpInputDiv) otpInputDiv.classList.remove("hidden");

        // Reset and start timer
        let timeLeft = 30;
        if (resendOtpButton) {
          resendOtpButton.disabled = true;
          resendOtpButton.style.cursor = "not-allowed"; // Change cursor to indicate clickable
        }
        if (otpTimer) {
          otpTimer.textContent = `00:${timeLeft}`;
          otpTimer.classList.remove("hidden");
        }

        const timerInterval = setInterval(() => {
          timeLeft -= 1;
          if (otpTimer) {
            otpTimer.textContent = `00:${timeLeft.toString().padStart(2, "0")}`;
          }
          if (
            timeLeft <= 0 &&
            sessionStorage.getItem("otpVarified") == "true"
          ) {
            //  console.log("still otp not varified showing resend message");
            clearInterval(timerInterval);
            if (resendOtpButton) {
              resendOtpButton.disabled = false;
              resendOtpButton.style.cursor = "pointer";
              resendOtpButton.classList.remove("bg-gray-500"); // Remove grey color
              resendOtpButton.classList.add("bg-blue-500"); // Add blue color
            }
            if (otpTimer) otpTimer.classList.add("hidden");
            if (notificationDiv) {
              notificationDiv.innerHTML = `<p class="text-green-500 text-sm mt-2">You can resend the OTP now.</p>`;
            }
          }
        }, 1000);
      };

      window.submitOtp = async (fieldName, step) => {
        //const submitOtpButton = document.getElementById(`submitOtpButton${step}`);
        const spinner = document.getElementById(
          `submitOtpButtonSpinner${step}`
        );
        const buttonText = document.getElementById(
          `submitOtpButtonText${step}`
        );
        //console.log("Clicked Submit Button");
        const otpValue = document.getElementById(`otpInput${step}`).value;
        const otpInputDiv = document.getElementById(`otpInputDiv${step}`);
        const otpButton = document.getElementById(`otpButton${step}`);
        const submitOtpButton = document.getElementById(
          `submitOtpButton${step}`
        );
        const resendOtpButton = document.getElementById(
          `resendOtpButton${step}`
        );
        const otpTimer = document.getElementById(`otpTimer${step}`);
        const notificationDiv = document.getElementById("otp-message");
        const currentStepElement = document.querySelector(
          `.form-step[data-step="${step}"]`
        );
        const nextButton = document.getElementById(`nextButton${step}`);
        const phoneInput = document.getElementById("ph"); // Assuming the input name is "phone"

        const mobileNumber = document.querySelector(
          `input[name="${fieldName}"]`
        ).value;

        //console.log("Got Phone Input", phoneInput);

        // Clear existing notifications
        if (notificationDiv) notificationDiv.innerHTML = "";

        try {
          spinner.style.display = "inline-block";
          buttonText.style.display = "none";
          // Validate OTP using Axios
          const response = await axios.post(
            "/server/verification/otp/validate",
            {
              otp: otpValue,
              mobile: mobileNumber, // OTP entered by the user
            }
          );
          // console.log("Validation response = ", response);
          if (response.data.message === "OTP is valid.") {
            sessionStorage.setItem("otpVarified", false);
            sessionStorage.setItem("JsonOTP", true);

            //   console.log("Validation successfull");
            // Success: Handle OTP validation success
            if (notificationDiv) {
              //   console.log("got div");
              notificationDiv.innerHTML = `<p class="text-green-500 text-sm mt-2">OTP validated successfully! You can proceed to the next step.</p>`;
            }
            // setTimeout(() => {
            //   notificationDiv.innerHTML = "";
            // }, 3000);

            // Hide OTP-related elements
            if (otpInputDiv) otpInputDiv.classList.add("hidden");
            if (otpButton) otpButton.classList.add("hidden");
            if (submitOtpButton) submitOtpButton.classList.add("hidden");
            if (resendOtpButton) resendOtpButton.classList.add("hidden");
            if (otpTimer) otpTimer.classList.add("hidden");

            // Disable the phone number field
            if (phoneInput) {
              phoneInput.disabled = true; // Make phone number field non-editable
              //console.log("Phone number field disabled after OTP validation");
            }

            // Mark OTP as validated
            if (currentStepElement) {
              currentStepElement.setAttribute("data-otp-validated", "true");
            }

            // Update phone validation state in local storage
            const phoneState = {
              step: step,
              validation: false, // Set validation to false after successful OTP verification
            };
            sessionStorage.setItem("phoneVal", JSON.stringify(phoneState));
            //console.log("Phone Validation State Updated:", phoneState);

            // Enable the Next button
            if (nextButton) {
              nextButton.disabled = false;
              nextButton.classList.remove("opacity-50", "cursor-not-allowed");
              nextButton.classList.add(
                "cursor-pointer",
                "bg-blue-500",
                "text-white"
              );
              //console.log(`Next button enabled for step ${step}`); // Log button enablement
            }

            // Clear any "resend OTP" messages
            if (notificationDiv) {
              notificationDiv.innerHTML = `<p class="text-green-500 text-sm mt-2">OTP validated successfully! You can proceed to the next step.</p>`;
              // setTimeout(() => {
              //   notificationDiv.innerHTML = ""; // Clear message after a delay
              // }, 3000);
            }
            // Additional success logic here (e.g., hiding OTP elements, enabling the next button)
          } else {
            //   console.log("inside else");
            if (notificationDiv) {
              notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">${
                response.data || "Invalid OTP. Please try again."
              }</p>`;
            }
          }
        } catch (error) {
          if (error.status === 400) {
            //  console.log("Error is 400");
            if (notificationDiv) {
              //  console.log("Got div");
              notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">${
                error.response.data.message || "Invalid OTP. Please try again."
              }</p>`;
            }
          }
        } finally {
          spinner.style.display = "none";
          buttonText.style.display = "inline-block";
        }
      };

      window.resendOTP = async (step, fieldName) => {
        const OtpTimer = document.getElementById(`otpTimer${step}`);

        const resendbutton = document.getElementById(`resendOtpButton${step}`);
        if (resendbutton) {
          resendbutton.disabled = false;
          resendbutton.style.cursor = "pointer";
          resendbutton.classList.remove("bg-blue-500"); // Remove grey color
          resendbutton.classList.add("bg-gray-500"); // Add blue color
        }
        const spinner = document.getElementById(
          `resendOtpButtonSpinner${step}`
        );
        const buttonText = document.getElementById(
          `resendOtpButtonText${step}`
        );
        //  console.log("Field = ", fieldName);

        const notificationDiv = document.getElementById(`otp-message`);
        const mobileNumber = document.querySelector(
          `input[name="${fieldName}"]`
        ).value;

        //  console.log("Number", mobileNumber);

        if (!/^\d{10}$/.test(mobileNumber)) {
          if (notificationDiv) {
            //   console.log("Yes");
            notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">Please enter a valid 10-digit mobile number.</p>`;

            // Set a timeout to clear the notification after 3 seconds
            setTimeout(() => {
              notificationDiv.innerHTML = ""; // Clear the notification message
            }, 3000); // 3000 milliseconds = 3 seconds
          }
          return; // Stop execution if the mobile number is invalid
        } else {
          //   console.log("Disabling get otp button...");
          // otpButton.disabled = true;
          // otpButton.style.cursor = "not-allowed";
          try {
            // Make the OTP generation API request
            spinner.style.display = "inline-block";
            buttonText.style.display = "none";
            const response = await axios.post(
              "/server/verification/otp/regenerate",
              {
                mobile: mobileNumber,
              }
            );
            //   console.log("Response = ", response);
            // Check the response
            if (response.data.message === "OTP regenerated successfully.") {
              if (resendbutton) {
                resendbutton.disabled = true;
                resendbutton.style.cursor = "not-allowed";
              }
              let timeleft = 30;
              if (OtpTimer) {
                OtpTimer.textContent = `00:${timeleft}`;
                OtpTimer.classList.remove("hidden");
              }

              const timerInterval2 = setInterval(() => {
                timeleft -= 1;
                if (OtpTimer) {
                  OtpTimer.textContent = `00:${timeleft
                    .toString()
                    .padStart(2, "0")}`;
                }
                if (
                  timeleft <= 0 &&
                  sessionStorage.getItem("otpVarified") == "true"
                ) {
                  //    console.log("still otp not varified showing resend message");
                  clearInterval(timerInterval2);
                  if (OtpTimer) OtpTimer.classList.add("hidden");
                  if (notificationDiv) {
                    notificationDiv.innerHTML = `<p class="text-green-500 text-sm mt-2">You can resend the OTP now.</p>`;
                  }

                  if (resendbutton) {
                    resendbutton.disabled = false;
                    resendbutton.style.cursor = "pointer";
                    resendbutton.classList.remove("bg-gray-500"); // Remove grey color
                    resendbutton.classList.add("bg-blue-500"); // Add blue color
                  }
                }
              }, 1000);
              //   console.log("Got otp");
              // Show success notification
              if (notificationDiv) {
                notificationDiv.innerHTML = `<p class="text-green-500 text-sm mt-2">OTP has been Sent To Your Phone No. Please check your Phone.</p>`;
              }
            } else if (response.data.message === "MAXREGEN") {
              if (notificationDiv) {
                notificationDiv.innerHTML = `<p class="text-green-500 text-sm mt-2">Oops! You've tried regenerating the OTP too many times. Please wait a while before trying again.</p>`;
              }
            } else {
              // Show failure notification
              if (notificationDiv) {
                notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">Failed to generate OTP. Please try again.</p>`;
              }
            }
          } catch (error) {
            // Handle errors and show appropriate notifications
            if (notificationDiv) {
              if (error.response) {
                // API responded with a status code
                notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">Error: ${
                  error.response.data || "Failed to generate OTP."
                }</p>`;
              } else if (error.request) {
                // No response received
                notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">No response from server. Please try again later.</p>`;
              } else {
                // Other errors
                notificationDiv.innerHTML = `<p class="text-red-500 text-sm mt-2">An error occurred: ${error.message}</p>`;
              }
            }
          } finally {
            spinner.style.display = "none";
            buttonText.style.display = "inline-block";
          }
        }

        //alert("Resending OTP...");
        window.getOTP("phone", step);
      };

      window.validateAmountField = (step, type, minValue, maxValue) => {
        //console.log("Inside Validate Amount");

        const amountInput = document.getElementById(`amount`); // Get the input by ID
        const errorMessageElement = document.getElementById(
          `error-message-${step}`
        );
        let currentValue = amountInput.value; // Get the entered value as a string

        // Check if the current value is a valid number
        if (currentValue === "" || isNaN(parseFloat(currentValue))) {
          errorMessageElement.textContent = ""; // Clear error message
          return true;
        }

        // Check if the entered value is below the minimum value
        let newValue = parseFloat(currentValue);
        if (newValue < minValue) {
          errorMessageElement.textContent = `The Value should be at least ${minValue} and should not exceed ${maxValue}.`;
          setTimeout(() => {
            errorMessageElement.textContent = "";
          }, 2000);
          return false; // Prevent further input if below min value
        }

        // Ensure the next digit doesn't cause the value to exceed the max value
        let nextDigit = amountInput.value.slice(-1); // Get the last entered digit
        let tentativeValue = parseFloat(currentValue + nextDigit); // Simulate the new value if the digit is added

        // If tentative value exceeds max value, restore the previous value
        if (tentativeValue > maxValue) {
          // errorMessageElement.textContent = `The Value should not exceed ${maxValue}.`;
          amountInput.value = currentValue; // Restore the previous valid value
          return false; // Prevent further input if exceeding max value
        }

        // If the value is within the range, clear any previous error messages
        errorMessageElement.textContent = "";
        return true;
      };

      window.validateSalary = (step, minSalary) => {
        const salaryInput = document.getElementById(`salaryInput${step}`);
        const salaryError = document.getElementById(`salaryError${step}`);
        if (parseInt(salaryInput.value) < minSalary) {
          salaryError.classList.remove("hidden");
          return false; // Prevent next step
        } else {
          salaryError.classList.add("hidden");
          return true;
        }
      };

      window.nextStep = async (currentStep) => {
        //console.log("Processing Step", currentStep);

        // Retrieve validation states from sessionStorage
        const phoneState = JSON.parse(sessionStorage.getItem("phoneVal"));
        const pincodeState = JSON.parse(sessionStorage.getItem("pincodeVal"));
        const captchaState = JSON.parse(sessionStorage.getItem("captchaVal"));
        const amountState = JSON.parse(sessionStorage.getItem("amountVal"));
        const notification = document.getElementById("mainnotification");

        //console.log("Validation States:", { phoneState, pincodeState, captchaState });

        // Initialize validation flag
        let validationRequired = false;

        // Check captcha validation
        if (
          captchaState?.step === currentStep &&
          captchaState.validation == true
        ) {
          //console.log("Hiii", captchaState.validation)
          //console.log("Captcha validation is required for this step. Checking...");
          const captchaCompleted = grecaptcha.getResponse() !== ""; // Check if captcha is completed

          if (!captchaCompleted) {
            //console.log("Captcha not completed. Showing validation message...");
            validationRequired = true;

            document.getElementById(`captcha-message-pavan`).innerHTML =
              "<p class='text-red-500 text-sm mt-2'>Please complete the captcha before proceeding.</p>";
          } else {
            //console.log("Captcha completed successfully! Updating local storage...");
            // Update captcha state in local storage
            const updatedCaptchaState = {
              step: currentStep,
              validation: false, // Set validation to false after successful captcha completion
            };
            sessionStorage.setItem(
              "captchaVal",
              JSON.stringify(updatedCaptchaState)
            );
          }
        }

        // Check phone validation
        if (phoneState?.step === currentStep && phoneState.validation) {
          //console.log("Phone validation is required for this step.");
          validationRequired = true;

          document.getElementById(`otp-message`).innerHTML =
            "<p class='text-red-500 text-sm mt-2'>Please verify your phone number before proceeding.</p>";
        }

        // Check pincode validation
        if (pincodeState?.step === currentStep && pincodeState.validation) {
          //console.log("Pincode validation is required."); // Debug message for validation
          validationRequired = true;

          const pincodeMessageElement = document.getElementById(
            `pincode-message-${currentStep}`
          );
          //console.log("Pincode Message Element:", pincodeMessageElement); // Check if the element is retrieved

          if (pincodeMessageElement) {
            pincodeMessageElement.innerHTML =
              "<p class='text-red-500 text-sm mt-2'>Please provide a valid pincode before submitting.</p>";
            pincodeMessageElement.classList.remove("hidden"); // Ensure the element is visible

            // Hide the error message after 3 seconds
            setTimeout(() => {
              //console.log("Triggered Set Time Out")
              pincodeMessageElement.innerHTML = ""; // Clear the error message
              pincodeMessageElement.classList.add("hidden"); // Hide the element
            }, 3000);
          } else {
            console.error(
              `Pincode message element not found for step ${currentStep}`
            );
          }
        }

        // Amount validation
        if (amountState?.step === currentStep) {
          const amountInput = document.querySelector(`#amount`);
          //console.log("Got Amount Input = ",amountInput);

          const enteredAmount = parseFloat(amountInput.value);

          // Check if the entered amount is within the minValue and maxValue
          if (
            enteredAmount < amountState.minValue ||
            enteredAmount > amountState.maxValue
          ) {
            validationRequired = true;
            //console.log("Amount is out of range.");
            document.getElementById(
              `error-message-${currentStep}`
            ).innerHTML = `<p class='text-red-500 text-sm mt-2'>Value should be between ${amountState.minValue} and ${amountState.maxValue}.</p>`;
          } else {
            //console.log("Amount is within range. Proceeding with the submission.");
            // Optionally, update sessionStorage if necessary based on the user's input.
            const updatedAmountState = {
              step: currentStep,
              validation: true, // Or other relevant status
              minValue: amountState.minValue,
              maxValue: amountState.maxValue,
            };
            sessionStorage.setItem(
              "amountVal",
              JSON.stringify(updatedAmountState)
            ); // Update if needed
          }
        }

        // Prevent proceeding if any validation fails
        if (validationRequired) {
          //console.log("Validation failed. Fix the issues before proceeding.");
          return;
        }

        // Check if all required fields are filled
        const currentStepFields = document
          .querySelector(`.form-step[data-step="${currentStep}"]`)
          .querySelectorAll("input, select");
        //   console.log("all fields = ", currentStepFields);
        let allFieldsFilled = true;

        currentStepFields.forEach((input) => {
          // Check if the field is empty and add/remove border highlight
          if (!input.value.trim()) {
            //    console.log("Yes its empty");

            allFieldsFilled = false;

            if (notification) {
              notification.innerHTML =
                "Please fill all the fields before submitting.";
            }

            input.classList.add("border-red-500"); // Highlight the field with an error
          } else {
            if (notification) {
              notification.innerHTML = "";
            }
            input.classList.remove("border-red-500"); // Remove error highlight
          }

          // If the field is of type email, validate the email format
          if (input.type === "email" && input.value.trim()) {
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(input.value.trim())) {
              allFieldsFilled = false;
              input.classList.add("border-red-500"); // Highlight invalid email
              document.getElementById(`error-message-for-email`).innerHTML =
                "Please enter a valid email address";
            } else {
              input.classList.remove("border-red-500"); // Remove highlight if email is valid
              setTimeout(() => {
                document.getElementById(`error-message-for-email`).innerHTML =
                  "";
              }, 3000);
            }
          }

          // If the field is for phone number (id="ph"), check for valid phone number length
          if (input.id === "ph" && input.value.trim()) {
            const phoneValue = input.value.trim();
            // Check if the phone number has exactly 10 digits
            if (phoneValue.length < 10) {
              allFieldsFilled = false;
              input.classList.add("border-red-500"); // Highlight invalid phone number
              // Optionally, show an error message for invalid phone number
              document.getElementById(`error-message-for-phone`).innerHTML =
                "<p class='text-red-500 text-sm mt-2'>Phone number must be exactly 10 digits.</p>";
            } else {
              input.classList.remove("border-red-500"); // Remove highlight if phone number is valid
              setTimeout(() => {
                document.getElementById(`error-message-for-phone`).innerHTML =
                  "";
              }, 3000);
            }
          }

          // If the field is of type checkbox (id="authorizeCheckbox"), check if it's checked
          if (input.id === "authorizeCheckbox" && !input.checked) {
            //console.log("Yes Not checked")
            allFieldsFilled = false;
            const checkdiv = document.getElementById("checkbox-error-message");
            //console.log("Check Div = ", checkdiv)
            // Show the error message for checkbox
            document.getElementById("checkbox-error-message").innerHTML =
              "Please Authorize Before Proceeding"; // Display error message
          } else if (input.id === "authorizeCheckbox" && input.checked) {
            // Hide the error message if checkbox is checked
            document.getElementById("checkbox-error-message").innerHTML = "";
          }

          if (input.id === "authorizeCheckbox2" && !input.checked) {
            //console.log("Yes Not checked")
            allFieldsFilled = false;
            const checkdiv = document.getElementById("checkbox-error-message2");
            //console.log("Check Div = ", checkdiv)
            // Show the error message for checkbox
            document.getElementById("checkbox-error-message2").innerHTML =
              "Please Authorize Before Proceeding"; // Display error message
          } else if (input.id === "authorizeCheckbox2" && input.checked) {
            // Hide the error message if checkbox is checked
            document.getElementById("checkbox-error-message2").innerHTML = "";
          }
        });

        if (!allFieldsFilled) {
          if (notification) {
            notification.innerHTML =
              "Please fill all the fields before submitting.";
          }

          return;
        }

        //console.log("All fields are filled. Proceeding to submit data for this step...");
        // Prepare payload
        const formData = {};

        currentStepFields.forEach((input) => {
          formData[input.name] = input.value;
        });

        let leadId = sessionStorage.getItem("leadId");

        if (leadId != null) {
          //console.log("Got Lead Id In Local STorage, Its Not In First STep")
          formData.leadId = leadId;
          //console.log("Formdata with lead Id ", formData)
        } else {
          //console.log("Its in the 1st step there is no leadid in local storage");
        }

        const jsonPayload = mapFormDataToJson(formData);
        console.log("JSON Payload ", jsonPayload);

        try {
          // Make API call to save step data
          //     console.log("Json Payload = ", jsonPayload);
          const response = await fetch(captureleadapi, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonPayload),
          });

          const data = await response.json();

          //console.log("Response", data.leadId);

          leadId = sessionStorage.getItem("leadId");
          if (leadId == undefined) {
            //console.log("Its In First STep so setting leadid in sessionStorage")
            //console.log("entered in sessionStorage")
            sessionStorage.setItem("leadId", data.leadId);
          }

          //console.log(`API Response for Step ${currentStep}:`, data);

          // Navigate to the next step
          const currentStepElement = document.querySelector(
            `.form-step[data-step="${currentStep}"]`
          );
          const nextStepElement = document.querySelector(
            `.form-step[data-step="${currentStep + 1}"]`
          );

          if (currentStepElement && nextStepElement) {
            currentStepElement.style.display = "none";
            nextStepElement.style.display = "block";
            //console.log(`Navigated to step ${currentStep + 1}`);
          }
        } catch (error) {
          console.error("Error during API call:", error);
          document.getElementById(`notificationDiv${currentStep}`).innerHTML =
            "<p class='text-red-500 text-sm mt-2'>An error occurred while submitting the step data. Please try again.</p>";
        }
      };

      window.submitForm = async (currentStep) => {
        //console.log("Submitting form for Step", currentStep);

        // Retrieve validation states from sessionStorage
        const notification = document.getElementById("mainnotification");
        const phoneState = JSON.parse(sessionStorage.getItem("phoneVal"));
        const pincodeState = JSON.parse(sessionStorage.getItem("pincodeVal"));
        const captchaState = JSON.parse(sessionStorage.getItem("captchaVal"));
        const amountState = JSON.parse(sessionStorage.getItem("amountVal")); // Fetch amount state

        // Initialize validation flag
        let validationRequired = false;

        // Check captcha validation
        if (
          captchaState?.step === currentStep &&
          captchaState.validation == true
        ) {
          //console.log("Hiii = ", captchaState.validation)
          //console.log("Captcha validation is required. Checking...");
          const captchaCompleted = grecaptcha.getResponse() !== ""; // Check if captcha is completed

          if (!captchaCompleted) {
            //console.log("Captcha not completed. Showing validation message...");
            validationRequired = true;

            document.getElementById(`captcha-message-pavan`).innerHTML =
              "<p class='text-red-500 text-sm mt-2'>Please complete the captcha before submitting.</p>";
          } else {
            //console.log("Captcha completed successfully! Updating local storage...");
            // Update captcha state in local storage
            const updatedCaptchaState = {
              step: currentStep,
              validation: false, // Set validation to false after successful captcha completion
            };
            sessionStorage.setItem(
              "captchaVal",
              JSON.stringify(updatedCaptchaState)
            );
          }
        }

        // Check phone validation
        if (phoneState?.step === currentStep && phoneState.validation) {
          //console.log("Phone validation is required.");
          validationRequired = true;

          document.getElementById(`otp-message`).innerHTML =
            "<p class='text-red-500 text-sm mt-2'>Please verify your phone number before submitting.</p>";
        }

        // Check pincode validation
        if (pincodeState?.step === currentStep && pincodeState.validation) {
          //console.log("Pincode validation is required."); // Debug message for validation
          validationRequired = true;

          const pincodeMessageElement = document.getElementById(
            `pincode-message-${currentStep}`
          );
          //console.log("Pincode Message Element:", pincodeMessageElement); // Check if the element is retrieved

          if (pincodeMessageElement) {
            pincodeMessageElement.innerHTML =
              "<p class='text-red-500 text-sm mt-2'>Please provide a valid pincode before submitting.</p>";
            pincodeMessageElement.classList.remove("hidden"); // Ensure the element is visible
            setTimeout(() => {
              //console.log("Triggered Set Time Out")
              pincodeMessageElement.innerHTML = ""; // Clear the error message
              pincodeMessageElement.classList.add("hidden"); // Hide the element
            }, 3000);
          } else {
            console.error(
              `Pincode message element not found for step ${currentStep}`
            );
          }
        }

        // Amount validation
        if (amountState?.step === currentStep) {
          const amountInput = document.querySelector(`#amount`);
          //console.log("Got Amount Input = ",amountInput);
          const enteredAmount = parseFloat(amountInput.value);

          // Check if the entered amount is within the minValue and maxValue
          if (
            enteredAmount < amountState.minValue ||
            enteredAmount > amountState.maxValue
          ) {
            validationRequired = true;
            //console.log("Amount is out of range.");
            document.getElementById(
              `error-message-${currentStep}`
            ).innerHTML = `<p class='text-red-500 text-sm mt-2'>Value should be between ${amountState.minValue} and ${amountState.maxValue}.</p>`;
          } else {
            //console.log("Amount is within range. Proceeding with the submission.");
            // Optionally, update sessionStorage if necessary based on the user's input.
            const updatedAmountState = {
              step: currentStep,
              validation: true,
              minValue: amountState.minValue,
              maxValue: amountState.maxValue,
            };
            sessionStorage.setItem(
              "amountVal",
              JSON.stringify(updatedAmountState)
            ); // Update if needed
          }
        }

        // Prevent submission if any validation fails
        if (validationRequired) {
          //console.log("Validation failed. Fix the issues before submitting.");
          return;
        }

        // Check if all required fields are filled
        const currentStepFields = document
          .querySelector(`.form-step[data-step="${currentStep}"]`)
          .querySelectorAll("input, select");
        let allFieldsFilled = true;

        currentStepFields.forEach((input) => {
          // Check if the field is empty and add/remove border highlight
          if (!input.value.trim()) {
            allFieldsFilled = false;
            input.classList.add("border-red-500");

            // Highlight the field with an error
          } else {
            if (notification) {
              notification.innerHTML = "";
            }
            input.classList.remove("border-red-500"); // Remove error highlight
          }

          // If the field is of type email, validate the email format
          if (input.type === "email" && input.value.trim()) {
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(input.value.trim())) {
              allFieldsFilled = false;
              input.classList.add("border-red-500"); // Highlight invalid email
              document.getElementById(`error-message-for-email`).innerHTML =
                "Please enter a valid email address";
            } else {
              input.classList.remove("border-red-500"); // Remove highlight if email is valid
              setTimeout(() => {
                document.getElementById(`error-message-for-email`).innerHTML =
                  "";
              }, 3000);
            }
          }

          // If the field is for phone number (id="ph"), check for valid phone number length
          if (input.id === "ph" && input.value.trim()) {
            const phoneValue = input.value.trim();
            // Check if the phone number has exactly 10 digits
            if (phoneValue.length < 10) {
              allFieldsFilled = false;
              input.classList.add("border-red-500"); // Highlight invalid phone number
              // Optionally, show an error message for invalid phone number
              document.getElementById(`error-message-for-phone`).innerHTML =
                "<p class='text-red-500 text-sm mt-2'>Phone number must be exactly 10 digits.</p>";
            } else {
              input.classList.remove("border-red-500"); // Remove highlight if phone number is valid
              setTimeout(() => {
                document.getElementById(`error-message-for-phone`).innerHTML =
                  "";
              }, 3000);
            }
          }

          if (input.id === "authorizeCheckbox" && !input.checked) {
            //console.log("Yes Not checked")
            allFieldsFilled = false;
            // const checkdiv = document.getElementById("checkbox-error-message");
            //console.log("Check Div = ", checkdiv)
            // Show the error message for checkbox
            document.getElementById("checkbox-error-message").innerHTML =
              "Please Authorize Before Proceeding"; // Display error message
          } else if (input.id === "authorizeCheckbox" && input.checked) {
            // Hide the error message if checkbox is checked
            document.getElementById("checkbox-error-message").innerHTML = "";
          }

          if (input.id === "authorizeCheckbox2" && !input.checked) {
            //console.log("Yes Not checked")
            allFieldsFilled = false;
            const checkdiv = document.getElementById("checkbox-error-message2");
            //console.log("Check Div = ", checkdiv)
            // Show the error message for checkbox
            document.getElementById("checkbox-error-message2").innerHTML =
              "Please Authorize Before Proceeding"; // Display error message
          } else if (input.id === "authorizeCheckbox2" && input.checked) {
            // Hide the error message if checkbox is checked
            document.getElementById("checkbox-error-message2").innerHTML = "";
          }
        });

        if (!allFieldsFilled) {
          //console.log("Some required fields are missing. Show an error.");

          if (notification) {
            notification.innerHTML =
              "Please fill all the fields before submitting.";
          }

          return;
        }

        //console.log("All fields are filled. Proceeding to final submission...");

        // Prepare payload
        const formData = {};
        currentStepFields.forEach((input) => {
          formData[input.name] = input.value;
        });

        formData.leadId = sessionStorage.getItem("leadId");
        //console.log("Form Data WIth Lead Id Before Submit ", formData)

        const jsonPayload = mapFormDataToJson(formData);

        try {
          console.log("Json Payload At Final Step: ", jsonPayload);
          // Make API call to submit final data
          const response = await fetch(captureleadapi, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonPayload),
          });

          const data = await response.json();
          //console.log("Final submission response:", data);
          //console.log("Clearing LeadId From Local Sorage...");
          //sessionStorage.removeItem("leadId");
          sessionStorage.clear();

          // Display success message
          document.querySelector(".dynamic-form").innerHTML = `
          <div style="text-align: center; opacity: 0; animation: fadeIn 1s forwards; font-family: 'Roboto Flex', sans-serif;">
            <!-- Popper-like Icon with a larger size and green color -->
            <div style="font-size: 100px; color: #4caf50; margin-bottom: 20px; animation: popper 1s ease-out;">
              <i class="fas fa-check-circle"></i> <!-- Font Awesome checkmark icon -->
            </div>
            <h2 style="font-size: 40px; font-weight: 900; color: #4caf50; margin-bottom: 20px; animation: fadeIn 1.5s ease-out;">
              Congratulations!
            </h2>
            <p style="font-size: 22px; color: #4caf50; font-weight: bold; margin-bottom: 30px; animation: fadeIn 2s ease-out;">
              Your form has been successfully submitted. Our team will contact you soon.
            </p>
            <div style="font-size: 60px; color: #4caf50; animation: fadeIn 2.5s ease-out;">
              🎉
            </div>
          </div>
        `;

          // Dynamically add CSS for animations
          const styleElement = document.createElement("style");
          styleElement.innerHTML = `
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        
          @keyframes popper {
            0% {
              transform: scale(0.8);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        
          /* Style for the checkmark icon */
          .fas {
            font-family: 'Font Awesome 5 Free', sans-serif;
            font-weight: 900;
          }
          
          /* Add Google Fonts link for Roboto Flex */
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100;300;400;500;700;900&display=swap');
        `;
          document.head.appendChild(styleElement);
        } catch (error) {
          console.error("Error during final submission:", error);
          document.getElementById(`notificationDiv${currentStep}`).innerHTML =
            "<p class='text-red-500 text-sm mt-2'>An error occurred while submitting the form. Please try again.</p>";
        }
      };

      window.prevStep = (currentStep) => {
        const current = document.querySelector(
          `.form-step[data-step="${currentStep}"]`
        );
        const previous = document.querySelector(
          `.form-step[data-step="${currentStep - 1}"]`
        );
        if (current && previous) {
          current.style.display = "none";
          previous.style.display = "block";
        }
      };
    };

    fetchPageContent();

    const timer = setTimeout(() => {
      if (loading) {
        setShowHoldOnMessage(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [resolvedPageId, siteKeyLoaded]);

  if (loading) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255, 255, 255, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <PropagateLoader color="#3169be" size={15} />
        {showHoldOnMessage && (
          <p style={{ marginTop: "20px", fontSize: "16px", color: "#555" }}>
            Hold on, this might take a few more seconds... <br />
            <strong style={{ color: "#ae275f" }}>Axis Team</strong>
          </p>
        )}
      </div>
    );
  }

  if (pageStatus === "Draft") {
    return <PageUnderMaintenance />;
  }
  // console.log("Page statud", pageStatus);
  if (pageStatus === "Deleted") {
    return <PageNotFound />;
  }
};

export default PageViewer;
