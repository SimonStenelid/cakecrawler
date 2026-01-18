import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const INPUT_FILE = path.join(__dirname, '../../cake_scraper/data/ai_cakes_extra.json');
const OUTPUT_FILE = path.join(__dirname, '../src/data/cakes-recipes.json');

// Keywords for tag extraction
const CAKE_KEYWORDS = [
  'chocolate', 'vanilla', 'strawberry', 'lemon', 'orange', 'lime',
  'almond', 'coconut', 'coffee', 'caramel', 'honey', 'peanut',
  'cream', 'frosting', 'buttercream', 'ganache', 'mousse',
  'layer', 'bundt', 'sheet', 'cupcake', 'cheesecake', 'pound',
  'red velvet', 'carrot', 'banana', 'apple', 'pumpkin',
  'berry', 'fruit', 'nut', 'spice', 'cinnamon'
];

/**
 * Generate URL-safe slug from recipe name
 */
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Extract keywords from recipe name for tags
 */
function extractKeywords(name) {
  const nameLower = name.toLowerCase();
  const found = CAKE_KEYWORDS.filter(keyword =>
    nameLower.includes(keyword)
  );

  // Capitalize first letter of each tag
  const capitalized = found.map(tag =>
    tag.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  );

  return capitalized.length > 0 ? capitalized : ['Cake'];
}

/**
 * Parse ingredient string into structured format
 * Example: "1 1/2 cups all-purpose flour" -> { amount: "1 1/2 cups", name: "all-purpose flour", image: "" }
 */
function parseIngredients(ingredientsUs) {
  return ingredientsUs.map(ingredient => {
    // Try to match common measurement patterns
    // Note: Removed standalone 'l' to avoid matching 'large' as a measurement
    const match = ingredient.match(/^([\d\s\/]+\s*(?:cups?|tablespoons?|teaspoons?|tbsp?|tsp?|oz|ounces?|lb|pounds?|g|grams?|kg|ml|liters?)?)\s*(.+)$/i);

    if (match) {
      return {
        amount: match[1].trim(),
        name: match[2].trim(),
        image: ''
      };
    }

    // If no match, treat whole string as ingredient name
    return {
      amount: '',
      name: ingredient.trim(),
      image: ''
    };
  });
}

/**
 * Transform scraped recipe data to frontend format
 */
function transformRecipe(scrapedRecipe, index) {
  return {
    id: index.toString(),
    slug: generateSlug(scrapedRecipe.name_en),
    title: scrapedRecipe.name_en,
    tags: extractKeywords(scrapedRecipe.name_en),
    description: scrapedRecipe.steps_en[0] || '',
    prepTime: 'N/A',
    cookTime: 'N/A',
    serves: 'N/A',
    image: '',
    galleryImages: [],
    ingredients: parseIngredients(scrapedRecipe.ingredients_us),
    steps: scrapedRecipe.steps_en,
    // Keep for future use
    name_se: scrapedRecipe.name_se,
    ingredients_metric: scrapedRecipe.ingredients_metric,
    steps_se: scrapedRecipe.steps_se
  };
}

/**
 * Main transformation function
 */
function transformRecipes() {
  console.log('🔄 Starting recipe transformation...');
  console.log(`📖 Reading from: ${INPUT_FILE}`);

  // Read scraped data
  const scrapedData = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'));
  console.log(`✅ Found ${scrapedData.length} recipes`);

  // Transform recipes
  const transformedRecipes = scrapedData.map((recipe, index) =>
    transformRecipe(recipe, index + 1)
  );

  // Write to output file
  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(transformedRecipes, null, 2),
    'utf8'
  );

  console.log(`✅ Transformed ${transformedRecipes.length} recipes`);
  console.log(`💾 Saved to: ${OUTPUT_FILE}`);

  // Print summary statistics
  const tagCounts = {};
  transformedRecipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  console.log('\n📊 Tag Statistics:');
  Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([tag, count]) => {
      console.log(`   ${tag}: ${count}`);
    });

  console.log('\n✨ Transformation complete!');
}

// Run transformation
try {
  transformRecipes();
} catch (error) {
  console.error('❌ Error during transformation:', error);
  process.exit(1);
}
