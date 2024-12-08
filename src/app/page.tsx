import HeroSection from "@/components/hero-section"
import ProductCarousel from "@/components/product-carousel"
import FeaturedSection from "@/components/featured-section"
import GearUpSection from "@/components/gear-up-section"
import EssentialsSection from "@/components/essentials-sections"
import DontMissSection from "@/components/dont-miss-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProductCarousel />
      <FeaturedSection />
      <GearUpSection />
      <DontMissSection />
      <EssentialsSection />
    </main>
  )
}
