'use strict';

const countVowels = (str) => {
  const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  return str
    .toLowerCase()
    .split('')
    .filter((char) => vowels.includes(char)).length;
};

console.log(
  `Количество гласных в 'Привет, мир!': ${countVowels('Привет, мир!')}`
);
