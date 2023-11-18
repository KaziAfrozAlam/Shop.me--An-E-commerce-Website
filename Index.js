const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop.me</title>
    <link rel="icon" href="assets/logo.png" type="image/s.icon">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
    
</head>

<body>
    <div id="page" class="site page-home">
        <aside class="site-off desktop-hide">
            <div class="off-canvas">
                <div class="canvas-head flexitem">
                    <div class="logo"><a href="/"><img src="assets/logo.png" alt=""></a></div>
                    <a href="#" class="t-close flexcenter"><i class="ri-close-line"></i></a>
                </div>
                <div class="departments"></div>
                <nav></nav>
                <div class="thetop-nav"></div>
            </div>
        </aside>
        <header>
            <div class="header-top mobile-hide">
                <div class="container">
                    <div class="wrapper flexitem">
                        <div class="left">
                            <ul class="flexitem main-links">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Featured Products</a></li>
                                <li><a href="#">Wishlist</a></li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul class="flexitem main-links">
                                <a href="http://127.0.0.1:5501/Shop.me%20like%20login%20page/register%20and%20login%20form/index_login.html">
                                    <button id="createAccountButton" type="button">Hello<br>Sign in</button>
                                </a>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Order Tracking</a></li>
                                <li><a href="#">USD <span class="icon-small"><i
                                                class="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li class="current"><a href="#">INR</a></li>
                                        <li><a href="#">USD</a></li>
                                        <li><a href="#">EURO</a></li>
                                        <li><a href="#">GBP</a></li>
                                        <li><a href="#">IDR</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">English <span class="icon-small"><i
                                                class="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li class="current"><a href="#">English</a></li>
                                        <li><a href="#">German</a></li>
                                        <li><a href="#">Spanish</a></li>
                                        <li><a href="#">Polish</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header-top -->
            <div class="header-nav">
                <div class="container">
                    <div class="wrapper flexitem">
                        <a href="#" class="trigger desktop-hide"><span class="i ri-menu-2-line"></span></a>
                        <div class="left flexitem">
                            <div class="logo"><a href="/"><img src="assets/logo.png" alt=""></a></div>
                            <nav class="mobile-hide">
                                <ul class="flexitem second-links">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li class="has-child">
                                        <a href="page-category.html">Women
                                            <div class="icon-small"><i class="ri-arrow-down-s-line"></i></div>
                                        </a>
                                        <div class="mega">
                                            <div class="container">
                                                <div class="wrapper">
                                                    <div class="flexcol">
                                                        <div class="row">
                                                            <h4>Women's Clothing</h4>
                                                            <ul>
                                                                <li><a href="#">Dresses</a></li>
                                                                <li><a href="#">Tops & Tees</a></li>
                                                                <li><a href="#">Jackets & Coats</a></li>
                                                                <li><a href="#">Pants & Capris</a></li>
                                                                <li><a href="#">Sweaters</a></li>
                                                                <li><a href="#">Costumes</a></li>
                                                                <li><a href="#">Hoodies & Sweatshirts</a></li>
                                                                <li><a href="#">Pajamas & Robes</a></li>
                                                                <li><a href="#">Shorts</a></li>
                                                                <li><a href="#">Swimwear</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="flexcol">
                                                        <div class="row">
                                                            <h4>Jewelery</h4>
                                                            <ul>
                                                                <li><a href="#">Accessories</a></li>
                                                                <li><a href="#">Bags & Purses</a></li>
                                                                <li><a href="#">Necklaces</a></li>
                                                                <li><a href="#">Rings</a></li>
                                                                <li><a href="#">Earrings</a></li>
                                                                <li><a href="#">Bracelets</a></li>
                                                                <li><a href="#">Body Jewelery</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="flexcol">
                                                        <div class="row">
                                                            <h4>Beauty</h4>
                                                            <ul>
                                                                <li><a href="#">Bath Accessories</a></li>
                                                                <li><a href="#">Makeup & Cosmetics</a></li>
                                                                <li><a href="#">Skin Care</a></li>
                                                                <li><a href="#">Hair Care</a></li>
                                                                <li><a href="#">Essential Oils</a></li>
                                                                <li><a href="#">Fragrances</a></li>
                                                                <li><a href="#">Soaps & Bath Bombs</a></li>
                                                                <li><a href="#">Face Masks & Coverings</a></li>
                                                                <li><a href="#">Spa Kits & Gifts</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="flexcol">
                                                        <div class="row">
                                                            <h4>Top Brands</h4>
                                                            <ul class="women-brands">
                                                                <li><a href="#">Nike</a></li>
                                                                <li><a href="#">Louis Vuitton</a></li>
                                                                <li><a href="#">Hermes</a></li>
                                                                <li><a href="#">Gucci</a></li>
                                                                <li><a href="#">Zalando</a></li>
                                                                <li><a href="#">Tiffany & Co.</a></li>
                                                                <li><a href="#">Zara</a></li>
                                                                <li><a href="#">H&M</a></li>
                                                                <li><a href="#">Cartier</a></li>
                                                                <li><a href="#">Chanel</a></li>
                                                                <li><a href="#">Hurley</a></li>
                                                            </ul>
                                                            <a href="#" class="view-all">View all brands <i
                                                                    class="ri-arrow-right-line"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="flexcol products">
                                                        <div class="row">
                                                            <div class="media">
                                                                <div class="thumbnail object-cover">
                                                                    <a href="#">
                                                                        <img src="assets/products/apparel4.jpg" alt="">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="text-content">
                                                                <h4>Most wanted!</h4>
                                                                <a href="#" class="primary-button">Order Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#">Men</a></li>
                                    <li>
                                        <a href="#">Sports
                                            <div class="fly-item"><span>New!</span></div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="right">
                            <ul class="flexitem second-links">
                                <li class="mobile-hide"><a href="#">
                                        <div class="icon-large"><i class="ri-heart-line"></i></div>
                                        <div class="fly-item"><span class="item-number">0</span></div>
                                    </a></li>
                                <li><a href="#" class="iscart">

                                        <div class="icon-large">
                                            <i class="ri-shopping-cart-line"></i>
                                            <div class="fly-item"><span class="item-number">0</span></div>
                                        </div>

                                        <div class="icon-text">
                                            <div class="mini-text">Total</div>
                                            <div class="cart-total">$0.00</div>
                                        </div>
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header-nav -->

            <div class="header-main mobile-hide">
                <div class="container">
                    <div class="wrapper flexitem">
                        <div class="left">
                            <div class="dpt-cat">
                                <div class="dpt-head">
                                    <div class="main-text">All Departments</div>
                                    <div class="mini-text mobile-hide">Total 1059 Products</div>
                                    <a href="#" class="dpt-trigger mobile-hide">
                                        <i class="ri-menu-3-line ri-xl"></i>
                                    </a>
                                </div>
                                <div class="dpt-menu">
                                    <ul class="second-links">
                                        <li class="has-child beauty">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-bear-smile-line"></i></div>
                                                Beauty
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Makeup</a></li>
                                                <li><a href="#">Skin Care</a></li>
                                                <li><a href="#">Hair Care</a></li>
                                                <li><a href="#">Fragrance</a></li>
                                                <li><a href="#">Foot & Hand Care</a></li>
                                                <li><a href="#">Tools & Accessories</a></li>
                                                <li><a href="#">Shave & Hair Removal</a></li>
                                                <li><a href="#">Personal Care</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-child electronic">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-bluetooth-connect-line"></i></div>
                                                Electronic
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Camera</a></li>
                                                <li><a href="#">Cell Phone</a></li>
                                                <li><a href="#">Computers</a></li>
                                                <li><a href="#">GPS & Navigation</a></li>
                                                <li><a href="#">Headphones</a></li>
                                                <li><a href="#">Home Audio</a></li>
                                                <li><a href="#">Television</a></li>
                                                <li><a href="#">Video Projectors</a></li>
                                                <li><a href="#">Wearable Technology</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-t-shirt-air-line"></i></div>
                                                Women's Fashion
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Clothing</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Jewelry</a></li>
                                                <li><a href="#">Watches</a></li>
                                                <li><a href="#">Handbags</a></li>
                                                <li><a href="#">Accessories</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-shirt-line"></i></div>
                                                Men's Fashion
                                            </a>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-user-5-line"></i></div>
                                                Girl's Fashion
                                            </a>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-user-6-line"></i></div>
                                                Boy's Fashion
                                            </a>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-heart-pulse-line"></i></div>
                                                Health & Household
                                            </a>
                                        </li>

                                        <li class="has-child homekit">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-home-8-line"></i></div>
                                                Home & Kitchen
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <div class="mega">
                                                <div class="flexcol">
                                                    <div class="row">
                                                        <h4><a href="#">Kitchen & Dining</a></h4>
                                                        <ul>
                                                            <li><a href="#">Kitchen</a></li>
                                                            <li><a href="#">Dining Room</a></li>
                                                            <li><a href="#">Pantry</a></li>
                                                            <li><a href="#">Great Room</a></li>
                                                            <li><a href="#">Breakfast Nook</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="row">
                                                        <h4><a href="#">Living</a></h4>
                                                        <ul>
                                                            <li><a href="#">Living Room</a></li>
                                                            <li><a href="#">Family Room</a></li>
                                                            <li><a href="#">Sunroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="flexcol">
                                                    <div class="row">
                                                        <h4><a href="#">Bed & Bath</a></h4>
                                                        <ul>
                                                            <li><a href="#">Bathroom</a></li>
                                                            <li><a href="#">Powder Room</a></li>
                                                            <li><a href="#">Bedroom</a></li>
                                                            <li><a href="#">Storage & Closet </a></li>
                                                            <li><a href="#">Baby & Kids</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="row">
                                                        <h4><a href="#">Utility</a></h4>
                                                        <ul>
                                                            <li><a href="#">Laundry</a></li>
                                                            <li><a href="#">Garage</a></li>
                                                            <li><a href="#">Mudroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="flexcol">
                                                    <div class="row">
                                                        <h4><a href="#">Outdoor</a></h4>
                                                        <ul>
                                                            <li><a href="#">Landscape</a></li>
                                                            <li><a href="#">Patio</a></li>
                                                            <li><a href="#">Deck</a></li>
                                                            <li><a href="#">Pool</a></li>
                                                            <li><a href="#">Backyard</a></li>
                                                            <li><a href="#">Porch</a></li>
                                                            <li><a href="#">Exterior</a></li>
                                                            <li><a href="#">Outdoor Kitchen</a></li>
                                                            <li><a href="#">Front Yard</a></li>
                                                            <li><a href="#">Driveway</a></li>
                                                            <li><a href="#">Poolhouse</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                        </li>

                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-android-line"></i></div>
                                                Pet Supplies
                                            </a>
                                        </li>

                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-basketball-line"></i></div>
                                                Sports
                                            </a>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-shield-star-line"></i></div>
                                                Best Seller
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="search-box">
                                <form action="" class="search">
                                    <span class="icon-large"><i class="ri-search-line"></i></span>
                                    <input type="search" placeholder="Search for products">
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header-main -->

        </header>
        <!-- Header -->
        <main>
            <div class="slider">
                <div class="container">
                    <div class="wrapper">
                        <div class="myslider swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image object-cover">
                                            <img src="assets/slider/slider0.jpg" alt="">
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Shoes Fashion</h4>
                                            <h2><span>Come and Get it!</span><br><span>Brand New Shoes</span></h2>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image object-cover">
                                            <img src="assets/slider/slider1.jpg" alt="">
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Quick Fashion</h4>
                                            <h2><span>Fit Your Wardrobe</span><br><span>With Luxury Items</span></h2>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image object-cover">
                                            <img src="assets/slider/slider2.jpg" alt="">
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Quick Offer</h4>
                                            <h2><span>Wooden Minimal Sofa</span><br><span>Extra 50% off</span></h2>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image object-cover">
                                            <img src="assets/slider/slider3.jpg" alt="">
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Best Deals</h4>
                                            <h2><span>Home Workout Accessories</span><br><span>Push The Limit</span>
                                            </h2>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- slider -->

            <div class="brands">
                <div class="container">
                    <div class="wrapper flexitem">
                        <div class="item">
                            <a href="#">
                                <img src="assets/brands/zara.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <a href="#">
                                <img src="assets/brands/samsung.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <a href="#">
                                <img src="assets/brands/oppo.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <a href="#">
                                <img src="assets/brands/asus.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <a href="#">
                                <img src="assets/brands/hurley.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <a href="#">
                                <img src="assets/brands/dng.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Brands -->

            <div class="trending">
                <div class="container">
                    <div class="wrapper">
                        <div class="sectop flexitem">
                            <h2><span class="circle"></span><span>Trending Products</span></h2>
                        </div>
                        <div class="column">
                            <div class="flexwrap">
                                <div class="row products big">
                                    <div class="item">
                                        <div class="offer">
                                            <p>Offer ends at</p>
                                            <ul class="flexcenter" id="demo">
                                                <li id="days"></li>
                                                <li id="hours"></li>
                                                <li id="minutes"></li>
                                                <li id="seconds"></li>
                                            </ul>
                                        </div>
                                        <div class="media">
                                            <div class="image">
                                                <a href="page-offer.html">
                                                    <img src="assets/products/apparel4.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                                    </li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div class="content">
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="mini-text">(2,548)</span>
                                            </div>
                                            <h3 class="main-links"><a href="#">Happy Sailed Womens Summer Boho
                                                    Floral</a></h3>
                                            <div class="price">
                                                <span class="current">$129.99</span>
                                                <span class="normal mini-text">$189.98</span>
                                            </div>
                                            <div class="stock mini-text">
                                                <div class="qty">
                                                    <span>Stock: <strong class="qty-available">107</strong></span>
                                                    <span>Sold: <strong class="qty-sold">3,459</strong></span>
                                                </div>
                                                <div class="bar">
                                                    <div class="available"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row products mini">
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="assets/products/apparel3.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                                    </li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>32%</span></div>
                                        </div>
                                        <div class="content">
                                            <h3 class="main-links"><a href="#">Black Women's Coat Dress</a></h3>

                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="mini-text">(2,548)</span>
                                            </div>
                                            <div class="price">
                                                <span class="current">$129.99</span>
                                                <span class="normal mini-text">$189.98</span>
                                            </div>
                                            <div class="mini-text">
                                                <p>2975 sold</p>
                                                <p>Free Shipping</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="assets/products/apparel1.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                                    </li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>25%</span></div>
                                        </div>
                                        <div class="content">
                                            <h3 class="main-links"><a href="#">Under Armour Men's Tech</a></h3>

                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="mini-text">(1,955)</span>
                                            </div>
                                            <div class="price">
                                                <span class="current">$56.50</span>
                                                <span class="normal mini-text">$75.50</span>
                                            </div>
                                            <div class="mini-text">
                                                <p>2584 sold</p>
                                                <p>Free Shipping</p>
                                                <p class="stock-danger">Stock: 7 left!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="assets/products/home1.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                                    </li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>37%</span></div>
                                        </div>
                                        <div class="content">
                                            <h3 class="main-links"><a href="#">Vonanda Velvet Sofa Couch, Mid Century
                                                    Modern Craftsmanship</a></h3>

                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="mini-text">(1,559)</span>
                                            </div>
                                            <div class="price">
                                                <span class="current">$469.99</span>
                                                <span class="normal mini-text">$755.99</span>
                                            </div>
                                            <div class="mini-text">
                                                <p>2151 sold</p>
                                                <p>Free Shipping</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="assets/products/electronic3.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                                    </li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>20%</span></div>
                                        </div>
                                        <div class="content">
                                            <h3 class="main-links"><a href="#">Wireless Headphones Over Ear, Bluetooth
                                                    Headphones with Microphone</a></h3>

                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="mini-text">(1,411)</span>
                                            </div>
                                            <div class="price">
                                                <span class="current">$99.98</span>
                                                <span class="normal mini-text">$125.98</span>
                                            </div>
                                            <div class="mini-text">
                                                <p>1843 sold</p>
                                                <p>Free Shipping</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row products mini">
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="assets/products/shoe1.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                                    </li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>32%</span></div>
                                        </div>
                                        <div class="content">
                                            <h3 class="main-links"><a href="#">Men Slip On Shoes Casual with Arch
                                                    Support Insoles</a></h3>
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="mini-text">(2,548)</span>
                                            </div>
                                            <div class="price">
                                                <span class="current">$129.99</span>
                                                <span class="normal mini-text">$189.98</span>
                                            </div>
                                            <div class="mini-text">
                                                <p>2975 sold</p>
                                                <p>Free Shipping</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="assets/products/apparel2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                                    </li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>47%</span></div>
                                        </div>
                                        <div class="content">
                                            <h3 class="main-links"><a href="#">Womens Lightweight Something</a></h3>
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="mini-text">(994)</span>
                                            </div>
                                            <div class="price">
                                                <span class="current">$37.50</span>
                                                <span class="normal mini-text">$45.50</span>
                                            </div>
                                            <div class="mini-text">
                                                <p>1257 sold</p>
                                                <p>Free Shipping</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="assets/products/home2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                                    </li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>44%</span></div>
                                        </div>
                                        <div class="content">
                                            <h3 class="main-links"><a href="#">Dimmable Ceiling Light Modern</a></h3>
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="mini-text">(543)</span>
                                            </div>
                                            <div class="price">
                                                <span class="current">$279.99</span>
                                                <span class="normal mini-text">$499.99</span>
                                            </div>
                                            <div class="mini-text">
                                                <p>995 sold</p>
                                                <p>Free Shipping</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="assets/products/home3.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                                    </li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>18%</span></div>
                                        </div>
                                        <div class="content">
                                            <h3 class="main-links"><a href="#">Modern Storage Cabinet with Doors or
                                                    something</a></h3>
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="mini-text">(335)</span>
                                            </div>
                                            <div class="price">
                                                <span class="current">$129.99</span>
                                                <span class="normal mini-text">$189.98</span>
                                            </div>
                                            <div class="mini-text">
                                                <p>758 sold</p>
                                                <p>Free Shipping</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- trending -->

            <div class="features">
                <div class="container">
                    <div class="wrapper">
                        <div class="column">
                            <div class="sectop flexitem">
                                <h2><span class="circle"></span><span>Featured Products</span></h2>
                                <div class="second-links">
                                    <a href="#" class="view-all">View all<i class="ri-arrow-right-line"></i></a>
                                </div>
                            </div>
                            <div class="products main flexwrap">
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                            <a href="#">
                                                <img src="assets/products/apparel1.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>25%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(1,955)</span>
                                        </div>
                                        <h3><a href="#">Under Armour Men's Tech</a></h3>
                                        <div class="price">
                                            <span class="current">$56.50</span>
                                            <span class="normal mini-text">$75.50</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                            <a href="#">
                                                <img src="assets/products/apparel2.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>17%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(994)</span>
                                        </div>
                                        <h3><a href="#">Women's Lightweight Knit Hoodie Sweater Pullover</a></h3>
                                        <div class="price">
                                            <span class="current">$37.50</span>
                                            <span class="normal mini-text">$45.50</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Polyester, Cotton</li>
                                                <li>Pull On closure</li>
                                                <li>Fashion Personality</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                            <a href="#">
                                                <img src="assets/products/apparel3.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>31%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(3,459)</span>
                                        </div>
                                        <h3><a href="#">Happy Sailed Womens Summer Boho Floral</a></h3>
                                        <div class="price">
                                            <span class="current">$129.99</span>
                                            <span class="normal mini-text">$189.98</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>65% Polyester, 35% Cotton</li>
                                                <li>Imported</li>
                                                <li>Machine Wash</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                            <a href="#">
                                                <img src="assets/products/apparel4.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>35%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(10)</span>
                                        </div>
                                        <h3><a href="#">Womens Summer Boho Floral</a></h3>
                                        <div class="price">
                                            <span class="current">$118.90</span>
                                            <span class="normal mini-text">$189.90</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Polyester, Cotton</li>
                                                <li>Pull On closure</li>
                                                <li>Fashion Personality</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                            <a href="#">
                                                <img src="assets/products/shoe1.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>32%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(2,551)</span>
                                        </div>
                                        <h3><a href="#">Men Slip On Shoes Casual with Arch Support Insoles</a></h3>
                                        <div class="price">
                                            <span class="current">$80.90</span>
                                            <span class="normal mini-text">$119.90</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Polyester, Cotton</li>
                                                <li>Pull On closure</li>
                                                <li>Fashion Personality</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                            <a href="#">
                                                <img src="assets/products/shoe2.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>30%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(1,237)</span>
                                        </div>
                                        <h3><a href="#">Skechers Women's Go Joy Walking Shoe Sneaker</a></h3>
                                        <div class="price">
                                            <span class="current">$45.95</span>
                                            <span class="normal mini-text">$64.95</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Polyester, Cotton</li>
                                                <li>Pull On closure</li>
                                                <li>Fashion Personality</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                            <a href="#">
                                                <img src="assets/products/shoe3.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>25%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(106)</span>
                                        </div>
                                        <h3><a href="#">Walking Shoe Sneaker Womens</a></h3>
                                        <div class="price">
                                            <span class="current">$139.99</span>
                                            <span class="normal mini-text">$189.98</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Polyester, Cotton</li>
                                                <li>Pull On closure</li>
                                                <li>Fashion Personality</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thumbnail object-cover">
                                            <a href="#">
                                                <img src="assets/products/shoe4.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>24%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(25)</span>
                                        </div>
                                        <h3><a href="#">Womens Summer Tosca Shoe</a></h3>
                                        <div class="price">
                                            <span class="current">$104.90</span>
                                            <span class="normal mini-text">$189.98</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Polyester, Cotton</li>
                                                <li>Pull On closure</li>
                                                <li>Fashion Personality</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- featured products -->

            <div class="banners">
                <div class="container">
                    <div class="wrapper">
                        <div class="column">
                            <div class="banner flexwrap">
                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <img src="assets/banner/banner1.jpg" alt="">
                                        </div>
                                        <div class="text-content flexcol">
                                            <h3>Brutal Sale!</h3>
                                            <h4><span>Get the deal in here</span><br>Living Room Chair</h4>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                        <a href="#" class="over-link"></a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="item get-gray">
                                        <div class="image">
                                            <img src="assets/banner/banner2.jpg" alt="">
                                        </div>
                                        <div class="text-content flexcol">
                                            <h3>Brutal Sale!</h3>
                                            <h4><span>Discount everyday</span><br>Office Outfit</h4>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                        <a href="#" class="over-link"></a>
                                    </div>
                                </div>
                            </div>
                            <!-- banners -->

                            <div class="product-categories flexwrap">
                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <img src="assets/banner/procat1.jpg" alt="">
                                        </div>
                                        <div class="content mini-links">
                                            <h4>Beauty</h4>
                                            <ul class="flexcol">
                                                <li><a href="#">Makeup</a></li>
                                                <li><a href="#">Skin Care</a></li>
                                                <li><a href="#">Hair Care</a></li>
                                                <li><a href="#">Fragrance</a></li>
                                                <li><a href="#">Foot & Hand Care</a></li>
                                            </ul>
                                            <div class="second-links">
                                                <a href="#" class="view-all">View all<i
                                                        class="ri-arrow-right-line"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#">
                                                <img src="assets/banner/procat2.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="content mini-links">
                                            <h4><a href="#">Gatdets</a></h4>
                                            <ul class="flexcol">
                                                <li><a href="#">Camera</a></li>
                                                <li><a href="#">Cell Phones</a></li>
                                                <li><a href="#">Computers</a></li>
                                                <li><a href="#">GPS & Navigation</a></li>
                                                <li><a href="#">Headphones</a></li>
                                            </ul>
                                            <div class="second-links">
                                                <a href="#" class="view-all">View all<i
                                                        class="ri-arrow-right-line"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#">
                                                <img src="assets/banner/procat3.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="content mini-links">
                                            <h4><a href="#">Home Decor</a></h4>
                                            <ul class="flexcol">
                                                <li><a href="#">Kitchen</a></li>
                                                <li><a href="#">Dining Room</a></li>
                                                <li><a href="#">Pantry</a></li>
                                                <li><a href="#">Great Room</a></li>
                                                <li><a href="#">Breakfast Nook</a></li>
                                            </ul>
                                            <div class="second-links">
                                                <a href="#" class="view-all">View all<i
                                                        class="ri-arrow-right-line"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
        <!-- Main -->

        <footer>
            <div class="newsletter">
                <div class="container">
                    <div class="wrapper">
                        <div class="box">
                            <div class="content">
                                <h3>Join Our Newsletter</h3>
                                <p>Get E-mail updates about our latest shop and <strong>special offers</strong></p>
                            </div>
                            <form action="" class="search">
                                <span class="icon-large"><i class="ri-mail-line"></i></span>
                                <input type="mail" placeholder="Your email address" required>
                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- newsletter -->

            <div class="widgets">
                <div class="container">
                    <div class="wrapper">
                        <div class="flexwrap">
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Help & Contact</h4>
                                    <ul class="flexcol">
                                        <li><a href="#">Your Account</a></li>
                                        <li><a href="#">Your Orders</a></li>
                                        <li><a href="#">Shipping Rates</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Assistant</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Product Categories</h4>
                                    <ul class="flexcol">
                                        <li><a href="#">Beauty</a></li>
                                        <li><a href="#">Electronic</a></li>
                                        <li><a href="#">Women's Fashion</a></li>
                                        <li><a href="#">Men's Fashion</a></li>
                                        <li><a href="#">Girl's Fashion</a></li>
                                        <li><a href="#">Boy's Fashion</a></li>
                                        <li><a href="#">Health & Household</a></li>
                                        <li><a href="#">Home & Kitchen</a></li>
                                        <li><a href="#">Pet Supplies</a></li>
                                        <li><a href="#">Sports</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Payment Info</h4>
                                    <ul class="flexcol">
                                        <li><a href="#">Bussiness Card</a></li>
                                        <li><a href="#">Shop with Points</a></li>
                                        <li><a href="#">Reload Your Balance</a></li>
                                        <li><a href="#">Paypal</a></li>
                                        <li><a href="#">GPay</a></li>
                                        <li><a href="#">BHIM UPI</a></li>
                                        <li><a href="#">Paytm</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>About Us</h4>
                                    <ul class="flexcol">
                                        <li><a href="">Company Info</a></li>
                                        <li><a href="">News</a></li>
                                        <li><a href="">Investors</a></li>
                                        <li><a href="">Careers</a></li>
                                        <li><a href="">Policies</a></li>
                                        <li><a href="">Customer reviews</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- widgets-->

            <div class="footer-info">
                <div class="container">
                    <div class="wrapper">
                        <div class="flexcol">
                            <div class="logo">
                                <a href="/"><img src="assets/logo.png" alt=""></a>
                            </div>
                            <div class="socials">
                                <ul class="flexitem">
                                    <li><a href="#"><i class="ri-twitter-line"></i></a></li>
                                    <li><a href="#"><i class="ri-facebook-line"></i></a></li>
                                    <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                                    <li><a href="#"><i class="ri-linkedin-line"></i></a></li>
                                    <li><a href="#"><i class="ri-youtube-line"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <p class="mini-text">Copyright 2023 © Shop.me. All right reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Footer -->

        <div class="menu-bottom desktop-hide">
            <div class="container">
                <div class="wrapper">
                    <nav>
                        <ul class="flexitem">
                            <li>
                                <a href="#">
                                    <i class="ri-bar-chart-line"></i>
                                    <span>Trending</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ri-user-6-line"></i>
                                    <span>Account</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ri-heart-line"></i>
                                    <span>Wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0" class="t-search">
                                    <i class="ri-search-line"></i>
                                    <span>Search</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i class="ri-shopping-cart-line"></i>
                                    <span>Cart</span>
                                    <div class="fly-item">
                                        <span class="item-number">0</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <!-- menu bottom -->

        <div class="search-bottom desktop-hide">
            <div class="container">
                <div class="wrapper">
                    <form action="" class="search">
                        <a href="#" class="t-close search-close flexcenter"><i class="ri-close-line"></i></a>
                        <span class="icon-large"><i class="ri-search-line"></i></span>
                        <input type="search" placeholder="Search" required>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- search bottom -->

        <div class="overlay"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
    <!-- Display the countdown timer in an element -->
    <!-- <p id="demo"></p> -->

    <script>
        // Set the date we're counting down to
        var countDownDate = new Date("Dec 13, 2023 15:13:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("days").innerHTML = days + "d";
            document.getElementById("hours").innerHTML = hours + "h";
            document.getElementById("minutes").innerHTML = minutes + "m";
            document.getElementById("seconds").innerHTML = seconds + "s";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    </script>




</body>

</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});