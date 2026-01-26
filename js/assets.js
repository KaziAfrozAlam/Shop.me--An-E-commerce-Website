// js/assets.js - Asset Management Algorithm

class AssetManager {
    constructor() {
        // Dynamic base path based on current location
        this.basePath = window.location.pathname.includes('/pages/') ? '../assets/' : 'assets/';
        this.fallbackImage = 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Image+Not+Found';

        // Category to asset mapping
        this.categoryAssets = {
            'electronics': {
                banner: 'banners/electronics.jpg',
                icon: 'icons/electronics.png',
                defaultImage: 'products/electronics_default.jpg'
            },
            'mens-clothing': {
                banner: 'banners/mens-fashion.jpg',
                icon: 'icons/clothing.png',
                defaultImage: 'products/clothing_default.jpg'
            },
            'womens-clothing': {
                banner: 'banners/womens-fashion.jpg',
                icon: 'icons/clothing.png',
                defaultImage: 'products/clothing_default.jpg'
            },
            'beauty': {
                banner: 'banners/beauty.jpg',
                icon: 'icons/beauty.png',
                defaultImage: 'products/beauty_default.jpg'
            },
            'home-kitchen': {
                banner: 'banners/home-kitchen.jpg',
                icon: 'icons/kitchen.png',
                defaultImage: 'products/kitchen_default.jpg'
            },
            'footwear': {
                banner: 'banners/footwear.jpg',
                icon: 'icons/shoes.png',
                defaultImage: 'products/shoes_default.jpg'
            }
        };
    }

    // Get full asset path
    getAssetPath(assetPath) {
        return this.basePath + assetPath;
    }

    // Get category banner
    getCategoryBanner(category) {
        const asset = this.categoryAssets[category];
        return asset ? this.getAssetPath(asset.banner) : this.getAssetPath('banners/default.jpg');
    }

    // Get category icon
    getCategoryIcon(category) {
        const asset = this.categoryAssets[category];
        return asset ? this.getAssetPath(asset.icon) : this.getAssetPath('icons/default.png');
    }

    // Get default product image for category
    getDefaultProductImage(category) {
        const asset = this.categoryAssets[category];
        return asset ? this.getAssetPath(asset.defaultImage) : this.fallbackImage;
    }

    // Smart image loading with fallback
    loadImageWithFallback(imgElement, primarySrc, fallbackSrc = this.fallbackImage) {
        imgElement.src = primarySrc;
        imgElement.onerror = () => {
            if (imgElement.src !== fallbackSrc) {
                imgElement.src = fallbackSrc;
            }
        };
    }

    // Assign product image with fallback logic
    assignProductImage(imgElement, product) {
        const primaryImage = product.image;
        const categoryDefault = this.getDefaultProductImage(product.category);
        this.loadImageWithFallback(imgElement, primaryImage, categoryDefault);
    }

    // Get banner for current page
    getPageBanner() {
        const path = window.location.pathname;
        const categoryMatch = path.match(/\/pages\/(\w+)\.html/);
        if (categoryMatch) {
            const category = categoryMatch[1].replace('-', '-');
            return this.getCategoryBanner(category);
        }
        return this.getAssetPath('banners/home.jpg');
    }

    // Initialize assets on page load
    initializePageAssets() {
        // Set page banner
        const bannerElements = document.querySelectorAll('.page-banner img, .hero-banner img');
        bannerElements.forEach(img => {
            const bannerSrc = this.getPageBanner();
            this.loadImageWithFallback(img, bannerSrc);
        });

        // Set category icons
        const iconElements = document.querySelectorAll('[data-category-icon]');
        iconElements.forEach(icon => {
            const category = icon.dataset.categoryIcon;
            const iconSrc = this.getCategoryIcon(category);
            this.loadImageWithFallback(icon, iconSrc);
        });
    }

    // Dynamic asset assignment algorithm
    assignDynamicAssets() {
        // For product cards
        const productImages = document.querySelectorAll('.product-card img, .single-product img');
        productImages.forEach(img => {
            // This would be called when rendering products
            // For now, assume data attributes or classes indicate category
        });
    }

    // Create asset structure validation
    validateAssetStructure() {
        // Algorithm to check if required assets exist
        const requiredAssets = [
            'banners/',
            'categories/',
            'products/',
            'icons/'
        ];

        // In a real implementation, this would check file existence
        // For now, just log the expected structure
        console.log('Expected asset structure:', requiredAssets);
    }
}

const assetManager = new AssetManager();

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    assetManager.initializePageAssets();
    assetManager.validateAssetStructure();
});