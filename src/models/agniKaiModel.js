var database = require("../database/config")


function pontuar(ponto, id) {
    var instrucao = `
    insert into games (AgniKai, fkUsuario) values 
    (${ponto}, ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    pontuar
};