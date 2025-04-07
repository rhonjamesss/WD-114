var correctUsername = "gaia";
var correctPassword = "guevarra";
var btnSend = document.querySelector("#btnSend");
var usernameInput = document.querySelector("#username");
var passwordInput = document.querySelector("#password");
var errorMessage = document.querySelector("#error-message");

btnSend.addEventListener("click", function() {
   if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
   btnSend.style.background = "blue";
   btnSend.innerHTML = "Success!";
   errorMessage.textContent = "";
   } else {
      btnSend.style.background = "red";
      btnSend.innerHTML = "Try Again";
      errorMessage.textContent = "Invalid username or password.";
      errorMessage.style.color = "red";
   }
});