import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function GearUpSection() {
  const products: Product[] = [
    {
      id: "1",
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      category: "Men's Running Top",
      price: 4995,
      image: "/Image-3.png?height=400&width=400",
    },
    {
      id: "2",
      name: "Nike Dri-FIT Challenger",
      category: "Men's 7\" Running Shorts",
      price: 2995,
      image: "/Image-4.png?height=400&width=400",
    },
    {
      id: "3",
      name: "Nike Dri-FIT ADV Run Division",
      category: "Women's Running Top",
      price: 4995,
      image: "/Image-5.png?height=400&width=400",
    },
    {
      id: "4",
      name: "Nike Fast",
      category: "Women's Running Leggings",
      price: 4795,
      image: "/Image-6.png?height=400&width=400",
    },
  ];

  return (
    <div className="px-4 md:px-8 max-w-7xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6">Gear Up</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <div className="aspect-square mb-4 bg-gray-100 rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="font-medium text-sm">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.category}</p>
            <p className="font-medium text-sm mt-1">
              ₹ {product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
