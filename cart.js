/**
 * ArtisanGems - Cart JavaScript
 * Handles shopping cart functionality
 */

// Initialize cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Constants
const FREE_SHIPPING_THRESHOLD = 5500.00;
const STANDARD_SHIPPING_COST = 450.00;
const EXPRESS_SHIPPING_COST = 950.00;

/**
 * Add a product to cart
 * @param {number} productId - ID of the product to add
 * @param {number} quantity - Quantity to add
 */
function addToCart(productId, quantity = 1) {
    // Get product details
    const product = window.products.find(p => p.id === parseInt(productId));
    
    if (!product) {
        showNotification('Product not found.', 'error');
        return;
    }
    
    // Check if product is already in cart
    const existingItemIndex = cart.findIndex(item => item.id === parseInt(productId));
    
    if (existingItemIndex !== -1) {
        // Update quantity of existing item
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: product.id,
            quantity: quantity,
            // Store selected options if available
            color: getSelectedColor(),
            size: getSelectedSize()
        });
    }
    
    // Save cart to local storage
    saveCart();
    
    // Update cart count
    updateCartCount();
    
    // Show success notification
    showNotification(`${product.name} added to cart.`, 'success');
}

/**
 * Get selected color from product detail page
 * @returns {string|null} - Selected color or null if not applicable
 */
function getSelectedColor() {
    const activeColor = document.querySelector('.color-option.active');
    return activeColor ? activeColor.dataset.color : null;
}

/**
 * Get selected size from product detail page
 * @returns {string|null} - Selected size or null if not applicable
 */
function getSelectedSize() {
    const activeSize = document.querySelector('.size-option.active');
    return activeSize ? activeSize.dataset.size : null;
}

/**
 * Save cart to local storage
 */
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * Update cart quantity
 * @param {number} productId - ID of the product to update
 * @param {number} quantity - New quantity
 */
function updateCartItemQuantity(productId, quantity) {
    const itemIndex = cart.findIndex(item => item.id === parseInt(productId));
    
    if (itemIndex !== -1) {
        if (quantity > 0) {
            cart[itemIndex].quantity = quantity;
        } else {
            // Remove item if quantity is 0 or negative
            cart.splice(itemIndex, 1);
        }
        
        saveCart();
        updateCartCount();
    }
}

/**
 * Remove item from cart
 * @param {number} productId - ID of the product to remove
 */
function removeCartItem(productId) {
    const itemIndex = cart.findIndex(item => item.id === parseInt(productId));
    
    if (itemIndex !== -1) {
        const product = window.products.find(p => p.id === parseInt(productId));
        const productName = product ? product.name : 'Item';
        
        cart.splice(itemIndex, 1);
        saveCart();
        updateCartCount();
        
        showNotification(`${productName} removed from cart.`, 'info');
    }
}

