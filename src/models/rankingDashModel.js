
var database = require("../database/config")

function rankingAgniKai() {
    var instrucaoSql =`
    SELECT 
    usuario.nome as nome, 
    usuario.favDobra as dobra, 
    usuario.fotoPerfil as foto, 
    FORMAT(games.AgniKai, 2) as valor 
FROM 
    usuario as Usuario
JOIN 
    games as Games ON usuario.idUsuario = games.fkUsuario
ORDER BY 
    games.AgniKai DESC
LIMIT 3;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingCatchGame() {
    var instrucaoSql =`
    SELECT 
    usuario.nome as nome, 
    usuario.favDobra as dobra, 
    usuario.fotoPerfil as foto, 
    games.catchGame as valor 
FROM 
    usuario as Usuario
JOIN 
    games as Games ON usuario.idUsuario = games.fkUsuario
ORDER BY 
    games.catchGame DESC
LIMIT 3;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingQuiz() {
    var instrucaoSql =`
    SELECT 
    usuario.nome as nome, 
    usuario.favDobra as dobra, 
    usuario.fotoPerfil as foto, 
    SUM(games.quiz) as valor
FROM 
    usuario as Usuario
JOIN 
    games as Games ON usuario.idUsuario = games.fkUsuario
GROUP BY 
    usuario.idUsuario
ORDER BY 
    valor DESC
LIMIT 3;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingTophGame() {
    var instrucaoSql =`
    SELECT 
    usuario.nome as nome, 
    usuario.favDobra as dobra, 
    usuario.fotoPerfil as foto, 
    SUM(games.tophGame) as valor
FROM 
    usuario as Usuario
JOIN 
    games as Games ON usuario.idUsuario = games.fkUsuario
GROUP BY 
    usuario.idUsuario
ORDER BY 
    valor DESC
LIMIT 3;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    rankingAgniKai,
    rankingCatchGame,
    rankingQuiz,
    rankingTophGame
  };