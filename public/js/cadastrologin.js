function mudar(params) {
  var overlay = document.getElementById("overlay");
  overlay.style.transform = "translateX(0)";
  overlay.style.background = "url(./assets/zukoArt.jpg)";
  
}

function mudar2(params) {
  var overlay = document.getElementById("overlay");
  overlay.style.transform = "translateX(100%)";
  overlay.style.background = "url(./assets/kataraArt.jpg)";
}



function cadastrar() {

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = input_name.value;
  var emailVar = input_email.value;
  var senhaVar = input_password.value;
  var confirmacaoSenhaVar = input_confirm.value;
  var dobraVar = dobraForm.value

  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == "" ||
    dobraVar == ""
  ) {
    return false;
  }

  // Enviando o valor da nova input
  fetch("../routes/usuarios.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
      dobraServer: dobraVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        alert("erro")


        setTimeout(() => {
          window.location = "./dashboard/dashboard.js";
        }, "2000");


      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function listar() {
  fetch("/empresas/listar", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((empresas) => {
        empresas.forEach((empresa) => {
          listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
        });
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}
