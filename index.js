function generatePassword(
  allowUppercase,
  allowLowercase,
  allowNumbers,
  allowsymbols,
  length
) {
  let password = "";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=\\";

  let allowedcharacters = "";

  allowedcharacters += allowUppercase ? uppercase : "";
  allowedcharacters += allowLowercase ? lowercase : "";
  allowedcharacters += allowNumbers ? numbers : "";
  allowedcharacters += allowsymbols ? symbols : "";

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * allowedcharacters.length);
    password += allowedcharacters[index];
  }
  console.log(password);
}

const allowUppercase = true;
const allowLowercase = true;
const allowNumbers = true;
const allowsymbols = true;
const length = 12;

generatePassword(
  allowUppercase,
  allowLowercase,
  allowNumbers,
  allowsymbols,
  length
);
