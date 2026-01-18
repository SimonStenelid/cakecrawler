import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types/recipe";

interface MoreRecipesProps {
  title: string;
  recipes: Recipe[];
}

const MoreRecipes = ({ title, recipes }: MoreRecipesProps) => {
  if (recipes.length === 0) return null;

  return (
    <section className="px-6 md:px-12 lg:px-24 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground">{title}</h2>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-cabagges-pill text-primary rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          See All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            slug={recipe.slug}
            image={recipe.image}
            title={recipe.title}
            tags={recipe.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreRecipes;
