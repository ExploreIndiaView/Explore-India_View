"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { PRIVATETOURS } from "@/services/Options";

function PrivateTours() {
  const router = useRouter();

  return (
    <div className="px-6 md:px-16 py-10">
      <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
        Private Tours by Region
      </h1>
       <p className="text-gray-500 text-sm md:text-base text-center mb-10 leading-relaxed">
Create your perfect journey with our fully customizable private tours.  <br />
Enjoy exclusive experiences, personal guides, and luxury accommodations <br/>
tailored to your preferences.          </p>


      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {PRIVATETOURS.map((tour) => (
          <div
            key={tour.id}
            className="border rounded-2xl shadow-md p-6 flex flex-col items-center bg-white"
          >
            {/* Logo */}
            <Image
              src={tour.logo}
              alt={tour.name}
              width={80}
              height={80}
              className="mb-4 object-contain"
            />

            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-2">
              {tour.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-center mb-4 text-sm md:text-base">
              {tour.description}
            </p>

            {/* Duration & Days */}
            <div className="flex justify-between w-full mb-2 text-sm md:text-base">
              <span className="font-semibold text-gray-700">{tour.duration}</span>
              <span className="text-gray-600">{tour.days}</span>
            </div>

            {/* Group Size */}
            <div className="flex justify-between w-full mb-2 text-sm md:text-base">
              <span className="font-semibold text-gray-700">{tour.group}</span>
              <span className="text-gray-600">{tour.people}</span>
            </div>

            {/* Price */}
            <div className="flex justify-between w-full mb-4 text-sm md:text-base">
              <span className="font-semibold text-gray-700">{tour.priceLabel}</span>
              <span className="text-gray-900 font-bold">{tour.price}</span>
            </div>

            {/* Included Features */}
            <p className="font-semibold text-gray-700 mb-2">{tour.featuresLabel}:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
              {tour.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex justify-between w-full gap-3 mt-auto">
              <Button
                onClick={() => router.push("/package")}
                className="bg-[#11A4D4] hover:bg-[#0f8dbb] text-white w-1/2 py-2 rounded-lg"
              >
                View Package
              </Button>
              <Button
                onClick={() => router.push("/quote")}
                className="border bg-white text-black w-1/2 py-2 rounded-lg hover:bg-[#11A4D4]/10"
              >
                Get Quote
              </Button>
            </div>
          </div>
        ))}
        
      </div>
        <div className="flex justify-center">
  <Button
    onClick={() => {
      router.push("/package");
    }}
    size="lg"
    className="mt-5 bg-[#EE9D2B] hover:bg-yellow-500 text-white font-semibold cursor-pointer "
  >
    Plan my custom trip
  </Button>


          </div>
    </div>
  );
}

export default PrivateTours;
