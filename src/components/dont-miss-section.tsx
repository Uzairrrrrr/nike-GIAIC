import Image from "next/image";

export default function DontMissSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-xl font-bold mb-6">Don't Miss</h2>
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        {/* Image container */}
        <div className="w-full">
          <Image
            src="/dont-miss.png?height=600&width=600"
            height={600}
            width={600}
            alt="Model wearing Jordan Brand"
            className="w-full object-cover"
          />
        </div>

        {/* Text and Button below the image */}
        <div className="text-center p-8 bg-white mt-4">
          {" "}
          {/* Added margin-top to push it below the image */}
          <h3 className="text-3xl font-bold text-black mb-2">
            FLIGHT ESSENTIALS
          </h3>
          <p className="text-black mb-4">
            Your built-to-last, all-week wears – but with style only Jordan
            Brand can deliver.
          </p>
          <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-900">
            Shop
          </button>
        </div>
      </div>
    </section>
  );
}
