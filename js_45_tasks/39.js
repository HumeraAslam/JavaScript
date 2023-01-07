/*39. City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned. */

function describe_city(city, country) {
    return `${city}, ${country}`;
}

console.log(describe_city("Lahore", "Pakistan"))
console.log(describe_city("Karachi", "Pakistan"))
console.log(describe_city("Jaddah", "Saudia Arabia"))