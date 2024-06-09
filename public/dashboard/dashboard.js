var id = sessionStorage.ID_USUARIO;
const dobra = document.getElementById("dobraChart");






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
    photo_usuario.style.backgroundImage = "url(../assets/sokkaPerfilIcon.jpg)";
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

let votosFogo = 5
let votosAr = 5
let votosAgua = 5
let votosTerra = 5

  fetch(`/dashboard/obterVotosFogo`, {
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
        votosFogo = json[0].votoFire
      });
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });
  
  fetch(`/dashboard/obterVotosAr`, {
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
        votosAr = json[0].votoAir
      });
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });
  
  fetch(`/dashboard/obterVotosAgua`, {
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
        votosAgua = json[0].votoWater
      });
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });
  
  fetch(`/dashboard/obterVotosTerra`, {
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
        votosTerra = json[0].votoEarth
        grafico()
      });
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });
  
  




function grafico(params) {
  new Chart(dobra, {
    type: "doughnut",
    data: {
      labels: ["Fogo", "Ar", "Água", "Terra"],
      datasets: [
        {
          label: "Quantidade de Votos",
          data: [votosFogo, votosAr, votosAgua, votosTerra],
          borderWidth: 1,
          backgroundColor: [
            "red", 
            "grey", 
            "blue", 
            "green", 
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
}
  











