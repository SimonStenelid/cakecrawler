interface InstagramCardProps {
  image: string;
  title: string;
  handle: string;
}

const InstagramCard = ({ image, title, handle }: InstagramCardProps) => {
  return (
    <article className="relative overflow-hidden rounded-2xl cursor-pointer group">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[9/16] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      <div className="absolute top-4 left-4 right-4">
        <p className="text-white text-sm font-medium drop-shadow-lg">{title}</p>
        <p className="text-white/80 text-xs mt-1 drop-shadow-lg">{handle}</p>
      </div>
    </article>
  );
};

export default InstagramCard;
