const asyncOperation = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Завершена операция: ${value}`);
      resolve(value);
    }, 1000 * value);
  });
};

function executeAsyncOperations() {
  asyncOperation(1)
    .then(() => asyncOperation(2))
    .then(() => asyncOperation(3))
    .then(() => console.log('Все операции успешно завершены.'));
}

executeAsyncOperations();
