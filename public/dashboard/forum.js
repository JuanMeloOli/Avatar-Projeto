let dobraFav = sessionStorage.DOBRA_USUARIO;
let corFav = ''
if (dobraFav == "fogo") {
  corFav = `rgb(145, 0, 0)`;
} else if (dobraFav == "agua") {
  corFav = `rgb(0, 0, 145)`;
} else if (dobraFav == "terra") {
  corFav = `rgb(0, 145, 0)`;
} else if (dobraFav == "ar") {
  corFav = `rgb(150, 150, 150)`;
}


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








function setColor() {
  var yourMsg = document.querySelector(".yourMsg");
  
  yourMsg.style.backgroundColor = corFav;

}
window.addEventListener("load", setColor);






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

var id = sessionStorage.ID_USUARIO;

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
        let idforum = mensagem.idForum



        if (id == mensagem.idUsuario) {
          mensagemDiv.innerHTML = `
            <div class="box_msg usersMsg">
                <div class="content-high-msg">
                    <div class="usuario-msg">
                        <div class="foto_msg"></div>
                        <div>${mensagem.nome}</div>
                    </div>
                    <div class="msg-usuario">
                    <textarea id="idForum_${idforum}" class="txt-usuario" disabled maxlength="240">${mensagem.mensagem}</textarea>
                    </div>
                </div>
                <div class="content-low-msg">
                    <div class="content-hora">${mensagem.hora}</div>
                    <div class="content-day">${mensagem.data}</div>
                    <div class="content-btn-msg">
                    <div style="display: none;" onclick="fecharForum(${idforum})" class="btn-msg material-symbols-outlined fechar_${idforum}">arrow_back</div>
                    <div style="display: none;" onclick="atualizarForum(${idforum})" class="btn-msg material-symbols-outlined atualizar_${idforum}">check</div>
                    <div onclick="editarForum(${idforum})" class="btn-msg material-symbols-outlined editar_${idforum}">edit </div>
                    <div onclick="deletarForum(${idforum})" class="btn-msg material-symbols-outlined deletar_${idforum}">delete </div>
                    </div>
                </div>
            </div>
        `;
        }else{
          mensagemDiv.innerHTML = `
            <div class="box_msg usersMsg">
                <div class="content-high-msg">
                    <div class="usuario-msg">
                        <div class="foto_msg"></div>
                        <div>${mensagem.nome}</div>
                    </div>
                    <div class="msg-usuario">
                    <textarea class="txt-usuario" disabled maxlength="240">${mensagem.mensagem}</textarea>
                    </div>
                </div>
                <div class="content-low-msg">
                    <div class="content-hora">${mensagem.hora}</div>
                    <div class="content-day">${mensagem.data}</div>
                    <div class="content-btn-msg">
                    </div>
                </div>
            </div>
        `;
        }
        
        

        document.getElementById(`container_msg_others`).appendChild(mensagemDiv);

        let boxMsg = mensagemDiv.querySelector('.box_msg');
        let fotoMsg = mensagemDiv.querySelector('.foto_msg');

        switch (dobra) {
          case 'fogo':
              boxMsg.style.backgroundColor = 'rgb(145, 0, 0)';
              break;
          case 'agua':
              boxMsg.style.backgroundColor = 'rgb(0, 0, 145)';
              break;
          case 'terra':
              boxMsg.style.backgroundColor = 'rgb(0, 145, 0)';
              break;
          case 'ar':
              boxMsg.style.backgroundColor = 'rgb(150, 150, 150)';
              break;
          default:
              break;
      }

        switch (foto) {
          case "0":
              fotoMsg.style.backgroundImage = "url(../assets/perfilIcon.png)";
              break;
          case "1":
              fotoMsg.style.backgroundImage = "url(../assets/aangIcon.jpg)";
              break;
          case "2":
              fotoMsg.style.backgroundImage = "url(../assets/kataraIcon.jpg)";
              break;
          case "3":
              fotoMsg.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
              break;
          case "4":
              fotoMsg.style.backgroundImage = "url(../assets/TophIcon.jpg)";
              break;
          case "5":
              fotoMsg.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
              break;
          default:
              break;
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

let valorOriginal = ""

function editarForum(idForum) {
  const textarea = document.getElementById(`idForum_${idForum}`);
  textarea.removeAttribute('disabled');
  textarea.dataset.valorOriginal = textarea.value;
  let editBtn = document.querySelector(`.editar_${idForum}`);
  let deleteBtn = document.querySelector(`.deletar_${idForum}`);
  let updateBtn = document.querySelector(`.atualizar_${idForum}`);
  let fecharBtn = document.querySelector(`.fechar_${idForum}`);

  editBtn.style.display = 'none';
  deleteBtn.style.display = 'none';
  updateBtn.style.display = 'block';
  fecharBtn.style.display = 'block';


}


function fecharForum(idForum) {
  const textarea = document.getElementById(`idForum_${idForum}`);
  textarea.setAttribute('disabled', 'disabled');

  textarea.value = textarea.dataset.valorOriginal;
  let editBtn = document.querySelector(`.editar_${idForum}`);
  let deleteBtn = document.querySelector(`.deletar_${idForum}`);
  let updateBtn = document.querySelector(`.atualizar_${idForum}`);
  let fecharBtn = document.querySelector(`.fechar_${idForum}`);

  editBtn.style.display = 'block';
  deleteBtn.style.display = 'block';
  updateBtn.style.display = 'none';
  fecharBtn.style.display = 'none';
}


function deletarForum(idForum) {
  fetch(`/forumDash/deletarMsg`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      forumServer: idForum,

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

function atualizarForum(idForum) {
  var textarea = document.getElementById(`idForum_${idForum}`);
  var textoDigitado = textarea.value;
  if (textoDigitado == "") {
    alert("Escreva alguma coisa")
    return
  }

  fetch(`/forumDash/atualizarMsg`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      textoServer: textoDigitado,
      forumServer: idForum

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