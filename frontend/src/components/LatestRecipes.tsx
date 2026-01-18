import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { cakesRecipes } from "@/data/cakes-recipes";

const RECIPES_PER_PAGE = 12;

const LatestRecipes = () => {
  const [displayedRecipes, setDisplayedRecipes] = useState<typeof cakesRecipes>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    const start = (page - 1) * RECIPES_PER_PAGE;
    const end = start + RECIPES_PER_PAGE;
    const newRecipes = cakesRecipes.slice(start, end);

    if (newRecipes.length === 0) {
      setHasMore(false);
      return;
    }

    setDisplayedRecipes(prev => [...prev, ...newRecipes]);
    setPage(prev => prev + 1);
  };

  // Load first page on mount
  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="px-4 md:px-8 lg:px-24 py-8 md:py-12">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground">
          All Recipes ({cakesRecipes.length})
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {displayedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            slug={recipe.slug}
            image={recipe.image || ""}
            title={recipe.title}
            tags={recipe.tags}
          />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-6 md:mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-3 text-sm md:text-base bg-green-600 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default LatestRecipes;
