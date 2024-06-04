function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username === "admin" && password === "admin") {
    window.location.assign("dashboard.html");
    return false;
  } else {
    alert("Invalid information");
    return false;
  }
}
