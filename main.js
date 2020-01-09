// REST - operador que pega o "resto do objeto"

const usuario = {
    nome: 'Leandro',
    idade: 36,
    empresa: 'Mandrillus'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// Podemos usar também em um vetor/array
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);
