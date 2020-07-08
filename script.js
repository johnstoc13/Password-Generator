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
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`.split("");

// Generate password button
const generateBtn = document.querySelector("#generate");

// Generate password criteria
const lowerPass = document.querySelector("#lower");
const upperPass = document.querySelector("#upper");
const numberPass = document.querySelector("#number");
const specialPass = document.querySelector("#special");
const lengthPass = document.querySelector("#length");

// Create an array for possible password
let possiblePass = [];

// Create an array for generated password
let finalPass =[];

// Add checked options to the possible password array
if (lowerPass.checked) {
    possiblePass = possiblePass.concat(lowerCase);
}
if (upperPass.checked) {
    possiblePass = possiblePass.concat(upperCase);
}
if (numberPass.checked) {
    possiblePass = possiblePass.concat(numbers);
}
if (specialPass.checked) {
    possiblePass = possiblePass.concat(specialChars);
}


// Need to validate the password length
// Need to loop through possiblePass to create finalPass based on lengthPass


if (lengthPass < 8 || lengthPass > 128) {
    alert ("Please select a number between 8 and 128.");
}
else {
    for (var i = 0; i < lengthPass; i++) {
        var num = Math.floor(Math.random() * lengthPass);
    }
}


//Borrowed from previous activity to recall looping 
for (var i = 0; i < 10; i++) {
    // Generate a random number between 1 and 10
    // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
    var num = Math.floor(Math.random() * 10) + 1;

    // Display in console
    console.log(num);
  }








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
