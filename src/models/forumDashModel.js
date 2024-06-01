var database = require("../database/config")


function enviarMsg(id, texto) {
    var instrucaoSql = `insert into forum (mensagem, fkUsuario) values ('${texto}','${id}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarMsg(idForum) {
    var instrucaoSql = `delete from forum where idForum = '${idForum}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarMsg(idForum, texto) {
    var instrucaoSql = `update forum set mensagem = '${texto}' where idForum = '${idForum}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterTodasMsgs() {
    var instrucaoSql =`
    SELECT  
        forum.idForum as idForum,
        forum.mensagem as mensagem, 
        DATE_FORMAT(forum.data_insercao, '%H:%i') AS hora, 
        DATE_FORMAT(forum.data_insercao, '%d:%m:%Y') AS data, 
        usuario.nome as nome, 
        usuario.favDobra as dobra,
        usuario.fotoPerfil as foto,
        usuario.idUsuario as idUsuario
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
    deletarMsg,
    atualizarMsg,
    obterTodasMsgs
  };