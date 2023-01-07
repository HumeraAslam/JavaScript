/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False 
result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

// Test for equality and inequality with strings
console.log("abc" == "abc"); // true
console.log("abc" == "def"); // false
console.log("abc" != "abc"); // false
console.log("abc" != "def"); // true

// Test using the lower case function
console.log("ABC".toLowerCase() == "abc"); // true
console.log("ABC".toLowerCase() == "def"); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 2); // false
console.log(1 <= 2); // true

// Tests using "and" and "or" operators
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Test whether an item is in an array
let arr = [1, 2, 3];
console.log(arr.includes(1)); // true
console.log(arr.includes(4)); // false

// Test whether an item is not in an array
console.log(!arr.includes(1)); // false
console.log(!arr.includes(4)); // true
