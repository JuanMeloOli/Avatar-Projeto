const dash = document.getElementById("dash");

new Chart(dash, {
  type: "line",
  data: {
    labels: ["07", "06", "05", "04", "03", "02", "01"],
    datasets: [
      {
        label: "Acertos",
        data: [2, 4, 8, 7, 6, 9, 10],
        borderWidth: 1,
        backgroundColor: "blue",
        borderColor: "blue",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Últimas Tentativas", // Título do eixo X
          font: {
            weight: "bold", // Estilo da fonte (negrito)
            size: 16, // Tamanho da fonte
            family: "Arial", // Tipo de fonte
          },
          padding: {
            // Preenchimento do título
            top: 10,
            bottom: 10,
          },
        },
      },
      y: {
        display: true, // Ocultar escala do eixo Y
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top", // Posição da legenda
      },
    },
  },
});

const tradeName = document.querySelector(".tradeName");
const tradePicture = document.querySelector(".tradePicture");
const personal = document.querySelector(".personal");
const contentName = document.querySelector(".content-name");
const contentPicture = document.querySelector(".content-picture");
const exit1 = document.querySelector(".exit-personal");
const exit2 = document.querySelector(".exit-personal_2");

tradeName.addEventListener("click", nameTrade);
tradePicture.addEventListener("click", pictureTrade);
exit1.addEventListener("click", exit);
exit2.addEventListener("click", exit);

function hideName(params) {
  personal.style.display = "none";
  contentName.style.display = "flex";
}
function hidePicture(params) {
  personal.style.display = "none";
  contentPicture.style.display = "flex";
}

function exit(params) {
  personal.style.display = "flex";
  contentName.style.display = "none";
  contentPicture.style.display = "none";
}

function nameTrade(params) {
  hideName();
}

function pictureTrade(params) {
  hidePicture();
}

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
          "white", // Ar
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
