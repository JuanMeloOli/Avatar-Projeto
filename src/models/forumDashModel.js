var database = require("../database/config")


function enviarMsg(id, texto) {
    var instrucaoSql = `insert into forum (mensagem, fkUsuario) values ('${texto}','${id}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviarMsg
  };