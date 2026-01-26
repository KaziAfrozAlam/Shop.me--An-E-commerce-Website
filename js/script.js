//copy menu for mobile
function copyMenu() {
	//copy inside .dpt-cat to .departments
	var dptCategory = document.querySelector(".dpt-cat");
	var dptPlace = document.querySelector(".departments");
	dptPlace.innerHTML = dptCategory.innerHTML;

	//copy inside nav to nav
	var mainNav = document.querySelector(".header-nav nav");
	var navPlace = document.querySelector(".off-canvas nav");
	navPlace.innerHTML = mainNav.innerHTML;

	//copy .header-top .wrapper to .thetop-nav
	var topNav = document.querySelector(".header-top .wrapper");
	var topPlace = document.querySelector(".off-canvas .thetop-nav");
	topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector(".trigger"),
	closeButton = document.querySelector(".t-close"),
	addclass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
	addclass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function () {
	addclass.classList.remove("showmenu");
});

//show sub menu on mobile
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
	e.preventDefault();
	submenu.forEach((item) =>
		item != this
			? item.closest(".has-child").classList.remove("expand")
			: null
	);
	if (this.closest(".has-child").classList != "expand");
	this.closest(".has-child").classList.toggle("expand");
}

//slider
const swiper = new Swiper(".swiper", {
	loop: true,

	pagination: {
		el: ".swiper-pagination",
	},
});

//show search
const searchButton = document.querySelector(".t-search"),
	tClose = document.querySelector(".search-close"),
	showClass = document.querySelector(".site");
searchButton.addEventListener("click", function () {
	showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
	showClass.classList.remove("showsearch");
});

//show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-head"),
	dptTrigger = document.querySelector(".dpt-cat .dpt-trigger"),
	dptClass = document.querySelector(".site");
if (dptButton) {
	// Click functionality
	dptButton.addEventListener("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		dptClass.classList.toggle("showdpt");
	});
	
	// Also handle click on the trigger link
	if (dptTrigger) {
		dptTrigger.addEventListener("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			dptClass.classList.toggle("showdpt");
		});
	}
	
	// Hover functionality for desktop
	dptButton.addEventListener("mouseenter", function () {
		dptClass.classList.add("showdpt");
	});
	
	const dptCat = document.querySelector(".dpt-cat");
	if (dptCat) {
		dptCat.addEventListener("mouseleave", function () {
			dptClass.classList.remove("showdpt");
		});
	}
}

// Also handle clicks on the dpt-cat container to close menu when clicking outside
document.addEventListener("click", function(e) {
	if (!e.target.closest(".dpt-cat") && document.querySelector(".site").classList.contains("showdpt")) {
		document.querySelector(".site").classList.remove("showdpt");
	}
});

//product image slider
var productThumb = new Swiper(".small-image", {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		481: {
			spaceBetween: 32,
		},
	},
});
var productBig = new Swiper(".big-image", {
	loop: true,
	autoHeight: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: productThumb,
	},
});

//stock products bar width percentage
var stocks = document.querySelectorAll(".products .stock");
for (let x = 0; x < stocks.length; x++) {
	let stock = stocks[x].dataset.stock,
		available = stocks[x].querySelector(".qty-available").innerHTML,
		sold = stocks[x].querySelector(".qty-sold").innerHTML,
		percent = (sold * 100) / stock;

	stocks[x].querySelector(".available").style.width = percent + "%";
}

//show cart on click
const divtoShow = ".mini-cart";
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector(".cart-trigger");

if (divTrigger && divPopup) {
	divTrigger.addEventListener("click", () => {
		setTimeout(() => {
			if (!divPopup.classList.contains("show")) {
				divPopup.classList.add("show");
			}
		}, 250);
	});
}

//close by click outside
if (divPopup) {
	document.addEventListener("click", (e) => {
		const isClosest = e.target.closest(divtoShow);
		if (!isClosest && divPopup.classList.contains("show")) {
			divPopup.classList.remove("show");
		}
	});
}

