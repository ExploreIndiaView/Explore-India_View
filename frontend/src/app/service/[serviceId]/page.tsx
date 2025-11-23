"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SERVICES } from "@/services/Options";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    const found = SERVICES.find((s) => s.__id === serviceId);
    setService(found || null);
  }, [serviceId]);

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen p-6 md:p-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">{service.name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src={service.image || "/event.jpg"}
            alt={service.name}
            width={800}
            height={500}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content + Booking */}
        <div className="md:w-1/2 w-full flex flex-col justify-between bg-white p-6 rounded-lg shadow-lg">
          <div>
            <p className="text-gray-700 mb-4">
              {service.description ||
                "Experience the culture, heritage, and natural beauty of this region."}
            </p>

            <p className="font-semibold text-gray-800 mb-2">
              Popular Experiences:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {service.experiences?.map((exp: string, i: number) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>

            <p className="font-bold text-lg text-[#0f8dbb] mb-4">
              Price: ₹{service.price || "12,000"}
            </p>
          </div>

          {/* Booking Form */}
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md p-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md p-2"
              required
            />
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2"
              required
            />
            <Button
              type="submit"
              className="bg-[#11A4D4] hover:bg-[#0f8dbb] text-white mt-2"
            >
              Book Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
