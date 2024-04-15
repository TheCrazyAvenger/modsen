const sumOfSquares = (numbers) =>
  numbers.reduce((sum, num) => sum + num * num, 0);

console.log(sumOfSquares([1, 2, 3, 4, 5])); // Выводит: 55
