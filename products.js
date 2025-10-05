/**
 * ArtisanGems - Products JavaScript
 * Handles product data, display, filtering, and sorting
 */

// Product database
const products = [
    {
        id: 1,
        name: "Silver Leaf Pendant Necklace",
        price: 4950.00,
        oldPrice: 6200.00,
        category: "jewelry",
        featured: true,
        new: true,
        artisan: "Priya",
        materials: "Sterling Silver, Freshwater Pearl",
        dimensions: "Chain length: 18 inches, Pendant: 1.2 x 0.8 inches",
        images: [
            "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=400&fit=crop"
        ],
        description: "This handcrafted silver leaf pendant is delicately shaped and textured to capture the beauty of nature. Each piece is unique, made with careful attention to detail by our artisan Priya using traditional silversmithing techniques.",
        details: "The leaf pendant hangs from an 18-inch sterling silver chain with a secure lobster clasp. The pendant itself features subtle hammered textures that catch the light beautifully as you move. A tiny freshwater pearl accent adds an elegant touch.",
        artisanStory: "Priya has been crafting fine jewelry for over 20 years. Drawing inspiration from the natural world around her coastal studio, she creates pieces that reflect organic forms and textures. Each piece is handmade using traditional techniques passed down through generations of artisans in her family.",
        colors: ["silver"],
        sizes: []
    },
    {
        id: 2,
        name: "Handwoven Wool Throw Blanket",
        price: 9400.00,
        oldPrice: null,
        category: "homegoods",
        featured: true,
        new: false,
        artisan: "Rajiv",
        materials: "100% Merino Wool",
        dimensions: "50 x 60 inches",
        images: [
            "/assets/images/wool_throw_blanket.png"
        ],
        description: "Wrap yourself in the comfort of this luxurious handwoven throw blanket. Made from 100% merino wool, this blanket offers exceptional softness and warmth while featuring a beautiful pattern inspired by traditional textile designs.",
        details: "Each blanket takes approximately 20 hours to weave on a traditional loom. The merino wool is carefully selected for its softness and durability, and the edges are finished with a delicate fringe. This throw is perfect for adding warmth and texture to your living space.",
        artisanStory: "Rajiv's family has been weaving textiles for generations in northern India. Using techniques passed down through generations, he combines traditional patterns with contemporary colors to create pieces that honor his heritage while fitting beautifully in modern homes.",
        colors: ["cream", "grey", "rust"],
        sizes: []
    },
    {
        id: 3,
        name: "Ceramic Serving Bowl Set",
        price: 6900.00,
        oldPrice: null,
        category: "homegoods",
        featured: true,
        new: false,
        artisan: "Meena",
        materials: "Stoneware Clay, Lead-free Glaze",
        dimensions: "Large: 10\" diameter, Medium: 8\" diameter, Small: 6\" diameter",
        images: [
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop"
        ],
        description: "This set of three nesting ceramic bowls is both functional and beautiful. Each bowl is hand-thrown and features a unique glaze that creates subtle variations in color, making every set one-of-a-kind.",
        details: "These versatile bowls are perfect for serving everything from salads to pasta to fruit. The stoneware clay is fired at high temperatures, making these pieces durable and microwave, oven, and dishwasher safe. The glazes used are all food-safe and lead-free.",
        artisanStory: "Meena discovered her passion for ceramics after a career in architecture. She brings her eye for form and function to each piece she creates in her mountain studio. Using locally-sourced clay, she throws each piece by hand on her pottery wheel, focusing on creating objects that are both beautiful and practical for everyday use.",
        colors: ["blue", "teal", "sand"],
        sizes: []
    },
    {
        id: 4,
        name: "Gold Hoop Earrings with Turquoise",
        price: 6500.00,
        oldPrice: null,
        category: "jewelry",
        featured: false,
        new: true,
        artisan: "Ananya",
        materials: "14k Gold-filled Wire, Natural Turquoise",
        dimensions: "1.5 inch diameter",
        images: [
            "/assets/images/gold_turquoise_earrings.png"
        ],
        description: "These elegant hoop earrings feature a delicate design with small natural turquoise beads that move freely along the gold wire. The combination of the warm gold and vibrant turquoise creates a striking yet versatile accessory.",
        details: "Handcrafted from 14k gold-filled wire, these earrings are lightweight and comfortable for all-day wear. Each earring features three small turquoise beads that catch the light as you move. The secure latch closure keeps them safely in place.",
        artisanStory: "Ananya has been crafting fine jewelry for over 20 years. Drawing inspiration from the natural world around her coastal studio, she creates pieces that reflect organic forms and textures. Each piece is handmade using traditional techniques passed down through generations of artisans in her family.",
        colors: ["gold"],
        sizes: []
    },
    {
        id: 5,
        name: "Hand-carved Wooden Serving Spoons",
        price: 3500.00,
        oldPrice: 4400.00,
        category: "homegoods",
        featured: false,
        new: false,
        artisan: "Vikram",
        materials: "Walnut Wood, Food-safe Oil Finish",
        dimensions: "12 inches long",
        images: [
            "/assets/images/wooden_serving_spoons.png"
        ],
        description: "These beautiful serving spoons are carved by hand from solid walnut wood. Each spoon features a unique grain pattern and a smooth, polished finish that feels wonderful in the hand.",
        details: "Sold as a set of two, these spoons are perfect for serving salads, grain dishes, or any family-style meal. The wood is treated with food-safe oils and waxes to protect and enhance its natural beauty. With proper care, these utensils will last for generations.",
        artisanStory: "Vikram discovered woodworking after retiring from teaching. Working from his home workshop, he selects each piece of wood carefully for its grain and character. Using traditional hand tools, he shapes and smooths each utensil to be both beautiful and functional, focusing on creating pieces that bring joy to everyday tasks.",
        colors: ["walnut"],
        sizes: []
    },
    {
        id: 6,
        name: "Macramé Wall Hanging",
        price: 5800.00,
        oldPrice: null,
        category: "homegoods",
        featured: false,
        new: false,
        artisan: "Deepa",
        materials: "Organic Cotton Rope, Driftwood",
        dimensions: "24 inches wide, 36 inches long",
        images: [
            "/assets/images/macrame_wall_hanging.png"
        ],
        description: "This intricate macramé wall hanging adds texture and bohemian charm to any space. Handcrafted using organic cotton rope knotted onto a piece of naturally weathered driftwood, each piece is a unique work of art.",
        details: "The intricate pattern combines several traditional macramé knots to create a flowing, organic design. The cotton rope is soft to the touch and undyed to maintain its natural color. The driftwood mount has been carefully selected and prepared to enhance its natural beauty.",
        artisanStory: "Deepa learned the art of macramé from her grandmother and has been creating fiber art for over a decade. She draws inspiration from natural landscapes and uses traditional knotting techniques to create contemporary designs. Working from her small studio by the sea, she often incorporates found natural elements like driftwood and shells into her pieces.",
        colors: ["natural"],
        sizes: []
    },
    {
        id: 7,
        name: "Hammered Copper Cuff Bracelet",
        price: 3950.00,
        oldPrice: null,
        category: "jewelry",
        featured: true,
        new: false,
        artisan: "Arjun",
        materials: "Solid Copper",
        dimensions: "6.5 inches inner circumference, 1 inch width",
        images: [
            "/assets/images/copper_bracelet.png"
        ],
        description: "This striking cuff bracelet is handcrafted from solid copper and features a beautifully textured surface created through traditional hammering techniques. The warm glow of copper makes a bold yet versatile statement piece.",
        details: "The bracelet has been shaped to comfortably fit the wrist and can be gently adjusted for a perfect fit. The hammering process not only creates the distinctive texture but also work-hardens the metal for strength. The copper has been sealed with a clear protective coating to prevent tarnishing while preserving its natural luster.",
        artisanStory: "Arjun learned metalsmithing from his father and has been working with copper for over 25 years. He is particularly drawn to this metal for its warm color and malleable nature, which allows him to create organic textures through traditional hammering techniques. Each piece is crafted entirely by hand in his small workshop using techniques that have been passed down through generations.",
        colors: ["copper"],
        sizes: []
    },
    {
        id: 8,
        name: "Hand-poured Soy Candle Set",
        price: 3050.00,
        oldPrice: null,
        category: "homegoods",
        featured: false,
        new: true,
        artisan: "Pooja",
        materials: "100% Soy Wax, Essential Oils, Cotton Wicks, Recycled Glass",
        dimensions: "Each candle: 3 inches diameter, 3.5 inches height",
        images: [
            "/assets/images/soy_candle_set.png"
        ],
        description: "This set of three hand-poured soy candles comes in complementary scents inspired by a woodland garden. Each candle is housed in a recycled glass container and scented with pure essential oil blends for a clean, natural fragrance.",
        details: "The set includes three 8 oz candles in the following scents: Lavender & Sage, Cedar & Bergamot, and Pine & Eucalyptus. Made from 100% soy wax, these candles burn cleanly and slowly, providing approximately 40-50 hours of burning time each. All ingredients are vegan, cruelty-free, and contain no artificial fragrances or paraffin.",
        artisanStory: "Pooja began making candles as a way to create natural, non-toxic alternatives to commercial options. She selects each ingredient carefully, from the sustainable soy wax to the pure essential oils she blends herself. The recycled glass containers reflect her commitment to environmental responsibility, and each candle is poured by hand in small batches to ensure quality.",
        colors: [],
        sizes: []
    },
    {
        id: 9,
        name: "Leather Journal with Handmade Paper",
        price: 2800.00,
        oldPrice: null,
        category: "accessories",
        featured: false,
        new: false,
        artisan: "Rohan",
        materials: "Vegetable-tanned Leather, Cotton Rag Paper, Waxed Linen Thread",
        dimensions: "6 x 8 inches, 120 pages",
        images: [
            "/assets/images/leather_journal.png"
        ],
        description: "This beautiful journal features a hand-stitched leather cover and 120 pages of handmade cotton rag paper. Perfect for sketching, journaling, or as a special gift, this book is designed to be used and treasured for years to come.",
        details: "The cover is made from vegetable-tanned leather that will develop a rich patina over time. The binding uses traditional bookbinding techniques with exposed stitching using waxed linen thread. Inside, you'll find 120 pages (60 sheets) of acid-free handmade paper with a subtle texture that's perfect for writing or drawing with a variety of media.",
        artisanStory: "Rohan learned traditional bookbinding during his travels through Italy and has been crafting handmade books for over 15 years. He creates each journal from start to finish, from cutting the leather to binding the signatures of paper. His work combines traditional techniques with contemporary aesthetics, resulting in books that are both beautiful and functional.",
        colors: ["brown", "tan", "black"],
        sizes: []
    },
    {
        id: 10,
        name: "Hand-Embroidered Linen Napkin Set",
        price: 4250.00,
        oldPrice: 5300.00,
        category: "homegoods",
        featured: false,
        new: false,
        artisan: "Kavita",
        materials: "100% Linen, Cotton Embroidery Thread",
        dimensions: "20 x 20 inches each",
        images: [
            "/assets/images/linen_napkin_set.png"
        ],
        description: "This set of four linen napkins features delicate hand-embroidered botanical designs in the corners. Made from high-quality European linen, these napkins add an elegant touch to any table setting.",
        details: "Each napkin in the set features a different botanical motif inspired by wildflowers. The embroidery is done by hand using colorfast cotton thread, and the edges are finished with a narrow hem. The natural linen becomes softer with each washing while maintaining its durability, making these napkins perfect for both everyday use and special occasions.",
        artisanStory: "Kavita learned embroidery from her mother at a young age and has been perfecting her craft for over 30 years. She draws inspiration from the natural world, particularly botanical elements. Each design is first sketched by hand before being carefully transferred to fabric and embroidered using traditional techniques. Her work is characterized by its delicate precision and attention to detail.",
        colors: ["natural", "grey", "blush"],
        sizes: []
    },
    {
        id: 11,
        name: "Turquoise and Silver Drop Earrings",
        price: 4750.00,
        oldPrice: null,
        category: "jewelry",
        featured: false,
        new: false,
        artisan: "Ritu",
        materials: "Sterling Silver, Natural Turquoise",
        dimensions: "1.75 inches long",
        images: [
            "/assets/images/turquoise_earrings.png"
        ],
        description: "These elegant drop earrings feature natural turquoise stones set in handcrafted sterling silver settings. The simple yet sophisticated design makes them perfect for both everyday wear and special occasions.",
        details: "Each earring features a small turquoise cabochon in a bezel setting at the top, with a larger teardrop-shaped stone suspended below. The silver has been given a subtle hammered texture that catches the light beautifully. The earrings hang from secure French hook ear wires and have a comfortable weight.",
        artisanStory: "Ritu has been crafting fine jewelry for over 20 years. Drawing inspiration from the natural world around her coastal studio, she creates pieces that reflect organic forms and textures. Each piece is handmade using traditional techniques passed down through generations of artisans in her family.",
        colors: ["silver"],
        sizes: []
    },
    {
        id: 12,
        name: "Hand-Knit Merino Wool Scarf",
        price: 5700.00,
        oldPrice: null,
        category: "accessories",
        featured: false,
        new: true,
        artisan: "Nisha",
        materials: "100% Extra-fine Merino Wool",
        dimensions: "8 inches wide, 68 inches long",
        images: [
            "/assets/images/wool_scarf.png"
        ],
        description: "This luxuriously soft scarf is hand-knit from the finest merino wool using a classic pattern with a contemporary twist. The generous length and width make it perfect for staying warm in style during the colder months.",
        details: "The intricate cable pattern adds texture and visual interest while providing extra warmth. The merino wool is exceptionally soft against the skin with no itchiness, and its natural temperature-regulating properties keep you comfortable in varying conditions. The scarf is finished with a subtle fringe at each end.",
        artisanStory: "Nisha learned to knit from her grandmother as a child growing up in Kashmir. She combines traditional patterns with contemporary design sensibilities to create accessories that are both timeless and modern. Each piece is knit entirely by hand using premium natural fibers, with meticulous attention to every stitch.",
        colors: ["cream", "grey", "forest green", "burgundy"],
        sizes: []
    }
];

