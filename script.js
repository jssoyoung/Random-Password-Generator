// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // Asks the user for length
    let passwordLength = parseInt (prompt("How long should the password be?"));

    //Validate length
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Error, invalid password length. \nPlease chose a password greater than 8 and less than 128 chraracters.");
        return ""; 
    }

    // Asks the user for which characters to include
    var includeLowerCase = confirm("Include lowercase letters in password?");
    var includeUpperCase = confirm("Include uppercase letters in password?");
    var includeNumbers = confirm("Include numbers in password?");
    var includeSpecialCharacters = confirm("Include special characters in password?");

    // Validate types of characters
    if(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
        alert("Error, invalid character types. \nPlease include at least one type of character.");
        return "";
    }

    //Generates a random password
    let passwordCharacters = []; 
    const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    if (includeSpecialCharacters) {
        passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
    } else if (includeSpecialCharacters && includeLowerCase) {
        passwordCharacters = passwordCharacters.concat(specialCharacters&&lowerCase.split(""));
    } else if (includeSpecialCharacters && includeNumbers) {
        passwordCharacters = passwordCharacters.concat(specialCharacters&&numbers.split(""));
    } else if (includeSpecialCharacters && includeUpperCase) {
        passwordCharacters = passwordCharacters.concat(specialCharacters&&upperCase.split(""));
    } 

    if (includeLowerCase) {
        passwordCharacters = passwordCharacters.concat(lowerCase.split(""));
    } else if (includeLowerCase && includeNumbers) {
        passwordCharacters = passwordCharacters.concat(lowerCase&&numbers.split(""));
    } else if (includeLowerCase && includeUpperCase) {
        passwordCharacters = passwordCharacters.concat(lowerCase&&upperCase.split(""));
    } 

    if (includeUpperCase) {
        passwordCharacters = passwordCharacters.concat(upperCase.split(""));
    } else if (includeUpperCase && includeNumbers) {
        passwordCharacters = passwordCharacters.concat(upperCase&&numbers.split(""));
    } 
    
    if (includeNumbers) {
        passwordCharacters = passwordCharacters.concat(numbers.split(""));
    } else if (includeLowerCase && includeNumbers && includeSpecialCharacters) {
        passwordCharacters = passwordCharacters.concat(lowerCase&&numbers&&specialCharacters.split(""));
    } else if (includeLowerCase && includeUpperCase && includeNumbers) {
        passwordCharacters = passwordCharacters.concat(lowerCase&&upperCase&&numbers.split(""));
    } else if (includeLowerCase && includeUpperCase && includeSpecialCharacters) {
        passwordCharacters = passwordCharacters.concat(lowerCase&&upperCase&&specialCharacters.split(""));
    } else if (includeUpperCase && includeNumbers && includeSpecialCharacters) {
        passwordCharacters = passwordCharacters.concat(upperCase&&numbers&&specialCharacters.split(""));
    } else if (includeLowerCase && includeNumbers && includeSpecialCharacters && includeUpperCase) {
        passwordCharacters = passwordCharacters.concat(lowerCase&&upperCase&&numbers&&specialCharacters.split(""));
    }

    let results = "";
    for (var i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        let randomCharacter = passwordCharacters[randomIndex];
        results += randomCharacter;
    }

    //Return generated password
    return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
