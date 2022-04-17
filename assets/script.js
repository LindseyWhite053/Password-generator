var password = "";
var passwordLength = ""
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacters = ""
var allCharacters = ""

//Determine password length
function getPasswordLength (){
  while (passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
    passwordLength = prompt("Please enter the number of characters you want for your new password.  It must be more than 8 but less than 128 characters.");
  }
  
  console.log("Password length will be " + passwordLength + " charaters long");
}

//lower case characters prompt
function getLowerCase () {
  var lowerCaseConfirm = window.confirm("Would you like to include lower case characters in your password?");
  if (lowerCaseConfirm) {
    allCharacters = allCharacters + lowerCase
    console.log("Lowercase included in password");
  } 
}

//uppercase characters prompt
function getUpperCase () {
  var upperCaseConfirm = window.confirm ("Would you like to include uppercase characters in your password?");
  if (upperCaseConfirm) {
    allCharacters = allCharacters + upperCase
    console.log("Uppercase included in password");
  }
}

//special characters confirmation

function generatePassword() {

//run password criteria prompts
getPasswordLength();

getLowerCase();

getUpperCase();

//show which charaacters will be included in password
console.log ("All characters included in password generation will be" + allCharacters)

//generate password with given criteria 

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
