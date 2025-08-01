const portfolioTemplates = [
  {
    id: "minimal-light-portfolio",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1qSmL5ibkwy5wQkz0oXA4VXLscw4zbTjrA&s" 
         alt="light logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Light Portfolio</div>
</div>`,
    content: `
      <div class="bg-gray-50 font-sans antialiased text-gray-800 min-h-screen">
        <!-- Header -->
        <header class="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
          <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
              <h1 class="text-2xl font-bold text-gray-900">Alex Chen</h1>
              <nav class="hidden md:flex space-x-8 text-sm font-medium">
                <a href="#work" class="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
                <a href="#about" class="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                <a href="#contact" class="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              </nav>
              <button class="md:hidden">
                <div class="w-6 h-6 flex flex-col justify-between">
                  <div class="h-0.5 bg-gray-600"></div>
                  <div class="h-0.5 bg-gray-600"></div>
                  <div class="h-0.5 bg-gray-600"></div>
                </div>
              </button>
            </div>
          </div>
        </header>

        <!-- Hero Section -->
        <section class="pt-32 pb-20">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl">
              <h2 class="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
                Creative Director & <br/>
                <span class="text-blue-600">Digital Designer</span>
              </h2>
              <p class="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                I create meaningful digital experiences through thoughtful design, 
                strategic thinking, and attention to detail.
              </p>
              <div class="flex space-x-6">
                <a href="#work" class="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  View Work
                </a>
                <a href="#contact" class="border border-gray-300 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Work Section -->
        <section id="work" class="py-20">
          <div class="container mx-auto px-4">
            <h3 class="text-3xl font-light text-gray-900 mb-16">Selected Work</h3>
            <div class="space-y-24">
              <!-- Project 1 -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Project 1" class="rounded-lg shadow-lg w-full">
                </div>
                <div>
                  <h4 class="text-2xl font-semibold text-gray-900 mb-4">E-commerce Platform</h4>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    A complete redesign of a fashion e-commerce platform, focusing on user experience 
                    and conversion optimization. The new design increased sales by 40%.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Frontend</span>
                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Branding</span>
                  </div>
                  <a href="#" class="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    View Case Study →
                  </a>
                </div>
              </div>

              <!-- Project 2 -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="lg:order-2">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Project 2" class="rounded-lg shadow-lg w-full">
                </div>
                <div class="lg:order-1">
                  <h4 class="text-2xl font-semibold text-gray-900 mb-4">Mobile Banking App</h4>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    Designed a secure and intuitive mobile banking application with advanced features 
                    like biometric authentication and real-time transaction monitoring.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Mobile Design</span>
                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Prototyping</span>
                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">User Research</span>
                  </div>
                  <a href="#" class="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    View Case Study →
                  </a>
                </div>
              </div>

              <!-- Project 3 -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" alt="Project 3" class="rounded-lg shadow-lg w-full">
                </div>
                <div>
                  <h4 class="text-2xl font-semibold text-gray-900 mb-4">SaaS Dashboard</h4>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    Created a comprehensive analytics dashboard for a SaaS platform, helping users 
                    visualize complex data through clean and intuitive interfaces.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Data Visualization</span>
                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Dashboard Design</span>
                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Analytics</span>
                  </div>
                  <a href="#" class="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    View Case Study →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 bg-white">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 class="text-3xl font-light text-gray-900 mb-8">About Me</h3>
                <div class="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    I'm a creative director with over 8 years of experience in digital design. 
                    I believe that great design is not just about aesthetics—it's about solving 
                    problems and creating meaningful connections.
                  </p>
                  <p>
                    My approach combines strategic thinking with creative execution, always keeping 
                    the user at the center of the design process. I've had the privilege of working 
                    with startups and Fortune 500 companies alike.
                  </p>
                  <p>
                    When I'm not designing, you can find me exploring new cities, experimenting 
                    with photography, or reading about the latest design trends.
                  </p>
                </div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" alt="Alex Chen" class="rounded-lg shadow-lg w-full">
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20">
          <div class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto text-center">
              <h3 class="text-3xl font-light text-gray-900 mb-8">Let's Work Together</h3>
              <p class="text-xl text-gray-600 mb-12 leading-relaxed">
                I'm always interested in new opportunities and creative challenges. 
                Let's discuss how we can bring your vision to life.
              </p>
              <div class="space-y-4">
                <a href="mailto:alex@example.com" class="block text-lg text-blue-600 hover:text-blue-700 transition-colors">
                  alex@example.com
                </a>
                <a href="tel:+1234567890" class="block text-lg text-blue-600 hover:text-blue-700 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div class="flex justify-center space-x-6 mt-8">
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <div class="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <div class="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <div class="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-400 py-12">
          <div class="container mx-auto px-4 text-center">
            <p>&copy; 2025 Alex Chen. All rights reserved.</p>
          </div>
        </footer>
      </div>
    `,
    category: "Portfolio Templates",
  },
  {
    id: "portfolio-template",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://img.freepik.com/free-vector/purple-abstract-logo_23-2147493311.jpg" 
         alt="portfolio logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Portfolio Template</div>
</div>`,
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
    category: "Portfolio Templates",
  },
  // PORTFOLIO TEMPLATES (2 templates)
  {
    id: "portfolio-creative-designer",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://www.vivicreative.com/uploads/blog/img-ed764a9ac4c398b368.jpg" 
         alt="Designer logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Designer Portfolio</div>
</div>`,
    content: `
      <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 font-sans antialiased text-gray-900 dark:text-white">
        <!-- Floating Design Elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
          <div class="absolute top-1/3 right-24 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-bounce"></div>
          <div class="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-indigo-400/20 rounded-full animate-pulse animation-delay-500"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-indigo-200 dark:border-indigo-800">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">✨</span>
                </div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Alexandra Smith</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 font-semibold">
                <a href="#about" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-105">About</a>
                <a href="#portfolio" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-105">Portfolio</a>
                <a href="#services" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-105">Services</a>
                <a href="#contact" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-105">Contact</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="about" class="relative py-24">
          <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                  <div>
                    <span class="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-indigo-800 dark:text-indigo-200 px-6 py-2 rounded-full text-sm font-bold mb-6">
                      ✨ Creative Designer
                    </span>
                    <h2 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 leading-tight">
                      Bringing Ideas
                      <br />to Life
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      I'm a passionate creative designer specializing in brand identity, digital experiences, and visual storytelling that captivates and converts.
                    </p>
                  </div>

                  <div class="flex flex-col sm:flex-row gap-4">
                    <button class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                      View My Work
                    </button>
                    <button class="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                      Download Resume
                    </button>
                  </div>

                  <!-- Stats -->
                  <div class="grid grid-cols-3 gap-6 pt-8">
                    <div class="text-center">
                      <div class="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-2">150+</div>
                      <div class="text-gray-600 dark:text-gray-400 font-semibold">Projects</div>
                    </div>
                    <div class="text-center">
                      <div class="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">50+</div>
                      <div class="text-gray-600 dark:text-gray-400 font-semibold">Clients</div>
                    </div>
                    <div class="text-center">
                      <div class="text-3xl font-black text-pink-600 dark:text-pink-400 mb-2">5yr</div>
                      <div class="text-gray-600 dark:text-gray-400 font-semibold">Experience</div>
                    </div>
                  </div>
                </div>

                <div class="relative">
                  <div class="relative z-10 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 p-8 rounded-3xl backdrop-blur-lg">
                    <div class="w-full h-96 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center text-white text-6xl">
                      👩‍🎨
                    </div>
                  </div>
                  <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Portfolio Grid -->
        <section id="portfolio" class="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Featured Work
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <div class="h-64 bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-4xl">
                  🎨
                </div>
                <div class="p-6">
                  <h4 class="text-xl font-black text-gray-800 dark:text-white mb-2">Brand Identity Design</h4>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">Complete rebranding for a tech startup including logo, colors, and guidelines.</p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">Branding</span>
                    <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Logo Design</span>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <div class="h-64 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white text-4xl">
                  📱
                </div>
                <div class="p-6">
                  <h4 class="text-xl font-black text-gray-800 dark:text-white mb-2">Mobile App UI/UX</h4>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">Intuitive mobile app design with focus on user experience and accessibility.</p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">UI/UX</span>
                    <span class="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm">Mobile</span>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <div class="h-64 bg-gradient-to-br from-pink-400 to-indigo-600 flex items-center justify-center text-white text-4xl">
                  🌐
                </div>
                <div class="p-6">
                  <h4 class="text-xl font-black text-gray-800 dark:text-white mb-2">Website Redesign</h4>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">Modern, responsive website redesign that increased conversions by 150%.</p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm">Web Design</span>
                    <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">Responsive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="flex items-center space-x-3 mb-6 md:mb-0">
                <div class="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span class="text-white text-sm">✨</span>
                </div>
                <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Alexandra Smith</span>
              </div>
              <p class="text-gray-600 dark:text-gray-400">&copy; 2025 Alexandra Smith. Creative Designer.</p>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Portfolio Templates",
  },
  {
    id: "portfolio-dark-minimal",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://cdn-icons-png.flaticon.com/512/726/726056.png" 
         alt="Dark Portfolio" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Dark Portfolio2</div>
</div>`,
    content: `
      <div class="min-h-screen bg-gray-900 font-sans antialiased text-white">
        <!-- Subtle Dark Background Pattern -->
        <div class="fixed inset-0 opacity-5">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
          <div class="absolute top-20 left-20 w-px h-px bg-white animate-pulse"></div>
          <div class="absolute top-40 right-32 w-px h-px bg-gray-400 animate-ping"></div>
          <div class="absolute bottom-32 left-1/3 w-px h-px bg-gray-500 animate-bounce"></div>          </div>

        <!-- Header -->
        <header class="relative z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
          <div class="container mx-auto px-6 py-8">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <div class="w-3 h-3 bg-white rounded-full"></div>
                <h1 class="text-2xl font-light text-white tracking-wider">ALEX CHEN</h1>
              </div>
              <div class="hidden md:flex space-x-12 text-gray-400 font-light">
                <a href="#about" class="hover:text-white transition-all duration-500 hover:tracking-wider">About</a>
                <a href="#work" class="hover:text-white transition-all duration-500 hover:tracking-wider">Work</a>
                <a href="#contact" class="hover:text-white transition-all duration-500 hover:tracking-wider">Contact</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="about" class="relative py-32 text-center">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <div class="mb-12">
                <h2 class="text-6xl md:text-8xl font-thin text-white mb-8 leading-tight tracking-tight">
                  Creative
                  <br />
                  <span class="text-gray-500">Developer</span>
                </h2>
                <div class="w-24 h-px bg-white mx-auto mb-8"></div>
                <p class="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-2xl mx-auto">
                  Crafting digital experiences through minimalist design and clean code. 
                  Specializing in modern web applications and user interfaces.
                </p>
              </div>

              <div class="flex justify-center space-x-8 mb-16">
                <div class="text-center">
                  <div class="text-3xl font-thin text-white mb-2">50+</div>
                  <div class="text-gray-500 font-light text-sm tracking-wider">PROJECTS</div>
                </div>
                <div class="w-px h-16 bg-gray-700"></div>
                <div class="text-center">
                  <div class="text-3xl font-thin text-white mb-2">5+</div>
                  <div class="text-gray-500 font-light text-sm tracking-wider">YEARS</div>
                </div>
                <div class="w-px h-16 bg-gray-700"></div>
                <div class="text-center">
                  <div class="text-3xl font-thin text-white mb-2">100%</div>
                  <div class="text-gray-500 font-light text-sm tracking-wider">PASSION</div>
                </div>
              </div>

              <button class="border border-white text-white hover:bg-white hover:text-gray-900 px-12 py-4 font-light tracking-wider transition-all duration-500 transform hover:scale-105">
                VIEW MY WORK
              </button>
            </div>
          </div>
        </section>

        <!-- Work Section -->
        <section id="work" class="py-32 bg-black/20">
          <div class="container mx-auto px-6">
            <div class="text-center mb-20">
              <h3 class="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">Selected Work</h3>
              <div class="w-24 h-px bg-white mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <div class="group cursor-pointer">
                <div class="bg-gray-800 h-64 mb-6 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span class="text-white font-light tracking-wider">VIEW PROJECT</span>
                  </div>
                </div>
                <h4 class="text-2xl font-light text-white mb-2 tracking-wide">E-Commerce Platform</h4>
                <p class="text-gray-400 font-light leading-relaxed">Modern shopping experience with seamless checkout and inventory management.</p>
              </div>

              <div class="group cursor-pointer">
                <div class="bg-gray-800 h-64 mb-6 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span class="text-white font-light tracking-wider">VIEW PROJECT</span>
                  </div>
                </div>
                <h4 class="text-2xl font-light text-white mb-2 tracking-wide">Portfolio Website</h4>
                <p class="text-gray-400 font-light leading-relaxed">Clean, responsive portfolio showcasing creative work with smooth animations.</p>
              </div>

              <div class="group cursor-pointer">
                <div class="bg-gray-800 h-64 mb-6 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span class="text-white font-light tracking-wider">VIEW PROJECT</span>
                  </div>
                </div>
                <h4 class="text-2xl font-light text-white mb-2 tracking-wide">SaaS Dashboard</h4>
                <p class="text-gray-400 font-light leading-relaxed">Data visualization dashboard with real-time analytics and user management.</p>
              </div>

              <div class="group cursor-pointer">
                <div class="bg-gray-800 h-64 mb-6 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span class="text-white font-light tracking-wider">VIEW PROJECT</span>
                  </div>
                </div>
                <h4 class="text-2xl font-light text-white mb-2 tracking-wide">Mobile App</h4>
                <p class="text-gray-400 font-light leading-relaxed">Cross-platform mobile application with intuitive user experience design.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-32">
          <div class="container mx-auto px-6 text-center">
            <div class="max-w-2xl mx-auto">
              <h3 class="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight">Let's Work Together</h3>
              <div class="w-24 h-px bg-white mx-auto mb-8"></div>
              <p class="text-xl text-gray-400 font-light leading-relaxed mb-12">
                Ready to bring your ideas to life? Let's discuss your next project.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button class="border border-white text-white hover:bg-white hover:text-gray-900 px-12 py-4 font-light tracking-wider transition-all duration-500 transform hover:scale-105">
                  GET IN TOUCH
                </button>
                <span class="text-gray-500">or</span>
                <a href="mailto:alex@example.com" class="text-white hover:text-gray-400 font-light tracking-wider transition-all duration-500">
                  alex@example.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black border-t border-gray-800 py-12">
          <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="flex items-center space-x-4 mb-6 md:mb-0">
                <div class="w-2 h-2 bg-white rounded-full"></div>
                <span class="text-white font-light tracking-wider">ALEX CHEN</span>
              </div>
              <div class="flex space-x-8 text-gray-500 font-light">
                <a href="#" class="hover:text-white transition-colors duration-300">LinkedIn</a>
                <a href="#" class="hover:text-white transition-colors duration-300">GitHub</a>
                <a href="#" class="hover:text-white transition-colors duration-300">Dribbble</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Portfolio Templates",
  },

  {
    id: "portfolio-developer",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://cdn.dribbble.com/userupload/16505523/file/original-ead560979b865f6fa8273e27291b810d.jpg?resize=400x0" 
         alt="Developer logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Developer Portfolio</div>
</div>`,
    content: `
      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-blue-900 font-mono antialiased text-white">
        <!-- Code-like Background Animation -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
          <div class="absolute top-16 left-16 text-sm font-mono text-green-400 animate-pulse">
            &lt;div className="developer"&gt;<br/>
            &nbsp;&nbsp;{code.map(line =&gt; (<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;{line}&lt;/span&gt;<br/>
            &nbsp;&nbsp;))}<br/>
            &lt;/div&gt;
          </div>
          <div class="absolute top-1/3 right-20 text-sm font-mono text-blue-400 animate-bounce">
            function createAmazingThings() {<br/>
            &nbsp;&nbsp;return magic + code;<br/>
            }
          </div>
          <div class="absolute bottom-1/4 left-1/4 text-sm font-mono text-purple-400 animate-pulse animation-delay-300">
            const skills = [<br/>
            &nbsp;&nbsp;"JavaScript", "React",<br/>
            &nbsp;&nbsp;"Node.js", "Python"<br/>
            ];
          </div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/50 backdrop-blur-xl border-b border-blue-500/30">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center font-mono">
                  <span class="text-white font-bold">&lt;/&gt;</span>
                </div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">John.dev()</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-blue-200 font-semibold">
                <a href="#about" class="hover:text-green-400 transition-all duration-300 transform hover:scale-105">.about()</a>
                <a href="#projects" class="hover:text-green-400 transition-all duration-300 transform hover:scale-105">.projects()</a>
                <a href="#skills" class="hover:text-green-400 transition-all duration-300 transform hover:scale-105">.skills()</a>
                <a href="#contact" class="hover:text-green-400 transition-all duration-300 transform hover:scale-105">.contact()</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="about" class="relative py-24">
          <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                  <div>
                    <span class="inline-block bg-gradient-to-r from-green-900/50 to-blue-900/50 text-green-400 px-6 py-2 rounded-full text-sm font-bold mb-6 font-mono border border-green-500/30">
                      &gt; Full Stack Developer
                    </span>
                    <h2 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mb-6 leading-tight">
                      I Build Digital
                      <br />Experiences
                    </h2>
                    <p class="text-xl text-blue-200 mb-8 leading-relaxed">
                      Passionate full-stack developer crafting scalable web applications with modern technologies. I turn complex problems into elegant solutions.
                    </p>
                  </div>

                  <div class="flex flex-col sm:flex-row gap-4">
                    <button class="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                      View Projects
                    </button>
                    <button class="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                      Download CV
                    </button>
                  </div>

                  <!-- Tech Stack */
                  <div class="pt-8">
                    <h4 class="text-lg font-bold text-blue-300 mb-4">Tech Stack:</h4>
                    <div class="flex flex-wrap gap-3">
                      <span class="bg-green-900/50 text-green-400 px-4 py-2 rounded-lg font-mono text-sm border border-green-500/30">JavaScript</span>
                      <span class="bg-blue-900/50 text-blue-400 px-4 py-2 rounded-lg font-mono text-sm border border-blue-500/30">React</span>
                      <span class="bg-purple-900/50 text-purple-400 px-4 py-2 rounded-lg font-mono text-sm border border-purple-500/30">Node.js</span>
                      <span class="bg-yellow-900/50 text-yellow-400 px-4 py-2 rounded-lg font-mono text-sm border border-yellow-500/30">Python</span>
                      <span class="bg-red-900/50 text-red-400 px-4 py-2 rounded-lg font-mono text-sm border border-red-500/30">MongoDB</span>
                    </div>
                  </div>
                </div>

                <div class="relative">
                  <div class="relative z-10 bg-black/80 p-8 rounded-3xl border border-blue-500/30 backdrop-blur-lg">
                    <div class="bg-gray-900 rounded-2xl p-6 font-mono text-sm">
                      <div class="flex items-center mb-4">
                        <div class="flex space-x-2">
                          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span class="ml-4 text-gray-400">john-portfolio.js</span>
                      </div>
                      <div class="text-green-400">
                        <span class="text-purple-400">const</span> developer = {<br/>
                        &nbsp;&nbsp;<span class="text-blue-400">name</span>: <span class="text-yellow-400">"John Smith"</span>,<br/>
                        &nbsp;&nbsp;<span class="text-blue-400">role</span>: <span class="text-yellow-400">"Full Stack Dev"</span>,<br/>
                        &nbsp;&nbsp;<span class="text-blue-400">experience</span>: <span class="text-orange-400">4</span>,<br/>
                        &nbsp;&nbsp;<span class="text-blue-400">location</span>: <span class="text-yellow-400">"San Francisco"</span><br/>
                        };
                      </div>
                    </div>
                  </div>
                  <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Section */
        <section id="projects" class="py-20 bg-black/30 backdrop-blur-sm">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Featured Projects
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-gray-900/80 rounded-3xl overflow-hidden border border-green-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-lg">
                <div class="h-48 bg-gradient-to-br from-green-600 to-blue-700 flex items-center justify-center text-white text-4xl">
                  🚀
                </div>
                <div class="p-6">
                  <h4 class="text-xl font-black text-green-400 mb-2 font-mono">SaaS Dashboard</h4>
                  <p class="text-blue-200 mb-4">Full-stack analytics dashboard built with React, Node.js, and MongoDB.</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-green-900/50 text-green-400 px-3 py-1 rounded-full text-xs font-mono border border-green-500/30">React</span>
                    <span class="bg-blue-900/50 text-blue-400 px-3 py-1 rounded-full text-xs font-mono border border-blue-500/30">Node.js</span>
                    <span class="bg-purple-900/50 text-purple-400 px-3 py-1 rounded-full text-xs font-mono border border-purple-500/30">MongoDB</span>
                  </div>
                  <div class="flex space-x-4">
                    <a href="#" class="text-green-400 hover:text-green-300 transition-colors font-mono text-sm">→ Live Demo</a>
                    <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm">→ Source Code</a>
                  </div>
                </div>
              </div>

              <div class="bg-gray-900/80 rounded-3xl overflow-hidden border border-blue-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-lg">
                <div class="h-48 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white text-4xl">
                  📱
                </div>
                <div class="p-6">
                  <h4 class="text-xl font-black text-blue-400 mb-2 font-mono">Mobile App API</h4>
                  <p class="text-blue-200 mb-4">RESTful API powering a social media mobile app with 10k+ users.</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-900/50 text-blue-400 px-3 py-1 rounded-full text-xs font-mono border border-blue-500/30">Express</span>
                    <span class="bg-yellow-900/50 text-yellow-400 px-3 py-1 rounded-full text-xs font-mono border border-yellow-500/30">JWT</span>
                    <span class="bg-red-900/50 text-red-400 px-3 py-1 rounded-full text-xs font-mono border border-red-500/30">Redis</span>
                  </div>
                  <div class="flex space-x-4">
                    <a href="#" class="text-green-400 hover:text-green-300 transition-colors font-mono text-sm">→ API Docs</a>
                    <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm">→ Source Code</a>
                  </div>
                </div>
              </div>

              <div class="bg-gray-900/80 rounded-3xl overflow-hidden border border-purple-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-lg">
                <div class="h-48 bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center text-white text-4xl">
                  🤖
                </div>
                <div class="p-6">
                  <h4 class="text-xl font-black text-purple-400 mb-2 font-mono">AI Chat Bot</h4>
                  <p class="text-blue-200 mb-4">Intelligent chatbot using NLP and machine learning algorithms.</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-purple-900/50 text-purple-400 px-3 py-1 rounded-full text-xs font-mono border border-purple-500/30">Python</span>
                    <span class="bg-green-900/50 text-green-400 px-3 py-1 rounded-full text-xs font-mono border border-green-500/30">TensorFlow</span>
                    <span class="bg-orange-900/50 text-orange-400 px-3 py-1 rounded-full text-xs font-mono border border-orange-500/30">Flask</span>
                  </div>
                  <div class="flex space-x-4">
                    <a href="#" class="text-green-400 hover:text-green-300 transition-colors font-mono text-sm">→ Try It</a>
                    <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm">→ Source Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black/80 backdrop-blur-xl border-t border-blue-500/30 py-12">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="flex items-center space-x-3 mb-6 md:mb-0">
                <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center font-mono">
                  <span class="text-white text-sm">&lt;/&gt;</span>
                </div>
                <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">John.dev()</span>
              </div>
              <p class="text-blue-400 font-mono">&copy; 2025 John Smith. Full Stack Developer.</p>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Portfolio Templates",
  },
  {
    id: "creative-portfolio-v4",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://static.vecteezy.com/system/resources/previews/008/991/225/non_2x/a-brush-stroke-artistic-letter-logo-design-with-creative-modern-look-and-vibrant-colors-vector.jpg" 
         alt="Artistic logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Artistic Portfolio</div>
</div>`,
    content: `
    <div class="bg-gray-50 font-sans antialiased text-gray-800">

      <!-- SVG Wave Header -->
      <header class="relative bg-white">
        <svg class="absolute top-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C360,120 1080,0 1440,80 L1440,0 L0,0 Z" fill="#4F46E5"/>
        </svg>
        <div class="container mx-auto px-4 pt-16 pb-8 text-center">
          <h1 class="text-4xl font-extrabold text-gray-900">Artistry Studio</h1>
          <p class="mt-2 text-lg text-gray-600">Where creativity meets code</p>
        </div>
      </header>

      <!-- Gallery: direct image tags -->
      <section id="gallery" class="py-16 text-center">
        <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Project 1" class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition cursor-pointer" />
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Project 2" class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition cursor-pointer" />
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Project 3" class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition cursor-pointer" />
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
              <i class="fas fa-lightbulb text-purple-600 text-4xl mb-4"></i>
              <h3 class="text-xl font-semibold mb-2">Design Consulting</h3>
              <p class="text-gray-600">Expert advice to shape your brand identity.</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
              <i class="fas fa-code text-purple-600 text-4xl mb-4"></i>
              <h3 class="text-xl font-semibold mb-2">Web Development</h3>
              <p class="text-gray-600">Responsive, high-performance websites tailored to you.</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
              <i class="fas fa-bullhorn text-purple-600 text-4xl mb-4"></i>
              <h3 class="text-xl font-semibold mb-2">Marketing & SEO</h3>
              <p class="text-gray-600">Strategies that boost visibility and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Continuous light carousel of up to 6 clients -->
      <section id="testimonials" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-8 text-gray-900 text-center">What Clients Say</h2>
          <div class="overflow-hidden">
            <div class="flex space-x-8 animate-slide">
              <!-- 6 unique testimonials -->
              <div class="flex-none w-64 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
                <p class="italic">"Stunning visuals and seamless UX!"</p>
                <h4 class="mt-4 font-semibold">— Jamie Lee</h4>
              </div>
              <div class="flex-none w-64 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
                <p class="italic">"Brand identity that resonates."</p>
                <h4 class="mt-4 font-semibold">— Alex Martinez</h4>
              </div>
              <div class="flex-none w-64 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
                <p class="italic">"Attention to detail is impressive."</p>
                <h4 class="mt-4 font-semibold">— Priya Singh</h4>
              </div>
              <div class="flex-none w-64 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
                <p class="italic">"Exceeded all expectations!"</p>
                <h4 class="mt-4 font-semibold">— Mark Johnson</h4>
              </div>
              <div class="flex-none w-64 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
                <p class="italic">"Professional and creative team."</p>
                <h4 class="mt-4 font-semibold">— Sarah Williams</h4>
              </div>
              <div class="flex-none w-64 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
                <p class="italic">"SEO strategies boosted traffic."</p>
                <h4 class="mt-4 font-semibold">— Emily Brown</h4>
              </div>
              <!-- Duplicate for seamless loop -->
              <div class="flex-none w-64 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
                <p class="italic">"Stunning visuals and seamless UX!"</p>
                <h4 class="mt-4 font-semibold">— Jamie Lee</h4>
              </div>
              <div class="flex-none w-64 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
                <p class="italic">"Brand identity that resonates."</p>
                <h4 class="mt-4 font-semibold">— Alex Martinez</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section id="team" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8">Meet the Team</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Jane Doe" class="rounded-full w-32 h-32 mx-auto mb-4 cursor-pointer" />
              <h4 class="font-semibold">Jane Doe</h4>
              <p class="text-gray-500 text-sm">Lead Designer</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Smith" class="rounded-full w-32 h-32 mx-auto mb-4 cursor-pointer" />
              <h4 class="font-semibold">John Smith</h4>
              <p class="text-gray-500 text-sm">Head Developer</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Lisa Ray" class="rounded-full w-32 h-32 mx-auto mb-4 cursor-pointer" />
              <h4 class="font-semibold">Lisa Ray</h4>
              <p class="text-gray-500 text-sm">Marketing Lead</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Mike Lee" class="rounded-full w-32 h-32 mx-auto mb-4 cursor-pointer" />
              <h4 class="font-semibold">Mike Lee</h4>
              <p class="text-gray-500 text-sm">SEO Specialist</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section id="pricing" class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8">Pricing Plans</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 class="text-xl font-semibold mb-2">Basic</h3>
              <p class="text-4xl font-bold mb-4">$49<span class="text-lg">/mo</span></p>
              <ul class="text-gray-600 mb-6 space-y-2">
                <li>5 Projects</li>
                <li>10 GB Storage</li>
                <li>Email Support</li>
              </ul>
              <a href="#contact" class="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">Choose Basic</a>
            </div>
            <div class="p-6 bg-purple-600 text-white rounded-lg shadow-md transform scale-105">
              <h3 class="text-xl font-semibold mb-2">Pro</h3>
              <p class="text-4xl font-bold mb-4">$99<span class="text-lg">/mo</span></p>
              <ul class="mb-6 space-y-2">
                <li>15 Projects</li>
                <li>50 GB Storage</li>
                <li>Priority Support</li>
              </ul>
              <a href="#contact" class="inline-block px-6 py-2 bg-white text-purple-600 rounded-lg shadow hover:bg-gray-100 transition">Choose Pro</a>
            </div>
            <div class="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 class="text-xl font-semibold mb-2">Enterprise</h3>
              <p class="text-4xl font-bold mb-4">$199<span class="text-lg">/mo</span></p>
              <ul class="text-gray-600 mb-6 space-y-2">
                <li>Unlimited Projects</li>
                <li>200 GB Storage</li>
                <li>Phone & Email Support</li>
              </ul>
              <a href="#contact" class="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">Choose Enterprise</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section id="newsletter" class="py-16 bg-purple-600 text-white text-center">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p class="mb-6">Join our newsletter for the latest updates and insights.</p>
          <form class="flex flex-col sm:flex-row justify-center gap-4">
            <input type="email" placeholder="Your email address" class="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-auto flex-1" />
            <button type="submit" class="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">Subscribe</button>
          </form>
        </div>
      </section>

      <!-- Call-to-Action Banner -->
      <section class="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 text-center overflow-hidden">
        <div class="container mx-auto px-4 relative z-10">
          <h2 class="text-3xl md:text-5xl font-extrabold mb-4">Ready to Elevate Your Brand?</h2>
          <p class="max-w-xl mx-auto mb-6 text-lg">Collaborate with us for stunning design and powerful code.</p>
          <a href="#contact" class="inline-block px-8 py-4 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">Start Your Project</a>
        </div>
        <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C360,0 1080,120 1440,40 L1440,120 L0,120 Z" fill="#FFFFFF"/>
        </svg>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-800 text-gray-400 py-8">
        <div class="container mx-auto px-4 text-center space-y-4">
          <div class="flex justify-center space-x-6">
            <a href="#" class="hover:text-white transform hover:scale-110 transition"><i class="fab fa-facebook fa-lg"></i></a>
            <a href="#" class="hover:text-white transform hover:scale-110 transition"><i class="fab fa-instagram fa-lg"></i></a>
            <a href="#" class="hover:text-white transform hover:scale-110 transition"><i class="fab fa-dribbble fa-lg"></i></a>
            <a href="#" class="hover:text-white transform hover:scale-110 transition"><i class="fab fa-behance fa-lg"></i></a>
          </div>
          <p class="text-sm">&copy; 2025 Artistry Studio. All rights reserved.</p>
        </div>
      </footer>

      <style>
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide { animation: slide 30s linear infinite; }
      </style>
    </div>
  `,
    category: "Portfolio Templates",
  },
  {
    id: "designer-portfolio-minimal",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://www.vivicreative.com/uploads/blog/img-ed764a9ac4c398b368.jpg" 
         alt="Designer logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Designer Portfolio2</div>
</div>`,
    content: `
      <div class="bg-gray-50 font-sans antialiased text-gray-800 min-h-screen">
        <!-- Subtle Background Pattern -->
        <div class="fixed inset-0 pointer-events-none opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 50%, rgba(0,0,0,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 100px 100px;"></div>
        </div>

        <!-- Navigation -->
        <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
          <div class="container mx-auto px-6 py-6">
            <div class="flex justify-between items-center">
              <div class="text-2xl font-black text-gray-800">ALEX CHEN</div>
              <div class="hidden md:flex space-x-8 text-gray-600 font-medium">
                <a href="#work" class="hover:text-gray-900 transition-colors duration-300 relative group">
                  Work
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#about" class="hover:text-gray-900 transition-colors duration-300 relative group">
                  About
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#services" class="hover:text-gray-900 transition-colors duration-300 relative group">
                  Services
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" class="hover:text-gray-900 transition-colors duration-300 relative group">
                  Contact
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <!-- Hero Section -->
        <section class="pt-32 pb-20 md:pt-40 md:pb-32">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl">
              <div class="mb-8">
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6 leading-tight">
                  Creative
                  <span class="block font-black">Designer</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                  I create meaningful digital experiences through thoughtful design and strategic thinking.
                </p>
              </div>
              
              <div class="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <button class="bg-gray-900 text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105">
                  View My Work
                </button>
                <div class="flex items-center space-x-4 text-gray-600">
                  <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div class="font-medium text-gray-900">5+ Years Experience</div>
                    <div class="text-sm">UI/UX Design</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Work -->
        <section id="work" class="py-20 md:py-32">
          <div class="container mx-auto px-6">
            <div class="mb-16">
              <h2 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">Selected Work</h2>
              <div class="w-24 h-1 bg-gray-900"></div>
            </div>

            <div class="space-y-20 md:space-y-32">
              <!-- Project 1 -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div class="order-2 lg:order-1">
                  <div class="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-80 md:h-96 flex items-center justify-center transform hover:scale-105 transition-all duration-500">
                    <div class="text-6xl md:text-8xl opacity-50">🎨</div>
                  </div>
                </div>
                <div class="order-1 lg:order-2">
                  <div class="text-sm text-gray-500 font-medium mb-4">01 / BRANDING</div>
                  <h3 class="text-3xl md:text-4xl font-light text-gray-900 mb-6">Zenith Brand Identity</h3>
                  <p class="text-gray-600 mb-8 leading-relaxed">
                    Complete brand identity design for a tech startup, including logo design, color palette, and brand guidelines that reflect innovation and trust.
                  </p>
                  <button class="text-gray-900 font-medium border-b border-gray-900 pb-1 hover:border-gray-600 transition-colors duration-300">
                    View Case Study →
                  </button>
                </div>
              </div>

              <!-- Project 2 -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <div class="text-sm text-gray-500 font-medium mb-4">02 / UI/UX DESIGN</div>
                  <h3 class="text-3xl md:text-4xl font-light text-gray-900 mb-6">FinanceApp Redesign</h3>
                  <p class="text-gray-600 mb-8 leading-relaxed">
                    User experience redesign for a financial application, focusing on usability and accessibility while maintaining security standards.
                  </p>
                  <button class="text-gray-900 font-medium border-b border-gray-900 pb-1 hover:border-gray-600 transition-colors duration-300">
                    View Case Study →
                  </button>
                </div>
                <div>
                  <div class="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-80 md:h-96 flex items-center justify-center transform hover:scale-105 transition-all duration-500">
                    <div class="text-6xl md:text-8xl opacity-50">📱</div>
                  </div>
                </div>
              </div>

              <!-- Project 3 -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div class="order-2 lg:order-1">
                  <div class="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-lg h-80 md:h-96 flex items-center justify-center transform hover:scale-105 transition-all duration-500">
                    <div class="text-6xl md:text-8xl opacity-50">🌐</div>
                  </div>
                </div>
                <div class="order-1 lg:order-2">
                  <div class="text-sm text-gray-500 font-medium mb-4">03 / WEB DESIGN</div>
                  <h3 class="text-3xl md:text-4xl font-light text-gray-900 mb-6">E-commerce Platform</h3>
                  <p class="text-gray-600 mb-8 leading-relaxed">
                    Modern e-commerce website design with focus on conversion optimization and seamless user journey from discovery to purchase.
                  </p>
                  <button class="text-gray-900 font-medium border-b border-gray-900 pb-1 hover:border-gray-600 transition-colors duration-300">
                    View Case Study →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 md:py-32 bg-white">
          <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 class="text-4xl md:text-5xl font-light text-gray-900 mb-8">About Me</h2>
                <div class="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    I'm a creative designer with a passion for crafting beautiful, functional digital experiences. 
                    With over 5 years of experience in the industry, I've had the privilege of working with 
                    startups and established brands alike.
                  </p>
                  <p>
                    My approach combines strategic thinking with creative execution, ensuring that every 
                    design decision serves both user needs and business objectives.
                  </p>
                </div>
                <div class="mt-12">
                  <button class="bg-gray-900 text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors duration-300">
                    Download Resume
                  </button>
                </div>
              </div>
              <div>
                <div class="bg-gray-100 rounded-lg h-96 md:h-[500px] flex items-center justify-center">
                  <div class="text-8xl md:text-9xl opacity-30">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="py-20 md:py-32">
          <div class="container mx-auto px-6">
            <div class="mb-16">
              <h2 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">Services</h2>
              <div class="w-24 h-1 bg-gray-900"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="p-8 border border-gray-200 hover:border-gray-900 transition-colors duration-300 group">
                <div class="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🎨</div>
                <h3 class="text-xl font-medium text-gray-900 mb-4">Brand Identity</h3>
                <p class="text-gray-600 leading-relaxed">
                  Logo design, brand guidelines, and visual identity systems that communicate your brand's values.
                </p>
              </div>
              <div class="p-8 border border-gray-200 hover:border-gray-900 transition-colors duration-300 group">
                <div class="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">📱</div>
                <h3 class="text-xl font-medium text-gray-900 mb-4">UI/UX Design</h3>
                <p class="text-gray-600 leading-relaxed">
                  User-centered design solutions for web and mobile applications with focus on usability.
                </p>
              </div>
              <div class="p-8 border border-gray-200 hover:border-gray-900 transition-colors duration-300 group">
                <div class="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🌐</div>
                <h3 class="text-xl font-medium text-gray-900 mb-4">Web Design</h3>
                <p class="text-gray-600 leading-relaxed">
                  Modern, responsive websites that engage users and drive conversions for your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 md:py-32 bg-gray-900 text-white">
          <div class="container mx-auto px-6">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-4xl md:text-5xl font-light mb-8">Let's Work Together</h2>
              <p class="text-xl text-gray-300 mb-12">
                Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
              </p>
              <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
                <button class="bg-white text-gray-900 px-8 py-4 rounded-none font-medium hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  Start a Project
                </button>
                <a href="mailto:alex@example.com" class="text-white border-b border-white pb-1 hover:border-gray-300 transition-colors duration-300">
                  alex@example.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black py-12">
          <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="text-white font-black text-xl mb-4 md:mb-0">ALEX CHEN</div>
              <div class="flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Dribbble</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Behance</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
              </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              © 2025 Alex Chen. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Portfolio Templates",
  },
  {
    id: "developer-portfolio-dark",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://cdn.dribbble.com/userupload/16505523/file/original-ead560979b865f6fa8273e27291b810d.jpg?resize=400x0" 
         alt="Developer logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Developer Portfolio2</div>
</div>`,
    content: `
      <div class="bg-gray-900 font-mono antialiased text-green-400 min-h-screen">
        <!-- Matrix-style Background -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
          <div class="absolute top-10 left-10 text-xs animate-pulse">01010101</div>
          <div class="absolute top-32 right-20 text-xs animate-bounce">11001010</div>
          <div class="absolute bottom-20 left-1/4 text-xs animate-ping">10110100</div>
          <div class="absolute top-1/2 right-1/4 text-xs animate-pulse">01011101</div>
          <div class="absolute bottom-1/3 right-1/3 text-xs animate-bounce">11010011</div>
        </div>

        <!-- Navigation -->
        <nav class="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-lg border-b border-green-500/30">
          <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
              <div class="text-xl font-bold text-green-400">
                <span class="text-white">john@dev:</span><span class="text-green-400">~$</span>
              </div>
              <div class="hidden md:flex space-x-8 text-gray-300 font-medium">
                <a href="#projects" class="hover:text-green-400 transition-colors duration-300 relative">
                  ./projects
                  <span class="absolute -top-2 -right-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                </a>
                <a href="#skills" class="hover:text-green-400 transition-colors duration-300">./skills</a>
                <a href="#experience" class="hover:text-green-400 transition-colors duration-300">./experience</a>
                <a href="#contact" class="hover:text-green-400 transition-colors duration-300">./contact</a>
              </div>
            </div>
          </div>
        </nav>

        <!-- Terminal Hero -->
        <section class="pt-32 pb-20 md:pt-40 md:pb-32">
          <div class="container mx-auto px-6">
            <div class="bg-gray-800 rounded-lg border border-gray-700 shadow-2xl">
              <!-- Terminal Header -->
              <div class="flex items-center justify-between bg-gray-700 px-4 py-3 rounded-t-lg">
                <div class="flex space-x-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="text-gray-400 text-sm">john@macbook-pro: ~</div>
              </div>
              
              <!-- Terminal Content -->
              <div class="p-6 md:p-8">
                <div class="space-y-4">
                  <div>
                    <span class="text-green-400">john@dev:</span>
                    <span class="text-white">~$</span>
                    <span class="text-gray-300 ml-2">whoami</span>
                  </div>
                  <div class="text-white leading-relaxed">
                    Full Stack Developer | Problem Solver | Code Enthusiast
                  </div>
                  <div class="pt-4">
                    <span class="text-green-400">john@dev:</span>
                    <span class="text-white">~$</span>
                    <span class="text-gray-300 ml-2">cat introduction.txt</span>
                  </div>
                  <div class="text-gray-300 leading-relaxed max-w-3xl">
                    Hey there! I'm John, a passionate full-stack developer with 6+ years of experience 
                    building scalable web applications. I love turning complex problems into elegant, 
                    efficient solutions using modern technologies.
                  </div>
                  <div class="pt-4">
                    <span class="text-green-400">john@dev:</span>
                    <span class="text-white">~$</span>
                    <span class="text-gray-300 ml-2">ls -la skills/</span>
                  </div>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div class="text-blue-400">drwxr-xr-x JavaScript/</div>
                    <div class="text-blue-400">drwxr-xr-x React/</div>
                    <div class="text-blue-400">drwxr-xr-x Node.js/</div>
                    <div class="text-blue-400">drwxr-xr-x Python/</div>
                    <div class="text-blue-400">drwxr-xr-x MongoDB/</div>
                    <div class="text-blue-400">drwxr-xr-x PostgreSQL/</div>
                    <div class="text-blue-400">drwxr-xr-x Docker/</div>
                    <div class="text-blue-400">drwxr-xr-x AWS/</div>
                  </div>
                  <div class="pt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button class="bg-green-500 text-gray-900 px-6 py-3 rounded font-bold hover:bg-green-400 transition-colors duration-300 transform hover:scale-105">
                      ./view_projects.sh
                    </button>
                    <button class="border border-green-500 text-green-400 px-6 py-3 rounded font-bold hover:bg-green-500 hover:text-gray-900 transition-all duration-300">
                      ./download_resume.sh
                    </button>
                  </div>
                  <div class="pt-4">
                    <span class="text-green-400 animate-pulse">john@dev:</span>
                    <span class="text-white">~$</span>
                    <span class="animate-pulse">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-20 md:py-32">
          <div class="container mx-auto px-6">
            <div class="mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                <span class="text-green-400"># </span>Featured Projects
              </h2>
              <div class="text-gray-400">Recent work and side projects</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Project 1 -->
              <div class="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <div class="bg-gray-700 px-4 py-3 border-b border-gray-600">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div class="text-gray-400 text-sm ml-4">e-commerce-app.js</div>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-white mb-3">E-Commerce Platform</h3>
                  <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                    Full-stack e-commerce solution built with React, Node.js, and MongoDB. 
                    Features include user authentication, payment processing, and admin dashboard.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">React</span>
                    <span class="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Node.js</span>
                    <span class="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">MongoDB</span>
                  </div>
                  <div class="flex space-x-4">
                    <a href="#" class="text-green-400 hover:text-green-300 text-sm">Live Demo →</a>
                    <a href="#" class="text-gray-400 hover:text-gray-300 text-sm">GitHub →</a>
                  </div>
                </div>
              </div>

              <!-- Project 2 -->
              <div class="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <div class="bg-gray-700 px-4 py-3 border-b border-gray-600">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div class="text-gray-400 text-sm ml-4">task-manager.py</div>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-white mb-3">AI Task Manager</h3>
                  <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                    Intelligent task management system using Python and machine learning 
                    to prioritize tasks and predict completion times.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">Python</span>
                    <span class="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs">TensorFlow</span>
                    <span class="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">PostgreSQL</span>
                  </div>
                  <div class="flex space-x-4">
                    <a href="#" class="text-green-400 hover:text-green-300 text-sm">Live Demo →</a>
                    <a href="#" class="text-gray-400 hover:text-gray-300 text-sm">GitHub →</a>
                  </div>
                </div>
              </div>

              <!-- Project 3 -->
              <div class="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <div class="bg-gray-700 px-4 py-3 border-b border-gray-600">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div class="text-gray-400 text-sm ml-4">crypto-tracker.tsx</div>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-white mb-3">Crypto Tracker</h3>
                  <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                    Real-time cryptocurrency tracking dashboard with portfolio management 
                    and price alerts built with Next.js and TypeScript.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Next.js</span>
                    <span class="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">TypeScript</span>
                    <span class="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">Redis</span>
                  </div>
                  <div class="flex space-x-4">
                    <a href="#" class="text-green-400 hover:text-green-300 text-sm">Live Demo →</a>
                    <a href="#" class="text-gray-400 hover:text-gray-300 text-sm">GitHub →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Stats Section -->
        <section class="py-20 bg-gray-800/50">
          <div class="container mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-green-400 mb-2">6+</div>
                <div class="text-gray-400">Years Experience</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
                <div class="text-gray-400">Projects Completed</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-green-400 mb-2">20+</div>
                <div class="text-gray-400">Happy Clients</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div class="text-gray-400">Code Uptime</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 md:py-32">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <div class="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                <div class="bg-gray-700 px-4 py-3 border-b border-gray-600">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div class="text-gray-400 text-sm ml-4">contact.sh</div>
                  </div>
                </div>
                <div class="p-8">
                  <div class="space-y-4">
                    <div>
                      <span class="text-green-400">john@dev:</span>
                      <span class="text-white">~$</span>
                      <span class="text-gray-300 ml-2">echo "Let's work together!"</span>
                    </div>
                    <div class="text-white text-xl md:text-2xl font-bold">
                      Let's work together!
                    </div>
                    <div class="text-gray-300 leading-relaxed">
                      I'm always interested in new opportunities and exciting projects. 
                      Whether you have a question or just want to say hi, feel free to reach out!
                    </div>
                    <div class="pt-6 space-y-4">
                      <div class="flex items-center space-x-4">
                        <span class="text-green-400">email:</span>
                        <span class="text-white">john.dev@example.com</span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <span class="text-green-400">linkedin:</span>
                        <span class="text-white">/in/johndev</span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <span class="text-green-400">github:</span>
                        <span class="text-white">/johndev</span>
                      </div>
                    </div>
                    <div class="pt-6">
                      <button class="bg-green-500 text-gray-900 px-8 py-3 rounded font-bold hover:bg-green-400 transition-colors duration-300 transform hover:scale-105">
                        ./send_message.sh
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black py-12 border-t border-gray-800">
          <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="text-green-400 font-bold mb-4 md:mb-0">
                <span class="text-white">john@dev:</span><span>~$</span>
              </div>
              <div class="text-gray-500 text-sm">
                © 2025 John Developer. All rights reserved. | Built with ❤️ and ☕
              </div>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Portfolio Templates",
  },
  {
    id: "creative-dark-artist",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://cdn-icons-png.flaticon.com/512/726/726056.png" 
         alt="Dark Creative Artist Portfolio" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Dark Portfolio</div>
</div>`,
    content: `
      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 font-sans antialiased text-white">
        <!-- Artistic Dark Background -->
        <div class="fixed inset-0 opacity-10">
          <div class="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-32 right-32 w-24 h-24 bg-pink-500 rounded-full blur-2xl animate-bounce"></div>
          <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl animate-ping"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/50 backdrop-blur-xl border-b border-purple-800/30">
          <div class="container mx-auto px-6 py-8">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-xl">A</span>
                </div>
                <h1 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide">
                  ARIA STUDIOS
                </h1>
              </div>
              <div class="hidden md:flex space-x-12 text-gray-300 font-medium">
                <a href="#portfolio" class="hover:text-purple-400 transition-all duration-500 transform hover:scale-110 relative group">
                  Portfolio
                  <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#process" class="hover:text-pink-400 transition-all duration-500 transform hover:scale-110 relative group">
                  Process
                  <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#about" class="hover:text-blue-400 transition-all duration-500 transform hover:scale-110 relative group">
                  About
                  <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" class="hover:text-green-400 transition-all duration-500 transform hover:scale-110 relative group">
                  Contact
                  <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="portfolio" class="relative py-32 text-left">
          <div class="container mx-auto px-6">
            <div class="max-w-6xl mx-auto">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span class="inline-block bg-gradient-to-r from-purple-800/50 to-pink-800/50 text-purple-300 px-6 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-sm border border-purple-500/30">
                    ✨ CREATIVE VISIONARY
                  </span>
                  <h2 class="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
                    Digital
                    <br />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                      Artistry
                    </span>
                  </h2>
                  <p class="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                    Transforming imagination into stunning visual experiences. 
                    Specialized in contemporary digital art, brand identity, and immersive design.
                  </p>

                  <div class="flex flex-col md:flex-row gap-6">
                    <button class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
                      View My Work
                    </button>
                    <button class="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                      Commission Art
                    </button>
                  </div>
                </div>

                <div class="relative">
                  <div class="w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                    <div class="text-8xl text-purple-400 animate-pulse">🎨</div>
                  </div>
                  <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-50 animate-bounce"></div>
                  <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Gallery Section -->
        <section id="process" class="py-24 bg-black/30 backdrop-blur-sm">
          <div class="container mx-auto px-6">
            <div class="text-center mb-20">
              <h3 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
                Featured Artwork
              </h3>
              <div class="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-purple-500/30 hover:border-purple-500 transition-all duration-500">
                <div class="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div class="text-6xl text-purple-400 group-hover:scale-110 transition-transform duration-500">🌟</div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div class="p-6">
                    <h4 class="text-xl font-bold text-white mb-2">Cosmic Dreams</h4>
                    <p class="text-gray-300 text-sm">Digital illustration exploring space and time</p>
                  </div>
                </div>
              </div>

              <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-pink-500/30 hover:border-pink-500 transition-all duration-500">
                <div class="aspect-square bg-gradient-to-br from-pink-600/20 to-blue-600/20 flex items-center justify-center">
                  <div class="text-6xl text-pink-400 group-hover:scale-110 transition-transform duration-500">🎭</div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div class="p-6">
                    <h4 class="text-xl font-bold text-white mb-2">Emotional Masks</h4>
                    <p class="text-gray-300 text-sm">Contemporary portrait series</p>
                  </div>
                </div>
              </div>

              <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-blue-500/30 hover:border-blue-500 transition-all duration-500">
                <div class="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div class="text-6xl text-blue-400 group-hover:scale-110 transition-transform duration-500">🌊</div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div class="p-6">
                    <h4 class="text-xl font-bold text-white mb-2">Fluid Motion</h4>
                    <p class="text-gray-300 text-sm">Abstract movement study</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-24">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
              <h3 class="text-5xl md:text-6xl font-black text-white mb-8">The Artist Behind the Vision</h3>
              <div class="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div>
                  <div class="text-4xl font-black text-purple-400 mb-2">10+</div>
                  <div class="text-gray-400 font-semibold">Years Experience</div>
                </div>
                <div>
                  <div class="text-4xl font-black text-pink-400 mb-2">500+</div>
                  <div class="text-gray-400 font-semibold">Artworks Created</div>
                </div>
                <div>
                  <div class="text-4xl font-black text-blue-400 mb-2">50+</div>
                  <div class="text-gray-400 font-semibold">Happy Clients</div>
                </div>
              </div>

              <p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                With over a decade of experience in digital artistry, I blend traditional techniques with cutting-edge technology 
                to create visually stunning pieces that tell compelling stories and evoke deep emotions.
              </p>

              <div class="flex flex-wrap justify-center gap-4">
                <span class="bg-purple-800/30 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30">Digital Illustration</span>
                <span class="bg-pink-800/30 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold border border-pink-500/30">Brand Identity</span>
                <span class="bg-blue-800/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">Motion Graphics</span>
                <span class="bg-green-800/30 text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30">3D Art</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-24 bg-black/30 backdrop-blur-sm">
          <div class="container mx-auto px-6 text-center">
            <div class="max-w-3xl mx-auto">
              <h3 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
                Let's Create Together
              </h3>
              <div class="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>
              <p class="text-xl text-gray-300 leading-relaxed mb-12">
                Ready to bring your vision to life? Let's collaborate on your next creative project.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
                  Start a Project
                </button>
                <span class="text-gray-400">or</span>
                <a href="mailto:hello@ariastudios.com" class="text-purple-400 hover:text-purple-300 font-bold text-lg transition-all duration-300">
                  hello@ariastudios.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black border-t border-gray-800 py-12">
          <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="flex items-center space-x-4 mb-6 md:mb-0">
                <div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-bold">A</span>
                </div>
                <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ARIA STUDIOS</span>
              </div>
              <div class="flex space-x-8 text-gray-400">
                <a href="#" class="hover:text-purple-400 transition-colors duration-300">Instagram</a>
                <a href="#" class="hover:text-pink-400 transition-colors duration-300">Behance</a>
                <a href="#" class="hover:text-blue-400 transition-colors duration-300">Dribbble</a>
              </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2025 Aria Studios. Creating the extraordinary.</p>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Portfolio Templates",
  },
];

export default portfolioTemplates;
