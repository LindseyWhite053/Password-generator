function generatePassword() {
// empty string variable for the for loop below
var password = "password";

var minNumbers = ""
var minLowerCase = ""
var minUpperCase = ""
var minSpecialCharacters = ""

//number of characters prompt
var promptPasswordMin = window.prompt ("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");

//lower case characters prompt
var promptPasswordMax = window.confirm ("Include lower case characters in your password?");

//uppercase characters prompt
var promptPasswordMax = window.confirm ("Include uppercase characters in your password?");

//special characters prompt
var promptPasswordMax = window.confirm ("Include special characters in your password?");


//return generated password
return password;
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
