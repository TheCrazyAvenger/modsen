const printSumOfFirstAndLastDigit = (num) => {
  const digits = num.toString().split('');
  const firstDigit = parseInt(digits[0], 10);
  const lastDigit = parseInt(digits[digits.length - 1], 10);
  console.log(firstDigit + lastDigit);
};

printSumOfFirstAndLastDigit(12345); // Выводит: 6
