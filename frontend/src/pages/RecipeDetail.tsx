import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeHeader from "@/components/RecipeHeader";
import RecipeInfoPill from "@/components/RecipeInfoPill";
import MethodSection from "@/components/MethodSection";
import MoreRecipes from "@/components/MoreRecipes";
import Footer from "@/components/Footer";
import { getRecipeBySlug, getRecipesByTag } from "@/data/cakes-recipes";

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = getRecipeBySlug(slug || "");
  const [useMetric, setUseMetric] = useState(false);
  const [useSwedish, setUseSwedish] = useState(false);

  // Update page title and add Schema.org structured data for SEO
  useEffect(() => {
    if (!recipe) return;

    // Update document title
    document.title = `${recipe.title} - Cakes`;

    const schemaData = {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": recipe.title,
      "description": recipe.description || recipe.steps[0] || "",
      "keywords": recipe.tags.join(", "),
      "recipeCategory": "Dessert",
      "recipeCuisine": "American",
      "recipeIngredient": recipe.ingredients.map(ing =>
        ing.amount ? `${ing.amount} ${ing.name}` : ing.name
      ),
      "recipeInstructions": recipe.steps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "text": step
      })),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "1"
      }
    };

    // Add prep/cook time if available
    if (recipe.prepTime && recipe.prepTime !== 'N/A') {
      schemaData.prepTime = "PT1H"; // Default to 1 hour
    }
    if (recipe.cookTime && recipe.cookTime !== 'N/A') {
      schemaData.cookTime = "PT30M"; // Default to 30 minutes
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [recipe]);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Recipe not found</p>
      </div>
    );
  }

  const relatedRecipes = recipe.tags[0] ? getRecipesByTag(recipe.tags[0]).filter(r => r.slug !== recipe.slug).slice(0, 4) : [];

  return (
    <div className="min-h-screen bg-background">
      <RecipeHeader title={recipe.title} />

      <main className="pt-14 md:pt-20">
        {/* Hero Section */}
        <section className="px-4 md:px-8 lg:px-24 py-6 md:py-8 lg:py-12">
          {/* Category Tags */}
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground font-light mb-2">
            {recipe.tags.join(", ")}
          </p>

          {/* Recipe Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6 md:mb-8">
            {recipe.title}
          </h1>

          {/* Time and Serving Pills */}
          {(recipe.prepTime || recipe.cookTime || recipe.serves) && (
            <div className="flex flex-wrap gap-2 md:gap-3">
              {(recipe.prepTime || recipe.cookTime) && (
                <RecipeInfoPill text={`${recipe.prepTime || 'N/A'}${recipe.cookTime ? `, ${recipe.cookTime}` : ''}`} />
              )}
              {recipe.serves && (
                <RecipeInfoPill text={`Serves ${recipe.serves}`} />
              )}
            </div>
          )}
        </section>

        {/* Ingredients and Method */}
        <section className="px-4 md:px-8 lg:px-24 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Ingredients */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-medium text-foreground">Ingredients</h2>
                {recipe.ingredients_metric && (
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-xs md:text-sm text-foreground">US</span>
                    <button
                      onClick={() => setUseMetric(!useMetric)}
                      className={`relative inline-flex h-5 w-9 md:h-6 md:w-11 items-center rounded-full transition-colors ${
                        useMetric ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full bg-white transition-transform ${
                          useMetric ? 'translate-x-5 md:translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <span className="text-xs md:text-sm text-foreground">Metric</span>
                  </div>
                )}
              </div>
              <ul className="space-y-2 md:space-y-3">
                {useMetric && recipe.ingredients_metric
                  ? recipe.ingredients_metric.map((ingredient, index) => (
                      <li key={index} className="text-sm md:text-base text-foreground">
                        {ingredient}
                      </li>
                    ))
                  : recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-sm md:text-base text-foreground">
                        <span className="font-medium">{ingredient.name}</span> - {ingredient.amount}
                      </li>
                    ))}
              </ul>
            </div>

            {/* Method */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-medium text-foreground">Method</h2>
                {recipe.steps_se && (
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-xs md:text-sm text-foreground">EN</span>
                    <button
                      onClick={() => setUseSwedish(!useSwedish)}
                      className={`relative inline-flex h-5 w-9 md:h-6 md:w-11 items-center rounded-full transition-colors ${
                        useSwedish ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full bg-white transition-transform ${
                          useSwedish ? 'translate-x-5 md:translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <span className="text-xs md:text-sm text-foreground">SE</span>
                  </div>
                )}
              </div>
              <MethodSection steps={useSwedish && recipe.steps_se ? recipe.steps_se : recipe.steps} />
            </div>
          </div>
        </section>

        {/* More Recipes */}
        <MoreRecipes 
          title={`More ${recipe.tags[0]}`} 
          recipes={relatedRecipes} 
        />

        <Footer />
      </main>
    </div>
  );
};

export default RecipeDetail;
