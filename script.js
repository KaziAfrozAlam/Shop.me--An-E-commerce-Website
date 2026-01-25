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

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        allProducts = await response.json();
        renderProducts();
        updateCartDisplay();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function renderProducts() {
    // Render featured products
    const featuredContainer = document.querySelector('.products.main.flexwrap');
    if (featuredContainer) {
        featuredContainer.innerHTML = '';
        allProducts.slice(0, 8).forEach(product => {
            const productHTML = `
                <div class="item">
                    <div class="media">
                        <div class="thumbnail object-cover">
                            <a href="page-single.html?id=${product.id}">
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
                        <h3><a href="page-single.html?id=${product.id}">${product.title}</a></h3>
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
                            <a href="page-single.html?id=${product.id}">
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
                        <h3><a href="page-single.html?id=${product.id}">${product.title}</a></h3>
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
                            <a href="page-single.html?id=${product.id}">
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
                        <h3><a href="page-single.html?id=${product.id}">${product.title}</a></h3>
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
                        <a href="page-single.html?id=${item.id}"><img src="${item.image}" alt="${item.title}"></a>
                    </div>
                    <div class="item-content">
                        <p><a href="page-single.html?id=${item.id}">${item.title}</a></p>
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
if (window.location.pathname.includes('page-single.html')) {
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
if (window.location.pathname.includes('page-cart.html')) {
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
if (window.location.pathname.includes('page-checkout.html')) {
    setTimeout(renderCheckout, 100);
}