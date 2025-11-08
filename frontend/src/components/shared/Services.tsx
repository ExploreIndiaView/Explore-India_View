"use client";
import { SERVICES } from "@/services/Options";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

function Services() {
  const router = useRouter();

  return (
    <div className="md:px-16 px-5">
      {SERVICES.length > 0 && (
        <div className="p-5">
          <h1 className="text-2xl md:text-4xl mb-3 font-bold text-center font-serif border-b-4">
            Explore Popular Regions
          </h1>
          <p className="text-gray-500 text-sm md:text-base text-center mb-10 leading-relaxed">
            From royal Rajasthan to the mystical Northeast, discover <br />
            India's diverse regions with our expertly crafted regional tours.
          </p>

         <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => {
              // ✅ Safely get image URL (string)
              const imageSrc =
                typeof service.image === "string"
                  ? service.image
                  : service.image?.[0]?.image || "/fallback.jpg"; // fallback if missing

              return (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center border rounded-xl shadow-md overflow-hidden"
                >
                  {/* Left: Image */}
                  <div className="md:w-1/2 w-full">
                    <Image
                      src={imageSrc}
                      alt={service.name}
                      width={600}
                      height={400}
                      className="w-full h-72 object-cover"
                    />
                  </div>

                  {/* Right: Content */}
                  <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {service.name}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {service.description ||
                          "Experience the culture, heritage, and natural beauty that define this region of India."}
                      </p>

                      <p className="font-semibold text-gray-700 mb-2">
                        Popular Experiences:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 mb-4">
                        {service.experiences
                          ? service.experiences.map((exp: string, i: number) => (
                              <li key={i}>{exp}</li>
                            ))
                          : ["Desert Safari", "Palace Hotels", "Local Cuisine"].map(
                              (exp, i) => <li key={i}>{exp}</li>
                            )}
                      </ul>
                    </div>

                    {/* Bottom Row: Price + Explore Button */}
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-lg text-[#0f8dbb]">
                        ₹{service.price || "12,000"}
                      </span>
                      <Button
                        onClick={() => router.push(`/services/${service.__id}`)}
                        className="bg-[#11A4D4] hover:bg-[#0f8dbb] text-white px-5 py-2  cursor-pointer"
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
