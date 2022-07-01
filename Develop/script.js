// Assignment code here
//assign variables for different password options
// var password = ;
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
var alphaHigh = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var nums = ["0123456789"];
var speChars = ["#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

//prompt user for each option, add to 'usable' array if user agrees/wants
var passOps = function () {
  var usable = [];
  var length = prompt(
    "How many characters should the password be? (Between 8 - 128)"
  );
  if (length >= 8 && length <= 128) {
  } else if (length < 8 || length > 128) {
    passOps();
  }
  var caps = confirm("Use uppercase letters?");
  var lower = confirm("Use lowercase letters?");
  var numbers = confirm("Use numbers?");
  var special = confirm("Use special characters?");
  if (caps === true) {
    usable = usable.concat(alphaHigh);
    console.log(usable);
  }
  if (lower === true) {
    usable.concat(alphaLow);
    console.log(usable);
  }
  if (numbers === true) {
    usable.concat(nums);
    console.log(usable);
  }
  if (special === true) {
    usable.concat(speChars);
    console.log(usable);
  }
  console.log(usable);
  return usable;
};

function generatePassword() {
  passOps();
}
//loop through for the length to make characters generate for each position in the password
for (let i = 1; i == length; i++) {
  const passwordText = usable[Math.floor(Math.random() * length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("writePassword");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
