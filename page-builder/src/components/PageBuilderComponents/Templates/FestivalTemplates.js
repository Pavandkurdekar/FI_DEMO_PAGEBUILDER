const festivalTemplates = [
      {
    id: "diwali-celebration-template",
       label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://static.vecteezy.com/system/resources/previews/013/153/440/non_2x/happy-diwali-festival-of-lights-india-celebration-colorful-logo-template-graphic-banner-design-of-indian-flower-diya-oil-lamp-modern-design-in-vibrant-colors-isolated-on-white-background-vector.jpg" 
         alt="diwali logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Diwali Template</div>
</div>`,
    content: `
      <div class="bg-gradient-to-br from-orange-900 via-yellow-800 to-red-900 font-serif antialiased text-yellow-100 min-h-screen">
        <!-- Floating Diyas Animation -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          <div class="absolute top-32 right-20 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
          <div class="absolute bottom-20 left-1/4 w-5 h-5 bg-red-400 rounded-full animate-ping"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-gradient-to-r from-red-900 to-orange-900 shadow-2xl">
          <div class="container mx-auto px-4 py-6 flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
              <h1 class="text-3xl font-black text-yellow-300 tracking-wide">DIWALI DHAMAKA</h1>
            </div>
            <nav class="hidden md:flex space-x-8 text-yellow-200 font-semibold">
              <a href="#celebration" class="hover:text-yellow-400 transition-colors">Celebration</a>
              <a href="#offers" class="hover:text-yellow-400 transition-colors">Offers</a>
              <a href="#rangoli" class="hover:text-yellow-400 transition-colors">Rangoli</a>
              <a href="#wishes" class="hover:text-yellow-400 transition-colors">Wishes</a>
            </nav>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="celebration" class="relative py-24 text-center">
          <div class="container mx-auto px-4">
            <div class="mb-8">
              <h2 class="text-6xl md:text-8xl font-black text-yellow-300 mb-4 drop-shadow-2xl">
                शुभ दीपावली
              </h2>
              <h3 class="text-4xl md:text-6xl font-bold text-orange-300 mb-6">
                Happy Diwali 2025
              </h3>
            </div>
            <div class="bg-gradient-to-r from-yellow-600 to-orange-600 inline-block px-8 py-4 rounded-2xl shadow-2xl">
              <p class="text-2xl font-bold text-white">Festival of Lights & Joy</p>
            </div>
            <div class="mt-12 flex justify-center space-x-4">
              <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce">
                <div class="w-8 h-8 bg-orange-600 rounded-full"></div>
              </div>
              <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-bounce animation-delay-100">
                <div class="w-8 h-8 bg-red-600 rounded-full"></div>
              </div>
              <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-bounce animation-delay-200">
                <div class="w-8 h-8 bg-yellow-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- Special Offers Section -->
        <section id="offers" class="py-20 bg-gradient-to-r from-red-800 to-orange-800">
          <div class="container mx-auto px-4">
            <h3 class="text-5xl font-black text-center mb-16 text-yellow-300">दीवाली धमाका ऑफर्स</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-gradient-to-br from-yellow-600 to-orange-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-400">
                <div class="text-center">
                  <div class="text-6xl mb-4">🪔</div>
                  <h4 class="text-2xl font-black text-white mb-4">Traditional Diyas</h4>
                  <div class="bg-red-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-4">50% OFF</div>
                  <p class="text-yellow-100 mb-6">Handcrafted clay diyas to illuminate your home with divine light</p>
                  <button class="w-full bg-white text-orange-600 py-3 rounded-xl font-black hover:bg-yellow-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-red-600 to-pink-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-pink-400">
                <div class="text-center">
                  <div class="text-6xl mb-4">🎆</div>
                  <h4 class="text-2xl font-black text-white mb-4">Fireworks Collection</h4>
                  <div class="bg-yellow-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-4">40% OFF</div>
                  <p class="text-pink-100 mb-6">Safe and spectacular fireworks for a memorable celebration</p>
                  <button class="w-full bg-white text-red-600 py-3 rounded-xl font-black hover:bg-yellow-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-purple-400">
                <div class="text-center">
                  <div class="text-6xl mb-4">🍬</div>
                  <h4 class="text-2xl font-black text-white mb-4">Festive Sweets</h4>
                  <div class="bg-orange-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-4">30% OFF</div>
                  <p class="text-purple-100 mb-6">Premium quality mithai boxes for gifting and celebration</p>
                  <button class="w-full bg-white text-purple-600 py-3 rounded-xl font-black hover:bg-yellow-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Rangoli Pattern Section -->
        <section id="rangoli" class="py-20">
          <div class="container mx-auto px-4 text-center">
            <h3 class="text-4xl font-black text-yellow-300 mb-12">Digital Rangoli Gallery</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-gradient-to-br from-red-500 to-orange-500 aspect-square rounded-2xl flex items-center justify-center text-4xl transform hover:rotate-12 transition-transform">
                🌺
              </div>
              <div class="bg-gradient-to-br from-yellow-500 to-red-500 aspect-square rounded-2xl flex items-center justify-center text-4xl transform hover:rotate-12 transition-transform">
                🪷
              </div>
              <div class="bg-gradient-to-br from-orange-500 to-pink-500 aspect-square rounded-2xl flex items-center justify-center text-4xl transform hover:rotate-12 transition-transform">
                ✨
              </div>
              <div class="bg-gradient-to-br from-pink-500 to-purple-500 aspect-square rounded-2xl flex items-center justify-center text-4xl transform hover:rotate-12 transition-transform">
                🕉️
              </div>
            </div>
          </div>
        </section>

        <!-- Wishes Section -->
        <section id="wishes" class="py-20 bg-gradient-to-r from-yellow-800 to-orange-800">
          <div class="container mx-auto px-4 text-center">
            <div class="bg-gradient-to-br from-red-600 to-orange-600 p-12 rounded-3xl shadow-2xl border-4 border-yellow-400">
              <h3 class="text-4xl font-black text-yellow-200 mb-8">Diwali Wishes</h3>
              <p class="text-2xl text-yellow-100 mb-6 font-semibold leading-relaxed">
                "May the divine light of Diwali bring peace, prosperity, happiness and good health to your life. 
                May this festival of lights illuminate your path to success and joy!"
              </p>
              <div class="text-6xl mb-4">🪔✨🎆</div>
              <button class="bg-yellow-500 text-orange-900 px-8 py-4 rounded-2xl font-black text-xl hover:bg-yellow-400 transition-colors">
                Share Wishes
              </button>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gradient-to-r from-red-900 to-orange-900 py-8">
          <div class="container mx-auto px-4 text-center">
            <p class="text-yellow-300 font-bold text-lg">&copy; 2025 Diwali Celebrations. Wishing you joy and prosperity!</p>
            <div class="mt-4 space-x-6">
              <a href="#" class="text-yellow-200 hover:text-yellow-400 transition-colors font-semibold">Traditions</a>
              <a href="#" class="text-yellow-200 hover:text-yellow-400 transition-colors font-semibold">Recipes</a>
              <a href="#" class="text-yellow-200 hover:text-yellow-400 transition-colors font-semibold">Stories</a>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Festival Templates",
  },
]

export default festivalTemplates;