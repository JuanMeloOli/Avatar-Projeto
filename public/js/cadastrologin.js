function home(params) {
  setTimeout(function () {
    window.location = "index.html";
  }, 500);
}

  
  
  
  
  
  
    function mudar(params) {
    let overlay = document.getElementById("overlay");
    overlay.style.transform = "translateX(0)";
    overlay.style.background = "url(./assets/zukoArt.jpg)";
    
  }
  
  function mudar2(params) {
    let overlay = document.getElementById("overlay");
    overlay.style.transform = "translateX(100%)";
    overlay.style.background = "url(./assets/kataraArt.jpg)";
  }
  
  
  function exibirMsgErro(params) {
    msg_erro.style.display = 'flex'
    setTimeout(function () {
      msg_erro.style.display = 'none';
      }, 6000);
  }
  
  function validarEmail() {
      var email = input_email.value;
      var mensagemEmail = '';
      var emailCom = email.endsWith('.com');
      var emailArroba = email.indexOf("@");
      if (emailCom == false || emailArroba == -1) {
        exibirMsgErro()
          mensagemEmail = 'Email inválido';
          msgErro.innerHTML = mensagemEmail;
      } else {
          return true;
      }
  }
  
  
  
  function validarSenha() {
      senha = input_password.value;
      var confirmarSenha = input_confirm.value;
      var mensagemSenha = '';
  
      if (confirmarSenha != senha) {
          exibirMsgErro();
          mensagemSenha = 'Senhas não são iguais.';
          msgErro.innerHTML = mensagemSenha;
      }else if (!/[A-Z]/.test(senha)) {
          exibirMsgErro();
          mensagemSenha = 'Senha deve conter pelo menos uma letra maiúscula.';
          msgErro.innerHTML = mensagemSenha;
      }
      else if (!/[a-z]/.test(senha)) {
          exibirMsgErro();
          mensagemSenha = 'Senha deve conter pelo menos uma letra minúscula.';
          msgErro.innerHTML = mensagemSenha;
      }
      else if (senha.length < 8) {
          exibirMsgErro();
          mensagemSenha = 'Senha deve ter no mínimo 8 caracteres.';
          msgErro.innerHTML = mensagemSenha;
      }
      else {
          return true;
      }
  }
  


  function entrarLogin() {

    var emailVar = input_email_log.value;
    var senhaVar = input_password_log.value;
    
    if (emailVar == "" || senhaVar == "") {
        return false;
    }
    
    
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);
    
    fetch("./usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
    
        if (resposta.ok) {
            console.log(resposta);
            
           
    
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
              
                setTimeout(function () {
                  window.location = "/indexLogado.html";
                }, 1000); // apenas para exibir o loading
            });
    
        } else {
    
            console.log("Houve um erro ao tentar realizar o login!");
    
            
        }
    
    }).catch(function (erro) {
        console.log(erro);
    })
    
    return false;
    }
  
  function cadastrar() {
    validarEmail()
    validarSenha()
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_name.value;
    var emailVar = input_email.value;
    var senhaVar = input_password.value;
    var confirmacaoSenhaVar = input_confirm.value;
  
    const radios = document.querySelectorAll('input[name="dobra"]');
      let dobraVar = undefined;
  
      radios.forEach((radio) => {
        if (radio.checked) {
          dobraVar = radio.value;
          }});
          
    console.log(nomeVar)
    console.log(emailVar)
    console.log(senhaVar)
    console.log(confirmacaoSenhaVar)
    console.log(dobraVar)
  
  
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
    fetch("./usuarios/cadastrar", {
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
          let mensagem = 'Cadastrado!';
          exibirMsgErro();
          let erromsg = document.getElementById("erromsg");
          erromsg.style.display = "none"
          msgErro.innerHTML = mensagem;
          setTimeout(() => {
            window.location = "cadastrologin.html";
          }, "2000");
  
  
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  
    return false;
  
  
  
  
  
   //login
  
  
  
  }