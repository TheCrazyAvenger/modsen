const testScope = () => {
  var x = 'var';
  let y = 'let';
  const z = 'const';

  console.log(x);
  console.log(y);
  console.log(z);
};

testScope();

console.log(x); // x is not defined
console.log(y); // y is not defined
console.log(z); // z is not defined
