
var database = require("../database/config")

function kpiFire(id) {

    var instrucaoSql = `SELECT ROUND(AVG(AgniKai), 2) from games where fkUsuario = '${id}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiEarth(id) {

    var instrucaoSql = `SELECT sum(Tophgame) from games where fkUsuario = '${id}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function kpiWater(id) {
    var instrucaoSql = `SELECT sum(quiz) from games where fkUsuario = '${id}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiAir(id) {
    var instrucaoSql = `SELECT max(catchGame) from games where fkUsuario = '${id}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    kpiFire,
    kpiEarth,
    kpiAir,
    kpiWater
  };