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

// Password Generator
function generatePassword() {

    // Create an array for possible password
    let possiblePass = [];

    // Create an array for newly created password
    let createdPass = [];

    // Obtain password length in order to validate
    // Cited: https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
    let pwLength = document.querySelector("#length").value;

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

    // Loop to generate password
    for(i = 0; i < pwLength; i++) {
        createdPass.push(possiblePass[Math.floor(Math.random() * possiblePass.length)])
    }

    // Validates password length
    // Cited: https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_number
    if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
        alert("Please select a number between 8 and 128.");
        return "";
    }
    // Validates that at least one box is checked
    if (!lowerPass.checked && !upperPass.checked && !numberPass.checked && !specialPass.checked)  {
        alert("Select at least one password criteria box to continue.");
        return "";
    }

    // Takes array of created password and joins to make string of final password
    let finalPass = createdPass.join("");
    return finalPass;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);