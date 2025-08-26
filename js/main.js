// Main JavaScript for Zendesk Demo Site

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Form Submission Handling
    const demoForm = document.querySelector('.demo-form');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const company = formData.get('company');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showNotification('Thank you! Your demo request has been submitted. We\'ll be in touch soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }
    
    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.about-card, .service-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Utility Functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            removeNotification(notification);
        }, 5000);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            removeNotification(notification);
        });
        
        function removeNotification(notification) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }
    
    // Add CSS for notifications
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: 1rem;
            padding: 0;
            line-height: 1;
        }
        
        .notification-close:hover {
            opacity: 0.8;
        }
        
        .notification-message {
            flex: 1;
        }
    `;
    document.head.appendChild(notificationStyles);
    
    // Add loading animation for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.type === 'submit') return; // Don't animate form submit buttons
            
            // Add loading state
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.disabled = true;
            
            // Simulate loading (remove this in production)
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1000);
        });
    });
    
    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    
    // Add CSS variables for progress bar
    const progressStyles = document.createElement('style');
    progressStyles.textContent = `
        :root {
            --primary-color: #1f73b7;
            --accent-color: #28a745;
        }
    `;
    document.head.appendChild(progressStyles);
    
    // Console welcome message
    console.log(`
    🚀 Welcome to the Zendesk Web SDK Messaging Demo!
    
    This demo site showcases how to integrate Zendesk's new Web SDK
    messaging widget into a modern, responsive website with role-based access control.
    
    To add your own Zendesk Web SDK:
    1. Get your widget key from Zendesk admin panel
    2. Replace the placeholder script in index.html
    3. Customize the configuration as needed
    
    For more information, visit:
    https://developer.zendesk.com/embeddables/docs/zendesk-sdk-for-web/getting_started
    `);
    
    // Initialize Login Modal System
    initializeLoginModal();
    
    // Initialize Widget Control
    initializeWidgetControl();
    
    // Initialize Navigation Logout Button
    initializeNavigationLogout();
});

// Login Modal Functions
function initializeLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');
    const userInfo = document.getElementById('userInfo');
    
    // Open modal
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const userSelect = document.getElementById('userSelect').value;
            const password = document.getElementById('password').value;
            
            if (password === 'Testing123!') {
                // Login successful
                let userRole, roleClass, userName;
                
                if (userSelect === 'premier') {
                    userRole = 'Premier User';
                    roleClass = 'premier';
                    userName = 'Premium Support Access';
                } else if (userSelect === 'registered') {
                    userRole = 'Registered User';
                    roleClass = 'registered';
                    userName = 'Authenticated Zendesk User';
                } else {
                    userRole = 'Test User';
                    roleClass = 'test';
                    userName = 'Basic Demo Access';
                }
                
                // Update UI
                document.getElementById('roleBadge').textContent = userRole;
                document.getElementById('roleBadge').className = `role-badge ${roleClass}`;
                document.getElementById('userName').textContent = userName;
                
                // Show user info and hide form
                loginForm.style.display = 'none';
                userInfo.style.display = 'block';
                
                // Control widget visibility and authentication based on user role
                if (userSelect === 'premier') {
                    // Premier User: Show widget without authentication
                    if (typeof zE !== 'undefined') {
                        zE('messenger', 'show');
                    }
                    document.body.classList.add('widget-enabled');
                    document.getElementById('widgetStatus').textContent = 'Enabled (Guest)';
                    document.getElementById('widgetStatus').className = 'status-value enabled';
                } else if (userSelect === 'registered') {
                    // Registered User: Show widget with Zendesk authentication
                    if (typeof zE !== 'undefined') {
                        // Authenticate the user in Zendesk
                        zE('messenger', 'identify', {
                            name: 'Demo User',
                            email: 'demo.user@example.com',
                            id: 'demo-user-123'
                        });
                        zE('messenger', 'show');
                    }
                    document.body.classList.add('widget-enabled');
                    document.getElementById('widgetStatus').textContent = 'Enabled (Authenticated)';
                    document.getElementById('widgetStatus').className = 'status-value enabled';
                } else {
                    // Test User: Hide widget
                    if (typeof zE !== 'undefined') {
                        zE('messenger', 'hide');
                    }
                    document.body.classList.remove('widget-enabled');
                    document.getElementById('widgetStatus').textContent = 'Disabled';
                    document.getElementById('widgetStatus').className = 'status-value disabled';
                }
                
                // Store user role and display name in session storage
                sessionStorage.setItem('userRole', userSelect);
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userDisplayName', userRole);
                
                // Update dashboard header if we're on the dashboard page
                const dashboardUserName = document.getElementById('dashboardUserName');
                if (dashboardUserName) {
                    dashboardUserName.textContent = userRole;
                }
                
                // Update navigation buttons
                updateNavigationButtons(userRole);
                
                showNotification(`Welcome, ${userRole}!`, 'success');
            } else {
                showNotification('Invalid password. Please try again.', 'error');
            }
        });
    }
    
    // Handle logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Hide widget for all users
            if (typeof zE !== 'undefined') {
                zE('messenger', 'hide');
            }
            
            // Remove widget-enabled class
            document.body.classList.remove('widget-enabled');
            
            // Reset form and show login
            loginForm.style.display = 'block';
            userInfo.style.display = 'none';
            loginForm.reset();
            
            // Clear session storage
            sessionStorage.removeItem('userRole');
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userDisplayName');
            
            // Update login button text
            if (loginBtn) {
                loginBtn.textContent = 'Login';
            }
            
            showNotification('Logged out successfully. Widget hidden.', 'info');
        });
    }
    
    // Handle switch user (quick logout and return to login form)
    const switchUserBtn = document.getElementById('switchUserBtn');
    if (switchUserBtn) {
        switchUserBtn.addEventListener('click', () => {
            // Hide widget for all users
            if (typeof zE !== 'undefined') {
                zE('messenger', 'hide');
            }
            
            // Remove widget-enabled class
            document.body.classList.remove('widget-enabled');
            
            // Reset form and show login
            loginForm.style.display = 'block';
            userInfo.style.display = 'none';
            loginForm.reset();
            
            // Clear session storage
            sessionStorage.removeItem('userRole');
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userDisplayName');
            
            // Update login button text
            if (loginBtn) {
                loginBtn.textContent = 'Login';
            }
            
            showNotification('Switched user successfully. Please log in with new credentials.', 'info');
        });
    }
}

// Navigation Update Functions
function updateNavigationButtons(userRole) {
    const navLoginItem = document.getElementById('navLoginItem');
    const navLogoutItem = document.getElementById('navLogoutItem');
    const navLoginBtn = document.getElementById('navLoginBtn');
    const navLogoutBtn = document.getElementById('navLogoutBtn');
    
    if (navLoginItem && navLogoutItem && navLoginBtn && navLogoutBtn) {
        if (userRole) {
            // User is logged in
            navLoginItem.style.display = 'none';
            navLogoutItem.style.display = 'block';
            navLoginBtn.textContent = userRole;
        } else {
            // User is logged out
            navLoginItem.style.display = 'block';
            navLogoutItem.style.display = 'none';
            navLoginBtn.textContent = 'Login';
        }
    }
}

// Initialize navigation logout button
function initializeNavigationLogout() {
    const navLogoutBtn = document.getElementById('navLogoutBtn');
    if (navLogoutBtn) {
        navLogoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Hide widget for all users
            if (typeof zE !== 'undefined') {
                zE('messenger', 'hide');
            }
            
            // Remove widget-enabled class
            document.body.classList.remove('widget-enabled');
            
            // Reset modal if it's open
            const loginForm = document.getElementById('loginForm');
            const userInfo = document.getElementById('userInfo');
            if (loginForm && userInfo) {
                loginForm.style.display = 'block';
                userInfo.style.display = 'none';
                loginForm.reset();
            }
            
            // Clear session storage
            sessionStorage.removeItem('userRole');
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userDisplayName');
            
            // Update navigation
            updateNavigationButtons(null);
            
            showNotification('Logged out successfully. Widget hidden.', 'info');
        });
    }
}

// Widget Control Functions
function initializeWidgetControl() {
    // Ensure widget is hidden by default for all users
    if (typeof zE !== 'undefined') {
        zE('messenger', 'hide');
    }
    
    // Check if user is already logged in
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');
    
    if (isLoggedIn && (userRole === 'premier' || userRole === 'registered')) {
        // Show widget for logged-in premier or registered users
        if (typeof zE !== 'undefined') {
            if (userRole === 'registered') {
                // Re-authenticate registered users on page load
                zE('messenger', 'identify', {
                    name: 'Demo User',
                    email: 'demo.user@example.com',
                    id: 'demo-user-123'
                });
            }
            zE('messenger', 'show');
            document.body.classList.add('widget-enabled');
        }
        
        // Update login button
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.textContent = userRole === 'premier' ? 'Premier User' : 'Registered User';
        }
        
        // Update dashboard header if we're on the dashboard page
        const dashboardUserName = document.getElementById('dashboardUserName');
        if (dashboardUserName) {
            dashboardUserName.textContent = userRole;
        }
        
        // Update navigation buttons
        updateNavigationButtons(userRole);
    } else {
        // Hide widget for all other users
        if (typeof zE !== 'undefined') {
            zE('messenger', 'hide');
            document.body.classList.remove('widget-enabled');
        }
    }
    
    // Only apply additional hiding if widget is not enabled
    if (!document.body.classList.contains('widget-enabled')) {
        setTimeout(() => {
            if (typeof zE !== 'undefined') {
                zE('messenger', 'hide');
                console.log('Additional widget hiding applied');
            }
        }, 1000);
        
        // Hide widget on page load and focus events only if not enabled
        window.addEventListener('load', () => {
            if (typeof zE !== 'undefined' && !document.body.classList.contains('widget-enabled')) {
                zE('messenger', 'hide');
            }
        });
        
        window.addEventListener('focus', () => {
            if (typeof zE !== 'undefined' && !document.body.classList.contains('widget-enabled')) {
                zE('messenger', 'hide');
            }
        });
    }
}

