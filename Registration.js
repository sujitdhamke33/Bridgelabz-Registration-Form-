document.getElementById("registrationForm").addEventListener("submit",function(event){
  event.preventDefault();
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let address = document.getElementById("address").value;

  let userData = {
    email: email,
    username: username,
    password: password,
    address: address
  }

  let jsonData = JSON.stringify(userData);

  localStorage.setItem("userData",jsonData);

  alert("Registration succesfully..!");
  window.location.href = "login.html";
});


