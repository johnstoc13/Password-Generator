// # password generator (office hours rundown)
//   event listener
//   - on click some button
//   - someElem.addEventListener("click", function() {})
//   prompt user for input
//     1. num of char
//      - validate user input for 8 > num < 129
//      - validate for a number
//     - bunch of booleans
//   approaches for possible password chars
//     1. uild array for potential chars
//       booleans if branches to add char
//     2. acii ref for char
//       - use random num for range within ascii char code for upper or lower, etc
//   loop through length of pass to add a char to password
//   finally displaying password


// Arrays for all possible characters

const lowerCase = "abcdefghijklmnopqrstuvwxyz".split(" ");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ");
const numbers = "0123456789".split(" ");
const specialChars = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~`.split(" ");