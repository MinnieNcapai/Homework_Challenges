
const nickname= "Timmy";  // User's nickname
const firstname = "Timothy"; // User's first name

// Log a greeting based on the presence of nickname or firstname
console.log(`Good Morning${nickname || firstname ? ', ' + (nickname || firstname) : ''}!`);
