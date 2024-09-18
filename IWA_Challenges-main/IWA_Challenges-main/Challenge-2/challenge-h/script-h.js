// Define primary and secondary phone numbers as strings
const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Use the primary phone number if it exists, otherwise use the secondary phone number
let number = primaryPhone || secondaryPhone;

// Only change below this line

// Function to check if a string contains only numeric characters
const isNumeric = (str) => /^\d+$/.test(str);

//Check if primaryPhone is a string of numeric characters only
const primaryValid = typeof primaryPhone === 'string' && isNumeric(primaryPhone);

//Check if secondaryPhone is a string of only numbers.
const secondaryValid = typeof secondaryPhone === 'string' && isNumeric(secondaryPhone);

// Log the validation results to the console
console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);