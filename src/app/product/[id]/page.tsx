"use client"
import { Metadata } from "next";
import SanityClient from "@/sanity/sanity.client";
import ProductDetail from "@/components/product-detail";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

// Ensure you're awaiting the result correctly
const fetchProduct = async (id: string) => {
  console.log('Fetching product...');
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    price,
    description,
    image {
      asset -> {
        url
      }
    }
  }`;

  try {
    const product = await SanityClient.fetch(query, { id });
    if (!product) return null;

    return {
      id: product._id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image?.asset?.url || "",
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};



import { useEffect, useState } from 'react';

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await fetchProduct(params.id);
        setProduct(productData);
      } catch (err) {
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
          <p className="mt-2 text-gray-600">The requested product could not be found.</p>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
