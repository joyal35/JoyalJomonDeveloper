// ---------------togglemenu------------
function togglemenu() {
  var menu = document.querySelector(".menu-link");
  var icon = document.querySelector(".humburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const errorElement = document.querySelectorAll("error-message");
    errorElement.forEach((el) => (el.style.display = "none"));

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // -----------validation----------

    let isValid = true;
    if (name === "" || /\d/.test(name) || name.length < 3) {
      document.getElementById("nameError").textContent = "Enter your name.";
      document.getElementById("nameError").style.display = "block";
      document.getElementById("name").style.borderColor = "red";
      isValid = false;
    }else {
      document.getElementById("nameError").style.display = "none";
      document.getElementById("name").style.borderColor = ""; 
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      document.getElementById("emailError").textContent ="Enter your email address.";
      document.getElementById("emailError").style.display = "block";
      document.getElementById("email").style.borderColor = "red";
      isValid = false;
    }else {
      document.getElementById("emailError").style.display = "none";
      document.getElementById("email").style.borderColor = ""; 
    }

    const phonePattern = /^[0-9]{10}$/;
    if (phone === "" || !phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent = "Enter your phone number.";
      document.getElementById("phoneError").style.display = "block";
      document.getElementById("phone").style.borderColor = "red";
      isValid = false;
    }else {
      document.getElementById("phoneError").style.display = "none";
      document.getElementById("phone").style.borderColor = ""; 
    }

    if (message === "") {
      document.getElementById("messageError").textContent = "Enter a message.";
      document.getElementById("messageError").style.display = "block";
      document.getElementById("message").style.borderColor = "red";
      isValid = false;
    }else {
      document.getElementById("messageError").style.display = "none";
      document.getElementById("message").style.borderColor = ""; 
    }

    if (isValid) { 
      console.log("Name:" + name);
      console.log("Phone:" + phone)
      console.log("email:" + email)
      console.log("message:" + message)
      document.getElementById("contactForm").reset();
      // alert("submited!")
    }

  });


function clearDisplay() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
