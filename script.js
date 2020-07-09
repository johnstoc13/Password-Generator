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

    // Cited: https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_number
    if (lengthPass < 8 || lengthPass > 128 || isNaN(lengthPass)) {
        alert("Please select a number between 8 and 128.");
        return "";
    }
    // else {
    //     alert("Select at least one password criteria box to continue.");
    //     return "";
    // }


    // // Validate the password length & loop to create finalPass
    
    // else if{
    //     for (let i = 0; i < lengthPass; i++) {
    //         let num = Math.floor(Math.random() * lengthPass);
    //         return password;
    //     }
    // }
    

    // NOTES FROM JULY 9th
    // Form is not reading password length.




    // need to create a string as an output
    // for loop is n chars long... want to create a reandom string containing these
    // selected options
    // randomly select chars from potential array
    
}








// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);