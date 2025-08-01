const futuristicTemplates = [
  // FUTURISTIC TEMPLATES (2 templates)
  {
    id: "futuristic-tech-startup",
        label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://thumbs.dreamstime.com/b/abstract-geometric-logo-iridescent-prismatic-triangles-stylish-image-featuring-two-intersecting-creating-modern-futuristic-374330104.jpg" 
         alt="futuristic logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Neon Tech</div>
</div>`,
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
    category: "Futuristic Templates",
  },
  {
    id: "futuristic-neon-city",
         label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://thumbs.dreamstime.com/b/abstract-geometric-logo-iridescent-prismatic-triangles-stylish-image-featuring-two-intersecting-creating-modern-futuristic-374330104.jpg" 
         alt="futuristic logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Neon</div>
</div>`,
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
    category: "Futuristic Templates",

  },

  {
    id: "neon-cyberpunk-template",
         label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://thumbs.dreamstime.com/b/abstract-geometric-logo-iridescent-prismatic-triangles-stylish-image-featuring-two-intersecting-creating-modern-futuristic-374330104.jpg" 
         alt="futuristic logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Neon 2</div>
</div>`,
    content: `
      <div class="bg-black font-mono antialiased text-cyan-400 min-h-screen overflow-hidden">
        <!-- Matrix Background Effect -->
        <div class="fixed inset-0 opacity-20">
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 via-black to-blue-900"></div>
          <div class="absolute top-10 left-10 w-2 h-2 bg-cyan-400 animate-ping"></div>
          <div class="absolute top-32 right-20 w-1 h-1 bg-purple-400 animate-pulse"></div>
          <div class="absolute bottom-20 left-1/4 w-3 h-3 bg-pink-400 animate-bounce"></div>
        </div>

        <!-- Header -->
        <header class="relative z-50 border-b border-cyan-400 bg-black bg-opacity-80 backdrop-blur-sm">
          <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 border-2 border-cyan-400 bg-cyan-400 bg-opacity-20 animate-pulse"></div>
                <h1 class="text-2xl font-black text-cyan-400 tracking-widest">CYBER_NET</h1>
              </div>
              <nav class="hidden md:flex space-x-8 text-sm font-bold tracking-wider">
                <a href="#matrix" class="text-cyan-400 hover:text-pink-400 transition-colors border-b border-transparent hover:border-pink-400">MATRIX</a>
                <a href="#neural" class="text-cyan-400 hover:text-pink-400 transition-colors border-b border-transparent hover:border-pink-400">NEURAL</a>
                <a href="#data" class="text-cyan-400 hover:text-pink-400 transition-colors border-b border-transparent hover:border-pink-400">DATA</a>
                <a href="#connect" class="text-cyan-400 hover:text-pink-400 transition-colors border-b border-transparent hover:border-pink-400">CONNECT</a>
              </nav>
            </div>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="matrix" class="relative py-24 text-center">
          <div class="container mx-auto px-4">
            <div class="mb-12">
              <h2 class="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 animate-pulse">
                FUTURE_TECH
              </h2>
              <h3 class="text-2xl md:text-4xl font-bold text-cyan-300 mb-8 tracking-widest">
                NEURAL_INTERFACE_2090
              </h3>
            </div>
            <div class="border-2 border-cyan-400 bg-cyan-400 bg-opacity-10 inline-block px-8 py-4 transform hover:scale-105 transition-all duration-300">
              <p class="text-xl font-bold text-cyan-400 tracking-wider">JACK_IN_TO_THE_MATRIX</p>
            </div>
            <div class="mt-16 grid grid-cols-4 gap-8">
              <div class="border border-cyan-400 p-4 bg-cyan-400 bg-opacity-10 transform hover:rotate-45 transition-transform">
                <div class="text-4xl text-cyan-400">◆</div>
              </div>
              <div class="border border-purple-400 p-4 bg-purple-400 bg-opacity-10 transform hover:rotate-45 transition-transform">
                <div class="text-4xl text-purple-400">◇</div>
              </div>
              <div class="border border-pink-400 p-4 bg-pink-400 bg-opacity-10 transform hover:rotate-45 transition-transform">
                <div class="text-4xl text-pink-400">◈</div>
              </div>
              <div class="border border-blue-400 p-4 bg-blue-400 bg-opacity-10 transform hover:rotate-45 transition-transform">
                <div class="text-4xl text-blue-400">◉</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Neural Network Section -->
        <section id="neural" class="py-20 border-t border-cyan-400">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl font-black text-center mb-16 text-cyan-400 tracking-widest">NEURAL_MODULES</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="border-2 border-purple-400 bg-gradient-to-br from-purple-900 to-black p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/50">
                <div class="text-center">
                  <div class="w-16 h-16 border-2 border-purple-400 bg-purple-400 bg-opacity-20 mx-auto mb-6 animate-spin"></div>
                  <h4 class="text-2xl font-black text-purple-400 mb-4 tracking-wider">BRAIN_LINK</h4>
                  <p class="text-purple-300 mb-6 leading-relaxed">Direct neural interface for instant data processing and consciousness expansion</p>
                  <div class="border border-purple-400 px-4 py-2 text-purple-400 font-bold tracking-wider hover:bg-purple-400 hover:text-black transition-colors cursor-pointer">
                    INITIALIZE
                  </div>
                </div>
              </div>
              
              <div class="border-2 border-cyan-400 bg-gradient-to-br from-cyan-900 to-black p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50">
                <div class="text-center">
                  <div class="w-16 h-16 border-2 border-cyan-400 bg-cyan-400 bg-opacity-20 mx-auto mb-6 animate-pulse"></div>
                  <h4 class="text-2xl font-black text-cyan-400 mb-4 tracking-wider">DATA_STREAM</h4>
                  <p class="text-cyan-300 mb-6 leading-relaxed">Real-time information flow through quantum encrypted channels</p>
                  <div class="border border-cyan-400 px-4 py-2 text-cyan-400 font-bold tracking-wider hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer">
                    EXECUTE
                  </div>
                </div>
              </div>
              
              <div class="border-2 border-pink-400 bg-gradient-to-br from-pink-900 to-black p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-400/50">
                <div class="text-center">
                  <div class="w-16 h-16 border-2 border-pink-400 bg-pink-400 bg-opacity-20 mx-auto mb-6 animate-bounce"></div>
                  <h4 class="text-2xl font-black text-pink-400 mb-4 tracking-wider">GHOST_SHELL</h4>
                  <p class="text-pink-300 mb-6 leading-relaxed">Advanced cybernetic enhancement for enhanced human capabilities</p>
                  <div class="border border-pink-400 px-4 py-2 text-pink-400 font-bold tracking-wider hover:bg-pink-400 hover:text-black transition-colors cursor-pointer">
                    UPGRADE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Data Visualization Section -->
        <section id="data" class="py-20 border-t border-cyan-400">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl font-black text-center mb-16 text-cyan-400 tracking-widest">DATA_VISUALIZATION</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="border border-cyan-400 p-6 bg-cyan-400 bg-opacity-10 text-center">
                <div class="text-3xl font-black text-cyan-400 mb-2">99.7%</div>
                <div class="text-sm text-cyan-300 tracking-wider">SYSTEM_UPTIME</div>
              </div>
              <div class="border border-purple-400 p-6 bg-purple-400 bg-opacity-10 text-center">
                <div class="text-3xl font-black text-purple-400 mb-2">1.2TB</div>
                <div class="text-sm text-purple-300 tracking-wider">DATA_PROCESSED</div>
              </div>
              <div class="border border-pink-400 p-6 bg-pink-400 bg-opacity-10 text-center">
                <div class="text-3xl font-black text-pink-400 mb-2">847K</div>
                <div class="text-sm text-pink-300 tracking-wider">NEURAL_LINKS</div>
              </div>
              <div class="border border-blue-400 p-6 bg-blue-400 bg-opacity-10 text-center">
                <div class="text-3xl font-black text-blue-400 mb-2">∞</div>
                <div class="text-sm text-blue-300 tracking-wider">POSSIBILITIES</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Terminal Section -->
        <section id="connect" class="py-20 border-t border-cyan-400">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <div class="border-2 border-cyan-400 bg-black bg-opacity-90 p-8">
                <div class="flex items-center mb-4">
                  <div class="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <div class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <div class="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span class="text-cyan-400 font-bold tracking-wider">CYBER_TERMINAL_v2.0</span>
                </div>
                <div class="font-mono text-sm space-y-2">
                  <div class="text-cyan-400">$ connecting_to_neural_network...</div>
                  <div class="text-green-400">$ connection_established</div>
                  <div class="text-cyan-400">$ loading_consciousness_matrix...</div>
                  <div class="text-purple-400">$ reality.exe has stopped working</div>
                  <div class="text-pink-400">$ welcome_to_the_future_</div>
                  <div class="text-cyan-400 animate-pulse">$ |</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="border-t border-cyan-400 py-8 bg-black bg-opacity-90">
          <div class="container mx-auto px-4 text-center">
            <p class="text-cyan-400 font-bold tracking-wider">&copy; 2090 CYBER_NET. REALITY_NOT_INCLUDED.</p>
            <div class="mt-4 space-x-8">
              <a href="#" class="text-cyan-400 hover:text-pink-400 transition-colors font-bold tracking-wider">PRIVACY_PROTOCOL</a>
              <a href="#" class="text-cyan-400 hover:text-pink-400 transition-colors font-bold tracking-wider">NEURAL_TERMS</a>
              <a href="#" class="text-cyan-400 hover:text-pink-400 transition-colors font-bold tracking-wider">GHOST_SUPPORT</a>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Futuristic Templates",
  },
];

export default futuristicTemplates;