// Reviews data
const reviews = [
    {
        productId: 1,
        author: "Anjali T.",
        date: "August 15, 2023",
        rating: 5,
        text: "This necklace is even more beautiful in person. The craftsmanship is exquisite and I've received so many compliments when wearing it. The chain length is perfect and the pendant sits just right."
    },
    {
        productId: 1,
        author: "Rahul R.",
        date: "July 22, 2023",
        rating: 4,
        text: "Bought this as a gift for my wife's birthday and she absolutely loves it. The only reason for 4 stars instead of 5 is that the clasp is a bit small and can be tricky to open and close."
    },
    {
        productId: 2,
        author: "Divya L.",
        date: "September 3, 2023",
        rating: 5,
        text: "This blanket is absolutely luxurious. The wool is incredibly soft, not scratchy at all, and the weaving is beautiful. It's the perfect weight for chilly evenings and looks stunning draped over our sofa."
    },
    {
        productId: 3,
        author: "Shreya K.",
        date: "August 28, 2023",
        rating: 5,
        text: "These bowls are stunning and so versatile. I use them for everything from serving salads to holding fruit on my counter. The glaze is beautiful and unique. Shipping was quick and everything was packed very securely."
    },
    {
        productId: 7,
        author: "Aryan M.",
        date: "July 10, 2023",
        rating: 4,
        text: "Beautiful bracelet with excellent craftsmanship. The hammered texture catches the light in a really interesting way. I have slightly larger wrists and was able to gently adjust it for a perfect fit."
    }
];

