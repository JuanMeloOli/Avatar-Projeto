name_usuario.innerHTML = sessionStorage.NOME_USUARIO;
email_usuario.innerHTML = sessionStorage.EMAIL_USUARIO;

let dobraFav = sessionStorage.DOBRA_USUARIO;
let corFav = "";
if (dobraFav == "fogo") {
  corFav = `rgb(145, 0, 0)`;
} else if (dobraFav == "agua") {
  corFav = `rgb(0, 0, 145)`;
} else if (dobraFav == "terra") {
  corFav = `rgb(0, 145, 0)`;
} else if (dobraFav == "ar") {
  corFav = `rgb(150, 150, 150)`;
}

function setColor() {
  var inputs = document.querySelector(".inputForm input");
  inputs.style.backgroundColor = corFav;
}

window.addEventListener("load", setColor);

function setProfileImage() {
  var photo_usuario = document.getElementById("photo_usuario");

  if (sessionStorage.FOTO_USUARIO == "0") {
    photo_usuario.style.backgroundImage = "url(../assets/perfilIcon.png)";
  } else if (sessionStorage.FOTO_USUARIO == "1") {
    photo_usuario.style.backgroundImage = "url(../assets/aangIcon.jpg)";
  } else if (sessionStorage.FOTO_USUARIO == "2") {
    photo_usuario.style.backgroundImage = "url(../assets/kataraIcon.jpg)";
  } else if (sessionStorage.FOTO_USUARIO == "3") {
    photo_usuario.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
  } else if (sessionStorage.FOTO_USUARIO == "4") {
    photo_usuario.style.backgroundImage = "url(../assets/TophIcon.jpg)";
  } else if (sessionStorage.FOTO_USUARIO == "5") {
    photo_usuario.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
  }
}

window.addEventListener("load", setProfileImage);

function sair() {
  window.location = "../indexLogado.html";
}

const tradeName = document.querySelector(".tradeName");
const tradePicture = document.querySelector(".tradePicture");
const personal = document.querySelector(".personal");
const contentName = document.querySelector(".content-name");
const contentPicture = document.querySelector(".content-picture");
const exit1 = document.querySelector(".exit-personal");
const exit2 = document.querySelector(".exit-personal_2");

tradeName.addEventListener("click", nameTrade);
tradePicture.addEventListener("click", pictureTrade);
exit1.addEventListener("click", exit);
exit2.addEventListener("click", exit);

function hideName(params) {
  personal.style.display = "none";
  contentName.style.display = "flex";
}
function hidePicture(params) {
  personal.style.display = "none";
  contentPicture.style.display = "flex";
}

function exit(params) {
  personal.style.display = "flex";
  contentName.style.display = "none";
  contentPicture.style.display = "none";
}

function nameTrade(params) {
  hideName();
}

function pictureTrade(params) {
  hidePicture();
}

var id = sessionStorage.ID_USUARIO;

function selectPicture() {
  const radios = document.querySelectorAll('input[name="avatar"]');
  let pictureVar = undefined;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      pictureVar = radios[i].value;
      break;
    }
  }

  if (pictureVar === undefined) {
    alert("Selecione uma foto!");
    return;
  }
  sessionStorage.setItem("FOTO_USUARIO", pictureVar);

  fetch("../usuarios/selectPicture", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pictureServer: pictureVar,
      idServer: id,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        setTimeout(() => {
          window.location = "dashboard.html";
        }, 1000);
      } else {
        throw new Error("Houve um erro ao tentar realizar a troca de avatar!");
      }
    })
    .catch(function (erro) {
      console.error("#ERRO: ", erro);
    });
}

function selectName(params) {
  let nomeVar = input_name.value;

  if (nomeVar === undefined) {
    alert("Escreve seu nome novo!");
    return;
  }
  sessionStorage.setItem("NOME_USUARIO", nomeVar);
  fetch("../usuarios/selectName", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nomeServer: nomeVar,
      idServer: id,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        setTimeout(() => {
          window.location = "dashboard.html";
        }, 1000);
      } else {
        throw new Error("Houve um erro ao tentar realizar a troca de nome!");
      }
    })
    .catch(function (erro) {
      console.error("#ERRO: ", erro);
    });
}
