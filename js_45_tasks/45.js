/*45. Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make sure 
all the information was stored correctly. */

function create_cars(manufacturer, model, color, charging_cost) {
    const car = {
        manufacturer,
        model,
    }

    if (color) {
        car["color"] = color;
    }

    if (charging_cost) {
        car["charging_Cost"] = charging_cost ;
    }

    return car;
}


console.log(create_cars("Tesla", "3", "Red", "$10.45"))