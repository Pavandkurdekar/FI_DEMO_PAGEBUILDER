// Stunning Template Library - 30 Jaw-Dropping Responsive Templates
// Categories: Campaign, Offers, Festival, Portfolio, Futuristic, Thanksgiving, Sales, Business, Creative

const templates = [
  // CAMPAIGN TEMPLATES (4 templates)
  {
    id: "campaign-product-launch",
    label: "Product Launch Campaign",
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
    icon: "fas fa-rocket",
  },

  {
    id: "campaign-social-awareness",
    label: "Social Awareness Campaign",
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
    icon: "fas fa-leaf",
  },

  {
    id: "campaign-fitness-challenge",
    label: "Fitness Challenge Campaign",
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
    icon: "fas fa-dumbbell",
  },

  {
    id: "campaign-charity-drive",
    label: "Charity Drive Campaign",
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
    icon: "fas fa-heart",
  },

  // OFFERS TEMPLATES (4 templates)
  {
    id: "offers-flash-sale",
    label: "Flash Sale Offers",
    content: `
      <div class="min-h-screen bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 dark:from-red-900 dark:via-orange-900 dark:to-yellow-900 font-sans antialiased text-white">
        <!-- Animated Sale Elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-12 left-12 text-4xl animate-bounce text-yellow-300">⚡</div>
          <div class="absolute top-1/4 right-20 text-3xl animate-pulse text-red-300">🔥</div>
          <div class="absolute bottom-1/3 left-1/3 text-5xl animate-bounce animation-delay-200 text-orange-300">💥</div>
          <div class="absolute top-3/4 right-1/4 text-2xl animate-ping text-yellow-400">✨</div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/40 backdrop-blur-xl border-b border-yellow-500/30">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">⚡</span>
                </div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300">FlashDeals</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-yellow-200 font-semibold">
                <a href="#deals" class="hover:text-yellow-400 transition-all duration-300 transform hover:scale-105">Hot Deals</a>
                <a href="#categories" class="hover:text-yellow-400 transition-all duration-300 transform hover:scale-105">Categories</a>
                <a href="#timer" class="hover:text-yellow-400 transition-all duration-300 transform hover:scale-105">Limited Time</a>
                <a href="#shop" class="hover:text-yellow-400 transition-all duration-300 transform hover:scale-105">Shop Now</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="deals" class="relative py-16 text-center">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <span class="inline-block bg-gradient-to-r from-red-700 to-orange-700 text-white px-8 py-3 rounded-full text-lg font-black mb-8 animate-pulse border-4 border-yellow-400">
                🔥 FLASH SALE ALERT 🔥
              </span>
              <h2 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 mb-6 leading-tight drop-shadow-2xl">
                UP TO 80% OFF
              </h2>
              <h3 class="text-3xl md:text-5xl font-bold text-yellow-200 mb-8">
                Limited Time Only!
              </h3>

              <!-- Countdown Timer -->
              <div class="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
                <div class="bg-gradient-to-br from-red-600 to-orange-600 p-4 rounded-2xl border-2 border-yellow-400">
                  <div class="text-3xl font-black text-white mb-1">23</div>
                  <div class="text-yellow-200 text-sm font-bold">HOURS</div>
                </div>
                <div class="bg-gradient-to-br from-orange-600 to-yellow-600 p-4 rounded-2xl border-2 border-red-400">
                  <div class="text-3xl font-black text-white mb-1">45</div>
                  <div class="text-red-200 text-sm font-bold">MINS</div>
                </div>
                <div class="bg-gradient-to-br from-yellow-600 to-red-600 p-4 rounded-2xl border-2 border-orange-400">
                  <div class="text-3xl font-black text-white mb-1">32</div>
                  <div class="text-orange-200 text-sm font-bold">SECS</div>
                </div>
                <div class="bg-gradient-to-br from-red-600 to-yellow-600 p-4 rounded-2xl border-2 border-orange-400">
                  <div class="text-3xl font-black text-white mb-1">18</div>
                  <div class="text-yellow-200 text-sm font-bold">MS</div>
                </div>
              </div>

              <button class="bg-gradient-to-r from-yellow-600 to-red-600 hover:from-yellow-700 hover:to-red-700 text-white px-12 py-6 rounded-3xl font-black text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-pulse border-4 border-white">
                SHOP NOW & SAVE BIG!
              </button>
            </div>
          </div>
        </section>

        <!-- Hot Deals Grid -->
        <section id="categories" class="py-16 bg-black/30 backdrop-blur-sm">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-6xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
              🔥 HOTTEST DEALS 🔥
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-red-700/80 to-orange-700/80 p-6 rounded-3xl backdrop-blur-lg border-4 border-yellow-400 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                <div class="absolute top-2 right-2 bg-yellow-500 text-red-900 px-3 py-1 rounded-full text-sm font-black">
                  70% OFF
                </div>
                <div class="text-6xl mb-4 text-center">📱</div>
                <h4 class="text-2xl font-black text-yellow-300 mb-3 text-center">Electronics</h4>
                <p class="text-yellow-200 text-center mb-4">Smartphones, laptops, and gadgets at unbeatable prices!</p>
                <div class="text-center">
                  <span class="text-gray-400 line-through text-lg">$999</span>
                  <span class="text-yellow-400 text-3xl font-black ml-2">$299</span>
                </div>
              </div>

              <div class="bg-gradient-to-br from-orange-700/80 to-yellow-700/80 p-6 rounded-3xl backdrop-blur-lg border-4 border-red-400 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                <div class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-black">
                  65% OFF
                </div>
                <div class="text-6xl mb-4 text-center">👗</div>
                <h4 class="text-2xl font-black text-red-300 mb-3 text-center">Fashion</h4>
                <p class="text-red-200 text-center mb-4">Trendy clothing and accessories for every style!</p>
                <div class="text-center">
                  <span class="text-gray-400 line-through text-lg">$149</span>
                  <span class="text-red-400 text-3xl font-black ml-2">$52</span>
                </div>
              </div>

              <div class="bg-gradient-to-br from-yellow-700/80 to-red-700/80 p-6 rounded-3xl backdrop-blur-lg border-4 border-orange-400 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                <div class="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-black">
                  80% OFF
                </div>
                <div class="text-6xl mb-4 text-center">🏠</div>
                <h4 class="text-2xl font-black text-orange-300 mb-3 text-center">Home & Garden</h4>
                <p class="text-orange-200 text-center mb-4">Transform your space with amazing deals!</p>
                <div class="text-center">
                  <span class="text-gray-400 line-through text-lg">$299</span>
                  <span class="text-orange-400 text-3xl font-black ml-2">$59</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black/50 backdrop-blur-xl border-t border-yellow-500/30 py-12">
          <div class="container mx-auto px-4 text-center">
            <div class="flex items-center justify-center space-x-3 mb-6">
              <div class="w-8 h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg flex items-center justify-center">
                <span class="text-white text-sm">⚡</span>
              </div>
              <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">FlashDeals</span>
            </div>
            <p class="text-yellow-300 mb-4">&copy; 2025 FlashDeals. Unbeatable prices, limited time!</p>
            <div class="flex justify-center space-x-6">
              <a href="#" class="text-yellow-300 hover:text-yellow-400 transition-colors">Terms</a>
              <a href="#" class="text-yellow-300 hover:text-yellow-400 transition-colors">Privacy</a>
              <a href="#" class="text-yellow-300 hover:text-yellow-400 transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Offers",
    icon: "fas fa-fire",
  },
  {
    id: "business-dark-corporate",
    label: "Dark Corporate Business",
    content: `
      <div class="min-h-screen bg-gray-900 font-sans antialiased text-white">
        <!-- Subtle Corporate Background -->
        <div class="fixed inset-0 opacity-5">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700">
          <div class="container mx-auto px-6 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-lg">B</span>
                </div>
                <h1 class="text-2xl font-bold text-white tracking-wide">BLACKSTONE</h1>
              </div>
              <div class="hidden md:flex space-x-10 text-gray-300 font-semibold">
                <a href="#about" class="hover:text-blue-400 transition-all duration-300 hover:border-b-2 hover:border-blue-400 pb-1">About</a>
                <a href="#services" class="hover:text-blue-400 transition-all duration-300 hover:border-b-2 hover:border-blue-400 pb-1">Services</a>
                <a href="#solutions" class="hover:text-blue-400 transition-all duration-300 hover:border-b-2 hover:border-blue-400 pb-1">Solutions</a>
                <a href="#contact" class="hover:text-blue-400 transition-all duration-300 hover:border-b-2 hover:border-blue-400 pb-1">Contact</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="about" class="relative py-28 text-center">
          <div class="container mx-auto px-6">
            <div class="max-w-5xl mx-auto">
              <div class="mb-12">
                <span class="inline-block bg-gradient-to-r from-blue-800 to-purple-800 text-blue-300 px-8 py-3 rounded-full text-sm font-bold mb-8 tracking-wider">
                  PREMIUM BUSINESS SOLUTIONS
                </span>
                <h2 class="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                  Enterprise
                  <br />
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Excellence</span>
                </h2>
                <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                  Delivering cutting-edge business solutions and strategic consulting services 
                  to Fortune 500 companies worldwide.
                </p>
              </div>

              <!-- Corporate Stats -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div class="text-center">
                  <div class="text-4xl md:text-5xl font-bold text-blue-400 mb-2">500+</div>
                  <div class="text-gray-400 font-semibold tracking-wider">CLIENTS</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl md:text-5xl font-bold text-purple-400 mb-2">25+</div>
                  <div class="text-gray-400 font-semibold tracking-wider">COUNTRIES</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$10B+</div>
                  <div class="text-gray-400 font-semibold tracking-wider">REVENUE</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl md:text-5xl font-bold text-purple-400 mb-2">20+</div>
                  <div class="text-gray-400 font-semibold tracking-wider">YEARS</div>
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button class="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="py-24 bg-black/30">
          <div class="container mx-auto px-6">
            <div class="text-center mb-20">
              <h3 class="text-5xl md:text-6xl font-bold text-white mb-8">Our Services</h3>
              <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transform hover:scale-105 transition-all duration-300 hover:border-blue-500">
                <div class="text-6xl mb-6 text-center text-blue-400">📊</div>
                <h4 class="text-2xl font-bold text-white mb-4 text-center">Strategic Consulting</h4>
                <p class="text-gray-300 leading-relaxed text-center">
                  Comprehensive business strategy development and implementation to drive growth and market leadership.
                </p>
              </div>

              <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transform hover:scale-105 transition-all duration-300 hover:border-purple-500">
                <div class="text-6xl mb-6 text-center text-purple-400">⚙️</div>
                <h4 class="text-2xl font-bold text-white mb-4 text-center">Operations Excellence</h4>
                <p class="text-gray-300 leading-relaxed text-center">
                  Streamline operations, optimize processes, and implement efficiency measures across your organization.
                </p>
              </div>

              <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transform hover:scale-105 transition-all duration-300 hover:border-blue-500">
                <div class="text-6xl mb-6 text-center text-blue-400">🚀</div>
                <h4 class="text-2xl font-bold text-white mb-4 text-center">Digital Transformation</h4>
                <p class="text-gray-300 leading-relaxed text-center">
                  Modernize your business with cutting-edge technology solutions and digital innovation strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Solutions Section -->
        <section id="solutions" class="py-24">
          <div class="container mx-auto px-6">
            <div class="text-center mb-20">
              <h3 class="text-5xl md:text-6xl font-bold text-white mb-8">Industry Solutions</h3>
              <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div class="flex items-center space-x-6">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-2xl">🏦</span>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-white mb-2">Financial Services</h4>
                  <p class="text-gray-300 leading-relaxed">Regulatory compliance, risk management, and digital banking solutions.</p>
                </div>
              </div>

              <div class="flex items-center space-x-6">
                <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-2xl">🏥</span>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-white mb-2">Healthcare</h4>
                  <p class="text-gray-300 leading-relaxed">Patient care optimization, data management, and compliance solutions.</p>
                </div>
              </div>

              <div class="flex items-center space-x-6">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-2xl">🏭</span>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-white mb-2">Manufacturing</h4>
                  <p class="text-gray-300 leading-relaxed">Supply chain optimization, automation, and quality management systems.</p>
                </div>
              </div>

              <div class="flex items-center space-x-6">
                <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-2xl">🛒</span>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-white mb-2">Retail</h4>
                  <p class="text-gray-300 leading-relaxed">Omnichannel experiences, inventory management, and customer analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-24 bg-black/30">
          <div class="container mx-auto px-6 text-center">
            <div class="max-w-3xl mx-auto">
              <h3 class="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Transform?</h3>
              <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
              <p class="text-xl text-gray-300 leading-relaxed mb-12">
                Let's discuss how our expertise can accelerate your business growth and digital transformation journey.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Our Experts
                </button>
                <span class="text-gray-400">or call</span>
                <a href="tel:+1-800-BLACKSTONE" class="text-blue-400 hover:text-blue-300 font-bold text-lg transition-all duration-300">
                  +1-800-BLACKSTONE
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
                <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">B</span>
                </div>
                <span class="text-xl font-bold text-white">BLACKSTONE</span>
              </div>
              <div class="flex space-x-8 text-gray-400">
                <a href="#" class="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
                <a href="#" class="hover:text-blue-400 transition-colors duration-300">Twitter</a>
                <a href="#" class="hover:text-blue-400 transition-colors duration-300">Contact</a>
              </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2025 Blackstone Consulting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Business",
    icon: "fas fa-briefcase",
  },
  {
    id: "creative-dark-artist",
    label: "Dark Creative Artist Portfolio",
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
    category: "Creative",
    icon: "fas fa-palette",
  },
  {
    id: "offers-black-friday",
    label: "Black Friday Mega Sale",
    content: `
      <div class="min-h-screen bg-black font-sans antialiased text-white relative overflow-hidden">
        <!-- Dark Matrix Background Effect -->
        <div class="fixed inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-black to-red-900/20"></div>
          <div class="absolute top-10 left-10 w-1 h-1 bg-purple-500 animate-ping"></div>
          <div class="absolute top-32 right-20 w-2 h-2 bg-red-500 animate-pulse"></div>
          <div class="absolute bottom-20 left-1/4 w-1 h-1 bg-pink-500 animate-bounce"></div>
          <div class="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 animate-ping animation-delay-1000"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/80 backdrop-blur-xl border-b border-purple-800/50">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-lg">⚫</span>
                </div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">BlackFriday</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-gray-300 font-semibold">
                <a href="#deals" class="hover:text-purple-400 transition-all duration-300 transform hover:scale-105">Mega Deals</a>
                <a href="#categories" class="hover:text-purple-400 transition-all duration-300 transform hover:scale-105">Categories</a>
                <a href="#exclusive" class="hover:text-purple-400 transition-all duration-300 transform hover:scale-105">Exclusive</a>
                <a href="#countdown" class="hover:text-purple-400 transition-all duration-300 transform hover:scale-105">Countdown</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="deals" class="relative py-20 text-center">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <div class="mb-8">
                <span class="inline-block bg-gradient-to-r from-purple-800 to-pink-800 text-white px-8 py-3 rounded-full text-lg font-black mb-8 animate-pulse border-2 border-purple-500 shadow-2xl shadow-purple-500/50">
                  🖤 BLACK FRIDAY MEGA SALE 🖤
                </span>
                <h2 class="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-pink-400 mb-6 leading-tight drop-shadow-2xl">
                  90% OFF
                </h2>
                <h3 class="text-4xl md:text-6xl font-bold text-gray-300 mb-8 animate-pulse">
                  Everything Must Go!
                </h3>
              </div>

              <!-- Dark Countdown Timer -->
              <div class="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-12">
                <div class="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-purple-500 shadow-lg shadow-purple-500/30">
                  <div class="text-4xl font-black text-purple-400 mb-2">00</div>
                  <div class="text-gray-400 text-sm font-bold">DAYS</div>
                </div>
                <div class="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-pink-500 shadow-lg shadow-pink-500/30">
                  <div class="text-4xl font-black text-pink-400 mb-2">23</div>
                  <div class="text-gray-400 text-sm font-bold">HOURS</div>
                </div>
                <div class="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-red-500 shadow-lg shadow-red-500/30">
                  <div class="text-4xl font-black text-red-400 mb-2">59</div>
                  <div class="text-gray-400 text-sm font-bold">MINS</div>
                </div>
                <div class="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-purple-500 shadow-lg shadow-purple-500/30">
                  <div class="text-4xl font-black text-purple-400 mb-2">30</div>
                  <div class="text-gray-400 text-sm font-bold">SECS</div>
                </div>
              </div>

              <button class="bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-600 hover:to-pink-600 text-white px-16 py-6 rounded-3xl font-black text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-purple-500/50 border border-purple-400">
                SHOP BLACK FRIDAY NOW
              </button>
            </div>
          </div>
        </section>

        <!-- Dark Deals Grid -->
        <section id="categories" class="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div class="container mx-auto px-4">
            <h3 class="text-5xl md:text-7xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Exclusive Black Friday Deals
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-gray-800 to-black p-8 rounded-3xl border border-purple-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-purple-500/30 relative overflow-hidden">
                <div class="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-black animate-pulse">
                  90% OFF
                </div>
                <div class="text-7xl mb-6 text-center">💻</div>
                <h4 class="text-3xl font-black text-purple-400 mb-4 text-center">Tech & Gadgets</h4>
                <p class="text-gray-300 text-center mb-6 leading-relaxed">Premium electronics at unprecedented prices</p>
                <div class="text-center">
                  <span class="text-gray-500 line-through text-xl">$2,999</span>
                  <span class="text-purple-400 text-4xl font-black ml-3">$299</span>
                </div>
              </div>

              <div class="bg-gradient-to-br from-gray-800 to-black p-8 rounded-3xl border border-pink-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-pink-500/30 relative overflow-hidden">
                <div class="absolute top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-black animate-pulse">
                  85% OFF
                </div>
                <div class="text-7xl mb-6 text-center">👑</div>
                <h4 class="text-3xl font-black text-pink-400 mb-4 text-center">Luxury Items</h4>
                <p class="text-gray-300 text-center mb-6 leading-relaxed">Designer brands at massive discounts</p>
                <div class="text-center">
                  <span class="text-gray-500 line-through text-xl">$1,499</span>
                  <span class="text-pink-400 text-4xl font-black ml-3">$224</span>
                </div>
              </div>

              <div class="bg-gradient-to-br from-gray-800 to-black p-8 rounded-3xl border border-red-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-red-500/30 relative overflow-hidden">
                <div class="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-black animate-pulse">
                  95% OFF
                </div>
                <div class="text-7xl mb-6 text-center">🏠</div>
                <h4 class="text-3xl font-black text-red-400 mb-4 text-center">Home Essentials</h4>
                <p class="text-gray-300 text-center mb-6 leading-relaxed">Transform your living space for less</p>
                <div class="text-center">
                  <span class="text-gray-500 line-through text-xl">$899</span>
                  <span class="text-red-400 text-4xl font-black ml-3">$44</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black border-t border-gray-800 py-12">
          <div class="container mx-auto px-4 text-center">
            <div class="flex items-center justify-center space-x-3 mb-6">
              <div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span class="text-white text-sm">⚫</span>
              </div>
              <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">BlackFriday</span>
            </div>
            <p class="text-gray-400">&copy; 2025 BlackFriday. The darkest deals of the year.</p>
          </div>
        </footer>
      </div>
    `,
    category: "Offers",
    icon: "fas fa-tag",
  },

  // PORTFOLIO TEMPLATES (2 templates)
  {
    id: "portfolio-creative-designer",
    label: "Creative Designer Portfolio",
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
    category: "Portfolio",
    icon: "fas fa-palette",
  },
  {
    id: "portfolio-dark-minimal",
    label: "Dark Minimal Portfolio",
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
    category: "Portfolio",
    icon: "fas fa-user",
  },

  {
    id: "portfolio-developer",
    label: "Developer Portfolio",
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
    category: "Portfolio",
    icon: "fas fa-code",
  },

  // FUTURISTIC TEMPLATES (2 templates)
  {
    id: "futuristic-tech-startup",
    label: "Futuristic Tech Startup",
    content: `
      <div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-cyan-900 dark:from-black dark:via-blue-900 dark:to-cyan-900 font-sans antialiased text-white overflow-hidden">
        <!-- Animated Tech Grid Background -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div class="absolute top-0 left-0 w-full h-full">
            <div class="grid grid-cols-20 grid-rows-20 w-full h-full">
              ${Array.from(
                { length: 400 },
                (_, i) =>
                  `<div class="border border-cyan-500/10 animate-pulse" style="animation-delay: ${
                    i * 10
                  }ms;"></div>`
              ).join("")}
            </div>
          </div>
        </div>

        <!-- Floating Tech Elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
          <div class="absolute top-1/3 right-24 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div class="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div class="absolute top-2/3 right-1/3 w-5 h-5 bg-cyan-300 rounded-full animate-ping animation-delay-1000"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/40 backdrop-blur-xl border-b border-cyan-500/30">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">⚡</span>
                </div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">NeuralTech</h1>
              </div>
              <div class="hidden md:flex space-x-8 text-cyan-200 font-semibold">
                <a href="#innovation" class="hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 hover:glow">Innovation</a>
                <a href="#solutions" class="hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 hover:glow">Solutions</a>
                <a href="#future" class="hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 hover:glow">Future</a>
                <a href="#connect" class="hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 hover:glow">Connect</a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="innovation" class="relative py-24 text-center">
          <div class="container mx-auto px-4">
            <div class="max-w-5xl mx-auto relative z-10">
              <div class="mb-8">
                <span class="inline-block bg-gradient-to-r from-cyan-900/80 to-blue-900/80 text-cyan-400 px-8 py-3 rounded-full text-sm font-bold mb-8 border border-cyan-500/50 backdrop-blur-lg">
                  ⚡ NEXT-GEN TECHNOLOGY
                </span>
                <h2 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6 leading-tight drop-shadow-2xl">
                  The Future
                  <br />Is Now
                </h2>
                <p class="text-xl md:text-2xl text-cyan-200 mb-12 leading-relaxed">
                  Revolutionary AI-powered solutions that transform businesses and redefine what's possible in the digital age.
                </p>
              </div>

              <div class="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                <button class="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/30">
                  Explore Solutions
                </button>
                <button class="border-2 border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Watch Demo
                </button>
              </div>

              <!-- Tech Stats Hologram Style */
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-6 rounded-2xl backdrop-blur-lg border border-cyan-500/30 transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div class="text-4xl font-black text-cyan-400 mb-2 animate-pulse">99.9%</div>
                  <div class="text-cyan-200 font-semibold">Uptime</div>
                </div>
                <div class="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 rounded-2xl backdrop-blur-lg border border-blue-500/30 transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div class="text-4xl font-black text-blue-400 mb-2 animate-pulse">1M+</div>
                  <div class="text-blue-200 font-semibold">Processes/sec</div>
                </div>
                <div class="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 p-6 rounded-2xl backdrop-blur-lg border border-purple-500/30 transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div class="text-4xl font-black text-purple-400 mb-2 animate-pulse">&lt;10ms</div>
                  <div class="text-purple-200 font-semibold">Latency</div>
                </div>
                <div class="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-6 rounded-2xl backdrop-blur-lg border border-cyan-500/30 transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div class="text-4xl font-black text-cyan-400 mb-2 animate-pulse">∞</div>
                  <div class="text-cyan-200 font-semibold">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Solutions Section -->
        <section id="solutions" class="py-20 bg-black/20 backdrop-blur-sm relative">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Revolutionary Solutions
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 rounded-3xl backdrop-blur-lg border border-cyan-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-3xl"></div>
                <div class="text-6xl mb-6 text-cyan-400">🧠</div>
                <h4 class="text-2xl font-black text-cyan-300 mb-4">Neural AI</h4>
                <p class="text-cyan-200 leading-relaxed">Advanced machine learning algorithms that adapt and evolve with your business needs, providing unprecedented insights.</p>
                <div class="mt-6 flex items-center text-cyan-400 font-semibold">
                  <span>Learn More</span>
                  <svg class="w-4 h-4 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

              <div class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-3xl backdrop-blur-lg border border-blue-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-3xl"></div>
                <div class="text-6xl mb-6 text-blue-400">🚀</div>
                <h4 class="text-2xl font-black text-blue-300 mb-4">Quantum Computing</h4>
                <p class="text-blue-200 leading-relaxed">Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers.</p>
                <div class="mt-6 flex items-center text-blue-400 font-semibold">
                  <span>Learn More</span>
                  <svg class="w-4 h-4 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

              <div class="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-3xl backdrop-blur-lg border border-purple-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-3xl"></div>
                <div class="text-6xl mb-6 text-purple-400">🌐</div>
                <h4 class="text-2xl font-black text-purple-300 mb-4">Metaverse Integration</h4>
                <p class="text-purple-200 leading-relaxed">Seamlessly connect your business to the metaverse with immersive experiences and virtual collaboration tools.</p>
                <div class="mt-6 flex items-center text-purple-400 font-semibold">
                  <span>Learn More</span>
                  <svg class="w-4 h-4 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black/60 backdrop-blur-xl border-t border-cyan-500/30 py-12">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="flex items-center space-x-3 mb-6 md:mb-0">
                <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span class="text-white text-sm">⚡</span>
                </div>
                <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">NeuralTech</span>
              </div>
              <p class="text-cyan-400">&copy; 2025 NeuralTech. Shaping tomorrow's technology today.</p>
            </div>
          </div>
        </footer>
      </div>

      <style>
        .hover\\:glow:hover {
          text-shadow: 0 0 10px currentColor;
        }
        .grid-cols-20 {
          grid-template-columns: repeat(20, minmax(0, 1fr));
        }
        .grid-rows-20 {
          grid-template-rows: repeat(20, minmax(0, 1fr));
        }
      </style>
    `,
    category: "Futuristic",
    icon: "fas fa-robot",
  },
  {
    id: "futuristic-neon-city",
    label: "Neon Cyberpunk City",
    content: `
      <div class="min-h-screen bg-black font-mono antialiased text-green-400 relative overflow-hidden">
        <!-- Cyberpunk Grid Background -->
        <div class="fixed inset-0 opacity-20">
          <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
        </div>

        <!-- Neon Floating Elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-10 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
          <div class="absolute top-1/4 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-400/50"></div>
          <div class="absolute bottom-1/3 left-1/4 w-6 h-6 bg-yellow-400 rounded-full animate-ping shadow-lg shadow-yellow-400/50"></div>
          <div class="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-black/90 backdrop-blur-xl border-b border-green-500/30 shadow-lg shadow-green-500/20">
          <div class="container mx-auto px-4 py-6">
            <nav class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30">
                  <span class="text-black font-bold text-lg">◉</span>
                </div>
                <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 tracking-wider">
                  NEON.CITY
                </h1>
              </div>
              <div class="hidden md:flex space-x-8 text-green-300 font-bold tracking-wider">
                <a href="#matrix" class="hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-110 border border-transparent hover:border-cyan-400/50 px-3 py-1 rounded">
                  MATRIX
                </a>
                <a href="#neural" class="hover:text-pink-400 hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 transform hover:scale-110 border border-transparent hover:border-pink-400/50 px-3 py-1 rounded">
                  NEURAL
                </a>
                <a href="#cyber" class="hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-110 border border-transparent hover:border-yellow-400/50 px-3 py-1 rounded">
                  CYBER
                </a>
                <a href="#void" class="hover:text-purple-400 hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300 transform hover:scale-110 border border-transparent hover:border-purple-400/50 px-3 py-1 rounded">
                  VOID
                </a>
              </div>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="matrix" class="relative py-24 text-center">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <div class="mb-12">
                <span class="inline-block bg-gradient-to-r from-green-800 to-cyan-800 text-green-300 px-8 py-3 rounded-full text-lg font-black mb-8 animate-pulse border border-green-500 shadow-lg shadow-green-500/30 tracking-wider">
                  ◉ ENTERING THE MATRIX ◉
                </span>
                <h2 class="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 mb-8 leading-tight tracking-tighter drop-shadow-2xl">
                  CYBER
                  <br />
                  FUTURE
                </h2>
                <p class="text-xl md:text-2xl text-green-300 mb-12 leading-relaxed font-bold tracking-wide">
                  Welcome to the digital realm where reality meets virtuality.
                  <br />Experience the future of human-machine interaction.
                </p>
              </div>

              <!-- Neon Stats Display -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div class="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-green-500 shadow-lg shadow-green-500/30 transform hover:scale-105 transition-all duration-300">
                  <div class="text-4xl font-black text-green-400 mb-2 animate-pulse">∞</div>
                  <div class="text-green-300 font-bold text-sm tracking-wider">NEURAL LINKS</div>
                </div>
                <div class="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-cyan-500 shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300">
                  <div class="text-4xl font-black text-cyan-400 mb-2 animate-pulse">2077</div>
                  <div class="text-cyan-300 font-bold text-sm tracking-wider">YEAR ACTIVE</div>
                </div>
                <div class="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-pink-500 shadow-lg shadow-pink-500/30 transform hover:scale-105 transition-all duration-300">
                  <div class="text-4xl font-black text-pink-400 mb-2 animate-pulse">99.9%</div>
                  <div class="text-pink-300 font-bold text-sm tracking-wider">UPTIME</div>
                </div>
                <div class="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-purple-500 shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300">
                  <div class="text-4xl font-black text-purple-400 mb-2 animate-pulse">MAX</div>
                  <div class="text-purple-300 font-bold text-sm tracking-wider">SECURITY</div>
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button class="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-black px-12 py-4 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-110 shadow-lg shadow-green-500/50 tracking-wider border border-green-400">
                  JACK IN NOW
                </button>
                <button class="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-12 py-4 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-110 shadow-lg shadow-green-500/30 tracking-wider">
                  EXPLORE MATRIX
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Neural Network Section -->
        <section id="neural" class="py-24 bg-gray-900/20 backdrop-blur-sm border-t border-green-500/20">
          <div class="container mx-auto px-4">
            <h3 class="text-5xl md:text-7xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 tracking-tighter">
              NEURAL NETWORKS
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-cyan-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-cyan-500/30 backdrop-blur-lg">
                <div class="text-7xl mb-6 text-center text-cyan-400">🧠</div>
                <h4 class="text-3xl font-black text-cyan-300 mb-4 text-center tracking-wider">AI CONSCIOUSNESS</h4>
                <p class="text-cyan-200 leading-relaxed text-center font-bold">Advanced artificial intelligence with human-like awareness and decision-making capabilities.</p>
              </div>

              <div class="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-pink-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-pink-500/30 backdrop-blur-lg">
                <div class="text-7xl mb-6 text-center text-pink-400">⚡</div>
                <h4 class="text-3xl font-black text-pink-300 mb-4 text-center tracking-wider">QUANTUM PROCESSING</h4>
                <p class="text-pink-200 leading-relaxed text-center font-bold">Lightning-fast quantum computations processing infinite data streams simultaneously.</p>
              </div>

              <div class="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-yellow-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-yellow-500/30 backdrop-blur-lg">
                <div class="text-7xl mb-6 text-center text-yellow-400">🔮</div>
                <h4 class="text-3xl font-black text-yellow-300 mb-4 text-center tracking-wider">REALITY SYNTHESIS</h4>
                <p class="text-yellow-200 leading-relaxed text-center font-bold">Creating immersive virtual worlds indistinguishable from physical reality.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Terminal Interface -->
        <section id="cyber" class="py-24">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <div class="bg-black border border-green-500 rounded-lg shadow-2xl shadow-green-500/30 overflow-hidden">
                <div class="bg-gray-900 px-6 py-3 border-b border-green-500 flex items-center space-x-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-green-400 font-bold ml-4 tracking-wider">TERMINAL v2077.0</span>
                </div>
                <div class="p-6 font-mono text-green-400">
                  <div class="mb-2">
                    <span class="text-cyan-400">user@neon-city:~$</span> 
                    <span class="animate-pulse">initialize_matrix()</span>
                  </div>
                  <div class="mb-2 text-green-300">
                    [INFO] Connecting to neural network...
                  </div>
                  <div class="mb-2 text-cyan-300">
                    [SUCCESS] Matrix connection established
                  </div>
                  <div class="mb-2 text-pink-300">
                    [STATUS] Reality layers: ∞
                  </div>
                  <div class="mb-4 text-yellow-300">
                    [READY] Welcome to the future
                  </div>
                  <div class="text-green-400">
                    <span class="text-cyan-400">user@neon-city:~$</span> 
                    <span class="animate-pulse">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black border-t border-green-500/30 py-12 shadow-lg shadow-green-500/10">
          <div class="container mx-auto px-4 text-center">
            <div class="flex items-center justify-center space-x-3 mb-6">
              <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30">
                <span class="text-black text-sm">◉</span>
              </div>
              <span class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 tracking-wider">NEON.CITY</span>
            </div>
            <p class="text-green-400 mb-4 font-bold tracking-wider">&copy; 2077 NEON.CITY - The future is now.</p>
            <div class="flex justify-center space-x-8 text-green-300 font-bold">
              <a href="#" class="hover:text-cyan-400 transition-colors duration-300 tracking-wider">NEURAL LINK</a>
              <a href="#" class="hover:text-pink-400 transition-colors duration-300 tracking-wider">QUANTUM NET</a>
              <a href="#" class="hover:text-yellow-400 transition-colors duration-300 tracking-wider">VOID SPACE</a>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Futuristic",
    icon: "fas fa-robot",
  },
];
