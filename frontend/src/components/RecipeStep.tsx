interface RecipeStepProps {
  number: number;
  text: string;
}

const RecipeStep = ({ number, text }: RecipeStepProps) => {
  return (
    <div className="flex gap-3 md:gap-6 mb-6 md:mb-8">
      <span className="text-lg md:text-2xl font-light text-muted-foreground flex-shrink-0 w-6 md:w-8">
        {number}
      </span>
      <p className="text-sm md:text-base leading-relaxed text-foreground">
        {text}
      </p>
    </div>
  );
};

export default RecipeStep;
