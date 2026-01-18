import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the recipes data
const recipesPath = path.join(__dirname, '../src/data/cakes-recipes.json');
const recipes = JSON.parse(fs.readFileSync(recipesPath, 'utf8'));

// Your domain (update this when deploying)
const DOMAIN = 'https://yourdomain.com';
const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML
const generateSitemap = () => {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  const footer = `</urlset>`;

  // Homepage
  const homepageUrl = `
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Recipe pages
  const recipeUrls = recipes.map(recipe => `
  <url>
    <loc>${DOMAIN}/recipes/${recipe.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

  const sitemap = header + homepageUrl + recipeUrls + footer;

  // Write sitemap to public folder
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap, 'utf8');

  console.log('✅ Sitemap generated successfully!');
  console.log(`📊 Total URLs: ${recipes.length + 1}`);
  console.log(`💾 Saved to: ${outputPath}`);
};

generateSitemap();
