"use client";

import React, { useEffect, useState } from "react";

const slides = [
  { id: "slide1", title: "ESG Reporting", img: "/4.jpg" },
  { id: "slide2", title: "Smart City", img: "/3.jpg" },
  { id: "slide3", title: "Carbon Reduction", img: "/2.jpg" },
  { id: "slide4", title: "Forest", img: "/1.jpg" },
  { id: "slide5", title: "Solar", img: "/5.jpg" },
];

// Duplicating slides for smooth looping
const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    if (currentSlide >= extendedSlides.length - 1) return;
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide <= 0) return;
    setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === extendedSlides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
    }
    if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(extendedSlides.length - 2);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden w-full h-[500px] sm:h-[600px]">
      {/* Slide Container */}
      <div
        className={`flex transition-transform ${
          isTransitioning ? "duration-[2500ms] ease-out" : "duration-0"
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="min-w-full flex-shrink-0 relative">
            <img src={slide.img} className="w-full h-[500px] sm:h-[600px] object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl">{slide.title}</h1>
              <p className="text-base sm:text-lg lg:text-xl mt-4 max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequatur eveniet sunt cumque minus,
                temporibus aperiam ut iure ipsam assumenda modi distinctio error laudantium velit dolorum sapiente blanditiis nesciunt molestias?
              </p>
              <button className="bg-[#037213] px-5 py-2 mt-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-3 sm:left-5 right-3 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={prevSlide} className="btn btn-circle text-xl sm:text-2xl">❮</button>
        <button onClick={nextSlide} className="btn btn-circle text-xl sm:text-2xl">❯</button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              currentSlide === index + 1 ? "bg-white" : "bg-gray-400"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
