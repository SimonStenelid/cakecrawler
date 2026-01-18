export interface Recipe {
  id: string;
  slug: string;
  title: string;
  tags: string[];
  description?: string;
  prepTime?: string;
  cookTime?: string;
  serves?: string;
  image?: string;
  galleryImages?: string[];
  ingredients: Ingredient[];
  steps: string[];
  // Optional fields for future use
  name_se?: string;
  ingredients_metric?: string[];
  steps_se?: string[];
}

export interface Ingredient {
  image: string;
  name: string;
  amount: string;
}
