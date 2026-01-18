# Define here the models for your scraped items
import scrapy


class RecipeItem(scrapy.Item):
    # Basic info
    url = scrapy.Field()
    recipe_html = scrapy.Field()
    name_en = scrapy.Field()
    name_se = scrapy.Field()

    # Ingredients (Nested structure)
    ingredients_us = scrapy.Field()  # Cups/Oz
    ingredients_metric = scrapy.Field()  # Grams/Liters

    # Instructions
    steps_en = scrapy.Field()
    steps_se = scrapy.Field()
