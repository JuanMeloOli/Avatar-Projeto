function mostrarTela2() {
  var start = document.getElementById("start");
  var tela2 = document.getElementById("tela2");

  start.style.display = "none";

  tela2.style.display = "flex";
  reproduzirMusica();
}
var pontuacao = 0;
var jogadasRestantes = 7;

function sorteio() {
  var numeroAleatorio = Math.random();
  return numeroAleatorio >= 0.5 ? 1 : -1;
}

function reproduzirMusica() {
  msg.innerHTML = `Escute o Som 🔊`;
  var ladoSorteado = sorteio();
  let audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let audio = "";
  if (jogadasRestantes == 5 || jogadasRestantes == 2) {
    audio = new Audio("assets/watermove.mp3");
  } else if (jogadasRestantes == 4 || jogadasRestantes == 7) {
    audio = new Audio("assets/fireballsound.mp3");
  } else {
    audio = new Audio("assets/running.mp3");
  }

  let audioSource = audioContext.createMediaElementSource(audio); // Carregar o áudio

  let splitter = audioContext.createChannelSplitter(2); // Dividir o áudio nos 2 lados
  let merger = audioContext.createChannelMerger(2);

  let gainNode = audioContext.createGain();

  audioSource.connect(gainNode); // Conectar volume com a saida
  gainNode.connect(audioContext.destination);

  gainNode.gain.value = 0;

  audioSource.connect(splitter);
  if (ladoSorteado == 1) {
    splitter.connect(merger, 1, 0);
  } else {
    splitter.connect(merger, 0, 1);
  }

  merger.connect(audioContext.destination);

  audio.play();

  setTimeout(function () {
    msg.style.display = "none";
    audio.pause();
    btnLeft.style.display = "flex";
    btnRight.style.display = "flex";
    document.getElementById("btnLeft").onclick = function () {
      escolherLado(1, ladoSorteado);
    };
    document.getElementById("btnRight").onclick = function () {
      escolherLado(-1, ladoSorteado);
    };
  }, 3000);
}

function escolherLado(ladoEscolhido, ladoSorteado) {
  msg.style.display = "flex";
  jogadasRestantes--;
  if (ladoEscolhido == ladoSorteado) {
    pontuacao++;
    msg.innerHTML = `Você Acertou!<br> Faltam ${jogadasRestantes} jogadas`;
  } else {
    msg.innerHTML = `Você Errou!<br> Pontuação final: 0${pontuacao} <br>
    Tente Novamente!`;
    setTimeout(function () {
      window.location.href = "earth-toph.html";
    }, 3000);
  }
  scoreboard.innerHTML = `Pontuação: ${pontuacao}`;
  btnLeft.style.display = "none";
  btnRight.style.display = "none";

  if (jogadasRestantes === 0) {
    scoreboard.innerHTML = `Pontuação: ${pontuacao}`;
    btnLeft.style.display = "none";
    btnRight.style.display = "none";
    msg.innerHTML = `Pontuação final: ${pontuacao}<br>`;
    setTimeout(function () {
      window.location.href = "earth-toph.html";
    }, 3000);
  }
  setTimeout(function () {
    // Reinicio
    reproduzirMusica();
  }, 3000);
}
