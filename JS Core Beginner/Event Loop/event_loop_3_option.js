const randomDelay = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve(
          `Сгенерированное число: ${randomNumber}. Промис выполнен успешно.`
        );
      } else {
        reject(
          `Сгенерированное число: ${randomNumber}. Промис выполнен с ошибкой.`
        );
      }
    }, randomNumber * 1000);
  });
};

randomDelay()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
