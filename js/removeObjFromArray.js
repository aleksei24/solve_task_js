let arraydata = [
  { name: 'name1', value: 1 },
  { name: 'name2', value: 2 },
  { name: 'name3', value: 3 },
];

arraydata = arraydata.filter((i) => i.value !== 3);
console.log(arraydata);
