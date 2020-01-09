"use strict";

var usuario = {
  nome: 'Leandro Vieira',
  idade: 36,
  endereco: {
    cidade: 'Guarulhos',
    estado: 'SP'
  }
};
console.log(usuario); // Recuperando informações do jeito tradicional
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
// Recuperando com a Desestruturação de objeto com o ES6

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(usuario);
