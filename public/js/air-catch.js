document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.getElementById("gameArea");
  const timer = document.getElementById("clock");
  const contentClock = document.getElementById("contentClock");
  const contentPonto = document.getElementById("pontuacaoFinal");
  const pontuacao = document.getElementById("pontuacaoAtual");
  const card = document.getElementById("card");
  const mole = document.createElement("div");
  const flyAang = document.getElementById("flyAang");
  let first = true
  let score = 0;
  let tempo = 30;

  function getRandomPosition() {
    const x = Math.floor(Math.random() * (gameArea.clientWidth - 145));
    const y = Math.floor(Math.random() * (gameArea.clientHeight - 145));
    return { x, y };
  }

  function createMole() {
    mole.classList.add("mole");
    const { x, y } = getRandomPosition();
    mole.style.left = `${x}px`;
    mole.style.top = `${y}px`;

    mole.addEventListener("click", () => {
      score++;
      const scoreFormatado = score < 10 ? `0${score}` : `${score}`;
      pontuacao.textContent = scoreFormatado;
      updateMolePosition(mole);
    });

    gameArea.appendChild(mole);
  }

  function updateMolePosition(mole) {
    const { x, y } = getRandomPosition();
    mole.style.left = `${x}px`;
    mole.style.top = `${y}px`;
  }

  function updateTempo(params) {
    tempo--;
    if (tempo <= 9) {
      timer.style.color = "red";
    }
    const tempoFormatado = tempo < 10 ? `00:0${tempo}` : `00:${tempo}`;
    timer.textContent = tempoFormatado;
    if (tempo <= 0) {
      if (first == true) {
        first = false
        encerrarGame();
      }
    }
  }

  let id = sessionStorage.ID_USUARIO;
  
  function encerrarGame(params) {
    gameArea.classList.remove("shake");
    contentClock.style.display = "none";
    pontuacao.style.display = "none";
    if (score <= 15) {
      contentPonto.innerHTML = `Treine Mais!<br> Você alcançou Aang ${score} vezes.`;
    } else if (score <= 25) {
      contentPonto.innerHTML = `Dá pra melhorar!<br> Você alcançou Aang ${score} vezes.`;
    } else if (score <= 35) {
      contentPonto.innerHTML = `Boa!<br> Você alcançou Aang ${score} vezes.`;
    } else if (score <= 45) {
      contentPonto.innerHTML = `Você foi Bem!!!<br> Você alcançou Aang ${score} vezes.`;
    } else if (score <= 55) {
      contentPonto.innerHTML = `Você foi Ótimo!!!<br> Você alcançou Aang ${score} vezes.`;
    } else {
      contentPonto.innerHTML = `INSANO!!!<br> Você alcançou Aang ${score} vezes.`;
    }

    contentPonto.style.display = "flex";
    mole.remove();

    fetch("./games/catchGame", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        scoreServer: score,
        idServer: id

    })
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO pontuar()!")
  
      if (resposta.ok) {
          console.log(resposta);
          
         
  
          resposta.json().then(json => {
              console.log(json);
              console.log(JSON.stringify(json));
              setTimeout(function () {
                window.location = "air-catch.html";
              }, 2500);
          
          });
  
      } else {
  
          console.log("Houve um erro ao tentar realizar o pontuar!");
  
          
      }
  
  }).catch(function (erro) {
      console.log(erro);
  })
    
  }

  function start(params) {
    gameArea.classList.add("shake");
    card.style.display = "none";
    contentClock.style.display = "flex";
    pontuacao.style.display = "flex";
    flyAang.style.display = "none";
    tempo = 30;
    score = 0;
    createMole();
    timerInterval = setInterval(updateTempo, 1000);
  }

  window.start = start;
});
