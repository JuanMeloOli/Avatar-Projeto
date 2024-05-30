-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database avatar;
use avatar;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(40),
    favDobra VARCHAR(10),
    CONSTRAINT chk_favDobra CHECK (favDobra IN ('fogo', 'agua', 'terra', 'ar')),
    fotoPerfil char(1)
);

select * from usuario;
select * from usuario;


create table games (
idGames int primary key auto_increment,
Tophgame int,
AgniKai float,
fkUsuario int,
constraint fkUsuarioGames foreign key (fkUsuario) references usuario(idUsuario));



create table quiz(
idQuiz int primary key auto_increment,
acertos int 
);


select sum(vitoriasAgniKai) from games where fkUsuario = 9;

select * from games;


describe usuario;