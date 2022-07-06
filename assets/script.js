//assign variables for different password options
var alphaLow = "abcdefghijklmnopqrstuvwxyz";
var alphaHigh = alphaLow.toUpperCase();
var nums = "0123456789";
var speChars = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//declare global variables
var passLength;
var passwordList = "";
var password = "";
//prompt user for each option, add to 'passwordList' string if user agrees/wants

var passOps = function () {
  //password is keeping track of final product, passwordList is keeping track of approved characters
  passLength = prompt(
    "How many characters should the password be? (Between 8 - 128)"
  );
  //this code makes sure the password is NOT less than 8, greater than 128, or has alphanumeric characters
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Valid number not entered");
    passLength = prompt(
      "How many characters should the password be? (Between 8 - 128)"
    );
  }
  //use confirm prompts to get boolean data types for answers to see what the user wants included in the passwordList
  var caps = confirm("Use uppercase letters?");
  var lower = confirm("Use lowercase letters?");
  var numbers = confirm("Use numbers?");
  var special = confirm("Use special characters?");
  //if any of the results from the confirm boxes are true, adds the selected dataset to passwordList
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
  //returns the whole pool of possible characters to use
  return passwordList;
};

function generatePassword() {
  passOps();

  //loop through for the length to make characters generate for each position in the password
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

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
