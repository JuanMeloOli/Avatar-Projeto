function home(params) {
    if (sessionStorage.NOME_USUARIO == undefined) {
    setTimeout(function () {
        window.location = "index.html";
        }, 300);
    }else{
    setTimeout(function () {
        window.location = "indexLogado.html";
        }, 300);
    }
  }


var slideBottom ={
    distance: '150%',
    origin: "bottom",
    opacity: null,
    delay:350,
}

ScrollReveal().reveal('.animationBottom', slideBottom);

var slideTop ={
    distance: '150%',
    origin: "top",
    opacity: null,
    delay:350,
}

ScrollReveal().reveal('.animationTop', slideTop);

var slideLeft ={
    distance: '150%',
    origin: "left",
    opacity: null,
    delay:350,
}

ScrollReveal().reveal('.animationLeft', slideLeft);

var slideRight ={
    distance: '150%',
    origin: "right",
    opacity: null,
    delay:350,
}

ScrollReveal().reveal('.animationRight', slideRight);