
const dobra = document.getElementById("dobraChart");

new Chart(dobra, {
  type: "doughnut",
  data: {
    labels: ["Fogo", "Ar", "Água", "Terra"],
    datasets: [
      {
        label: "Quantidade de Votos",
        data: [34, 19, 12, 9],
        borderWidth: 1,
        backgroundColor: [
          "red", // Fogo
          "white", // Ar
          "blue", // Água
          "green", // Terra
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false, // Oculta a legenda
      },
    },
  },
});



const dash = document.getElementById("dash");


new Chart(dash, {
  type: "line",
  data: {
    labels: ["07", "06", "05", "04", "03", "02", "01"],
    datasets: [
      {
        label: "Acertos",
        data: [2, 4, 8, 7, 6, 9, 10],
        borderWidth: 1,
        backgroundColor: "blue",
        borderColor: "blue",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Últimas Tentativas", // Título do eixo X
          font: {
            weight: "bold", // Estilo da fonte (negrito)
            size: 16, // Tamanho da fonte
            family: "Arial", // Tipo de fonte
          },
          padding: {
            // Preenchimento do título
            top: 10,
            bottom: 10,
          },
        },
      },
      y: {
        display: true, // Ocultar escala do eixo Y
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top", // Posição da legenda
      },
    },
  },
});



name_usuario.innerHTML = sessionStorage.NOME_USUARIO;
email_usuario.innerHTML = sessionStorage.EMAIL_USUARIO;


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


window.addEventListener('load', setProfileImage);




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
    alert('Selecione uma foto!');
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
      idServer: id 
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
    alert('Escreve seu nome novo!');
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
      idServer: id 
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


fetch(`/dashboard/kpiFire`, {
  method: 'POST',
  headers: {
    "Content-Type": 'application/json', 
  },
  body: JSON.stringify({
    idServer: id
  }),
})
      .then(function (resposta) {
          console.log(resposta)
          resposta.json().then(function (data) {
              console.log(data) // {ROUND(AVG(AgniKai), 2): 5.55}

              let valorAgniKai = `Sem Dados`
              if(data.length > 0){
                let primeiroObjeto = data[0];
                let primeiraChave = Object.keys(primeiroObjeto)[0];
                valorAgniKai = primeiroObjeto[primeiraChave];
              }


              kpiAgniKai.innerHTML = valorAgniKai;
          })
});

fetch(`/dashboard/kpiEarth`, {
  method: 'POST',
  headers: {
    "Content-Type": 'application/json', 
  },
  body: JSON.stringify({
    idServer: id
  }),
})
      .then(function (resposta) {
          console.log(resposta)
          resposta.json().then(function (data) {
              console.log(data) // sum(TophGame): 12}
              
              let valorTophGame = `Sem Dados`
              if(data.length > 0){
                let primeiroObjeto = data[0];
                let primeiraChave = Object.keys(primeiroObjeto)[0];
                valorTophGame = primeiroObjeto[primeiraChave];
              }


              kpiTophGame.innerHTML = valorTophGame;
          })
});


