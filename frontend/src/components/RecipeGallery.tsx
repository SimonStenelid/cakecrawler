interface RecipeGalleryProps {
  images: string[];
}

const RecipeGallery = ({ images }: RecipeGalleryProps) => {
  // Pad to 3 images if needed, or take first 3
  const displayImages = images.slice(0, 3);
  
  return (
    <section className="px-6 md:px-12 lg:px-24 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={`Recipe step ${index + 1}`}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeGallery;
