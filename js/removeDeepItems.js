let meals = [
  {
    mealId: 0,
    mealDescription: 'Favourties',
    mealTypeRecipes: [
      {
        recipeAuthor: 'Frank Doe',
        recipeDescription: "Great chicken dish for those that don't eat chicken",
        recipeID: 0,
        recipeMealSteps: [
          {
            recipeDesc: 'Heat up the oven',
            recipeStep: 'heat',
          },
          {
            recipeDesc: 'Allow it to cook',
            recipeStep: 'cool',
          },
          {
            recipeDesc: 'Take it out the oven',
            recipeStep: 'out',
          },
        ],
      },
      {
        recipeID: 1,
        recipeName: 'Fish Dish',
        recipeMealSteps: [
          {
            recipeDesc: 'Heat up the oven',
            recipeStep: 'heat',
          },
          {
            recipeDesc: 'Allow it to cook',
            recipeStep: 'cool',
          },
          {
            recipeDesc: 'Take it out the oven',
            recipeStep: 'out',
          },
        ],
      },
    ],
  },
];

let filteredRecipes = meals.map((m) =>
  m.mealTypeRecipes.map((r) => r.recipeMealSteps.filter((s) => s.recipeStep !== 'heat'))
);

console.log(filteredRecipes);
