'use strict';

const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

console.log(`Факториал 5: ${factorial(5)}`);
