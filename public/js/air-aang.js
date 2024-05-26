function home(params) {
    if (sessionStorage.NOME_USUARIO == undefined) {
    setTimeout(function () {
        window.location = "index.html";
        }, 300);
    }else{
    setTimeout(function () {
        window.location = "indexLogado.html";
        }, 300);
    }
  }