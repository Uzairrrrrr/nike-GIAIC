// /src/components/product-detail.tsx
"use client" // This directive makes this a client-side component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "./ui/use-toast";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";

// Define the types for your product
interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  };
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(""); // Handle selected size state
  const { dispatch } = useCart(); // For managing cart items
  const { toast } = useToast(); // For showing toast notifications

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    // Dispatch the add to cart action
    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...product,
        size: selectedSize,
        quantity: 1,
      },
    });

    // Show a success toast
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <p className="font-medium mb-2">Select Size</p>
            <div className="grid grid-cols-3 gap-2">
              {["6", "7", "8", "9", "10", "11"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 border rounded-md ${
                    selectedSize === size
                      ? "border-black"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  UK {size}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xl font-bold mb-6">RS {product.price.toLocaleString()}</p>
          <Button
            onClick={handleAddToCart}
            className="w-full bg-black text-white hover:bg-gray-900"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
