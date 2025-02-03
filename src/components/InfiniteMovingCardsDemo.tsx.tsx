"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-black">♻️ AI-Powered Sustainability: Our Commitment to a Greener Future 🌍</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
               />
            </div>
        </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Harnessing AI to develop smart solutions that reduce carbon footprints and drive eco-friendly innovations.",
    title: "AI for Sustainability",
  },
  {
    quote:
      "We are dedicated to building a future where businesses and individuals can achieve true carbon neutrality.",
    title: "Carbon-Neutral Mission",
  },
  {
    quote: "Empowering sustainability with cutting-edge technology, from energy-efficient algorithms to eco-conscious applications.",
    
    title: "Green Technology",
  },
  {
    quote:
      "Our AI-powered insights help tackle climate change by optimizing energy use and promoting sustainable practices.",
    
    title: "Climate Action with AI",
  },
  {
    quote:
      "Join our movement toward a cleaner, greener future—because every action counts in making Earth a healthier home.",
    
    title: "Together for a Better Planet",
  },
];
