/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

const users = ['Aslam', 'Asad', 'admin', 'Ali', 'Shahbaz'];

if (users.length === 0) {
  console.log('We need to find some users!');
} else {
  console.log('There are users in the list.');
}

// Now let's remove all of the users from the list
users.length = 0;

if (users.length === 0) {
  console.log('We need to find some users!');
} else {
  console.log('There are users in the list.');
}
