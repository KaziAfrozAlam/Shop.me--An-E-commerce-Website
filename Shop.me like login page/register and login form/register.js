document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");
  const toggleLinks = document.querySelectorAll(".toggle-form");

  // Show the login form and hide the signup form by default
  loginForm.style.display = "block";
  signupForm.style.display = "none";

  // Function to toggle between login and signup forms
  function toggleForms() {
    if (loginForm.style.display === "block") {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    } else {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    }
  }

  // Attach click event to the toggle links
  toggleLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      toggleForms();
    });
  });

  // Form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Perform login form submission logic here 
    console.log("Login form submitted with email:", email, "and password:", password);
    // Reset form fields (optional)
    this.reset();
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Perform signup form submission logic here 
    console.log("Signup form submitted with name:", fullName, "email:", email, "and password:", password);
    // Reset form fields (optional)
    this.reset();
  });
});
// Get references to the buttons
        const continueButton = document.getElementById("continueButton");
        const createAccountButton = document.getElementById("createAccountButton");

        // Add click event listener to the "Continue" button
        continueButton.addEventListener("click", () => {
            // Add your logic for what should happen when "Continue" is clicked
            console.log("Continue button clicked!");
            window.location.href = "http://127.0.0.1:5501/index.html";
            

        });