/**
 * Load and display featured products on the homepage
 */
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    // Filter featured products
    const featuredProducts = products.filter(product => product.featured);
    
    // Clear container
    container.innerHTML = '';
    
    // Display products
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

/**
 * Load products based on category filter
 * @param {string} category - Category to filter by, or 'all' for all products
 */
function loadProducts(category = 'all') {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    // Filter products
    let filteredProducts = [...products];
    
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    // Update product count
    const countElement = document.getElementById('product-count');
    if (countElement) {
        countElement.textContent = filteredProducts.length;
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Display products
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    // Handle empty results
    if (filteredProducts.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-results';
        emptyMessage.innerHTML = `
            <p>No products found in this category. Please try another filter.</p>
        `;
        container.appendChild(emptyMessage);
    }
    
    // Add event listeners for filters if on products page
    initializeFilters();
}

/**
 * Create a product card element
 * @param {Object} product - Product data
 * @returns {HTMLElement} - Product card element
 */
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Format price
    const formattedPrice = formatPrice(product.price);
    const oldPriceHtml = product.oldPrice 
        ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` 
        : '';
    
    // Create badge for new products
    const newBadge = product.new 
        ? '<span class="product-badge">New</span>' 
        : '';
    
    card.innerHTML = `
        <div class="product-img">
            <img src="${product.images[0]}" alt="${product.name}">
            ${newBadge}
            <div class="product-actions">
                <a href="product-detail.html?id=${product.id}" class="action-btn" title="View Details">
                    <i class="fas fa-eye"></i>
                </a>
                <button class="action-btn add-to-cart-btn" data-id="${product.id}" title="Add to Cart">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="action-btn" title="Add to Wishlist">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-category">${capitalizeFirstLetter(product.category)}</div>
            <h3 class="product-title">
                <a href="product-detail.html?id=${product.id}">${product.name}</a>
            </h3>
            <div class="product-price">
                ${oldPriceHtml}
                ${formattedPrice}
            </div>
        </div>
    `;
    
    // Add event listener to Add to Cart button
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product.id, 1);
    });
    
    return card;
}

/**
 * Load and display product details
 * @param {number} productId - ID of the product to display
 */
function loadProductDetails(productId) {
    // Find product by ID
    const product = products.find(p => p.id === parseInt(productId));
    
    if (!product) {
        // Product not found, redirect to products page
        window.location.href = 'products.html';
        return;
    }
    
    // Update page title
    document.title = `${product.name} - ArtisanGems`;
    
    // Update breadcrumb
    const categoryBreadcrumb = document.getElementById('category-breadcrumb');
    const productBreadcrumb = document.getElementById('product-breadcrumb');
    
    if (categoryBreadcrumb) {
        categoryBreadcrumb.textContent = capitalizeFirstLetter(product.category);
        categoryBreadcrumb.href = `products.html?category=${product.category}`;
    }
    
    if (productBreadcrumb) {
        productBreadcrumb.textContent = product.name;
    }
    
    // Update product images
    const mainImage = document.getElementById('main-product-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    
    if (mainImage) {
        mainImage.src = product.images[0];
        mainImage.alt = product.name;
    }
    
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = '';
        
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
            thumbnail.innerHTML = `<img src="${image}" alt="${product.name} - View ${index + 1}">`;
            
            thumbnail.addEventListener('click', function() {
                // Update main image
                mainImage.src = image;
                
                // Update active thumbnail
                document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            
            thumbnailContainer.appendChild(thumbnail);
        });
    }
    
    // Update product info
    const productNameEl = document.getElementById('product-name');
    const productPriceEl = document.getElementById('product-price');
    const productDescriptionEl = document.getElementById('product-description');
    const productArtisanEl = document.getElementById('product-artisan');
    const productMaterialsEl = document.getElementById('product-materials');
    const productDimensionsEl = document.getElementById('product-dimensions');
    
    if (productNameEl) productNameEl.textContent = product.name;
    if (productPriceEl) productPriceEl.textContent = formatPrice(product.price);
    if (productDescriptionEl) productDescriptionEl.textContent = product.description;
    if (productArtisanEl) productArtisanEl.textContent = product.artisan;
    if (productMaterialsEl) productMaterialsEl.textContent = product.materials;
    if (productDimensionsEl) productDimensionsEl.textContent = product.dimensions;
    
    // Update color options
    const colorOptions = document.getElementById('color-options');
    if (colorOptions) {
        if (product.colors && product.colors.length > 0) {
            let colorHtml = '<label>Color:</label><div class="color-selector">';
            
            product.colors.forEach((color, index) => {
                colorHtml += `
                    <div class="color-option ${index === 0 ? 'active' : ''}" 
                         data-color="${color}" 
                         style="background-color: ${getColorCode(color)};"
                         title="${capitalizeFirstLetter(color)}"></div>
                `;
            });
            
            colorHtml += '</div>';
            colorOptions.innerHTML = colorHtml;
            
            // Add event listeners to color options
            const colorOptionEls = colorOptions.querySelectorAll('.color-option');
            colorOptionEls.forEach(option => {
                option.addEventListener('click', function() {
                    colorOptionEls.forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        } else {
            colorOptions.style.display = 'none';
        }
    }
    
    // Update size options
    const sizeOptions = document.getElementById('size-options');
    if (sizeOptions) {
        if (product.sizes && product.sizes.length > 0) {
            let sizeHtml = '<label>Size:</label><div class="size-selector">';
            
            product.sizes.forEach((size, index) => {
                sizeHtml += `
                    <div class="size-option ${index === 0 ? 'active' : ''}" data-size="${size}">
                        ${size}
                    </div>
                `;
            });
            
            sizeHtml += '</div>';
            sizeOptions.innerHTML = sizeHtml;
            
            // Add event listeners to size options
            const sizeOptionEls = sizeOptions.querySelectorAll('.size-option');
            sizeOptionEls.forEach(option => {
                option.addEventListener('click', function() {
                    sizeOptionEls.forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        } else {
            sizeOptions.style.display = 'none';
        }
    }
    
    // Update tabs content
    const detailsContent = document.getElementById('details-content');
    const artisanContent = document.getElementById('artisan-content');
    const reviewsContainer = document.getElementById('reviews-container');
    
    if (detailsContent) {
        detailsContent.innerHTML = `
            <h3>Product Specifications</h3>
            <p>${product.details}</p>
            <ul>
                <li><strong>Materials:</strong> ${product.materials}</li>
                <li><strong>Dimensions:</strong> ${product.dimensions}</li>
                <li><strong>Care:</strong> Please see product label for care instructions. Handmade items require gentle care.</li>
            </ul>
            <p>Each item is handcrafted and may have slight variations in color and texture, which is part of what makes handmade items special and unique.</p>
        `;
    }
    
    if (artisanContent) {
        artisanContent.innerHTML = `
            <h3>Meet ${product.artisan}</h3>
            <p>${product.artisanStory}</p>
            <p>All our artisans are fairly compensated for their work and materials. We pride ourselves on building ethical partnerships that support traditional craftsmanship and sustainable practices.</p>
        `;
    }
    
    // Load product reviews
    if (reviewsContainer) {
        const productReviews = reviews.filter(review => review.productId === product.id);
        
        if (productReviews.length > 0) {
            let reviewsHtml = '';
            
            productReviews.forEach(review => {
                const stars = generateStarRating(review.rating);
                
                reviewsHtml += `
                    <div class="review">
                        <div class="review-header">
                            <div class="review-author">${review.author}</div>
                            <div class="review-date">${review.date}</div>
                        </div>
                        <div class="stars">${stars}</div>
                        <p>${review.text}</p>
                    </div>
                `;
            });
            
            reviewsContainer.innerHTML = reviewsHtml;
        } else {
            reviewsContainer.innerHTML = `
                <div class="no-reviews">
                    <p>This product has not been reviewed yet. Be the first to share your experience!</p>
                </div>
            `;
        }
    }
    
    // Add to cart button functionality
    const addToCartBtn = document.getElementById('add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('quantity').value);
            addToCart(product.id, quantity);
        });
    }
}

/**
 * Load related products
 * @param {number} productId - ID of the current product
 */
function loadRelatedProducts(productId) {
    const container = document.getElementById('related-products');
    if (!container) return;
    
    // Find current product
    const currentProduct = products.find(p => p.id === parseInt(productId));
    
    if (!currentProduct) return;
    
    // Find products in the same category
    let relatedProducts = products.filter(p => 
        p.category === currentProduct.category && p.id !== currentProduct.id
    );
    
    // If not enough products in the same category, add products from other categories
    if (relatedProducts.length < 4) {
        const additionalProducts = products.filter(p => 
            p.category !== currentProduct.category && p.id !== currentProduct.id
        ).slice(0, 4 - relatedProducts.length);
        
        relatedProducts = [...relatedProducts, ...additionalProducts];
    }
    
    // Limit to 4 products
    relatedProducts = relatedProducts.slice(0, 4);
    
    // Clear container
    container.innerHTML = '';
    
    // Display products
    relatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

/**
 * Initialize product filters on the products page
 */
function initializeFilters() {
    // Category filters
    const categoryLinks = document.querySelectorAll('.category-filter a');
    if (categoryLinks.length > 0) {
        categoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active class
                categoryLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Get category and update page title
                const category = this.dataset.category;
                const categoryTitle = document.getElementById('category-title');
                
                if (categoryTitle) {
                    if (category === 'all') {
                        categoryTitle.textContent = 'All Products';
                    } else {
                        categoryTitle.textContent = capitalizeFirstLetter(category);
                    }
                }
                
                // Load filtered products
                loadProducts(category);
            });
        });
    }
    
    // Price filter
    const applyPriceBtn = document.getElementById('apply-price');
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', function() {
            const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
            const maxPrice = parseFloat(document.getElementById('max-price').value) || 1000;
            
            filterProductsByPrice(minPrice, maxPrice);
        });
    }
    
    // Sort selector
    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
    
    // Material checkboxes
    const materialCheckboxes = document.querySelectorAll('.checkbox-filter input[type="checkbox"]');
    if (materialCheckboxes.length > 0) {
        materialCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                filterProductsByMaterial();
            });
        });
    }
    
    // Clear filters button
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            // Reset all filters
            document.getElementById('min-price').value = '';
            document.getElementById('max-price').value = '';
            document.getElementById('sort-by').value = 'featured';
            
            materialCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // Reset category to "All Products"
            categoryLinks.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.category === 'all') {
                    link.classList.add('active');
                }
            });
            
            const categoryTitle = document.getElementById('category-title');
            if (categoryTitle) {
                categoryTitle.textContent = 'All Products';
            }
            
            // Load all products
            loadProducts('all');
        });
    }
    
    // View options
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');
    const productsContainer = document.getElementById('products-container');
    
    if (gridViewBtn && listViewBtn && productsContainer) {
        gridViewBtn.addEventListener('click', function() {
            productsContainer.className = 'product-grid';
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });
        
        listViewBtn.addEventListener('click', function() {
            productsContainer.className = 'product-list';
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            
            // Apply list view styles to product cards
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.display = 'flex';
                card.style.flexDirection = 'row';
                card.style.alignItems = 'center';
                
                const imgContainer = card.querySelector('.product-img');
                if (imgContainer) {
                    imgContainer.style.width = '200px';
                    imgContainer.style.height = '200px';
                    imgContainer.style.flexShrink = '0';
                }
                
                const infoContainer = card.querySelector('.product-info');
                if (infoContainer) {
                    infoContainer.style.padding = 'var(--space-lg)';
                    infoContainer.style.flexGrow = '1';
                }
            });
        });
    }
}

/**
 * Filter products by price range
 * @param {number} min - Minimum price
 * @param {number} max - Maximum price
 */
function filterProductsByPrice(min, max) {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    // Get current category
    const activeCategory = document.querySelector('.category-filter a.active');
    const category = activeCategory ? activeCategory.dataset.category : 'all';
    
    // Filter products
    let filteredProducts = [...products];
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    filteredProducts = filteredProducts.filter(product => 
        product.price >= min && product.price <= max
    );
    
    // Update product count
    const countElement = document.getElementById('product-count');
    if (countElement) {
        countElement.textContent = filteredProducts.length;
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Display products
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    // Handle empty results
    if (filteredProducts.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-results';
        emptyMessage.innerHTML = `
            <p>No products found within the selected price range. Please try different filters.</p>
        `;
        container.appendChild(emptyMessage);
    }
}

/**
 * Filter products by material
 */
function filterProductsByMaterial() {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    // Get selected materials
    const selectedMaterials = [];
    document.querySelectorAll('.checkbox-filter input[type="checkbox"]:checked').forEach(checkbox => {
        selectedMaterials.push(checkbox.dataset.material);
    });
    
    // Get current category
    const activeCategory = document.querySelector('.category-filter a.active');
    const category = activeCategory ? activeCategory.dataset.category : 'all';
    
    // Filter products
    let filteredProducts = [...products];
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    // Only apply material filter if any materials are selected
    if (selectedMaterials.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedMaterials.some(material => product.materials.toLowerCase().includes(material.toLowerCase()))
        );
    }
    
    // Get price range if set
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || 1000;
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
    
    // Update product count
    const countElement = document.getElementById('product-count');
    if (countElement) {
        countElement.textContent = filteredProducts.length;
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Display products
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    // Handle empty results
    if (filteredProducts.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-results';
        emptyMessage.innerHTML = `
            <p>No products found with the selected filters. Please try different criteria.</p>
        `;
        container.appendChild(emptyMessage);
    }
}

/**
 * Sort products by the selected criteria
 * @param {string} sortBy - Sorting criteria
 */
function sortProducts(sortBy) {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    // Get current category
    const activeCategory = document.querySelector('.category-filter a.active');
    const category = activeCategory ? activeCategory.dataset.category : 'all';
    
    // Filter products by category
    let filteredProducts = [...products];
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    // Get selected materials
    const selectedMaterials = [];
    document.querySelectorAll('.checkbox-filter input[type="checkbox"]:checked').forEach(checkbox => {
        selectedMaterials.push(checkbox.dataset.material);
    });
    
    // Apply material filter if any selected
    if (selectedMaterials.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedMaterials.some(material => product.materials.toLowerCase().includes(material.toLowerCase()))
        );
    }
    
    // Get price range if set
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || 1000;
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
    
    // Sort products
    switch(sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'featured':
        default:
            // For featured, prioritize featured products first, then sort by ID
            filteredProducts.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return b.id - a.id;
            });
            break;
    }
    
    // Update product count
    const countElement = document.getElementById('product-count');
    if (countElement) {
        countElement.textContent = filteredProducts.length;
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Display products
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

/**
 * Load recommended products for the cart page
 */
function loadRecommendedProducts() {
    const container = document.getElementById('recommended-products');
    if (!container) return;
    
    // Get cart items
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Get product categories in cart
    const cartCategories = new Set();
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            cartCategories.add(product.category);
        }
    });
    
    // Recommend products from the same categories but not in cart
    let recommendedProducts = [];
    
    if (cartCategories.size > 0) {
        const cartProductIds = cart.map(item => item.id);
        
        // First try to get products from same categories
        recommendedProducts = products.filter(product => 
            cartCategories.has(product.category) && !cartProductIds.includes(product.id)
        );
        
        // If not enough, add featured products
        if (recommendedProducts.length < 4) {
            const featuredProducts = products.filter(product => 
                product.featured && !cartProductIds.includes(product.id) && !recommendedProducts.includes(product)
            );
            
            recommendedProducts = [...recommendedProducts, ...featuredProducts];
        }
        
        // If still not enough, add any products
        if (recommendedProducts.length < 4) {
            const otherProducts = products.filter(product => 
                !cartProductIds.includes(product.id) && !recommendedProducts.includes(product)
            );
            
            recommendedProducts = [...recommendedProducts, ...otherProducts];
        }
    } else {
        // If cart is empty, show featured products
        recommendedProducts = products.filter(product => product.featured);
    }
    
    // Limit to 4 products
    recommendedProducts = recommendedProducts.slice(0, 4);
    
    // Clear container
    container.innerHTML = '';
    
    // Display products
    recommendedProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

/**
 * Generate HTML for star rating
 * @param {number} rating - Rating value (1-5)
 * @returns {string} - HTML for star rating
 */
function generateStarRating(rating) {
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

/**
 * Get CSS color code from color name
 * @param {string} colorName - Color name
 * @returns {string} - CSS color code
 */
function getColorCode(colorName) {
    const colorMap = {
        'silver': '#C0C0C0',
        'gold': '#FFD700',
        'copper': '#B87333',
        'black': '#000000',
        'white': '#FFFFFF',
        'cream': '#FFFDD0',
        'grey': '#808080',
        'blue': '#4682B4',
        'teal': '#008080',
        'sand': '#C2B280',
        'brown': '#8B4513',
        'tan': '#D2B48C',
        'rust': '#B7410E',
        'natural': '#F5F5DC',
        'forest green': '#228B22',
        'burgundy': '#800020',
        'blush': '#DE5D83',
        'walnut': '#5C4033'
    };
    
    return colorMap[colorName.toLowerCase()] || '#CCCCCC';
}

/**
 * Capitalize the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Format price with currency symbol
 * @param {number} price - Price to format
 * @returns {string} - Formatted price
 */
function formatPrice(price) {
    return '₹' + parseFloat(price).toFixed(2);
}

// Export functions for use in other scripts
window.loadFeaturedProducts = loadFeaturedProducts;
window.loadProducts = loadProducts;
window.loadProductDetails = loadProductDetails;
window.loadRelatedProducts = loadRelatedProducts;
window.loadRecommendedProducts = loadRecommendedProducts;
window.products = products;
