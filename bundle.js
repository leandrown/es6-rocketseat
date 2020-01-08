"use strict";

var arr = [1, 2, 4, 6, 5, 3, 7, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
