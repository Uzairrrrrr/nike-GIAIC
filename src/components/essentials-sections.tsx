import Image from "next/image";

export default function EssentialsSection() {
  const categories = [
    {
      title: "Shoes",
      image: "/feature.png?height=400&width=400",
      links: ["Air Force 1", "Air Max", "Jordan", "Metcon", "Pegasus"],
    },
    {
      title: "Running",
      image: "/essential-2.png?height=400&width=400",
      links: [
        "All Running",
        "Running Shoes",
        "Running Clothing",
        "Running Gear",
      ],
    },
    {
      title: "Clothing",
      image: "/essential-3.png?height=400&width=400",
      links: [
        "All Clothing",
        "Tops & T-Shirts",
        "Hoodies & Pullovers",
        "Shorts",
      ],
    },
  ];

  return (
    <div className="px-4 md:px-8 max-w-7xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6">The Essentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.title}>
            <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold mb-2">{category.title}</h3>
            <div className="space-y-1">
              {category.links.map((link) => (
                <button
                  key={link}
                  className="block text-gray-600 hover:text-black text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-8 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-2">Featured</h4>
            <div className="space-y-1">
              <button className="block text-gray-600 hover:text-black text-sm">
                Air Force 1
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Jordan 1
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Metcon
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Air Max
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Shoes</h4>
            <div className="space-y-1">
              <button className="block text-gray-600 hover:text-black text-sm">
                All Shoes
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Custom Shoes
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Jordan Shoes
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Running Shoes
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Clothing</h4>
            <div className="space-y-1">
              <button className="block text-gray-600 hover:text-black text-sm">
                All Clothing
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Modest Wear
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Hoodies & Pullovers
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Shirts & Tops
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Kids'</h4>
            <div className="space-y-1">
              <button className="block text-gray-600 hover:text-black text-sm">
                Infant & Toddler Shoes
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Kids' Shoes
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Kids' Jordan Shoes
              </button>
              <button className="block text-gray-600 hover:text-black text-sm">
                Kids' Basketball Shoes
              </button>
            </div>
          </div>
        </div> */}
    </div>
  );
}
