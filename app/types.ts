export type Recipe = {
  recipeId: number;
  title: string;
  description?: string;
  slug: string;
  ingredients: { quantity: string; ingredient: string }[];
  steps: string[];
};
