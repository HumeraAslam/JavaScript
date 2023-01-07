 /*3.Name Cases: Store a person’s name in a variable, and then print that  
person’s name in lowercase, uppercase, and titlecase.*/

let Name = "Humera";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
function toTitleCase(h){
    return h.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
}

console.log(toTitleCase(Name));