import { useState } from "react";
import { Ingredient } from "@/types/recipe";
import IngredientCard from "./IngredientCard";

interface IngredientsGridProps {
  ingredients: Ingredient[];
}

const IngredientsGrid = ({ ingredients }: IngredientsGridProps) => {
  const [viewAsList, setViewAsList] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium text-foreground">Ingredients</h2>
        <button
          onClick={() => setViewAsList(!viewAsList)}
          className="px-5 py-2.5 bg-cabagges-pill text-primary rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {viewAsList ? "View as grid" : "View as list"}
        </button>
      </div>

      {viewAsList ? (
        <ul className="space-y-2">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-foreground">
              <span className="font-medium">{ingredient.amount}</span>{" "}
              <span className="text-muted-foreground">{ingredient.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={index}
              image={ingredient.image}
              name={ingredient.name}
              amount={ingredient.amount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IngredientsGrid;
