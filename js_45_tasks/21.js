/* They think of something you could store in a JavaScript Object. Write a program that creates Objects
containing these items.  */

const mountains = [
    { name: 'Mount Everest', elevation: 29028 },
    { name: 'K2', elevation: 28251 },
    { name: 'Kangchenjunga', elevation: 28169 },
    { name: 'Lhotse', elevation: 27940 },
    { name: 'Makalu', elevation: 27838 }
  ];
  
  console.log(mountains);
  
console.log(mountains[0].name);  // Output: "Mount Everest"
console.log(mountains[1]['elevation']);  // Output: 28251
