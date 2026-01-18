import Header from "@/components/Header";
import CabaggesLogo from "@/components/CabaggesLogo";
import LatestRecipes from "@/components/LatestRecipes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Logo */}
      <main className="pt-12 md:pt-16">
        <section className="px-4 md:px-8 lg:px-24 py-6 md:py-12 lg:py-16">
          <CabaggesLogo />
        </section>

        <LatestRecipes />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
