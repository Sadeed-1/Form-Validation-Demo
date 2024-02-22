document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");
  
    signInForm.addEventListener("submit", function (e) {
      e.preventDefault();
      validateSignInForm();
    });
  
    signUpForm.addEventListener("submit", function (e) {
      e.preventDefault();
      validateSignUpForm();
    });
  
    function validateSignInForm() {
      const signInUsername = document.getElementById("signInUsername").value.trim();
      const signInPassword = document.getElementById("signInPassword").value.trim();
  
      clearSignInErrors();
  
      if (signInUsername === "") {
        displaySignInError("Please enter a username.");
        return;
      }
  
      if (signInPassword === "") {
        displaySignInError("Please enter a password.");
        return;
      }
  
      alert("Sign In Successful!");
    }
  
    function validateSignUpForm() {
      const signUpUsername = document.getElementById("signUpUsername").value.trim();
      const signUpEmail = document.getElementById("signUpEmail").value.trim();
      const signUpPassword = document.getElementById("signUpPassword").value.trim();
      const signUpAge = document.getElementById("signUpAge").value.trim(); 
  
      clearSignUpErrors();
  
      if (signUpUsername === "") {
        displaySignUpError("Please enter a username.");
        return;
      }
  
      if (signUpEmail === "") {
        displaySignUpError("Please enter an email address.");
        return;
      }
  
      if (!isValidEmail(signUpEmail)) {
        displaySignUpError("Please enter a valid email address.");
        return;
      }
  
      if (signUpPassword === "") {
        displaySignUpError("Please enter a password.");
        return;
      }
  
      if (signUpAge === "") {
        displaySignUpError("Please enter your age.");
        return;
      }
  
      if (!isValidAge(signUpAge)) {
        displaySignUpError("Please enter a valid age (must be at least 18).");
        return;
      }
  
      alert("Sign Up Successful!");
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function isValidAge(age) {
      return !isNaN(parseFloat(age)) && isFinite(age) && age >= 18; 
    }
  
    function displaySignInError(message) {
      document.getElementById("signInUsernameError").innerText = message;
    }
  
    function displaySignUpError(message) {
      document.getElementById("signUpUsernameError").innerText = message;
    }
  
    function clearSignInErrors() {
      document.getElementById("signInUsernameError").innerText = "";
      document.getElementById("signInPasswordError").innerText = "";
    }
  
    function clearSignUpErrors() {
      document.getElementById("signUpUsernameError").innerText = "";
      document.getElementById("signUpEmailError").innerText = "";
      document.getElementById("signUpPasswordError").innerText = "";
      document.getElementById("signUpAgeError").innerText = "";
    }
  });
  