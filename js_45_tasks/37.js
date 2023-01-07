/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message. */

function make_shirt(size = "large", message = "I love JavaScript"){
    console.log(`Size of the shirt should be ${size}. 
    And should contain a message ${size === "large" || size === "medium"? "I love JavaScript" : message}`)
}

make_shirt("large")
make_shirt("medium")
make_shirt("small", "If you can dream it, you can do it.")