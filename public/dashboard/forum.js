function mostrarHorarioAtual(params) {
  let dataAtual = new Date();

  let hora = dataAtual.getHours();
  let minuto = dataAtual.getMinutes();
  let mes = dataAtual.getMonth() + 1; 
  let dia = dataAtual.getDate()
  let ano = dataAtual.getFullYear();
  let anoDoisDigitos = ano.toString().slice(-2);

  hora = (hora < 10 ? "0" : "") + hora;
  minuto = (minuto < 10 ? "0" : "") + minuto;
  mes = (mes < 10 ? "0" : "") + mes;
  dia = (dia < 10 ? "0" : "") + dia;

  currentTime.innerHTML = `${hora}:${minuto}`;
  currentDay.innerHTML = `${dia}:${mes}:${anoDoisDigitos}`;
}

setInterval(mostrarHorarioAtual, 1000);

name_usuario.innerHTML = sessionStorage.NOME_USUARIO;
let id = sessionStorage.ID_USUARIO;


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

let dobraFav = sessionStorage.DOBRA_USUARIO;
function setBackgroundMsg() {
  var yourMsg = document.querySelector(".yourMsg");

  if (dobraFav == "fogo") {
    yourMsg.style.backgroundColor = `rgb(145, 0, 0)`;
  } else if (dobraFav == "agua") {
    yourMsg.style.backgroundColor = `rgb(0, 0, 145)`;
  } else if (dobraFav == "terra") {
    yourMsg.style.backgroundColor = `rgb(0, 145, 0)`;
  } else if (dobraFav == "ar") {
    yourMsg.style.backgroundColor = `rgb(150, 150, 150)`;
  }
}

window.addEventListener("load", setBackgroundMsg);





function enviarForum(params) {
  var textarea = document.getElementById("msgBox");
  var textoDigitado = textarea.value;
  fetch(`/forumDash/enviarMsg`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      textoServer: textoDigitado,
      idServer: id

  })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO enviarForum()!")

    if (resposta.ok) {
        console.log(resposta);
        
        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));
             
        });

    } else {

        console.log("Houve um erro ao tentar realizar o enviarForum!");

        
    }
  
})
}
