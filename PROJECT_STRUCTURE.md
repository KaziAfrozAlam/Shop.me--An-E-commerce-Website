# Project Structure

## Overview
This is a clean, organized e-commerce website project with dedicated folders for different components.

## Folder Structure
```
Shop.me--An-E-commerce-Website/
├── assets/                 # Images, icons, media files
│   ├── banner/
│   ├── brands/
│   ├── menu/
│   ├── products/
│   └── slider/
├── auth/                   # Authentication pages and scripts
│   ├── index_login.html
│   ├── register.html
│   ├── process_login.php
│   ├── process_register.php
│   ├── login_style.css
│   ├── register.css
│   ├── index_login.js
│   ├── register.js
│   └── logo.png
├── css/                    # Stylesheets
│   ├── style.css
│   ├── beauty.css
│   ├── account.css
│   └── orderplaced.css
├── js/                     # JavaScript files
│   └── script.js
├── pages/                  # HTML pages
│   ├── page-cart.html
│   ├── page-category.html
│   ├── page-checkout.html
│   ├── page-offer.html
│   ├── page-single.html
│   ├── beauty.html
│   ├── account.html
│   └── orderplaced.html
├── includes/               # Reusable components
│   └── header.html
├── index.html              # Main homepage
├── LICENSE
└── README.md
```

## Key Features
- **Modular Structure**: Code organized into logical folders
- **Dynamic Content**: API-integrated product display
- **Authentication**: User login/register system
- **Shopping Cart**: Persistent cart with localStorage
- **AI Chatbot**: Integrated support chatbot
- **Responsive Design**: Mobile-friendly interface

## Running the Project
1. Start PHP server: `php -S localhost:8000`
2. Open `http://localhost:8000` in browser
3. Access login at `/auth/index_login.html`
4. Browse products and use cart/checkout

## Technologies Used
- HTML5, CSS3, JavaScript
- PHP (for authentication)
- Fake Store API (for products)
- Bootstrap, Swiper.js
- Tidio (chat support)

