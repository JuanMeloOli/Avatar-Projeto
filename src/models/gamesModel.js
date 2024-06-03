var database = require("../database/config")


function agniKai(ponto, id) {
    var instrucao = `
    insert into games (AgniKai, fkUsuario) values 
    (${ponto}, ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tophGame(ponto, id) {
    var instrucao = `
    insert into games (TophGame, fkUsuario) values 
    (${ponto}, ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function catchGame(score, id) {
    var instrucao = `
    insert into games (catchGame, fkUsuario) values 
    (${score}, ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function waterQuiz(corretas, id) {
    var instrucao = `
    insert into games (quiz, fkUsuario) values 
    (${corretas}, ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    agniKai,
    tophGame,
    catchGame,
    waterQuiz
};