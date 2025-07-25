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

    export default websiteLayouts;