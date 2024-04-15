const bubbleSort = (arr) => {
  const sortedArray = [...arr];
  const swap = (a, b) => {
    const temp = sortedArray[a];
    sortedArray[a] = sortedArray[b];
    sortedArray[b] = temp;
  };

  Array.from({ length: sortedArray.length }).forEach((_, i) => {
    Array.from({ length: sortedArray.length - i - 1 }).forEach((_, j) => {
      if (sortedArray[j] > sortedArray[j + 1]) {
        swap(j, j + 1);
      }
    });
  });

  return sortedArray;
};

console.log(bubbleSort([5, 3, 8, 4, 6])); // Выводит: [3, 4, 5, 6, 8]
