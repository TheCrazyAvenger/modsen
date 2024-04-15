const firstUniqueChar = (str) => {
  const charCounts = [...str].reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});

  return Object.keys(charCounts).find((char) => charCounts[char] === 1);
};

console.log(firstUniqueChar('hello')); // Выводит: 'h'
console.log(firstUniqueChar('aabbcc')); // Выводит: undefined
