import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import grapesjsTailwind from "grapesjs-tailwind";
import { ToastContainer, toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Modal,
  Input,
  Button,
  Select,
  Typography,
  Divider,
  Radio,
  message,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import templates from "./Templates";
import websiteLayouts from "./WebsiteLayouts";

const { Option } = Select;
const { Title, Text } = Typography;
const { confirm } = Modal;

const MAX_VIDEO_SIZE_MB = 10;

let captchaJsonarray = [];
let captchaObject = {};

const PageEditor = () => {
  const editorRef = useRef(null);
  const location = useLocation();
  const { htmlContent, rowId, initialPageName } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [statusToSave, setStatusToSave] = useState("");
  const [formDeleteMessage, setFormDeleteMessage] = useState(false);
  const [stepCount, setStepCount] = useState(1);
  const [isStepModalVisible, setIsStepModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [fieldsData, setFieldsData] = useState([]);
  const [isStepCountModalVisible, setIsStepCountModalVisible] = useState(false);
  const [isReducingSteps, setIsReducingSteps] = useState(false);
  const [originalStepCount, setOriginalStepCount] = useState(0); // Store the original total steps before reduction
  const [buttonname, setButtonName] = useState("");
  const navigate = useNavigate();
  let fetchedData;
  const [loanValues, setLoanValues] = useState([]);

  const fetchLoanValues = async () => {
    try {
      const response = await axios.get(
        "/server/verification/crm/meta/lead/loan-products"
      );
      setLoanValues(response.data.loanProductPicklistValues);
      // console.log("Loan Values = ", response.data.loanProductPicklistValues);
    } catch (error) {
      console.log("Error = ", error);
    }
  };
  useEffect(() => {
    fetchLoanValues();
  }, []);

  const reInsertHtmlContent = async () => {
    //  console.log("Trying to insert the html content");

    try {
      const response = await fetch(
        `/server/page_builder_function/page/${rowId}`
      );
      const htmlContent = await response.text();

      navigate("/page-editor", {
        state: {
          htmlContent,
          rowId: rowId,
          initialPageName: initialPageName,
        },
      });
    } catch (error) {
      toast.error("Error fetching page for editing.");
    } finally {
    }
  };

  const onSave = async (metadataText) => {
    //  console.log("Saved Metadata:", metadataText);

    try {
      const metasaveresponse = await axios.put(
        `/server/page_builder_function/update/page/${rowId}`,

        { stepformdata: metadataText }
      );

      //console.log("Saved Successfully :", metasaveresponse.data);
    } catch (error) {
      //console.log("Error Saving Meta Data :", error)
    }
  };

  useEffect(
    () => {
      setLoading(true); // Set loading to true initially
      const timer = setTimeout(() => {
        setLoading(false); // Set loading to false after 3 seconds
      }, 3000);

      const fetchPageMetadata = async () => {
        //console.log("Fetching Page Meta Data")
        try {
          //console.log("Inside Try Block")
          const response = await axios.get(
            `/server/page_builder_function/metadata/${rowId}`
          );
          fetchedData = response.data.data[0].stepformdata;
          //  console.log(fetchedData);
          if (fetchedData == null) {
            //console.log("There is no metadata , setting static captcha object")

            captchaObject = {
              step: 1, // Set the step value as needed
              name: "Captcha",
              type: "captcha",
              options: [],
              captchaValidation: "yes", // Default value for captcha validation
            };

            setButtonName("Add Step Form");
            //console.log("Its Null")
          }
          //console.log(buttonname)

          if (fetchedData) {
            const parsedData = JSON.parse(fetchedData);

            const newparsed_data = parsedData.filter(
              (field) => field.type != "captcha"
            );
            //console.log("New Field Data By Removing Captcha = ", newparsed_data);

            // Filter the captcha-related fields
            captchaJsonarray = parsedData.filter(
              (field) => field.type === "captcha"
            );

            //console.log("captcha in array ", captchaJsonarray)
            // Directly assign the first (and only) captcha object to a plain object
            captchaObject = captchaJsonarray[0]; // Since you are sure there will be only one

            // Log the captcha object
            //console.log("Captcha Object:", captchaObject);

            // captchaObject.step = 6

            ////console.log("Object after updating", captchaObject)

            //console.log("Meta Data Brfore Setting to state Variable = ", parsedData)
            //console.log("state Variable = ", fieldsData)

            setFieldsData(newparsed_data);
            if (fieldsData != null) {
              //console.log("Setted Metadata by removing captcha = ",fieldsData)
            }
            const maxStep = Math.max(...parsedData.map((field) => field.step));
            setStepCount(maxStep);
            setOriginalStepCount(maxStep); // Set the original step count based on initial data
          }
          // // Parse metadata if it's a JSON string
          // if (typeof fetchedData === "string") {
          //   fetchedData = JSON.parse(fetchedData);
          // }

          // setMetadata(fetchedData); // `metadata` will now be an array
          // //console.log("Fetched and parsed metadata:", fetchedData); // Should now be an array if parsed correctly
        } catch (error) {
          console.error("Error fetching metadata:", error);
        }
      };

      fetchPageMetadata();

      const escapeName = (name) =>
        `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");

      const editor = grapesjs.init({
        container: "#gjs",
        height: "100%",
        fromElement: true,
        storageManager: false,
        selectorManager: { escapeName },
        plugins: [grapesjsTailwind],
      });

      if (htmlContent) {
        // ✅ Check if the HTML content contains the dynamic form class
        if (htmlContent.includes('class="dynamic-form container mt-4"')) {
          console.log("✅ Dynamic form found in htmlContent.");
          setFormDeleteMessage(true);
        } else {
          console.log("❌ No dynamic form found in htmlContent.");
        }

        // ✅ Set the content in the editor
        editor.setComponents(htmlContent);
      }

      editorRef.current = editor;
      editor.Panels.removeButton("options", "export-template");

      editor.on("load", () => {
        const iframe = editor.Canvas.getFrameEl();
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;

        // Inject Bootstrap CSS
        const bootstrapCSSLink = iframeDoc.createElement("link");
        bootstrapCSSLink.rel = "stylesheet";
        bootstrapCSSLink.href =
          "https://digital.axisfinance.in/css/bootstrap.min.css";
        iframeDoc.head.appendChild(bootstrapCSSLink);

        // Inject Bootstrap JS
        const bootstrapJSLink = iframeDoc.createElement("script");
        bootstrapJSLink.src =
          "https://digital.axisfinance.in/js/bootstrap.bundle.min.js";
        bootstrapJSLink.defer = true;
        iframeDoc.body.appendChild(bootstrapJSLink);

        const tailwindJS = iframeDoc.createElement("script");
        tailwindJS.src = "https://digital.axisfinance.in/js/tailwind.js";
        iframeDoc.head.appendChild(tailwindJS);

        const devicePanel = document.querySelector(".gjs-pn-devices-c");
        const selectElement = devicePanel.querySelector(".gjs-devices");

        // Hide the original select dropdown
        selectElement.style.display = "none";

        // Create custom icons for devices (Desktop, Tablet, Mobile Portrait, Mobile Landscape)
        const devicesContainer = document.querySelector(".gjs-devices-c");

        const devices = [
          { id: "desktop", label: "Desktop", iconClass: "fa fa-desktop" },
          { id: "tablet", label: "Tablet", iconClass: "fa fa-tablet" },
          {
            id: "mobilePortrait",
            label: "Mobile Portrait",
            iconClass: "fa fa-mobile",
          }, // Use fa-mobile instead of fa-mobile-alt
          {
            id: "mobileLandscape",
            label: "Mobile Landscape",
            iconClass: "fa fa-mobile",
          }, // Use fa-mobile here as well
        ];

        // Clear the devices container
        devicesContainer.innerHTML = "";

        // Add the new device icons
        devices.forEach((device) => {
          const iconButton = document.createElement("button");
          iconButton.classList.add("device-icon-btn");
          iconButton.setAttribute("data-device", device.id);
          iconButton.setAttribute("title", device.label);
          iconButton.innerHTML = `<i class="${device.iconClass}"></i>`;
          devicesContainer.appendChild(iconButton);

          // Add event listener for each button to switch device
          iconButton.addEventListener("click", () => {
            editor.setDevice(device.id); // Change device on editor
          });
        });

        // Add custom styles for buttons
        const style = document.createElement("style");
        style.innerHTML = `
        .gjs-pn-devices-c {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .device-icon-btn {
          background: none;
          border: none;
          padding: 2px;
          font-size: 14px; /* Smaller icon size */
          cursor: pointer;
          margin: 0 8px; /* Reduced margin */
        }
        .device-icon-btn:hover {
          color: #00A4FF; /* Change color on hover */
        }
        .device-icon-btn i {
          font-size: 18px; /* Adjust icon size */
        }
      `;
        document.head.appendChild(style);
      });

      // Define commands for saving as published and draft
      editor.Commands.add("save-published", {
        run: () => handleSaveChanges("Published"),
      });

      editor.Commands.add("save-draft", {
        run: () => handleSaveChanges("Draft"),
      });

      // Add custom buttons directly into the existing left panel
      editor.Panels.addButton("options", [
        {
          id: "publish",
          className: "btn-publish",
          label: `<i class="fa fa-check-circle"></i>`,
          command: "save-published",
          attributes: { title: "Publish Page" },
        },
        {
          id: "draft",
          className: "btn-draft",
          label: `<i class="fa fa-save"></i>`,
          command: "save-draft",
          attributes: { title: "Save as Draft" },
        },
        // {
        //   id: "upload-video",
        //   className: "btn-upload",
        //   label: `<span class="custom-chip">Upload Video</span>`,
        //   command: "open-video-upload",
        //   attributes: { title: "Upload Video" },
        // },
        {
          id: "edit-form",
          className: "fa fa-plus-circle",
          //  label: buttonname,
          command: () => showStepCountModal(),
          attributes: { title: "Edit Or Add Step Form" },
        },
      ]); // Tooltip on hover

      // Use effect to update button label dynamically when buttonname changes

      //Media Blocks
      const mediablocks = [
        {
          id: "draggable-video",
          label: "Video",
          content: `
        <div class="custom-video">
          <video controls style="max-width: 100%; height: auto;">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>`,
          category: "Media",
          attributes: { class: "fa fa-film", style: "font-size: 24px;" },
        },
        {
          id: "draggable-image",
          label: "Image",
          content: `
        <div class="custom-image">
          <img src="https://via.placeholder.com/150" alt="Placeholder" style="max-width: 100%; height: auto;" />
        </div>`,
          category: "Media",
          attributes: { class: "fa fas fa-image", style: "font-size: 24px;" },
        },
      ];

      // Add blocks dynamically
      mediablocks.forEach((block) => {
        editor.BlockManager.add(
          block.id,
          {
            label: block.label,
            content: block.content,
            category: block.category,
            attributes: block.attributes,
          },
          { at: 2 }
        );
      });

      //Media Blocks Ended

      //Custome Button Component

      const buttonBlock = {
        id: "custom-button",
        label: "Button",
        content: `
    <div class="custom-button-wrapper">
      <a href="#" class="btn btn-primary custom-button">
        <i class="bi bi-hand-thumbs-up"></i> Click Me
      </a>
    </div>`,
        category: "Button",
        attributes: { class: "fa fas fa-square", style: "font-size: 24px;" },
      };

      // Add the button block to the editor
      editor.BlockManager.add(buttonBlock.id, {
        label: buttonBlock.label,
        content: buttonBlock.content,
        category: buttonBlock.category,
        attributes: buttonBlock.attributes,
      });

      //Custom Button Componet Eneded

      //remove unwanted blocks

      // Retrieve all blocks grouped by categories
      const blocksByCategory = editor.BlockManager.getBlocksByCategory();

      const categoriesToRemove = [
        "Contact",
        "CTA",
        "Team",
        "Steps",
        "Statistics",
        "Pricing",
        "Fetaures",
        "Commerce",
        "Blog",
      ]; // Add the category IDs you want to remove

      blocksByCategory.forEach((category) => {
        if (
          category.category &&
          categoriesToRemove.includes(category.category.id)
        ) {
          category.items.forEach((block) => {
            editor.BlockManager.remove(block.id); // Remove specific block by its ID
          });
        }
      });


      // Add Templates to GrapesJS Block Manager
      templates.forEach((template) => {
        editor.BlockManager.add(
          template.id,
          {
            label: template.label,
            content: template.content,
            category: template.category,
            attributes: { class: "fa " + template.icon },
          },
          { at: 0 }
        );
      });

      //Form Layouts Start----------------------

      editor.BlockManager.add("video-form-layout", {
        id: "video-form-layout",
        label: `
       <div style="text-align: center; padding: 10px;">
            <i class="fa fas fa-edit" style="font-size: 25px;"></i>
           <div style="margin-top: 5px; font-size: 12px; color:white;">Video + Form Layout</div>
          </div>
        `,
        category: "ZForm Layout",
        content: `
          <div class="flex flex-col md:flex-row gap-4 p-4">
            <!-- Video Section -->
            <div class="video-area w-full md:w-1/2 flex items-center justify-center">
              <video controls class="w-full h-full max-h-64 object-cover">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
              </video>
            </div>
    <!-- Form Parent Section -->
        <div class="form-parent h-64 overflow-y-auto e hide-display-bar justify-center items-center w-full md:w-1/2">
        <!-- This is where the form will be dropped -->
        <div class="form-area w-full flex justify-center items-center"></div>
      </div>
    </div>
        `,
      });

      editor.BlockManager.add("only-form-layout", {
        id: "only-form-layout",
        label: `
          <div style="text-align: center; padding: 10px;">
        <i class="fa fas fa-edit" style="font-size: 25px;"></i>
      <div style="margin-top: 5px; font-size: 12px; color:white;">Only Form Layout</div>
      </div>
  
        `,
        category: "ZForm Layout",
        content: `
          <div class="flex flex-col p-4">
            <div class="form-parent h-64 overflow-y-auto e hide-display-bar justify-center items-center w-full">
              <div class="form-area w-full flex justify-center items-center">
                <form class="w-full max-w-full text-left"></form>
              </div>
            </div>
          </div>
        `,
      });

      editor.BlockManager.add("text-form-layout", {
        id: "text-form-layout",
        label: `
   <div style="text-align: center; padding: 10px;">
   <i class="fa fas fa-edit" style="font-size: 25px;"></i>
      <div style="margin-top: 5px; font-size: 12px; color:white;">Text + Form Layout</div>
      </div>
        `,
        category: "ZForm Layout",
        content: `
          <div class="flex flex-col md:flex-row gap-4 p-4">
      <!-- Text Section -->
    <div class="text-area w-full md:w-1/2 text-left">
      <h1 class="text-4xl font-bold italic">Your Heading</h1>
      <p class="text-gray-600 text-lg italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ligula eu sapien interdum pretium. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.
      </p>
  </div>
  
      <!-- Form Parent Section -->
      <div class="form-parent h-64 overflow-y-auto e hide-display-bar justify-center items-center w-full md:w-1/2">
        <!-- This is where the form will be dropped -->
        <div class="form-area w-full flex justify-center items-center"></div>
      </div>
    </div>
    
  
        `,
      });

      //Form Layouts End------------------------

      // ---------------------------------------------------------------------------------------------------

      // ---------------------------------------------------------------------------------------------------
      // layouts


      // Add layouts to BlockManager
      websiteLayouts.forEach((layout) => {
        editor.BlockManager.add(
          layout.id,
          {
            category: "Custom Components",
            content: layout.content,
            label: `
    <i class="fa far fa-window-maximize	s" style="font-size: 2rem;"></i>
          <p style="margin-top: 6px;">${layout.label}</p>
        `,
          },
          { at: 1 }
        );
      });

      // Move style declaration here
      const customStyles = `
.custom-video {
  border: 2px dashed #00A4FF;
  padding: 10px;
  display: inline-block;
}
.custom-image {
  border: 2px dashed #FF8B3D;
  padding: 10px;
  display: inline-block;
}
`;

      const styleElement = document.createElement("style");
      styleElement.innerHTML = customStyles;
      document.head.appendChild(styleElement);

      //console.log(buttonname)
      // Command to open file input for video upload
      editor.Commands.add("open-video-upload", {
        run() {
          document.getElementById("video-upload").click();
        },
      });

      const style = document.createElement("style");
      style.innerHTML = `
         .gjs-pn-commands, .gjs-pn-buttons, .gjs-pn-panel {
        background-color: #3169be !important;
        color: #333 !important;
      }
      .custom-chip {
        display: inline-block;
        background-color: #00A4FF;
        color: #fff;
        margin-right: 10px;
        border-radius: 12px;
        font-size: 10px;
        cursor: pointer;
        padding: 0px 5px;
      }
      .btn-publish > .custom-chip {
        background-color: #28a745 !important;
      }
      .btn-draft > .custom-chip {
        background-color: #2a9df4 !important;
      }
      .btn-upload > .custom-chip {
        background-color: #ff8b3d !important;
      }
      .custom-chip:hover {
        background-color: #0096D6 !important;
      }
      .btn-publish, .btn-draft, .btn-upload {
        display: inline-block;
        margin-right: 5px !important;
      }
      .gjs-pn-buttons .gjs-pn-btn, .gjs-pn-commands .gjs-pn-btn {
        background-color: #E6F2FF !important;
        color: #333 !important;
        border: none !important;
      }
      .gjs-blocks-c {
        background-color: #F0F8FF !important;
      }
      .gjs-cv-canvas {
        background-color: #FFFFFF !important;
      }
      .gjs-title {
        background-color: #3169be !important;
      }
      .gjs-block {
        background-color: #3169be !important;
        border-radius: 8px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .gjs-block:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }
      .gjs-pn-btn:hover {
        background-color: #0096D6 !important;
        color: #fff !important;
      }
      .fa-plus-circle {
        margin-right: 60px;
      }
        `;
      document.head.appendChild(style);

      return () => {
        editor.destroy();
        document.head.removeChild(style);
      };
    },
    [htmlContent],
    [rowId]
  );

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleVideoUpload = async (e) => {
    const videoFile = e.target.files[0];

    if (videoFile) {
      const videoSizeMB = videoFile.size / (1024 * 1024);
      if (videoSizeMB > MAX_VIDEO_SIZE_MB) {
        toast.error(
          `Video size is ${videoSizeMB.toFixed(
            2
          )} MB, exceeds the maximum size of ${MAX_VIDEO_SIZE_MB} MB.`,
          { position: "top-right" }
        );
        e.target.value = "";
        return;
      }

      const videoBase64 = await convertToBase64(videoFile);
      const videoType = videoFile.type;

      const videoHtml = `
                <video controls style="max-width: 100%; height: auto;">
                    <source src="${videoBase64}" type="${videoType}" />
                    Your browser does not support the video tag.
                </video>
            `;

      editorRef.current.addComponents(videoHtml);
      e.target.value = "";
    }
  };

  const handleSaveChanges = async (status) => {
    setLoading(true);
    //console.log(statusToSave)
    setStatusToSave(status);
    try {
      const updatedHtml = editorRef.current.getHtml();
      // console.log("editor html = ", updatedHtml);
      const updatedCss = editorRef.current.getCss();

      // Parse the editor HTML to check for the specific class
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = updatedHtml;

      // // ✅ Log initial HTML before removing <title> tags
      // console.log("Initial HTML before cleanup:", tempDiv.innerHTML);

      // // ✅ Remove any existing <title> tags inside the editor content
      // const existingTitles = tempDiv.getElementsByTagName("title");
      // console.log(`Found ${existingTitles.length} <title> tag(s) to remove.`);

      // for (let i = existingTitles.length - 1; i >= 0; i--) {
      //   console.log("Removing title tag:", existingTitles[i].outerHTML);
      //   existingTitles[i].remove();
      // }

      // // ✅ Remove <meta> tags
      // const existingMetaTags = tempDiv.getElementsByTagName("meta");
      // console.log(`Found ${existingMetaTags.length} <meta> tag(s) to remove.`);
      // for (let i = existingMetaTags.length - 1; i >= 0; i--) {
      //   console.log("Removing meta tag:", existingMetaTags[i].outerHTML);
      //   existingMetaTags[i].remove();
      // }
      // // ✅ Get the cleaned-up inner HTML after removing titles
      // const cleanedHtml = tempDiv.innerHTML;

      // // ✅ Log cleaned HTML after removing extra <title> tags
      // console.log("Cleaned HTML after title removal:", cleanedHtml);

      const hasDynamicForm = tempDiv.querySelector(
        ".dynamic-form.container.mt-4"
      );

      // Check if the form exists
      if (hasDynamicForm) {
        //console.log("Yes, the form exists with the specified class.");
      } else {
        //console.log("No, the form does not exist with the specified class.");

        // Make an API call to update `stepformdata` to null
        try {
          await axios.put(
            `/server/page_builder_function/update/page/${rowId}`,
            {
              stepformdata: null,
            }
          );
          if (formDeleteMessage) {
            setFieldsData([]);
            toast.success("Form From The Page Removed Successfully", {
              position: "top-right",
            });
          }
        } catch (axiosError) {
          // console.error("Error updating stepformdata to null:", axiosError);
          toast.error("Failed To Delete Form", {
            position: "top-right",
          });
          return; // Exit early to avoid saving the page
        }
      }

      const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  
    <style>${updatedCss}</style>
   
</head>
<body>${updatedHtml}</body
</html>
            `;

      const formData = new FormData();
      const file = new Blob([fullHtml], { type: "text/html" });
      formData.append("file", file, `${initialPageName || "edited-page"}`);
      formData.append("status", status);
      formData.append("name", initialPageName || "edited-page");
      //formData.append("stepformdata",metadataText)

      const response = await fetch(
        `/server/page_builder_function/update/page/${rowId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success(`Page saved as ${status}!`, { position: "top-right" });
        reInsertHtmlContent();
      } else {
        toast.error("Failed to save the page.", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error saving page:", error);
      toast.error("An error occurred while saving.", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  const groupedFields = fieldsData.reduce((acc, field) => {
    //console.log("Fields Data = ",fieldsData)
    const step = field.step;
    if (!acc[step]) acc[step] = [];
    acc[step].push(field);
    return acc;
  }, {});

  const showStepCountModal = () => setIsStepCountModalVisible(true);
  const showStepModal = () => {
    setIsStepModalVisible(true);
    setIsStepCountModalVisible(false);
  };

  const closeStepModal = () => setIsStepModalVisible(false);

  const handleStepCountChange = (value) => {
    // //console.log("Steps", value)

    setStepCount(Number(value));
  };

  //console.log("Steps", stepCount)

  const handleStepCountSubmit = () => {
    const currentMaxStep = Math.max(...fieldsData.map((field) => field.step));
    if (stepCount < currentMaxStep) {
      setIsReducingSteps(true);
      setOriginalStepCount(currentMaxStep); // Remember the original step count before reduction
    } else {
      setIsReducingSteps(false);
      setOriginalStepCount(stepCount); // Update original to new count if increased or kept same
    }
    setCurrentStep(1);
    showStepModal();
  };

  const handleDeleteStep = (step) => {
    const remainingSteps = fieldsData.reduce((acc, field) => {
      if (field.step > acc) acc = field.step;
      return acc;
    }, 0);

    // Prevent deleting more steps than the target count
    if (remainingSteps <= stepCount) {
      message.warning(`You must retain at least ${stepCount} step(s).`);
      return;
    }

    confirm({
      title: "Are you sure you want to delete this step?",
      icon: <ExclamationCircleOutlined />,
      content: `This will delete all fields in Step ${step}.`,
      onOk() {
        const updatedFields = fieldsData
          .filter((field) => field.step !== step)
          .map((field) => ({
            ...field,
            step: field.step > step ? field.step - 1 : field.step,
          }));
        setFieldsData(updatedFields);
        setOriginalStepCount((prevCount) => prevCount - 1); // Update the original count on deletion

        message.success(`Step ${step} deleted successfully`);
      },
      onCancel() {
        message.info("Step deletion canceled");
      },
    });
  };

  const renderFormInEditor = () => {
    const editor = editorRef.current;

    const fullHTML = `
<div class="dynamic-form container mt-4"
       style="
         padding: 30px;
         border: 2px dashed #4a90e2;
         border-radius: 8px;
         background-color: rgba(74,144,226,0.1);
         text-align: center;
         color: #333;
         box-shadow: 0 2px 8px rgba(0,0,0,0.1);
       ">
    <i class="fa fas fa-edit"
       style="font-size: 28px; margin-bottom: 12px; color: #4a90e2;">
    </i>
    <p style="margin: 0; font-size: 16px; font-weight: 500; color: #4a90e2;">
      Form preview area – your configured form will display here on the live site.
    </p>
    <p style="margin: 8px 0 0; font-size: 14px; color: #555; line-height: 1.4;">
      Please don’t edit or remove anything here. Use the ➕ icon in the Form panel to configure fields.
      You can adjust the dimensions and decoration of this placeholder via the editor UI, which will reflect on the live form.
    </p>
  </div>
    `;

    if (fetchedData == null) {
      //  console.log("Yes thier is no metadata , so rendering form...");
      editor.BlockManager.add("dynamic-form", {
        id: "dynamic-form",
        label: `
           <div style="text-align: center; padding: 10px;">
            <i class="fa fas fa-edit" style="font-size: 20px;"></i>
    <div style="margin-top: 5px; font-size: 12px; color:white;">Dynamic Form</div>          
    </div>
        `,
        category: "Dynamic Form",
        content: fullHTML, // Assuming fullHTML contains your form structure
      });
    } else {
      //    console.log("Meta data exist hence not rendering form..");
    }
  };

  const handleNextStep = () => {
    if (currentStep < originalStepCount) {
      setCurrentStep(currentStep + 1);
    } else {
      if (buttonname == "Add Step Form") {
        //console.log("The button name is Add Step form so adding the step form into the editor...")
        renderFormInEditor();
      }

      const title =
        buttonname == "Add Step Form"
          ? "Are You Sure You Want to Add The Step form on to The Blocks Manager ?"
          : "Are you sure you want to save changes?";
      const content =
        buttonname == "Add Step Form"
          ? "This will add a new step form to your Blocks Manager."
          : "This will save all your changes to the form configuration.";

      confirm({
        title: title,
        icon: <ExclamationCircleOutlined />,
        content: content,
        onOk() {
          //console.log("Captcha Object when clicked on save ", captchaObject);

          // Step 1: Remove any existing captcha object from fieldsData
          const updatedFieldsData = fieldsData.filter(
            (field) => field.type !== "captcha"
          );

          //console.log("Fields Data after removing captcha:", updatedFieldsData);

          // Step 2: Update the captchaObject with the dynamic step
          captchaObject = { ...captchaObject, step: stepCount };

          //console.log("Captcha step Updated ", captchaObject);

          // Step 3: Add the updated captchaObject back into the fieldsData array
          const updatedmetadatawithcaptcha = [
            ...updatedFieldsData,
            captchaObject,
          ];

          //console.log("New Meta Data By Appending Captcha with dynamic step = ", updatedmetadatawithcaptcha);

          // Now you can use updatedmetadatawithcaptcha for saving or other operations
          const metadataText = JSON.stringify(updatedmetadatawithcaptcha);
          //console.log("Updated Metadata:", metadataText);
          message.success("Form saved successfully");
          onSave(metadataText);

          closeStepModal();
        },
        onCancel() {
          message.info("Save operation canceled");
        },
      });
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFieldChange = (index, field, value) => {
    setFieldsData((prevData) =>
      prevData.map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleAddField = (stepIndex) => {
    setFieldsData((prevData) => [
      ...prevData,
      { step: stepIndex + 1, name: "", type: "text", options: [] },
    ]);
  };

  const handleRemoveField = (fieldIndex) => {
    setFieldsData((prevData) =>
      prevData.filter((_, idx) => idx !== fieldIndex)
    );
  };

  useEffect(() => {
    const editor = editorRef.current;
    if (editor) {
      const button = editor.Panels.getButton("options", "edit-form");
      if (button) {
        button.set("label", buttonname); // Update the button label
      }
    }
  }, [buttonname]);

  return (
    <div
      style={{
        height: "100vh",
        margin: 0,
        backgroundColor: "#E3F2FD",
        position: "relative",
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <PropagateLoader color="#3169be" size={15} />
        </div>
      )}

      {/* Hidden Input for Video Upload */}
      <input
        type="file"
        id="video-upload"
        accept="video/*"
        onChange={handleVideoUpload}
        style={{ display: "none" }}
      />

      {/* GrapesJS Editor Container */}
      <div id="gjs" style={{ height: "100vh" }}></div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 2000, marginTop: "50px" }}
      />

      <Modal
        title="Edit Number of Steps"
        visible={isStepCountModalVisible}
        onOk={handleStepCountSubmit}
        onCancel={() => setIsStepCountModalVisible(false)}
        okText="Confirm"
      >
        <Input
          type="number"
          min={1}
          placeholder="Enter number of steps"
          value={stepCount}
          onChange={(e) => handleStepCountChange(e.target.value)}
          style={{ width: "100%", marginTop: "10px" }}
        />
      </Modal>

      {/* Step Configuration Modal */}
      {currentStep <= originalStepCount && (
        <Modal
          width={800}
          title={`Configure Fields for Step ${currentStep}`}
          visible={isStepModalVisible}
          onCancel={closeStepModal}
          footer={[
            currentStep > 1 && (
              <Button key="back" onClick={handleBackStep}>
                Back
              </Button>
            ),
            isReducingSteps && (
              <Button
                key="delete"
                type="danger"
                onClick={() => handleDeleteStep(currentStep)}
                icon={<DeleteOutlined />}
                style={{ marginRight: "10px" }}
              >
                Delete Step
              </Button>
            ),
            <Button
              key="add"
              onClick={() => handleAddField(currentStep - 1)}
              icon={<PlusOutlined />}
            >
              Add Field
            </Button>,
            <Button key="next" type="primary" onClick={handleNextStep}>
              {currentStep < originalStepCount ? "Next Step" : "Finish"}
            </Button>,
          ]}
        >
          {groupedFields[currentStep]?.map((field, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              <Title level={5} style={{ marginBottom: "10px" }}>
                Field {index + 1}
              </Title>
              <div style={{ display: "flex", gap: "10px" }}>
                <Input
                  placeholder="Field Name"
                  value={field.name}
                  onChange={(e) =>
                    handleFieldChange(
                      fieldsData.findIndex((f) => f === field),
                      "name",
                      e.target.value
                    )
                  }
                  style={{ width: "45%" }}
                />
                <Select
                  placeholder="Select Field Type"
                  value={field.type}
                  onChange={(value) => {
                    handleFieldChange(
                      fieldsData.findIndex((f) => f === field),
                      "type",
                      value
                    );
                    if (value === "employeeType" || value === "pincode") {
                      // Initialize empty options for Employee Type or Pincode for manual entry if needed
                      handleFieldChange(
                        fieldsData.findIndex((f) => f === field),
                        "options",
                        []
                      );
                    }
                  }}
                  style={{ width: "45%" }}
                >
                  <Option value="text">Text</Option>
                  <Option value="number">Number</Option>
                  <Option value="phone">
                    Phone Number
                    <span
                      style={{
                        marginLeft: "8px",
                        backgroundColor: "#ffe6e6",
                        color: "#ff4d4f",
                        padding: "2px 6px",
                        borderRadius: "8px",
                        fontSize: "0.8em",
                        fontWeight: "bold",
                      }}
                    >
                      Validator
                    </span>
                  </Option>
                  <Option value="loanProduct">
                    Loan Product
                    <span
                      style={{
                        marginLeft: "8px",
                        backgroundColor: "#fff3cd", // Light yellow background
                        color: "#d48806", // Dark orange text
                        padding: "2px 6px",
                        borderRadius: "8px",
                        fontSize: "0.8em",
                        fontWeight: "bold",
                      }}
                    >
                      Hidden
                    </span>
                  </Option>
                  <Option value="email">Email</Option>
                  <Option value="date">Date</Option>
                  <Option value="dropdown">Dropdown</Option>
                  <Option value="radio">Radio Button</Option>
                  <Option value="amountValidator">
                    Amount
                    <span
                      style={{
                        marginLeft: "8px",
                        backgroundColor: "#ffe6e6",
                        color: "#ff4d4f",
                        padding: "2px 6px",
                        borderRadius: "8px",
                        fontSize: "0.8em",
                        fontWeight: "bold",
                      }}
                    >
                      Validator
                    </span>
                  </Option>
                  {/* <Option value="employeeType">
                    Employee Type
                    <span
                      style={{
                        marginLeft: "8px",
                        backgroundColor: "#ffe6e6",
                        color: "#ff4d4f",
                        padding: "2px 6px",
                        borderRadius: "8px",
                        fontSize: "0.8em",
                        fontWeight: "bold",
                      }}
                    >
                      Validator
                    </span>
                  </Option> */}
                  <Option value="pincode">
                    Pincode
                    <span
                      style={{
                        marginLeft: "8px",
                        backgroundColor: "#ffe6e6",
                        color: "#ff4d4f",
                        padding: "2px 6px",
                        borderRadius: "8px",
                        fontSize: "0.8em",
                        fontWeight: "bold",
                      }}
                    >
                      Validator
                    </span>
                  </Option>
                </Select>
                <Button
                  onClick={() =>
                    handleRemoveField(fieldsData.findIndex((f) => f === field))
                  }
                  type="danger"
                  icon={<DeleteOutlined />}
                  style={{ alignSelf: "center", color: "red" }}
                />
              </div>

              {/* OTP Validation for Phone Fields */}
              {field.type === "phone" && (
                <div style={{ marginTop: "10px" }}>
                  <Text>Need OTP Validation?</Text>
                  <Radio.Group
                    onChange={(e) =>
                      handleFieldChange(
                        fieldsData.findIndex((f) => f === field),
                        "otpValidation",
                        e.target.value
                      )
                    }
                    value={field.otpValidation || "no"}
                    style={{ marginLeft: "10px" }}
                  >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Radio.Group>
                </div>
              )}
              {field.type === "loanProduct" && (
                <div style={{ marginTop: "10px" }}>
                  {/* Hidden Field for Identifier */}
                  <input
                    type="hidden"
                    value="hidden"
                    onChange={(e) =>
                      handleFieldChange(
                        fieldsData.findIndex((f) => f === field),
                        "identifier",
                        e.target.value
                      )
                    }
                  />

                  {/* Dropdown for Loan Product Field Name */}
                  <Text>Select Loan Product Type</Text>
                  <Select
                    value={field.loanProductType || ""}
                    onChange={(value) =>
                      handleFieldChange(
                        fieldsData.findIndex((f) => f === field),
                        "loanProductType",
                        value
                      )
                    }
                    style={{ width: "100%", marginTop: "5px" }}
                  >
                    {loanValues.map((item) => (
                      <Option value={item}>{item}</Option>
                    ))}
                  </Select>
                </div>
              )}

              {/* Options for Dropdown, Radio Buttons, and Employee Type */}
              {(field.type === "dropdown" ||
                field.type === "radio" ||
                field.type === "employeeType") && (
                <div style={{ marginTop: "10px" }}>
                  <Divider orientation="left" plain>
                    Options
                  </Divider>
                  {field.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      <Input
                        placeholder={`Option ${optionIndex + 1}`}
                        value={option}
                        onChange={(e) => {
                          const updatedOptions = [...field.options];
                          updatedOptions[optionIndex] = e.target.value;
                          handleFieldChange(
                            fieldsData.findIndex((f) => f === field),
                            "options",
                            updatedOptions
                          );
                        }}
                        style={{ width: "80%" }}
                      />
                      <Button
                        onClick={() => {
                          const updatedOptions = field.options.filter(
                            (_, idx) => idx !== optionIndex
                          );
                          handleFieldChange(
                            fieldsData.findIndex((f) => f === field),
                            "options",
                            updatedOptions
                          );
                        }}
                        type="danger"
                        icon={<DeleteOutlined />}
                        style={{ color: "red" }}
                      />
                    </div>
                  ))}
                  <Button
                    onClick={() =>
                      handleFieldChange(
                        fieldsData.findIndex((f) => f === field),
                        "options",
                        [...field.options, ""]
                      )
                    }
                    type="dashed"
                    icon={<PlusOutlined />}
                  >
                    Add Option
                  </Button>
                </div>
              )}

              {/* Amount Validator (Min and Max) */}
              {field.type === "amountValidator" && (
                <div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Minimum Value
                    </label>
                    <input
                      type="number"
                      name="minValue"
                      placeholder="Enter Minimum Value"
                      value={field.minValue || ""}
                      onChange={(e) =>
                        handleFieldChange(
                          fieldsData.findIndex((f) => f === field),
                          "minValue",
                          e.target.value
                        )
                      }
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Maximum Value
                    </label>
                    <input
                      type="number"
                      name="maxValue"
                      placeholder="Enter Maximum Value"
                      value={field.maxValue || ""}
                      onChange={(e) => {
                        const maxValue = e.target.value;
                        handleFieldChange(
                          fieldsData.findIndex((f) => f === field),
                          "maxValue",
                          maxValue
                        );

                        // Validate if maxValue is greater than minValue
                        if (parseInt(maxValue) <= parseInt(field.minValue)) {
                          // Show error message directly below maxValue input
                          handleFieldChange(
                            fieldsData.findIndex((f) => f === field),
                            "errorMessage",
                            "Maximum Value should be greater than Minimum Value!"
                          );
                        } else {
                          // Clear the error message
                          handleFieldChange(
                            fieldsData.findIndex((f) => f === field),
                            "errorMessage",
                            ""
                          );
                        }
                      }}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {/* Show error message here if validation fails */}
                    {field.errorMessage && (
                      <div className="text-red-500 mt-2">
                        {field.errorMessage}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {field.type === "number" && (
                <div style={{ marginTop: "10px" }}>
                  <Input
                    type="number"
                    min={1}
                    placeholder="Enter number of digits"
                    value={field.digits || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        fieldsData.findIndex((f) => f === field),
                        "digits",
                        Number(e.target.value)
                      )
                    }
                    style={{ width: "100%" }}
                  />
                </div>
              )}

              {/* Minimum Salary for Employee Type */}
              {/* {field.type === "employeeType" && (
                <div style={{ marginTop: "10px" }}>
                  <Input
                    placeholder="Minimum Salary Required"
                    type="number"
                    value={field.minSalary || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        fieldsData.findIndex((f) => f === field),
                        "minSalary",
                        e.target.value
                      )
                    }
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                </div>
              )} */}
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default PageEditor;
