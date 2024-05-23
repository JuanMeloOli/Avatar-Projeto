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

function closeLogin(params) {
  cardLogin.style.display = "none";
}

function goLogin(params) {
  window.location = "./cadastrologin.html";
}

function goAir(params) {
  if (
    sessionStorage.NOME_USUARIO == undefined ||
    sessionStorage.NOME_USUARIO == null
  ) {
    cardLogin.style.display = "flex";
  } else {
    window.location = "./air-aang.html";
  }
}

function goQuiz(params) {
  if (
    sessionStorage.NOME_USUARIO == undefined ||
    sessionStorage.NOME_USUARIO == null
  ) {
    cardLogin.style.display = "flex";
  } else {
    window.location = "./water-quiz.html";
  }
}

function goAgniKai(params) {
  if (
    sessionStorage.NOME_USUARIO == undefined ||
    sessionStorage.NOME_USUARIO == null
  ) {
    cardLogin.style.display = "flex";
  } else {
    window.location = "./fire-AgniKai.html";
  }
}

function goTophGame(params) {
  if (
    sessionStorage.NOME_USUARIO == undefined ||
    sessionStorage.NOME_USUARIO == null
  ) {
    cardLogin.style.display = "flex";
  } else {
    window.location = "./earth-toph.html";
  }
}
