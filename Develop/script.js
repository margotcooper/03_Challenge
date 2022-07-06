// Assignment code here
//assign variables for different password options
// var password = ;
var alphaLow = "abcdefghijklmnopqrstuvwxyz";
var alphaHigh = alphaLow.toUpperCase();
var nums = "0123456789";
var speChars = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//[
//   "#",
//   "$",
//   "%",
//   "&",
//   "'",
//   "(",
//   ")",
//   "*",
//   "+",
//   ",",
//   "-",
//   ".",
//   "/",
//   ":",
//   ";",
//   "<",
//   "=",
//   ">",
//   "?",
//   "@",
//   "[",
//   "]",
//   "^",
//   "_",
//   "`",
//   "{",
//   "|",
//   "}",
//   "~",
// ];
var passLength;
var passwordList = "";
var password = "";
//prompt user for each option, add to 'passwordList' array if user agrees/wants

var passOps = function () {
  //password is keeping track of final product, passwordList is keeping track of approved characters (passwordList)
  passLength = prompt(
    "How many characters should the password be? (Between 8 - 128)"
  );

  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Valid number not entered");
    passLength = prompt(
      "How many characters should the password be? (Between 8 - 128)"
    );
  }
  var caps = confirm("Use uppercase letters?");
  var lower = confirm("Use lowercase letters?");
  var numbers = confirm("Use numbers?");
  var special = confirm("Use special characters?");
  if (caps === true) {
    passwordList += alphaHigh;
  }
  if (lower === true) {
    passwordList += alphaLow;
  }
  if (numbers === true) {
    passwordList += nums;
  }
  if (special === true) {
    passwordList += speChars;
  }
  return passwordList;
};

function generatePassword() {
  passOps();

  //loop through for the length to make characters generate for each position in the
  if (passLength > 0) {
    for (var i = 0; i <= passLength; i++) {
      password += passwordList[Math.floor(Math.random() * passLength)];
      console.log(password);
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
generatePassword();
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   // console.log("writePassword");
//   var password = generatePassword();
//   var passwordText =
// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
