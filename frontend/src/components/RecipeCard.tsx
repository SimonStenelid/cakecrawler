import { Link } from "react-router-dom";

interface RecipeCardProps {
  slug: string;
  image: string;
  title: string;
  tags: string[];
}

const RecipeCard = ({ slug, title, tags }: RecipeCardProps) => {
  return (
    <Link to={`/recipes/${slug}`} className="block group cursor-pointer">
      <article className="p-4 md:p-6 rounded-xl border border-transparent hover:border-gray-400 transition-all duration-300">
        <h3 className="text-sm md:text-base font-medium text-foreground mb-1">{title}</h3>
        <p className="text-xs md:text-sm text-muted-foreground">{tags.join(", ")}</p>
      </article>
    </Link>
  );
};

export default RecipeCard;
