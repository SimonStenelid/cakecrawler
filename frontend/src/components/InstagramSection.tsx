import InstagramCard from "./InstagramCard";
import steakRamenImage from "@/assets/steak-ramen.jpg";
import cookingImage from "@/assets/cooking-couple.jpg";
import waterfallImage from "@/assets/kyushu-waterfall.jpg";

const instagramPosts = [
  {
    image: steakRamenImage,
    title: "Steak au Poivre Ramen 🍜",
    handle: "@cabagges.world",
  },
  {
    image: cookingImage,
    title: "Simmered sea bream head 🐟",
    handle: "@cabagges.world",
  },
  {
    image: waterfallImage,
    title: "The most beautiful view in Kyushu 🇯🇵",
    handle: "@cabagges.world",
  },
];

const InstagramSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instagramPosts.map((post, index) => (
          <InstagramCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
