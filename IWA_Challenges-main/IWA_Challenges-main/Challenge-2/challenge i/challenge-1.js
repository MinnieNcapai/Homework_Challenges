const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

let balance = 0;

// Check if it's exactly midnight (00:00)
if (hourOfDay === 0 && minuteOfDay === 0) {
// Convert the tax percentage (in string form) to a decimal value
	const taxAsDecimal = parseFloat(tax) / 100; // Convert '8%' to decimal
// Calculate salary after tax
	const startingAfterTax = salary * (1 - taxAsDecimal); 
// Subtract expenses from salary after tax  
	const balance = startingAfterTax - transport - food - rent; // Calculate balance

    // Output the balance rounded to 2 decimal places
	console.log(balance.toFixed(2)); 
}
	

