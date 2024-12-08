import Image from "next/image";

export default function FeaturedSection() {
  return (
    <div className="px-4 md:px-8 max-w-7xl mx-auto my-12">
      <div className="rounded-lg overflow-hidden">
        {/* Image container */}
        <div className="w-full">
          <Image
            src="/Image.png?height=600&width=1200"
            alt="Runner on a trail"
            className="w-full object-cover"
          />
        </div>

        {/* Text and Button below the image */}
        <div className="text-center p-8 bg-white mt-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            STEP INTO WHAT FEELS GOOD
          </h2>
          <p className="text-black mb-6 max-w-xl mx-auto">
            Create endless stories ahead of you through the power of walking,
            the perfect mix.
          </p>
          <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-900">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
