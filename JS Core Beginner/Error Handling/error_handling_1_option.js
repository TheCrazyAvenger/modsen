const checkInteger = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error(`${number} не является целым числом.`);
  } else {
    return `${number} является целым числом.`;
  }
};

try {
  console.log(checkInteger(10));
  console.log(checkInteger(10.5));
} catch (error) {
  console.error(error.message);
}
