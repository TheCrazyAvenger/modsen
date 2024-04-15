const repeatOperation = (operation, interval) =>
  setInterval(operation, interval);

repeatOperation(() => console.log('Привет, мир!'), 1000);
