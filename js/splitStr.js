/*Use the split method inside the function called splitify to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.*/

function splitify(str) {
  return str.split(/\W/);
}

const myStr = 'Hello World,I-am code';
const res = splitify(myStr);
console.log(res);
