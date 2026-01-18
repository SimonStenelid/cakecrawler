# Cake Crawler

A full-stack application. 
Crawls and scrapes the internet for all the cake recipies & displays them cleanly on the web. 

## Project Structure

```
├── cake_scraper/          # Python Scrapy backend
│   ├── cake_scraper/      # Scrapy spider and pipelines
│   └── data/              # Scraped recipe data (JSON)
└── frontend/              # React + TypeScript frontend
    ├── src/               # React components and pages
    └── public/            # Static assets
```

## Backend - Cake Scraper

A Scrapy-based web scraper that extracts cake recipes and uses OpenAI to structure the data.

### Setup

```bash
cd cake_scraper

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file with your OpenAI API key
echo "OPENAI_API_KEY=your_key_here" > .env

# Run the scraper
scrapy crawl liv_cakes
```

### Output

Scraped recipes are saved to `cake_scraper/data/` in JSON format with:
- Recipe name (English & Swedish)
- Ingredients (US & Metric)
- Steps (English & Swedish)

## Frontend

A React + Vite + TypeScript application built with shadcn/ui and Tailwind CSS.

### Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Technologies

- Vite
- React 18
- TypeScript
- shadcn/ui
- Tailwind CSS
- React Router
- TanStack Query

## Development

1. Run the scraper to collect recipe data
2. The frontend reads from the JSON files in `cake_scraper/data/`
3. Start the frontend dev server to view recipes

## Deployment

- Backend: Run scraper on schedule (cron job, GitHub Actions, etc.)
- Frontend: Deploy to Vercel, Netlify, or any static hosting

## License

MIT
