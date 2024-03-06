const find = (array, name) =>
  (Array.isArray(array) ? array : [array]).flatMap((o) =>
    o.name === name ? o : find(o.subGroups, name)
  );

const data = [
  {
    name: 'apple',
    subGroups: [
      {
        name: 'apple-a',
        subGroups: {
          name: 'apple-b',
          subGroups: [
            {
              name: 'apple-c',
              subGroups: { name: 'apple-d', subGroups: [] },
            },
          ],
        },
      },
    ],
  },
  {
    name: 'orange',
    subGroups: [
      {
        name: 'orange-a',
        subGroups: {
          name: 'orange-b',
          subGroups: [
            {
              name: 'orange-c',
              subGroups: { name: 'orange-d', subGroups: [] },
            },
          ],
        },
      },
    ],
  },
  { name: 'mango', subGroups: [{ name: '123', subGroups: [] }] },
  { name: 'grapes', subGroups: [{ name: '123', subGroups: [] }] },
  { name: 'pear', subGroups: [{ name: '123', subGroups: [] }] },
];

const result = find(data, 'orange-d');

console.log(result);
