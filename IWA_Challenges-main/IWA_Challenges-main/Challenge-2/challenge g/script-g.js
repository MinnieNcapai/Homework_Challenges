// Constants for warnings and default selections
const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

// Variables for location, shipping cost, currency, and number of customers
let location = 'RSA'; // RSA as default location
let shipping = 0;
let currency = 'R';
let customers = 1;

// Set shipping cost and currency based on the location
if (location === 'RSA') {
    shipping = 400;
    currency = 'R'; // Set currency to Rand (R)
} else if (location === 'NAM') {
    shipping = 600;
} else {
    shipping = 800;  // For all other locations, set shipping cost to 800
}

// Calculation of total cost for each product
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * (NONE_SELECTED === '0' ? 0 : NONE_SELECTED);
let batteries = 35 * 2;
let pens = 5 * (NONE_SELECTED === '0' ? 0 : NONE_SELECTED);

// Calculate the total cost of all selected items
let total = shoes + toys + shirts + batteries + pens;

// Apply free shipping conditions if total cost exceeds R1000
if (total > 1000) { // Check if the total price exceeds R1000
    if (location === 'NAM' && customers < 2) {  
        shipping = 0;
    } else if (location === 'RSA') {
        shipping = 0; // Set shipping to 0 (free shipping)
    }
}

// Check if free shipping applies and display a warning message if needed
if (shipping === 0 && customers === 1) {  // Free shipping is only for single customer orders
    console.log(FREE_WARNING);
}

// Display warning if shipping is restricted
if (location === 'NK') {
    console.log(BANNED_WARNIN);
} else {
    console.log('price', currency, total + shipping); // Display total price with shipping
}