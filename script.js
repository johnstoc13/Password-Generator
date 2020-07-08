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

// Generate password button
const generateBtn = document.querySelector("#generate");

// Generate password criteria
const lowerPass = document.querySelector("#lower");
const upperPass = document.querySelector("#upper");
const numberPass = document.querySelector("#number");
const specialPass = document.querySelector("#special");
const lengthPass = document.querySelector("#length");

// Actual password generator


//LEFT OFF HERE********************** 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
