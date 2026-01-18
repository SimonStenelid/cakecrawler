import FooterPill from "./FooterPill";
import { getAllTags } from "@/data/cakes-recipes";

const Footer = () => {
  const allTags = getAllTags();
  // Select a subset of tags to display in footer
  const displayTags = allTags.slice(0, 15);

  return (
    <footer className="px-4 md:px-8 lg:px-24 py-8 md:py-12 lg:py-16 mt-8 md:mt-12">
      <div className="flex flex-wrap gap-2">
        {displayTags.map((tag) => (
          <FooterPill key={tag} label={tag} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
