// Assignment Code
// comments exist
//The btn to start 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //calling the function to generatePassword
  var password = generatePassword();
  // grabbing the document id of #password
  var passwordText = document.querySelector("#password");
  // setting passwordText to the generated Password
  passwordText.value = password;
}

var specialArray = ["!#$\"%& '()*+,-./:;<=>?@[\]^_`{|}~"];
var numArray = ["0123456789"];
var alphabet = ["abcdefghijklmnopqrstuvwxyz"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password
function generatePassword() {

  //declaring var to save the generated pass;
  var generatedPass = "";

  // this prompt is for asking the user for the password length > 8
  let passwordLength = window.prompt("Enter the desired length of the password", "Length");
  // if cancelled by the user this will happen
  if (passwordLength == null) {
    passwordLength = "User cancelled the prompt.";
    return passwordLength;
  }
  // make sure the submitted number is less than 128
  else if (parseInt(passwordLength) > 128) {
    passwordLength = "Needs to be less than 128.";
    return passwordLength;
  }
  // make sure the submited number is greater than 8
  else if (parseInt(passwordLength) < 8) {
    passwordLength = "Password length needs to be higher than 8."
    return passwordLength;
  }

  // Ask the user if they want to allow special char
  var passSpecial = askSpecial();
  //ask the user if they want uppercase char
  var passUpper = askUpper();
  //ask the user if they want lowercase char
  var passLower = askLower();
  //ask the user if they want numbers in the char
  var passNumber = askNum();

  //declare array to store the possible char
  var possibleChar = [];

  // if user wanted special char it gets added to the array
  if (passSpecial) {
    possibleChar = possibleChar.concat(specialArray);
  }
  // if user wanted lower char it gets added to the array
  if (passLower) {
    possibleChar = possibleChar.concat(alphabet);
  }
  // if user wanted num char it gets added to the array
  if (passNumber) {
    possibleChar = possibleChar.concat(numArray);
  }
  // if user wanted Upper char it gets added to the array
  if (passUpper) {
    var temp = [];
    temp = alphabet.map(index => {
      return index.toUpperCase();
    });
    possibleChar = possibleChar.concat(temp);
  }

  // final check to make sure there is an input on one of the prompts
  // if all are false 
  if (!passSpecial && !passLower && !passUpper && !passNumber) {
    return "Nothing selected, no password generated!";
  }

  //make possibleChar into string
  var arrayConversion = possibleChar.toString();

  for (var i = 0; i < parseInt(passwordLength); i++) {
    // I want to grab the char from the possible array
    //grab char at index of random number
    generatedPass = generatedPass + arrayConversion.charAt(Math.floor(Math.random() * (parseInt(passwordLength) + 1)));
  }

  return generatedPass;

}

function askSpecial() {
  //this is a prompt asking for special char
  var specialChar = false;
  if (confirm("Do you want special char?")) {
    specialChar = true;
    return true;
  } else {
    return false;
  }
}

// this is a prompt asking if the user wants uppercase
function askUpper() {
  var upperChar = false;
  if (confirm("Do you want uppercase char?")) {
    upperChar = true;
    return upperChar;
  } else {
    return upperChar;
  }
}

// this is a prompt asking if the user wants lowercase
function askLower() {
  var lowerChar = false;
  if (confirm("Do you want lowercase char?")) {
    lowerChar = true;
    return lowerChar;
  } else {
    return lowerChar;
  }
}

// this is a prompt asking if the user wants numbers
function askNum() {
  var numChar = false;
  if (confirm("Do you want numbers?")) {
    numChar = true;
    return numChar;
  } else {
    return numChar;
  }
}

//run a prompt to confirm what the User wants
//x4
//boolean for each setting
//length of password, this has to be an input number from user
//numeric char [0-9 !@#$%^&*()-=,.<>_+/`~]
//uppercase
//lowercase

//generate with the answers above
//if yes to special char then access specialChar []
//if yes to




