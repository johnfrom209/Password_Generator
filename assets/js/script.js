// Assignment Code
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
  if (passwordLength == null) {
    passwordLength = "User cancelled the prompt.";
    return passwordLength;
  }
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

  var possibleChar = [];

  if (passSpecial) {
    possibleChar = possibleChar.concat(specialArray);
  }

  if (passLower) {
    possibleChar = possibleChar.concat(alphabet);
  }

  if (passNumber) {
    possibleChar = possibleChar.concat(numArray);
  }

  if (passUpper) {
    var temp = [];
    temp = alphabet.map(index => {
      return index.toUpperCase();
    });
    console.log(temp);
    possibleChar = possibleChar.concat(temp);
  }

  //make possibleChar into string
  var arrayConversion = possibleChar.toString();


  for (var i = 0; i < parseInt(passwordLength); i++) {
    // I want to grab the char from the possible array
    //grab char at index of random number
    generatedPass = generatedPass + arrayConversion.charAt(Math.floor(Math.random() * (passwordLength + 1)));
    console.log(generatedPass);
  }

  return generatedPass;

}

function askSpecial() {
  //this is a prompt asking for special char
  var specialChar = false;
  if (confirm("Do you want special char?")) {
    specialChar = true;
    console.log(specialChar);
    return true;
  } else {
    console.log(specialChar);
    return false;
  }
}

// this is a prompt asking if the user wants uppercase
function askUpper() {
  var upperChar = false;
  if (confirm("Do you want uppercase char?")) {
    upperChar = true;
    console.log(upperChar);
    return upperChar;
  } else {
    console.log(upperChar);
    return upperChar;
  }
}

// this is a prompt asking if the user wants lowercase
function askLower() {
  var lowerChar = false;
  if (confirm("Do you want lowercase char?")) {
    lowerChar = true;
    console.log(lowerChar);
    return lowerChar;
  } else {
    console.log(lowerChar);
    return lowerChar;
  }
}

// this is a prompt asking if the user wants numbers
function askNum() {
  var numChar = false;
  if (confirm("Do you want numbers?")) {
    numChar = true;
    console.log(numChar);
    return numChar;
  } else {
    console.log(numChar);
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




