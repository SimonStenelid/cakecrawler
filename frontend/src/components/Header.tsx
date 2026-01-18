const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Left side - Hamburger and Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity">
            <span className="w-4 md:w-5 h-0.5 bg-foreground"></span>
            <span className="w-4 md:w-5 h-0.5 bg-foreground"></span>
          </button>
          <span className="text-sm md:text-base font-medium text-foreground">cakes</span>
        </div>

        {/* Right side - Tagline */}
        <div className="hidden lg:block">
          <span className="text-xs lg:text-sm text-foreground italic">
            creating a world of cakes, because who doesn't like cake?
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
