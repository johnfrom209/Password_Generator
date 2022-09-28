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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password
function generatePassword() {

  // this prompt is for asking the user for the password length > 8
  let passwordLength = window.prompt("Enter the desired length of the password", "Length");
  if (passwordLength == null) {
    passwordLength = "User cancelled the prompt.";
    return passwordLength;
  }
  else if (passwordLength < 8) {
    passwordLength = "Password length needs to be higher than 8."
    return;
  }
  // else {
  //   console.log(passwordLength);
  //   return true;
  // }
  var passSpecial = askSpecial();
  var passUpper = askUpper();
  var passLower = askLower();



}

// function askLength() {

// }

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

function askUpper() {
  var upperChar = false;
  if (confirm("Do you want special char?")) {
    upperChar = true;
    console.log(upperChar);
    return upperChar;
  } else {
    console.log(upperChar);
    return upperChar;
  }
}

function askLower() {
  var lowerChar = false;
  if (confirm("Do you want special char?")) {
    lowerChar = true;
    console.log(lowerChar);
    return lowerChar;
  } else {
    console.log(lowerChar);
    return lowerChar;
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

//       spl  up    low
//case 1: yes, yes yes
//case 2: no, yes, yes
//case 3: no no yes
//case 4: no no no
//case 5: yes, no, yes
//case 6: yes, yes, no
//case 7: yes, no, no




