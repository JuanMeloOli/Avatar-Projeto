let personagensEscolhidos = 0;
let opacidade1 = 0.3;
let opacidade2 = 0;
let aumentando = true;
let personagem01;
let personagem02;

function ajustarOpacidade() {
  if (aumentando) {
    if (opacidade1 < 1) {
      opacidade1 += 0.003;
    } else {
      aumentando = false;
    }
  } else {
    character01.style.display = "flex";
    character02.style.display = "flex";
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
  if (personagensEscolhidos == 1) {
    character01.style.backgroundImage = 'url("assets/Ozai.jpg")';
    fighterone.innerHTML = "Player escolheu: Ozai";
    fightertwo.innerHTML = "Escolha um Personagem <br> para a CPU";
  } else if (personagensEscolhidos == 2) {
    character02.style.backgroundImage = 'url("assets/Ozai.jpg")';
    fightertwo.innerHTML = "CPU: Ozai";
    overlay01.style.display = "flex";
    overlay02.style.display = "flex";
    ajustarOpacidade();
  }
}

function escolhaZuko(params) {
  personagensEscolhidos++;
  if (personagensEscolhidos == 1) {
    character01.style.backgroundImage = 'url("assets/zukoFire.jpg")';
    fighterone.innerHTML = "Player<br> Zuko";
    fightertwo.innerHTML = "Escolha um Personagem <br> para a CPU";
  } else if (personagensEscolhidos == 2) {
    character02.style.backgroundImage = 'url("assets/zukoFire.jpg")';
    fightertwo.innerHTML = "CPU: Zuko";
    overlay01.style.display = "flex";
    overlay02.style.display = "flex";
    ajustarOpacidade();
  }
}
function escolhaAzula(params) {
  personagensEscolhidos++;
  if (personagensEscolhidos == 1) {
    character01.style.backgroundImage = 'url("assets/azulaFire.jpeg")';
    fighterone.innerHTML = "Player<br> Azula";
    fightertwo.innerHTML = "Escolha um Personagem <br> para a CPU";
  } else if (personagensEscolhidos == 2) {
    character02.style.backgroundImage = 'url("assets/azulaFire.jpeg")';
    fightertwo.innerHTML = "CPU: Azula";
    overlay01.style.display = "flex";
    overlay02.style.display = "flex";
    ajustarOpacidade();
  }
}

function escolhaIroh(params) {
  personagensEscolhidos++;
  if (personagensEscolhidos == 1) {
    character01.style.backgroundImage = 'url("assets/Iroh.jpg")';
    fighterone.innerHTML = "Player<br> Iroh";
    fightertwo.innerHTML = "Escolha um Personagem <br> para a CPU";
  } else if (personagensEscolhidos == 2) {
    character02.style.backgroundImage = 'url("assets/Iroh.jpg")';
    fightertwo.innerHTML = "CPU: Iroh";
    overlay01.style.display = "flex";
    overlay02.style.display = "flex";
    ajustarOpacidade();
  }
}
