
const offerTemplates = [
  {
    id: "black-friday-neon",
    label: "Black Friday - Neon Theme",
    content: `
      <div class="bg-black font-bold antialiased text-white min-h-screen overflow-hidden">
        <!-- Neon Grid Background -->
        <div class="fixed inset-0 pointer-events-none">
          <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
          <div class="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
          <div class="absolute top-32 right-20 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
          <div class="absolute bottom-20 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
          <div class="absolute top-1/2 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-gradient-to-r from-purple-900 to-pink-900 border-b-2 border-cyan-400">
          <div class="container mx-auto px-4 py-6">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse">
                  <span class="text-black font-black text-xl">⚡</span>
                </div>
                <h1 class="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">CYBER DEALS</h1>
              </div>
              <nav class="hidden md:flex space-x-8 text-cyan-300 font-bold">
                <a href="#deals" class="hover:text-pink-400 transition-colors duration-300 border-b-2 border-transparent hover:border-pink-400">DEALS</a>
                <a href="#flash" class="hover:text-pink-400 transition-colors duration-300 border-b-2 border-transparent hover:border-pink-400">FLASH</a>
                <a href="#categories" class="hover:text-pink-400 transition-colors duration-300 border-b-2 border-transparent hover:border-pink-400">CATEGORIES</a>
              </nav>
            </div>
          </div>
        </header>

        <!-- Countdown Timer -->
        <div class="relative z-40 bg-gradient-to-r from-red-600 to-pink-600 py-4">
          <div class="container mx-auto px-4 text-center">
            <div class="text-white font-black text-lg md:text-xl mb-2">🔥 FLASH SALE ENDS IN 🔥</div>
            <div class="flex justify-center space-x-4 md:space-x-8">
              <div class="text-center">
                <div class="text-2xl md:text-4xl font-black text-yellow-300 bg-black px-3 py-2 rounded-lg border-2 border-cyan-400">23</div>
                <div class="text-xs md:text-sm text-cyan-300 mt-1">HOURS</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-4xl font-black text-yellow-300 bg-black px-3 py-2 rounded-lg border-2 border-cyan-400">45</div>
                <div class="text-xs md:text-sm text-cyan-300 mt-1">MINS</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-4xl font-black text-yellow-300 bg-black px-3 py-2 rounded-lg border-2 border-cyan-400">12</div>
                <div class="text-xs md:text-sm text-cyan-300 mt-1">SECS</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Section -->
        <section class="relative py-16 md:py-24">
          <div class="container mx-auto px-4 text-center">
            <div class="mb-12">
              <h2 class="text-5xl md:text-7xl lg:text-9xl font-black mb-6">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 animate-pulse">BLACK</span>
              </h2>
              <h3 class="text-4xl md:text-6xl lg:text-8xl font-black mb-6">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">FRIDAY</span>
              </h3>
              <div class="bg-gradient-to-r from-red-500 to-pink-500 inline-block px-8 py-4 rounded-2xl shadow-2xl border-2 border-yellow-400 animate-bounce">
                <p class="text-2xl md:text-3xl font-black text-white">UP TO 90% OFF!</p>
              </div>
            </div>

            <!-- Neon Buttons -->
            <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-16">
              <button class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-10 py-4 rounded-full text-black font-black text-lg transform hover:scale-110 transition-all duration-300 shadow-2xl border-2 border-cyan-300 hover:shadow-cyan-400/50">
                SHOP NOW
              </button>
              <button class="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 px-10 py-4 rounded-full text-white font-black text-lg transform hover:scale-110 transition-all duration-300 shadow-2xl border-2 border-pink-300 hover:shadow-pink-400/50">
                FLASH DEALS
              </button>
            </div>

            <!-- Floating Discount Tags -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 md:p-6 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 border-2 border-yellow-300">
                <div class="text-2xl md:text-3xl font-black text-black">80%</div>
                <div class="text-black font-bold text-sm md:text-base">OFF</div>
              </div>
              <div class="bg-gradient-to-br from-green-400 to-emerald-500 p-4 md:p-6 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 border-2 border-green-300">
                <div class="text-2xl md:text-3xl font-black text-black">70%</div>
                <div class="text-black font-bold text-sm md:text-base">OFF</div>
              </div>
              <div class="bg-gradient-to-br from-purple-400 to-pink-500 p-4 md:p-6 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 border-2 border-purple-300">
                <div class="text-2xl md:text-3xl font-black text-white">90%</div>
                <div class="text-white font-bold text-sm md:text-base">OFF</div>
              </div>
              <div class="bg-gradient-to-br from-red-400 to-rose-500 p-4 md:p-6 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 border-2 border-red-300">
                <div class="text-2xl md:text-3xl font-black text-white">FREE</div>
                <div class="text-white font-bold text-sm md:text-base">SHIP</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Deals -->
        <section id="deals" class="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl md:text-5xl font-black text-center mb-16">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">MEGA DEALS</span>
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-purple-800 to-pink-800 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400">
                <div class="text-6xl mb-4 text-center">💻</div>
                <h4 class="text-2xl font-black text-white mb-2 text-center">Gaming Laptops</h4>
                <div class="text-center mb-4">
                  <span class="text-3xl font-black text-red-400 line-through">$1999</span>
                  <span class="text-4xl font-black text-yellow-400 ml-2">$399</span>
                </div>
                <button class="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-black py-3 rounded-full hover:from-cyan-300 hover:to-blue-300 transition-all duration-300">
                  GRAB DEAL
                </button>
              </div>
              <div class="bg-gradient-to-br from-green-800 to-emerald-800 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-400">
                <div class="text-6xl mb-4 text-center">📱</div>
                <h4 class="text-2xl font-black text-white mb-2 text-center">Smartphones</h4>
                <div class="text-center mb-4">
                  <span class="text-3xl font-black text-red-400 line-through">$899</span>
                  <span class="text-4xl font-black text-yellow-400 ml-2">$199</span>
                </div>
                <button class="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black py-3 rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all duration-300">
                  GRAB DEAL
                </button>
              </div>
              <div class="bg-gradient-to-br from-blue-800 to-cyan-800 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-pink-400">
                <div class="text-6xl mb-4 text-center">🎧</div>
                <h4 class="text-2xl font-black text-white mb-2 text-center">Headphones</h4>
                <div class="text-center mb-4">
                  <span class="text-3xl font-black text-red-400 line-through">$299</span>
                  <span class="text-4xl font-black text-yellow-400 ml-2">$49</span>
                </div>
                <button class="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-black py-3 rounded-full hover:from-pink-300 hover:to-purple-300 transition-all duration-300">
                  GRAB DEAL
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gradient-to-r from-black to-gray-900 py-12 border-t-2 border-cyan-400">
          <div class="container mx-auto px-4 text-center">
            <div class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4">CYBER DEALS</div>
            <div class="text-gray-400 mb-6">© 2025 CyberDeals Inc. All rights reserved.</div>
            <div class="flex justify-center space-x-6">
              <div class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span class="text-black font-bold">f</span>
              </div>
              <div class="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span class="text-white font-bold">t</span>
              </div>
              <div class="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span class="text-black font-bold">ig</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `
  },
  {
    id: "summer-sale-bright",
    label: "Summer Sale - Bright Theme",
    content: `
      <div class="bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 font-sans antialiased text-gray-800 min-h-screen">
        <!-- Floating Summer Elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-20 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
          <div class="absolute top-40 right-32 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
          <div class="absolute bottom-32 left-1/3 w-5 h-5 bg-pink-400 rounded-full animate-ping"></div>
          <div class="absolute top-1/2 right-20 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
          <div class="absolute bottom-1/4 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-white shadow-xl">
          <div class="container mx-auto px-4 py-6">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-spin">
                  <span class="text-white font-black text-2xl">☀️</span>
                </div>
                <h1 class="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">SUMMER VIBES</h1>
              </div>
              <nav class="hidden md:flex space-x-8 text-orange-600 font-bold text-lg">
                <a href="#collections" class="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110">Collections</a>
                <a href="#bestsellers" class="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110">Bestsellers</a>
                <a href="#swimwear" class="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110">Swimwear</a>
                <a href="#accessories" class="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110">Accessories</a>
              </nav>
            </div>
          </div>
        </header>

        <!-- Promotional Banner -->
        <div class="relative z-40 bg-gradient-to-r from-pink-500 to-orange-500 py-4">
          <div class="container mx-auto px-4 text-center">
            <div class="text-white font-black text-xl md:text-2xl animate-pulse">🌴 FREE SHIPPING ON ORDERS OVER $50 🌴</div>
          </div>
        </div>

        <!-- Hero Section -->
        <section class="relative py-20 md:py-32">
          <div class="container mx-auto px-4 text-center">
            <div class="mb-16">
              <h2 class="text-6xl md:text-8xl lg:text-9xl font-black mb-6 animate-bounce">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500">SUMMER</span>
              </h2>
              <h3 class="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">SALE</span>
              </h3>
              <div class="bg-gradient-to-r from-orange-400 to-pink-400 inline-block px-12 py-6 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-300">
                <p class="text-3xl md:text-4xl font-black text-white">UP TO 75% OFF!</p>
              </div>
            </div>

            <!-- Summer Icons -->
            <div class="flex justify-center space-x-6 md:space-x-12 mb-16">
              <div class="text-6xl md:text-8xl animate-bounce">🏖️</div>
              <div class="text-6xl md:text-8xl animate-pulse">🌺</div>
              <div class="text-6xl md:text-8xl animate-bounce">🍹</div>
              <div class="text-6xl md:text-8xl animate-pulse">🕶️</div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-16">
              <button class="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 px-12 py-5 rounded-full text-white font-black text-xl transform hover:scale-110 transition-all duration-300 shadow-2xl">
                SHOP WOMEN
              </button>
              <button class="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300 px-12 py-5 rounded-full text-white font-black text-xl transform hover:scale-110 transition-all duration-300 shadow-2xl">
                SHOP MEN
              </button>
            </div>

            <!-- Summer Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div class="bg-white p-6 rounded-3xl shadow-xl transform hover:scale-105 hover:rotate-3 transition-all duration-300 border-4 border-yellow-300">
                <div class="text-4xl md:text-5xl font-black text-yellow-500 mb-2">50K+</div>
                <div class="text-gray-700 font-bold">Happy Customers</div>
              </div>
              <div class="bg-white p-6 rounded-3xl shadow-xl transform hover:scale-105 hover:rotate-3 transition-all duration-300 border-4 border-orange-300">
                <div class="text-4xl md:text-5xl font-black text-orange-500 mb-2">1000+</div>
                <div class="text-gray-700 font-bold">Products</div>
              </div>
              <div class="bg-white p-6 rounded-3xl shadow-xl transform hover:scale-105 hover:rotate-3 transition-all duration-300 border-4 border-pink-300">
                <div class="text-4xl md:text-5xl font-black text-pink-500 mb-2">24/7</div>
                <div class="text-gray-700 font-bold">Support</div>
              </div>
              <div class="bg-white p-6 rounded-3xl shadow-xl transform hover:scale-105 hover:rotate-3 transition-all duration-300 border-4 border-purple-300">
                <div class="text-4xl md:text-5xl font-black text-purple-500 mb-2">FREE</div>
                <div class="text-gray-700 font-bold">Returns</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Categories -->
        <section id="collections" class="py-20 bg-white">
          <div class="container mx-auto px-4">
            <h3 class="text-5xl md:text-6xl font-black text-center mb-16">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">HOT COLLECTIONS</span>
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-yellow-300 to-orange-300 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-8xl mb-6 text-center">👙</div>
                <h4 class="text-3xl font-black text-white mb-4 text-center">Swimwear</h4>
                <div class="text-center mb-6">
                  <span class="text-2xl font-black text-red-600 line-through">$89</span>
                  <span class="text-3xl font-black text-white ml-2">$29</span>
                </div>
                <button class="w-full bg-white text-orange-600 font-black py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  DIVE IN
                </button>
              </div>
              <div class="bg-gradient-to-br from-pink-300 to-purple-300 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-8xl mb-6 text-center">👕</div>
                <h4 class="text-3xl font-black text-white mb-4 text-center">Summer Tops</h4>
                <div class="text-center mb-6">
                  <span class="text-2xl font-black text-red-600 line-through">$49</span>
                  <span class="text-3xl font-black text-white ml-2">$19</span>
                </div>
                <button class="w-full bg-white text-pink-600 font-black py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  COOL DOWN
                </button>
              </div>
              <div class="bg-gradient-to-br from-blue-300 to-cyan-300 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div class="text-8xl mb-6 text-center">🩳</div>
                <h4 class="text-3xl font-black text-white mb-4 text-center">Beach Shorts</h4>
                <div class="text-center mb-6">
                  <span class="text-2xl font-black text-red-600 line-through">$39</span>
                  <span class="text-3xl font-black text-white ml-2">$15</span>
                </div>
                <button class="w-full bg-white text-blue-600 font-black py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  CATCH WAVES
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Newsletter -->
        <section class="py-20 bg-gradient-to-r from-orange-400 to-pink-400">
          <div class="container mx-auto px-4 text-center">
            <h3 class="text-4xl md:text-5xl font-black text-white mb-8">GET SUMMER UPDATES!</h3>
            <p class="text-xl text-white mb-8 max-w-2xl mx-auto">Be the first to know about new arrivals, exclusive deals, and summer fashion tips!</p>
            <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 max-w-xl mx-auto">
              <input type="email" placeholder="Enter your email..." class="px-6 py-4 rounded-full text-gray-800 font-semibold text-lg flex-1 w-full md:w-auto focus:outline-none focus:ring-4 focus:ring-white">
              <button class="bg-white text-pink-600 font-black px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 py-12">
          <div class="container mx-auto px-4 text-center">
            <div class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-4">SUMMER VIBES</div>
            <div class="text-gray-400 mb-6">© 2025 Summer Vibes Co. All rights reserved.</div>
            <div class="flex justify-center space-x-6">
              <div class="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span class="text-white font-bold text-lg">f</span>
              </div>
              <div class="w-14 h-14 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span class="text-white font-bold text-lg">ig</span>
              </div>
              <div class="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span class="text-white font-bold text-lg">t</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `
  }
];

export default offerTemplates;
