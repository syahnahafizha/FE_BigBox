// Toggle Password Visibility
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const passwordChecklist = document.querySelector("#passwordChecklist");

togglePassword.addEventListener("click", function () {
  // Toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // Toggle the eye icon
  this.classList.toggle("bi-eye");
  this.classList.toggle("bi-eye-slash");
});

// Validate Password
function validatePassword(password) {
  const lengthRequirement = /.{8,}/;
  const uppercaseRequirement = /[A-Z]/;
  const lowercaseRequirement = /[a-z]/;
  const numberRequirement = /[0-9]/;
  const specialCharRequirement = /[!@#$]/;

  return {
    length: lengthRequirement.test(password),
    uppercase: uppercaseRequirement.test(password),
    lowercase: lowercaseRequirement.test(password),
    number: numberRequirement.test(password),
    special: specialCharRequirement.test(password),
  };
}

password.addEventListener("input", function () {
  const passwordValue = password.value;
  const validation = validatePassword(passwordValue);

  // Update checklist
  document.querySelector("#length").classList.toggle("valid", validation.length);
  document.querySelector("#length").classList.toggle("invalid", !validation.length);

  document.querySelector("#uppercase").classList.toggle("valid", validation.uppercase);
  document.querySelector("#uppercase").classList.toggle("invalid", !validation.uppercase);

  document.querySelector("#lowercase").classList.toggle("valid", validation.lowercase);
  document.querySelector("#lowercase").classList.toggle("invalid", !validation.lowercase);

  document.querySelector("#number").classList.toggle("valid", validation.number);
  document.querySelector("#number").classList.toggle("invalid", !validation.number);

  document.querySelector("#special").classList.toggle("valid", validation.special);
  document.querySelector("#special").classList.toggle("invalid", !validation.special);
});

var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto", // Automatically determine the user's country
  separateDialCode: true, // Display the dial code next to the input
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Utility functions for formatting/validation
});
