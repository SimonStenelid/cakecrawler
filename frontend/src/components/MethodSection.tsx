import RecipeStep from "./RecipeStep";

interface MethodSectionProps {
  steps: string[];
}

const MethodSection = ({ steps }: MethodSectionProps) => {
  return (
    <div>
      {steps.map((step, index) => (
        <RecipeStep key={index} number={index + 1} text={step} />
      ))}
    </div>
  );
};

export default MethodSection;
