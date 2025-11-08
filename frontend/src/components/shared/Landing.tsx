"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { CarouselImage } from "@/services/types";
import { Button } from "@/components/ui/button";

export function Landing({ IMAGES }: { IMAGES: CarouselImage[] }) {
  return (
    <div className="relative w-full  md:h-[550px] rounded-2xl overflow-hidden">
      {/* Carousel background */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent>
          {IMAGES.map((image, idx) => (
            <CarouselItem key={idx}>
              <div className="relative w-full h-[550px]">
                <Image
                  src={image.image}
                  alt={image.content}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-center font-serif font-bold z-10">
                  <p className="sm:text-2xl md:text-4xl lg:text-4xl">
                    We Find The Best Tours For You
                  </p>
                  <p className="mt-3 sm:text-lg md:text-2xl">{image.content}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Constant Buttons */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex justify-center gap-6 w-full z-20">
<Button className="bg-gradient-to-r from-[#11A4D4] to-[#1ABC9C] text-white font-semibold px-10 py-6 text-xl rounded-md shadow-lg shadow-[#11A4D4]/40 hover:scale-105 transition-all duration-300">
  Explore Packages
</Button>

<Button className="bg-[#0109121A] text-black hover:bg-[#0109121A]/60 px-8 py-6 text-lg rounded-md backdrop-blur-lg transition-all duration-200">
          Book Now
        </Button>
      </div>

      {/* Constant White Search Strip */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[65%] bg-white/90 backdrop-blur-md rounded-t-xl shadow-lg p-2 flex flex-col md:flex-row items-center justify-between gap-3 z-20">
  <div className="flex flex-col w-full md:w-1/4">
    <label className="flex items-center gap-2 text-[#7BBCB0] font-semibold text-sm">
      <i className="fas fa-map-marker-alt"></i> Location
    </label>
    <input
      type="text"
      placeholder="Search for a destination"
      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
    />
  </div>

  <div className="flex flex-col w-full md:w-1/4">
    <label className="text-[#7BBCB0] font-semibold text-sm">Guests</label>
    <input
      type="number"
      placeholder="How many guests?"
      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
    />
  </div>

 <div className="flex flex-col w-full md:w-1/4">
    <label className="text-[#7BBCB0] font-semibold text-sm">Date</label>
    <input
      type="date"
      className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-500"
    />
  </div>

  <Button className="bg-yellow-400 text-black px-6 py-2 rounded-xlg w-full md:w-auto hover:bg-yellow-500 transition">
    Search
  </Button>
</div>


    </div>
  );
}
