/*35. Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet! */

const animals = ["dog", "deer", "cat"];

for (let i = 0; i < animals.length; ++i) {
    if (animals[i] === "dog") {
        console.log("A dog would make a great pet.")
    } else if (animals[i] === "deer") {
        console.log("A deer is a beautifull pet.")
    } else if (animals[i]==="cat") {
        console.log("A cat is a cute pet.")
    }
}
console.log(`"All of these pets have four legs."`)