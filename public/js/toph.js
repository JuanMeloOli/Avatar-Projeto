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

var id = sessionStorage.ID_USUARIO;
function escolherLado(ladoEscolhido, ladoSorteado) {
  msg.style.display = "flex";
  jogadasRestantes--;
  if (ladoEscolhido == ladoSorteado) {
    pontuacao++;
    if (jogadasRestantes==1) {
      msg.innerHTML = `Você Acertou!<br> Falta ${jogadasRestantes} jogada`;  
    }else{
    msg.innerHTML = `Você Acertou!<br> Faltam ${jogadasRestantes} jogadas`;
    }
  } else {
    if (jogadasRestantes==1) {
      msg.innerHTML = `Você Errou!<br> Falta ${jogadasRestantes} jogada`;  
    }else{
    msg.innerHTML = `Você Errou!<br> Faltam ${jogadasRestantes} jogadas`;
    }
  }
  scoreboard.innerHTML = `Pontuação: ${pontuacao}`;
  btnLeft.style.display = "none";
  btnRight.style.display = "none";

  if (jogadasRestantes === 0) {
    scoreboard.innerHTML = `Pontuação: ${pontuacao}`;
    btnLeft.style.display = "none";
    btnRight.style.display = "none";
    msg.innerHTML = `Pontuação final: ${pontuacao}<br>`;
   


       fetch("./tophGame/pontuar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pontoServer: pontuacao,
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
                  window.location = "/earth-toph.html";
                }, 1000); // apenas para exibir o loading
            });
    
        } else {
    
            console.log("Houve um erro ao tentar realizar o pontuar (toph)!");
    
            
        }
    
    }).catch(function (erro) {
        console.log(erro);
    })
    
    return false;
      

    }
    setTimeout(function () {
      // Reinicio
      reproduzirMusica();
    }, 3000);
  };
  

