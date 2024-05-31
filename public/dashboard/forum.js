function mostrarHorarioAtual(params) {
  let dataAtual = new Date();

  let hora = dataAtual.getHours();
  let minuto = dataAtual.getMinutes();
  let mes = dataAtual.getMonth() + 1; 
  let dia = dataAtual.getDate()
  let ano = dataAtual.getFullYear();

  hora = (hora < 10 ? "0" : "") + hora;
  minuto = (minuto < 10 ? "0" : "") + minuto;
  mes = (mes < 10 ? "0" : "") + mes;
  dia = (dia < 10 ? "0" : "") + dia;

  currentTime.innerHTML = `${hora}:${minuto}`;
  currentDay.innerHTML = `${dia}:${mes}:${ano}`;
}

setInterval(mostrarHorarioAtual, 1000);

name_user.innerHTML = sessionStorage.NOME_USUARIO;
name_usuario.innerHTML = sessionStorage.NOME_USUARIO;
email_usuario.innerHTML = sessionStorage.EMAIL_USUARIO;
var id = sessionStorage.ID_USUARIO;



var photo_msg = document.getElementById("photo_msg");
var photo_msg_ = document.getElementById("photo_usuario");

if (sessionStorage.FOTO_USUARIO == "0") {
  photo_msg.style.backgroundImage = "url(../assets/perfilIcon.png)";
  photo_msg_.style.backgroundImage = "url(../assets/perfilIcon.png)";
} else if (sessionStorage.FOTO_USUARIO == "1") {
  photo_msg.style.backgroundImage = "url(../assets/aangIcon.jpg)";
  photo_msg_.style.backgroundImage = "url(../assets/aangIcon.jpg)";
} else if (sessionStorage.FOTO_USUARIO == "2") {
  photo_msg.style.backgroundImage = "url(../assets/kataraIcon.jpg)";
  photo_msg_.style.backgroundImage = "url(../assets/kataraIcon.jpg)";
} else if (sessionStorage.FOTO_USUARIO == "3") {
  photo_msg.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
  photo_msg_.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
} else if (sessionStorage.FOTO_USUARIO == "4") {
  photo_msg.style.backgroundImage = "url(../assets/TophIcon.jpg)";
  photo_msg_.style.backgroundImage = "url(../assets/TophIcon.jpg)";
} else if (sessionStorage.FOTO_USUARIO == "5") {
  photo_msg.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
  photo_msg_.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
}







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
  console.log(id)
  var textarea = document.getElementById("msgBox");
  var textoDigitado = textarea.value;
  if (textoDigitado == "") {
    alert("Escreve alguma coisa")
    return
  }
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
            setTimeout(function () {
              window.location = "forum.html";
            }, 1000);

             
        });

    } else {

        console.log("Houve um erro ao tentar realizar o enviarForum!");

        
    }
  
})
}

let lista_forum = []


fetch(`/forumDash/obterTodasMsgs`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}).then(function (resposta) {
  console.log("ESTOU NO THEN DO obterTodasMsgs()!")

  if (resposta.ok) {
    console.log(resposta);
    resposta.json().then(json => {
      console.log(json);
      console.log(JSON.stringify(json));
      

      // Itera sobre cada mensagem
      json.forEach(mensagem => {
        // Cria uma div para a mensagem
        let mensagemDiv = document.createElement('div');
        let dobra = mensagem.dobra;
        let foto = mensagem.foto;




        // Adiciona o conteúdo da mensagem à div
        mensagemDiv.innerHTML = `
        <div class="container-msg-usuario">

            <div class="box_msg usersMsg">
                <div class="content-high-msg">
                    <div class="usuario-msg">
                        <div class="foto_msg"></div>
                        <div>${mensagem.nome}</div>
                    </div>
                    <div class="msg-usuario">
                    ${mensagem.mensagem}
                    </div>
                </div>
                <div class="content-low-msg">
                    <div></div>
                    <div class="content-hora">${mensagem.hora}</div>
                    <div class="content-day">${mensagem.data}</div>
                    <div class="content-btn-msg">
                        <div onclick="enviarForum()" class="btn-msg material-symbols-outlined">
                            check
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;


        // Adiciona a div de mensagem ao contêiner de mensagens
        document.getElementById(`container_msg_others`).appendChild(mensagemDiv);

        let boxMsg = mensagemDiv.querySelector('.box_msg');
        let fotoMsg = mensagemDiv.querySelector('.foto_msg');

        if (dobra === 'fogo') {
          boxMsg.style.backgroundColor = `rgb(145, 0, 0)`;
        } else if (dobra === 'agua') {
          boxMsg.style.backgroundColor = `rgb(0, 0, 145)`;
        } else if (dobra === 'terra') {
          boxMsg.style.backgroundColor = `rgb(0, 145, 0)`;
        } else if (dobra === 'ar') {
          boxMsg.style.backgroundColor = `rgb(150, 150, 150)`;
        }

        if (foto == "0") {
          fotoMsg.style.backgroundImage = "url(../assets/perfilIcon.png)";
        } else if (foto == "1") {
          fotoMsg.backgroundImage = "url(../assets/aangIcon.jpg)";
        } else if (foto == "2") {
          fotoMsg.backgroundImage = "url(../assets/kataraIcon.jpg)";
        } else if (foto == "3") {
          fotoMsg.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
        } else if (foto == "4") {
          fotoMsg.style.backgroundImage = "url(../assets/TophIcon.jpg)";
        } else if (foto == "5") {
          fotoMsg.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
        }


      });

    });
  } else {
    console.log("Houve um erro ao tentar realizar a requisição!");
  }
});



function redirecionarParaPersonalizar() {
  window.location.href = "dashboard.html#personal";
}

function redirecionarParaData() {
  window.location.href = "dashboard.html";
}
//<p>ID: ${mensagem.idForum}</p>
//<p>Mensagem: ${mensagem.mensagem}</p>
//<p>Data de Inserção: ${mensagem.data_insercao}</p>
//<p>ID do Usuário: ${mensagem.fkUsuario}</p>