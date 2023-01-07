/* 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point, 
 just add your name and the current date at the top of each program file. 
 Then write one sentence describing what the program does.*/

 // This program calculates the area of a rectangle

function calculateArea(length, width) {
    // Calculate the area
    const area = length * width;
    
    // Return the result
    return area;
  }
  
  // Test the function with different values
  console.log(calculateArea(5, 10)); // Output: 50
  console.log(calculateArea(2, 8)); // Output: 16
  console.log(calculateArea(7, 3)); // Output: 21

  // Here is another example of JavaScript program:

  console.log ("This program converts temperatures between Celsius and Fahrenheit")

function celsiusToFahrenheit(celsius) {
    // Convert celsius to fahrenheit
    const fahrenheit = celsius * (9/5) + 32;
    
    // Return the result
    return fahrenheit;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    // Convert fahrenheit to celsius
    const celsius = (fahrenheit - 32) * (5/9);
    
    // Return the result
    return celsius;
  }
  
  // Test the functions with different values
  console.log(celsiusToFahrenheit(0)); // Output: 32
  console.log(fahrenheitToCelsius(32)); // Output: 0
  console.log(celsiusToFahrenheit(100)); // Output: 212
  console.log(fahrenheitToCelsius(212)); // Output: 100
  