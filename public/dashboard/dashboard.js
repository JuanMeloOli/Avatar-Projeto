var id = sessionStorage.ID_USUARIO;
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
          "grey", // Ar
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
              console.log(data) // {sum(TophGame): 12}
              
              let valorTophGame = `Sem Dados`
              valorTophGame = data[0]
              if(data.length > 0){
               let primeiroObjeto = data[0];
                let primeiraChave = Object.keys(primeiroObjeto)[0];
               valorTophGame = primeiroObjeto[primeiraChave];
              }


              kpiTophGame.innerHTML = valorTophGame;
          })
});

fetch(`/dashboard/kpiAir`, {
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
              console.log(data) // {sum(TophGame): 12}
              
              let valorCatchGame = `Sem Dados`
              valorCatchGame = data[0]
              if(data.length > 0){
               let primeiroObjeto = data[0];
                let primeiraChave = Object.keys(primeiroObjeto)[0];
               valorCatchGame = primeiroObjeto[primeiraChave];
              }


              kpiCatchgame.innerHTML = valorCatchGame;
          })
});

fetch(`/dashboard/kpiWater`, {
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
              console.log(data) // {sum(TophGame): 12}
              
              let valorQuiz = `Sem Dados`
              valorQuiz = data[0]
              if(data.length > 0){
               let primeiroObjeto = data[0];
                let primeiraChave = Object.keys(primeiroObjeto)[0];
               valorQuiz = primeiroObjeto[primeiraChave];
              }


              kpiQuiz.innerHTML = valorQuiz;
          })
});









