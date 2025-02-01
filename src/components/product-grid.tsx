"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import { fetchProducts } from "@/sanity/sanity.querry";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export function ProductGrid() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="new" className="border-b">
              <AccordionTrigger className="text-left font-bold">
                Basic Filter
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Shoes
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Sports Bras
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
                <Grid className={viewType === "grid" ? "text-black" : "text-gray-400"} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewType("list")}
              >
                <List className={viewType === "list" ? "text-black" : "text-gray-400"} />
              </Button>
            </div>
            <Button variant="ghost" className="text-sm">
              Sort By <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Loading State */}
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <div
              className={`grid gap-6 ${viewType === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"}`}
            >
              {products.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="group">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="font-medium mt-1">₹ {product.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
