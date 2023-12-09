const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  // Save email and password to local storage
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  console.log("email", email)
  console.log("password", password)

  // Redirect to user profile page
  // alert("Your Facebook account had been hacked :)))");
});
