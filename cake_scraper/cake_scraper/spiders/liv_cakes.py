import scrapy
from urllib.parse import urljoin
from cake_scraper.items import RecipeItem
from bs4 import BeautifulSoup


class LivSpider(scrapy.Spider):
    name = "recipe_borrower"
    allowed_domains = ["livforcake.com"]

    def __init__(self):
        self.visited_recipes = set()

    def start_requests(self):
        start_url = "https://livforcake.com/category/cakes/"
        yield scrapy.Request(url=start_url, callback=self.parse)

        # Create a loop to go through all the pages 2->8
        for page_number in range(2, 9):
            next_page_url = f"https://livforcake.com/category/cakes/page/{page_number}/"
            yield scrapy.Request(url=next_page_url, callback=self.parse)

    def parse(self, response):
        """Find initial recipe links from a category page"""
        print(f"\n Snooooking around here: {response.url}")

        # Get all the cake links for each page, only the recipe links
        recipe_links = response.css("h2.entry-title a::attr(href)").getall()

        print(f"Found {len(recipe_links)} recipe links on this page")

        # We keep track of already visited recipes
        for link in recipe_links:

            if link not in self.visited_recipes:
                self.visited_recipes.add(link)
                yield scrapy.Request(url=link, callback=self.parse_recipe)

    # This is getting the actual recipe on the page
    def parse_recipe(self, response):
        """Scrape recipe"""

        # Scrape the recipe container
        raw_html = response.css("div.wprm-recipe-container").get()

        if raw_html:
            print(f"I stole (borrowed) the recipe.. {response.url}")

            # Clean the HTML
            clean_html = self.clean_recipe_html(raw_html)

            item = RecipeItem()
            item["url"] = response.url
            item["recipe_html"] = clean_html

            yield item
        else:
            print(f"No rercipe container found: {response.url}")

    # Cleaning
    def clean_recipe_html(self, html_content):
        """Removves images, icons, styles and buttons from HTML"""

        soup = BeautifulSoup(html_content, "html.parser")

        # Remove specific gunks
        for tag in soup(
            ["script", "style", "svg", "img", "button", "noscript", "iframe"]
        ):
            tag.decompose()  # deletes the tag + content

        # Remove share and print section from the container
        for div in soup.find_all(
            "div", class_=["wprm-col-share", "wprm-recipe-rating"]
        ):
            div.decompose()

        # Strip all attributes
        for tag in soup.find_all(True):
            tag.attrs = {}

        return str(soup)
