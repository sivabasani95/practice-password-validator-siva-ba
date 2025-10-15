const readline = require('readline-sync');
unction isValidPassword(password) {
  // Requirement 1: At least 8 characters
  if (password.length < 8) {
    return false;
  }

  let hasUppercase = false;
  let hasNumber = false;

  // Loop through the password to check for uppercase and number
  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    }
    if (char >= '0' && char <= '9') {
      hasNumber = true;
    }
  }

  return hasUppercase && hasNumber;
}

// Main loop: keep asking until the password is valid
let password;
do {
  password = readlineSync.question('Enter a password: ');
  if (!isValidPassword(password)) {
    console.log('❌ Your password does not meet the requirements. It must:\n- Be at least 8 characters\n- Contain at least one uppercase letter\n- Contain at least one number\n');
  }
} while (!isValidPassword(password));

console.log('✅ Success! Your password meets all the requirements.');
