var database = require("../database/config")


function enviarMsg(id, texto) {
    var instrucaoSql = `insert into forum (mensagem, fkUsuario) values ('${texto}','${id}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterTodasMsgs() {
    var instrucaoSql =`
    SELECT  
        forum.mensagem as mensagem, 
        DATE_FORMAT(forum.data_insercao, '%H:%i') AS hora, 
        DATE_FORMAT(forum.data_insercao, '%d:%m:%Y') AS data, 
        usuario.nome as nome, 
        usuario.favDobra as dobra,
        usuario.fotoPerfil as foto
    FROM 
        forum
    JOIN 
        usuario 
    ON 
        forum.fkUsuario = usuario.idUsuario
    ORDER BY 
        forum.data_insercao DESC
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviarMsg,
    obterTodasMsgs
  };