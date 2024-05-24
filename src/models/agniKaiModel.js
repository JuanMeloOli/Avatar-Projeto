var database = require("../database/config")


function pontuar() {
    var instrucao = `
    UPDATE games
    SET vitoriastophGame = vitoriastophGame  + 1
    WHERE fkUsuario = ${sessionStorage.id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    pontuar
};