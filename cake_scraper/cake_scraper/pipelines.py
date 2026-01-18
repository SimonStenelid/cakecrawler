# Define your item pipelines here
from itemadapter import ItemAdapter
import os
from openai import OpenAI
import json
from dotenv import load_dotenv

load_dotenv()


class OpenAIRecipePipeline:

    def __init__(self):
        self.client = OpenAI(api_key=(os.getenv("OPENAI_API_KEY")))

    def process_item(self, item, spider):
        print(f"🚀 PIPELINE IS ALIVE! Processing: {item['url']}")
        raw_html = item.get("recipe_html", "")

        if not raw_html:
            return item

        system_prompt = """
        You are a helpful culinary data assistant. You extract recipe data from HTML.
        Output ONLY valid JSON format. No markdown, no explanations.
        Structure:
        {
            "name_en": "Recipe Name in English",
            "name_se": "Recipe Name in Swedish",
            "ingredients_us": ["1 cup flour", "2 eggs"],
            "ingredients_metric": ["120g flour", "2 eggs"],
            "steps_en": ["Step 1...", "Step 2..."],
            "steps_se": ["Steg 1...", "Steg 2..."]
        }
        For ingredients_metric, convert units if necessary (cups to grams).
        """

        # Send to OpenAI LLM
        try:
            response = self.client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {
                        "role": "user",
                        "content": f"Extract data from this HTMl: {raw_html[:20000]}",
                    },
                ],
                response_format={"type": "json_object"},
            )

            # Parse result
            ai_content = response.choices[0].message.content
            data = json.loads(ai_content)

            # Update Scrapy Item
            item["name_en"] = data.get("name_en")
            item["name_se"] = data.get("name_se")
            item["ingredients_us"] = data.get("ingredients_us")
            item["ingredients_metric"] = data.get("ingredients_metric")
            item["steps_en"] = data.get("steps_en")
            item["steps_se"] = data.get("steps_se")

            del item["recipie_html"]

        except Exception as e:

            spider.logger.error(f"Error processssing {item.get('url')}: {e}")

        return item
