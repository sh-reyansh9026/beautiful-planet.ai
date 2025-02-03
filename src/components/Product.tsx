'use client';
import { BackgroundBeams } from "../components/ui/background-beams";
import { GlareCard } from "@/components/ui/glare-card";

export function Product() {
  return (
    <div className="relative flex flex-col items-center p-2 bg-gray-950 min-h-screen border rounded-lg">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mt-8 md:mt-16 mb-8 md:mb-16 text-center">
        Products & Services
      </h1>

      {/* Background Beams - Positioned behind cards */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      {/* Grid of GlareCards */}
      <div className="flex flex-wrap justify-center gap-8 w-full px-4 md:px-8 m-4 max-w-screen-xl z-10 relative overflow-hidden">
      <GlareCard className="flex flex-col items-center justify-center relative aspect-[4/4]">
          <img
            className="h-full w-full absolute inset-0 object-cover"
            src="/iNZO.jpeg"
            alt="iNZO"
          />
          <button className="text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">iNZO</button>
        </GlareCard>

        {/* Card 2 */}
        <GlareCard className="flex flex-col items-center justify-center relative aspect-[4/4]">
          <img
            className="h-full w-full absolute inset-0 object-cover"
            src="/4.jpg"
            alt="Product 6"
          />
          <button className="text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">Product 6</button>
        </GlareCard>

        {/* Card 3 */}
        <GlareCard className="flex flex-col items-center justify-center relative aspect-[4/4]">
          <img
            className="h-full w-full absolute inset-0 object-cover"
            src="/4.jpg"
            alt="Product 6"
          />
          <button className="text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">Product 6</button>
        </GlareCard>

        {/* Card 4 */}
        <GlareCard className="flex flex-col items-center justify-center relative aspect-[4/4]">
          <img
            className="h-full w-full absolute inset-0 object-cover"
            src="/4.jpg"
            alt="Product 6"
          />
          <button className="text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">Product 6</button>
        </GlareCard>

        {/* Card 5 */}
        <GlareCard className="flex flex-col items-center justify-center relative aspect-[4/4]">
          <img
            className="h-full w-full absolute inset-0 object-cover"
            src="/4.jpg"
            alt="Product 6"
          />
          <button className="text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">Product 6</button>
        </GlareCard>

        {/* Card 6 */}
        <GlareCard className="flex flex-col items-center justify-center relative aspect-[4/4]">
          <img
            className="h-full w-full absolute inset-0 object-cover"
            src="/4.jpg"
            alt="Product 6"
          />
          <button className="text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">Product 6</button>
      </GlareCard>
      </div>
    </div>
  );
}
