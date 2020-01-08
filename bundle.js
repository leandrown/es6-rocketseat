"use strict";

var arr = [1, 3, 4, 5, 6]; // Funcao anonima convencional

var newArr = arr.map(function (item) {
  return item * 2;
}); // Arrow function - mesmo resultado

var newArrF = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
console.log(newArrF);
