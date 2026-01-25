// js/products.js - AI-Driven Product Generation Algorithm

class ProductGenerator {
    constructor() {
        this.categories = {
            'electronics': {
                priceRange: [50, 2000],
                stockRange: [5, 50],
                ratingBase: 4.0,
                products: [
                    'Wireless Headphones', 'Smartphone Case', 'Bluetooth Speaker', 'USB Charger',
                    'Laptop Stand', 'Gaming Mouse', 'Webcam', 'Power Bank', 'Smart Watch', 'Earbuds'
                ]
            },
            'mens-clothing': {
                priceRange: [20, 150],
                stockRange: [10, 100],
                ratingBase: 4.2,
                products: [
                    'Casual T-Shirt', 'Jeans', 'Jacket', 'Sweater', 'Polo Shirt',
                    'Chinos', 'Hoodie', 'Blazer', 'Shorts', 'Dress Shirt'
                ]
            },
            'womens-clothing': {
                priceRange: [25, 200],
                stockRange: [8, 80],
                ratingBase: 4.1,
                products: [
                    'Summer Dress', 'Blouse', 'Skirt', 'Cardigan', 'Jeans',
                    'Sweater', 'Jacket', 'Tops', 'Leggings', 'Coat'
                ]
            },
            'beauty': {
                priceRange: [10, 100],
                stockRange: [20, 200],
                ratingBase: 4.3,
                products: [
                    'Lipstick', 'Foundation', 'Mascara', 'Eyeshadow Palette', 'Perfume',
                    'Face Cream', 'Shampoo', 'Nail Polish', 'Makeup Brush Set', 'Sunscreen'
                ]
            },
            'home-kitchen': {
                priceRange: [15, 300],
                stockRange: [5, 150],
                ratingBase: 4.0,
                products: [
                    'Coffee Maker', 'Blender', 'Cookware Set', 'Dinner Plates', 'Mugs',
                    'Cutting Board', 'Kitchen Towels', 'Storage Containers', 'Utensil Set', 'Baking Pan'
                ]
            },
            'footwear': {
                priceRange: [30, 250],
                stockRange: [5, 100],
                ratingBase: 4.1,
                products: [
                    'Running Shoes', 'Sneakers', 'Boots', 'Sandals', 'Loafers',
                    'High Heels', 'Flip Flops', 'Dress Shoes', 'Athletic Shoes', 'Casual Shoes'
                ]
            }
        };

        this.generatedProducts = JSON.parse(localStorage.getItem('generatedProducts')) || null;
        if (!this.generatedProducts) {
            this.generateAllProducts();
        }
    }

    // Generate rating with weighted distribution
    generateRating(baseRating) {
        const variation = (Math.random() - 0.5) * 0.8; // -0.4 to +0.4
        let rating = baseRating + variation;
        rating = Math.max(1, Math.min(5, rating)); // Clamp between 1-5
        return Math.round(rating * 10) / 10; // Round to 1 decimal
    }

    // Generate price within range
    generatePrice(min, max) {
        return Math.round((Math.random() * (max - min) + min) * 100) / 100;
    }

    // Generate stock within range
    generateStock(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate unique ID
    generateId(category, index) {
        return `${category}_${index}_${Date.now()}`;
    }

    // Generate description algorithmically
    generateDescription(productName, category) {
        const adjectives = ['Premium', 'High-quality', 'Durable', 'Stylish', 'Comfortable', 'Modern', 'Elegant', 'Versatile'];
        const features = {
            'electronics': ['long battery life', 'wireless connectivity', 'compact design', 'easy to use'],
            'mens-clothing': ['breathable fabric', 'modern fit', 'comfortable wear', 'durable material'],
            'womens-clothing': ['flattering design', 'soft fabric', 'trendy style', 'versatile look'],
            'beauty': ['long-lasting formula', 'natural ingredients', 'easy application', 'radiant finish'],
            'home-kitchen': ['easy to clean', 'durable construction', 'practical design', 'space-saving'],
            'footwear': ['comfortable fit', 'durable sole', 'stylish design', 'lightweight material']
        };

        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const feature = features[category][Math.floor(Math.random() * features[category].length)];

        return `${adj} ${productName} featuring ${feature}. Perfect for everyday use with excellent quality and value.`;
    }

    // Get image URL (using royalty-free sources)
    getImageUrl(category, productName) {
        // Using placeholder images - in real implementation, use AI-generated or stock photos
        const baseUrls = {
            'electronics': 'https://via.placeholder.com/300x300/4a90e2/ffffff?text=',
            'mens-clothing': 'https://via.placeholder.com/300x300/50c878/ffffff?text=',
            'womens-clothing': 'https://via.placeholder.com/300x300/ff69b4/ffffff?text=',
            'beauty': 'https://via.placeholder.com/300x300/ffd700/ffffff?text=',
            'home-kitchen': 'https://via.placeholder.com/300x300/8b4513/ffffff?text=',
            'footwear': 'https://via.placeholder.com/300x300/696969/ffffff?text='
        };

        return baseUrls[category] + encodeURIComponent(productName);
    }

    // Generate products for a category
    generateCategoryProducts(categoryKey) {
        const category = this.categories[categoryKey];
        const products = [];

        category.products.forEach((productName, index) => {
            const product = {
                id: this.generateId(categoryKey, index),
                title: productName,
                category: categoryKey,
                price: this.generatePrice(...category.priceRange),
                rating: this.generateRating(category.ratingBase),
                stock: this.generateStock(...category.stockRange),
                image: this.getImageUrl(categoryKey, productName),
                description: this.generateDescription(productName, categoryKey)
            };
            products.push(product);
        });

        return products;
    }

    // Generate all products
    generateAllProducts() {
        this.generatedProducts = {};
        Object.keys(this.categories).forEach(category => {
            this.generatedProducts[category] = this.generateCategoryProducts(category);
        });

        localStorage.setItem('generatedProducts', JSON.stringify(this.generatedProducts));
    }

    // Get products by category
    getProductsByCategory(category) {
        return this.generatedProducts[category] || [];
    }

    // Get all products
    getAllProducts() {
        return Object.values(this.generatedProducts).flat();
    }

    // Get product by ID
    getProductById(id) {
        return this.getAllProducts().find(product => product.id === id);
    }

    // Search products
    searchProducts(query) {
        const allProducts = this.getAllProducts();
        return allProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
    }
}

const productGenerator = new ProductGenerator();