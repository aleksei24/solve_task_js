/*Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.*/

function reverseStr(str) {
  return str.split('').reverse().join('');
}

const res = reverseStr('hello');
console.log(res);
