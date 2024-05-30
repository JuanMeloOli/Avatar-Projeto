function mostrarHorarioAtual(params) {
  let dataAtual = new Date();

  let hora = dataAtual.getHours();
  let minuto = dataAtual.getMinutes();

  hora = (hora < 10 ? "0" : "") + hora;
  minuto = (minuto < 10 ? "0" : "") + minuto;

  currentTime.innerHTML = `${hora}:${minuto}`;
}

setInterval(mostrarHorarioAtual, 1000);

name_usuario.innerHTML = sessionStorage.NOME_USUARIO;

function setProfileImage() {
  var photo_msg = document.getElementById("photo_msg");

  if (sessionStorage.FOTO_USUARIO == "0") {
    photo_msg.style.backgroundImage = "url(../assets/perfilIcon.png)";
  } else if (sessionStorage.FOTO_USUARIO == "1") {
    photo_msg.style.backgroundImage = "url(../assets/aangIcon.jpg)";
  } else if (sessionStorage.FOTO_USUARIO == "2") {
    photo_msg.style.backgroundImage = "url(../assets/kataraIcon.jpg)";
  } else if (sessionStorage.FOTO_USUARIO == "3") {
    photo_msg.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
  } else if (sessionStorage.FOTO_USUARIO == "4") {
    photo_msg.style.backgroundImage = "url(../assets/TophIcon.jpg)";
  } else if (sessionStorage.FOTO_USUARIO == "5") {
    photo_msg.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
  }
}

window.addEventListener("load", setProfileImage);

function enviarforum(params) {}
