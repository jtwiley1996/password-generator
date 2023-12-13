var generateBtn = document.querySelector("#generate");


function generatePassword() {

var lowerCaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var miscSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
// These will prompt the User for how many characters they'd like, and what kind they'd like to use //
var numChar = prompt("How many characters?");
var numbers = confirm ("you want numbers? OK for yes/Cancel for no");
var uppercases = confirm ("you want uppercase? OK for yes/Cancel for no");
var lowercases = confirm ("you want lowercases? OK for yes/Cancel for no");
var characters = confirm ("you want misc. characters OK for yes/Cancel for no");

//These are empty arrays for storing our resulting character selection and the eventual password array//
var userPassword = [];
var result = [];

//This section is to add any of the character arrays that are chosen(or not chosen) to the resulting array//
if (numbers) {
  result = result.concat(numberSet);
  
}

if (uppercases) {
  result = result.concat(upperCaseSet);

}

if (lowercases) {
  result = result.concat(lowerCaseSet);

}

if (characters) {
  result = result.concat(miscSet);
}
//logs all characters for the random selection//
console.log(result);

for (var i = 0; i < numChar; i++) {
  userPassword.push(result[Math.floor(Math.random() * result.length)]);
}
//shows the final random characters in the console log
console.log(userPassword);
return userPassword.join('');
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Shows the joined array in the textbox on the screen
generateBtn.addEventListener("click", writePassword);