//show modal on load
window.onload = function () {
	document.querySelector(".site").classList.toggle("showmodal");
};
document.querySelector(".modalclose").addEventListener("click", function () {
	document.querySelector(".site").classList.remove("showmodal");
});

// Load products from ProductGenerator
let allProducts = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = null;

function loadProducts() {
    allProducts = productGenerator.getAllProducts();

    // Determine current category based on page
    const path = window.location.pathname;
    if (path.includes('electronics.html')) currentCategory = 'electronics';
    else if (path.includes('beauty.html')) currentCategory = 'beauty';
    else if (path.includes('makeup.html')) currentCategory = 'makeup';
    else if (path.includes('hair-care.html')) currentCategory = 'hair-care';
    else if (path.includes('fragrance.html')) currentCategory = 'fragrance';
    else if (path.includes('tools-accessories.html')) currentCategory = 'tools-accessories';
    else if (path.includes('skin-care.html')) currentCategory = 'skin-care';
    else if (path.includes('foot-hand-care.html')) currentCategory = 'foot-hand-care';
    else if (path.includes('shave-hair-removal.html')) currentCategory = 'shave-hair-removal';
    else if (path.includes('personal-care.html')) currentCategory = 'personal-care';
    else if (path.includes('womens-fashion.html')) currentCategory = 'womens-clothing';
    else if (path.includes('womens-clothing.html')) currentCategory = 'womens-clothing';
    else if (path.includes('womens-shoes.html')) currentCategory = 'womens-shoes';
    else if (path.includes('womens-jewelry.html')) currentCategory = 'womens-jewelry';
    else if (path.includes('womens-watches.html')) currentCategory = 'womens-watches';
    else if (path.includes('womens-handbags.html')) currentCategory = 'womens-handbags';
    else if (path.includes('womens-accessories.html')) currentCategory = 'womens-accessories';
    else if (path.includes('mens-fashion.html')) currentCategory = 'mens-clothing';
    else if (path.includes('home-kitchen.html')) currentCategory = 'home-kitchen';
    // Home & Kitchen subcategories
    else if (path.includes('kitchen.html')) currentCategory = 'kitchen';
    else if (path.includes('dining-room.html')) currentCategory = 'dining-room';
    else if (path.includes('pantry.html')) currentCategory = 'pantry';
    else if (path.includes('great-room.html')) currentCategory = 'great-room';
    else if (path.includes('breakfast-nook.html')) currentCategory = 'breakfast-nook';
    else if (path.includes('living-room.html')) currentCategory = 'living-room';
    else if (path.includes('family-room.html')) currentCategory = 'family-room';
    else if (path.includes('sunroom.html')) currentCategory = 'sunroom';
    else if (path.includes('bathroom.html')) currentCategory = 'bathroom';
    else if (path.includes('powder-room.html')) currentCategory = 'powder-room';
    else if (path.includes('bedroom.html')) currentCategory = 'bedroom';
    else if (path.includes('storage-closet.html')) currentCategory = 'storage-closet';
    else if (path.includes('baby-kids.html')) currentCategory = 'baby-kids';
    else if (path.includes('laundry.html')) currentCategory = 'laundry';
    else if (path.includes('garage.html')) currentCategory = 'garage';
    else if (path.includes('mudroom.html')) currentCategory = 'mudroom';
    else if (path.includes('landscape.html')) currentCategory = 'landscape';
    else if (path.includes('patio.html')) currentCategory = 'patio';
    else if (path.includes('deck.html')) currentCategory = 'deck';
    else if (path.includes('pool.html')) currentCategory = 'pool';
    else if (path.includes('backyard.html')) currentCategory = 'backyard';
    else if (path.includes('porch.html')) currentCategory = 'porch';
    else if (path.includes('exterior.html')) currentCategory = 'exterior';
    else if (path.includes('outdoor-kitchen.html')) currentCategory = 'outdoor-kitchen';
    else if (path.includes('front-yard.html')) currentCategory = 'front-yard';
    else if (path.includes('driveway.html')) currentCategory = 'driveway';
    else if (path.includes('poolhouse.html')) currentCategory = 'poolhouse';
    else if (path.includes('sports.html')) currentCategory = 'footwear'; // map sports to footwear
    else if (path.includes('girls-fashion.html')) currentCategory = 'womens-clothing'; // map to women
    else if (path.includes('boys-fashion.html')) currentCategory = 'mens-clothing'; // map to men
    else if (path.includes('health-household.html')) currentCategory = 'health-household';
    else if (path.includes('pet-supplies.html')) currentCategory = 'pet-supplies';
    else if (path.includes('best-seller.html')) currentCategory = 'best-seller';
    else currentCategory = null; // for other pages

    renderProducts();
    updateCartDisplay();
}

