import HeroSection from "@/components/hero-section";
import ProductCarousel from "@/components/product-carousel";
import FeaturedSection from "@/components/featured-section";
import GearUpSection from "@/components/gear-up-section";
import EssentialsSection from "@/components/essentials-sections";
import DontMissSection from "@/components/dont-miss-section";
import { fetchProducts } from "@/sanity/sanity.querry";

const HomePage = async () => {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProductCarousel products={products} />{" "}
      <FeaturedSection />
      <GearUpSection />
      <DontMissSection />
      <EssentialsSection />
    </main>
  );
};

export default HomePage;
