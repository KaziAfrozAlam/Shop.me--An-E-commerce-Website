// js/auth.js - Custom Authentication Algorithm

class AuthManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.sessionExpiry = 30 * 60 * 1000; // 30 minutes
    }

    // Custom lightweight hashing algorithm (for demo purposes only)
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash.toString(16);
    }

    // Email validation algorithm
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password strength scoring algorithm
    scorePassword(password) {
        let score = 0;
        if (password.length >= 8) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[a-z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;
        return score; // 0-5
    }

    // Register user
    register(email, password, confirmPassword) {
        // Step-by-step validation
        if (!this.validateEmail(email)) {
            return { success: false, message: 'Invalid email format' };
        }

        if (this.users.some(user => user.email === email)) {
            return { success: false, message: 'Email already exists' };
        }

        if (password !== confirmPassword) {
            return { success: false, message: 'Passwords do not match' };
        }

        const strength = this.scorePassword(password);
        if (strength < 3) {
            return { success: false, message: 'Password too weak. Use at least 8 characters with uppercase, lowercase, and numbers.' };
        }

        const hashedPassword = this.hashPassword(password);
        const user = {
            id: Date.now(),
            email,
            password: hashedPassword,
            createdAt: new Date().toISOString()
        };

        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));

        return { success: true, message: 'Registration successful' };
    }

    // Login user
    login(email, password) {
        const user = this.users.find(u => u.email === email);
        if (!user) {
            return { success: false, message: 'User not found' };
        }

        const hashedPassword = this.hashPassword(password);
        if (user.password !== hashedPassword) {
            return { success: false, message: 'Invalid password' };
        }

        // Create session token
        const token = this.generateToken();
        const session = {
            userId: user.id,
            token,
            expiresAt: Date.now() + this.sessionExpiry
        };

        this.currentUser = { ...user, session };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        return { success: true, message: 'Login successful' };
    }

    // Generate simple token
    generateToken() {
        return Math.random().toString(36).substr(2) + Date.now().toString(36);
    }

    // Validate session
    validateSession() {
        if (!this.currentUser || !this.currentUser.session) {
            return false;
        }

        if (Date.now() > this.currentUser.session.expiresAt) {
            this.logout();
            return false;
        }

        // Extend session on activity
        this.currentUser.session.expiresAt = Date.now() + this.sessionExpiry;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        return true;
    }

    // Logout
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    // Get current user
    getCurrentUser() {
        return this.validateSession() ? this.currentUser : null;
    }

    // Route guard algorithm
    checkAuthForPage(page) {
        const protectedPages = ['page-cart.html', 'page-checkout.html'];
        if (protectedPages.some(p => window.location.pathname.includes(p))) {
            if (!this.validateSession()) {
                window.location.href = 'pages/login.html';
                return false;
            }
        }
        return true;
    }
}

const authManager = new AuthManager();