interface RecipeInfoPillProps {
  text: string;
}

const RecipeInfoPill = ({ text }: RecipeInfoPillProps) => {
  return (
    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-muted text-muted-foreground rounded-full text-xs md:text-sm">
      {text}
    </span>
  );
};

export default RecipeInfoPill;
