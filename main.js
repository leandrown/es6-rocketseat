// Funcao anonima tradicional
function soma(a = 3, b = 8) {
    return a + b;
}

console.log(soma(1));
console.log(soma());

// Arrow funcion
const somaAF = (a = 3, b = 8) => a + b;

console.log(somaAF(1));
console.log(somaAF());
