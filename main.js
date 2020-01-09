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

// Tambem pode ser aplicado em funcoes
function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 2, 3, 4, 5, 6, 7));


// SPREAD - operador que repassa as informacoes de
// um objeto ou array para outra estrutura de dados

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// Recurso muito utilizado no React
const usuario1 = {
    nome: 'Leandro',
    idade: 36,
    empresa: 'Mandrillus'
};

const usuario2 = { ...usuario1, nome: 'Carlos Alberto' };

console.log(usuario2);
