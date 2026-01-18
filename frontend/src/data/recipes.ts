import { Recipe } from "@/types/recipe";
import meatJunImage from "@/assets/meat-jun.jpg";
import meatJunPrep1 from "@/assets/meat-jun-prep-1.jpg";
import meatJunPrep2 from "@/assets/meat-jun-prep-2.jpg";
import meatJunFinal from "@/assets/meat-jun-final.jpg";
import locoMocoImage from "@/assets/loco-moco.jpg";
import sugarSnapPeasImage from "@/assets/sugar-snap-peas.jpg";
import ponzuShrimpImage from "@/assets/ponzu-shrimp.jpg";

// Placeholder ingredient images - in production these would be real images
const ingredientPlaceholder = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop";

export const recipes: Recipe[] = [
  {
    id: "1",
    slug: "meat-jun",
    title: "Meat Jun",
    tags: ["Dinner", "Donburi", "Hawaii Favorites"],
    description: "Meat Jun is a thin sliced meat marinated in a sweet and garlicky sauce, battered in flour and egg. It originates from Korean pajeon but is unique to local Hawaii cuisine and one of our favorite dishes to eat back home. It's full of flavor on its own but even better when paired with our spicy, vinegar based sauce recipe. We served ours over a bed of rice, donburi style.",
    prepTime: "1 hr prep",
    cookTime: "30 mins to cook",
    serves: "2-4",
    image: meatJunImage,
    galleryImages: [meatJunFinal, meatJunPrep1, meatJunPrep2],
    ingredients: [
      { image: ingredientPlaceholder, name: "ribeye or sirloin", amount: "1 lb thin cut" },
      { image: ingredientPlaceholder, name: "soy sauce", amount: "1/2 cup + 2 Tbsp" },
      { image: ingredientPlaceholder, name: "sugar", amount: "1/2 cup sugar + 1/2 tsp" },
      { image: ingredientPlaceholder, name: "sesame oil", amount: "1 Tbsp" },
      { image: ingredientPlaceholder, name: "flour (for batter)", amount: "1/4 cup" },
      { image: ingredientPlaceholder, name: "eggs (for batter)", amount: "2-3" },
      { image: ingredientPlaceholder, name: "garlic", amount: "1-2 cloves" },
      { image: ingredientPlaceholder, name: "onion", amount: "1/4 of a medium" },
      { image: ingredientPlaceholder, name: "rice vinegar", amount: "2 Tbsp" },
      { image: ingredientPlaceholder, name: "gochugaru", amount: "1/2 tsp" },
      { image: ingredientPlaceholder, name: "scallion, finely chopped", amount: "1" },
      { image: ingredientPlaceholder, name: "sesame seeds", amount: "1/2 tsp" },
    ],
    steps: [
      "For the meat: We bought our meat from Hmart, look for Ribeye Roll or Bulgogi cut meat if possible. You can also slice your own ribeye or even use flank steak- if too thick just place each between two sheets of cling wrap and use a meat pounder to pound out until ~1/2\" thick.",
      "In a bowl, make your marinade by mixing 1/2 cup soy sauce, 1/2 cup sugar, 1 Tbsp sesame oil, and grate in the garlic cloves and onion. Mix well, then add the pounded meat and submerge in the marinade. Cover and place in the fridge for 1 hr.",
      "Make the dipping sauce by mixing together the soy sauce, rice vinegar, sugar, gochugaru, green onions and sesame seeds in a small bowl. Set aside.",
      "After 1 hr, remove the meat from the bowl and place on a paper towel briefly to pat off some excess marinade. In two trays or bowls, pour the flour into one and scramble the eggs into the other.",
      "Heat a large pan over medium-high heat with enough oil to coat the bottom. Dredge each piece of meat first in flour, then in egg, and place in the hot pan.",
      "Cook for 2-3 minutes per side until golden brown and cooked through. Remove and place on a wire rack or paper towel-lined plate.",
      "Serve over rice with kimchi and the dipping sauce on the side. Enjoy!",
    ],
  },
  {
    id: "2",
    slug: "loco-moco",
    title: "Loco Moco",
    tags: ["Lunch", "Hawaii Favorites"],
    description: "A classic Hawaiian comfort dish featuring a hamburger patty over rice, topped with a fried egg and smothered in rich brown gravy. Simple, satisfying, and absolutely delicious.",
    prepTime: "15 mins prep",
    cookTime: "20 mins to cook",
    serves: "2",
    image: locoMocoImage,
    galleryImages: [locoMocoImage],
    ingredients: [
      { image: ingredientPlaceholder, name: "ground beef", amount: "1 lb" },
      { image: ingredientPlaceholder, name: "eggs", amount: "2" },
      { image: ingredientPlaceholder, name: "rice", amount: "2 cups cooked" },
      { image: ingredientPlaceholder, name: "beef gravy", amount: "1 cup" },
    ],
    steps: [
      "Form ground beef into two large patties.",
      "Cook patties in a hot pan until done to your liking.",
      "Fry eggs sunny side up.",
      "Serve rice in a bowl, top with patty, egg, and gravy.",
    ],
  },
  {
    id: "3",
    slug: "sugar-snap-peas-on-toast",
    title: "Sugar Snap Peas on Toast",
    tags: ["Breakfast", "Snacks/Sides", "Vegetarian"],
    description: "A light and refreshing toast topped with crispy sugar snap peas, parmesan, and a drizzle of good olive oil. Perfect for a quick breakfast or snack.",
    prepTime: "5 mins prep",
    cookTime: "5 mins to cook",
    serves: "1-2",
    image: sugarSnapPeasImage,
    galleryImages: [sugarSnapPeasImage],
    ingredients: [
      { image: ingredientPlaceholder, name: "sugar snap peas", amount: "1 cup" },
      { image: ingredientPlaceholder, name: "bread", amount: "2 slices" },
      { image: ingredientPlaceholder, name: "parmesan", amount: "2 Tbsp shaved" },
      { image: ingredientPlaceholder, name: "olive oil", amount: "1 Tbsp" },
    ],
    steps: [
      "Toast bread until golden.",
      "Blanch snap peas briefly in boiling water.",
      "Top toast with peas, parmesan, and olive oil.",
    ],
  },
  {
    id: "4",
    slug: "ponzu-shrimp-piccata",
    title: "Ponzu Shrimp Piccata",
    tags: ["Dinner", "Seafood"],
    description: "Succulent shrimp in a bright ponzu butter sauce with capers and lemon. A Japanese-Italian fusion that comes together in minutes.",
    prepTime: "10 mins prep",
    cookTime: "10 mins to cook",
    serves: "2-3",
    image: ponzuShrimpImage,
    galleryImages: [ponzuShrimpImage],
    ingredients: [
      { image: ingredientPlaceholder, name: "shrimp", amount: "1 lb" },
      { image: ingredientPlaceholder, name: "ponzu sauce", amount: "3 Tbsp" },
      { image: ingredientPlaceholder, name: "butter", amount: "2 Tbsp" },
      { image: ingredientPlaceholder, name: "capers", amount: "1 Tbsp" },
    ],
    steps: [
      "Season and sauté shrimp until pink.",
      "Add ponzu and butter to pan.",
      "Finish with capers and serve.",
    ],
  },
];

export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return recipes.find((recipe) => recipe.slug === slug);
};

export const getRelatedRecipes = (currentSlug: string, tag: string): Recipe[] => {
  return recipes
    .filter((recipe) => recipe.slug !== currentSlug && recipe.tags.includes(tag))
    .slice(0, 4);
};
