/*
У вас есть N полных бутылок с пивом, также известно, что в приемке стеклотары вы можете обменять K пустых бутылок из под пива на одну полную бутылку с пивом.
Посчитайте максимальное количество бутылок с пивом, которое вы сможете выпить.
*/

const maxBottles = (n, k) => {
  let [result, empty, full] = [0, 0, n];

  while (full > 0) {
    result += full;
    empty += full;

    full = Math.floor(empty / k);
    empty = empty % k;
  }
  return result;
};

console.log(maxBottles(10, 4));
