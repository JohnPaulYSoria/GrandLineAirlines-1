function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if(username === "admin002" && password === "admin123") {
      alert("Log in successfully");
      window.location.assign("dashboard.html");
      return false;
    } else {
      alert("Invalid information");
      return false;
    }
  }
  