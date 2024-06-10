const startGameButton = document.querySelector(".start-quiz");
const questionsContainer = document.querySelector(".questions-container");
const answersContainer = document.querySelector(".answers-container");
const questionText = document.querySelector(".question");
const nextQuestionButton = document.querySelector(".next-question");
const container = document.querySelector(".container");
const exitButton = document.querySelector(".exit-button");

startGameButton.addEventListener("click", startGame);
nextQuestionButton.addEventListener("click", exibirProximaPergunta);

let indiceAtualDaPergunta = 0;
let totalCorretas = 0;

function startGame(params) {
  startGameButton.classList.add("hide");
  questionsContainer.classList.remove("hide");
  exitButton.classList.add("hide");

  exibirProximaPergunta();
}

function exibirProximaPergunta(params) {
  resetarEstado();

  if (questions.length == indiceAtualDaPergunta) {
    return finalizarJogo();
  }

  questionText.textContent = questions[indiceAtualDaPergunta].question;

  questions[indiceAtualDaPergunta].answers.forEach((answers) => {

    const novaResposta = document.createElement("button");
    novaResposta.classList.add("button", "answer");
    novaResposta.textContent = answers.text;
    if (answers.correct) {
      novaResposta.dataset.correct = answers.correct;
    }
    answersContainer.appendChild(novaResposta);

    novaResposta.addEventListener("click", selectAnswer);
  });
}

function resetarEstado(params) {
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }

  document.body.removeAttribute("class");
  nextQuestionButton.classList.add("hide");
}

function selectAnswer(event) {
  const answerClicked = event.target;

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");
    totalCorretas++;
  } else {
    document.body.classList.add("incorrect");
  }

  document.querySelectorAll(".answer").forEach((button) => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }

    button.disabled = true;
  });
  nextQuestionButton.classList.remove("hide");
  indiceAtualDaPergunta++;
}

let id = sessionStorage.ID_USUARIO;

function  finalizarJogo(params) {
  const totalQuestion = questions.length;
  const performance = Math.floor((totalCorretas * 100) / totalQuestion);

  let message = "";

  switch (true) {
    case performance >= 90:
      message = "Excelente :)";
      break;
    case performance >= 70:
      message = "Muito Bom :)";
      break;
    case performance >= 50:
      message = "Bom";
      break;
    default:
      message = "Pode Melhorar :(";
      break;
  }

  questionsContainer.innerHTML = `
  <p>
   Você acertou ${totalCorretas} de ${totalQuestion} questões!
  <span>Resultado: ${message}</span>
    </p>
<button onclick=window.location.reload()>Refazer Teste</button>`;




fetch("./games/waterQuiz", {
  method: "POST",
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
    corretasServer: totalCorretas,
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
             reiniciar();
          }, 1000); 
      });

  } else {

      console.log("Houve um erro ao tentar realizar o pontuar!");

      
  }

}).catch(function (erro) {
  console.log(erro);
})
}

const questions = [
  {
    question: "Onde Katara e Sokka nasceram?",
    answers: [
      { text: "Nação do Fogo", correct: false },
      { text: "Tribo da Água do Norte", correct: false },
      { text: "Reino da Terra", correct: false },
      { text: "Tribo da Água do Sul", correct: true },
    ],
  },
  {
    question:
      "Qual é o nome do espírito da Lua que se sacrifica para restaurar o equilíbrio no Mundo dos Espíritos?",
    answers: [
      { text: "Tui", correct: false },
      { text: "La", correct: false },
      { text: "Yue", correct: true },
      { text: "Koh", correct: false },
    ],
  },
  {
    question: "Quem era o Avatar antes de Aang?",
    answers: [
      { text: "Roku", correct: true },
      { text: "Kyoshi", correct: false },
      { text: "Yangchen", correct: false },
      { text: "Korra", correct: false },
    ],
  },
  {
    question: "Qual a ordem de temporadas de ATLA?",
    answers: [
      { text: "Livro 1: Ar, Livro 2: Terra, Livro 3: Água", correct: false },
      { text: "Livro 1: Ar, Livro 2: Água, Livro 3: Fogo", correct: false },
      { text: "Livro 1: Água, Livro 2: Terra, Livro 3: Fogo", correct: true },
      { text: "Livro 1: Água, Livro 2: Ar, Livro 3: Fogo", correct: false },
    ],
  },
  {
    question:
      "Qual é o nome do bisavô de Zuko e Azula, que foi amigo do Avatar Roku?",
    answers: [
      { text: "Sozin", correct: true },
      { text: "Azulon", correct: false },
      { text: "Iroh", correct: false },
      { text: "Zuko", correct: false },
    ],
  },
  {
    question:
      "Qual é o nome da cidade do Reino da Terra onde Aang e seus amigos encontram o Rei Bumi pela primeira vez?",
    answers: [
      { text: "Taku", correct: false },
      { text: "Gaoling", correct: false },
      { text: "Ba Sing Se", correct: false },
      { text: "Omashu", correct: true },
    ],
  },
];
