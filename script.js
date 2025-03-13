const submitButton = document.querySelector("#submitBtn");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const form = document.querySelector("form");

usernameValid = document.querySelector('#usernameError');
emailValid = document.querySelector("#emailError");
passwordError = document.querySelector('#passwordError');
confirmPasswordError = document.querySelector('#confirmPasswordError');

// console.log(document.querySelector("form"));
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("Form submitted ✅");
    validateForm();
});

function validateForm() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // Username
  if (usernameValue === "") {
    usernameValid.innerText = "Username cannot be blank";
  } else if (usernameValue.length < 3) {
    usernameValid.innerText = "Username must be at least 3 characters";
  } else {
    usernameValid.innerText = "";
  }

  // Email
  if (emailValue === "") {
    emailValid.innerText = "Email cannot be blank";
  } else if (!emailValue.includes("@")) {
    emailValid.innerText = "Email is not valid";
  } else {
    emailValid.innerText = "";
  }

  // Password
  if (passwordValue === "") {
    passwordError.innerText = "Password cannot be blank";
  } else if (passwordValue.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters";
  } else {
    passwordError.innerText = "";
  }

  // Confirm Password
  if (confirmPasswordValue === "") {
    confirmPasswordError.innerText = "Confirm Password cannot be blank";
  } else if (confirmPasswordValue !== passwordValue) {
    confirmPasswordError.innerText = "Passwords do not match";
  } else {
    confirmPasswordError.innerText = "";
  }
}
