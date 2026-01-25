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
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
	dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
	dptClass.classList.toggle("showdpt");
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

divTrigger.addEventListener("click", () => {
	setTimeout(() => {
		if (!divPopup.classList.contains("show")) {
			divPopup.classList.add("show");
		}
	}, 250);
});

//close by click outside
document.addEventListener("click", (e) => {
	const isClosest = e.target.closest(divtoShow);
	if (!isClosest && divPopup.classList.contains("show")) {
		divPopup.classList.remove("show");
	}
});

//show modal on load
window.onload = function () {
	document.querySelector(".site").classList.toggle("showmodal");
};
document.querySelector(".modalclose").addEventListener("click", function () {
	document.querySelector(".site").classList.remove("showmodal");
});

// Fetch products from Fake Store API
let allProducts = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = null;

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        allProducts = await response.json();
        
        // Determine current category based on page
        const path = window.location.pathname;
        if (path.includes('electronics.html')) currentCategory = 'electronics';
        else if (path.includes('beauty.html')) currentCategory = 'jewelery';
        else if (path.includes('womens-fashion.html')) currentCategory = "women's clothing";
        else if (path.includes('mens-fashion.html')) currentCategory = "men's clothing";
        else if (path.includes('all-departments.html')) currentCategory = null; // all
        else currentCategory = null; // for other pages or non-API categories
        
        renderProducts();
        updateCartDisplay();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function renderProducts() {
    let productsToShow = currentCategory ? allProducts.filter(p => p.category === currentCategory) : allProducts;
    
    // If no products for category, show all or sample
    if (productsToShow.length === 0 && currentCategory) {
        productsToShow = allProducts.slice(0, 8); // fallback
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
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        alert('Product added to cart!');
    }
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    const miniCart = document.querySelector('.mini-cart .products');
    if (miniCart) {
        miniCart.innerHTML = '';
        cart.forEach(item => {
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
fetchProducts();

function renderSingleProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    if (productId && allProducts.length > 0) {
        const product = allProducts.find(p => p.id === productId);
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
    const cartTable = document.querySelector('#cart-table tbody');
    if (cartTable) {
        cartTable.innerHTML = '';
        let subtotal = 0;
        cart.forEach((item, index) => {
            const total = item.price * item.quantity;
            subtotal += total;
            const rowHTML = `
                <tr>
                    <td class="thumbnail-img">
                        <a href="pages/page-single.html?id=${item.id}">
                            <img src="${item.image}" alt="${item.title}">
                        </a>
                    </td>
                    <td class="name-pr">
                        <a href="pages/page-single.html?id=${item.id}">${item.title}</a>
                    </td>
                    <td class="price-pr">
                        <span>$${item.price}</span>
                    </td>
                    <td class="quantity-box">
                        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                    </td>
                    <td class="total-pr">
                        <span>$${total.toFixed(2)}</span>
                    </td>
                    <td class="remove-pr">
                        <a href="#" onclick="removeFromCart(${index})"><i class="ri-delete-bin-line"></i></a>
                    </td>
                </tr>
            `;
            cartTable.innerHTML += rowHTML;
        });

        // Update totals
        const subtotalEl = document.querySelector('.cart-summary .subtotal span');
        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

        const totalEl = document.querySelector('.cart-total span');
        if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;
    }
}

function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
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
    // Create chatbot HTML
    const chatbotHTML = `
        <div id="chatbot-widget">
            <div id="chatbot-button">
                <i class="ri-chat-1-line"></i>
            </div>
            <div id="chatbot-container" style="display: none;">
                <div id="chatbot-header">
                    <span>AI Support</span>
                    <button id="chatbot-close">&times;</button>
                </div>
                <div id="chatbot-messages"></div>
                <div id="chatbot-input-container">
                    <input type="text" id="chatbot-input" placeholder="Ask me anything...">
                    <button id="chatbot-send"><i class="ri-send-plane-line"></i></button>
                </div>
            </div>
        </div>
    `;

    // Append to body
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        #chatbot-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            font-family: Arial, sans-serif;
        }
        #chatbot-button {
            width: 60px;
            height: 60px;
            background: #007bff;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: all 0.3s;
        }
        #chatbot-button:hover {
            background: #0056b3;
            transform: scale(1.1);
        }
        #chatbot-container {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 350px;
            height: 500px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        #chatbot-header {
            background: #007bff;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        #chatbot-messages {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
            background: #f8f9fa;
        }
        .message {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 10px;
            max-width: 80%;
        }
        .message.user {
            background: #007bff;
            color: white;
            align-self: flex-end;
            margin-left: auto;
        }
        .message.bot {
            background: white;
            color: black;
            border: 1px solid #ddd;
        }
        #chatbot-input-container {
            display: flex;
            padding: 15px;
            background: white;
            border-top: 1px solid #ddd;
        }
        #chatbot-input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 20px;
            outline: none;
        }
        #chatbot-send {
            background: #007bff;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-left: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #chatbot-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
        }
        @media (max-width: 480px) {
            #chatbot-container {
                width: 90vw;
                height: 70vh;
                bottom: 80px;
                right: 5vw;
            }
        }
    `;
    document.head.appendChild(style);

    // Event listeners
    const button = document.getElementById('chatbot-button');
    const container = document.getElementById('chatbot-container');
    const close = document.getElementById('chatbot-close');
    const input = document.getElementById('chatbot-input');
    const send = document.getElementById('chatbot-send');
    const messages = document.getElementById('chatbot-messages');

    button.addEventListener('click', () => {
        container.style.display = container.style.display === 'none' ? 'flex' : 'none';
        if (container.style.display === 'flex' && messages.children.length === 0) {
            addMessage('bot', 'Hello! I\'m your AI support assistant. How can I help you today?');
        }
    });

    close.addEventListener('click', () => {
        container.style.display = 'none';
    });

    send.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const text = input.value.trim();
        if (text) {
            addMessage('user', text);
            input.value = '';
            // Simulate AI response
            setTimeout(() => {
                const response = getAIResponse(text);
                addMessage('bot', response);
            }, 1000);
        }
    }

    function addMessage(sender, text) {
        const message = document.createElement('div');
        message.className = `message ${sender}`;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }

    function getAIResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Simple keyword-based responses (simulating AI)
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return 'Hello! Welcome to Shop.me. How can I assist you today?';
        } else if (lowerMessage.includes('product') || lowerMessage.includes('item')) {
            return 'We have a wide range of products including electronics, clothing, and home goods. You can browse our categories or search for specific items!';
        } else if (lowerMessage.includes('order') || lowerMessage.includes('shipping')) {
            return 'For order inquiries, please check your account dashboard. Shipping usually takes 3-5 business days.';
        } else if (lowerMessage.includes('return') || lowerMessage.includes('refund')) {
            return 'Our return policy allows returns within 30 days. Please contact support for assistance.';
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return 'Prices are listed on each product page. We offer competitive pricing and occasional discounts!';
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
            return 'You can reach our support team at support@shop.me or call us at 1-800-SHOP-ME.';
        } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
            return 'Goodbye! Have a great day shopping with us!';
        } else {
            return 'I\'m here to help with any questions about our products, orders, or services. Could you please provide more details?';
        }
    }
}

// Initialize chatbot
initChatbot();