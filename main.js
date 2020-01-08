const arr = [1, 3, 4, 5, 6];

// Funcao anonima convencional
const newArr = arr.map(function(item) {
    return item * 2;
});

// Arrow function - mesmo resultado
const newArrF = arr.map(item => item * 2);

console.log(newArr);
console.log(newArrF);

const teste = () => ({ nome: 'Leandro' });

console.log(teste);
