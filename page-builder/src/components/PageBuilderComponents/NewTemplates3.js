
const portfolioTemplates = [
  {
    id: "designer-portfolio-minimal",
    label: "Designer Portfolio - Minimal",
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
    `
  },
  {
    id: "developer-portfolio-dark",
    label: "Developer Portfolio - Dark Theme",
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
    `
  }
];

export default portfolioTemplates;
