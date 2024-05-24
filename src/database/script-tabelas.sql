-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

use avatar;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(40),
    favDobra VARCHAR(10),
    CONSTRAINT chk_favDobra CHECK (favDobra IN ('fogo', 'agua', 'terra', 'ar'))
);


create table games (
idGames int primary key auto_increment,
vitoriasTophgame int,
vitoriasAgniKai int,
fkUsuario int,
constraint fkUsuarioGames foreign key (fkUsuario) references usuario(idUsuario));




create table quiz(
idQuiz int primary key auto_increment,
acertos int 
);


insert into games values 
(1, 1, 1, 4);


UPDATE games
SET vitoriastophGame = vitoriastophGame  + 1
WHERE idGames = 1;

select * from games;


describe usuario;