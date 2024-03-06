let array = [1, 85, 3, 167, 25, 0];

array.sort((a, b) => (a < 0) - (b < 0) || a - b);

console.log(array);
