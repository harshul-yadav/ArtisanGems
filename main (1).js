/**
 * ArtisanGems - Main JavaScript
 * Handles general site functionality
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize newsletter form
    initNewsletterForm();
    
    // Check for order success message
    checkOrderSuccess();
    
    // Update cart count badge
    updateCartCount();
});

/**
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
            
            if (!isClickInside && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

/**
 * Newsletter form submission handling
 */
function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // In a real application, this would send the data to a server
                // For this demo, just show success message
                
                // Replace form with success message
                const successMessage = document.createElement('div');
                successMessage.className = 'newsletter-success';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <p>Thank you for subscribing! We've sent a confirmation email to <strong>${email}</strong>.</p>
                `;
                
                // Apply styles to success message
                successMessage.style.backgroundColor = 'var(--success-color)';
                successMessage.style.color = 'white';
                successMessage.style.padding = 'var(--space-md)';
                successMessage.style.borderRadius = 'var(--border-radius-md)';
                successMessage.style.display = 'flex';
                successMessage.style.alignItems = 'center';
                successMessage.style.justifyContent = 'center';
                successMessage.style.gap = 'var(--space-sm)';
                
                form.replaceWith(successMessage);
            } else {
                // Show error for invalid email
                emailInput.style.borderColor = 'var(--error-color)';
                
                // Remove error styling after 3 seconds
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                }, 3000);
            }
        });
    });
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - Whether the email is valid
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

/**
 * Check for order success message in URL parameters
 */
function checkOrderSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderStatus = urlParams.get('order');
    
    if (orderStatus === 'success') {
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'order-success-message';
        successMessage.innerHTML = `
            <div class="container">
                <div class="success-content">
                    <i class="fas fa-check-circle"></i>
                    <h2>Order Placed Successfully!</h2>
                    <p>Thank you for your purchase. We've sent a confirmation email with your order details.</p>
                    <a href="products.html" class="btn btn-primary">Continue Shopping</a>
                </div>
            </div>
        `;
        
        // Apply styles
        successMessage.style.backgroundColor = 'var(--success-color)';
        successMessage.style.color = 'white';
        successMessage.style.padding = 'var(--space-md) 0';
        successMessage.style.marginBottom = 'var(--space-xl)';
        
        const successContent = successMessage.querySelector('.success-content');
        successContent.style.textAlign = 'center';
        successContent.style.padding = 'var(--space-lg) 0';
        
        const icon = successMessage.querySelector('i');
        icon.style.fontSize = '3rem';
        icon.style.marginBottom = 'var(--space-md)';
        
        // Insert after header
        const header = document.querySelector('header');
        if (header && header.nextElementSibling) {
            header.parentNode.insertBefore(successMessage, header.nextElementSibling);
            
            // Scroll to message
            successMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Remove message after 10 seconds
            setTimeout(() => {
                successMessage.style.transition = 'opacity 0.5s ease';
                successMessage.style.opacity = '0';
                
                setTimeout(() => {
                    successMessage.remove();
                    
                    // Remove order parameter from URL
                    const url = new URL(window.location);
                    url.searchParams.delete('order');
                    window.history.replaceState({}, '', url);
                }, 500);
            }, 10000);
        }
    }
}

/**
 * Update cart count badge
 */
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    // Get cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Calculate total quantity
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update all cart count elements
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        
        // Show/hide based on count
        if (totalItems > 0) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    });
}

/**
 * Format price with currency symbol
 * @param {number} price - Price to format
 * @returns {string} - Formatted price
 */
function formatPrice(price) {
    return '₹' + parseFloat(price).toFixed(2);
}

/**
 * Animate element with fade-in effect
 * @param {HTMLElement} element - Element to animate
 */
function animateElement(element) {
    element.classList.add('fade-in');
}

/**
 * Create and show a notification
 * @param {string} message - Message to display
 * @param {string} type - Type of notification (success, error, info)
 * @param {number} duration - Duration in milliseconds
 */
function showNotification(message, type = 'success', duration = 3000) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <p>${message}</p>
        </div>
        <button class="close-notification"><i class="fas fa-times"></i></button>
    `;
    
    // Apply styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.maxWidth = '300px';
    notification.style.backgroundColor = type === 'success' ? 'var(--success-color)' : type === 'error' ? 'var(--error-color)' : 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = 'var(--space-md)';
    notification.style.borderRadius = 'var(--border-radius-md)';
    notification.style.boxShadow = 'var(--shadow-md)';
    notification.style.zIndex = '1000';
    notification.style.display = 'flex';
    notification.style.justifyContent = 'space-between';
    notification.style.alignItems = 'flex-start';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.display = 'flex';
    notificationContent.style.alignItems = 'center';
    notificationContent.style.gap = 'var(--space-sm)';
    
    const closeButton = notification.querySelector('.close-notification');
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '1rem';
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Close on button click
    closeButton.addEventListener('click', () => {
        removeNotification();
    });
    
    // Auto-remove after duration
    const timeout = setTimeout(removeNotification, duration);
    
    function removeNotification() {
        clearTimeout(timeout);
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }
}

/**
 * Toggle "loading" state for buttons
 * @param {HTMLElement} button - Button element
 * @param {boolean} isLoading - Whether the button is in loading state
 */
function toggleButtonLoading(button, isLoading) {
    if (!button) return;
    
    const originalText = button.getAttribute('data-original-text') || button.innerHTML;
    
    if (isLoading) {
        // Save original text
        button.setAttribute('data-original-text', originalText);
        
        // Replace with loading indicator
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        button.disabled = true;
        button.style.cursor = 'not-allowed';
        button.style.opacity = '0.7';
    } else {
        // Restore original text
        button.innerHTML = originalText;
        button.disabled = false;
        button.style.cursor = 'pointer';
        button.style.opacity = '1';
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Initialize smooth scrolling
initSmoothScroll();
