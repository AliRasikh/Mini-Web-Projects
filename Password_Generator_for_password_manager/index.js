function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  if (length < 1) return "Password length must be at least 1 character";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*";

  let allowedChars = "";
  allowedChars += includeUppercase ? uppercase : "";
  allowedChars += includeLowercase ? lowercase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (allowedChars.length === 0)
    return "Must select at least one character type";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

function displayPassword() {
  const length = document.getElementById("password-length").value;
  const includeSymbolsRadio = document.getElementById("includeSymbols");
  const includeNumbersRadio = document.getElementById("includeNumbers");

  includeSymbolsRadio.checked
    ? (includeSymbols = true)
    : (includeSymbols = false);
  includeNumbersRadio.checked
    ? (includeNumbers = true)
    : (includeNumbers = false);
  const includeUppercase = true;
  const includeLowercase = true;

  const password = generatePassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );

  document.getElementById("display").innerText = password;
}
