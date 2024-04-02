const anagram = (strA, strB) => {
  const buildCharOb = (str) => {
    const charOb = {};

    for (const char of str.replace(/[^\w]/g).toLowerCase()) {
      charOb[char] = charOb[char] + 1 || 1;
    }

    return charOb;
  };

  const aCharOb = buildCharOb(strA);
  const bCharOb = buildCharOb(strB);

  if (Object.keys(aCharOb).length !== Object.keys(bCharOb).length) {
    return false;
  }

  for (const char in aCharOb) {
    if (aCharOb[char] !== bCharOb[char]) {
      return false;
    }
  }

  return true;
};

console.log(anagram('allo', 'lola'));
console.log(anagram('allo', 'loly'));
