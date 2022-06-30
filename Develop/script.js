// Assignment code here
//assign variables for different password options
// var password = ;
var alphaLow = "abcdefghijklmnopqrstuvwxyz";
var alphaHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var speChars = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var usable = new Array();

//prompt user for each option, add to 'usable' array if user agrees/wants
var length = prompt(
  "How many characters should the password be? (Between 8 - 128)"
);
if (length >= 8 && length <= 128) {
  usable.length = "length";
} else length < 8 || length > 128;
{
  prompt("How many characters should the password be? (Between 8 - 128)");
}
var caps = prompt("Use uppercase letters? (Y/N)");
if (caps === "Y") {
  "usable" + "alphaHigh";
}
if (caps === "N") {
  usable = [];
}
var lower = prompt("Use lowercase letters? (Y/N)");
if (lower === "Y") {
  "usable" + "alphaLow";
}
if (caps === "N") {
  usable = [];
}
var special = prompt("Use special characters? (Y/N)");
if (special === "Y") {
  "usable" + "speChars";
}
if (special === "N") {
  usable = [];
}

//loop through for the length to make characters generate for each position in the password
for (let i = 1; i == length; i++) {
  const passwordText = usable[Math.floor(Math.random() * length)];
}

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
