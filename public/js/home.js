window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

var show = document.querySelector(".trailer");

setTimeout(function () {
  show.classList.add("show");
}, 1000);
