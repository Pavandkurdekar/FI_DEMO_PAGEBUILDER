const templates = [
  {
    id: "ecommerce-template",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://cdn.dribbble.com/userupload/17039933/file/original-dbbc84c08bd6b4b49fc97827fa5be468.jpg?resize=752x&vertical=center" 
         alt="ecommerce logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Ecommerce Template</div>
</div>`,
    content: `
           <div class="bg-light font-sans">
    <!-- Header -->
    <header class="bg-danger text-white py-3 shadow-lg" style="position: sticky; top: 0; z-index: 9999;">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h3 font-weight-bold">ShopEasy</h1>
        <nav>
          <ul class="nav">
            <li class="nav-item"><a href="#home" class="nav-link text-white">Home</a></li>
            <li class="nav-item"><a href="#shop" class="nav-link text-white">Shop</a></li>
            <li class="nav-item"><a href="#cart" class="nav-link text-white">Cart</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  
    <!-- Hero Section -->
    <section id="home" class="py-5 bg-light">
      <div class="container d-flex flex-column flex-md-row align-items-center">
        <div class="text-center text-md-start">
          <h2 class="display-4 font-weight-bold">Welcome to ShopEasy</h2>
          <p class="lead text-muted">Your one-stop shop for all things awesome. Explore our exclusive deals, limited-time offers, and a wide range of products that fit your lifestyle.</p>
          <a href="#shop" class="btn btn-danger btn-lg mt-3">Shop Now</a>
        </div>
        <div class="mt-4 mt-md-0 text-center">
          <img src="https://img.freepik.com/premium-photo/strong-red-black-ecommerce-image_950002-185205.jpg" alt="Shop Banner" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
  
    <!-- Categories Section -->
  <section class="py-5 bg-white">
    <div class="container text-center">
      <h3 class="h2 font-weight-bold mb-4">Shop by Categories</h3>
      <div class="row">
        <div class="col-6 col-md-3 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://t3.ftcdn.net/jpg/05/49/64/72/360_F_549647295_5AAhVVZV6DAcyejzZ8OwfaNnwWOtOR42.jpg" alt="Category 1" class="card-img-top rounded-top" style="object-fit: cover; height: 300px;">
            <div class="card-body">
              <p class="card-title font-weight-bold">Electronics</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://media.istockphoto.com/id/1033726722/photo/full-length-full-size-vertical-view-of-jumping-and-wondered-brunette-woman-dressed-in.jpg?s=612x612&w=0&k=20&c=geEFxXEcJJ1omd6z-YLFnQ2mvP3mLO6fW2EjqikSnCo=" alt="Category 2" class="card-img-top rounded-top" style="object-fit: cover; height: 300px;">
            <div class="card-body">
              <p class="card-title font-weight-bold">Clothing</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://i.pinimg.com/originals/90/dd/d1/90ddd1e0dd6ea50ce1fee1b0f8d4ed56.png" alt="Category 3" class="card-img-top rounded-top" style="object-fit: cover; height: 300px;">
            <div class="card-body">
              <p class="card-title font-weight-bold">Home & Kitchen</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://img.pikbest.com/ai/illus_our/20230428/e8c7097aa11032059ebf57f5f6799b03.jpg!bw700" alt="Category 4" class="card-img-top rounded-top" style="object-fit: cover; height: 300px;">
            <div class="card-body">
              <p class="card-title font-weight-bold">Accessories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
    <!-- Featured Products Section -->
  <section id="shop" class="py-5 bg-light">
    <div class="container text-center">
      <h3 class="h2 font-weight-bold mb-4">Featured Products</h3>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://rsanimesh.github.io/images/category-1.jpg" alt="Product 1" class="card-img-top rounded-top" style="object-fit: cover; height: 250px;">
            <div class="card-body">
              <h4 class="card-title font-weight-bold">Product Title 1</h4>
              <p class="card-text text-muted">High-quality product with exceptional features and benefits.</p>
              <p class="font-weight-bold h5">$49.99</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://www.apple.com/newsroom/images/values/community-outreach/apple_world-aids-day-2020_hero_12012020_big.jpg.large.jpg" alt="Product 2" class="card-img-top rounded-top" style="object-fit: cover; height: 250px;">
            <div class="card-body">
              <h4 class="card-title font-weight-bold">Product Title 2</h4>
              <p class="card-text text-muted">Durable and stylish—perfect for everyday use.</p>
              <p class="font-weight-bold h5">$29.99</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card shadow border-0 h-100">
            <img src="https://t4.ftcdn.net/jpg/06/54/24/25/360_F_654242560_plRsrd1LqSLdJFMovMBuCf6YwlU3SXHw.jpg" alt="Product 3" class="card-img-top rounded-top" style="object-fit: cover; height: 250px;">
            <div class="card-body">
              <h4 class="card-title font-weight-bold">Product Title 3</h4>
              <p class="card-text text-muted">Get the latest trends with this top-rated item.</p>
              <p class="font-weight-bold h5">$99.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
    <!-- Newsletter Signup Section -->
    <section class="py-5 bg-white">
      <div class="container text-center">
        <h3 class="h2 font-weight-bold">Stay Updated</h3>
        <p class="lead text-muted">Subscribe to our newsletter and be the first to know about new arrivals and exclusive deals.</p>
        <form class="d-flex justify-content-center mt-4">
          <button type="submit" class="btn btn-danger">Subscribe</button>
        </form>
      </div>
    </section>
  
    <!-- Footer -->
    <footer class="bg-danger text-white py-4">
      <div class="container text-center">
        <p>&copy; 2025 ShopEasy. All rights reserved.</p>
        <div>
          <a href="#" class="text-white mx-2">Privacy Policy</a>
          <a href="#" class="text-white mx-2">Terms of Service</a>
          <a href="#" class="text-white mx-2">Contact</a>
        </div>
      </div>
    </footer>
  </div>
  
          `,
    category: "Templates",
  },
  {
    id: "business-2",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://www.c3onlinemarketing.com/wp-content/uploads/2021/11/preview.jpg" 
         alt="futuristic logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Business2</div>
</div>`,
    content: `<section>
  <header class="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white position-relative" style="background: url('https://media.istockphoto.com/id/1449364000/photo/minimalist-style-tiny-room.jpg?s=612x612&w=0&k=20&c=uokTOpJl8Hoc4HGqJPicYjy8SBMwCEWkGLUhhvJYgTA=') no-repeat center center/cover;">
    <div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0, 0, 0, 0.5);"></div>
    <div class="container position-relative z-index-2">
      <h1 class="display-4 fw-bold mb-2">Your Home, Your Terms</h1>
      <h2 class="display-4 fw-bold mb-3">Start the Selling Journey!</h2>
      <div class="d-flex justify-content-center align-items-center mb-3">
        <span class="fs-6 fw-bold">Strength of the company</span>
      </div>
      <p class="fs-5 mb-4" style="max-width: 600px; margin: 0 auto;">
        We understand that selling your home is a significant milestone, and we're here to guide you every step of the way.<br>
        Trust us to handle the details while you focus on your next adventure.
      </p>
      <a href="#get-started" class="btn btn-lg fw-bold" style="background-color: white; color: #FF7F50; border: 2px solid #FF7F50; border-radius: 50px; transition: background-color 0.3s ease, color 0.3s ease;">
        Get Started ➞
      </a>
    </div>
  </header>
</section>



<section class="bg-light py-5">
  <div class="container">
    <div class="row g-4 align-items-center">

      <!-- Left Column -->
      <div class="col-md-4 d-flex flex-column gap-4">
        <div class="card text-center shadow-sm p-4">
          <div class="text-primary fs-1 mb-3">
            <i class="fas fa-tasks"></i>
          </div>
          <h3 class="fs-5 fw-bold text-dark mb-2">Personalized Strategies</h3>
          <p class="text-secondary mb-0">
            Tailored marketing plans designed to showcase your home's unique features to attract the right buyers.
          </p>
        </div>

        <div class="card text-center shadow-sm p-4">
          <div class="text-primary fs-1 mb-3">
            <i class="fas fa-clock"></i>
          </div>
          <h3 class="fs-5 fw-bold text-dark mb-2">Professional Staging</h3>
          <p class="text-secondary mb-0">
            Our team can assist with professional home staging and photography to make your property look its best.
          </p>
        </div>
      </div>

      <!-- Center Image -->
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <div class="bg-white shadow-sm rounded overflow-hidden w-100" style="max-width: 300px; height: 300px;">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-home-house-main-page-building-address-location-1-2618.png" alt="House" class="img-fluid w-100 h-100 object-fit-cover">
        </div>
      </div>

      <!-- Right Column -->
      <div class="col-md-4 d-flex flex-column gap-4">
        <div class="card text-center shadow-sm p-4">
          <div class="text-primary fs-1 mb-3">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3 class="fs-5 fw-bold text-dark mb-2">Expert Pricing Analysis</h3>
          <p class="text-secondary mb-0">
            Access to comprehensive market data and our expert analysis to set a competitive and accurate price.
          </p>
        </div>

        <div class="card text-center shadow-sm p-4">
          <div class="text-primary fs-1 mb-3">
            <i class="fas fa-handshake"></i>
          </div>
          <h3 class="fs-5 fw-bold text-dark mb-2">Negotiation Support</h3>
          <p class="text-secondary mb-0">
            Skilled negotiators who work on your behalf to secure the best deal and a seamless closing process.
          </p>
        </div>
      </div>

    </div>
  </div>

  <div class="container mt-5 p-5 rounded shadow" style="background-color: rgba(239, 115, 1, 0.9);">
    <h2 class="text-center text-white mb-4 fs-1">Selling Your Home Securely</h2>
    <p class="fs-5 text-center text-white mb-3">
      Selling your home is not just a transaction; it's a life-changing decision. With our expert team, trusted processes, and innovative tools, you can rest assured that every detail is handled with precision.
    </p>
    <p class="fs-5 text-center text-white mb-0">
      Our mission is to redefine home selling with a focus on professionalism, trust, and results. Your dream deserves nothing less than the best.
    </p>
  </div>

</section>

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">




<section class="py-5 bg-white">
  <div class="container d-flex flex-column align-items-center text-center">
    <!-- Why Choose Us Section -->
    <div class="row mb-5">
      <div class="col-md-6 text-md-end">
        <h2 class="display-5 fw-bold">Why Choose<br> us for your<br> Home?</h2>
      </div>
      <div class="col-md-6">
        <p class="fs-5">
          With a proven track record of successful home sales, local market expertise, and a commitment to personalized service, we are your trusted partner in achieving a smooth and profitable home sale.
        </p>
      </div>
    </div>

    <!-- Property Features Section -->
    <div class="row g-4">
      <!-- Feature Card 1 -->
      <div class="col-md-4">
        <div class="card text-center shadow-sm h-100" style="background-color: #f0f7ff;">
          <div class="card-body p-5">
            <div class="fs-1 text-primary mb-4">
              <i class="fas fa-bullseye" style="color: #003366;"></i>
            </div>
            <h3 class="fs-5 fw-bold">Luxury Properties</h3>
            <p class="fs-6 text-secondary mt-3" style="color: #666;">
              We excel in marketing and selling high-end homes, offering a premium experience to both sellers and buyers.
            </p>
          </div>
        </div>
      </div>

      <!-- Feature Card 2 -->
      <div class="col-md-4">
        <div class="card text-center shadow-sm h-100" style="background-color: #f5fff0;">
          <div class="card-body p-5">
            <div class="fs-1 text-primary mb-4">
              <i class="fas fa-snowflake" style="color: #003366;"></i>
            </div>
            <h3 class="fs-5 fw-bold">Historic Homes</h3>
            <p class="fs-6 text-secondary mt-3" style="color: #666;">
              We specialize in historic and architecturally unique properties, recognizing their exceptional value and appeal.
            </p>
          </div>
        </div>
      </div>

      <!-- Feature Card 3 -->
      <div class="col-md-4">
        <div class="card text-center shadow-sm h-100" style="background-color: #fff5f5;">
          <div class="card-body p-5">
            <div class="fs-1 text-primary mb-4">
              <i class="fas fa-star" style="color: #003366;"></i>
            </div>
            <h3 class="fs-5 fw-bold">Local Market Mastery</h3>
            <p class="fs-6 text-secondary mt-3" style="color: #666;">
              Our specialization extends to a deep knowledge of local neighborhoods and communities to make properties stand out.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">



<section class="py-5" style="background-color: #ff7f00; font-family: 'Arial', sans-serif;">
  <div class="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
    <!-- Left Image Section -->
    <div class="col-md-6">
      <img src="https://media.istockphoto.com/id/1460124878/photo/social-media-connection-and-woman-typing-on-a-phone-for-communication-app-and-chat-web-search.jpg?s=612x612&w=0&k=20&c=fJvxm6AuV1B0RkSKPx9BOuy-JQTevt1Ah0kySJ_GeRY=" alt="Customer Support" class="img-fluid rounded">
    </div>

    <!-- Right Content Section -->
    <div class="col-md-6 text-white">
      <h2 class="fw-bold mb-4">Start Selling Today!</h2>
      <p class="fst-italic mb-4">
        Join us now and take the first step toward growing your business. Discover how easy it is to connect with customers 
        and boost your sales! Our platform provides cutting-edge tools to manage your inventory, process orders seamlessly, 
        and engage with your audience like never before. Whether you’re a small startup or an established business, 
        we’re here to help you succeed. With our support, you can stay ahead of the competition, adapt to changing market trends, 
        and maximize your profits. Don’t wait—make your business dreams a reality today!
      </p>
      <form>

        <a href="#" class="btn btn-light text-warning fw-bold px-4">Get Started</a>
      </form>
    </div>
  </div>
</section>
`,
    category: "Templates",
  },
  {
    id: "thanks-giving-1",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://i.pinimg.com/736x/5a/73/7e/5a737e5c14faeb54d1d60fc5999d0197.jpg" 
         alt="futuristic logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Thanks Giving 1</div>
</div>`,
    content: `<section class="vh-100 d-flex flex-column align-items-center justify-content-center text-white text-center" style="background-image: url('https://sb.kaleidousercontent.com/67418/1920x1100/2ed9107761/bg.png'); background-size: cover; background-position: center; font-family: 'Georgia', serif;">
  <div class="container">
    <h3 class="fs-4 mb-3">Feast on Fantastic Deals</h3>
    <h1 class="display-1 fw-bold mb-4">Thanks Giving</h1>
    <hr class="mx-auto my-4" style="width: 50%; border: 1px solid white;">
    <h2 class="fs-2 fw-light mb-4">Savings Bonanza!</h2>
    <a href="#" class="btn btn-light text-warning fw-bold px-4 py-3" style="font-size: 20px;">Get Started Now</a>
  </div>
</section>

<section style="margin: 0; padding: 40px 20px; font-family: 'Georgia', serif; background-color: #fde4e4;">
<!-- Section Title -->
<div style="text-align: center; margin-bottom: 40px;">
    <h2 style="font-size: 36px; color: black;">Handpicked Thanksgiving specials crafted just for you!</h2>
</div>

<!-- Cards Section -->
<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    <!-- Card 1 -->
    <div style="background-color: white; border-radius: 10px; padding: 20px; width: 300px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1osdfoljjyQP-xo4UEA0yMMKxFaQ4xFUAng&s" alt="Gaming Gadgets" style="width: 100%; border-radius: 8px; height: 200px; object-fit: cover;">
        <h3 style="margin-top: 15px; font-size: 22px; color: black;">Gaming Gadgets</h3>
        <p style="font-size: 16px; color: black;">
            Immerse yourself in the gaming world with the latest consoles, controllers, VR gear, gaming headsets, and powerful graphics cards.
        </p>
    </div>

    <!-- Card 2 -->
    <div style="background-color: white; border-radius: 10px; padding: 20px; width: 300px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" alt="Audio and Entertainment" style="width: 100%; border-radius: 8px; height: 200px; object-fit: cover;">
        <h3 style="margin-top: 15px; font-size: 22px; color: black;">Audio and Entertainment</h3>
        <p style="font-size: 16px; color: black;">
            Immerse yourself in superior sound quality with wireless speakers, headphones, and earbuds.
        </p>
    </div>

    <!-- Card 3 -->
    <div style="background-color: white; border-radius: 10px; padding: 20px; width: 300px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
        <img src="data:image/jpeg;base64,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" alt="Cameras and Photography" style="width: 100%; border-radius: 8px; height: 200px; object-fit: cover;">
        <h3 style="margin-top: 15px; font-size: 22px; color: black;">Cameras and Photography</h3>
        <p style="font-size: 16px; color: black;">
            Capture every moment with digital cameras, action cameras, and camera accessories like lenses, tripods, and bags.
        </p>
    </div>
</div>
</section>

<section style="padding: 40px 20px; background-color: white; font-family: 'Georgia', serif;">
<!-- Section Title -->
<div style="text-align: center; margin-bottom: 40px;">
    <h2 style="font-size: 36px; color: black;">Premium plans just for your family!</h2>
</div>

<!-- Cards Container -->
<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    <!-- Card 1 -->
    <div style="background-color: #ff9900; color: white; padding: 30px; width: 300px; text-align: center; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <h3 style="font-size: 24px; margin-bottom: 10px;">Essential Shopper</h3>
        <div style="font-size: 48px; font-weight: bold; margin: 10px 0;">$99</div>
        <p style="font-size: 16px; margin-bottom: 20px;">
            Dive into the world of online shopping with our essential shopper plan. Enjoy unlimited access to a variety of products with no listing restrictions.
        </p>
        <button style="background-color: white; color: #ff9900; padding: 12px 30px; border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background-color 0.3s;">
            Purchase
        </button>
    </div>

    <!-- Card 2 -->
    <div style="background-color: #ff9900; color: white; padding: 30px; width: 300px; text-align: center; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <h3 style="font-size: 24px; margin-bottom: 10px;">Pro Fashionista</h3>
        <div style="font-size: 48px; font-weight: bold; margin: 10px 0;">$199</div>
        <p style="font-size: 16px; margin-bottom: 20px;">
            Elevate your style game with the pro fashionista plan. Unlock advanced analytics to stay on top of the latest trends.
        </p>
        <button style="background-color: white; color: #ff9900; padding: 12px 30px; border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background-color 0.3s;">
            Purchase
        </button>
    </div>
</div>
</section>`,
    category: "Templates",
    icon: "",
  },

  {
    id: "thanksgiving-warmth-template",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://i.pinimg.com/736x/5a/73/7e/5a737e5c14faeb54d1d60fc5999d0197.jpg" 
         alt="thanks logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Thanks Giving 2</div>
</div>`,
    content: `
      <div class="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 font-serif antialiased text-amber-900 min-h-screen">
        <!-- Floating Autumn Leaves -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-10 text-4xl animate-bounce">🍂</div>
          <div class="absolute top-40 right-20 text-3xl animate-pulse">🍁</div>
          <div class="absolute bottom-32 left-1/3 text-5xl animate-bounce animation-delay-100">🦃</div>
        </div>

        <!-- Header -->
        <header class="relative z-50 bg-gradient-to-r from-orange-600 to-amber-600 shadow-xl">
          <div class="container mx-auto px-4 py-6">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <div class="text-3xl">🦃</div>
                <h1 class="text-3xl font-black text-orange-100 tracking-wide">Harvest Blessings</h1>
              </div>
              <nav class="hidden md:flex space-x-8 text-orange-100 font-semibold">
                <a href="#gratitude" class="hover:text-orange-200 transition-colors">Gratitude</a>
                <a href="#feast" class="hover:text-orange-200 transition-colors">Feast</a>
                <a href="#recipes" class="hover:text-orange-200 transition-colors">Recipes</a>
                <a href="#family" class="hover:text-orange-200 transition-colors">Family</a>
              </nav>
            </div>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="gratitude" class="relative py-24 text-center">
          <div class="container mx-auto px-4">
            <div class="mb-12">
              <h2 class="text-6xl md:text-8xl font-black text-amber-700 mb-6 drop-shadow-lg">
                Thanksgiving
              </h2>
              <h3 class="text-3xl md:text-5xl font-bold text-orange-600 mb-8">
                Grateful Hearts, Blessed Homes
              </h3>
            </div>
            <div class="bg-gradient-to-r from-amber-600 to-orange-600 inline-block px-12 py-6 rounded-3xl shadow-2xl">
              <p class="text-2xl font-bold text-white">Celebrating Family, Food & Gratitude</p>
            </div>
            <div class="mt-16 grid grid-cols-3 md:grid-cols-6 gap-4 justify-center">
              <div class="text-6xl hover:scale-110 transition-transform cursor-pointer">🍁</div>
              <div class="text-6xl hover:scale-110 transition-transform cursor-pointer">🦃</div>
              <div class="text-6xl hover:scale-110 transition-transform cursor-pointer">🥧</div>
              <div class="text-6xl hover:scale-110 transition-transform cursor-pointer">🌽</div>
              <div class="text-6xl hover:scale-110 transition-transform cursor-pointer">🍂</div>
              <div class="text-6xl hover:scale-110 transition-transform cursor-pointer">🥕</div>
            </div>
          </div>
        </section>

        <!-- Feast Menu Section -->
        <section id="feast" class="py-20 bg-gradient-to-r from-amber-100 to-orange-100">
          <div class="container mx-auto px-4">
            <h3 class="text-5xl font-black text-center mb-16 text-amber-700">Traditional Thanksgiving Feast</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 border-4 border-amber-200">
                <div class="text-center">
                  <div class="text-7xl mb-6">🦃</div>
                  <h4 class="text-3xl font-black text-amber-800 mb-4">Roasted Turkey</h4>
                  <p class="text-amber-600 mb-6 text-lg">Golden-brown, herb-seasoned turkey with crispy skin and tender meat - the centerpiece of our feast</p>
                  <div class="bg-amber-600 text-white px-6 py-3 rounded-2xl font-bold text-lg">
                    Main Course
                  </div>
                </div>
              </div>
              
              <div class="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 border-4 border-orange-200">
                <div class="text-center">
                  <div class="text-7xl mb-6">🥧</div>
                  <h4 class="text-3xl font-black text-orange-800 mb-4">Pumpkin Pie</h4>
                  <p class="text-orange-600 mb-6 text-lg">Creamy spiced pumpkin filling in a flaky crust, topped with whipped cream - autumn in every bite</p>
                  <div class="bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold text-lg">
                    Dessert
                  </div>
                </div>
              </div>
              
              <div class="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-200">
                <div class="text-center">
                  <div class="text-7xl mb-6">🍠</div>
                  <h4 class="text-3xl font-black text-yellow-800 mb-4">Sweet Potatoes</h4>
                  <p class="text-yellow-600 mb-6 text-lg">Candied sweet potatoes with marshmallows and pecans - a sweet side that everyone loves</p>
                  <div class="bg-yellow-600 text-white px-6 py-3 rounded-2xl font-bold text-lg">
                    Side Dish
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Gratitude Cards Section -->
        <section id="recipes" class="py-20">
          <div class="container mx-auto px-4">
            <h3 class="text-4xl font-black text-center mb-16 text-amber-700">Gratitude & Memories</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div class="bg-gradient-to-br from-amber-200 to-orange-200 p-10 rounded-3xl shadow-2xl">
                <h4 class="text-3xl font-black text-amber-800 mb-6">What We're Thankful For</h4>
                <ul class="space-y-4 text-xl text-amber-700">
                  <li class="flex items-center space-x-3">
                    <span class="text-2xl">❤️</span>
                    <span>Family gatherings and shared laughter</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-2xl">🏠</span>
                    <span>Warm homes and cozy moments</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-2xl">🤝</span>
                    <span>Friends who feel like family</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-2xl">🌾</span>
                    <span>Abundant harvests and good health</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-gradient-to-br from-orange-200 to-red-200 p-10 rounded-3xl shadow-2xl">
                <h4 class="text-3xl font-black text-orange-800 mb-6">Family Traditions</h4>
                <div class="space-y-6">
                  <div class="bg-white p-6 rounded-2xl">
                    <h5 class="text-xl font-bold text-orange-700 mb-2">Grandma's Secret Recipe</h5>
                    <p class="text-orange-600">Three generations of perfect stuffing, passed down with love</p>
                  </div>
                  <div class="bg-white p-6 rounded-2xl">
                    <h5 class="text-xl font-bold text-orange-700 mb-2">Wishbone Wishes</h5>
                    <p class="text-orange-600">Annual wishbone breaking contest with hopeful hearts</p>
                  </div>
                  <div class="bg-white p-6 rounded-2xl">
                    <h5 class="text-xl font-bold text-orange-700 mb-2">Football & Food</h5>
                    <p class="text-orange-600">Cheering for our team while the turkey roasts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section id="family" class="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
          <div class="container mx-auto px-4 text-center">
            <div class="bg-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <h3 class="text-4xl font-black text-amber-800 mb-8">Share Your Thanksgiving Story</h3>
              <p class="text-2xl text-amber-600 mb-8 leading-relaxed">
                "Gratitude turns what we have into enough, and more. Share your family traditions, 
                favorite recipes, and heartwarming moments with our community."
              </p>
              <div class="flex justify-center space-x-4 mb-8">
                <div class="text-4xl">🧡</div>
                <div class="text-4xl">🦃</div>
                <div class="text-4xl">🍁</div>
                <div class="text-4xl">🥧</div>
                <div class="text-4xl">🧡</div>
              </div>
              <button class="bg-amber-600 text-white px-12 py-4 rounded-2xl font-black text-xl hover:bg-amber-700 transition-colors shadow-xl">
                Share Your Story
              </button>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gradient-to-r from-amber-800 to-orange-800 py-8">
          <div class="container mx-auto px-4 text-center">
            <p class="text-amber-200 font-bold text-lg">&copy; 2025 Harvest Blessings. Grateful for every moment.</p>
            <div class="mt-4 space-x-6">
              <a href="#" class="text-amber-100 hover:text-amber-200 transition-colors font-semibold">Recipes</a>
              <a href="#" class="text-amber-100 hover:text-amber-200 transition-colors font-semibold">Traditions</a>
              <a href="#" class="text-amber-100 hover:text-amber-200 transition-colors font-semibold">Stories</a>
            </div>
          </div>
        </footer>
      </div>
    `,
    category: "Templates",
  },

  {
    id: "modern-startup-template",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQaK7kxEf_G2XQOG-lMusqHDPQsrojEiUFqg&s" 
         alt="startup logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Startup</div>
</div>`,
    content: `
    <div class="bg-white font-sans antialiased text-gray-800">

      <!-- Header -->
      <header class="fixed w-full bg-white shadow z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold">InnovateX</h1>
          <nav class="hidden md:flex space-x-6">
            <a href="#hero" class="hover:text-blue-600">Home</a>
            <a href="#features" class="hover:text-blue-600">Features</a>
            <a href="#how-it-works" class="hover:text-blue-600">How It Works</a>
            <a href="#contact" class="hover:text-blue-600">Contact</a>
          </nav>
          <button class="md:hidden focus:outline-none">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </header>

      <!-- Hero with diagonal split -->
      <section id="hero" class="relative pt-24 pb-16 overflow-hidden">
        <!-- Diagonal background -->
        <div class="absolute inset-0 transform -skew-y-6 bg-gradient-to-r from-blue-600 to-indigo-500 origin-top-left"></div>
        <div class="relative container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 text-white space-y-6">
            <h2 class="text-5xl font-extrabold">Launch Your Ideas</h2>
            <p class="text-lg max-w-md">InnovateX helps startups accelerate growth with data-driven products, seamless workflows, and expert guidance.</p>
            <a href="#features" class="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">Learn More</a>
          </div>
          <div class="md:w-1/2 mt-10 md:mt-0">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" alt="Startup Illustration" class="rounded-lg shadow-lg w-full">
          </div>
        </div>
      </section>

      <!-- Features zigzag -->
      <section id="features" class="py-16">
        <div class="container mx-auto px-4 space-y-16">
          <!-- Feature 1 -->
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=60" alt="Analytics" class="rounded-lg shadow-md w-full">
            </div>
            <div class="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <h3 class="text-3xl font-bold mb-4">Real-Time Analytics</h3>
              <p class="text-gray-700">Monitor metrics live, get actionable insights, and stay ahead of the curve with our real-time dashboard.</p>
            </div>
          </div>
          <!-- Feature 2 (reversed) -->
          <div class="flex flex-col md:flex-row-reverse items-center">
            <div class="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=60" alt="Collaboration" class="rounded-lg shadow-md w-full">
            </div>
            <div class="md:w-1/2 md:pr-12 mt-8 md:mt-0 text-right">
              <h3 class="text-3xl font-bold mb-4">Seamless Collaboration</h3>
              <p class="text-gray-700">Work together in one place: chat, share files, assign tasks, and hit your milestones on time.</p>
            </div>
          </div>
          <!-- Feature 3 -->
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=60" alt="Automation" class="rounded-lg shadow-md w-full">
            </div>
            <div class="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <h3 class="text-3xl font-bold mb-4">Intelligent Automation</h3>
              <p class="text-gray-700">Automate repetitive tasks with AI-driven workflows and free up your team to focus on innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works timeline -->
      <section id="how-it-works" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 text-center">
          <h3 class="text-4xl font-bold mb-12">How It Works</h3>
          <div class="relative">
            <!-- Vertical line -->
            <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200"></div>
            <div class="space-y-12">
              <!-- Step 1 -->
              <div class="flex flex-col md:flex-row md:items-center">
                <div class="md:w-1/2 md:pr-8">
                  <h4 class="text-2xl font-semibold">01 — Sign Up & Onboard</h4>
                  <p class="text-gray-600">Create your account, set up your profile, and import data in minutes.</p>
                </div>
                <div class="md:w-1/2 relative md:pl-8 mt-4 md:mt-0">
                  <div class="w-4 h-4 bg-blue-600 rounded-full absolute left-0 top-2"></div>
                </div>
              </div>
              <!-- Step 2 -->
              <div class="flex flex-col md:flex-row-reverse md:items-center">
                <div class="md:w-1/2 md:pl-8">
                  <h4 class="text-2xl font-semibold">02 — Customize & Integrate</h4>
                  <p class="text-gray-600">Tailor dashboards, integrate tools you love, and automate key processes.</p>
                </div>
                <div class="md:w-1/2 relative md:pr-8 mt-4 md:mt-0">
                  <div class="w-4 h-4 bg-blue-600 rounded-full absolute right-0 top-2"></div>
                </div>
              </div>
              <!-- Step 3 -->
              <div class="flex flex-col md:flex-row md:items-center">
                <div class="md:w-1/2 md:pr-8">
                  <h4 class="text-2xl font-semibold">03 — Grow & Scale</h4>
                  <p class="text-gray-600">Use insights to refine your strategy, expand your reach, and drive growth.</p>
                </div>
                <div class="md:w-1/2 relative md:pl-8 mt-4 md:mt-0">
                  <div class="w-4 h-4 bg-blue-600 rounded-full absolute left-0 top-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section id="contact" class="py-16">
        <div class="container mx-auto px-4 text-center">
          <h3 class="text-3xl font-bold mb-4">Ready to Transform Your Startup?</h3>
          <a href="mailto:hello@innovatex.com" class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">Get in Touch</a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-800 text-gray-400 py-8">
        <div class="container mx-auto px-4 text-center space-y-4">
          <p>&copy; 2025 InnovateX. All rights reserved.</p>
          <div class="space-x-4">
            <a href="#" class="hover:text-white">Privacy</a>
            <a href="#" class="hover:text-white">Terms</a>
            <a href="#" class="hover:text-white">Support</a>
          </div>
        </div>
      </footer>

    </div>
  `,
    category: "Templates",
  },

  {
    id: "interactive-showcase-template",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://cdn6.f-cdn.com/contestentries/1474571/26573535/5c6e67499739f_thumb900.jpg" 
         alt="Showcase logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Interactive Showcase</div>
</div>`,
    content: `
    <div class="bg-white font-sans antialiased text-gray-800">

      <!-- Header -->
      <header class="fixed w-full bg-white shadow-sm z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold">ShowcaseX</h1>
          <nav class="hidden md:flex space-x-6">
            <a href="#hero" class="hover:text-blue-600">Home</a>
            <a href="#features" class="hover:text-blue-600">Features</a>
            <a href="#gallery" class="hover:text-blue-600">Gallery</a>
            <a href="#testimonials" class="hover:text-blue-600">Testimonials</a>
            <a href="#contact" class="hover:text-blue-600">Contact</a>
          </nav>
          <button class="md:hidden focus:outline-none">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </header>

      <!-- Hero with image mosaic -->
      <section id="hero" class="pt-24 pb-16 bg-gray-100">
        <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div class="lg:w-1/2 space-y-6">
            <h2 class="text-4xl lg:text-5xl font-extrabold">Engage Your Audience</h2>
            <p class="text-lg text-gray-700">ShowcaseX helps you present your work with stunning layouts, interactive galleries, and seamless animations.</p>
            <a href="#features" class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">Explore Features</a>
          </div>
          <div class="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=60" alt="Mosaic 1" class="rounded-lg shadow cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=400&q=60" alt="Mosaic 2" class="rounded-lg shadow cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=60" alt="Mosaic 3" class="rounded-lg shadow cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=60" alt="Mosaic 4" class="rounded-lg shadow cursor-pointer" />
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-16">
        <div class="container mx-auto px-4 text-center">
          <h3 class="text-3xl font-bold mb-8">Key Features</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 border rounded-lg hover:shadow-lg transition">
              <i class="fas fa-magic text-blue-600 text-4xl mb-4"></i>
              <h4 class="text-xl font-semibold mb-2">Dynamic Layouts</h4>
              <p class="text-gray-600">Choose from multiple pre-built layouts or build your own with drag & drop.</p>
            </div>
            <div class="p-6 border rounded-lg hover:shadow-lg transition">
              <i class="fas fa-sliders-h text-blue-600 text-4xl mb-4"></i>
              <h4 class="text-xl font-semibold mb-2">Easy Customization</h4>
              <p class="text-gray-600">Modify colors, fonts, and spacing directly in the editor with instant preview.</p>
            </div>
            <div class="p-6 border rounded-lg hover:shadow-lg transition">
              <i class="fas fa-mobile-alt text-blue-600 text-4xl mb-4"></i>
              <h4 class="text-xl font-semibold mb-2">Responsive Design</h4>
              <p class="text-gray-600">All templates adapt beautifully to any screen size, from mobile to desktop.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section id="gallery" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 text-center">
          <h3 class="text-3xl font-bold mb-8">Showcase Gallery</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=60" alt="Gallery 1" class="rounded-lg shadow cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=60" alt="Gallery 2" class="rounded-lg shadow cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=60" alt="Gallery 3" class="rounded-lg shadow cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=60" alt="Gallery 4" class="rounded-lg shadow cursor-pointer" />
          </div>
        </div>
      </section>

      <!-- Slanted Carousel Container -->
      <section id="testimonials" class="py-16">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold mb-8 text-center">Client Feedback</h3>
          <div class="overflow-hidden transform -rotate-3">
            <div class="flex space-x-8 animate-slide-slanted bg-blue-50 p-4 rounded-lg">
              <!-- testimonial cards -->
              <div class="flex-none w-64 bg-white p-6 rounded-lg shadow-md">
                <p class="italic text-gray-800">"ShowcaseX made our portfolio shine — so easy!"</p>
                <h4 class="mt-4 font-semibold">— Olivia Smith</h4>
              </div>
              <div class="flex-none w-64 bg-white p-6 rounded-lg shadow-md">
                <p class="italic text-gray-800">"Love the editor interface and customization options."</p>
                <h4 class="mt-4 font-semibold">— Liam Johnson</h4>
              </div>
              <div class="flex-none w-64 bg-white p-6 rounded-lg shadow-md">
                <p class="italic text-gray-800">"Responsive designs look flawless across devices."</p>
                <h4 class="mt-4 font-semibold">— Emma Davis</h4>
              </div>
              <div class="flex-none w-64 bg-white p-6 rounded-lg shadow-md">
                <p class="italic text-gray-800">"Drag & drop building is truly intuitive."</p>
                <h4 class="mt-4 font-semibold">— Noah Wilson</h4>
              </div>
              <div class="flex-none w-64 bg-white p-6 rounded-lg shadow-md">
                <p class="italic text-gray-800">"Top-notch support and regular updates."</p>
                <h4 class="mt-4 font-semibold">— Ava Martinez</h4>
              </div>
              <div class="flex-none w-64 bg-white p-6 rounded-lg shadow-md">
                <p class="italic text-gray-800">"Our site launch was seamless and fast."</p>
                <h4 class="mt-4 font-semibold">— William Lee</h4>
              </div>
              <!-- duplicates for loop -->
              <div class="flex-none w-64 bg-white p-6 rounded-lg shadow-md">
                <p class="italic text-gray-800">"ShowcaseX made our portfolio shine — so easy!"</p>
                <h4 class="mt-4 font-semibold">— Olivia Smith</h4>
              </div>
              <div class="flex-none w-64 bg-white p-6 rounded-lg shadow-md">
                <p class="italic text-gray-800">"Love the editor interface and customization options."</p>
                <h4 class="mt-4 font-semibold">— Liam Johnson</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call-to-Action -->
      <section id="contact" class="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold mb-4">Start Your Showcase Today</h3>
          <p class="mb-6">Sign up now and take your portfolio to the next level.</p>
          <a href="mailto:hello@showcasex.com" class="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">Contact Us</a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-800 text-gray-400 py-8">
        <div class="container mx-auto px-4 text-center">
          <p class="mb-4">&copy; 2025 ShowcaseX. All rights reserved.</p>
          <div class="space-x-4">
            <a href="#" class="hover:text-white"><i class="fab fa-facebook fa-lg"></i></a>
            <a href="#" class="hover:text-white"><i class="fab fa-twitter fa-lg"></i></a>
            <a href="#" class="hover:text-white"><i class="fab fa-linkedin fa-lg"></i></a>
          </div>
        </div>
      </footer>

      <style>
        @keyframes slide-slanted {
          0%   { transform: translateX(0) rotate(0deg); }
          25%  { transform: translateX(-25%) rotate(-1deg); }
          50%  { transform: translateX(-50%) rotate(0deg); }
          75%  { transform: translateX(-75%) rotate(1deg); }
          100% { transform: translateX(-100%) rotate(0deg); }
        }
        .animate-slide-slanted { animation: slide-slanted 40s linear infinite; transform-origin: center center; }
      </style>

    </div>
  `,
    category: "Templates",
  },
  {
    id: "dark-tilt-template",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4vI90CYk5_LYDWUwlt1YOnILW8DGGIjaLg&s" 
         alt="tilt logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Dark Tilt</div>
</div>`,
    content: `
   <div class="bg-blue-950 font-sans antialiased text-blue-100">

      <!-- HEADER -->
      <header class="fixed w-full bg-blue-900/90 backdrop-blur-md shadow-lg z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold tracking-wide">NightVision</h1>
          <nav class="hidden md:flex space-x-6 text-sm">
            <a href="#intro" class="hover:text-orange-400 transition">Intro</a>
            <a href="#services" class="hover:text-orange-400 transition">Services</a>
            <a href="#showcase" class="hover:text-orange-400 transition">Showcase</a>
            <a href="#carousel" class="hover:text-orange-400 transition">Testimonials</a>
            <a href="#stats" class="hover:text-orange-400 transition">Stats</a>
            <a href="#faq" class="hover:text-orange-400 transition">FAQ</a>
            <a href="#contact" class="hover:text-orange-400 transition">Contact</a>
          </nav>
          <button class="md:hidden focus:outline-none">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </header>

      <!-- INTRO / HERO -->
      <section id="intro" class="h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div class="text-center transform -rotate-3">
          <h2 class="text-5xl md:text-6xl font-extrabold mb-4">Welcome to NightVision</h2>
          <p class="text-lg md:text-xl text-blue-300 mb-8 max-w-xl mx-auto">
            A deep-blue dark mode template packed with tilted cards, slanted sliders & modern flair.
          </p>
          <a href="#services" class="inline-block px-10 py-4 bg-orange-500 text-blue-950 font-semibold rounded-lg shadow-lg hover:bg-orange-400 transition">
            Discover More
          </a>
        </div>
      </section>

      <!-- SERVICES (Tilt Cards) -->
      <section id="services" class="py-20">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div class="relative group perspective">
              <div class="bg-blue-900 rounded-xl p-8 shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12 tilt-card">
                <i class="fas fa-code-branch text-orange-400 text-4xl mb-4"></i>
                <h4 class="text-2xl font-semibold mb-2">DevOps Automation</h4>
                <p class="text-blue-300">Streamline CI/CD pipelines with custom scripts & monitoring.</p>
              </div>
            </div>
            <div class="relative group perspective">
              <div class="bg-blue-900 rounded-xl p-8 shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12 tilt-card">
                <i class="fas fa-shield-alt text-orange-400 text-4xl mb-4"></i>
                <h4 class="text-2xl font-semibold mb-2">Security Audits</h4>
                <p class="text-blue-300">Comprehensive pentests and vulnerability assessments.</p>
              </div>
            </div>
            <div class="relative group perspective">
              <div class="bg-blue-900 rounded-xl p-8 shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12 tilt-card">
                <i class="fas fa-cubes text-orange-400 text-4xl mb-4"></i>
                <h4 class="text-2xl font-semibold mb-2">Container Orchestration</h4>
                <p class="text-blue-300">Deploy scalable microservices with Kubernetes & Docker.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SHOWCASE (Tilted Image Grids) -->
      <section id="showcase" class="py-20 bg-blue-900/40">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-center mb-12">Showcase Gallery</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Showcase 1"
                 class="rounded-lg shadow-lg transform transition duration-500 hover:rotate-3 hover:scale-105 tilt-card cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80" alt="Showcase 2"
                 class="rounded-lg shadow-lg transform transition duration-500 hover:-rotate-3 hover:scale-105 tilt-card cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Showcase 3"
                 class="rounded-lg shadow-lg transform transition duration-500 hover:rotate-2 hover:scale-105 tilt-card cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80" alt="Showcase 4"
                 class="rounded-lg shadow-lg transform transition duration-500 hover:-rotate-2 hover:scale-105 tilt-card cursor-pointer" />
          </div>

          <!-- Second row w/ different tilt directions -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 perspective">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80" alt="Showcase 5"
                 class="rounded-lg shadow-lg transform transition duration-500 hover:rotate-6 hover:scale-105 tilt-card cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80" alt="Showcase 6"
                 class="rounded-lg shadow-lg transform transition duration-500 hover:-rotate-6 hover:scale-105 tilt-card cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80" alt="Showcase 7"
                 class="rounded-lg shadow-lg transform transition duration-500 hover:rotate-1 hover:scale-105 tilt-card cursor-pointer" />
          </div>
        </div>
      </section>

      <!-- SLANTED TESTIMONIAL CAROUSEL (full component tilted) -->
      <section id="carousel" class="py-24">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-center mb-12">What Clients Say</h3>

          <!-- Wrapper rotated -->
          <div class="overflow-hidden slant-wrap">
            <!-- Track moves sideways, counter-rotate cards to appear straight -->
            <div class="flex space-x-8 slant-track bg-blue-800/60 p-6 rounded-2xl">
              <!-- 6 cards + duplicates -->
              <div class="flex-none w-72 bg-blue-900 p-6 rounded-xl shadow-md card-undo">
                <p class="italic text-blue-200">"ShowcaseX made our portfolio shine — so easy!"</p>
                <h4 class="mt-4 font-semibold text-orange-400">— Olivia Smith</h4>
              </div>
              <div class="flex-none w-72 bg-blue-900 p-6 rounded-xl shadow-md card-undo">
                <p class="italic text-blue-200">"Love the editor interface and customization options."</p>
                <h4 class="mt-4 font-semibold text-orange-400">— Liam Johnson</h4>
              </div>
              <div class="flex-none w-72 bg-blue-900 p-6 rounded-xl shadow-md card-undo">
                <p class="italic text-blue-200">"Responsive designs look flawless across devices."</p>
                <h4 class="mt-4 font-semibold text-orange-400">— Emma Davis</h4>
              </div>
              <div class="flex-none w-72 bg-blue-900 p-6 rounded-xl shadow-md card-undo">
                <p class="italic text-blue-200">"Drag & drop building is truly intuitive."</p>
                <h4 class="mt-4 font-semibold text-orange-400">— Noah Wilson</h4>
              </div>
              <div class="flex-none w-72 bg-blue-900 p-6 rounded-xl shadow-md card-undo">
                <p class="italic text-blue-200">"Top-notch support and regular updates."</p>
                <h4 class="mt-4 font-semibold text-orange-400">— Ava Martinez</h4>
              </div>
              <div class="flex-none w-72 bg-blue-900 p-6 rounded-xl shadow-md card-undo">
                <p class="italic text-blue-200">"Our site launch was seamless and fast."</p>
                <h4 class="mt-4 font-semibold text-orange-400">— William Lee</h4>
              </div>
              <!-- duplicates -->
              <div class="flex-none w-72 bg-blue-900 p-6 rounded-xl shadow-md card-undo">
                <p class="italic text-blue-200">"ShowcaseX made our portfolio shine — so easy!"</p>
                <h4 class="mt-4 font-semibold text-orange-400">— Olivia Smith</h4>
              </div>
              <div class="flex-none w-72 bg-blue-900 p-6 rounded-xl shadow-md card-undo">
                <p class="italic text-blue-200">"Love the editor interface and customization options."</p>
                <h4 class="mt-4 font-semibold text-orange-400">— Liam Johnson</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STATS -->
      <section id="stats" class="py-20 bg-blue-900/40">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-center mb-12">Our Numbers</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div class="bg-blue-900 p-8 rounded-lg text-center shadow-lg perspective group">
              <div class="tilt-card transform transition-transform duration-500 group-hover:rotate-y-6">
                <h4 class="text-4xl font-extrabold text-orange-400 mb-2">500+</h4>
                <p class="text-blue-300">Projects Delivered</p>
              </div>
            </div>
            <div class="bg-blue-900 p-8 rounded-lg text-center shadow-lg perspective group">
              <div class="tilt-card transform transition-transform duration-500 group-hover:rotate-y-6">
                <h4 class="text-4xl font-extrabold text-orange-400 mb-2">120+</h4>
                <p class="text-blue-300">Happy Clients</p>
              </div>
            </div>
            <div class="bg-blue-900 p-8 rounded-lg text-center shadow-lg perspective group">
              <div class="tilt-card transform transition-transform duration-500 group-hover:rotate-y-6">
                <h4 class="text-4xl font-extrabold text-orange-400 mb-2">99.9%</h4>
                <p class="text-blue-300">Uptime Guarantee</p>
              </div>
            </div>
            <div class="bg-blue-900 p-8 rounded-lg text-center shadow-lg perspective group">
              <div class="tilt-card transform transition-transform duration-500 group-hover:rotate-y-6">
                <h4 class="text-4xl font-extrabold text-orange-400 mb-2">24/7</h4>
                <p class="text-blue-300">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ (Accordion) -->
      <section id="faq" class="py-20">
        <div class="container mx-auto px-4 max-w-3xl">
          <h3 class="text-3xl font-bold text-center mb-12">FAQ</h3>
          <details class="mb-4 bg-blue-900 rounded-lg p-6 shadow-lg">
            <summary class="cursor-pointer text-orange-400 font-semibold">Can I customize everything?</summary>
            <p class="mt-3 text-blue-200">Yes. Colors, fonts, spacing — all editable inside GrapesJS blocks.</p>
          </details>
          <details class="mb-4 bg-blue-900 rounded-lg p-6 shadow-lg">
            <summary class="cursor-pointer text-orange-400 font-semibold">Is it mobile friendly?</summary>
            <p class="mt-3 text-blue-200">Absolutely. Tailwind classes ensure responsiveness on all screens.</p>
          </details>
          <details class="mb-4 bg-blue-900 rounded-lg p-6 shadow-lg">
            <summary class="cursor-pointer text-orange-400 font-semibold">How do I change images?</summary>
            <p class="mt-3 text-blue-200">All images are plain <code>&lt;img&gt;</code> tags — easy to select & replace.</p>
          </details>
        </div>
      </section>

      <!-- NEWSLETTER -->
      <section id="newsletter" class="py-16 bg-blue-800 text-blue-100 text-center">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold mb-4">Join Our Newsletter</h3>
          <p class="mb-6">Get the latest updates and insights directly in your inbox.</p>
          <form class="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Your email address"
                   class="px-4 py-3 rounded-lg bg-blue-900 text-blue-100 focus:outline-none flex-1" />
            <button type="submit"
                    class="px-6 py-3 bg-orange-500 text-blue-950 font-semibold rounded-lg shadow-lg hover:bg-orange-400 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="py-20">
        <div class="container mx-auto px-4 text-center">
          <h3 class="text-3xl font-bold mb-8">Get in Touch</h3>
          <form class="max-w-md mx-auto space-y-4">
            <input type="email" placeholder="Your email"
                   class="w-full px-4 py-3 rounded-lg bg-blue-900 text-blue-100 focus:outline-none" />
            <textarea placeholder="Your message"
                      class="w-full px-4 py-3 rounded-lg bg-blue-900 text-blue-100 focus:outline-none" rows="4"></textarea>
            <button type="submit"
                    class="px-8 py-3 bg-orange-500 text-blue-950 font-semibold rounded-lg shadow-lg hover:bg-orange-400 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="bg-blue-950 py-10">
        <div class="container mx-auto px-4 text-center text-blue-300 space-y-4">
          <div class="space-x-6">
            <a href="#" class="hover:text-orange-400 transition"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="hover:text-orange-400 transition"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-orange-400 transition"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="hover:text-orange-400 transition"><i class="fab fa-github"></i></a>
          </div>
          <p class="text-sm">&copy; 2025 NightVision. All rights reserved.</p>
        </div>
      </footer>

      <!-- STYLES -->
      <style>
        .perspective { perspective: 1000px; }
        .tilt-card { transform-style: preserve-3d; }
        .group:hover .tilt-card { transform: rotateY(15deg) rotateX(5deg); }

        /* Slanted carousel */
        .slant-wrap { transform: rotate(-6deg); }
        .card-undo { transform: rotate(6deg); } /* counter-rotate to keep text straight */
        @keyframes marqueeX {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slant-track {
          animation: marqueeX 35s linear infinite;
          width: max-content;
        }
      </style>

    </div>
  `,
    category: "Templates",
  },
  {
    id: "business-dark-corporate",
    label: ` <div style="text-align: center; padding: 10px;">
    <img src="https://www.c3onlinemarketing.com/wp-content/uploads/2021/11/preview.jpg" 
         alt="business logo" 
         style="width: 25px; height: 25px; display: block; margin: auto;">
    <div style="margin-top: 5px; font-size: 12px; color: white;">Business</div>
</div>`,
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
    category: "Templates",
  },
];

export default templates;
