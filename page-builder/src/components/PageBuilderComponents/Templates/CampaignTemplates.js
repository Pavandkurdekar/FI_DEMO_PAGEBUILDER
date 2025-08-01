const campaignTemplates = [
  {
    id: "political-campaign-dark",
        label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://static.vecteezy.com/system/resources/previews/006/687/410/non_2x/political-capitol-logo-design-vector.jpg" 
         alt="campaign logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Political Campaign</div>
</div>`,
    content: `
      <div class="bg-gradient-to-br from-gray-900 via-blue-900 to-black font-sans antialiased text-white min-h-screen">
        <!-- Animated Background Elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div class="absolute top-40 right-32 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
          <div class="absolute bottom-32 left-1/3 w-4 h-4 bg-white rounded-full animate-ping"></div>
          <div class="absolute top-1/2 right-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
        </div>

        <!-- Navigation -->
        <nav class="relative z-50 bg-gradient-to-r from-blue-800 to-red-800 shadow-2xl">
          <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span class="text-blue-800 font-black text-xl">★</span>
                </div>
                <h1 class="text-2xl md:text-3xl font-black text-white tracking-wide">VOTE 2025</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-white font-semibold">
                <a href="#about" class="hover:text-blue-300 transition-colors duration-300">About</a>
                <a href="#policies" class="hover:text-blue-300 transition-colors duration-300">Policies</a>
                <a href="#events" class="hover:text-blue-300 transition-colors duration-300">Events</a>
                <a href="#donate" class="hover:text-blue-300 transition-colors duration-300">Donate</a>
              </div>
            </div>
          </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative py-20 md:py-32">
          <div class="container mx-auto px-4 text-center">
            <div class="mb-12">
              <h2 class="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 mb-6 animate-pulse">
                CHANGE STARTS HERE
              </h2>
              <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the movement for a better tomorrow. Your vote, your voice, your future.
              </p>
            </div>
            
            <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
              <button class="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-8 py-4 rounded-full text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                REGISTER TO VOTE
              </button>
              <button class="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-8 py-4 rounded-full text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                DONATE NOW
              </button>
            </div>

            <!-- Animated Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div class="bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-3xl md:text-4xl font-black text-blue-300 mb-2">50K+</div>
                <div class="text-gray-300 font-semibold">Supporters</div>
              </div>
              <div class="bg-gradient-to-br from-red-800 to-red-900 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-3xl md:text-4xl font-black text-red-300 mb-2">150+</div>
                <div class="text-gray-300 font-semibold">Cities</div>
              </div>
              <div class="bg-gradient-to-br from-purple-800 to-purple-900 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-3xl md:text-4xl font-black text-purple-300 mb-2">$2M</div>
                <div class="text-gray-300 font-semibold">Raised</div>
              </div>
              <div class="bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-3xl md:text-4xl font-black text-green-300 mb-2">30</div>
                <div class="text-gray-300 font-semibold">Days Left</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Policies Section -->
        <section id="policies" class="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-5xl font-black text-center mb-16 text-white">OUR VISION</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-blue-700 to-blue-800 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-5xl mb-6 text-center">🏥</div>
                <h4 class="text-2xl font-bold text-white mb-4 text-center">Healthcare</h4>
                <p class="text-blue-100 text-center">Universal healthcare for all citizens with affordable access to quality medical services.</p>
              </div>
              <div class="bg-gradient-to-br from-green-700 to-green-800 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-5xl mb-6 text-center">🎓</div>
                <h4 class="text-2xl font-bold text-white mb-4 text-center">Education</h4>
                <p class="text-green-100 text-center">Quality education system that prepares students for the future economy.</p>
              </div>
              <div class="bg-gradient-to-br from-purple-700 to-purple-800 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-5xl mb-6 text-center">🌱</div>
                <h4 class="text-2xl font-bold text-white mb-4 text-center">Environment</h4>
                <p class="text-purple-100 text-center">Clean energy initiatives and environmental protection for future generations.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black py-12">
          <div class="container mx-auto px-4 text-center">
            <div class="text-2xl font-black text-white mb-4">VOTE FOR CHANGE</div>
            <div class="text-gray-400 mb-6">Paid for by Citizens for Progress</div>
            <div class="flex justify-center space-x-6">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span class="text-white font-bold">f</span>
              </div>
              <div class="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span class="text-white font-bold">t</span>
              </div>
              <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <span class="text-white font-bold">yt</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `,
     category:"Campaign"
  },
  {
    id: "product-campaign-light",
         label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://cdn1.vectorstock.com/i/1000x1000/70/85/product-branding-icon-flat-design-vector-6827085.jpg" 
         alt="campaign logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Product Campaign</div>
</div>`,
    content: `
      <div class="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 font-sans antialiased text-gray-800 min-h-screen">
        <!-- Floating Elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-16 left-16 w-4 h-4 bg-pink-300 rounded-full animate-bounce"></div>
          <div class="absolute top-48 right-24 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
          <div class="absolute bottom-24 left-1/4 w-5 h-5 bg-purple-300 rounded-full animate-ping"></div>
          <div class="absolute top-1/3 right-16 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-white shadow-lg border-b-4 border-gradient-to-r from-pink-400 to-purple-400">
          <div class="container mx-auto px-4 py-6">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span class="text-white font-black text-xl">✨</span>
                </div>
                <h1 class="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">SPARKLE PRO</h1>
              </div>
              <nav class="hidden md:flex space-x-8 text-gray-700 font-semibold">
                <a href="#features" class="hover:text-pink-500 transition-colors duration-300">Features</a>
                <a href="#pricing" class="hover:text-pink-500 transition-colors duration-300">Pricing</a>
                <a href="#testimonials" class="hover:text-pink-500 transition-colors duration-300">Reviews</a>
                <a href="#contact" class="hover:text-pink-500 transition-colors duration-300">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <!-- Hero Section -->
        <section class="relative py-20 md:py-32">
          <div class="container mx-auto px-4 text-center">
            <div class="mb-12">
              <h2 class="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-6 animate-pulse">
                REVOLUTIONIZE
              </h2>
              <h3 class="text-3xl md:text-5xl font-bold text-gray-700 mb-6">
                Your Digital Experience
              </h3>
              <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The most advanced productivity tool that transforms how you work, create, and collaborate.
              </p>
            </div>
            
            <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
              <button class="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-10 py-4 rounded-full text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                START FREE TRIAL
              </button>
              <button class="border-2 border-gray-400 hover:border-pink-500 px-10 py-4 rounded-full text-gray-700 hover:text-pink-500 font-bold text-lg transform hover:scale-105 transition-all duration-300">
                WATCH DEMO
              </button>
            </div>

            <!-- Product Showcase -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto transform hover:scale-105 transition-all duration-500">
              <div class="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 md:p-16">
                <div class="text-6xl md:text-8xl mb-6">💎</div>
                <h4 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Premium Interface</h4>
                <p class="text-gray-600 text-lg">Experience the future of digital interaction with our intuitive and beautiful interface.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-20 bg-gradient-to-r from-white to-gray-50">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">AMAZING FEATURES</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 border-l-4 border-pink-400">
                <div class="text-5xl mb-6 text-center">⚡</div>
                <h4 class="text-2xl font-bold text-gray-800 mb-4 text-center">Lightning Fast</h4>
                <p class="text-gray-600 text-center">Experience blazing fast performance with our optimized engine.</p>
              </div>
              <div class="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 border-l-4 border-purple-400">
                <div class="text-5xl mb-6 text-center">🔒</div>
                <h4 class="text-2xl font-bold text-gray-800 mb-4 text-center">Ultra Secure</h4>
                <p class="text-gray-600 text-center">Bank-level security to keep your data safe and protected.</p>
              </div>
              <div class="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 border-l-4 border-blue-400">
                <div class="text-5xl mb-6 text-center">🌐</div>
                <h4 class="text-2xl font-bold text-gray-800 mb-4 text-center">Cloud Sync</h4>
                <p class="text-gray-600 text-center">Access your work from anywhere with seamless cloud synchronization.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-5xl font-black text-center mb-16 text-gray-800">CHOOSE YOUR PLAN</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div class="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <h4 class="text-2xl font-bold text-gray-800 mb-4 text-center">Starter</h4>
                <div class="text-4xl font-black text-pink-500 mb-6 text-center">$9<span class="text-lg text-gray-500">/mo</span></div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> 5 Projects</li>
                  <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> 10GB Storage</li>
                  <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Email Support</li>
                </ul>
                <button class="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 rounded-full font-bold hover:from-pink-500 hover:to-pink-600 transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-white relative">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                <h4 class="text-2xl font-bold mb-4 text-center">Professional</h4>
                <div class="text-4xl font-black mb-6 text-center">$29<span class="text-lg opacity-80">/mo</span></div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-center"><span class="text-yellow-300 mr-2">✓</span> Unlimited Projects</li>
                  <li class="flex items-center"><span class="text-yellow-300 mr-2">✓</span> 100GB Storage</li>
                  <li class="flex items-center"><span class="text-yellow-300 mr-2">✓</span> Priority Support</li>
                  <li class="flex items-center"><span class="text-yellow-300 mr-2">✓</span> Advanced Features</li>
                </ul>
                <button class="w-full bg-white text-purple-600 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>
              <div class="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <h4 class="text-2xl font-bold text-gray-800 mb-4 text-center">Enterprise</h4>
                <div class="text-4xl font-black text-purple-500 mb-6 text-center">$99<span class="text-lg text-gray-500">/mo</span></div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Everything in Pro</li>
                  <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> 1TB Storage</li>
                  <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> 24/7 Support</li>
                  <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Custom Integration</li>
                </ul>
                <button class="w-full bg-gradient-to-r from-purple-400 to-purple-500 text-white py-3 rounded-full font-bold hover:from-purple-500 hover:to-purple-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 py-12">
          <div class="container mx-auto px-4 text-center">
            <div class="text-2xl font-black text-white mb-4">SPARKLE PRO</div>
            <div class="text-gray-400 mb-6">© 2025 SparkleProTM. All rights reserved.</div>
            <div class="flex justify-center space-x-6">
              <div class="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <span class="text-white font-bold">f</span>
              </div>
              <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span class="text-white font-bold">in</span>
              </div>
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span class="text-white font-bold">t</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `,
    category:"Campaign"
  },
  {
    id: "campaign-product-launch",
           label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://img.freepik.com/free-vector/rocket-background-flat-style_23-2147904992.jpg?semt=ais_hybrid&w=740&q=80" 
         alt="campaign logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Product Launch</div>
</div>`,
    content: `
      <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-black dark:to-purple-900 font-sans antialiased text-white overflow-hidden">
        <!-- Animated Background Particles -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div class="absolute top-1/4 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div class="absolute bottom-1/3 left-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
          <div class="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-ping animation-delay-1000"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/30">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">LaunchPad</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-purple-200 font-semibold">
                <a href="#hero" class="hover:text-purple-400 transition-all duration-300 hover:scale-105">Product</a>
                <a href="#features" class="hover:text-purple-400 transition-all duration-300 hover:scale-105">Features</a>
                <a href="#pricing" class="hover:text-purple-400 transition-all duration-300 hover:scale-105">Pricing</a>
                <a href="#launch" class="hover:text-purple-400 transition-all duration-300 hover:scale-105">Launch</a>
              </div>
              <button class="md:hidden text-purple-300 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="hero" class="relative py-20 text-center">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <div class="mb-8 animate-fade-in-up">
                <span class="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                  🚀 LAUNCHING SOON
                </span>
                <h2 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 mb-6 leading-tight">
                  Revolutionary
                  <br />Product Launch
                </h2>
                <p class="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed">
                  Experience the future today. Our groundbreaking product will transform the way you work, play, and live.
                </p>
              </div>

              <div class="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                <button class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Get Early Access
                </button>
                <button class="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Watch Demo
                </button>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-3xl md:text-4xl font-black text-purple-400 mb-2">50K+</div>
                  <div class="text-purple-200 font-semibold">Pre-orders</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-3xl md:text-4xl font-black text-blue-400 mb-2">24hr</div>
                  <div class="text-purple-200 font-semibold">Countdown</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-3xl md:text-4xl font-black text-indigo-400 mb-2">99%</div>
                  <div class="text-purple-200 font-semibold">Satisfaction</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-3xl md:text-4xl font-black text-purple-400 mb-2">∞</div>
                  <div class="text-purple-200 font-semibold">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-20 bg-black/10 backdrop-blur-sm">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Game-Changing Features
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-8 rounded-3xl backdrop-blur-lg border border-purple-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-5xl mb-6">⚡</div>
                <h4 class="text-2xl font-black text-purple-300 mb-4">Lightning Fast</h4>
                <p class="text-purple-200 leading-relaxed">Experience unprecedented speed with our revolutionary processing technology that's 10x faster than competitors.</p>
              </div>
              <div class="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 p-8 rounded-3xl backdrop-blur-lg border border-blue-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-5xl mb-6">🛡️</div>
                <h4 class="text-2xl font-black text-blue-300 mb-4">Ultra Secure</h4>
                <p class="text-blue-200 leading-relaxed">Military-grade encryption and advanced security protocols keep your data safe from any threat.</p>
              </div>
              <div class="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 p-8 rounded-3xl backdrop-blur-lg border border-indigo-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-5xl mb-6">🎨</div>
                <h4 class="text-2xl font-black text-indigo-300 mb-4">Beautiful Design</h4>
                <p class="text-indigo-200 leading-relaxed">Crafted with pixel-perfect precision and intuitive user experience that delights every interaction.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Launch Countdown -->
        <section id="launch" class="py-20">
          <div class="container mx-auto px-4 text-center">
            <div class="max-w-2xl mx-auto">
              <h3 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
                Launch Countdown
              </h3>
              <div class="grid grid-cols-4 gap-4 mb-12">
                <div class="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-2xl">
                  <div class="text-3xl font-black text-white mb-2">07</div>
                  <div class="text-purple-200 font-semibold">Days</div>
                </div>
                <div class="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-2xl">
                  <div class="text-3xl font-black text-white mb-2">14</div>
                  <div class="text-blue-200 font-semibold">Hours</div>
                </div>
                <div class="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl">
                  <div class="text-3xl font-black text-white mb-2">32</div>
                  <div class="text-indigo-200 font-semibold">Minutes</div>
                </div>
                <div class="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl">
                  <div class="text-3xl font-black text-white mb-2">45</div>
                  <div class="text-purple-200 font-semibold">Seconds</div>
                </div>
              </div>
              <button class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 rounded-3xl font-black text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse">
                Notify Me at Launch
              </button>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black/20 backdrop-blur-lg border-t border-purple-500/30 py-12">
          <div class="container mx-auto px-4 text-center">
            <div class="flex items-center justify-center space-x-3 mb-6">
              <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
              <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">LaunchPad</span>
            </div>
            <p class="text-purple-300 mb-4">&copy; 2025 LaunchPad. Revolutionizing the future.</p>
            <div class="flex justify-center space-x-6">
              <a href="#" class="text-purple-300 hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" class="text-purple-300 hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" class="text-purple-300 hover:text-purple-400 transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Campaign",
  },

  {
    id: "campaign-social-awareness",
          label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://t4.ftcdn.net/jpg/12/93/03/53/360_F_1293035306_j25DcBuNHIfrpa4u5dwe8rLVirY4Rjye.jpg" 
         alt="campaign" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Social Awareness</div>
</div>`,
    content: `
      <div class="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 dark:from-gray-900 dark:via-green-900 dark:to-teal-900 font-sans antialiased text-white">
        <!-- Floating Awareness Icons -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-10 text-4xl animate-bounce text-green-400">🌱</div>
          <div class="absolute top-1/3 right-20 text-3xl animate-pulse text-teal-400">🌍</div>
          <div class="absolute bottom-1/4 left-1/4 text-5xl animate-bounce animation-delay-500 text-blue-400">💚</div>
          <div class="absolute top-2/3 right-1/3 text-2xl animate-ping text-green-300">✨</div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/30 backdrop-blur-xl border-b border-green-500/20">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">🌍</span>
                </div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">EcoChange</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-green-200 font-semibold">
                <a href="#mission" class="hover:text-green-400 transition-all duration-300 transform hover:scale-105">Mission</a>
                <a href="#impact" class="hover:text-green-400 transition-all duration-300 transform hover:scale-105">Impact</a>
                <a href="#action" class="hover:text-green-400 transition-all duration-300 transform hover:scale-105">Take Action</a>
                <a href="#join" class="hover:text-green-400 transition-all duration-300 transform hover:scale-105">Join Us</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="mission" class="relative py-24 text-center">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <span class="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 animate-pulse">
                🌱 CHANGE STARTS NOW
              </span>
              <h2 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 mb-8 leading-tight">
                Save Our Planet
                <br />One Action at a Time
              </h2>
              <p class="text-xl md:text-2xl text-green-200 mb-12 leading-relaxed">
                Join millions of changemakers. Together, we can create a sustainable future for generations to come.
              </p>

              <div class="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                <button class="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Start Making a Difference
                </button>
                <button class="border-2 border-green-500 text-green-300 hover:bg-green-500 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>

              <!-- Impact Stats -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-green-400 mb-2">2M+</div>
                  <div class="text-green-200 font-semibold">Trees Planted</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-teal-400 mb-2">50K</div>
                  <div class="text-green-200 font-semibold">Activists</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-blue-400 mb-2">100+</div>
                  <div class="text-green-200 font-semibold">Countries</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-green-400 mb-2">∞</div>
                  <div class="text-green-200 font-semibold">Hope</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Impact Areas -->
        <section id="impact" class="py-20 bg-black/20 backdrop-blur-sm">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Our Impact Areas
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-green-800/60 to-teal-800/60 p-8 rounded-3xl backdrop-blur-lg border border-green-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-6xl mb-6 text-center">🌳</div>
                <h4 class="text-2xl font-black text-green-300 mb-4 text-center">Reforestation</h4>
                <p class="text-green-200 leading-relaxed text-center">Planting millions of trees worldwide to restore forests and combat deforestation in critical ecosystems.</p>
              </div>
              <div class="bg-gradient-to-br from-teal-800/60 to-blue-800/60 p-8 rounded-3xl backdrop-blur-lg border border-teal-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-6xl mb-6 text-center">🌊</div>
                <h4 class="text-2xl font-black text-teal-300 mb-4 text-center">Ocean Cleanup</h4>
                <p class="text-teal-200 leading-relaxed text-center">Removing plastic waste from oceans and protecting marine life through innovative cleanup technologies.</p>
              </div>
              <div class="bg-gradient-to-br from-blue-800/60 to-green-800/60 p-8 rounded-3xl backdrop-blur-lg border border-blue-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-6xl mb-6 text-center">⚡</div>
                <h4 class="text-2xl font-black text-blue-300 mb-4 text-center">Clean Energy</h4>
                <p class="text-blue-200 leading-relaxed text-center">Promoting renewable energy solutions and reducing carbon emissions through sustainable practices.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black/30 backdrop-blur-xl border-t border-green-500/20 py-12">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="flex items-center space-x-3 mb-6 md:mb-0">
                <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">🌍</span>
                </div>
                <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">EcoChange</span>
              </div>
              <p class="text-green-400">&copy; 2025 EcoChange. Making the world greener.</p>
            </div>
          </div>
        </footer>
      </div>


    `,
    category: "Campaign",
  },

  {
    id: "campaign-fitness-challenge",
         label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://thumbs.dreamstime.com/b/creative-gym-fitness-logo-design-creative-gym-fitness-logo-design-modern-style-symbol-vector-concept-icon-263490547.jpg" 
         alt="campaign" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Fitness Campaign</div>
</div>`,
    content: `
      <div class="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 dark:from-gray-900 dark:via-red-900 dark:to-orange-900 font-sans antialiased text-white">
        <!-- Animated Fitness Icons -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-16 left-16 text-4xl animate-bounce text-red-400">💪</div>
          <div class="absolute top-1/4 right-24 text-3xl animate-pulse text-orange-400">🔥</div>
          <div class="absolute bottom-1/3 left-1/3 text-5xl animate-bounce animation-delay-300 text-yellow-400">⚡</div>
          <div class="absolute top-3/4 right-1/4 text-2xl animate-ping text-red-300">🏃‍♂️</div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/30 backdrop-blur-xl border-b border-red-500/20">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">💪</span>
                </div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">FitForce</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-red-200 font-semibold">
                <a href="#challenge" class="hover:text-red-400 transition-all duration-300 transform hover:scale-105">Challenge</a>
                <a href="#program" class="hover:text-red-400 transition-all duration-300 transform hover:scale-105">Program</a>
                <a href="#results" class="hover:text-red-400 transition-all duration-300 transform hover:scale-105">Results</a>
                <a href="#join" class="hover:text-red-400 transition-all duration-300 transform hover:scale-105">Join Now</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="challenge" class="relative py-24 text-center">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <span class="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 animate-pulse">
                💪 30-DAY CHALLENGE
              </span>
              <h2 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-8 leading-tight">
                Transform Your Body
                <br />In 30 Days
              </h2>
              <p class="text-xl md:text-2xl text-red-200 mb-12 leading-relaxed">
                Join thousands who've already transformed their lives. Get stronger, faster, and healthier with our proven fitness system.
              </p>

              <div class="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                <button class="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Start Challenge Now
                </button>
                <button class="border-2 border-red-500 text-red-300 hover:bg-red-500 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Watch Success Stories
                </button>
              </div>

              <!-- Challenge Stats -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-red-400 mb-2">50K+</div>
                  <div class="text-red-200 font-semibold">Participants</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-orange-400 mb-2">95%</div>
                  <div class="text-red-200 font-semibold">Success Rate</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-yellow-400 mb-2">30</div>
                  <div class="text-red-200 font-semibold">Days</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-red-400 mb-2">∞</div>
                  <div class="text-red-200 font-semibold">Energy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Program Features -->
        <section id="program" class="py-20 bg-black/20 backdrop-blur-sm">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Complete Fitness System
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-red-800/60 to-orange-800/60 p-8 rounded-3xl backdrop-blur-lg border border-red-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-6xl mb-6 text-center">🏋️‍♂️</div>
                <h4 class="text-2xl font-black text-red-300 mb-4 text-center">Strength Training</h4>
                <p class="text-red-200 leading-relaxed text-center">Build lean muscle and increase strength with our scientifically-designed workout programs.</p>
              </div>
              <div class="bg-gradient-to-br from-orange-800/60 to-yellow-800/60 p-8 rounded-3xl backdrop-blur-lg border border-orange-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-6xl mb-6 text-center">🥗</div>
                <h4 class="text-2xl font-black text-orange-300 mb-4 text-center">Nutrition Plan</h4>
                <p class="text-orange-200 leading-relaxed text-center">Fuel your body with customized meal plans designed for optimal performance and results.</p>
              </div>
              <div class="bg-gradient-to-br from-yellow-800/60 to-red-800/60 p-8 rounded-3xl backdrop-blur-lg border border-yellow-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-6xl mb-6 text-center">📱</div>
                <h4 class="text-2xl font-black text-yellow-300 mb-4 text-center">Progress Tracking</h4>
                <p class="text-yellow-200 leading-relaxed text-center">Monitor your transformation with our advanced progress tracking and analytics system.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black/30 backdrop-blur-xl border-t border-red-500/20 py-12">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="flex items-center space-x-3 mb-6 md:mb-0">
                <div class="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">💪</span>
                </div>
                <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">FitForce</span>
              </div>
              <p class="text-red-400">&copy; 2025 FitForce. Transform your life today.</p>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Campaign",
  
  },

  {
    id: "campaign-charity-drive",
        label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://png.pngtree.com/png-clipart/20250103/original/pngtree-illustration-of-charity-logo-design-template-png-image_3997210.png" 
         alt="campaign logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Charity Campaign</div>
</div>`,
    content: `
      <div class="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-pink-900 dark:to-purple-900 font-sans antialiased text-white">
        <!-- Floating Heart Icons -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-12 text-4xl animate-bounce text-pink-400">❤️</div>
          <div class="absolute top-1/3 right-16 text-3xl animate-pulse text-purple-400">🤝</div>
          <div class="absolute bottom-1/4 left-1/4 text-5xl animate-bounce animation-delay-400 text-indigo-400">💖</div>
          <div class="absolute top-2/3 right-1/3 text-2xl animate-ping text-pink-300">✨</div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/30 backdrop-blur-xl border-b border-pink-500/20">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">❤️</span>
                </div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">HeartGive</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-pink-200 font-semibold">
                <a href="#mission" class="hover:text-pink-400 transition-all duration-300 transform hover:scale-105">Mission</a>
                <a href="#causes" class="hover:text-pink-400 transition-all duration-300 transform hover:scale-105">Causes</a>
                <a href="#donate" class="hover:text-pink-400 transition-all duration-300 transform hover:scale-105">Donate</a>
                <a href="#volunteer" class="hover:text-pink-400 transition-all duration-300 transform hover:scale-105">Volunteer</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="mission" class="relative py-24 text-center">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <span class="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 animate-pulse">
                ❤️ SPREAD LOVE & HOPE
              </span>
              <h2 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-8 leading-tight">
                Make a Difference
                <br />Change Lives
              </h2>
              <p class="text-xl md:text-2xl text-pink-200 mb-12 leading-relaxed">
                Every donation, every volunteer hour, every act of kindness creates ripples of positive change in our community.
              </p>

              <div class="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                <button class="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Donate Now
                </button>
                <button class="border-2 border-pink-500 text-pink-300 hover:bg-pink-500 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Become a Volunteer
                </button>
              </div>

              <!-- Impact Stats -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-pink-400 mb-2">100K+</div>
                  <div class="text-pink-200 font-semibold">Lives Impacted</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-purple-400 mb-2">$2M+</div>
                  <div class="text-pink-200 font-semibold">Raised</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-indigo-400 mb-2">5K+</div>
                  <div class="text-pink-200 font-semibold">Volunteers</div>
                </div>
                <div class="text-center transform hover:scale-110 transition-all duration-300">
                  <div class="text-4xl md:text-5xl font-black text-pink-400 mb-2">∞</div>
                  <div class="text-pink-200 font-semibold">Love</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Causes Section -->
        <section id="causes" class="py-20 bg-black/20 backdrop-blur-sm">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Our Causes
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-pink-800/60 to-purple-800/60 p-8 rounded-3xl backdrop-blur-lg border border-pink-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-6xl mb-6 text-center">🏠</div>
                <h4 class="text-2xl font-black text-pink-300 mb-4 text-center">Housing Support</h4>
                <p class="text-pink-200 leading-relaxed text-center">Providing safe, affordable housing solutions for families in need across our community.</p>
              </div>
              <div class="bg-gradient-to-br from-purple-800/60 to-indigo-800/60 p-8 rounded-3xl backdrop-blur-lg border border-purple-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-6xl mb-6 text-center">🎓</div>
                <h4 class="text-2xl font-black text-purple-300 mb-4 text-center">Education Access</h4>
                <p class="text-purple-200 leading-relaxed text-center">Ensuring every child has access to quality education and learning opportunities.</p>
              </div>
              <div class="bg-gradient-to-br from-indigo-800/60 to-pink-800/60 p-8 rounded-3xl backdrop-blur-lg border border-indigo-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div class="text-6xl mb-6 text-center">🍽️</div>
                <h4 class="text-2xl font-black text-indigo-300 mb-4 text-center">Food Security</h4>
                <p class="text-indigo-200 leading-relaxed text-center">Fighting hunger by providing nutritious meals to those who need them most.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black/30 backdrop-blur-xl border-t border-pink-500/20 py-12">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="flex items-center space-x-3 mb-6 md:mb-0">
                <div class="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">❤️</span>
                </div>
                <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">HeartGive</span>
              </div>
              <p class="text-pink-400">&copy; 2025 HeartGive. Spreading love and hope.</p>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Campaign",

  },
];
export default campaignTemplates;
