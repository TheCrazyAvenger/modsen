const sumFirstHalf = (numbers) => {
  const halfLength = Math.floor(numbers.length / 2);
  const firstHalf = numbers.slice(0, halfLength);
  return firstHalf.reduce((sum, num) => sum + num, 0);
};

console.log(sumFirstHalf([10, 20, 30, 40, 50, 60])); // Выводит: 60
