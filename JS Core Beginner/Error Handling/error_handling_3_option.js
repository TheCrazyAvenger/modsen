const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error('Ошибка: деление на ноль невозможно.');
  } else {
    return num1 / num2;
  }
};

try {
  console.log(divide(10, 0)); // Ошибка: деление на ноль невозможно.
} catch (error) {
  console.error(error.message);
}
