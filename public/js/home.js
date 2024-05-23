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

const cardLogin = document.getElementById("cardLogin");

function close(params) {
  cardLogin.style.display = "none";
}

function goQuiz(params) {
  if (sessionStorage.NOME_USUARIO == undefined) {
    cardLogin.style.display = "flex";
  } else {
    window.location = "./water-quiz.html";
  }
}

function goAgniKai(params) {}

function goTophGame(params) {}
