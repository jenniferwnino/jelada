import { Recipe } from "./types";

export const testRecipeData: Recipe[] = [
  {
    recipeId: 1,
    title: "🥔 Mashed Potatoes",
    description: "So yummy",
    slug: "mashed-potatoes",
    ingredients: [
      { quantity: "2", ingredient: "Potatoes" },
      { quantity: "1 tsp", ingredient: "Salt" },
      { quantity: "1/2 tsp", ingredient: "Pepper" },
      { quantity: "1/4 cup", ingredient: "Butter" },
    ],
    steps: ["Peel the potatoes", "Boil the potatoes", "Mash the potatoes"],
  },
  {
    recipeId: 2,
    title: "🍳 Scrambled Eggs",
    description: "Delicious",
    slug: "scrambled-eggs",
    ingredients: [
      { quantity: "2", ingredient: "Eggs" },
      { quantity: "1 tsp", ingredient: "Salt" },
      { quantity: "1/2 tsp", ingredient: "Pepper" },
      { quantity: "1/4 cup", ingredient: "Milk" },
    ],
    steps: ["Crack the eggs", "Scramble the eggs", "Cook the eggs"],
  },
  {
    recipeId: 3,
    title: "🍇 Fruit Salad",
    description: "Favorite",
    slug: "fruit-salad",
    ingredients: [
      { quantity: "1", ingredient: "Apple" },
      { quantity: "1", ingredient: "Banana" },
      { quantity: "1", ingredient: "Orange" },
      { quantity: "1 cup", ingredient: "Grapes" },
    ],
    steps: ["Chop the fruit", "Mix the fruit", "Serve the fruit"],
  },
];

export function getRecipeById(recipeId: number) {
  return testRecipeData.find((recipe) => recipe.recipeId === recipeId);
}

export function getRecipeBySlug(slug: string) {
  return testRecipeData.find((recipe) => recipe.slug === slug);
}
