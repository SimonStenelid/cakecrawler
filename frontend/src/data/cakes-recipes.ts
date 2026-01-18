import recipesData from './cakes-recipes.json';
import { Recipe } from '@/types/recipe';

export const cakesRecipes: Recipe[] = recipesData as Recipe[];

export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return cakesRecipes.find((recipe) => recipe.slug === slug);
};

export const getRecipesByTag = (tag: string): Recipe[] => {
  return cakesRecipes.filter((recipe) => recipe.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  cakesRecipes.forEach(recipe => recipe.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
};
