// components/ProductCarousel.tsx
"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  height: number;
  width: number;
  description?: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  console.log("Products:", products);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-4 md:px-8 max-w-7xl mx-auto my-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Best of Air Max</h2>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div key={product.id} className="flex-none w-[300px] snap-start">
            <Link
              href={{
                pathname: `/product/${product.id}`,
              }}
              passHref
            >
              <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={product.width}
                  height={product.height}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-600">
                RS {product.price.toLocaleString()}
                
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
