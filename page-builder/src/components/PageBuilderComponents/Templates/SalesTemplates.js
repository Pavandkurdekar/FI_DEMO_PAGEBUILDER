const salesTemplates = [
  {
    id: "summer-sale-bright",
        label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://img.freepik.com/free-vector/super-summer-sale-logo-banner-isolated_1308-61877.jpg" 
         alt="summer sale logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Summer Sale - Bright</div>
</div>`,
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
                <div class="text-8xl mb-6 text-center">🩳</div>
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
    `,
     category:"Sales Templates"
  },

    
  {
    id: "offers-flash-sale",
       label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://img.freepik.com/premium-vector/flash-sale_822782-131.jpg" 
         alt=" sale logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Flash Sale</div>
</div>`,
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
    category: "Sales Templates",

  },
 {
    id: "offers-black-friday",
          label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://img.freepik.com/free-vector/black-friday-concept-with-realistic-background_23-2148313940.jpg?semt=ais_hybrid&w=740" 
         alt="sale logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Black Friday2</div>
</div>`,
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
    category: "Sales Templates",
  },
 {
    id: "dark-black-friday-template",
       label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://images.seeklogo.com/logo-png/39/2/black-friday-logo-png_seeklogo-391218.png" 
         alt="sale logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Black Friday3</div>
</div>`,
    content: `
      <div class="bg-black font-bold antialiased text-white min-h-screen">
        <!-- Animated Background -->
        <div class="fixed inset-0 bg-gradient-to-br from-black via-red-900 to-black opacity-80 animate-pulse"></div>
        
        <!-- Header -->
        <header class="relative z-50 fixed w-full bg-black bg-opacity-90 backdrop-blur-md border-b border-red-500">
          <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 class="text-3xl font-black text-red-400 tracking-wider">MEGADEAL</h1>
            <div class="hidden md:flex space-x-6 text-sm font-semibold">
              <a href="#deals" class="text-white hover:text-red-400 transition-colors">DEALS</a>
              <a href="#categories" class="text-white hover:text-red-400 transition-colors">CATEGORIES</a>
              <a href="#timer" class="text-white hover:text-red-400 transition-colors">COUNTDOWN</a>
            </div>
            <button class="bg-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-500 transition-transform transform hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </header>

        <!-- Hero Section -->
        <section class="relative z-10 pt-32 pb-20 text-center">
          <div class="container mx-auto px-4">
            <h2 class="text-7xl md:text-9xl font-black text-red-500 mb-4 animate-bounce">
              BLACK FRIDAY
            </h2>
            <p class="text-4xl md:text-6xl font-black text-white mb-8 tracking-wider">
              UP TO <span class="text-red-400">80% OFF</span>
            </p>
            <div class="bg-red-600 inline-block px-8 py-4 rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300">
              <p class="text-2xl font-black">LIMITED TIME ONLY!</p>
            </div>
          </div>
        </section>

        <!-- Countdown Timer -->
        <section id="timer" class="relative z-10 py-16 bg-red-900 bg-opacity-50">
          <div class="container mx-auto px-4 text-center">
            <h3 class="text-4xl font-black mb-8 text-white">SALE ENDS IN:</h3>
            <div class="flex justify-center space-x-8">
              <div class="bg-black p-6 rounded-xl border-2 border-red-500">
                <div class="text-4xl font-black text-red-400">23</div>
                <div class="text-sm font-bold text-white">HOURS</div>
              </div>
              <div class="bg-black p-6 rounded-xl border-2 border-red-500">
                <div class="text-4xl font-black text-red-400">45</div>
                <div class="text-sm font-bold text-white">MINUTES</div>
              </div>
              <div class="bg-black p-6 rounded-xl border-2 border-red-500">
                <div class="text-4xl font-black text-red-400">12</div>
                <div class="text-sm font-bold text-white">SECONDS</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Deals -->
        <section id="deals" class="relative z-10 py-20">
          <div class="container mx-auto px-4">
            <h3 class="text-5xl font-black text-center mb-16 text-red-400">HOTTEST DEALS</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-red-900 to-black p-6 rounded-2xl border-2 border-red-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50">
                <div class="bg-red-600 text-black px-3 py-1 rounded-full text-sm font-black mb-4 inline-block">75% OFF</div>
                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop" alt="Product" class="w-full h-48 object-cover rounded-lg mb-4">
                <h4 class="text-2xl font-black text-white mb-2">Gaming Laptop</h4>
                <div class="flex items-center space-x-4 mb-4">
                  <span class="text-3xl font-black text-red-400">$499</span>
                  <span class="text-lg line-through text-gray-400">$1,999</span>
                </div>
                <button class="w-full bg-red-600 py-3 rounded-lg font-black hover:bg-red-500 transition-colors">
                  GRAB NOW!
                </button>
              </div>
              
              <div class="bg-gradient-to-br from-red-900 to-black p-6 rounded-2xl border-2 border-red-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50">
                <div class="bg-red-600 text-black px-3 py-1 rounded-full text-sm font-black mb-4 inline-block">60% OFF</div>
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" alt="Product" class="w-full h-48 object-cover rounded-lg mb-4">
                <h4 class="text-2xl font-black text-white mb-2">Wireless Headphones</h4>
                <div class="flex items-center space-x-4 mb-4">
                  <span class="text-3xl font-black text-red-400">$79</span>
                  <span class="text-lg line-through text-gray-400">$199</span>
                </div>
                <button class="w-full bg-red-600 py-3 rounded-lg font-black hover:bg-red-500 transition-colors">
                  GRAB NOW!
                </button>
              </div>
              
              <div class="bg-gradient-to-br from-red-900 to-black p-6 rounded-2xl border-2 border-red-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50">
                <div class="bg-red-600 text-black px-3 py-1 rounded-full text-sm font-black mb-4 inline-block">80% OFF</div>
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" alt="Product" class="w-full h-48 object-cover rounded-lg mb-4">
                <h4 class="text-2xl font-black text-white mb-2">Smart Watch</h4>
                <div class="flex items-center space-x-4 mb-4">
                  <span class="text-3xl font-black text-red-400">$99</span>
                  <span class="text-lg line-through text-gray-400">$499</span>
                </div>
                <button class="w-full bg-red-600 py-3 rounded-lg font-black hover:bg-red-500 transition-colors">
                  GRAB NOW!
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="relative z-10 bg-black border-t border-red-500 py-8">
          <div class="container mx-auto px-4 text-center">
            <p class="text-red-400 font-bold">&copy; 2025 MEGADEAL. All rights reserved.</p>
            <div class="mt-4 space-x-6">
              <a href="#" class="text-white hover:text-red-400 transition-colors font-semibold">Terms</a>
              <a href="#" class="text-white hover:text-red-400 transition-colors font-semibold">Privacy</a>
              <a href="#" class="text-white hover:text-red-400 transition-colors font-semibold">Support</a>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Sales Templates",
  },
  {
    id: "black-friday-neon",
       label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://www.shutterstock.com/image-vector/black-friday-day-discounts-mega-260nw-339552605.jpg" 
         alt="summer sale logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Black Friday1</div>
</div>`,
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
    `,
    category:"Sales Templates",
  },
]

export default salesTemplates;