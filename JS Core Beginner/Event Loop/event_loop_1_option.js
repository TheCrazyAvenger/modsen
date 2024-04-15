const delayCallback = (callback) => setTimeout(callback, 2000);

delayCallback(() => {
  console.log('Вызов после 2 секунд!');
});