function renderProducts() {
    let productsToShow = currentCategory ? productGenerator.getProductsByCategory(currentCategory) : productGenerator.getAllProducts();

    // If no products for category, show all or sample
    if (productsToShow.length === 0 && currentCategory) {
        productsToShow = productGenerator.getAllProducts().slice(0, 8); // fallback
    }
    
    // Render featured products
    const featuredContainer = document.querySelector('.products.main.flexwrap');
    if (featuredContainer) {
        featuredContainer.innerHTML = '';
        productsToShow.slice(0, 12).forEach(product => {
            const productHTML = `
                <div class="item">
                    <div class="media">
                        <div class="thumbnail object-cover">
                            <a href="pages/page-single.html?id=${product.id}">
                                <img src="${product.image}" alt="${product.title}">
                            </a>
                        </div>
                        <div class="hoverable">
                            <ul>
                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                <li><a href="#" onclick="addToCart(${product.id})"><i class="ri-eye-line"></i></a></li>
                                <li><a href="#" onclick="addToCart(${product.id})"><i class="ri-shopping-cart-line"></i></a></li>
                            </ul>
                        </div>
                        <div class="discount circle flexcenter"><span>25%</span></div>
                    </div>
                    <div class="content">
                        <div class="rating">
                            <div class="stars"></div>
                            <span class="mini-text">(${product.rating.count})</span>
                        </div>
                        <h3><a href="pages/page-single.html?id=${product.id}">${product.title}</a></h3>
                        <div class="price">
                            <span class="current">$${product.price}</span>
                            <span class="normal mini-text">$300</span>
                        </div>
                        <div class="stock mini-text">
                            <div class="qty">
                                <span class="qty-available">${Math.floor(Math.random() * 50) + 10}</span>
                                <span class="qty-sold">${Math.floor(Math.random() * 10)}</span>
                            </div>
                            <div class="bar">
                                <div class="available"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            featuredContainer.innerHTML += productHTML;
        });
    }

    // Render trending products
    const trendingContainer = document.querySelector('.row.products.big');
    if (trendingContainer) {
        trendingContainer.innerHTML = '';
        allProducts.slice(8, 12).forEach(product => {
            const productHTML = `
                <div class="item">
                    <div class="media">
                        <div class="thumbnail object-cover">
                            <a href="pages/page-single.html?id=${product.id}">
                                <img src="${product.image}" alt="${product.title}">
                            </a>
                        </div>
                        <div class="hoverable">
                            <ul>
                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                <li><a href="#" onclick="addToCart(${product.id})"><i class="ri-eye-line"></i></a></li>
                                <li><a href="#" onclick="addToCart(${product.id})"><i class="ri-shopping-cart-line"></i></a></li>
                            </ul>
                        </div>
                        <div class="discount circle flexcenter"><span>25%</span></div>
                    </div>
                    <div class="content">
                        <h3><a href="pages/page-single.html?id=${product.id}">${product.title}</a></h3>
                        <div class="price">
                            <span class="current">$${product.price}</span>
                            <span class="normal mini-text">$300</span>
                        </div>
                        <div class="stock mini-text">
                            <div class="qty">
                                <span class="qty-available">${Math.floor(Math.random() * 50) + 10}</span>
                                <span class="qty-sold">${Math.floor(Math.random() * 10)}</span>
                            </div>
                            <div class="bar">
                                <div class="available"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            trendingContainer.innerHTML += productHTML;
        });
    }

    // Render mini products
    const miniContainers = document.querySelectorAll('.row.products.mini');
    miniContainers.forEach((container, index) => {
        container.innerHTML = '';
        const start = 12 + index * 4;
        allProducts.slice(start, start + 4).forEach(product => {
            const productHTML = `
                <div class="item">
                    <div class="media">
                        <div class="thumbnail object-cover">
                            <a href="pages/page-single.html?id=${product.id}">
                                <img src="${product.image}" alt="${product.title}">
                            </a>
                        </div>
                        <div class="hoverable">
                            <ul>
                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                <li><a href="#" onclick="addToCart(${product.id})"><i class="ri-eye-line"></i></a></li>
                                <li><a href="#" onclick="addToCart(${product.id})"><i class="ri-shopping-cart-line"></i></a></li>
                            </ul>
                        </div>
                        <div class="discount circle flexcenter"><span>25%</span></div>
                    </div>
                    <div class="content">
                        <h3><a href="pages/page-single.html?id=${product.id}">${product.title}</a></h3>
                        <div class="price">
                            <span class="current">$${product.price}</span>
                            <span class="normal mini-text">$300</span>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += productHTML;
        });
    });

    // Update stock bars
    updateStockBars();
}

function addToCart(productId) {
    if (cartManager.addToCart(productId)) {
        updateCartDisplay();
        alert('Product added to cart!');
    }
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cartManager.getItemCount();
    }

    const miniCart = document.querySelector('.mini-cart .products');
    if (miniCart) {
        miniCart.innerHTML = '';
        const cartItems = cartManager.getCartItems();
        cartItems.forEach(item => {
            const itemHTML = `
                <div class="item">
                    <div class="thumbnail object-cover">
                        <a href="pages/page-single.html?id=${item.id}"><img src="${item.image}" alt="${item.title}"></a>
                    </div>
                    <div class="item-content">
                        <p><a href="pages/page-single.html?id=${item.id}">${item.title}</a></p>
                        <span class="price">$${item.price}</span>
                        <span class="qty">Qty: ${item.quantity}</span>
                    </div>
                </div>
            `;
            miniCart.innerHTML += itemHTML;
        });
    }
}

function updateStockBars() {
    var stocks = document.querySelectorAll(".products .stock");
    for (let x = 0; x < stocks.length; x++) {
        let stock = stocks[x].dataset.stock,
            available = stocks[x].querySelector(".qty-available").innerHTML,
            sold = stocks[x].querySelector(".qty-sold").innerHTML,
            percent = (sold * 100) / stock;

        stocks[x].querySelector(".available").style.width = percent + "%";
    }
}

// Initialize
loadProducts();

function renderSingleProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        const product = productGenerator.getProductById(productId);
        if (product) {
            // Update title
            document.title = product.title + ' - Shop.me';

            // Update breadcrumb
            const breadcrumb = document.querySelector('.breadcrumb ul');
            if (breadcrumb) {
                breadcrumb.innerHTML = `
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">${product.category}</a></li>
                    <li>${product.title}</li>
                `;
            }

            // Update images (using the same image for now)
            const bigImage = document.querySelector('.big-image .swiper-wrapper');
            if (bigImage) {
                bigImage.innerHTML = `
                    <div class="image-show swiper-slide">
                        <a data-fslightbox href="${product.image}"><img src="${product.image}" alt="${product.title}"></a>
                    </div>
                `;
            }

            const smallImage = document.querySelector('.small-image .swiper-wrapper');
            if (smallImage) {
                smallImage.innerHTML = `
                    <li class="thumbnail-show swiper-slide">
                        <img src="${product.image}" alt="${product.title}">
                    </li>
                `;
            }

            // Update product info
            const productTitle = document.querySelector('.single-product h1');
            if (productTitle) productTitle.textContent = product.title;

            const rating = document.querySelector('.rating .mini-text');
            if (rating) rating.textContent = `(${product.rating.count} reviews)`;

            const currentPrice = document.querySelector('.price .current');
            if (currentPrice) currentPrice.textContent = `$${product.price}`;

            const description = document.querySelector('.content p');
            if (description) description.textContent = product.description;

            // Update add to cart button
            const addToCartBtn = document.querySelector('.primary-button');
            if (addToCartBtn) {
                addToCartBtn.onclick = () => addToCart(productId);
            }
        }
    }
}

// Call renderSingleProduct if on single page
if (window.location.pathname.includes('pages/page-single.html')) {
    // Wait for products to load
    setTimeout(renderSingleProduct, 1000);
}

function renderCart() {
    const cartItems = cartManager.getCartItems();
    const cartTable = document.querySelector('#cart-table tbody');
    if (cartTable) {
        cartTable.innerHTML = '';
        cartItems.forEach(item => {
            const total = item.price * item.quantity;
            const rowHTML = `
                <tr>
                    <td class="thumbnail-img">
                        <a href="page-single.html?id=${item.id}">
                            <img src="${item.image}" alt="${item.title}">
                        </a>
                    </td>
                    <td class="name-pr">
                        <a href="page-single.html?id=${item.id}">${item.title}</a>
                    </td>
                    <td class="price-pr">
                        <span>$${item.price}</span>
                    </td>
                    <td class="quantity-box">
                        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', this.value)">
                    </td>
                    <td class="total-pr">
                        <span>$${total.toFixed(2)}</span>
                    </td>
                    <td class="remove-pr">
                        <a href="#" onclick="removeFromCart('${item.id}')"><i class="ri-delete-bin-line"></i></a>
                    </td>
                </tr>
            `;
            cartTable.innerHTML += rowHTML;
        });

        // Update totals using cartManager
        const summary = cartManager.getCartSummary();
        const subtotalEl = document.querySelector('.cart-summary .subtotal span');
        if (subtotalEl) subtotalEl.textContent = `$${summary.subtotal}`;

        const totalEl = document.querySelector('.cart-total span');
        if (totalEl) totalEl.textContent = `$${summary.total}`;
    }
}

function updateQuantity(productId, quantity) {
    cartManager.updateQuantity(productId, parseInt(quantity));
    updateCartDisplay();
    renderCart();
}

function removeFromCart(productId) {
    cartManager.removeFromCart(productId);
    updateCartDisplay();
    renderCart();
}

// Call renderCart if on cart page
if (window.location.pathname.includes('pages/page-cart.html')) {
    setTimeout(renderCart, 100);
}

function renderCheckout() {
    const orderSummary = document.querySelector('.summary-order .products.mini');
    if (orderSummary) {
        orderSummary.innerHTML = '';
        cart.forEach(item => {
            const itemHTML = `
                <li class="item">
                    <div class="thumbnail object-cover">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="item-content">
                        <p>${item.title}</p>
                        <span class="price">
                            <span>$${item.price}</span>
                            <span>x ${item.quantity}</span>
                        </span>
                    </div>
                </li>
            `;
            orderSummary.innerHTML += itemHTML;
        });
    }

    // Update totals
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = 0; // No discount for now
    const shipping = 10;
    const total = subtotal - discount + shipping;

    const summaryTotals = document.querySelector('.summary-totals ul');
    if (summaryTotals) {
        summaryTotals.innerHTML = `
            <li>
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </li>
            <li>
                <span>Discount</span>
                <span>-$${discount.toFixed(2)}</span>
            </li>
            <li>
                <span>Shipping: Flat</span>
                <span>$${shipping.toFixed(2)}</span>
            </li>
            <li>
                <span>Total</span>
                <strong>$${total.toFixed(2)}</strong>
            </li>
        `;
    }
}

// Call renderCheckout if on checkout page
if (window.location.pathname.includes('pages/page-checkout.html')) {
    setTimeout(renderCheckout, 100);
}

// AI Support Chatbot
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Check if chatbot elements exist
    if (!chatbotToggle || !chatbotContainer || !chatbotClose || !chatbotInput || !chatbotSend || !chatbotMessages) {
        return; // Exit if chatbot elements don't exist on this page
    }

    let isOpen = false;

    // Toggle chatbot
    chatbotToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        chatbotContainer.classList.toggle('active', isOpen);
        if (isOpen && chatbotMessages.children.length === 1) {
            // Focus input when opened
            setTimeout(() => chatbotInput.focus(), 300);
        }
    });

    // Close chatbot
    chatbotClose.addEventListener('click', () => {
        isOpen = false;
        chatbotContainer.classList.remove('active');
    });

    // Send message
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Quick replies
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-reply')) {
            const reply = e.target.dataset.reply;
            handleQuickReply(reply);
        }
    });

    function sendMessage() {
        const text = chatbotInput.value.trim();
        if (text) {
            addMessage('user', text);
            chatbotInput.value = '';
            processUserMessage(text);
        }
    }

    function handleQuickReply(reply) {
        let message = '';
        switch (reply) {
            case 'help':
                message = 'I need help navigating the website';
                break;
            case 'products':
                message = 'Help me find products';
                break;
            case 'cart':
                message = 'I need help with my cart';
                break;
            case 'support':
                message = 'I need customer support';
                break;
        }
        addMessage('user', message);
        processUserMessage(message);
    }

    function addMessage(sender, text, showQuickReplies = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        avatarDiv.innerHTML = sender === 'bot' ? '<i class="ri-robot-line"></i>' : '<i class="ri-user-line"></i>';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        const textP = document.createElement('p');
        textP.textContent = text;
        contentDiv.appendChild(textP);

        if (showQuickReplies && sender === 'bot') {
            const quickRepliesDiv = document.createElement('div');
            quickRepliesDiv.className = 'quick-replies';

            const replies = getContextualQuickReplies(text);
            replies.forEach(reply => {
                const button = document.createElement('button');
                button.className = 'quick-reply';
                button.textContent = reply.text;
                button.dataset.reply = reply.action;
                quickRepliesDiv.appendChild(button);
            });

            contentDiv.appendChild(quickRepliesDiv);
        }

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function processUserMessage(message) {
        // Show typing indicator
        showTypingIndicator();

        // Simulate AI processing time
        setTimeout(() => {
            hideTypingIndicator();
            const response = generateAIResponse(message);
            addMessage('bot', response.response, response.showQuickReplies);
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing';
        typingDiv.id = 'typing-indicator';

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        avatarDiv.innerHTML = '<i class="ri-robot-line"></i>';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        const typingP = document.createElement('p');
        typingP.innerHTML = '<span class="typing-dots"><span></span><span></span><span></span></span>';
        contentDiv.appendChild(typingP);

        typingDiv.appendChild(avatarDiv);
        typingDiv.appendChild(contentDiv);
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Navigation help
        if (lowerMessage.includes('navigation') || lowerMessage.includes('find') || lowerMessage.includes('browse') || lowerMessage.includes('categories')) {
            return {
                response: "I'd be happy to help you navigate! You can browse our products by category using the menu at the top. We have sections for Electronics, Beauty, Fashion, Home & Kitchen, and more. Is there a specific category you're interested in?",
                showQuickReplies: true
            };
        }

        // Product search
        if (lowerMessage.includes('product') || lowerMessage.includes('item') || lowerMessage.includes('search') || lowerMessage.includes('looking for')) {
            return {
                response: "Great! You can search for products using the search bar at the top of the page, or browse by category. We have thousands of products across electronics, clothing, beauty, home goods, and more. What type of product are you looking for?",
                showQuickReplies: false
            };
        }

        // Cart help
        if (lowerMessage.includes('cart') || lowerMessage.includes('basket') || lowerMessage.includes('checkout') || lowerMessage.includes('buy')) {
            const cartCount = cartManager.getItemCount();
            if (cartCount > 0) {
                return {
                    response: `I see you have ${cartCount} item${cartCount > 1 ? 's' : ''} in your cart! You can view your cart by clicking the cart icon in the top right, or proceed to checkout. Would you like me to help you with anything specific about your cart?`,
                    showQuickReplies: false
                };
            } else {
                return {
                    response: "Your cart is currently empty. Browse our products and click 'Add to Cart' to get started! We offer free shipping on orders over $50.",
                    showQuickReplies: true
                };
            }
        }

        // Order and shipping
        if (lowerMessage.includes('order') || lowerMessage.includes('shipping') || lowerMessage.includes('delivery') || lowerMessage.includes('track')) {
            return {
                response: "For order status and tracking, please sign in to your account and check your order history. Standard shipping takes 3-5 business days, and we offer free shipping on orders over $50. Express shipping is available for $9.99.",
                showQuickReplies: false
            };
        }

        // Returns and refunds
        if (lowerMessage.includes('return') || lowerMessage.includes('refund') || lowerMessage.includes('exchange')) {
            return {
                response: "We offer a 30-day return policy on most items. Returns are free for defective items or our errors. For other returns, there's a small fee. Please contact our support team to initiate a return.",
                showQuickReplies: false
            };
        }

        // Account help
        if (lowerMessage.includes('account') || lowerMessage.includes('login') || lowerMessage.includes('password') || lowerMessage.includes('sign in')) {
            return {
                response: "You can sign in or create an account using the 'Sign In' link in the top right corner. If you've forgotten your password, use the 'Forgot Password' link on the sign-in page.",
                showQuickReplies: false
            };
        }

        // Customer support
        if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('contact') || lowerMessage.includes('customer service')) {
            return {
                response: "I'm here to help! You can also reach our customer support team at support@shop.me or call us at 1-800-SHOP-ME. Our support hours are Monday-Friday, 9 AM - 6 PM EST.",
                showQuickReplies: false
            };
        }

        // Pricing and payment
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
            return {
                response: "We accept all major credit cards, PayPal, and Apple Pay. Prices are clearly displayed on each product page, and we offer competitive pricing with frequent discounts and sales.",
                showQuickReplies: false
            };
        }

        // Greetings
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon')) {
            return {
                response: "Hello! Welcome to Shop.me! I'm your AI shopping assistant. I can help you find products, navigate the site, assist with your cart, or answer any questions about our services. How can I help you today?",
                showQuickReplies: true
            };
        }

        // Goodbye
        if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('thank you') || lowerMessage.includes('thanks')) {
            return {
                response: "You're welcome! Thank you for shopping with Shop.me. Have a great day! If you need anything else, just click the chat icon anytime.",
                showQuickReplies: false
            };
        }

        // Default response
        return {
            response: "I'm here to help with shopping assistance, product recommendations, order support, and general questions about Shop.me. Could you please tell me more specifically what you're looking for help with?",
            showQuickReplies: true
        };
    }

    function getContextualQuickReplies(message) {
        const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes('navigation') || lowerMessage.includes('find') || lowerMessage.includes('browse')) {
            return [
                { text: 'Show me Electronics', action: 'electronics' },
                { text: 'Beauty Products', action: 'beauty' },
                { text: 'Fashion Items', action: 'fashion' },
                { text: 'Home & Kitchen', action: 'home' }
            ];
        }

        if (lowerMessage.includes('cart') || lowerMessage.includes('buy')) {
            return [
                { text: 'View Cart', action: 'view-cart' },
                { text: 'Checkout Help', action: 'checkout' },
                { text: 'Shipping Info', action: 'shipping' },
                { text: 'Return Policy', action: 'returns' }
            ];
        }

        return [
            { text: 'Help navigating', action: 'help' },
            { text: 'Find products', action: 'products' },
            { text: 'Cart assistance', action: 'cart' },
            { text: 'Contact support', action: 'support' }
        ];
    }
}

// Check authentication for protected pages
authManager.checkAuthForPage();

// Initialize chatbot
initChatbot();

// Enhanced Search with Autocomplete
class SearchAutocomplete {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.suggestionsContainer = document.getElementById('search-suggestions');
        this.searchData = [
            // Categories
            'Fashion', 'Electronics', 'Home & Kitchen', 'Beauty', 'Sports',
            'Pet Supplies', 'Health & Household', 'Books', 'Toys', 'Automotive',

            // Popular Products
            'Wireless Headphones', 'Smart Watch', 'Coffee Maker', 'Blender',
            'Running Shoes', 'Dress Shirt', 'Laptop', 'Smartphone', 'Camera',
            'Kitchen Knife Set', 'Yoga Mat', 'Basketball', 'Pet Food', 'Vitamins',

            // Brands (sample)
            'Nike', 'Adidas', 'Apple', 'Samsung', 'Sony', 'KitchenAid',
            'Levi\'s', 'H&M', 'Zara', 'Under Armour'
        ];

        this.init();
    }

    init() {
        if (!this.searchInput) return;

        this.searchInput.addEventListener('input', (e) => {
            this.handleInput(e.target.value);
        });

        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.length > 0) {
                this.showSuggestions(this.filterSuggestions(this.searchInput.value));
            }
        });

        this.searchInput.addEventListener('blur', () => {
            // Delay hiding to allow clicking on suggestions
            setTimeout(() => {
                this.hideSuggestions();
            }, 150);
        });

        // Handle keyboard navigation
        this.searchInput.addEventListener('keydown', (e) => {
            this.handleKeydown(e);
        });
    }

    handleInput(value) {
        if (value.length === 0) {
            this.hideSuggestions();
            return;
        }

        const suggestions = this.filterSuggestions(value);
        this.showSuggestions(suggestions);
    }

    filterSuggestions(query) {
        const lowerQuery = query.toLowerCase();
        return this.searchData
            .filter(item => item.toLowerCase().includes(lowerQuery))
            .slice(0, 8); // Limit to 8 suggestions
    }

    showSuggestions(suggestions) {
        if (suggestions.length === 0) {
            this.hideSuggestions();
            return;
        }

        this.suggestionsContainer.innerHTML = '';
        suggestions.forEach((suggestion, index) => {
            const item = document.createElement('div');
            item.className = 'search-suggestion-item';
            item.textContent = suggestion;
            item.dataset.index = index;

            item.addEventListener('click', () => {
                this.selectSuggestion(suggestion);
            });

            this.suggestionsContainer.appendChild(item);
        });

        this.suggestionsContainer.classList.add('show');
    }

    hideSuggestions() {
        this.suggestionsContainer.classList.remove('show');
    }

    selectSuggestion(suggestion) {
        this.searchInput.value = suggestion;
        this.hideSuggestions();
        // Here you could trigger a search or redirect
        this.performSearch(suggestion);
    }

    performSearch(query) {
        // For now, just log the search. In a real implementation,
        // this would redirect to search results page

        // You could redirect to a search results page:
        // window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }

    handleKeydown(e) {
        const items = this.suggestionsContainer.querySelectorAll('.search-suggestion-item');
        if (items.length === 0) return;

        let currentIndex = -1;
        const activeItem = this.suggestionsContainer.querySelector('.search-suggestion-item.active');
        if (activeItem) {
            currentIndex = parseInt(activeItem.dataset.index);
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = Math.min(currentIndex + 1, items.length - 1);
                this.highlightSuggestion(currentIndex);
                break;
            case 'ArrowUp':
                e.preventDefault();
                currentIndex = Math.max(currentIndex - 1, -1);
                this.highlightSuggestion(currentIndex);
                break;
            case 'Enter':
                e.preventDefault();
                if (currentIndex >= 0) {
                    const suggestion = items[currentIndex].textContent;
                    this.selectSuggestion(suggestion);
                } else {
                    this.performSearch(this.searchInput.value);
                }
                break;
            case 'Escape':
                this.hideSuggestions();
                this.searchInput.blur();
                break;
        }
    }

    highlightSuggestion(index) {
        const items = this.suggestionsContainer.querySelectorAll('.search-suggestion-item');
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}

// Initialize search autocomplete when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SearchAutocomplete();
});