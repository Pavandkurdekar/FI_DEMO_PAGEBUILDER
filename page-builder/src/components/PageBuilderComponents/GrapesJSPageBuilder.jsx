import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import grapesjsTailwind from "grapesjs-tailwind";
//import { Modal, Input, Select, Button, Radio } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";
import { PropagateLoader } from "react-spinners";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"; // Import icons for delete and add
import {
  Modal,
  Button,
  Input,
  Select,
  Radio,
  Typography,
  Divider,
  Form,
  Spin,
} from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import templates from "./Templates";
import websiteLayouts from "./WebsiteLayouts";


const { Title, Text } = Typography;

const MAX_VIDEO_SIZE_MB = 10;
const { Option } = Select;

const GrapesJSPageBuilder = () => {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pageName, setPageName] = useState("");
  const [pageTitle, setPageTitle] = useState(""); // new
  const [slug, setSlug] = useState(""); // new
  const [isSlugUnique, setIsSlugUnique] = useState(true); // new
  const [slugLoading, setSlugLoading] = useState(false); // new
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false); //new
  const [statusToSave, setStatusToSave] = useState("");
  const [isStepModalVisible, setIsStepModalVisible] = useState(false);
  const [stepCount, setStepCount] = useState(1);
  const [stepForms, setStepForms] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [fieldsData, setFieldsData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [loanValues, setLoanValues] = useState([]);

  // const [formValues, setFormValues] = useState({});
  // const [embedPosition, setEmbedPosition] = useState("");
  // const [isEmbedModalVisible, setIsEmbedModalVisible] = useState(false);

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

  const navigate = useNavigate();
  // Generate slug and verify uniqueness
  useEffect(() => {
    const generatedSlug = pageName
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, ""); // removes special chars

    setSlug(generatedSlug);

    if (generatedSlug) {
      verifySlug(generatedSlug);
    }
  }, [pageName]);
  const verifySlug = async (generatedSlug) => {
    try {
      setSlugLoading(true);
      const response = await axios.get(
        `/server/page_builder_function/verify-slug?slug=${generatedSlug}`
      );
      setIsSlugUnique(response.data.isUnique);
    } catch (error) {
      console.error("Slug verification failed:", error);
      setIsSlugUnique(false);
    } finally {
      setSlugLoading(false);
    }
  };

  useEffect(() => {
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

    editorRef.current = editor;

    // Wait for the panel to be rendered, then manipulate it
    editor.on("load", () => {
      const iframe = editor.Canvas.getFrameEl();
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

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

    editor.Panels.removeButton("options", "export-template");

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
    //------------------------------------------------------------------------------

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

    //Custom Components Start

    // ---------------------------------------------------------------------------------------------------
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

    // ----------------------------------------------------------------------------------------------------

    //Custom Components End

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

    // Listen for when the block is added to the canvas and attach events
    editor.on("component:mount", (component) => {
      if (component.get("type") === "multi-step-form") {
        // Initialize the form step updating function on mount
        component.script();
      }
    });

    editor.Panels.addButton("options", [
      {
        id: "publish",
        className: "btn-publish",
        label: `<i class="fa fa-check-circle"></i>`, // FontAwesome icon for "Publish"
        command: () => showModal("Published"),
        attributes: {
          title: "Publish Page",
        },
      },
      {
        id: "draft",
        className: "btn-draft",
        label: `<i class="fa fa-save"></i>`, // FontAwesome icon for "Save Draft"
        command: () => showModal("Draft"),
        attributes: {
          title: "Save as Draft",
        },
      },
      // {
      //   id: "upload-video",
      //   className: "btn-upload",
      //   label: `<i class="fa fa-video"></i>`,  // FontAwesome icon for "Upload Video"
      //   command: "open-video-upload",
      //   attributes: {
      //     title: "Upload Video",
      //   },
      // },
      {
        id: "add-step-form",
        className: "fa fa-plus-circle", // FontAwesome icon for "Add Step Form"
        // label: "Add Step Form",  // Keep label as it was before
        command: () => setIsStepModalVisible(true),
        attributes: {
          title: "Add a multi-step form",
        },
      },
    ]);

    // Command to open file input for video upload
    editor.Commands.add("open-video-upload", {
      run() {
        document.getElementById("video-upload").click();
      },
    });

    // Add custom styles for buttons and overall theme
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
  }, []);

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

  const handleStepCountSubmit = () => {
    //console.log("Number Of Steps = ", stepCount)
    const newStepForms = Array.from({ length: stepCount }, () => []);
    setStepForms(newStepForms);
    setIsStepModalVisible(false);
    setCurrentStep(1);
  };

  // Handle field addition for each step
  const handleAddField = (stepIndex) => {
    setFieldsData((prevData) => [
      ...prevData,
      { step: stepIndex + 1, name: "", type: "text", options: [] },
    ]);
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle field data changes
  const handleFieldChange = (index, field, value) => {
    setFieldsData((prevData) =>
      prevData.map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      )
    );
  };

  // Move to the next step or finish
  const handleNextStep = () => {
    // ✅ Ensure every "phone" field has "otpValidation": "no" if missing
    const updatedFieldsData = fieldsData.map((field) =>
      field.type === "phone" && !field.hasOwnProperty("otpValidation")
        ? { ...field, otpValidation: "no" }
        : field
    );

    // ✅ Update fieldsData state before proceeding
    setFieldsData(updatedFieldsData);

    console.log("Updated Fields Data:", updatedFieldsData);

    // ✅ Continue to next step or submit
    if (currentStep < stepCount) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFormVisible(true);
      renderFormInEditor(); // Render form in GrapesJS editor
      closeModal();
    }
  };

  // Close modal and reset state
  const closeModal = () => {
    setIsStepModalVisible(false);
    setCurrentStep(1);
    setStepForms([]);
  };
  const renderFormInEditor = () => {
    const editor = editorRef.current;

    // Placeholder markup for dynamic form in the editor
    const placeholderHTML = `
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

    // Add or update the block so users see the placeholder in editor
    editor.BlockManager.add("dynamic-form", {
      id: "dynamic-form",
      label: `
               <div style="text-align: center; padding: 10px;">
            <i class="fa fas fa-edit" style="font-size: 20px;"></i>
    <div style="margin-top: 5px; font-size: 12px; color:white;">Dynamic Form</div>          
    </div>
      `,
      category: "Dynamic Form",
      content: placeholderHTML, // Assuming fullHTML contains your form structure
    });
  };

  const saveHtmlToDatabase = async () => {
    if (editorRef.current) {
      setLoading(true);
      const grapesHtml = editorRef.current.getHtml();
      const grapesCss = editorRef.current.getCss();

      // Embed form HTML into the GrapesJS content
      const embeddedHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${pageTitle}</title>
            <style>${grapesCss}</style>
            
        </head>
        <body>
            ${grapesHtml}
          
        </body>
        </html>
      `;

      // Prepare form data to send to the backend
      const formData = new FormData();
      const file = new Blob([embeddedHtml], { type: "text/html" });
      formData.append("file", file, `${pageName || "generated-page"}.html`);
      formData.append("status", statusToSave);
      formData.append("name", pageName);
      formData.append("slug", slug);
      formData.append("pageTitle", pageTitle);

      const captchadata = {
        step: stepCount, // Use dynamic `currentStep` variable here
        name: "captcha",
        type: "captcha",
        options: [],
        captchaValidation: "yes",
      };

      //console.log("Captcha in string format ", (JSON.stringify(captchadata)))

      //console.log("Captcha in json format ", captchadata)

      //console.log("Fields Data = ", fieldsData)

      let newMetadatWithCaptcha = [];

      if (fieldsData.length != 0) {
        newMetadatWithCaptcha = [...fieldsData, captchadata];
      }

      // console.log("New Metadata with captcha ", newMetadatWithCaptcha);

      // Print the updated fieldsData to the console
      //console.log("Updated fieldsData with captcha:", JSON.stringify(newMetadatWithCaptcha));

      if (newMetadatWithCaptcha.length != 0) {
        formData.append("stepformdata", JSON.stringify(newMetadatWithCaptcha)); // Convert fieldsData to a JSON string
        newMetadatWithCaptcha = [];
        setFieldsData([]);
      }

      // //console.log("Appending step form meta data:", JSON.stringify(fieldsData));

      try {
        console.log("HTML After Saving = ", formData);

        const response = await fetch(
          "/server/page_builder_function/save/page",
          {
            method: "POST",
            body: formData,
          }
        );

        setLoading(false);

        if (response.ok) {
          navigate("/all-pages");

          toast.success(`Page saved as ${statusToSave}!`, {
            position: "top-right",
          });
          setPageName(""); // Clear the page name field after successful save
          setIsModalVisible(false);

          // Clear the editor content
          editorRef.current.DomComponents.clear(); // Clears the HTML content
          editorRef.current.CssComposer.clear(); // Clears the CSS content
        } else {
          toast.error("Failed to upload file.", { position: "top-right" });
        }
      } catch (error) {
        setLoading(false);
        console.error("Error uploading file:", error);
        toast.error("An error occurred while uploading.", {
          position: "top-right",
        });
      }
    }
  };

  const showModal = (status) => {
    setStatusToSave(status);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRemoveField = (fieldIndex) => {
    const updatedFields = fieldsData.filter((_, index) => index !== fieldIndex);
    setFieldsData(updatedFields);
  };

  return (
    <>
      <div style={{ height: "100vh", margin: 0 }}>
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
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
        <Modal
          title="Enter Page Details"
          visible={isModalVisible}
          onOk={saveHtmlToDatabase}
          onCancel={handleCancel}
          okText="Submit"
          cancelText="Cancel"
          confirmLoading={loading}
          okButtonProps={{
            disabled: !pageName || !pageTitle || !slug || !isSlugUnique,
          }}
          width="50vw"
          bodyStyle={{ padding: "20px", maxHeight: "100vh", overflowY: "auto" }}
        >
          <Form layout="vertical">
            <Form.Item label="Page Name">
              <Input
                placeholder="Enter Page Name"
                value={pageName}
                onChange={(e) => {
                  const value = e.target.value;
                  setPageName(value);

                  // Generate slug automatically if not edited manually
                  if (!isSlugManuallyEdited) {
                    const generatedSlug = value
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .trim()
                      .replace(/\s+/g, "-");
                    setSlug(generatedSlug);
                    verifySlug(generatedSlug);
                  }
                }}
              />
            </Form.Item>

            <Form.Item label="Page Title">
              <Input
                placeholder="Enter Page Title"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Slug"
              validateStatus={
                slug.length === 0
                  ? ""
                  : slugLoading
                  ? "validating"
                  : isSlugUnique
                  ? "success"
                  : "error"
              }
              help={
                <span style={{ color: isSlugUnique ? "green" : "red" }}>
                  {slug.length === 0
                    ? ""
                    : slugLoading
                    ? "Checking slug availability..."
                    : isSlugUnique
                    ? "Slug is available. ✅ "
                    : "Slug already exists. Please choose a different one.❌ "}
                </span>
              }
            >
              <Input
                value={slug}
                onChange={(e) => {
                  const value = e.target.value
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  setSlug(value);
                  setIsSlugManuallyEdited(true);
                  verifySlug(value);
                }}
                addonAfter={slugLoading && <Spin size="small" />}
              />
            </Form.Item>
          </Form>
        </Modal>

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
      </div>

      <div style={{ height: "2vh" }}>
        {/* GrapesJS Editor Container */}
        {/* <div id="gjs" style={{ height: "100vh" }}></div> */}

        {/* Modal to enter number of steps */}
        <Modal
          title="Enter Number of Steps"
          visible={isStepModalVisible}
          onOk={handleStepCountSubmit}
          onCancel={closeModal}
          okText="Confirm"
          width={400}
        >
          <Input
            type="number"
            min={1}
            placeholder="Enter number of steps"
            value={stepCount}
            onChange={(e) =>
              setStepCount(
                Number(e.target.value) //console.log("Number Of Steps = ", stepCount)
              )
            }
            style={{ width: "100%", marginTop: "10px" }}
          />
        </Modal>

        {/* Step Forms for each step */}
        {stepForms.length > 0 && currentStep <= stepCount && (
          <Modal
            width={800}
            title={`Configure Fields for Step ${currentStep}`}
            visible={true}
            onCancel={closeModal}
            footer={[
              currentStep > 1 && (
                <Button key="back" onClick={handleBackStep}>
                  Back
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
                {currentStep < stepCount ? "Next Step" : "Finish"}
              </Button>,
            ]}
          >
            {fieldsData
              .filter((field) => field.step === currentStep)
              .map((field, index) => (
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
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
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
                          handleFieldChange(
                            fieldsData.findIndex((f) => f === field),
                            "options",
                            []
                          );
                        } else if (value === "captcha") {
                          // Set the default value for captchaValidation
                          handleFieldChange(
                            fieldsData.findIndex((f) => f === field),
                            "captchaValidation",
                            "no" // Default to "Captcha: No"
                          );
                        }
                      }}
                      style={{ width: "45%" }}
                    >
                      <Option value="text">Text</Option>
                      <Option value="number">Number</Option>
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

                    {/* Remove Field Icon */}
                    <Button
                      onClick={() =>
                        handleRemoveField(
                          fieldsData.findIndex((f) => f === field)
                        )
                      }
                      type="danger"
                      icon={<DeleteOutlined />}
                      style={{ alignSelf: "center", color: "red" }}
                    />
                  </div>

                  {/* OTP Validation for Phone Fields */}
                  {/* Loan Product - Hidden Identifier and Dropdown */}
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
                        {/* <Option value="Home Loan">Home Loan</Option>
                        <Option value="Personal Loan">Personal Loan</Option>
                        <Option value="Loan Against Property">
                          Loan Against Property
                        </Option>
                        <Option value="Business Loan">Business Loan</Option>
                        <Option value="Micro Loan Against Property">
                          Micro Loan Against Property
                        </Option> */}
                      </Select>
                    </div>
                  )}

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
                        style={{ marginTop: "5px" }}
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
                            if (
                              parseInt(maxValue) <= parseInt(field.minValue)
                            ) {
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
    </>
  );
};

export default GrapesJSPageBuilder;
