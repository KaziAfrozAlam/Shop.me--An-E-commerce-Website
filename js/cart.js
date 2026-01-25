// js/cart.js - Cart Integration Algorithms

class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.listeners = [];
    }

    // Add item to cart with quantity merge logic
    addToCart(productId, quantity = 1) {
        const product = productGenerator.getProductById(productId);
        if (!product) return false;

        const existingItem = this.cart.find(item => item.id === productId);

        if (existingItem) {
            // Merge quantity algorithm
            const newQuantity = existingItem.quantity + quantity;
            if (newQuantity > product.stock) {
                existingItem.quantity = product.stock;
            } else {
                existingItem.quantity = newQuantity;
            }
        } else {
            this.cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: Math.min(quantity, product.stock)
            });
        }

        this.saveCart();
        this.notifyListeners('add', productId);
        return true;
    }

    // Remove item from cart
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.notifyListeners('remove', productId);
    }

    // Update item quantity
    updateQuantity(productId, newQuantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            const product = productGenerator.getProductById(productId);
            item.quantity = Math.max(0, Math.min(newQuantity, product ? product.stock : item.quantity));
            if (item.quantity === 0) {
                this.removeFromCart(productId);
            } else {
                this.saveCart();
                this.notifyListeners('update', productId);
            }
        }
    }

    // Get cart items
    getCartItems() {
        return this.cart;
    }

    // Calculate cart total algorithm
    calculateTotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    // Calculate subtotal
    calculateSubtotal() {
        return this.calculateTotal();
    }

    // Calculate tax (simple algorithm - 8% tax)
    calculateTax() {
        return this.calculateTotal() * 0.08;
    }

    // Calculate shipping (algorithm: free over $50, otherwise $5.99)
    calculateShipping() {
        const subtotal = this.calculateSubtotal();
        return subtotal > 50 ? 0 : 5.99;
    }

    // Get cart summary
    getCartSummary() {
        const subtotal = this.calculateSubtotal();
        const tax = this.calculateTax();
        const shipping = this.calculateShipping();
        const total = subtotal + tax + shipping;

        return {
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            shipping: shipping.toFixed(2),
            total: total.toFixed(2),
            itemCount: this.cart.reduce((count, item) => count + item.quantity, 0)
        };
    }

    // Clear cart
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.notifyListeners('clear');
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    // Checkout validation algorithm
    validateCheckout() {
        if (this.cart.length === 0) {
            return { valid: false, message: 'Cart is empty' };
        }

        // Check stock availability
        for (const item of this.cart) {
            const product = productGenerator.getProductById(item.id);
            if (!product || product.stock < item.quantity) {
                return { valid: false, message: `Insufficient stock for ${item.title}` };
            }
        }

        // Check user authentication
        if (!authManager.getCurrentUser()) {
            return { valid: false, message: 'Please login to checkout' };
        }

        return { valid: true };
    }

    // Process order
    processOrder(orderDetails) {
        const validation = this.validateCheckout();
        if (!validation.valid) {
            return validation;
        }

        // Generate order ID
        const orderId = 'ORD_' + Date.now();

        // Create order object
        const order = {
            id: orderId,
            items: [...this.cart],
            summary: this.getCartSummary(),
            customer: authManager.getCurrentUser().email,
            orderDate: new Date().toISOString(),
            status: 'confirmed',
            ...orderDetails
        };

        // Save order to localStorage (in real app, this would be sent to server)
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));

        // Update product stock (algorithmic inventory management)
        this.cart.forEach(item => {
            const product = productGenerator.getProductById(item.id);
            if (product) {
                product.stock -= item.quantity;
                // In real implementation, update the stored products
            }
        });

        // Clear cart after successful order
        this.clearCart();

        return { valid: true, orderId, order };
    }

    // Observer pattern for cart updates
    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    }

    notifyListeners(action, productId) {
        this.listeners.forEach(callback => callback(action, productId, this.cart));
    }

    // Get cart item count
    getItemCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    // Check if product is in cart
    isInCart(productId) {
        return this.cart.some(item => item.id === productId);
    }

    // Get cart item by product ID
    getCartItem(productId) {
        return this.cart.find(item => item.id === productId);
    }
}

const cartManager = new CartManager();