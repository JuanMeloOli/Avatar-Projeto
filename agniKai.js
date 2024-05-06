let personagensEscolhidos = 0;
let opacidade1 = 0.3;
let opacidade2 = 0;
let aumentando = true;
let personagem01;
let personagem02;
let contCPU = 0;
let tempo_inicio = 3;

function ajustarOpacidade() {
  overlay01.style.display = "flex";
  overlay02.style.display = "flex";
  if (aumentando) {
    if (opacidade1 < 1) {
      opacidade1 += 0.003;
    } else {
      aumentando = false;
    }
  } else {
    characterBackground.style.display = "flex";
    if (opacidade2 < 1) {
      opacidade2 += 0.001;
    }
  }
  overlay01.style.opacity = opacidade1;
  overlay02.style.opacity = opacidade1;
  character01.style.opacity = opacidade2;
  character02.style.opacity = opacidade2;
  setTimeout(ajustarOpacidade, 1);
}

function escolhaOzai(params) {
  personagensEscolhidos++;
  characterOzaiButton.style.borderWidth = "5px";
  characterOzaiButton.style.pointerEvents = "none";
  if (personagensEscolhidos == 1) {
    characterOzaiButton.style.borderColor = "green";
    characterOzaiButton.style.color = "green";
    character01.style.backgroundImage = 'url("assets/Ozai.jpg")';
    fighterone.innerHTML = "Player escolheu: Ozai";
    fightertwo.innerHTML = "Escolha um Personagem <br> para a CPU";
  } else if (personagensEscolhidos == 2) {
    characterOzaiButton.style.borderColor = "red";
    characterOzaiButton.style.color = "red";
    character02.style.backgroundImage = 'url("assets/Ozai.jpg")';
    fightertwo.innerHTML = "CPU: Ozai";
    setTimeout(ajustarOpacidade, 1500);
  }
}

function escolhaZuko(params) {
  personagensEscolhidos++;
  characterZukoButton.style.borderWidth = "5px";
  characterZukoButton.style.pointerEvents = "none";
  if (personagensEscolhidos == 1) {
    characterZukoButton.style.borderColor = "green";
    characterZukoButton.style.color = "green";
    character01.style.backgroundImage = 'url("assets/zukoFire.jpg")';
    fighterone.innerHTML = "Player<br> Zuko";
    fightertwo.innerHTML = "Escolha um Personagem <br> para a CPU";
  } else if (personagensEscolhidos == 2) {
    characterZukoButton.style.borderColor = "red";
    characterZukoButton.style.color = "red";
    character02.style.backgroundImage = 'url("assets/zukoFire.jpg")';
    fightertwo.innerHTML = "CPU: Zuko";
    setTimeout(ajustarOpacidade, 1500);
  }
}
function escolhaAzula(params) {
  personagensEscolhidos++;
  characterAzulaButton.style.borderWidth = "5px";
  characterAzulaButton.style.pointerEvents = "none";
  if (personagensEscolhidos == 1) {
    characterAzulaButton.style.borderColor = "green";
    characterAzulaButton.style.color = "green";
    character01.style.backgroundImage = 'url("assets/azulaFire.jpeg")';
    fighterone.innerHTML = "Player<br> Azula";
    fightertwo.innerHTML = "Escolha um Personagem <br> para a CPU";
  } else if (personagensEscolhidos == 2) {
    characterAzulaButton.style.borderColor = "red";
    characterAzulaButton.style.color = "red";
    character02.style.backgroundImage = 'url("assets/azulaFire.jpeg")';
    fightertwo.innerHTML = "CPU: Azula";
    setTimeout(ajustarOpacidade, 1500);
  }
}

function escolhaIroh(params) {
  personagensEscolhidos++;
  characterIrohButton.style.borderWidth = "5px";
  characterIrohButton.style.pointerEvents = "none";
  if (personagensEscolhidos == 1) {
    characterIrohButton.style.borderColor = "green";
    characterIrohButton.style.color = "green";
    character01.style.backgroundImage = 'url("assets/Iroh.jpg")';
    fighterone.innerHTML = "Player<br> Iroh";
    fightertwo.innerHTML = "Escolha um Personagem <br> para a CPU";
  } else if (personagensEscolhidos == 2) {
    characterIrohButton.style.borderColor = "red";
    characterIrohButton.style.color = "red";
    character02.style.backgroundImage = 'url("assets/Iroh.jpg")';
    fightertwo.innerHTML = "CPU: Iroh";

    setTimeout(ajustarOpacidade, 1500);
  }
}
function contar() {
  contCPU++;
  atack_cpu.innerHTML = `Ataques de Fogo: ${contCPU}`;
  if (contCPU < 200) {
    setTimeout(contar, 140);
  }else if(contCPU == 200){
    atack_cpu.style.fontSize = "3rem";
    atack_cpu.innerHTML = `CPU WIN`;
    button_player.innerHTML = ``
  }
}
function iniciar() {
  tempo_inicio--;
  timer.innerHTML = `Iniciando em ${tempo_inicio}...`;
  if (tempo_inicio >= 0) {
    setTimeout(iniciar, 1000);
  } else {
    timer.style.display = "none";
    player.style.display = "block";
    cpu.style.display = "block";
  }
}

function gamestart(params) {
  timer.style.display = "block";
  setTimeout(contar, 3500);
  setTimeout(iniciar, 300);
  startGame.style.display = "none";
  var clickCount = 0;
  button_player.addEventListener("click", () => {
    clickCount++;
    atack_player.innerHTML = `Ataques de Fogo: ${clickCount}`;
    if (clickCount == 200) {
      atack_cpu.style.fontSize = "3rem";
      atack_player.innerHTML = `You WIN`;
      button_player.innerHTML = ``
    }
  });
}
