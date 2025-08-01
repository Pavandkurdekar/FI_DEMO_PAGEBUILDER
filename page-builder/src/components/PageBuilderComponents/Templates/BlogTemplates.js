const blogTemplates = [
  {
    id: "earthy-blog-template",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://cdn-icons-png.flaticon.com/512/60/60736.png" 
         alt="Blog" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Dark Template</div>
</div>`,
    content: `
    <div class="bg-gray-900 font-serif antialiased text-amber-100">

      <!-- HEADER -->
      <header class="fixed w-full bg-gray-800 bg-opacity-80 backdrop-blur-lg shadow-lg z-50">
        <div class="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 class="text-3xl font-extrabold tracking-wide text-amber-300">Chronicle</h1>
        </div>
      </header>

      <!-- HERO SECTION -->
      <section id="hero" class="pt-36 pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div class="container mx-auto text-center text-amber-100">
          <h2 class="text-5xl md:text-6xl font-extrabold mb-4">The Art of Slow Living</h2>
          <p class="text-lg md:text-xl text-amber-300 mb-8 max-w-lg mx-auto">
            Embrace a lifestyle focused on mindfulness and tranquility, discovering beauty in the present moment.
          </p>
          <a href="#post1" class="inline-block px-8 py-4 bg-amber-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-amber-400 transition">Start Reading</a>
        </div>
      </section>

      <!-- BLOG POSTS -->
      <section id="blog-posts" class="py-24">
        <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Post 1 -->
          <div class="bg-gray-800 rounded-xl p-6 shadow-xl transition-transform transform hover:scale-105 hover:rotate-3">
            <img src="https://images.unsplash.com/photo-1612829532482-7301f3151f97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuZGxlJTIwaG9sZGVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="Candle Image" class="w-full rounded-md mb-4">
            <h3 class="text-2xl font-semibold text-amber-400 mb-2">Ending Your Inner Voice</h3>
            <p class="text-amber-300 mb-4">Learn to quiet your mind and embrace the beauty of silence in daily life.</p>
            <a href="#post1" class="text-amber-500 font-semibold">Read More</a>
          </div>
          <!-- Post 2 -->
          <div class="bg-gray-800 rounded-xl p-6 shadow-xl transition-transform transform hover:scale-105 hover:rotate-3">
            <img src="https://images.unsplash.com/photo-1612829532482-7301f3151f97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuZGxlJTIwaG9sZGVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="Candle Image" class="w-full rounded-md mb-4">
            <h3 class="text-2xl font-semibold text-amber-400 mb-2">Nature's Tranquil Moments</h3>
            <p class="text-amber-300 mb-4">Explore the calming power of nature and its ability to rejuvenate your spirit.</p>
            <a href="#post2" class="text-amber-500 font-semibold">Read More</a>
          </div>
          <!-- Post 3 -->
          <div class="bg-gray-800 rounded-xl p-6 shadow-xl transition-transform transform hover:scale-105 hover:rotate-3">
            <img src="https://images.unsplash.com/photo-1612829532482-7301f3151f97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuZGxlJTIwaG9sZGVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="Candle Image" class="w-full rounded-md mb-4">
            <h3 class="text-2xl font-semibold text-amber-400 mb-2">A Journey Through Time</h3>
            <p class="text-amber-300 mb-4">Experience the serene moments that define meaningful, slow-paced journeys.</p>
            <a href="#post3" class="text-amber-500 font-semibold">Read More</a>
          </div>
          <!-- Post 4 -->
          <div class="bg-gray-800 rounded-xl p-6 shadow-xl transition-transform transform hover:scale-105 hover:rotate-3">
            <img src="https://images.unsplash.com/photo-1612829532482-7301f3151f97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuZGxlJTIwaG9sZGVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="Candle Image" class="w-full rounded-md mb-4">
            <h3 class="text-2xl font-semibold text-amber-400 mb-2">The Light of Slow Living</h3>
            <p class="text-amber-300 mb-4">Uncover the gentle light of slow living and embrace a lifestyle of intentionality.</p>
            <a href="#post4" class="text-amber-500 font-semibold">Read More</a>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="bg-gray-800 py-8">
        <div class="container mx-auto text-center text-amber-300">
          <p>&copy; 2025 Chronicle. All rights reserved.</p>
          <div class="space-x-4">
            <a href="#" class="hover:text-amber-400 transition">Privacy Policy</a>
            <a href="#" class="hover:text-amber-400 transition">Terms & Conditions</a>
            <a href="#" class="hover:text-amber-400 transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  `,
    category: "Blog Templates",
  },
  {
    id: "blog-template",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://images.icon-icons.com/1826/PNG/512/4202125blogbloggerlogosocialsocialmedia-115692_115609.png" 
         alt="blog" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Blog Template</div>
</div>`,
    content: `
          <div class="bg-light font-sans">
              <!-- Header -->
         <header class="bg-red-500 text-white py-3 shadow-lg z-10 relative" style="position: sticky; top: 0; z-index: 9999;">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h3 font-weight-bold">My Blog</h1>
        <nav>
          <ul class="nav">
            <li class="nav-item"><a href="#home" class="nav-link text-white">Home</a></li>
            <li class="nav-item"><a href="#shop" class="nav-link text-white">About</a></li>
            <li class="nav-item"><a href="#cart" class="nav-link text-white">My Blog</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
        
           <!-- Hero Section -->
  <section id="home" class="py-5 bg-light">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Text -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h2 class="text-3xl md:text-5xl font-bold text-orange-600">Welcome to Sunny Blog</h2>
          <p class="text-lg mt-3 text-gray-600">Discover stories, tips, and insights that brighten your day. From lifestyle hacks to tech reviews, there’s something here for everyone!</p>
          <a href="#articles" class="btn bg-yellow-500 text-white mt-4 px-6 py-2 rounded-lg">Explore Articles</a>
        </div>
        <!-- Image -->
        <div class="w-full md:w-1/2 text-center mt-8 md:mt-0">
          <img src="https://us.123rf.com/450wm/puhhha/puhhha1811/puhhha181100261/112443543-travel-beautiful-woman-in-hat-watching-flying-hot-air-balloons-from-hill-female-in-ethnic-clothes.jpg?ver=6" alt="Welcome Image" class="w-full h-auto rounded-lg shadow-xl">
        </div>
      </div>
    </div>
  </section>
  
        
             <!-- Author Introduction -->
  <section id="about" class="py-5 bg-white">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Image -->
        <div class="w-full md:w-1/2 text-center">
          <img src="https://media.istockphoto.com/id/1478316046/photo/portrait-of-high-school-teacher-at-school-library.jpg?s=612x612&w=0&k=20&c=sSU4PQgVZXW6jiddn8YcB3s2F_Vge5RekkWBlMiUKuU=" alt="Author" class="w-full h-auto rounded-lg shadow-xl">
        </div>
        <!-- Text -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h3 class="text-3xl md:text-4xl font-bold text-orange-600">About the Author</h3>
          <p class="text-lg mt-3 text-gray-600">Hi, I’m a passionate writer who loves sharing stories and insights. Whether it’s a travel tale or a life lesson, my aim is to connect with readers and brighten their day.</p>
          <a href="#contact" class="btn bg-orange-600 text-white mt-4 px-6 py-2 rounded-lg">Get in Touch</a>
        </div>
      </div>
    </div>
  </section>
  
        
              <!-- Blog Posts Section -->
            <section id="articles" class="py-5 bg-light">
    <div class="container">
      <h3 class="fw-bold text-center text-orange-600 fs-2 mb-5">Latest Posts</h3>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card shadow border-0">
            <img src="https://as2.ftcdn.net/v2/jpg/05/95/65/89/1000_F_595658904_behad0UWzkFp898AhhELaZyV7cOAumld.jpg" class="card-img-top img-fluid rounded-top" alt="Post 1">
            <div class="card-body">
              <h5 class="card-title fw-bold text-orange-600">Post Title 1</h5>
              <p class="card-text text-muted fs-6">A quick summary of the blog post content to entice readers.</p>
              <a href="#" class="text-warning fw-bold text-decoration-none">Read More →</a>
            </div>
          </div>
        </div>
  
        <div class="col-md-4">
          <div class="card shadow border-0">
            <img src="https://media.istockphoto.com/id/1474040270/photo/sunlight-aglow-on-her-dress-happy-young-woman-stands-in-the-countryside-of-cappadocia-the.jpg?s=612x612&w=0&k=20&c=SwnH3EoesUIoGRElt1ouFElzxTt8K8TvxbiSUF89t80=" class="card-img-top img-fluid rounded-top" alt="Post 2">
            <div class="card-body">
              <h5 class="card-title fw-bold text-orange-600">Post Title 2</h5>
              <p class="card-text text-muted fs-6">A quick summary of the blog post content to entice readers.</p>
              <a href="#" class="text-warning fw-bold text-decoration-none">Read More →</a>
            </div>
          </div>
        </div>
  
        <div class="col-md-4">
          <div class="card shadow border-0">
            <img src="https://media.istockphoto.com/id/1499760492/photo/romantic-happy-traveling-couple-hugging-together-and-makes-wish-in-scenic-valley-in-anatolia.jpg?s=612x612&w=0&k=20&c=gRWE_OUZJsbcZNnGlNpcn73ENltMGDmijWSN0JTGPVI=" class="card-img-top img-fluid rounded-top" alt="Post 3">
            <div class="card-body">
              <h5 class="card-title fw-bold text-orange-600">Post Title 3</h5>
              <p class="card-text text-muted fs-6">A quick summary of the blog post content to entice readers.</p>
              <a href="#" class="text-warning fw-bold text-decoration-none">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
              <!-- Footer -->
              <footer class="bg-orange-600 text-white py-4">
                <div class="container text-center">
                  <p class="mb-0 fs-6">&copy; 2025 Sunny Blog. All rights reserved.</p>
                  <div class="mt-2">
                    <a href="#" class="text-white text-decoration-none mx-2">LinkedIn</a>
                    <a href="#" class="text-white text-decoration-none mx-2">Twitter</a>
                    <a href="#" class="text-white text-decoration-none mx-2">GitHub</a>
                  </div>
                </div>
              </footer>
            </div>
          `,
    category: "Blog Templates",
  },
];
export default blogTemplates;
