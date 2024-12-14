function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Thank you for booking!");
}
