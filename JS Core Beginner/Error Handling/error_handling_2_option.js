const accessProperty = (obj, property) => {
  try {
    return obj[property];
  } catch (error) {
    if (error instanceof TypeError) {
      return `Ошибка: ${error.message}`;
    } else {
      throw error;
    }
  }
};

let obj;
console.log(accessProperty(obj, 'property')); // Вернет: "Ошибка: Cannot read property 'property' of undefined"
