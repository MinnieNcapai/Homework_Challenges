// Set initial values for date, status, and count
let  date = 2050
let status = 'student'
let count = 0
 
// Check if the year is 2050
if (date === 2050) {
console.log("January", 'New Year’s Day')
console.log("March", 'Human Rights Day')
date = 'April' // Change the date to April
console.log(date, 'Family Day')
console.log(date, 'Freedom Day')
count = count + 4 // Increase holiday count by 4

 // Check if status is 'student'
if (status === "student") {
 console.log('June', 'Youth Day')
  count = count + 1 // Increase holiday count by 1
 }
}


console.log('August', 'Women’s Day')
console.log('September', 'Heritage Day')
date = 'December' // Change the date to December
console.log(date, 'Day of Reconciliation')
 count = count + 3 // Increase holiday count by 1
 
 // Check if status is 'parent
if (status = "parent") {
 console.log(date, 'Christmas Day')
 count = count + 1 // Increase holiday count by 1
}


console.log(date, 'Day of Goodwill')
 count = count + 1 // Increase holiday count by 1

 // Show status, year, and holidays
console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)