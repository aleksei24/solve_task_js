function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let res = randomRange(4, 12);
console.log(res);
