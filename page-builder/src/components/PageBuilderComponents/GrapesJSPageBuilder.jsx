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

//const { Option } = Select;
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

    // **Template Blocks**
    const templates = [
      {
        id: "portfolio-template",
        label: "Portfolio Template",
        content: `
          <div class="bg-light text-dark">
            <!-- Header -->
       <header class="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-white py-4 shadow-md" style="position: sticky; top: 0; z-index: 9999;">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h3 font-weight-bold">MyPortfolio</h1>
        <nav>
          <ul class="nav">
            <li class="nav-item"><a href="#home" class="nav-link text-white">Home</a></li>
            <li class="nav-item"><a href="#shop" class="nav-link text-white">Projects</a></li>
            <li class="nav-item"><a href="#cart" class="nav-link text-white">About Me</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  
            <!-- Hero Section -->
            <section id="home" class="relative h-96 bg-cover bg-center text-center flex flex-col justify-center text-white shadow-lg" style="background-image: url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNV9wdXJwbGVfd2F0ZXJfaGVhdnlfc3BsYXNoaW5nX29uX3doaXRlX2JhY2tncl8wYTY2YjZkYy0yM2VjLTRlZDItYWNlMy0yNzUzYjUzNmE0M2FfMS5qcGc.jpg');">
              <div class="overlay absolute top-0 left-0 w-full h-full bg-purple-800 opacity-50"></div>
              <div class="relative z-10">
                <h2 class="text-5xl font-bold">Welcome to My Portfolio</h2>
                <p class="text-xl mt-4">Showcasing creativity and innovation through my work</p>
                <button class="mt-6 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg">Explore Projects</button>
              </div>
            </section>
        
            <!-- About Me Section -->
            <section id="about" class="py-16 bg-gray-100">
              <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
                <!-- Image Section -->
                <div class="w-full md:w-1/2 flex justify-center">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/59/42/28/360_F_359422840_6ZgJdJS5sOgXeDxYoFMrng55CzyVmK9j.jpg"
                    alt="About Me"
                    class="rounded-lg shadow-lg w-full md:w-4/5 lg:w-full"
                  />
                </div>
                <!-- Text Section -->
                <div class="w-full md:w-1/2">
                  <h3 class="text-4xl font-bold mb-4 text-center md:text-left">About Me</h3>
                  <p class="text-lg leading-relaxed">
                    Hello! I’m a passionate developer with a keen eye for design and detail.
                    With experience in multiple projects, I specialize in building dynamic
                    and responsive web applications.
                  </p>
                  <p class="text-lg leading-relaxed mt-4">
                    I love solving real-world problems and delivering solutions that make a
                    difference. Let’s create something amazing together!
                  </p>
                  <div class="mt-6 flex justify-center md:justify-start">
                    <a
                      href="#contact"
                      class="inline-block px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </section>
        
            <!-- Projects Section -->
           <section id="projects" class="py-16 bg-white">
    <div class="container mx-auto text-center">
      <h3 class="text-4xl font-bold mb-12">My Featured Projects</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div class="bg-white p-6 rounded shadow-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="https://www.studentartguide.com/wp-content/uploads/2022/02/top-in-nz-cambridge.jpg" alt="Project" class="rounded mb-4 mx-auto h-64 w-full object-cover">
          <h4 class="text-2xl font-bold mb-2">Project Title 1</h4>
          <p class="text-gray-700 text-center">A brief description of the project, highlighting key features and technologies used.</p>
        </div>
        <div class="bg-white p-6 rounded shadow-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="https://www.studentartguide.com/wp-content/uploads/2014/06/mixed-media-igcse-art-2-e1680470184531.jpg" alt="Project" class="rounded mb-4 mx-auto h-64 w-full object-cover">
          <h4 class="text-2xl font-bold mb-2">Project Title 2</h4>
          <p class="text-gray-700 text-center">A brief description of the project, highlighting key features and technologies used.</p>
        </div>
        <div class="bg-white p-6 rounded shadow-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="https://i.pinimg.com/550x/10/c9/34/10c934b6a0fee4d8056d040999ed520d.jpg" alt="Project" class="rounded mb-4 mx-auto h-64 w-full object-cover">
          <h4 class="text-2xl font-bold mb-2">Project Title 3</h4>
          <p class="text-gray-700 text-center">A brief description of the project, highlighting key features and technologies used.</p>
        </div>
      </div>
    </div>
  </section>
  
        
            <!-- Experience Section -->
            <section class="py-16 bg-gray-200">
              <div class="container mx-auto text-center">
                <h3 class="text-4xl font-bold mb-10">Experience</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div class="bg-white p-6 rounded shadow-lg">
                    <h4 class="text-xl font-bold">Company A</h4>
                    <p class="text-gray-700 mt-2">Role: Frontend Developer</p>
                    <p class="text-gray-700 mt-1">Duration: Jan 2020 - Dec 2022</p>
                    <p class="mt-4">Developed responsive web applications and optimized UX for thousands of users.</p>
                  </div>
                  <div class="bg-white p-6 rounded shadow-lg">
                    <h4 class="text-xl font-bold">Company B</h4>
                    <p class="text-gray-700 mt-2">Role: Full Stack Developer</p>
                    <p class="text-gray-700 mt-1">Duration: Mar 2021 - Present</p>
                    <p class="mt-4">Built scalable web solutions, handled APIs, and implemented secure backend architectures.</p>
                  </div>
                  <div class="bg-white p-6 rounded shadow-lg">
                    <h4 class="text-xl font-bold">Company C</h4>
                    <p class="text-gray-700 mt-2">Role: Full Stack Developer</p>
                    <p class="text-gray-700 mt-1">Duration: Mar 2021 - Present</p>
                    <p class="mt-4">Built scalable web solutions, handled APIs, and implemented secure backend architectures.</p>
                  </div>
                </div>
              </div>
            </section>
        
            <!-- Contact Section -->
            <section id="contact" class="py-16 bg-white">
              <div class="container mx-auto text-center">
                <h3 class="text-4xl font-bold mb-8">Get in Touch</h3>
                <p class="text-lg">Have a project in mind or just want to say hi? I’d love to hear from you!</p>
                <div class="mt-6">
                  <a href="mailto:your-email@example.com" class="text-lg font-bold text-purple-600 hover:underline">your-email@example.com</a>
                </div>
                <div class="mt-6">
                  <button class="btn btn-primary px-6 py-3 rounded-pill">Send a Message</button>
                </div>
              </div>
            </section>
        
            <!-- Footer -->
            <footer class="bg-purple-700 text-white py-6">
              <div class="container mx-auto text-center">
                <p>&copy; 2025 My Portfolio. All rights reserved.</p>
                <div class="mt-2">
                  <a href="#" class="text-white hover:underline mx-2">LinkedIn</a>
                  <a href="#" class="text-white hover:underline mx-2">GitHub</a>
                  <a href="#" class="text-white hover:underline mx-2">Twitter</a>
                </div>
              </div>
            </footer>
          </div>
          `,
        category: "Templates",
        icon: "fas fa-briefcase",
      },
      {
        id: "blog-template",
        label: "Blog Template",
        content: `
          <div class="bg-light font-sans">
              <!-- Header -->
         <header class="bg-red-500 text-white py-3 shadow-lg z-10 relative" style="position: sticky; top: 0; z-index: 9999;">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h3 font-weight-bold">My Blog</h1>
        <nav>
          <ul class="nav">
            <li class="nav-item"><a href="#home" class="nav-link text-white">Home</a></li>
            <li class="nav-item"><a href="#shop" class="nav-link text-white">About</a></li>
            <li class="nav-item"><a href="#cart" class="nav-link text-white">My Blog</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
        
           <!-- Hero Section -->
  <section id="home" class="py-5 bg-light">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Text -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h2 class="text-3xl md:text-5xl font-bold text-orange-600">Welcome to Sunny Blog</h2>
          <p class="text-lg mt-3 text-gray-600">Discover stories, tips, and insights that brighten your day. From lifestyle hacks to tech reviews, there’s something here for everyone!</p>
          <a href="#articles" class="btn bg-yellow-500 text-white mt-4 px-6 py-2 rounded-lg">Explore Articles</a>
        </div>
        <!-- Image -->
        <div class="w-full md:w-1/2 text-center mt-8 md:mt-0">
          <img src="https://us.123rf.com/450wm/puhhha/puhhha1811/puhhha181100261/112443543-travel-beautiful-woman-in-hat-watching-flying-hot-air-balloons-from-hill-female-in-ethnic-clothes.jpg?ver=6" alt="Welcome Image" class="w-full h-auto rounded-lg shadow-xl">
        </div>
      </div>
    </div>
  </section>
  
        
             <!-- Author Introduction -->
  <section id="about" class="py-5 bg-white">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Image -->
        <div class="w-full md:w-1/2 text-center">
          <img src="https://media.istockphoto.com/id/1478316046/photo/portrait-of-high-school-teacher-at-school-library.jpg?s=612x612&w=0&k=20&c=sSU4PQgVZXW6jiddn8YcB3s2F_Vge5RekkWBlMiUKuU=" alt="Author" class="w-full h-auto rounded-lg shadow-xl">
        </div>
        <!-- Text -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h3 class="text-3xl md:text-4xl font-bold text-orange-600">About the Author</h3>
          <p class="text-lg mt-3 text-gray-600">Hi, I’m a passionate writer who loves sharing stories and insights. Whether it’s a travel tale or a life lesson, my aim is to connect with readers and brighten their day.</p>
          <a href="#contact" class="btn bg-orange-600 text-white mt-4 px-6 py-2 rounded-lg">Get in Touch</a>
        </div>
      </div>
    </div>
  </section>
  
        
              <!-- Blog Posts Section -->
            <section id="articles" class="py-5 bg-light">
    <div class="container">
      <h3 class="fw-bold text-center text-orange-600 fs-2 mb-5">Latest Posts</h3>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card shadow border-0">
            <img src="https://as2.ftcdn.net/v2/jpg/05/95/65/89/1000_F_595658904_behad0UWzkFp898AhhELaZyV7cOAumld.jpg" class="card-img-top img-fluid rounded-top" alt="Post 1">
            <div class="card-body">
              <h5 class="card-title fw-bold text-orange-600">Post Title 1</h5>
              <p class="card-text text-muted fs-6">A quick summary of the blog post content to entice readers.</p>
              <a href="#" class="text-warning fw-bold text-decoration-none">Read More →</a>
            </div>
          </div>
        </div>
  
        <div class="col-md-4">
          <div class="card shadow border-0">
            <img src="https://media.istockphoto.com/id/1474040270/photo/sunlight-aglow-on-her-dress-happy-young-woman-stands-in-the-countryside-of-cappadocia-the.jpg?s=612x612&w=0&k=20&c=SwnH3EoesUIoGRElt1ouFElzxTt8K8TvxbiSUF89t80=" class="card-img-top img-fluid rounded-top" alt="Post 2">
            <div class="card-body">
              <h5 class="card-title fw-bold text-orange-600">Post Title 2</h5>
              <p class="card-text text-muted fs-6">A quick summary of the blog post content to entice readers.</p>
              <a href="#" class="text-warning fw-bold text-decoration-none">Read More →</a>
            </div>
          </div>
        </div>
  
        <div class="col-md-4">
          <div class="card shadow border-0">
            <img src="https://media.istockphoto.com/id/1499760492/photo/romantic-happy-traveling-couple-hugging-together-and-makes-wish-in-scenic-valley-in-anatolia.jpg?s=612x612&w=0&k=20&c=gRWE_OUZJsbcZNnGlNpcn73ENltMGDmijWSN0JTGPVI=" class="card-img-top img-fluid rounded-top" alt="Post 3">
            <div class="card-body">
              <h5 class="card-title fw-bold text-orange-600">Post Title 3</h5>
              <p class="card-text text-muted fs-6">A quick summary of the blog post content to entice readers.</p>
              <a href="#" class="text-warning fw-bold text-decoration-none">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
              <!-- Footer -->
              <footer class="bg-orange-600 text-white py-4">
                <div class="container text-center">
                  <p class="mb-0 fs-6">&copy; 2025 Sunny Blog. All rights reserved.</p>
                  <div class="mt-2">
                    <a href="#" class="text-white text-decoration-none mx-2">LinkedIn</a>
                    <a href="#" class="text-white text-decoration-none mx-2">Twitter</a>
                    <a href="#" class="text-white text-decoration-none mx-2">GitHub</a>
                  </div>
                </div>
              </footer>
            </div>
          `,
        category: "Templates",
        icon: "fas fa-id-card",
      },

      {
        id: "ecommerce-template",
        label: "E-commerce Template",
        content: `
           <div class="bg-light font-sans">
    <!-- Header -->
    <header class="bg-danger text-white py-3 shadow-lg" style="position: sticky; top: 0; z-index: 9999;">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h3 font-weight-bold">ShopEasy</h1>
        <nav>
          <ul class="nav">
            <li class="nav-item"><a href="#home" class="nav-link text-white">Home</a></li>
            <li class="nav-item"><a href="#shop" class="nav-link text-white">Shop</a></li>
            <li class="nav-item"><a href="#cart" class="nav-link text-white">Cart</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  
    <!-- Hero Section -->
    <section id="home" class="py-5 bg-light">
      <div class="container d-flex flex-column flex-md-row align-items-center">
        <div class="text-center text-md-start">
          <h2 class="display-4 font-weight-bold">Welcome to ShopEasy</h2>
          <p class="lead text-muted">Your one-stop shop for all things awesome. Explore our exclusive deals, limited-time offers, and a wide range of products that fit your lifestyle.</p>
          <a href="#shop" class="btn btn-danger btn-lg mt-3">Shop Now</a>
        </div>
        <div class="mt-4 mt-md-0 text-center">
          <img src="https://img.freepik.com/premium-photo/strong-red-black-ecommerce-image_950002-185205.jpg" alt="Shop Banner" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
  
    <!-- Categories Section -->
  <section class="py-5 bg-white">
    <div class="container text-center">
      <h3 class="h2 font-weight-bold mb-4">Shop by Categories</h3>
      <div class="row">
        <div class="col-6 col-md-3 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://t3.ftcdn.net/jpg/05/49/64/72/360_F_549647295_5AAhVVZV6DAcyejzZ8OwfaNnwWOtOR42.jpg" alt="Category 1" class="card-img-top rounded-top" style="object-fit: cover; height: 300px;">
            <div class="card-body">
              <p class="card-title font-weight-bold">Electronics</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://media.istockphoto.com/id/1033726722/photo/full-length-full-size-vertical-view-of-jumping-and-wondered-brunette-woman-dressed-in.jpg?s=612x612&w=0&k=20&c=geEFxXEcJJ1omd6z-YLFnQ2mvP3mLO6fW2EjqikSnCo=" alt="Category 2" class="card-img-top rounded-top" style="object-fit: cover; height: 300px;">
            <div class="card-body">
              <p class="card-title font-weight-bold">Clothing</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://i.pinimg.com/originals/90/dd/d1/90ddd1e0dd6ea50ce1fee1b0f8d4ed56.png" alt="Category 3" class="card-img-top rounded-top" style="object-fit: cover; height: 300px;">
            <div class="card-body">
              <p class="card-title font-weight-bold">Home & Kitchen</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://img.pikbest.com/ai/illus_our/20230428/e8c7097aa11032059ebf57f5f6799b03.jpg!bw700" alt="Category 4" class="card-img-top rounded-top" style="object-fit: cover; height: 300px;">
            <div class="card-body">
              <p class="card-title font-weight-bold">Accessories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
    <!-- Featured Products Section -->
  <section id="shop" class="py-5 bg-light">
    <div class="container text-center">
      <h3 class="h2 font-weight-bold mb-4">Featured Products</h3>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://rsanimesh.github.io/images/category-1.jpg" alt="Product 1" class="card-img-top rounded-top" style="object-fit: cover; height: 250px;">
            <div class="card-body">
              <h4 class="card-title font-weight-bold">Product Title 1</h4>
              <p class="card-text text-muted">High-quality product with exceptional features and benefits.</p>
              <p class="font-weight-bold h5">$49.99</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://www.apple.com/newsroom/images/values/community-outreach/apple_world-aids-day-2020_hero_12012020_big.jpg.large.jpg" alt="Product 2" class="card-img-top rounded-top" style="object-fit: cover; height: 250px;">
            <div class="card-body">
              <h4 class="card-title font-weight-bold">Product Title 2</h4>
              <p class="card-text text-muted">Durable and stylish—perfect for everyday use.</p>
              <p class="font-weight-bold h5">$29.99</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://t4.ftcdn.net/jpg/06/54/24/25/360_F_654242560_plRsrd1LqSLdJFMovMBuCf6YwlU3SXHw.jpg" alt="Product 3" class="card-img-top rounded-top" style="object-fit: cover; height: 250px;">
            <div class="card-body">
              <h4 class="card-title font-weight-bold">Product Title 3</h4>
              <p class="card-text text-muted">Get the latest trends with this top-rated item.</p>
              <p class="font-weight-bold h5">$99.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
    <!-- Newsletter Signup Section -->
    <section class="py-5 bg-white">
      <div class="container text-center">
        <h3 class="h2 font-weight-bold">Stay Updated</h3>
        <p class="lead text-muted">Subscribe to our newsletter and be the first to know about new arrivals and exclusive deals.</p>
        <form class="d-flex justify-content-center mt-4">
          <button type="submit" class="btn btn-danger">Subscribe</button>
        </form>
      </div>
    </section>
  
    <!-- Footer -->
    <footer class="bg-danger text-white py-4">
      <div class="container text-center">
        <p>&copy; 2025 ShopEasy. All rights reserved.</p>
        <div>
          <a href="#" class="text-white mx-2">Privacy Policy</a>
          <a href="#" class="text-white mx-2">Terms of Service</a>
          <a href="#" class="text-white mx-2">Contact</a>
        </div>
      </div>
    </footer>
  </div>
  
          `,
        category: "Templates",
        icon: "fas fa-shopping-cart",
      },

      {
        id: "event-template",
        label: "Event Template",
        content: `
  <div class="bg-gray-50 font-sans">
    <!-- Header -->
        <header class="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-4 shadow-lg" style="position: sticky; top: 0; z-index: 9999;">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h3 font-weight-bold">ShopEasy</h1>
        <nav>
          <ul class="nav">
            <li class="nav-item"><a href="#home" class="nav-link text-white">Home</a></li>
            <li class="nav-item"><a href="#Schedule" class="nav-link text-white">Schedule</a></li>
            <li class="nav-item"><a href="#speakers" class="nav-link text-white">Speakers</a></li>
            <li class="nav-item"><a href="#tickets" class="nav-link text-white">Tickets</a></li>
            <li class="nav-item"><a href="#testimonials" class="nav-link text-white">Testimonials</a></li>
            <li class="nav-item"><a href="#sponsors" class="nav-link text-white">Sponsors</a></li>
          </ul>
        </nav>
      </div>
    </header>
  
    <!-- Hero Section -->
    <section id="home" class="py-16 bg-gray-100 text-center">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h2 class="text-5xl font-bold leading-tight">Join Our Premier Event</h2>
            <p class="text-xl mt-4 text-gray-700">
              An opportunity to learn, connect, and grow with industry experts and fellow attendees.
            </p>
            <a
              href="#tickets"
              class="mt-6 inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700"
            >
              Get Your Ticket
            </a>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1483833011/photo/crowd-at-a-concert-party.jpg?s=612x612&w=0&k=20&c=GEZZ93KmSs7JuF5rhuo0djPsaNM0I7BsTqvkyzMm_94="
              alt="Event Image"
              class="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  
    <!-- Event Schedule -->
    <section id="Schedule" class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h3 class="text-4xl font-bold mb-8">Event Schedule</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 class="text-2xl font-bold">Day 1 - Opening Day</h4>
            <ul class="mt-4 space-y-4">
              <li class="bg-white p-4 rounded shadow">
                <span class="font-semibold">10:00 AM - </span>Opening Keynote with CEO John Doe
              </li>
              <li class="bg-white p-4 rounded shadow">
                <span class="font-semibold">11:30 AM - </span>Breakout Workshop 1: "Future of Tech"
              </li>
              <li class="bg-white p-4 rounded shadow">
                <span class="font-semibold">1:00 PM - </span>Networking Lunch
              </li>
              <li class="bg-white p-4 rounded shadow">
                <span class="font-semibold">3:00 PM - </span>Panel Discussion: "Innovation in Business"
              </li>
            </ul>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 class="text-2xl font-bold">Day 2 - Workshops & Networking</h4>
            <ul class="mt-4 space-y-4">
              <li class="bg-white p-4 rounded shadow">
                <span class="font-semibold">9:00 AM - </span>Hands-On Coding Bootcamp
              </li>
              <li class="bg-white p-4 rounded shadow">
                <span class="font-semibold">11:00 AM - </span>Case Study: "Tech for Good"
              </li>
              <li class="bg-white p-4 rounded shadow">
                <span class="font-semibold">1:30 PM - </span>Product Demo Sessions
              </li>
              <li class="bg-white p-4 rounded shadow">
                <span class="font-semibold">4:00 PM - </span>Closing Remarks & Farewell
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16 bg-gray-100">
      <div class="container mx-auto text-center">
        <h3 class="text-4xl font-bold mb-8">What Our Attendees Say</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <p class="text-gray-700 italic">
              "This event completely changed the way I think about innovation. The speakers were
              phenomenal!"
            </p>
            <h4 class="text-xl font-bold mt-4">- Alex Johnson</h4>
          </div>
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <p class="text-gray-700 italic">
              "The workshops were incredibly interactive and informative. Highly recommend!"
            </p>
            <h4 class="text-xl font-bold mt-4">- Emily Brown</h4>
          </div>
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <p class="text-gray-700 italic">
              "A must-attend for anyone in the tech industry. Great networking opportunities!"
            </p>
            <h4 class="text-xl font-bold mt-4">- Michael Lee</h4>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Sponsors Section -->
    <section id="sponsors" class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h3 class="text-4xl font-bold mb-8">Our Sponsors</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <img src="https://www.plannedgiving.com/wp-content/uploads/2023/09/sponsorship.jpg" alt="Sponsor 1" class="mx-auto">
          <img src="https://www.plannedgiving.com/wp-content/uploads/2023/09/sponsorship.jpg" alt="Sponsor 2" class="mx-auto">
          <img src="https://www.plannedgiving.com/wp-content/uploads/2023/09/sponsorship.jpg" alt="Sponsor 3" class="mx-auto">
          <img src="https://www.plannedgiving.com/wp-content/uploads/2023/09/sponsorship.jpg" alt="Sponsor 4" class="mx-auto">
        </div>
      </div>
    </section>
  
    <!-- Call to Action Section -->
    <section class="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center">
      <div class="container mx-auto">
        <h3 class="text-4xl font-bold mb-4">Don't Miss Out!</h3>
        <p class="text-lg mb-6">Join us and be a part of something extraordinary.</p>
        <a
          href="#tickets"
          class="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-200"
        >
          Get Your Ticket Now
        </a>
      </div>
    </section>
  
    <!-- Footer -->
    <footer class="bg-purple-700 text-white py-6">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 Event Summit. All rights reserved.</p>
        <div class="mt-4">
          <a href="#" class="text-white hover:underline mx-2">Privacy Policy</a>
          <a href="#" class="text-white hover:underline mx-2">Terms of Service</a>
          <a href="#" class="text-white hover:underline mx-2">Contact</a>
        </div>
      </div>
    </footer>
  </div>
  
  
          `,
        category: "Templates",
        icon: "fas fa-th",
      },
    ];

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
    const websiteLayouts = [
      {
        id: "basic-header-layout",
        iconClass: "fa fas fa-stream",
        content: `
          <header class="p-8 md:p-12 border-b text-center">
            <h1 class="text-3xl md:text-4xl font-bold">Website Header</h1>
            <p class="mt-2 text-base md:text-lg">Your subtitle goes here.</p>
          </header>
        `,
        label: "Basic Header",
      },
      {
        id: "single-column-layout",
        iconClass: "bi bi-layout-sidebar-inset",
        content: `
          <div class="p-6 md:p-8">
            <h2 class="text-2xl md:text-3xl font-bold">Main Content Area</h2>
            <p class="mt-4 text-base">This layout focuses on a single-column structure.</p>
          </div>
        `,
        label: "Single Column",
      },
      {
        id: "two-column-layout",
        iconClass: "bi bi-columns",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold">Column 1</h2>
              <p class="mt-2 text-base">Use this space for text, images, or other media.</p>
            </div>
            <div>
              <h2 class="text-2xl md:text-3xl font-bold">Column 2</h2>
              <p class="mt-2 text-base">Great for balanced content or complementary elements.</p>
            </div>
          </div>
        `,
        label: "Two Column",
      },
      {
        id: "three-column-layout",
        iconClass: "bi bi-layout-three-columns",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
            <div class="text-center">
              <h3 class="text-xl md:text-2xl font-bold">Column 1</h3>
              <p class="mt-2 text-sm md:text-base">Details about your service or feature.</p>
            </div>
            <div class="text-center">
              <h3 class="text-xl md:text-2xl font-bold">Column 2</h3>
              <p class="mt-2 text-sm md:text-base">More information about another feature.</p>
            </div>
            <div class="text-center">
              <h3 class="text-xl md:text-2xl font-bold">Column 3</h3>
              <p class="mt-2 text-sm md:text-base">Highlight a unique selling point.</p>
            </div>
          </div>
        `,
        label: "Three Column",
      },
      {
        id: "pricing-layout",
        iconClass: "bi bi-cash-stack",
        content: `
          <div class="p-6 md:p-8">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Our Pricing</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div class="border p-6 text-center">
                <h3 class="text-xl md:text-2xl font-bold">Basic</h3>
                <p class="text-base md:text-lg mt-2">$9/month</p>
                <ul class="mt-4 space-y-2 text-sm md:text-base">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                
              </div>
              <div class="border p-6 text-center">
                <h3 class="text-xl md:text-2xl font-bold">Pro</h3>
                <p class="text-base md:text-lg mt-2">$29/month</p>
                <ul class="mt-4 space-y-2 text-sm md:text-base">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              
              </div>
              <div class="border p-6 text-center">
                <h3 class="text-xl md:text-2xl font-bold">Enterprise</h3>
                <p class="text-base md:text-lg mt-2">$99/month</p>
                <ul class="mt-4 space-y-2 text-sm md:text-base">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
               
              </div>
            </div>
          </div>
        `,
        label: "Pricing Table",
      },
      {
        id: "team-layout",
        iconClass: "bi bi-people-fill",
        content: `
          <div class="p-6 md:p-8">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Meet the Team</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              <div class="text-center">
                <img src="https://via.placeholder.com/150" alt="Team Member" class="rounded-full w-32 mx-auto">
                <h3 class="text-lg md:text-xl font-bold mt-4">John Doe</h3>
                <p class="text-sm">CEO</p>
              </div>
              <div class="text-center">
                <img src="https://via.placeholder.com/150" alt="Team Member" class="rounded-full w-32 mx-auto">
                <h3 class="text-lg md:text-xl font-bold mt-4">Jane Smith</h3>
                <p class="text-sm">CTO</p>
              </div>
              <div class="text-center">
                <img src="https://via.placeholder.com/150" alt="Team Member" class="rounded-full w-32 mx-auto">
                <h3 class="text-lg md:text-xl font-bold mt-4">Sam Wilson</h3>
                <p class="text-sm">Marketing Head</p>
              </div>
            </div>
          </div>
        `,
        label: "Team Section",
      },
      // More layouts can be added following the same responsive pattern
      {
        id: "feature-highlights-layout",
        iconClass: "bi bi-stars",
        content: `
          <div class="p-6 md:p-10">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Feature Highlights</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div class="text-center">
                <i class="bi bi-lightning-fill text-2xl md:text-3xl"></i>
                <h3 class="text-lg md:text-xl font-bold mt-2">Fast</h3>
                <p class="text-sm">Quick response and processing.</p>
              </div>
              <div class="text-center">
                <i class="bi bi-shield-fill-check text-2xl md:text-3xl"></i>
                <h3 class="text-lg md:text-xl font-bold mt-2">Secure</h3>
                <p class="text-sm">Your data is safe with us.</p>
              </div>
              <div class="text-center">
                <i class="bi bi-person-fill text-2xl md:text-3xl"></i>
                <h3 class="text-lg md:text-xl font-bold mt-2">User-Friendly</h3>
                <p class="text-sm">Designed for ease of use.</p>
              </div>
              <div class="text-center">
                <i class="bi bi-gear-fill text-2xl md:text-3xl"></i>
                <h3 class="text-lg md:text-xl font-bold mt-2">Customizable</h3>
                <p class="text-sm">Tailor it to your needs.</p>
              </div>
            </div>
          </div>
        `,
        label: "Feature Highlights",
      },
      {
        id: "portfolio-layout",
        iconClass: "bi bi-briefcase-fill",
        content: `
          <div class="p-6 md:p-10">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Our Portfolio</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div>
                <img src="https://via.placeholder.com/300" alt="Project 1" class="rounded-lg shadow">
                <p class="text-sm mt-2">Project 1 Description</p>
              </div>
              <div>
                <img src="https://via.placeholder.com/300" alt="Project 2" class="rounded-lg shadow">
                <p class="text-sm mt-2">Project 2 Description</p>
              </div>
              <div>
                <img src="https://via.placeholder.com/300" alt="Project 3" class="rounded-lg shadow">
                <p class="text-sm mt-2">Project 3 Description</p>
              </div>
            </div>
          </div>
        `,
        label: "Portfolio",
      },
      {
        id: "step-by-step-guide-layout",
        iconClass: "bi bi-journal-bookmark",
        content: `
          <div class="p-6 md:p-10">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Step-by-Step Guide</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div>
                <h3 class="text-lg md:text-xl font-bold">Step 1</h3>
                <p class="text-sm">Sign up for an account.</p>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-bold">Step 2</h3>
                <p class="text-sm">Set up your profile.</p>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-bold">Step 3</h3>
                <p class="text-sm">Start using our services.</p>
              </div>
            </div>
          </div>
        `,
        label: "Step-by-Step Guide",
      },
      {
        id: "product-showcase-layout",
        iconClass: "bi bi-box-seam",
        content: `
          <div class="p-6 md:p-10 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Our Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <div class="bg-gray-100 p-4 rounded-lg text-center">
                <img src="https://via.placeholder.com/150" alt="Product 1" class="w-full h-auto rounded">
                <h3 class="mt-4 text-lg font-bold">Product 1</h3>
                <p class="text-sm mt-2">Brief description of the product.</p>
                
              </div>
              <div class="bg-gray-100 p-4 rounded-lg text-center">
                <img src="https://via.placeholder.com/150" alt="Product 2" class="w-full h-auto rounded">
                <h3 class="mt-4 text-lg font-bold">Product 2</h3>
                <p class="text-sm mt-2">Brief description of the product.</p>
               
              </div>
              <div class="bg-gray-100 p-4 rounded-lg text-center">
                <img src="https://via.placeholder.com/150" alt="Product 3" class="w-full h-auto rounded">
                <h3 class="mt-4 text-lg font-bold">Product 3</h3>
                <p class="text-sm mt-2">Brief description of the product.</p>
               
              </div>
              <div class="bg-gray-100 p-4 rounded-lg text-center">
                <img src="https://via.placeholder.com/150" alt="Product 4" class="w-full h-auto rounded">
                <h3 class="mt-4 text-lg font-bold">Product 4</h3>
                <p class="text-sm mt-2">Brief description of the product.</p>
              
              </div>
            </div>
          </div>
        `,
        label: "Product Showcase",
      },
      {
        id: "testimonial-carousel-layout",
        iconClass: "bi bi-chat-left-dots-fill",
        content: `
          <div class="p-6 md:p-10 bg-gray-50">
            <h2 class="text-2xl md:text-3xl font-bold text-center">What Our Clients Say</h2>
            <div class="mt-6">
              <div class="relative overflow-hidden">
                <div class="flex space-x-6 transition-transform">
                  <div class="p-4 rounded-lg bg-white shadow-md flex-none w-80">
                    <p class="italic">"The service was excellent and the team was very professional!"</p>
                    <h3 class="text-sm font-bold mt-2">- John Doe</h3>
                  </div>
                  <div class="p-4 rounded-lg bg-white shadow-md flex-none w-80">
                    <p class="italic">"Highly recommend for their quick support and quality solutions."</p>
                    <h3 class="text-sm font-bold mt-2">- Jane Smith</h3>
                  </div>
                  <div class="p-4 rounded-lg bg-white shadow-md flex-none w-80">
                    <p class="italic">"A reliable and professional team that delivers great results!"</p>
                    <h3 class="text-sm font-bold mt-2">- Sarah Wilson</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        label: "Testimonial Carousel",
      },
      {
        id: "pricing-grid-layout",
        iconClass: "bi bi-tags-fill",
        content: `
          <div class="p-6 md:p-10 bg-gray-100">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Pricing Plans</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 class="text-lg md:text-xl font-bold">Basic Plan</h3>
                <p class="text-sm mt-2">$9.99/month</p>
                <ul class="mt-4 text-sm space-y-2">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 class="text-lg md:text-xl font-bold">Standard Plan</h3>
                <p class="text-sm mt-2">$29.99/month</p>
                <ul class="mt-4 text-sm space-y-2">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
          
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 class="text-lg md:text-xl font-bold">Premium Plan</h3>
                <p class="text-sm mt-2">$49.99/month</p>
                <ul class="mt-4 text-sm space-y-2">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
            
              </div>
            </div>
          </div>
        `,
        label: "Pricing Grid",
      },
      {
        id: "interactive-gallery-layout",
        iconClass: "bi bi-collection-fill",
        content: `
          <div class="p-6 md:p-10 bg-gray-50">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Gallery</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
              <div class="relative">
                <img src="https://via.placeholder.com/300" alt="Gallery Item" class="w-full h-auto rounded-lg shadow">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                 
                </div>
              </div>
              <div class="relative">
                <img src="https://via.placeholder.com/300" alt="Gallery Item" class="w-full h-auto rounded-lg shadow">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                 
                </div>
              </div>
              <div class="relative">
                <img src="https://via.placeholder.com/300" alt="Gallery Item" class="w-full h-auto rounded-lg shadow">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                 
                </div>
              </div>
              <div class="relative">
                <img src="https://via.placeholder.com/300" alt="Gallery Item" class="w-full h-auto rounded-lg shadow">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                  
                </div>
              </div>
              <!-- Add more gallery items as needed -->
            </div>
          </div>
        `,
        label: "Interactive Gallery",
      },
      // {
      //   id: "cta-banner-layout",
      //   iconClass: "bi bi-bullseye",
      //   content: `
      //     <div class="relative p-6 md:p-10 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
      //       <h2 class="text-2xl md:text-3xl font-bold text-center">Ready to Get Started?</h2>
      //       <p class="mt-4 text-center text-sm md:text-base">Join us today and unlock endless possibilities!</p>
      //       <div class="flex justify-center mt-6">
      //         <button class="px-6 py-2 bg-white text-green-600 rounded-md">Sign Up</button>
      //       </div>
      //     </div>
      //   `,
      //   label: "Call to Action Banner",
      // },

      // Additional Unique Layout Designs

      {
        id: "offset-gallery-layout",
        iconClass: "bi bi-layout-three-columns",
        content: `
      <div class="p-6 md:p-10 bg-gray-200">
        <h2 class="text-2xl md:text-3xl font-bold text-center">Offset Gallery</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div class="transform translate-y-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/200" alt="Image" class="w-full h-auto rounded-t-lg">
            <p class="p-4 text-sm text-center">Gallery Item 1</p>
          </div>
          <div class="transform -translate-y-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/200" alt="Image" class="w-full h-auto rounded-t-lg">
            <p class="p-4 text-sm text-center">Gallery Item 2</p>
          </div>
          <div class="transform translate-y-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/200" alt="Image" class="w-full h-auto rounded-t-lg">
            <p class="p-4 text-sm text-center">Gallery Item 3</p>
          </div>
          <div class="transform -translate-y-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/200" alt="Image" class="w-full h-auto rounded-t-lg">
            <p class="p-4 text-sm text-center">Gallery Item 4</p>
          </div>
        </div>
      </div>
    `,
        label: "Offset Gallery",
      },
      {
        id: "timeline-layout",
        iconClass: "bi bi-clock-history",
        content: `
      <div class="p-6 md:p-10 bg-gray-100">
        <h2 class="text-2xl md:text-3xl font-bold text-center">Timeline</h2>
        <div class="relative mt-8">
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
          <div class="space-y-8">
            <div class="flex items-center gap-4 relative">
              <div class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">1</div>
              <div class="bg-white p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-bold">2020</h3>
                <p class="mt-2 text-sm">Launched our first product.</p>
              </div>
            </div>
            <div class="flex items-center gap-4 relative">
              <div class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">2</div>
              <div class="bg-white p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-bold">2021</h3>
                <p class="mt-2 text-sm">Expanded our services globally.</p>
              </div>
            </div>
            <div class="flex items-center gap-4 relative">
              <div class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">3</div>
              <div class="bg-white p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-bold">2023</h3>
                <p class="mt-2 text-sm">Achieved 1 million users.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
        label: "Timeline",
      },
      {
        id: "floating-feature-layout",
        iconClass: "bi bi-box-arrow-up",
        content: `
      <div class="relative bg-gray-50">
        <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-10"></div>
        <div class="relative p-6 md:p-10">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-lg font-bold">Feature 1</h3>
              <p class="mt-2 text-sm">Highlight your unique features with a floating design.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md transform -translate-y-4">
              <h3 class="text-lg font-bold">Feature 2</h3>
              <p class="mt-2 text-sm">Easily adaptable for various use cases.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-lg font-bold">Feature 3</h3>
              <p class="mt-2 text-sm">Interactive and visually appealing.</p>
            </div>
          </div>
        </div>
      </div>
    `,
        label: "Floating Features",
      },
      // Unique Size and Shape Templates
      {
        id: "arc-divider-layout",
        iconClass: "bi bi-shield-fill",
        content: `
      <div class="relative bg-gray-800 text-white">
        <!-- Arc Divider -->
        <div class="absolute inset-x-0 bottom-0 overflow-hidden">
          <svg class="w-full h-16 md:h-24" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M0,64L720,160L1440,64L1440,320L0,320Z"></path>
          </svg>
        </div>
        <div class="p-6 md:p-10 text-center">
          <h2 class="text-2xl md:text-4xl font-bold">Arc Divider</h2>
          <p class="mt-4 text-sm md:text-lg">Use smooth arc transitions to create a visually stunning design.</p>
        </div>
      </div>
    `,
        label: "Arc Divider",
      },
      // Layouts with Video and Image Sections
      {
        id: "image-gallery-with-captions",
        iconClass: "bi bi-images",
        content: `
      <div class="p-6 md:p-10 bg-gray-50">
        <h2 class="text-2xl md:text-3xl font-bold text-center">Image Gallery</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div class="relative">
            <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-auto rounded-lg shadow-md">
            <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-lg">
              Caption for Image 1
            </div>
          </div>
          <div class="relative">
            <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-auto rounded-lg shadow-md">
            <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-lg">
              Caption for Image 2
            </div>
          </div>
          <div class="relative">
            <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-auto rounded-lg shadow-md">
            <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-lg">
              Caption for Image 3
            </div>
          </div>
        </div>
      </div>
    `,
        label: "Image Gallery with Captions",
      },
      {
        id: "split-video-and-image",
        iconClass: "bi bi-columns-gap",
        content: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
        <div class="relative">
          <video autoplay loop muted class="w-full h-full object-cover rounded-lg shadow-md"></video>
        
        </div>
        <div class="flex flex-col items-center justify-center text-center">
          <img src="https://via.placeholder.com/400" alt="Image" class="rounded-lg shadow-md">
          <p class="mt-4 text-sm md:text-base">Complement your video with an impactful image.</p>
        </div>
      </div>
    `,
        label: "Split Video and Image",
      },
      {
        id: "media-showcase-grid",
        iconClass: "bi bi-grid-3x3-gap-fill",
        content: `
      <div class="p-6 md:p-10 bg-gray-100">
        <h2 class="text-2xl md:text-3xl font-bold text-center">Media Showcase</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div class="relative">
            <video autoplay loop muted class="w-full h-full object-cover rounded-lg shadow-md"></video>
            <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-lg">
              Video 1
            </div>
          </div>
          <div class="relative">
            <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-auto rounded-lg shadow-md">
            <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-lg">
              Image 1
            </div>
          </div>
          <div class="relative">
            <video autoplay loop muted class="w-full h-full object-cover rounded-lg shadow-md"></video>
            <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-lg">
              Video 2
            </div>
          </div>
        </div>
      </div>
    `,
        label: "Media Showcase Grid",
      },
      {
        id: "italic-paragraph",
        iconClass: "bi bi-type-italic",
        content: `
          <div class="p-6 md:p-10 bg-gray-50 text-center">
            <h2 class="text-2xl md:text-3xl font-bold">Italic Paragraph</h2>
            <p class="mt-4 text-sm md:text-lg italic leading-relaxed">
              "This is an example of an italicized paragraph. Use this layout to highlight quotes, anecdotes, or any text that requires a softer, more elegant presentation. Its responsive design ensures readability on any device."
            </p>
            <p class="mt-6 text-sm md:text-base italic leading-relaxed">
              - Author or Source
            </p>
          </div>
        `,
        label: "Italic Paragraph",
      },
      {
        id: "italic-two-column-paragraph",
        iconClass: "bi bi-columns",
        content: `
          <div class="p-6 md:p-10 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Two-Column Italic Paragraph</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <p class="text-sm md:text-base italic leading-relaxed">
                "This is the first column of italic text. It is designed for presenting complementary ideas or narratives. The layout is perfect for storytelling or articles that involve two perspectives or contrasting information."
              </p>
              <p class="text-sm md:text-base italic leading-relaxed">
                "This is the second column of italic text. It ensures a clean and modern design with responsive typography. Use it to balance visual content and text."
              </p>
            </div>
          </div>
        `,
        label: "Two-Column Italic Paragraph",
      },
      {
        id: "italic-paragraph-with-image",
        iconClass: "bi bi-image-alt",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 bg-gray-50">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold">Italic Paragraph with Image</h2>
              <p class="mt-4 text-sm md:text-base italic leading-relaxed">
                "Pairing italic text with an image creates a visually engaging layout. Use this style for articles, quotes, or sections where visuals complement your narrative."
              </p>
            </div>
            <div class="flex justify-center">
              <img src="https://via.placeholder.com/400" alt="Illustration" class="rounded-lg shadow-md">
            </div>
          </div>
        `,
        label: "Italic Paragraph with Image",
      },
      {
        id: "highlighted-italic-paragraph",
        iconClass: "bi bi-quote",
        content: `
          <div class="p-6 md:p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h2 class="text-2xl md:text-3xl font-bold">Highlighted Italic Paragraph</h2>
            <p class="mt-4 text-sm md:text-lg italic leading-relaxed">
              "Use a highlighted background to emphasize important quotes or text. This layout is perfect for callouts, testimonials, or any text that needs to stand out."
            </p>
          </div>
        `,
        label: "Highlighted Italic Paragraph",
      },
      {
        id: "italic-stacked-paragraph",
        iconClass: "bi bi-text-paragraph",
        content: `
          <div class="p-6 md:p-10 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-center">Italic Stacked Paragraphs</h2>
            <div class="mt-6 space-y-6">
              <p class="text-sm md:text-base italic leading-relaxed">
                "Stacked paragraph layouts are ideal for long-form content. Each paragraph is italicized to create a consistent and elegant reading experience."
              </p>
              <p class="text-sm md:text-base italic leading-relaxed">
                "Use this format for narratives, poetry, or sections that require an artistic touch."
              </p>
              <p class="text-sm md:text-base italic leading-relaxed">
                "Maintain consistent styles for a cohesive design across your content."
              </p>
            </div>
          </div>
        `,
        label: "Italic Stacked Paragraphs",
      },
    ];

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

    //Akanksha Custom Templates Start--------------------

    // NEW AXIS PAGE

//     editor.BlockManager.add("axis-template", {
//       label: `
//   <div style="text-align: center; padding: 10px;">
//     <img src="https://assets1.cleartax-cdn.com/clearsave/images/1599737782_axis_mf_v4.png" 
//          alt="Axis Finance Logo" 
//          style="width: 25px; height: 25px; display: block; margin: auto;">
//     <div style="margin-top: 5px; font-size: 12px; color: white;">Axis Template</div>
// </div>
// `,
//       content: `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
          
//           <style>* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}.custom-navbar{min-height:80px;background-position-x:50%;background-position-y:50%;background-repeat:no-repeat;background-attachment:scroll;background-image:url("https://axis-files-development.zohostratus.in/AxixHeader-removebg-preview.png");background-origin:padding-box;background-clip:border-box;background-size:cover;background-color:rgb(255, 255, 255);display:flex;align-items:center;justify-content:space-between;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;}.logo-container{display:flex;align-items:center;}.nav-logo{height:50px;width:auto;margin-right:10px;}.navbar-links{flex-grow:1;display:flex;justify-content:center;min-height:60px;align-items:center;background-color:white;padding-bottom:0px;box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 6px;}.nav-links-list{list-style-position:outside;list-style-image:none;list-style-type:none;display:flex;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}.nav-item{margin-top:0px;margin-right:15px;margin-bottom:0px;margin-left:15px;}.nav-item a{text-decoration-color:currentcolor;text-decoration-line:none;text-decoration-style:solid;text-decoration-thickness:auto;font-size:18px;color:black;font-weight:500;transition-property:color;transition-duration:0.3s;transition-timing-function:ease;transition-delay:0s;transition-behavior:normal;}.carousel-img{height:300px;object-fit:cover;}.testimonial-card{min-height:400px;position:relative;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;border-bottom-left-radius:10px;}.quote-icon{font-size:3.5rem;color:rgb(151, 20, 77);}.testimonial-text{font-size:1.1rem;color:rgb(51, 51, 51);}.testimonial-name{font-weight:bold;color:rgb(151, 20, 77);}#ipyh{position:sticky;top:0px;z-index:1000;}#ionas{font-family:Arial, sans-serif;color:rgb(151, 20, 77);}#iua7z{font-family:Arial, sans-serif;color:rgb(151, 20, 77);}#irak3{font-size:2rem;color:rgb(151, 20, 77);}#i8iqi{color:rgb(151, 20, 77);}#ijw71{background-color:rgb(130, 144, 100);}#itpt9{font-family:"PF Handbook Pro", sans-serif;background-color:rgb(245, 245, 245);padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#iy5xn{font-size:22px;color:rgb(51, 51, 51);line-height:1.6;}#iwrdi7{background-color:rgb(255, 255, 255);border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;border-bottom-left-radius:10px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;box-shadow:rgba(0, 0, 0, 0.1) 0px 2px 4px;}#i8jefr{color:rgb(151, 20, 77);font-size:24px;font-weight:bold;}#ie942l{background-color:rgb(130, 144, 100);color:rgb(255, 255, 255);font-size:30px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;}#i1ddp2{font-size:18px;color:rgb(51, 51, 51);line-height:1.6;}#i6o6ik{background-color:rgb(130, 144, 100);color:rgb(255, 255, 255);font-size:30px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;}#iat5ue{font-size:18px;color:rgb(51, 51, 51);line-height:1.6;}#in21xk{background-color:rgb(130, 144, 100);color:rgb(255, 255, 255);font-size:30px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;}#idfp4j{font-size:18px;color:rgb(51, 51, 51);line-height:1.6;}#il62sp{background-color:rgb(130, 144, 100);padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;border-bottom-left-radius:10px;box-shadow:rgba(0, 0, 0, 0.1) 0px 2px 4px;}#i5pk1l{background-color:rgb(255, 255, 255);color:rgb(130, 144, 100);font-size:30px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;}#iak31i{font-size:18px;color:rgb(255, 255, 255);line-height:1.6;}#ilcbdh{background-color:rgb(255, 255, 255);color:rgb(130, 144, 100);font-size:30px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;}#idb8bc{font-size:18px;color:rgb(255, 255, 255);line-height:1.6;}#i849it{background-color:rgb(255, 255, 255);color:rgb(130, 144, 100);font-size:30px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;}#iq6z4b{font-size:18px;color:rgb(255, 255, 255);line-height:1.6;}#ivvw33{background-color:rgb(255, 255, 255);color:rgb(130, 144, 100);font-size:30px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;}#im77li{font-size:18px;color:rgb(255, 255, 255);line-height:1.6;}#i7k6zy{font-family:Arial, sans-serif;color:rgb(151, 20, 77);}#iui99f{background-color:rgb(188, 151, 92);color:white;}#iomutk{font-family:Arial, sans-serif;}#iujaxv{font-size:2rem;}#ifs3mf{font-family:Arial, sans-serif;}#ihbncf{font-family:Arial, sans-serif;}#ij3on5{font-size:2rem;}#i8veqi{font-family:Arial, sans-serif;}#iq7tlp{font-family:Arial, sans-serif;}#i7w1uz{font-size:2rem;}#ibz2sl{font-family:Arial, sans-serif;}#ivvijg{font-family:Arial, sans-serif;}#i3445w{font-family:Arial, sans-serif;color:rgb(151, 20, 77);}#ivrdd7{font-family:Arial, sans-serif;font-size:1.1rem;}#iu06d1{font-family:Arial, sans-serif;font-size:1.1rem;}#i59wpp{font-family:Arial, sans-serif;font-size:1.1rem;}#idi73e{border-top-width:1px;border-top-style:solid;border-top-color:rgb(217, 83, 79);}#i12812{font-family:Arial, sans-serif;}#inpcru{font-family:Arial, sans-serif;color:rgb(151, 20, 77);}#i832c3{top:-25px;left:20px;}#i2f0wv{bottom:-25px;right:-15px;}#ib7fef{top:-25px;left:20px;}#iv5g9j{bottom:-25px;right:-15px;}#isjd6m{top:-25px;left:20px;}#i1aoz3{bottom:-25px;right:-15px;}#ilfw3k{top:-25px;left:20px;}#i1ad3d{bottom:-25px;right:-15px;}.carousel-control-next-icon{background-color:grey;}.carousel-control-prev-icon{background-color:grey;}@media (max-width: 992px){.nav-logo{width:168px;}.carousel-control-next-icon{background-color:grey;}.carousel-control-prev-icon{background-color:grey;}}@media (max-width: 768px){.custom-navbar{background-position-x:50%;background-position-y:50%;background-repeat:no-repeat;background-attachment:scroll;background-image:url("./Navbar logo.png");background-origin:padding-box;background-clip:border-box;background-size:cover;background-color:rgb(151, 20, 77);flex-direction:column;align-items:center;height:auto;padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;width:100%;}.logo-container{justify-content:center;width:100%;margin-bottom:10px;background-color:rgb(151, 20, 77);}.nav-logo{height:40px;width:auto;}.header{width:100%;padding-top:15px;padding-right:0px;padding-bottom:15px;padding-left:0px;background-color:transparent !important;}.navbar-links{width:100%;justify-content:center;margin-left:0px;min-height:auto;padding-bottom:0px;background-color:white !important;}.nav-links-list{flex-wrap:wrap;justify-content:center;}.nav-item{margin-top:5px;margin-right:10px;margin-bottom:5px;margin-left:10px;}.nav-item a{color:black !important;}h1, h3{font-size:1.5rem;}.fw-bold{font-size:0.9rem;}.bg-warning{padding-top:2rem;padding-right:1rem;padding-bottom:2rem;padding-left:1rem;}.navbar.custom-navbar{margin-top:-16px;margin-right:0px;margin-bottom:0px;margin-left:0px;}}@media (max-width: 576px){.d-flex{flex-direction:column;align-items:start;}.bg-warning{text-align:center;}}@media (max-width: 480px){.navbar.custom-navbar{margin-top:-15px;margin-right:0px;margin-bottom:0px;margin-left:0px;}}</style>
//           <script src=""></script>
//       </head>
//       <body>
//           <body><section id="ipyh" class="header"><!-- Navbar --><nav class="navbar custom-navbar"><div class="container-fluid"><!-- Logo + Text Container --><div class="logo-container"><img src="data:image/png;base64,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" alt="Logo" class="nav-logo"/></div></div></nav><!-- Navbar Links --><div class="navbar-links"><ul class="nav-links-list"><li class="nav-item"><a href="#">Home</a></li><li class="nav-item"><a href="#">About</a></li><li class="nav-item"><a href="#">Services</a></li><li class="nav-item"><a href="#testimonials" class="scroll-link">Testimonials</a></li><li class="nav-item"><a href="#MicroLap" class="scroll-link">MicroLap</a></li><li class="nav-item"><a href="#">Blog</a></li><li class="nav-item"><a href="#">Contact</a></li></ul></div></section><!-- CSS Styles --><section class="py-5"><div class="container"><!-- Centered Heading --><div class="text-center mb-5"><h1 id="ionas" class="fw-bold">
//       Loans up to Rs. 75 Lakhs without ITR
//     </h1><h3 id="iua7z" class="fw-bold">
//       Introducing Micro LAP
//     </h3></div><!-- Responsive Layout with Proper Gap --><div class="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-4"><!-- Left Section: Carousel --><div class="col-12 col-md-6"><div id="carouselExampleIndicators" data-bs-ride="carousel" class="carousel slide"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1" class="active"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active"><img src="ç" alt="Carousel Image 1" class="d-block w-100 carousel-img"/></div><div class="carousel-item"><img src="https://images.moneycontrol.com/static-mcnews/2021/10/cards_banking_financial-services_banK3.jpg?impolicy=website&width=1600&height=900" alt="Carousel Image 2" class="d-block w-100 carousel-img"/></div><div class="carousel-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynD1AYYPymrruyX_KaMBDTCM4EnFp2Ad0Og&s" alt="Carousel Image 3" class="d-block w-100 carousel-img"/></div></div><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" class="carousel-control-prev"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" class="carousel-control-next"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></button></div></div><!-- Right Section: Form Parent --><div class="form-parent h-64 overflow-y-auto e hide-display-bar justify-center items-center w-full md:w-1/2"><p>Drop your form here</p><!-- This is where the form will be dropped --><div class="form-area w-full flex justify-center items-center"></div></div></div></div></section><section id="MicroLap" class="container py-4"><!-- Header Section --><div class="text-center"><h5 id="irak3" class="text-muted d-inline-block border-top border-bottom border-success px-3">Introducing <span class="text-success">Micro LAP</span></h5></div><!-- Content Section --><div class="row align-items-center mt-4"><!-- Left Column --><div class="col-md-6 text-center text-md-start"><h2 id="i8iqi" class="fw-bold">Loans up to 75 Lakhs <br/> without ITR</h2></div><!-- Right Column --><div class="col-md-6"><div id="ijw71" class="p-4 text-white rounded"><h5 class="fw-bold mb-0">Key Benefits</h5></div></div></div></section><!-- Bootstrap CSS and JS --><link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet"/><section id="itpt9" class="container"><div class="row mb-4"><div class="col"><p id="iy5xn">No matter if you are the owner of a kirana shop, tea stall, food joint, or an entrepreneur, your property holds the potential to unlock your dreams.</p></div></div><div class="row"><!-- Eligibility Criteria --><div class="col-md-6"><div id="iwrdi7" class="criteria"><h5 id="i8jefr" class="highlight">Eligibility criteria of Micro LAP</h5><div class="d-flex align-items-center mb-3"><div id="ie942l" class="icon-box me-3">
//                       📈
//                   </div><div id="i1ddp2"><strong>Minimum income</strong><br/>
//                       Salaried Rs. 84,000 p.a.<br/>
//                       Self-employed Rs. 1 lakh p.a.
//                   </div></div><div class="d-flex align-items-center mb-3"><div id="i6o6ik" class="icon-box me-3">
//                       💰
//                   </div><div id="iat5ue"><strong>Loan amount</strong><br/>
//                       Get up to 70% of the property value on residential property
//                   </div></div><div class="d-flex align-items-center"><div id="in21xk" class="icon-box me-3">
//                       🎂
//                   </div><div id="idfp4j"><strong>Minimum Age applicable</strong><br/>
//                       25 years
//                   </div></div></div></div><!-- Features --><div class="col-md-6"><div id="il62sp"><div class="d-flex align-items-center mb-3"><div id="i5pk1l" class="icon-box me-3">
//                       📄
//                   </div><div id="iak31i"><strong>No ITR Proof required</strong></div></div><div class="d-flex align-items-center mb-3"><div id="ilcbdh" class="icon-box me-3">
//                       📃
//                   </div><div id="idb8bc"><strong>Simple documentation</strong></div></div><div class="d-flex align-items-center mb-3"><div id="i849it" class="icon-box me-3">
//                       💵
//                   </div><div id="iq6z4b"><strong>Loans up to ₹75 Lakhs without ITR</strong></div></div><div class="d-flex align-items-center"><div id="ivvw33" class="icon-box me-3">
//                       ⏳
//                   </div><div id="im77li"><strong>Repayment comfortably over 15 years</strong></div></div></div></div></div></section><section class="py-5"><div class="container"><!-- Centered Heading --><div class="text-center mb-5"><h1 id="i7k6zy" class="fw-bold">Unlock Your Growth with a Loan Against Property</h1></div><div class="row"><!-- Left Section: Key Benefits --><div class="col-md-5"><div id="iui99f" class="p-4 rounded shadow"><h4 id="iomutk" class="fw-bold mb-4">Key Benefits</h4><div class="d-flex align-items-center mb-3"><div id="iujaxv" class="me-3"><i class="bi bi-clock"></i></div><div><h5 id="ifs3mf" class="fw-bold mb-1">Loan Tenure</h5><p id="ihbncf" class="fw-bold">Leverage repayment tenure of up to 20 years*</p></div></div><div class="d-flex align-items-center mb-3"><div id="ij3on5" class="me-3"><i class="bi bi-house"></i></div><div><h5 id="i8veqi" class="fw-bold mb-1">Residential Property</h5><p id="iq7tlp" class="fw-bold">Get up to 70% of the property value on residential property</p></div></div><div class="d-flex align-items-center"><div id="i7w1uz" class="me-3"><i class="bi bi-building"></i></div><div><h5 id="ibz2sl" class="fw-bold mb-1">Commercial Property</h5><p id="ivvijg" class="fw-bold">Get up to 60% of the property value on commercial property</p></div></div></div></div><!-- Right Section: Content --><div class="col-md-7"><h3 id="i3445w" class="fw-bold">Dream. Chase. Win.</h3><p id="ivrdd7" class="text-muted fw-bold">
//         Fulfill your aspirations with our Loan Against Property. Easily expand your business, meet your personal needs such as funds for marriage, education, medical emergencies, etc., or simply level up in life by conveniently raising funds with your owned property as collateral.
//       </p><p id="iu06d1" class="text-muted fw-bold">
//         It's easier to spread your wings and achieve your goals with funds from a Loan Against Property.
//       </p><p id="i59wpp" class="fw-bold">
//         Talk to our specialist for guided assistance on how to apply for our Loan Against Property.
//       </p><hr id="idi73e" class="mt-4"/><p id="i12812" class="text-muted small">
//         *Disclaimer - All loans are subject to internal norms and credit appraisal at the sole discretion of Aditya Birla Housing Finance Limited (ABHFL) and other terms and conditions.
//       </p></div></div></div></section><!-- Testimonials Section --><section id="testimonials" class="py-5"><div class="container"><!-- Centered Heading --><div class="text-center mb-5"><h1 id="inpcru" class="fw-bold">Testimonials</h1></div><!-- Bootstrap Carousel --><div id="testimonialCarousel" data-bs-ride="carousel" class="carousel slide"><div class="carousel-inner"><!-- Slide 1 --><div class="carousel-item active"><div class="row gy-4"><div class="col-md-6"><div class="card testimonial-card"><div id="i832c3" class="position-absolute"><i class="fas fa-quote-left quote-icon"></i></div><div class="d-flex align-items-center mb-3"><span class="badge bg-warning text-dark me-2">LAP</span><h5 class="testimonial-name">B NARSIMULU</h5></div><div class="d-flex align-items-center mb-2"><i class="fas fa-map-marker-alt text-muted me-2"></i><p class="text-muted mb-0">Hyderabad</p></div><p class="testimonial-text">
//                                   Seamless onboarding experience and great support provided by the Relationship Manager during the documentation process.
//                               </p><div id="i2f0wv" class="position-absolute"><i class="fas fa-quote-right quote-icon"></i></div></div></div><div class="col-md-6"><div class="card testimonial-card"><div id="ib7fef" class="position-absolute"><i class="fas fa-quote-left quote-icon"></i></div><div class="d-flex align-items-center mb-3"><span class="badge bg-warning text-dark me-2">LAP</span><h5 class="testimonial-name">B NARSIMULU</h5></div><div class="d-flex align-items-center mb-2"><i class="fas fa-map-marker-alt text-muted me-2"></i><p class="text-muted mb-0">Hyderabad</p></div><p class="testimonial-text">
//                                   Seamless onboarding experience and great support provided by the Relationship Manager during the documentation process.
//                               </p><div id="iv5g9j" class="position-absolute"><i class="fas fa-quote-right quote-icon"></i></div></div></div></div></div><!-- Slide 2 --><div class="carousel-item"><div class="row gy-4"><div class="col-md-6"><div class="card testimonial-card"><div id="isjd6m" class="position-absolute"><i class="fas fa-quote-left quote-icon"></i></div><div class="d-flex align-items-center mb-3"><span class="badge bg-warning text-dark me-2">Loan</span><h5 class="testimonial-name">RAVI KUMAR</h5></div><div class="d-flex align-items-center mb-2"><i class="fas fa-map-marker-alt text-muted me-2"></i><p class="text-muted mb-0">Bangalore</p></div><p class="testimonial-text">
//                                   The entire loan process was hassle-free and transparent. I received my approval quickly!
//                               </p><div id="i1aoz3" class="position-absolute"><i class="fas fa-quote-right quote-icon"></i></div></div></div><div class="col-md-6"><div class="card testimonial-card"><div id="ilfw3k" class="position-absolute"><i class="fas fa-quote-left quote-icon"></i></div><div class="d-flex align-items-center mb-3"><span class="badge bg-warning text-dark me-2">Mortgage</span><h5 class="testimonial-name">ANITA SHARMA</h5></div><div class="d-flex align-items-center mb-2"><i class="fas fa-map-marker-alt text-muted me-2"></i><p class="text-muted mb-0">Mumbai</p></div><p class="testimonial-text">
//                                   Excellent customer support and fast processing. Highly recommended!
//                               </p><div id="i1ad3d" class="position-absolute"><i class="fas fa-quote-right quote-icon"></i></div></div></div></div></div></div><!-- Carousel Controls --><button type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev" class="carousel-control-prev"><span class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></button><button type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next" class="carousel-control-next"><span class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></button></div></div></section><!-- Custom Styling --><!-- Bootstrap JS --></body>
        
//       </body>
//       </html>
    
      

//                 `,
//       category: "Templates",
//     });

    editor.BlockManager.add("bank-template", {
      label: `
        <div style="text-align: center; padding: 10px;">
          <i class="fa fa-university" style="font-size: 25px;"></i>
          <div style="margin-top: 5px; font-size: 12px; color:white;">Dark Theme</div>
        </div>
      `,
      content: `
      <!-- Navigation Bar -->
<nav style="background-color: white; color: black; padding: 1rem 0; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); position: sticky; top: 0; z-index: 9999;">
  <div class="container d-flex justify-content-between align-items-center">
    <h1 class="h3 font-weight-bold">Bank Name</h1>
    <ul class="nav">
      <li class="nav-item"><a href="#home" class="nav-link text-black fw-bold">Home</a></li>
      <li class="nav-item"><a href="#shop" class="nav-link text-black fw-bold">Services</a></li>
      <li class="nav-item"><a href="#cart" class="nav-link text-black fw-bold">Contact</a></li>
      <li class="nav-item"><a href="#contact" class="nav-link text-black fw-bold">About Us</a></li>
    </ul>
  </div>
</nav>

  <!-- Header with Banner -->
  <header class="vh-100 d-flex flex-column justify-content-center align-items-center text-white text-center" style="background-color: rgb(1, 22, 43); font-family: 'Arial', sans-serif;">
    <div class="container">
      <h1 class="display-4 fw-bold mb-4">Welcome to Bank Name</h1>
      <p class="fs-5 mb-4">
        Discover a world of financial solutions with us. Your financial success is our priority.
      </p>
      <a href="#services" class="btn btn-warning fw-bold px-4 py-3" style="background-color: yellow; color: black; border: none;">
  Explore Our Services
</a>

    </div>
  </header>
</section>





    
<section class="py-5" style="background-color: rgb(1, 22, 43);">
  <div class="container text-center">
    <h2 class="text-white fw-bold mb-4">Our Solutions</h2>
    <div class="row g-4">
      <!-- Grid Item 1 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm" style="background-color: rgb(1, 22, 43);">
          <img src="https://img.freepik.com/premium-photo/close-up-laptop-desktop-with-abstract-glowing-interface-blurry-background-online-banking-internet-finance-technology-concept-double-exposure_670147-63514.jpg" 
               class="card-img-top" alt="Personal Banking" style="height: 200px; object-fit: cover;">
          <div class="card-body text-white">
            <h3 class="card-title fw-bold">Personal Banking</h3>
            <p class="card-text">Manage your personal finances easily and efficiently with our banking services.</p>
          </div>
        </div>
      </div>

      <!-- Grid Item 2 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm" style="background-color: rgb(1, 22, 43);">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPnubjviGto11gLc37Mlejf5IrwZUadISvLX88CIg5m5r_RXqNZcAzhktAPKt-NIn0Gk&usqp=CAU" 
               class="card-img-top" alt="Corporate Solutions" style="height: 200px; object-fit: cover;">
          <div class="card-body text-white">
            <h3 class="card-title fw-bold">Corporate Solutions</h3>
            <p class="card-text">Helping businesses manage their finances and grow with tailored solutions.</p>
          </div>
        </div>
      </div>

      <!-- Grid Item 3 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm" style="background-color: rgb(1, 22, 43);">
          <img src="https://groupiig.com/assets/images/s1.jpg" 
               class="card-img-top" alt="Investment Services" style="height: 200px; object-fit: cover;">
          <div class="card-body text-white">
            <h3 class="card-title fw-bold">Investment Services</h3>
            <p class="card-text">Explore investment options designed to secure your future and enhance growth.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



                       

<section class="py-5 text-center" style="background-color: rgb(1, 22, 43);">
  <div class="container">
    <h2 class="text-white fw-bold mb-5">Bank Loan Process</h2>
    <div class="row g-4 justify-content-center">
      <!-- Step 1 -->
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow" style="background-color: rgb(1, 22, 43);">
          <div class="card-body text-center">
            <div class="mb-3">
              <span class="text-white fw-bold display-6">Step 1</span>
            </div>
            <h5 class="card-title text-white fw-bold">Apply for Loan</h5>
            <p class="card-text text-white">Fill in the loan application form to start the process.</p>
          </div>
        </div>
      </div>
      <!-- Arrow -->
      <div class="col-md-1 d-flex align-items-center justify-content-center">
        <span class="text-primary display-5">&#8594;</span>
      </div>
      <!-- Step 2 -->
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow" style="background-color: rgb(1, 22, 43);">
          <div class="card-body text-center">
            <div class="mb-3">
              <span class="text-white fw-bold display-6">Step 2</span>
            </div>
            <h5 class="card-title text-white fw-bold">Loan Review</h5>
            <p class="card-text text-white">Our team will review your application and documents.</p>
          </div>
        </div>
      </div>
      <!-- Arrow -->
      <div class="col-md-1 d-flex align-items-center justify-content-center">
        <span class="text-primary display-5">&#8594;</span>
      </div>
      <!-- Step 3 -->
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow" style="background-color: rgb(1, 22, 43);">
          <div class="card-body text-center">
            <div class="mb-3">
              <span class="text-white fw-bold display-6">Step 3</span>
            </div>
            <h5 class="card-title text-white fw-bold">Loan Approval</h5>
            <p class="card-text text-white">Once approved, the loan is disbursed to your account.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="py-5" style="background-color: rgb(1, 22, 43);">
  <div class="container">
    <h2 class="text-white fw-bold text-center mb-5">Why Choose Us?</h2>
    <div class="row g-4 justify-content-center">

      <!-- Card 1: Experience Comfort -->
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow" style="background-color: rgb(10, 40, 70);">
          <div class="card-body text-center">
            <div class="mb-3">
              <i class="fas fa-paper-plane icon-outline text-warning"></i>
            </div>
            <h3 class="text-white fw-bold">Experience Comfort</h3>
            <p class="text-white">Our modern chairs prioritize ergonomic design for maximum comfort.</p>
          </div>
        </div>
      </div>

      <!-- Card 2: Elevated Style -->
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow" style="background-color: rgb(10, 40, 70);">
          <div class="card-body text-center">
            <div class="mb-3">
              <i class="fas fa-star icon-outline text-warning"></i>
            </div>
            <h3 class="text-white fw-bold">Elevated Style</h3>
            <p class="text-white">Sleek aesthetics add sophistication to any space.</p>
          </div>
        </div>
      </div>

      <!-- Card 3: Unmatched Quality -->
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow" style="background-color: rgb(10, 40, 70);">
          <div class="card-body text-center">
            <div class="mb-3">
              <i class="fas fa-comments icon-outline text-warning"></i>
            </div>
            <h3 class="text-white fw-bold">Unmatched Quality</h3>
            <p class="text-white">Built to last with premium materials for durability and longevity.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

<!-- New Section with Heading, Paragraph, and Button -->
<section style="padding: 40px 20px; text-align: center; background-color: rgb(1, 22, 43);">
  <h2 style="font-size: 36px; color: white; margin-bottom: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    We Are Providing Best Business Service
  </h2>
  <p style="font-size: 18px; color: white; max-width: 800px; margin-left: auto; margin-right: auto; font-family: 'Arial', sans-serif;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
  </p>
  <a href="#quote" style="padding: 12px 30px; background-color: yellow; color: black; font-size: 16px; text-decoration: none; border-radius: 5px; margin-top: 20px; display: inline-block; font-family: 'Arial', sans-serif;">
    Get a Quote
  </a>
</section>

<!-- Footer Section -->
<footer style="background-color: rgb(1, 22, 43); color: white; padding: 40px 20px; text-align: center; font-family: 'Arial', sans-serif;">

  <!-- Row 1: Company Info -->
  <div style="margin-bottom: 20px;">
    <p style="font-size: 16px; font-weight: bold;">
      &copy; 2025 Bank Name. All Rights Reserved.
    </p>
  </div>

  <!-- Row 2: Social Media Links -->
  <div style="margin-bottom: 20px;">
    <p style="font-size: 16px;">
      <a href="#" style="color: white; text-decoration: none; margin: 0 15px; font-weight: bold;">Facebook</a>
      <a href="#" style="color: white; text-decoration: none; margin: 0 15px; font-weight: bold;">Twitter</a>
      <a href="#" style="color: white; text-decoration: none; margin: 0 15px; font-weight: bold;">Instagram</a>
      <a href="#" style="color: white; text-decoration: none; margin: 0 15px; font-weight: bold;">LinkedIn</a>
    </p>
  </div>

  <!-- Row 3: Quick Links -->
  <div style="margin-bottom: 20px;">
    <p style="font-size: 14px;">
      <a href="#" style="color: white; text-decoration: none; margin: 0 15px; font-weight: bold;">Privacy Policy</a>
      <a href="#" style="color: white; text-decoration: none; margin: 0 15px; font-weight: bold;">Terms of Service</a>
      <a href="#" style="color: white; text-decoration: none; margin: 0 15px; font-weight: bold;">Contact Us</a>
    </p>
  </div>

  <!-- Row 4: Address or Contact Info -->
  <div>
    <p style="font-size: 14px; font-weight: bold;">
      123 Bank Street, City Name, Country | Phone: (123) 456-7890 | Email: info@bank.com
    </p>
  </div>

</footer>


      `,
      category: "Templates",
    });

    editor.BlockManager.add("custom-bank-template", {
      label: `
        <div style="text-align: center; padding: 10px;">
          <i class="fa fa-building" style="font-size: 25px;"></i>
          <div style="margin-top: 5px; font-size: 12px; color:white;">Light Theme</div>
        </div>
      `,
      content: `
<nav style="background-color: white; color: black; padding: 1rem 0; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); position: sticky; top: 0; z-index: 9999;">
  <div class="container d-flex justify-content-between align-items-center">
    <h1 class="h3 fw-bold">Custom Bank</h1>
    <ul class="nav">
      <li class="nav-item"><a href="#home" class="nav-link text-black fw-bold">Home</a></li>
      <li class="nav-item"><a href="#shop" class="nav-link text-black fw-bold">Services</a></li>
      <li class="nav-item"><a href="#cart" class="nav-link text-black fw-bold">About Us</a></li>
      <li class="nav-item"><a href="#contact" class="nav-link text-black fw-bold">Careers</a></li>
    </ul>
  </div>
</nav>


              <!-- Header Section -->

<section class="py-5 bg-white text-center" style="font-family: 'Arial', sans-serif;">
  <div class="container">
    <div class="bg-light p-5 rounded-3 shadow-sm">
      <h1 class="display-5 fw-bold mb-4">Your Trusted Financial Partner</h1>
      <p class="fs-5 fw-bold mb-4">
        Explore personalized banking solutions and start your financial journey with us today.
      </p>
      <a href="#services" class="btn btn-danger btn-lg fw-bold">Discover Our Services</a>
    </div>
  </div>
</section>
<section class="py-5 bg-white" style="font-family: 'Arial', sans-serif; min-height: 500px;">
  <div class="container">
    <div class="row align-items-center g-4">
      <!-- Image Side -->
      <div class="col-md-6">
        <div class="overflow-hidden rounded-3">
          <img src="https://www.ffcommunity.com/bin/uploads/2022/09/Financial-Journey-1.jpg" alt="Bank Image" class="img-fluid">
        </div>
      </div>

      <!-- Text and Button Side -->
      <div class="col-md-6">
        <h2 class="fw-bold text-dark mb-4">Your Financial Journey Starts Here</h2>
        <p class="fs-5 text-dark fw-bold mb-4">
          Begin your path to financial success with tailored solutions that meet your needs and goals. We're here to help you every step of the way.
        </p>
        <a href="#services" class="btn btn-danger btn-lg fw-bold">Get Started</a>
      </div>
    </div>
  </div>
</section>



<section class="py-5 bg-white" style="font-family: 'Helvetica Neue', Arial, sans-serif;">
  <div class="container">
    <h2 class="fw-bold text-center mb-5">Bank Cards</h2>
    <div class="row g-5 text-center">
      <!-- Debit Card Section -->
      <div class="col-md-6">
        <div class="overflow-hidden rounded-3">
          <img src="https://media.istockphoto.com/id/1203763961/photo/stacked-credit-cards.jpg?s=612x612&w=0&k=20&c=bEEGZwG120WKDClhmltyAtP0kPMzNir49P4JO3pcies=" alt="Debit Card" class="img-fluid">
        </div>
        <p class="fs-5 fw-bold text-dark mt-4">
          Experience seamless transactions with our Debit Card. A reliable solution for everyday spending.
        </p>
      </div>

      <!-- Credit Card Section -->
      <div class="col-md-6">
        <div class="overflow-hidden rounded-3">
          <img src="https://www.shutterstock.com/image-photo/online-credit-card-payment-purchases-600nw-1722681316.jpg" alt="Credit Card" class="img-fluid">
        </div>
        <p class="fs-5 fw-bold text-dark mt-4">
          Unlock exclusive benefits and rewards with our Credit Card. A perfect choice for those who want more from their spending.
        </p>
      </div>
    </div>
  </div>
</section>


<!-- New Section with Rounded Image -->
<section style="background-color: white; padding: 60px 20px; font-family: 'Helvetica Neue', Arial, sans-serif;">
  <div style="text-align: center;">
    
    <!-- Small Rounded Image (Smaller Size and Centered) -->
    <img src="https://www.shutterstock.com/image-photo/financial-service-text-on-city-260nw-440167090.jpg" alt="Rounded Image" style="border-radius: 50%; width: 120px; height: 120px; object-fit: cover; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;">
    
    <!-- Heading -->
    <h2 style="font-size: 28px; font-weight: bold; color: black; margin-bottom: 20px;">Your Financial Solutions</h2>
    
    <!-- Paragraph -->
    <p style="font-size: 18px; font-weight: bold; color: black; margin-bottom: 30px;">
      Discover the variety of financial solutions we offer to help you achieve your financial goals. Our expertise and personalized approach ensure that you get the best services tailored to your needs.
    </p>
    
  </div>
</section>
    

<section class="py-5 bg-white" style="font-family: 'Helvetica Neue', Arial, sans-serif;">
  <div class="container">
    <div class="row g-4 text-center">

      <!-- Grid Item 1: Bank Card -->
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm">
          <div class="overflow-hidden rounded-3">
            <img src="https://media.istockphoto.com/id/1304484797/photo/person-holds-a-smartphone-with-mobile-banking-icons-projection.jpg?s=612x612&w=0&k=20&c=eYpphDeQI9uW4DnmQhAx7alQEIrQ7p6JlWfGTb80v-s=" alt="Bank 1" class="img-fluid">
          </div>
          <div class="card-body">
            <p class="fs-6 fw-bold text-dark">
              Our Bank 1 offers personalized banking solutions for your everyday needs. Get instant access to your funds and enjoy secure transactions.
            </p>
          </div>
        </div>
      </div>

      <!-- Grid Item 2: Bank Card -->
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm">
          <div class="overflow-hidden rounded-3">
            <img src="https://media.istockphoto.com/id/1304484797/photo/person-holds-a-smartphone-with-mobile-banking-icons-projection.jpg?s=612x612&w=0&k=20&c=eYpphDeQI9uW4DnmQhAx7alQEIrQ7p6JlWfGTb80v-s=" alt="Bank 2" class="img-fluid">
          </div>
          <div class="card-body">
            <p class="fs-6 fw-bold text-dark">
              Experience exclusive offers with Bank 2's credit cards, providing cashback and rewards for every purchase you make.
            </p>
          </div>
        </div>
      </div>

      <!-- Grid Item 3: Bank Card -->
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm">
          <div class="overflow-hidden rounded-3">
            <img src="https://media.istockphoto.com/id/1304484797/photo/person-holds-a-smartphone-with-mobile-banking-icons-projection.jpg?s=612x612&w=0&k=20&c=eYpphDeQI9uW4DnmQhAx7alQEIrQ7p6JlWfGTb80v-s=" alt="Bank 3" class="img-fluid">
          </div>
          <div class="card-body">
            <p class="fs-6 fw-bold text-dark">
              Bank 3 provides easy access to credit and savings solutions. Start your financial journey with us today!
            </p>
          </div>
        </div>
      </div>

      <!-- Grid Item 4: Bank Card -->
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm">
          <div class="overflow-hidden rounded-3">
            <img src="https://media.istockphoto.com/id/1304484797/photo/person-holds-a-smartphone-with-mobile-banking-icons-projection.jpg?s=612x612&w=0&k=20&c=eYpphDeQI9uW4DnmQhAx7alQEIrQ7p6JlWfGTb80v-s=" alt="Bank 4" class="img-fluid">
          </div>
          <div class="card-body">
            <p class="fs-6 fw-bold text-dark">
              Bank 4 offers the latest in mobile banking and digital payments for your convenience, wherever you are.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<style>
  .card:hover img {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  .card:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
</style>

<section>
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <div class="row text-center text-md-start gy-4">

        <!-- Company Info -->
        <div class="col-md-4">
          <h2 class="h4 fw-bold">Custom Bank</h2>
          <p class="mt-3">
            Your trusted financial partner providing personalized banking solutions.
          </p>
          <p class="mt-3 mb-0">© 2025 Custom Bank. All rights reserved.</p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4">
          <h3 class="h5 fw-bold">Quick Links</h3>
          <ul class="list-unstyled mt-3">
            <li><a href="#home" class="text-white text-decoration-none d-block py-1">Home</a></li>
            <li><a href="#services" class="text-white text-decoration-none d-block py-1">Services</a></li>
            <li><a href="#about" class="text-white text-decoration-none d-block py-1">About Us</a></li>
            <li><a href="#careers" class="text-white text-decoration-none d-block py-1">Careers</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="col-md-4">
          <h3 class="h5 fw-bold">Follow Us</h3>
          <div class="mt-3">
            <a href="#" class="text-white me-3 fs-4"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-white me-3 fs-4"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white me-3 fs-4"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="text-white me-3 fs-4"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>

      <!-- Footer Bottom -->
      <div class="text-center mt-4">
        <p class="mb-0">Designed with 💖 by Custom Bank Team</p>
      </div>
    </div>
  </footer>

  <!-- Font Awesome Icons for Social Media -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</section>


      `,
      category: "Templates",
    });

    editor.BlockManager.add("modern-bank-template", {
      label: `
              <div style="text-align: center; padding: 10px;">
                <i class="fa fa-building" style="font-size: 25px;"></i>
          <div style="margin-top: 5px; font-size: 12px; color:white;">Black Theme</div>
        </div>

            `,
      content: `
                
<!-- Navigation Bar -->
<nav style="background-color: white; color: black; padding: 1rem 0; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); position: sticky; top: 0; z-index: 9999;">
  <div class="container d-flex justify-content-between align-items-center">
    <h1 class="h3 fw-bold">Modern Bank</h1>
    <ul class="nav">
      <li class="nav-item"><a href="#home" class="nav-link text-black fw-bold">Home</a></li>
      <li class="nav-item"><a href="#shop" class="nav-link text-black fw-bold">Services</a></li>
      <li class="nav-item"><a href="#cart" class="nav-link text-black fw-bold">About Us</a></li>
      <li class="nav-item"><a href="#contact" class="nav-link text-black fw-bold">Contact</a></li>
    </ul>
  </div>
</nav>

<section>
  <header class="bg-black text-white text-center py-5 rounded">
    <div class="container">
      <h1 class="display-4 fw-bold">Your Future, Our Priority</h1>
      <p class="fs-5 mx-auto mt-3" style="max-width: 800px;">
        Partner with Modern Bank for innovative financial solutions. Tailored services for every need.
      </p>
      <a href="#services" class="btn btn-danger btn-lg mt-4" style="background-color: #DF1012; border: none;">
  Explore Our Services
</a>

    </div>
  </header>
</section>

          
<section class="py-5 text-center text-white" style="background-color: black; font-family: Arial, sans-serif;">
  <div class="container">
    <h2 class="fw-bold mb-5" style="font-size: 30px;">Our Financial Products</h2>
    <div class="row g-4">

      <!-- Product 1 -->
      <div class="col-md-4">
        <div class="card h-100 border-0" style="background-color: #000000;">
          <div class="overflow-hidden rounded-top">
            <img src="https://img.freepik.com/free-photo/house-investments-elements-composition_23-2148793806.jpg?semt=ais_hybrid" class="card-img-top img-fluid" style="height: 200px; object-fit: cover; transition: transform 0.3s ease;">
          </div>
          <div class="card-body">
            <h3 class="card-title fw-bold" style="font-size: 20px; color: white;">Home Loans</h3>
            <p class="fw-bold" style="color: white;">Get the best home loan rates and finance your dream home with ease.</p>
          </div>
        </div>
      </div>

      <!-- Product 2 -->
      <div class="col-md-4">
        <div class="card h-100 border-0" style="background-color: #000000;">
          <div class="overflow-hidden rounded-top">
            <img src="https://5.imimg.com/data5/SELLER/Default/2024/3/404245385/PE/LP/IL/54459794/business-loan-500x500.jpg" class="card-img-top img-fluid" style="height: 200px; object-fit: cover; transition: transform 0.3s ease;">
          </div>
          <div class="card-body">
            <h3 class="card-title fw-bold" style="font-size: 20px; color: white;">Business Loans</h3>
            <p class="fw-bold" style="color: white;">Fuel your business growth with flexible and customizable loans for entrepreneurs.</p>
          </div>
        </div>
      </div>

      <!-- Product 3 -->
      <div class="col-md-4">
        <div class="card h-100 border-0" style="background-color: #000000;">
          <div class="overflow-hidden rounded-top">
            <img src="https://media.istockphoto.com/id/1203763961/photo/stacked-credit-cards.jpg?s=612x612&w=0&k=20&c=bEEGZwG120WKDClhmltyAtP0kPMzNir49P4JO3pcies=" class="card-img-top img-fluid" style="height: 200px; object-fit: cover; transition: transform 0.3s ease;">
          </div>
          <div class="card-body">
            <h3 class="card-title fw-bold" style="font-size: 20px; color: white;">Credit Cards</h3>
            <p class="fw-bold" style="color: white;">Earn rewards and enjoy exclusive benefits with our credit card options.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  /* Ensure images zoom smoothly on hover */
  .card img:hover {
    transform: scale(1.1);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    section {
      padding: 20px;
    }
  }
</style>

          
<section class="py-5 text-center text-white" style="background-color: black; font-family: Arial, sans-serif;">
  <div class="container">
    <h2 class="fw-bold mb-5" style="font-size: 30px;">Why Choose Modern Bank?</h2>
    <div class="row align-items-center g-4">

      <!-- Left Column (Heading & Paragraph) -->
      <div class="col-md-6">
        <h3 class="fw-bold" style="font-size: 24px;">Innovative Solutions for Your Future</h3>
        <p class="fw-bold mt-3" style="font-size: 16px;">
          Modern Bank offers a comprehensive range of financial products designed to ensure your success. From investment options to personal loans, we have everything you need to secure your future.
        </p>
      </div>

      <!-- Right Column (Image with Container) -->
      <div class="col-md-6">
        <div class="overflow-hidden rounded-3">
          <img src="https://img.freepik.com/premium-vector/bulb-as-idea-creative-technology-background_34629-740.jpg?semt=ais_hybrid" class="img-fluid" alt="Innovative Solutions">
        </div>
      </div>

    </div>
  </div>
</section>



<section class="py-5 text-center" style="background-color: black;">
  <div class="container">
    <!-- Heading -->
    <h2 class="fw-bold text-white mb-4" style="font-size: 30px;">Our Key Features</h2>

    <!-- Paragraph -->
    <p class="text-white fw-bold fs-5 mb-5" style="max-width: 800px; margin: 0 auto;">
      At Modern Bank, we provide cutting-edge technology and seamless financial solutions to enhance your experience and help you grow.
    </p>

    <!-- Icons Section -->
    <div class="row justify-content-center g-3">
      <div class="col-3 col-sm-2">
        <!-- Icon 1: Star -->
        <i class="bi bi-star" style="color: #DF1012; font-size: 2rem;"></i>

      </div>
      <div class="col-3 col-sm-2">
        <!-- Icon 2: Telegram-like -->
       <i class="bi bi-chat-left-text" style="color: #DF1012; font-size: 2rem;"></i>
      </div>
      <div class="col-3 col-sm-2">
        <!-- Icon 3: Shield -->
        <i class="bi bi-shield-lock" style="color: #DF1012; font-size: 2rem;"></i>

      </div>
      <div class="col-3 col-sm-2">
        <!-- Icon 4: Lightning -->
        <i class="bi bi-lightning" style="color: #DF1012; font-size: 2rem;"></i>
      </div>
    </div>
  </div>
</section>

<!-- Include Bootstrap CSS -->

<section class="py-5 text-center" style="background-color: black;">
  <div class="container">
    <!-- Section Heading -->
    <h2 class="fw-bold text-white mb-5" style="font-size: 30px;">Our Key Features</h2>

    <!-- Grid of Cards -->
    <div class="row g-4">
      <!-- Card 1 -->
      <div class="col-md-4">
        <div class="card h-100 border-0" style="background-color: #333; border-radius: 10px;">
          <div class="card-body">
            <p class="fw-bold text-white fs-5 mb-4">Feature One</p>
            <div class="d-flex justify-content-center gap-3">
              <i class="bi bi-lightning-fill" style="color: red; font-size: 30px;"></i>
              <i class="bi bi-gear-fill" style="color: red; font-size: 30px;"></i>
              <i class="bi bi-shield-lock-fill" style="color: red; font-size: 30px;"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-4">
        <div class="card h-100 border-0" style="background-color: #333; border-radius: 10px;">
          <div class="card-body">
            <p class="fw-bold text-white fs-5 mb-4">Feature Two</p>
            <div class="d-flex justify-content-center gap-3">
              <i class="bi bi-bar-chart-line" style="color: red; font-size: 30px;"></i>
              <i class="bi bi-check-circle-fill" style="color: red; font-size: 30px;"></i>
              <i class="bi bi-cpu" style="color: red; font-size: 30px;"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4">
        <div class="card h-100 border-0" style="background-color: #333; border-radius: 10px;">
          <div class="card-body">
            <p class="fw-bold text-white fs-5 mb-4">Feature Three</p>
            <div class="d-flex justify-content-center gap-3">
              <i class="bi bi-trophy-fill" style="color: red; font-size: 30px;"></i>
              <i class="bi bi-cloud-sun-fill" style="color: red; font-size: 30px;"></i>
              <i class="bi bi-people-fill" style="color: red; font-size: 30px;"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Add Bootstrap Icons -->

<section>
  <footer class="bg-black text-white py-5 border-top border-white">
    <div class="container">
      <div class="row text-center text-md-start">

        <!-- Column 1: Logo and Contact -->
        <div class="col-md-4 mb-4">
          <h3 class="fw-bold">Modern Bank</h3>
          <p class="fw-bold">Pioneering the Future of Finance</p>
          <p class="fw-bold mt-3">Phone: <strong>1800-765-432</strong></p>
          <p class="fw-bold">Email: <strong>support@modernbank.com</strong></p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="col-md-4 mb-4">
          <h4 class="fw-bold mb-3">Quick Links</h4>
          <ul class="list-unstyled">
            <li><a href="#about" class="text-white text-decoration-none fw-bold">About Us</a></li>
            <li><a href="#careers" class="text-white text-decoration-none fw-bold">Careers</a></li>
            <li><a href="#contact" class="text-white text-decoration-none fw-bold">Contact</a></li>
            <li><a href="#services" class="text-white text-decoration-none fw-bold">Services</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="col-md-4">
          <h3 class="h5 fw-bold">Follow Us</h3>
          <div class="mt-3">
            <a href="#" class="text-white me-3 fs-4"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-white me-3 fs-4"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white me-3 fs-4"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="text-white me-3 fs-4"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>

      <!-- Bottom Copyright -->
      <div class="text-center mt-4">
        <p class="fw-bold mb-0">&copy; 2025 Modern Bank. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Include Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
</section>

            `,
      category: "Templates",
    });

    editor.BlockManager.add("modern-bank-template-v2", {
      label: `
      <div style="text-align: center; padding: 10px;">
           <i class="fa fa-building" style="font-size: 25px;"></i>
  <div style="margin-top: 5px; font-size: 12px; color:white;">Light Theme 2</div>
</div>

    `,
      content: `
<section>
  <header class="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white position-relative" style="background: url('https://media.istockphoto.com/id/1449364000/photo/minimalist-style-tiny-room.jpg?s=612x612&w=0&k=20&c=uokTOpJl8Hoc4HGqJPicYjy8SBMwCEWkGLUhhvJYgTA=') no-repeat center center/cover;">
    <div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0, 0, 0, 0.5);"></div>
    <div class="container position-relative z-index-2">
      <h1 class="display-4 fw-bold mb-2">Your Home, Your Terms</h1>
      <h2 class="display-4 fw-bold mb-3">Start the Selling Journey!</h2>
      <div class="d-flex justify-content-center align-items-center mb-3">
        <span class="fs-6 fw-bold">Strength of the company</span>
      </div>
      <p class="fs-5 mb-4" style="max-width: 600px; margin: 0 auto;">
        We understand that selling your home is a significant milestone, and we're here to guide you every step of the way.<br>
        Trust us to handle the details while you focus on your next adventure.
      </p>
      <a href="#get-started" class="btn btn-lg fw-bold" style="background-color: white; color: #FF7F50; border: 2px solid #FF7F50; border-radius: 50px; transition: background-color 0.3s ease, color 0.3s ease;">
        Get Started ➞
      </a>
    </div>
  </header>
</section>



<section class="bg-light py-5">
  <div class="container">
    <div class="row g-4 align-items-center">

      <!-- Left Column -->
      <div class="col-md-4 d-flex flex-column gap-4">
        <div class="card text-center shadow-sm p-4">
          <div class="text-primary fs-1 mb-3">
            <i class="fas fa-tasks"></i>
          </div>
          <h3 class="fs-5 fw-bold text-dark mb-2">Personalized Strategies</h3>
          <p class="text-secondary mb-0">
            Tailored marketing plans designed to showcase your home's unique features to attract the right buyers.
          </p>
        </div>

        <div class="card text-center shadow-sm p-4">
          <div class="text-primary fs-1 mb-3">
            <i class="fas fa-clock"></i>
          </div>
          <h3 class="fs-5 fw-bold text-dark mb-2">Professional Staging</h3>
          <p class="text-secondary mb-0">
            Our team can assist with professional home staging and photography to make your property look its best.
          </p>
        </div>
      </div>

      <!-- Center Image -->
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <div class="bg-white shadow-sm rounded overflow-hidden w-100" style="max-width: 300px; height: 300px;">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-home-house-main-page-building-address-location-1-2618.png" alt="House" class="img-fluid w-100 h-100 object-fit-cover">
        </div>
      </div>

      <!-- Right Column -->
      <div class="col-md-4 d-flex flex-column gap-4">
        <div class="card text-center shadow-sm p-4">
          <div class="text-primary fs-1 mb-3">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3 class="fs-5 fw-bold text-dark mb-2">Expert Pricing Analysis</h3>
          <p class="text-secondary mb-0">
            Access to comprehensive market data and our expert analysis to set a competitive and accurate price.
          </p>
        </div>

        <div class="card text-center shadow-sm p-4">
          <div class="text-primary fs-1 mb-3">
            <i class="fas fa-handshake"></i>
          </div>
          <h3 class="fs-5 fw-bold text-dark mb-2">Negotiation Support</h3>
          <p class="text-secondary mb-0">
            Skilled negotiators who work on your behalf to secure the best deal and a seamless closing process.
          </p>
        </div>
      </div>

    </div>
  </div>

  <div class="container mt-5 p-5 rounded shadow" style="background-color: rgba(239, 115, 1, 0.9);">
    <h2 class="text-center text-white mb-4 fs-1">Selling Your Home Securely</h2>
    <p class="fs-5 text-center text-white mb-3">
      Selling your home is not just a transaction; it's a life-changing decision. With our expert team, trusted processes, and innovative tools, you can rest assured that every detail is handled with precision.
    </p>
    <p class="fs-5 text-center text-white mb-0">
      Our mission is to redefine home selling with a focus on professionalism, trust, and results. Your dream deserves nothing less than the best.
    </p>
  </div>

</section>

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">




<section class="py-5 bg-white">
  <div class="container d-flex flex-column align-items-center text-center">
    <!-- Why Choose Us Section -->
    <div class="row mb-5">
      <div class="col-md-6 text-md-end">
        <h2 class="display-5 fw-bold">Why Choose<br> us for your<br> Home?</h2>
      </div>
      <div class="col-md-6">
        <p class="fs-5">
          With a proven track record of successful home sales, local market expertise, and a commitment to personalized service, we are your trusted partner in achieving a smooth and profitable home sale.
        </p>
      </div>
    </div>

    <!-- Property Features Section -->
    <div class="row g-4">
      <!-- Feature Card 1 -->
      <div class="col-md-4">
        <div class="card text-center shadow-sm h-100" style="background-color: #f0f7ff;">
          <div class="card-body p-5">
            <div class="fs-1 text-primary mb-4">
              <i class="fas fa-bullseye" style="color: #003366;"></i>
            </div>
            <h3 class="fs-5 fw-bold">Luxury Properties</h3>
            <p class="fs-6 text-secondary mt-3" style="color: #666;">
              We excel in marketing and selling high-end homes, offering a premium experience to both sellers and buyers.
            </p>
          </div>
        </div>
      </div>

      <!-- Feature Card 2 -->
      <div class="col-md-4">
        <div class="card text-center shadow-sm h-100" style="background-color: #f5fff0;">
          <div class="card-body p-5">
            <div class="fs-1 text-primary mb-4">
              <i class="fas fa-snowflake" style="color: #003366;"></i>
            </div>
            <h3 class="fs-5 fw-bold">Historic Homes</h3>
            <p class="fs-6 text-secondary mt-3" style="color: #666;">
              We specialize in historic and architecturally unique properties, recognizing their exceptional value and appeal.
            </p>
          </div>
        </div>
      </div>

      <!-- Feature Card 3 -->
      <div class="col-md-4">
        <div class="card text-center shadow-sm h-100" style="background-color: #fff5f5;">
          <div class="card-body p-5">
            <div class="fs-1 text-primary mb-4">
              <i class="fas fa-star" style="color: #003366;"></i>
            </div>
            <h3 class="fs-5 fw-bold">Local Market Mastery</h3>
            <p class="fs-6 text-secondary mt-3" style="color: #666;">
              Our specialization extends to a deep knowledge of local neighborhoods and communities to make properties stand out.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">



<section class="py-5" style="background-color: #ff7f00; font-family: 'Arial', sans-serif;">
  <div class="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
    <!-- Left Image Section -->
    <div class="col-md-6">
      <img src="https://media.istockphoto.com/id/1460124878/photo/social-media-connection-and-woman-typing-on-a-phone-for-communication-app-and-chat-web-search.jpg?s=612x612&w=0&k=20&c=fJvxm6AuV1B0RkSKPx9BOuy-JQTevt1Ah0kySJ_GeRY=" alt="Customer Support" class="img-fluid rounded">
    </div>

    <!-- Right Content Section -->
    <div class="col-md-6 text-white">
      <h2 class="fw-bold mb-4">Start Selling Today!</h2>
      <p class="fst-italic mb-4">
        Join us now and take the first step toward growing your business. Discover how easy it is to connect with customers 
        and boost your sales! Our platform provides cutting-edge tools to manage your inventory, process orders seamlessly, 
        and engage with your audience like never before. Whether you’re a small startup or an established business, 
        we’re here to help you succeed. With our support, you can stay ahead of the competition, adapt to changing market trends, 
        and maximize your profits. Don’t wait—make your business dreams a reality today!
      </p>
      <form>

        <a href="#" class="btn btn-light text-warning fw-bold px-4">Get Started</a>
      </form>
    </div>
  </div>
</section>


          `,
      category: "Templates",
    });

    editor.BlockManager.add("6th-template", {
      label: `
     <div style="text-align: center; padding: 10px;">
           <i class="fa fa-building" style="font-size: 25px;"></i>
  <div style="margin-top: 5px; font-size: 12px; color:white;">Light Theme 3</div>

`,
      content: `

<section class="vh-100 d-flex flex-column align-items-center justify-content-center text-white text-center" style="background-image: url('https://sb.kaleidousercontent.com/67418/1920x1100/2ed9107761/bg.png'); background-size: cover; background-position: center; font-family: 'Georgia', serif;">
  <div class="container">
    <h3 class="fs-4 mb-3">Feast on Fantastic Deals</h3>
    <h1 class="display-1 fw-bold mb-4">Thanks Giving</h1>
    <hr class="mx-auto my-4" style="width: 50%; border: 1px solid white;">
    <h2 class="fs-2 fw-light mb-4">Savings Bonanza!</h2>
    <a href="#" class="btn btn-light text-warning fw-bold px-4 py-3" style="font-size: 20px;">Get Started Now</a>
  </div>
</section>

<section style="margin: 0; padding: 40px 20px; font-family: 'Georgia', serif; background-color: #fde4e4;">
<!-- Section Title -->
<div style="text-align: center; margin-bottom: 40px;">
    <h2 style="font-size: 36px; color: black;">Handpicked Thanksgiving specials crafted just for you!</h2>
</div>

<!-- Cards Section -->
<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    <!-- Card 1 -->
    <div style="background-color: white; border-radius: 10px; padding: 20px; width: 300px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1osdfoljjyQP-xo4UEA0yMMKxFaQ4xFUAng&s" alt="Gaming Gadgets" style="width: 100%; border-radius: 8px; height: 200px; object-fit: cover;">
        <h3 style="margin-top: 15px; font-size: 22px; color: black;">Gaming Gadgets</h3>
        <p style="font-size: 16px; color: black;">
            Immerse yourself in the gaming world with the latest consoles, controllers, VR gear, gaming headsets, and powerful graphics cards.
        </p>
    </div>

    <!-- Card 2 -->
    <div style="background-color: white; border-radius: 10px; padding: 20px; width: 300px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" alt="Audio and Entertainment" style="width: 100%; border-radius: 8px; height: 200px; object-fit: cover;">
        <h3 style="margin-top: 15px; font-size: 22px; color: black;">Audio and Entertainment</h3>
        <p style="font-size: 16px; color: black;">
            Immerse yourself in superior sound quality with wireless speakers, headphones, and earbuds.
        </p>
    </div>

    <!-- Card 3 -->
    <div style="background-color: white; border-radius: 10px; padding: 20px; width: 300px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
        <img src="data:image/jpeg;base64,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" alt="Cameras and Photography" style="width: 100%; border-radius: 8px; height: 200px; object-fit: cover;">
        <h3 style="margin-top: 15px; font-size: 22px; color: black;">Cameras and Photography</h3>
        <p style="font-size: 16px; color: black;">
            Capture every moment with digital cameras, action cameras, and camera accessories like lenses, tripods, and bags.
        </p>
    </div>
</div>
</section>

<section style="padding: 40px 20px; background-color: white; font-family: 'Georgia', serif;">
<!-- Section Title -->
<div style="text-align: center; margin-bottom: 40px;">
    <h2 style="font-size: 36px; color: black;">Premium plans just for your family!</h2>
</div>

<!-- Cards Container -->
<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    <!-- Card 1 -->
    <div style="background-color: #ff9900; color: white; padding: 30px; width: 300px; text-align: center; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <h3 style="font-size: 24px; margin-bottom: 10px;">Essential Shopper</h3>
        <div style="font-size: 48px; font-weight: bold; margin: 10px 0;">$99</div>
        <p style="font-size: 16px; margin-bottom: 20px;">
            Dive into the world of online shopping with our essential shopper plan. Enjoy unlimited access to a variety of products with no listing restrictions.
        </p>
        <button style="background-color: white; color: #ff9900; padding: 12px 30px; border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background-color 0.3s;">
            Purchase
        </button>
    </div>

    <!-- Card 2 -->
    <div style="background-color: #ff9900; color: white; padding: 30px; width: 300px; text-align: center; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <h3 style="font-size: 24px; margin-bottom: 10px;">Pro Fashionista</h3>
        <div style="font-size: 48px; font-weight: bold; margin: 10px 0;">$199</div>
        <p style="font-size: 16px; margin-bottom: 20px;">
            Elevate your style game with the pro fashionista plan. Unlock advanced analytics to stay on top of the latest trends.
        </p>
        <button style="background-color: white; color: #ff9900; padding: 12px 30px; border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background-color 0.3s;">
            Purchase
        </button>
    </div>
</div>
</section>


`,
      category: "Templates",
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
