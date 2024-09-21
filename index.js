const uppercasechecked = document.getElementById("uppercase");
const lowercasechecked = document.getElementById("lowercase");
const numberschecked = document.getElementById("numbers");
const symbolschecked = document.getElementById("symbols");
const button = document.getElementById("generate");
const passwordshow = document.getElementById("password");
const passwordlength = document.getElementById("lengthpassword");

button.onclick = function () {
  generatePassword();
};

function generatePassword() {
  let password = "";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=\\";

  let allowedcharacters = "";

  allowedcharacters += uppercasechecked.checked ? uppercase : "";
  allowedcharacters += lowercasechecked.checked ? lowercase : "";
  allowedcharacters += numberschecked.checked ? numbers : "";
  allowedcharacters += symbolschecked.checked ? symbols : "";

  console.log(passwordlength);

  if (allowedcharacters === "") {
    passwordshow.textContent = "Please select atleast one option";
    return;
  } else if (passwordlength.value < 1 || passwordlength.value > 12) {
    passwordshow.textContent = "Please enter a number between 1 and 12";
    return;
  }

  for (let i = 0; i < passwordlength.value; i++) {
    let index = Math.floor(Math.random() * allowedcharacters.length);
    password += allowedcharacters[index];
  }
  console.log(password);
  passwordshow.textContent = password;
}