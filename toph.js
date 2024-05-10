function mostrarTela2() {
  var start = document.getElementById("start");
  var tela2 = document.getElementById("tela2");

  start.style.display = "none";

  tela2.style.display = "flex";
  reproduzirMusica();
}
var pontuacao = 0;
var jogadasRestantes = 10;

function sorteio() {
  var numeroAleatorio = Math.random();
  return numeroAleatorio >= 0.5 ? 1 : -1;
}

function reproduzirMusica() {
  var audio = new Audio();
  audio.src = "assets/agniKaiTheme.mp3";

  var ladoSorteado = sorteio();
  audio.pan = sorteio();
  audio.play();
  setTimeout(function () {
    audio.pause();
    btnLeft.style.display = "flex";
    btnRight.style.display = "flex";
    document.getElementById("choice1").onclick = function () {
      escolherLado(1, ladoSorteado);
    };
    document.getElementById("choice2").onclick = function () {
      escolherLado(-1, ladoSorteado);
    };
  }, 10000);
}

function escolherLado(ladoEscolhido, ladoSorteado) {
  if (ladoEscolhido == ladoSorteado) {
    pontuacao++;
  }
  jogadasRestantes--;
  if (jogadasRestantes === 0) {
    alert("Fim do jogo! Sua pontuação final é: " + pontuacao);
    document.getElementById("tela2").style.display = "none";
  } else {
    alert(
      "Jogada " +
        (10 - jogadasRestantes) +
        ": Sua pontuação atual é: " +
        pontuacao
    );
    // Reinicio
    btnLeft.style.display = "none";
    btnRight.style.display = "none";
    reproduzirMusica();
  }
  atualizarPontuacao();
}

function atualizarPontuacao() {
  alert("Pontuação: " + pontuacao);
}
