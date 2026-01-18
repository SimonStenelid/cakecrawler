interface IngredientCardProps {
  image: string;
  name: string;
  amount: string;
}

const IngredientCard = ({ image, name, amount }: IngredientCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 mb-3 rounded-lg overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm text-foreground font-medium">{amount}</p>
      <p className="text-sm text-muted-foreground">{name}</p>
    </div>
  );
};

export default IngredientCard;
