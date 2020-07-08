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

function generatePassword() {

    // Create an array for possible password
    let possiblePass = [];

    // Create an array for generated password
    let finalPass = [];

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
    else {
        alert("Select at least one password criteria box to continue.");
    }


    // // Validate the password length & loop to create finalPass
    // if (lengthPass < 8 || lengthPass > 128) {
    //     alert("Please select a number between 8 and 128.");
    //     return "";
    // }
    // else if{
    //     for (let i = 0; i < lengthPass; i++) {
    //         let num = Math.floor(Math.random() * lengthPass);
    //         return password;
    //     }
    // }
    // else {
    //     alert("Select at least one password criteria box to continue.");
    //     return "";
    // }


    // Still trying to figure out how to loop through 
    // and arrange if/else statements....
    // Need to do more research
    
}






// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);