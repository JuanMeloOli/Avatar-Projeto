var database = require("../database/config")

function kpiFire(id) {

    var instrucaoSql = `SELECT ROUND(AVG(AgniKai), 2) from games where fkUsuario = '${id}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiEarth(id) {

    var instrucaoSql = `SELECT ROUND(sum(Tophgame), 2) from games where fkUsuario = '${id}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    kpiFire,
    kpiEarth
  };