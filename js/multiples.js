function* multiples(a, b) {
  if (b < a) {
    return [];
  }
  let x = 1;
  let y = 0;
  while ((y = a * x++) < b) {
    yield y;
  }
}

const getMultiples = (a, b) => [...multiples(a, b)];

console.log(getMultiples(5, 23));
// console.log(getMultiples(5, 3));
