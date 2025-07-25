const campaignTemplates = [
  {
    id: "political-campaign-dark",
    label: "Political Campaign - Dark Theme",
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
    `
  },
  {
    id: "product-campaign-light",
    label: "Product Campaign - Light Theme",
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
    `
  }
];

export default campaignTemplates;