/**
 * Load and display cart items
 */
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmptyMessage = document.getElementById('cart-empty');
    const cartContent = document.getElementById('cart-content');
    
    if (!cartItemsContainer || !cartEmptyMessage || !cartContent) return;
    
    if (cart.length === 0) {
        // Show empty cart message
        cartEmptyMessage.classList.remove('hidden');
        cartContent.classList.add('hidden');
        return;
    }
    
    // Show cart content
    cartEmptyMessage.classList.add('hidden');
    cartContent.classList.remove('hidden');
    
    // Clear container
    cartItemsContainer.innerHTML = '';
    
    // Display cart items
    cart.forEach(item => {
        const product = window.products.find(p => p.id === item.id);
        
        if (product) {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.dataset.id = product.id;
            
            // Format options text
            let optionsText = '';
            if (item.color) {
                optionsText += `Color: ${capitalizeFirstLetter(item.color)}`;
            }
            if (item.size) {
                optionsText += optionsText ? `, Size: ${item.size}` : `Size: ${item.size}`;
            }
            
            cartItem.innerHTML = `
                <div class="product-col">
                    <div class="cart-product-img">
                        <img src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="cart-product-info">
                        <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                        <p>${optionsText}</p>
                    </div>
                </div>
                <div class="price-col">${formatPrice(product.price)}</div>
                <div class="quantity-col">
                    <div class="cart-quantity">
                        <button class="quantity-decrease"><i class="fas fa-minus"></i></button>
                        <input type="number" value="${item.quantity}" min="1" max="99" class="cart-item-quantity">
                        <button class="quantity-increase"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <div class="total-col">${formatPrice(product.price * item.quantity)}</div>
                <div class="remove-col">
                    <button class="remove-btn"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            
            // Add event listeners
            const quantityInput = cartItem.querySelector('.cart-item-quantity');
            const decreaseBtn = cartItem.querySelector('.quantity-decrease');
            const increaseBtn = cartItem.querySelector('.quantity-increase');
            const removeBtn = cartItem.querySelector('.remove-btn');
            
            quantityInput.addEventListener('change', function() {
                const newQuantity = parseInt(this.value);
                if (newQuantity >= 1 && newQuantity <= 99) {
                    updateCartItemQuantity(product.id, newQuantity);
                    loadCartItems();
                    updateCartTotals();
                }
            });
            
            decreaseBtn.addEventListener('click', function() {
                const currentQuantity = parseInt(quantityInput.value);
                if (currentQuantity > 1) {
                    const newQuantity = currentQuantity - 1;
                    updateCartItemQuantity(product.id, newQuantity);
                    loadCartItems();
                    updateCartTotals();
                }
            });
            
            increaseBtn.addEventListener('click', function() {
                const currentQuantity = parseInt(quantityInput.value);
                if (currentQuantity < 99) {
                    const newQuantity = currentQuantity + 1;
                    updateCartItemQuantity(product.id, newQuantity);
                    loadCartItems();
                    updateCartTotals();
                }
            });
            
            removeBtn.addEventListener('click', function() {
                removeCartItem(product.id);
                loadCartItems();
                updateCartTotals();
            });
            
            cartItemsContainer.appendChild(cartItem);
        }
    });
    
    // Update cart totals
    updateCartTotals();
}

/**
 * Update cart button functionality
 */
function updateCart() {
    // Get all quantity inputs
    const quantityInputs = document.querySelectorAll('.cart-item-quantity');
    
    // Update quantities for all items
    quantityInputs.forEach(input => {
        const cartItem = input.closest('.cart-item');
        const productId = parseInt(cartItem.dataset.id);
        const quantity = parseInt(input.value);
        
        if (quantity >= 1 && quantity <= 99) {
            updateCartItemQuantity(productId, quantity);
        }
    });
    
    // Reload cart items
    loadCartItems();
    
    // Show notification
    showNotification('Cart updated successfully.', 'success');
}

/**
 * Calculate and update cart totals
 */
function updateCartTotals() {
    const subtotalElement = document.getElementById('cart-subtotal');
    const totalElement = document.getElementById('cart-total');
    const freeShippingNotification = document.getElementById('free-shipping-notification');
    const freeShippingThreshold = document.getElementById('free-shipping-threshold');
    const amountForFreeShipping = document.getElementById('amount-for-free-shipping');
    const thresholdProgress = document.getElementById('threshold-progress');
    const standardShippingCostElement = document.getElementById('standard-shipping-cost');
    
    if (!subtotalElement || !totalElement) return;
    
    // Calculate subtotal
    let subtotal = 0;
    
    cart.forEach(item => {
        const product = window.products.find(p => p.id === item.id);
        if (product) {
            subtotal += product.price * item.quantity;
        }
    });
    
    // Update subtotal
    subtotalElement.textContent = formatPrice(subtotal);
    
    // Check for free shipping
    let shippingCost = 0;
    
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        // Free shipping
        if (freeShippingNotification) {
            freeShippingNotification.classList.remove('hidden');
        }
        if (freeShippingThreshold) {
            freeShippingThreshold.classList.add('hidden');
        }
        if (standardShippingCostElement) {
            standardShippingCostElement.textContent = 'FREE';
        }
    } else {
        // Calculate shipping cost
        const shippingMethod = document.querySelector('input[name="shipping"]:checked');
        
        if (shippingMethod && shippingMethod.value === 'express') {
            shippingCost = EXPRESS_SHIPPING_COST;
        } else {
            shippingCost = STANDARD_SHIPPING_COST;
        }
        
        // Update free shipping threshold display
        if (freeShippingNotification) {
            freeShippingNotification.classList.add('hidden');
        }
        
        if (freeShippingThreshold) {
            freeShippingThreshold.classList.remove('hidden');
            
            // Calculate amount needed for free shipping
            const amountNeeded = FREE_SHIPPING_THRESHOLD - subtotal;
            
            if (amountForFreeShipping) {
                amountForFreeShipping.textContent = formatPrice(amountNeeded);
            }
            
            // Update progress bar
            if (thresholdProgress) {
                const progressPercentage = (subtotal / FREE_SHIPPING_THRESHOLD) * 100;
                thresholdProgress.style.width = `${progressPercentage}%`;
            }
        }
        
        if (standardShippingCostElement) {
            standardShippingCostElement.textContent = formatPrice(STANDARD_SHIPPING_COST);
        }
    }
    
    // Calculate total
    const total = subtotal + shippingCost;
    
    // Update total
    totalElement.textContent = formatPrice(total);
}

/**
 * Load order summary for checkout page
 */
function loadOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');
    const orderSubtotalElement = document.getElementById('order-subtotal');
    const orderShippingElement = document.getElementById('order-shipping');
    const orderTotalElement = document.getElementById('order-total');
    
    if (!orderItemsContainer || !orderSubtotalElement || !orderShippingElement || !orderTotalElement) return;
    
    // Clear container
    orderItemsContainer.innerHTML = '';
    
    // Calculate subtotal
    let subtotal = 0;
    
    // Display order items
    cart.forEach(item => {
        const product = window.products.find(p => p.id === item.id);
        
        if (product) {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            
            // Calculate item total
            const itemTotal = product.price * item.quantity;
            subtotal += itemTotal;
            
            orderItem.innerHTML = `
                <div class="order-item-name">
                    ${product.name} <span class="order-item-quantity">x${item.quantity}</span>
                </div>
                <div class="order-item-price">${formatPrice(itemTotal)}</div>
            `;
            
            orderItemsContainer.appendChild(orderItem);
        }
    });
    
    // Determine shipping cost
    let shippingCost = 0;
    
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        // Free shipping
        orderShippingElement.innerHTML = '<strong>FREE</strong>';
    } else {
        // Standard shipping
        shippingCost = STANDARD_SHIPPING_COST;
        orderShippingElement.textContent = formatPrice(shippingCost);
    }
    
    // Calculate total
    const total = subtotal + shippingCost;
    
    // Update subtotal and total
    orderSubtotalElement.textContent = formatPrice(subtotal);
    orderTotalElement.textContent = formatPrice(total);
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
 * Capitalize the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Export functions for use in other scripts
window.addToCart = addToCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeCartItem = removeCartItem;
window.loadCartItems = loadCartItems;
window.updateCart = updateCart;
window.updateCartTotals = updateCartTotals;
window.loadOrderSummary = loadOrderSummary;

// Initialize cart count when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});
