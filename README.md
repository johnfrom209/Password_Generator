# Password_Generator

## Description

This project utilizes javascript to ask the user, via prompts, to generate a random password. Possible options to generate a password are special characters, numbers, a-z, and if they want upper and lowercase letters. However, if the user specifies a number for the password but does not select any of the following prompts then an error message is displayed. Otherwise a password is generated with the user selected preferences. 

A particular funny issue occured when I was trying to get the user length for the password. I had set the code to make a password denpending on the length of the input. However, what I really wanted  and needed to do was get the user input and change it to a number value. I did this by using the parseInt() function. I spent a good 5 min getting stumpted by this error. 
Here is the code snippet:
```
for (var i = 0; i < parseInt(passwordLength); i++) {
    generatedPass = generatedPass + arrayConversion.charAt(Math.floor(Math.random() * (passwordLength + 1)));
    console.log(generatedPass);
  }
```

Here is a screenshot of a generated password
![Screenshot]()

The following code snippet gives the user a prompt and depending on how they answer depends affects how the password is generated. Here is the code snippet for the prompts to the user:
```
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
```


## Installation

No installation required. Simply go to github page for viewing.

Here is the link to look see how I built the webpage with HTML, CSS, and javasript.
[Github Repo](https://github.com/johnfrom209/Password_Generator)

[Deployed Page](https://johnfrom209.github.io/Password_Generator/)

## Usage

This is a webpage for viewing. Refer to the screenshot or click the Deployed Page link.

## Credits

Starter code was given by UCB coding bootcamp.

## Contact Me

[Linkedin](https://www.linkedin.com/in/johnfrom209/)

[View my Github Repo](https://github.com/johnfrom209)

## License

Refer to the license in the Github repo.