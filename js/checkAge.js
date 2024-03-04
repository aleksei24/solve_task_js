/* 
Rewrite a function using '?' or '||' operators.
*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return 'Get the permission from your parents';
  }
}

/*function checkAge(age) {
  return age > 18 ? true : 'get the permission';
}*/

/*function checkAge(age) {
  return age > 18 || 'get the permission';
}*/

const res = checkAge(19);
console.log(res);
