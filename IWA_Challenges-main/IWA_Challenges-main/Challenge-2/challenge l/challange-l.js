const leoName = 'Leo' ;
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';  // User's balance (negative)

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';  // User's balance (negative)

const divider = '----------------------------------'

// Only change below this line

// Construct Leo's output strings 
const leo = `${leoName} ${leoSurname} Owed: R${Math.abs(leoBalance)}`;
// Construct Sarah's output string
const sarah = `${sarahName} ${sarahSurname} Owed: R${Math.abs(sarahBalance)}`;
// Calculate the total amount owed and format it as a string
const total =`Total amount owed: R${Math.abs(parseFloat(leoBalance) + parseFloat(sarahBalance))}`;
// Combine all parts into a single result string, including dividers and newlines
const result = `${leo}\n${sarah}\n${divider}\n${total}\n${divider}`;

// Log the final output to the console
console.log(result)

//const owed = parseFloat('R' + leoBalance + sarahBalance)




