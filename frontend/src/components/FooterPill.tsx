interface FooterPillProps {
  label: string;
}

const FooterPill = ({ label }: FooterPillProps) => {
  return (
    <button className="px-3 md:px-4 py-1.5 md:py-2 bg-cabagges-pill text-primary rounded-full text-xs md:text-sm font-medium hover:opacity-80 transition-opacity">
      {label}
    </button>
  );
};

export default FooterPill;
