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

const res = checkAge(19);
console.log(res);
