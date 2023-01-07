/* 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

let guests = ['Molana Tariq Jameel', 'Imran Khan', 'Zulfiqar Ahmed Naqshbandi'];

guests.unshift('Sir Zia Khan');
guests.splice(2, 0, 'Sir Kashif');
guests.push('Sir Majid');

console.log(`I found a bigger dinner table and can now invite more guests!`);

for (const guest of guests) {
  console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}
