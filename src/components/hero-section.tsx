"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 right-0 bg-gray-100 text-black text-center py-1 text-sm">
        Hello Nike App <br></br>
        <span className="ml-2 text-xs">
          Download the app to access everything Nike. Get Your Great
        </span>
      </div>
      <div className="pt-12 px-5 md:px-8 max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="relative aspect-[16/10] md:aspect-[21/9]  overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
          <Image
            src="/shoes.png?height=1000&width=1800"
            alt="Nike Air Max Pulse"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="text-center mt-6">
          <p className="text-sm font-medium mb-2">First Look</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NIKE AIR MAX PULSE
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse — designed to push you past your limits and help you go to the
            max.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              className="bg-black text-white rounded-full px-8"
            >
              Notify Me
            </Button>
            <Button variant="outline" className="rounded-full px-8">
              Shop Air Max
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
