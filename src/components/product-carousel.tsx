"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  label?: string;
  description?: string;
}

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: "1",
      name: "Nike Air Max Plus",
      price: 16995,
      image: "/shoes-1.png?height=400&width=400",
      label: "Just In",
      description:
        "The Nike Air Max Plus is a bold and iconic sneaker with a sleek design and cushioning that delivers comfort and style. Featuring a signature wavy design and Max Air technology for all-day comfort.",
    },
    {
      id: "2",
      name: "Nike Air Max Plus",
      price: 16995,
      image: "/shoes-1.png?height=400&width=400",
      description:
        "The Nike Air Max Plus combines premium design with innovative cushioning for a stylish, comfortable ride. Known for its striking look and reliable support, this shoe is perfect for everyday wear.",
    },
    {
      id: "3",
      name: "Nike Air Max 97",
      price: 16995,
      image: "/Image-2.png?height=400&width=400",
      description:
        "The Nike Air Max 97 features a sleek, futuristic design with reflective elements and full-length Max Air cushioning for enhanced comfort. A classic in sneaker culture, it's perfect for those who want both style and performance.",
    },
    {
      id: "4",
      name: "Nike Air Max 98",
      price: 16995,
      image: "/Image-2.png?height=400&width=400",
      description:
        "The Nike Air Max 97 features a sleek, futuristic design with reflective elements and full-length Max Air cushioning for enhanced comfort. A classic in sneaker culture, it's perfect for those who want both style and performance.",
    },
    // Add more products as needed
  ];

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
                  className="w-full h-full object-cover rounded-lg"
                />
                {product.label && (
                  <span className="absolute top-2 left-2 text-red-500 text-sm">
                    {product.label}
                  </span>
                )}
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-600">
                ₹ {product.price.toLocaleString()}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
