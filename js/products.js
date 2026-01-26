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
            'makeup': {
                priceRange: [8, 80],
                stockRange: [15, 150],
                ratingBase: 4.4,
                products: [
                    'Lipstick', 'Foundation', 'Mascara', 'Eyeshadow Palette', 'Blush',
                    'Bronzer', 'Highlighter', 'Eyeliner', 'Brow Pencil', 'Setting Powder'
                ]
            },
            'hair-care': {
                priceRange: [12, 60],
                stockRange: [20, 100],
                ratingBase: 4.2,
                products: [
                    'Shampoo', 'Conditioner', 'Hair Oil', 'Hair Mask', 'Hair Serum',
                    'Hair Spray', 'Styling Gel', 'Heat Protectant', 'Hair Color', 'Hair Brush'
                ]
            },
            'fragrance': {
                priceRange: [25, 150],
                stockRange: [10, 80],
                ratingBase: 4.5,
                products: [
                    'Eau de Parfum', 'Eau de Toilette', 'Body Mist', 'Perfume Oil',
                    'Cologne', 'Body Spray', 'Scented Candle', 'Diffuser Oil', 'Perfume Set'
                ]
            },
            'tools-accessories': {
                priceRange: [5, 50],
                stockRange: [25, 200],
                ratingBase: 4.1,
                products: [
                    'Makeup Brush Set', 'Foundation Brush', 'Eyelash Curler', 'Tweezers',
                    'Nail Clippers', 'Hair Clippers', 'Straightener', 'Curling Iron', 'Mirror', 'Puff'
                ]
            },
            'skin-care': {
                priceRange: [15, 120],
                stockRange: [20, 150],
                ratingBase: 4.3,
                products: [
                    'Facial Cleanser', 'Moisturizer', 'Face Serum', 'Sunscreen', 'Face Mask',
                    'Toner', 'Eye Cream', 'Lip Balm', 'Body Lotion', 'Exfoliator'
                ]
            },
            'foot-hand-care': {
                priceRange: [8, 40],
                stockRange: [30, 100],
                ratingBase: 4.0,
                products: [
                    'Hand Cream', 'Foot Cream', 'Hand Soap', 'Cuticle Oil', 'Nail Oil',
                    'Foot Soak', 'Hand Mask', 'Foot Mask', 'Callus Remover', 'Hand Sanitizer'
                ]
            },
            'shave-hair-removal': {
                priceRange: [5, 35],
                stockRange: [40, 120],
                ratingBase: 4.1,
                products: [
                    'Razor', 'Shaving Cream', 'Aftershave', 'Depilatory Cream', 'Wax Strips',
                    'Hair Trimmer', 'Electric Razor', 'Shaving Brush', 'Pre-Shave Oil', 'Shave Gel'
                ]
            },
            'personal-care': {
                priceRange: [3, 25],
                stockRange: [50, 200],
                ratingBase: 4.2,
                products: [
                    'Toothbrush', 'Toothpaste', 'Mouthwash', 'Deodorant', 'Body Wash',
                    'Shampoo', 'Soap', 'Feminine Hygiene', 'Cotton Swabs', 'Dental Floss'
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
            'womens-shoes': {
                priceRange: [40, 300],
                stockRange: [5, 50],
                ratingBase: 4.3,
                products: [
                    'High Heels', 'Sneakers', 'Boots', 'Sandals', 'Flats',
                    'Loafers', 'Wedges', 'Ankle Boots', 'Ballet Flats', 'Espadrilles'
                ]
            },
            'womens-jewelry': {
                priceRange: [20, 500],
                stockRange: [10, 30],
                ratingBase: 4.4,
                products: [
                    'Necklace', 'Earrings', 'Bracelet', 'Ring', 'Anklet',
                    'Brooch', 'Pendant', 'Charm Bracelet', 'Hoop Earrings', 'Statement Necklace'
                ]
            },
            'womens-watches': {
                priceRange: [50, 1000],
                stockRange: [5, 20],
                ratingBase: 4.5,
                products: [
                    'Analog Watch', 'Digital Watch', 'Smart Watch', 'Dress Watch', 'Casual Watch',
                    'Sport Watch', 'Luxury Watch', 'Minimalist Watch', 'Gold Watch', 'Leather Watch'
                ]
            },
            'womens-handbags': {
                priceRange: [30, 800],
                stockRange: [5, 25],
                ratingBase: 4.3,
                products: [
                    'Tote Bag', 'Crossbody Bag', 'Clutch', 'Shoulder Bag', 'Backpack',
                    'Wristlet', 'Satchel', 'Hobo Bag', 'Bucket Bag', 'Envelope Clutch'
                ]
            },
            'womens-accessories': {
                priceRange: [10, 150],
                stockRange: [15, 100],
                ratingBase: 4.2,
                products: [
                    'Sunglasses', 'Hat', 'Scarf', 'Belt', 'Gloves',
                    'Hair Accessories', 'Keychain', 'Phone Case', 'Wallet', 'Umbrella'
                ]
            },
            'womens-accessories': {
                priceRange: [10, 150],
                stockRange: [15, 100],
                ratingBase: 4.2,
                products: [
                    'Sunglasses', 'Hat', 'Scarf', 'Belt', 'Gloves',
                    'Hair Accessories', 'Keychain', 'Phone Case', 'Wallet', 'Umbrella'
                ]
            },
            'kitchen-dining': {
                priceRange: [15, 200],
                stockRange: [10, 100],
                ratingBase: 4.0,
                products: [
                    'Dinner Plates', 'Bowls', 'Mugs', 'Glasses', 'Silverware Set',
                    'Serving Platters', 'Salad Bowl', 'Pitcher', 'Teapot', 'Cutlery'
                ]
            },
            'kitchen': {
                priceRange: [20, 300],
                stockRange: [5, 50],
                ratingBase: 4.1,
                products: [
                    'Blender', 'Coffee Maker', 'Toaster', 'Microwave', 'Stand Mixer',
                    'Food Processor', 'Air Fryer', 'Slow Cooker', 'Pressure Cooker', 'Dishwasher'
                ]
            },
            'dining-room': {
                priceRange: [50, 800],
                stockRange: [2, 20],
                ratingBase: 4.2,
                products: [
                    'Dining Table', 'Dining Chairs', 'Sideboard', 'China Cabinet', 'Bar Cart',
                    'Dining Bench', 'Table Linens', 'Placemats', 'Napkins', 'Table Runner'
                ]
            },
            'pantry': {
                priceRange: [10, 100],
                stockRange: [20, 150],
                ratingBase: 3.9,
                products: [
                    'Storage Containers', 'Canister Set', 'Spice Rack', 'Pantry Organizer', 'Food Storage Bags',
                    'Mason Jars', 'Bread Box', 'Cookie Jar', 'Oil Dispenser', 'Sugar Bowl'
                ]
            },
            'great-room': {
                priceRange: [100, 2000],
                stockRange: [1, 10],
                ratingBase: 4.3,
                products: [
                    'Sectional Sofa', 'Coffee Table', 'TV Stand', 'Bookshelf', 'Area Rug',
                    'Floor Lamp', 'Throw Pillows', 'Wall Art', 'Entertainment Center', 'Ottoman'
                ]
            },
            'breakfast-nook': {
                priceRange: [30, 500],
                stockRange: [5, 30],
                ratingBase: 4.1,
                products: [
                    'Breakfast Bar', 'Bar Stools', 'Small Table', 'Corner Bench', 'Breakfast Set',
                    'Counter Stools', 'Bistro Set', 'Compact Dining', 'Wall Shelf', 'Pendant Light'
                ]
            },
            'living': {
                priceRange: [50, 1500],
                stockRange: [2, 25],
                ratingBase: 4.2,
                products: [
                    'Sofa', 'Armchair', 'Side Table', 'Media Console', 'Bookcase',
                    'Floor Lamp', 'Table Lamp', 'Wall Shelf', 'Decorative Pillow', 'Throw Blanket'
                ]
            },
            'living-room': {
                priceRange: [80, 2000],
                stockRange: [1, 15],
                ratingBase: 4.4,
                products: [
                    'Leather Sofa', 'Fabric Sofa', 'Recliner', 'Loveseat', 'Chaise Lounge',
                    'Entertainment Center', 'Wall Unit', 'Console Table', 'Accent Chair', 'Ottoman'
                ]
            },
            'family-room': {
                priceRange: [60, 1200],
                stockRange: [2, 20],
                ratingBase: 4.1,
                products: [
                    'Sectional Sofa', 'Media Center', 'Game Table', 'Toy Storage', 'Bean Bag Chair',
                    'Floor Cushions', 'Room Divider', 'Wall Decor', 'Shelving Unit', 'Storage Ottoman'
                ]
            },
            'sunroom': {
                priceRange: [40, 800],
                stockRange: [3, 25],
                ratingBase: 4.0,
                products: [
                    'Wicker Furniture', 'Outdoor Sofa', 'Sunroom Chairs', 'Plant Stand', 'Hanging Chair',
                    'Daybed', 'Screened Porch Set', 'Patio Furniture', 'Garden Bench', 'Outdoor Rug'
                ]
            },
            'bed-bath': {
                priceRange: [20, 600],
                stockRange: [5, 50],
                ratingBase: 4.1,
                products: [
                    'Bedding Set', 'Towels', 'Bath Mat', 'Shower Curtain', 'Bathroom Accessories',
                    'Laundry Basket', 'Storage Solutions', 'Decorative Items', 'Lighting', 'Rugs'
                ]
            },
            'bathroom': {
                priceRange: [15, 300],
                stockRange: [10, 80],
                ratingBase: 4.0,
                products: [
                    'Towel Set', 'Bath Mat', 'Shower Curtain', 'Bathroom Scale', 'Toilet Brush',
                    'Soap Dispenser', 'Towel Rack', 'Bathroom Mirror', 'Storage Cabinet', 'Laundry Hamper'
                ]
            },
            'powder-room': {
                priceRange: [25, 400],
                stockRange: [5, 30],
                ratingBase: 4.2,
                products: [
                    'Vanity Sink', 'Mirror', 'Light Fixture', 'Towel Bar', 'Soap Dish',
                    'Tissue Holder', 'Wastebasket', 'Decorative Accessories', 'Wall Art', 'Rug'
                ]
            },
            'bedroom': {
                priceRange: [30, 1000],
                stockRange: [3, 25],
                ratingBase: 4.3,
                products: [
                    'Bed Frame', 'Mattress', 'Bedding', 'Nightstand', 'Dresser',
                    'Wardrobe', 'Bedroom Chair', 'Decorative Pillows', 'Bedspread', 'Curtains'
                ]
            },
            'storage-closet': {
                priceRange: [20, 500],
                stockRange: [5, 40],
                ratingBase: 4.0,
                products: [
                    'Closet Organizer', 'Storage Bins', 'Shelving Unit', 'Hanging Organizer', 'Shoe Rack',
                    'Jewelry Box', 'Storage Ottoman', 'Under Bed Storage', 'Wall Shelves', 'Coat Rack'
                ]
            },
            'baby-kids': {
                priceRange: [10, 200],
                stockRange: [10, 100],
                ratingBase: 4.2,
                products: [
                    'Crib', 'Changing Table', 'Nursery Furniture', 'Kids Bedding', 'Toy Storage',
                    'Bookshelf', 'Desk', 'Chair', 'Decor', 'Safety Items'
                ]
            },
            'utility': {
                priceRange: [25, 400],
                stockRange: [5, 30],
                ratingBase: 3.8,
                products: [
                    'Washer', 'Dryer', 'Laundry Supplies', 'Cleaning Equipment', 'Storage Solutions',
                    'Utility Sink', 'Tool Storage', 'Work Bench', 'Garage Organization', 'Safety Equipment'
                ]
            },
            'laundry': {
                priceRange: [20, 300],
                stockRange: [5, 25],
                ratingBase: 4.0,
                products: [
                    'Washing Machine', 'Dryer', 'Laundry Basket', 'Detergent Dispenser', 'Ironing Board',
                    'Clothes Rack', 'Laundry Sorter', 'Drying Rack', 'Lint Remover', 'Fabric Softener'
                ]
            },
            'garage': {
                priceRange: [30, 600],
                stockRange: [3, 20],
                ratingBase: 4.1,
                products: [
                    'Garage Door', 'Storage System', 'Work Bench', 'Tool Chest', 'Shelving',
                    'Bike Rack', 'Lawn Equipment Storage', 'Pegboard', 'Hooks', 'Cabinets'
                ]
            },
            'mudroom': {
                priceRange: [15, 250],
                stockRange: [5, 40],
                ratingBase: 4.0,
                products: [
                    'Mudroom Bench', 'Coat Rack', 'Shoe Storage', 'Entryway Organizer', 'Boot Tray',
                    'Wall Hooks', 'Storage Cubby', 'Laundry Drop Zone', 'Pet Supplies Station', 'Decorative Items'
                ]
            },
            'outdoor-exterior': {
                priceRange: [20, 800],
                stockRange: [2, 30],
                ratingBase: 4.1,
                products: [
                    'Patio Furniture', 'Outdoor Lighting', 'Garden Tools', 'Landscaping Supplies', 'Outdoor Decor',
                    'Grills', 'Outdoor Kitchen', 'Swimming Pool Equipment', 'Driveway Solutions', 'Exterior Paint'
                ]
            },
            'landscape': {
                priceRange: [10, 200],
                stockRange: [10, 100],
                ratingBase: 4.0,
                products: [
                    'Garden Hose', 'Lawn Mower', 'Gardening Tools', 'Plants', 'Fertilizer',
                    'Mulch', 'Garden Decor', 'Bird Feeders', 'Outdoor Fountains', 'Garden Statues'
                ]
            },
            'patio': {
                priceRange: [50, 600],
                stockRange: [2, 15],
                ratingBase: 4.2,
                products: [
                    'Patio Set', 'Outdoor Dining', 'Patio Umbrella', 'Outdoor Rug', 'Patio Heater',
                    'Patio Furniture Covers', 'String Lights', 'Outdoor Speakers', 'Fire Pit', 'Planters'
                ]
            },
            'deck': {
                priceRange: [30, 400],
                stockRange: [3, 20],
                ratingBase: 4.1,
                products: [
                    'Deck Furniture', 'Deck Railings', 'Deck Lighting', 'Outdoor Carpeting', 'Deck Boxes',
                    'Planter Boxes', 'Deck Stains', 'Outdoor Cushions', 'Hanging Chairs', 'Deck Accessories'
                ]
            },
            'pool': {
                priceRange: [25, 500],
                stockRange: [5, 30],
                ratingBase: 4.3,
                products: [
                    'Pool Cleaner', 'Pool Chemicals', 'Pool Toys', 'Pool Furniture', 'Pool Covers',
                    'Pool Lights', 'Pool Heaters', 'Pool Pumps', 'Ladders', 'Safety Equipment'
                ]
            },
            'backyard': {
                priceRange: [15, 300],
                stockRange: [5, 50],
                ratingBase: 4.0,
                products: [
                    'Outdoor Play Equipment', 'Garden Shed', 'Greenhouse', 'Compost Bin', 'Rain Barrel',
                    'Outdoor Storage', 'Garden Cart', 'Wheelbarrow', 'Outdoor Benches', 'Garden Arbors'
                ]
            },
            'porch': {
                priceRange: [20, 250],
                stockRange: [5, 40],
                ratingBase: 4.1,
                products: [
                    'Porch Swing', 'Porch Furniture', 'Doormats', 'Welcome Mats', 'Porch Lights',
                    'Wind Chimes', 'Porch Rugs', 'Planters', 'Rocking Chairs', 'Gliders'
                ]
            },
            'exterior': {
                priceRange: [10, 150],
                stockRange: [10, 80],
                ratingBase: 3.9,
                products: [
                    'Exterior Paint', 'House Numbers', 'Mailbox', 'Door Hardware', 'Siding',
                    'Gutters', 'Roofing Supplies', 'Windows', 'Doors', 'Exterior Lighting'
                ]
            },
            'outdoor-kitchen': {
                priceRange: [100, 2000],
                stockRange: [1, 10],
                ratingBase: 4.4,
                products: [
                    'Outdoor Grill', 'Smoker', 'Outdoor Refrigerator', 'Pizza Oven', 'Outdoor Sink',
                    'Outdoor Cabinets', 'Countertops', 'Outdoor Appliances', 'BBQ Tools', 'Outdoor Dining'
                ]
            },
            'front-yard': {
                priceRange: [15, 200],
                stockRange: [5, 50],
                ratingBase: 4.0,
                products: [
                    'Front Door Decor', 'House Numbers', 'Mailbox', 'Welcome Sign', 'Flower Pots',
                    'Garden Statues', 'Bird Baths', 'Sundial', 'Front Yard Lighting', 'Address Plaques'
                ]
            },
            'driveway': {
                priceRange: [20, 300],
                stockRange: [3, 25],
                ratingBase: 4.0,
                products: [
                    'Driveway Sealant', 'Pavers', 'Driveway Markers', 'Snow Removal Tools', 'Driveway Cleaner',
                    'Oil Stain Remover', 'Driveway Repair Kit', 'Gravel', 'Driveway Edging', 'Driveway Lights'
                ]
            },
            'poolhouse': {
                priceRange: [50, 800],
                stockRange: [2, 15],
                ratingBase: 4.2,
                products: [
                    'Pool House Furniture', 'Outdoor Shower', 'Changing Room', 'Storage Solutions', 'Decor',
                    'Lighting', 'Rugs', 'Artwork', 'Plants', 'Accessories'
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
            'footwear': ['comfortable fit', 'durable sole', 'stylish design', 'lightweight material'],
            'makeup': ['long-lasting formula', 'natural ingredients', 'easy application', 'radiant finish'],
            'hair-care': ['nourishing formula', 'silky smooth results', 'easy application', 'long-lasting effect'],
            'fragrance': ['captivating scent', 'long-lasting fragrance', 'elegant packaging', 'versatile wear'],
            'tools-accessories': ['professional quality', 'easy to use', 'durable construction', 'precise application'],
            'skin-care': ['nourishing formula', 'gentle on skin', 'effective results', 'pleasant fragrance'],
            'foot-hand-care': ['moisturizing formula', 'soothing effect', 'easy absorption', 'long-lasting hydration'],
            'shave-hair-removal': ['smooth glide', 'gentle on skin', 'effective removal', 'comfortable use'],
            'personal-care': ['gentle formula', 'effective cleaning', 'pleasant scent', 'daily use'],
            'womens-shoes': ['comfortable fit', 'stylish design', 'durable construction', 'versatile wear'],
            'womens-jewelry': ['elegant design', 'high-quality materials', 'versatile styling', 'timeless appeal'],
            'womens-watches': ['precise timekeeping', 'elegant design', 'durable construction', 'stylish appeal'],
            'womens-handbags': ['spacious design', 'stylish appearance', 'durable materials', 'practical features'],
            'womens-accessories': ['stylish design', 'practical use', 'quality materials', 'versatile styling'],
            'kitchen-dining': ['durable construction', 'easy maintenance', 'stylish design', 'practical use'],
            'kitchen': ['efficient performance', 'easy operation', 'durable construction', 'modern design'],
            'dining-room': ['elegant design', 'durable construction', 'comfortable use', 'stylish appearance'],
            'home-decor': ['stylish design', 'quality materials', 'versatile placement', 'modern appeal'],
            'furniture': ['durable construction', 'comfortable design', 'stylish appearance', 'practical use'],
            'bedding': ['soft and comfortable', 'durable materials', 'easy care', 'stylish design'],
            'bathroom': ['water-resistant design', 'easy maintenance', 'stylish appearance', 'practical features'],
            'lighting': ['energy-efficient design', 'stylish appearance', 'adjustable settings', 'durable construction'],
            'storage-organization': ['spacious design', 'durable materials', 'practical organization', 'stylish appearance'],
            'cleaning-supplies': ['effective cleaning', 'easy application', 'pleasant scent', 'durable packaging'],
            'laundry': ['effective cleaning', 'gentle on fabrics', 'pleasant scent', 'easy operation'],
            'gardening': ['durable construction', 'effective performance', 'easy use', 'practical design'],
            'outdoor-living': ['weather-resistant design', 'durable materials', 'stylish appearance', 'practical features'],
            'sports-fitness': ['durable construction', 'comfortable design', 'effective performance', 'versatile use'],
            'books-media': ['engaging content', 'quality production', 'informative material', 'entertaining format'],
            'toys-games': ['engaging play', 'durable construction', 'educational value', 'fun design'],
            'baby-kids': ['safe design', 'comfortable use', 'durable construction', 'engaging features'],
            'health-household': ['effective formula', 'safe use', 'quality ingredients', 'practical design'],
            'pet-supplies': ['durable construction', 'comfortable design', 'practical features', 'safe materials'],
            'automotive': ['durable construction', 'effective performance', 'easy installation', 'reliable quality'],
            'industrial-scientific': ['professional quality', 'durable construction', 'precise performance', 'reliable operation'],
            'grocery': ['fresh ingredients', 'quality packaging', 'nutritious content', 'convenient use'],
            'default': ['high quality', 'excellent value', 'reliable performance', 'satisfied customers']
        };

        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const categoryFeatures = features[category] || features['default'];
        const feature = categoryFeatures[Math.floor(Math.random() * categoryFeatures.length)];

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