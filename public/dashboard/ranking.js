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

window.addEventListener("load", setProfileImage);





function nextSection() {
    const sections = document.querySelectorAll('.section');
    const currentSection = Array.from(sections).findIndex(section => section.style.display !== 'none');
    if (currentSection < sections.length - 1) {
      sections[currentSection].style.display = 'none';
      sections[currentSection + 1].style.display = 'flex';
    }
  }
  
  function prevSection() {
    const sections = document.querySelectorAll('.section');
    const currentSection = Array.from(sections).findIndex(section => section.style.display !== 'none');
    if (currentSection > 0) {
      sections[currentSection].style.display = 'none';
      sections[currentSection - 1].style.display = 'flex';
    }
  }


  fetch(`/rankingDash/rankingAgniKai`, {
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
        let contadorTopFogo = 0
  
        json.forEach(personTopFire => {
          contadorTopFogo++
          let nome = personTopFire.nome;
          let foto = personTopFire.foto;
          let dobra = personTopFire.dobra;
          let valor = personTopFire.valor;


          let nomeTop = document.getElementById(`name_user${contadorTopFogo}Fogo`);
          nomeTop.innerHTML = nome
          let valorTop = document.getElementById(`data_user${contadorTopFogo}Fogo`);
          valorTop.innerHTML = valor

          let fotoTop = document.querySelector(`.fotoWinner${contadorTopFogo}Fogo`);

          let towerTop = document.querySelector(`.towerWinnerTop${contadorTopFogo}Fogo`);
          

          switch (foto) {
            case "0":
                fotoTop.style.backgroundImage = "url(../assets/perfilIcon.png)";
                break;
            case "1":
                fotoTop.style.backgroundImage = "url(../assets/aangIcon.jpg)";
                break;
            case "2":
                fotoTop.style.backgroundImage = "url(../assets/kataraIcon.jpg)";
                break;
            case "3":
                fotoTop.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
                break;
            case "4":
                fotoTop.style.backgroundImage = "url(../assets/TophIcon.jpg)";
                break;
            case "5":
                fotoTop.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
                break;
            default:
                break;
        }

        switch (dobra) {
          case 'fogo':
              towerTop.style.backgroundColor = 'rgb(145, 0, 0)';
              break;
          case 'agua':
              towerTop.style.backgroundColor = 'rgb(0, 0, 145)';
              break;
          case 'terra':
              towerTop.style.backgroundColor = 'rgb(0, 145, 0)';
              break;
          case 'ar':
              towerTop.style.backgroundColor = 'rgb(150, 150, 150)';
              break;
          default:
              break;
      }
  
  

  
      })});
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });



  fetch(`/rankingDash/rankingCatchGame`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (resposta) {
    console.log("ESTOU NO THEN DO RankingCatchGame()!")
  
    if (resposta.ok) {
      console.log(resposta);
      resposta.json().then(json => {
        console.log(json);
        console.log(JSON.stringify(json));
        let contadorTopAr = 0
  
        json.forEach(personTopAir => {
          contadorTopAr++
          let nome = personTopAir.nome;
          let foto = personTopAir.foto;
          let dobra = personTopAir.dobra;
          let valor = personTopAir.valor;


          let nomeTop = document.getElementById(`name_user${contadorTopAr}Ar`);
         
          nomeTop.innerHTML = nome
          let valorTop = document.getElementById(`data_user${contadorTopAr}Ar`);
          valorTop.innerHTML = valor
         

          let fotoTop = document.querySelector(`.fotoWinner${contadorTopAr}Ar`);
         

          let towerTop = document.querySelector(`.towerWinnerTop${contadorTopAr}Ar`);
        
          

          switch (foto) {
            case "0":
                fotoTop.style.backgroundImage = "url(../assets/perfilIcon.png)";
                break;
            case "1":
                fotoTop.style.backgroundImage = "url(../assets/aangIcon.jpg)";
                break;
            case "2":
                fotoTop.style.backgroundImage = "url(../assets/kataraIcon.jpg)";
                break;
            case "3":
                fotoTop.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
                break;
            case "4":
                fotoTop.style.backgroundImage = "url(../assets/TophIcon.jpg)";
                break;
            case "5":
                fotoTop.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
                break;
            default:
                break;
        }

        switch (dobra) {
          case 'fogo':
              towerTop.style.backgroundColor = 'rgb(145, 0, 0)';
              break;
          case 'agua':
              towerTop.style.backgroundColor = 'rgb(0, 0, 145)';
              break;
          case 'terra':
              towerTop.style.backgroundColor = 'rgb(0, 145, 0)';
              break;
          case 'ar':
              towerTop.style.backgroundColor = 'rgb(150, 150, 150)';
              break;
          default:
              break;
      }
  
  

  
      })});
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });


  fetch(`/rankingDash/rankingQuiz`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (resposta) {
    console.log("ESTOU NO THEN DO RankingQuiz()!")
  
    if (resposta.ok) {
      console.log(resposta);
      resposta.json().then(json => {
        console.log(json);
        console.log(JSON.stringify(json));
        let contadorTopAgua = 0
  
        json.forEach(personTopWater => {
          contadorTopAgua++
          let nome = personTopWater.nome;
          let foto = personTopWater.foto;
          let dobra = personTopWater.dobra;
          let valor = personTopWater.valor;
          if (valor != null) {
            let nomeTop = document.getElementById(`name_user${contadorTopAgua}Agua`);
          console.log(`name_user${contadorTopAgua}Ar`, nomeTop);
          nomeTop.innerHTML = nome
          let valorTop = document.getElementById(`data_user${contadorTopAgua}Agua`);
          valorTop.innerHTML = valor
          console.log(`data_user${contadorTopAgua}Ar`, valorTop);

          let fotoTop = document.querySelector(`.fotoWinner${contadorTopAgua}Agua`);
          console.log(`.fotoWinner${contadorTopAgua}Ar`, fotoTop);

          let towerTop = document.querySelector(`.towerWinnerTop${contadorTopAgua}Agua`);
          console.log(`.towerWinnerTop${contadorTopAgua}Ar`, towerTop)
          

          switch (foto) {
            case "0":
                fotoTop.style.backgroundImage = "url(../assets/perfilIcon.png)";
                break;
            case "1":
                fotoTop.style.backgroundImage = "url(../assets/aangIcon.jpg)";
                break;
            case "2":
                fotoTop.style.backgroundImage = "url(../assets/kataraIcon.jpg)";
                break;
            case "3":
                fotoTop.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
                break;
            case "4":
                fotoTop.style.backgroundImage = "url(../assets/TophIcon.jpg)";
                break;
            case "5":
                fotoTop.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
                break;
            default:
                break;
        }

        switch (dobra) {
          case 'fogo':
              towerTop.style.backgroundColor = 'rgb(145, 0, 0)';
              break;
          case 'agua':
              towerTop.style.backgroundColor = 'rgb(0, 0, 145)';
              break;
          case 'terra':
              towerTop.style.backgroundColor = 'rgb(0, 145, 0)';
              break;
          case 'ar':
              towerTop.style.backgroundColor = 'rgb(150, 150, 150)';
              break;
          default:
              break;
      }
  
          }


          
  

  
      })});
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });


  fetch(`/rankingDash/rankingTophGame`, {
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
        let contadorTopTerra = 0
  
        json.forEach(personTopWater => {
          contadorTopTerra++
          let nome = personTopWater.nome;
          let foto = personTopWater.foto;
          let dobra = personTopWater.dobra;
          let valor = personTopWater.valor;
          if (valor != null) {
            let nomeTop = document.getElementById(`name_user${contadorTopTerra}Terra`);
         
            nomeTop.innerHTML = nome
            let valorTop = document.getElementById(`data_user${contadorTopTerra}Terra`);
            valorTop.innerHTML = valor
           
  
            let fotoTop = document.querySelector(`.fotoWinner${contadorTopTerra}Terra`);
         
  
            let towerTop = document.querySelector(`.towerWinnerTop${contadorTopTerra}Terra`);
         
            
  
            switch (foto) {
              case "0":
                  fotoTop.style.backgroundImage = "url(../assets/perfilIcon.png)";
                  break;
              case "1":
                  fotoTop.style.backgroundImage = "url(../assets/aangIcon.jpg)";
                  break;
              case "2":
                  fotoTop.style.backgroundImage = "url(../assets/kataraIcon.jpg)";
                  break;
              case "3":
                  fotoTop.style.backgroundImage = "url(../assets/sokkaIcon.jpg)";
                  break;
              case "4":
                  fotoTop.style.backgroundImage = "url(../assets/TophIcon.jpg)";
                  break;
              case "5":
                  fotoTop.style.backgroundImage = "url(../assets/zukoIcon.jpg)";
                  break;
              default:
                  break;
          }
  
          switch (dobra) {
            case 'fogo':
                towerTop.style.backgroundColor = 'rgb(145, 0, 0)';
                break;
            case 'agua':
                towerTop.style.backgroundColor = 'rgb(0, 0, 145)';
                break;
            case 'terra':
                towerTop.style.backgroundColor = 'rgb(0, 145, 0)';
                break;
            case 'ar':
                towerTop.style.backgroundColor = 'rgb(150, 150, 150)';
                break;
            default:
                break;
        }
          }


         
  
  

  
      })});
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });

  function sair() {
    window.location = "../indexLogado.html";
  }