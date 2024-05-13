document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let storedData = localStorage.getItem("userData");
  console.log(storedData);
  
  if (storedData) {
      storedData = JSON.parse(storedData);
    
      if (username === storedData.username && password === storedData.password) {
          alert("Login successful!");
          window.location.href = "Dashboard.html";
      } else {
          alert("Invalid username or password");
      }
  } else {
      alert("No user registered yet");
  }
});