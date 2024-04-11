'use strict';

const includesValue = (array, value) => array.includes(value);

const array = [1, 2, 3, 4, 5];
const value1 = 3;
const value2 = 6;

console.log(`Массив содержит ${value1}: ${includesValue(array, value1)}`);
console.log(`Массив содержит ${value2}: ${includesValue(array, value2)}`);
