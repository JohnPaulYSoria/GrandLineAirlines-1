let MenuIcon = document.getElementById("menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

MenuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    MenuIcon.classList.toggle("fa-times");
});

navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    MenuIcon.classList.toggle("fa-times");
});
});

var nav = document.querySelector('nav');
var navPosition = nav.offsetTop;

function fixNav() {
  if (window.pageYOffset >= navPosition) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
}

window.addEventListener('scroll', fixNav);