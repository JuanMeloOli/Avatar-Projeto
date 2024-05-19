const dash = document.getElementById("dash");

new Chart(dash, {
  type: "line",
  data: {
    labels: ["29/09", "30/09", "01/10", "02/10", "03/10", "04/10", "05/10"],
    datasets: [
      {
        label: "Com Estoque",
        data: [1, 1, 0, 1, 1, 1, 1],
        borderWidth: 1,
        backgroundColor: "#a20000",
        borderColor: "#a20000",
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
          text: "Últimos Dias(Dias Atrás)", // Título do eixo X
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

tradeName.addEventListener("click", nameTrade);

function hide(params) {
  personal.style.display = "none";
  contentName.style.display = "flex";
}

function nameTrade(params) {
  hide();
}
