"use client";

import { useState } from "react";
import { ChevronDown, Heart, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  label?: string;
  colors: number;
}

export function ProductGrid() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

  const products: Product[] = [
    {
      id: "1",
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: 10795,
      image: "/Rectangle.png?height=300&width=300",
      label: "Just In",
      colors: 1,
    },
    {
      id: "2",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: 4995,
      image: "/Rectangle-1.png?height=300&width=300",
      label: "Just In",
      colors: 1,
    },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="new" className="border-b">
              <AccordionTrigger className="text-left font-bold">
                New (500)
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Shoes
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Sports Bras
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Tops & T-Shirts
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gender" className="border-b">
              <AccordionTrigger className="text-left font-bold">
                Gender
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Men
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Women
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Unisex
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kids" className="border-b">
              <AccordionTrigger className="text-left font-bold">
                Kids
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Boys
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Girls
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="price" className="border-b">
              <AccordionTrigger className="text-left font-bold">
                Shop By Price
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Under ₹ 7,500.00
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    ₹ 7,501.00 - ₹ 15,000.00
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewType("grid")}
              >
                <Grid
                  className={
                    viewType === "grid" ? "text-black" : "text-gray-400"
                  }
                />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewType("list")}
              >
                <List
                  className={
                    viewType === "list" ? "text-black" : "text-gray-400"
                  }
                />
              </Button>
            </div>
            <Button variant="ghost" className="text-sm">
              Sort By <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Render Grid or List View */}
          <div
            className={`grid gap-6 ${
              viewType === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="group"
              >
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">{product.category}</p>
                <p className="font-medium mt-1">
                  ₹ {product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
