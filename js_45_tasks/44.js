/*44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time. */


function make_sandwich(items){
    console.log(`The sandwich should consist of following items: ${items.join(', ')}.`)
}
console.log("A summary of the sandwich that is being ordered:")
make_sandwich(['egg', 'pepper', 'cucumber', "Tomato"])
make_sandwich(['chicken', 'cheese', "pepper", "Tomato"])
make_sandwich(['boiled potatos','beetroot', 'pepper', 'cucumber', 'cheese'])

