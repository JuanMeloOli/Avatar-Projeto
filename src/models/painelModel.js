var database = require("../database/config")


function vitorias(id) {
    var instrucao = `
    select sum(vitoriasAgniKai) from games where fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    vitorias
};