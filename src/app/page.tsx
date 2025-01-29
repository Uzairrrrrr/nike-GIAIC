import HeroSection from "@/components/hero-section";
import ProductCarousel from "@/components/product-carousel";
import FeaturedSection from "@/components/featured-section";
import GearUpSection from "@/components/gear-up-section";
import EssentialsSection from "@/components/essentials-sections";
import DontMissSection from "@/components/dont-miss-section";
import { fetchProducts } from "@/sanity/sanity.querry";

// Fetch products server-side directly in the component
const HomePage = async () => {
  // Fetch the products using the function from sanity.query.ts
  const products = await fetchProducts();

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProductCarousel products={products} />{" "}
      {/* Pass products to ProductCarousel */}
      <FeaturedSection />
      <GearUpSection />
      <DontMissSection />
      <EssentialsSection />
    </main>
  );
};

export default HomePage;
