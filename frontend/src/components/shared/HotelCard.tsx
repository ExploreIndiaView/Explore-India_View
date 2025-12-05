"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface HotelCardProps {
  hotel: {
    id: string | number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    location: string;
    distance: string;
    price: number;
    oldPrice: number;
    features: string[];
  };
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const router = useRouter();

  return (
    <div className="flex gap-5 border rounded-xl p-4 shadow-sm">
      {/* Image */}
      <div className="w-40 h-32 rounded-lg overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={160}
          height={128}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">{hotel.name}</h3>

        <p className="text-gray-600 text-sm flex items-center gap-2">
          ⭐ {hotel.rating} <span className="text-gray-500">({hotel.reviews})</span>
        </p>

        <p className="text-gray-500 text-sm">{hotel.location}</p>
        <p className="text-green-600 font-medium text-sm">Free cancellation</p>

        <p className="text-gray-500 text-sm mt-1">{hotel.distance}</p>

        {/* Features */}
        <div className="flex gap-3 text-sm text-gray-700 mt-2">
          {hotel.features.join(" · ")}
        </div>

        {/* Price + Buttons */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">₹{hotel.price}</p>
            <p className="line-through text-gray-500 text-sm">₹{hotel.oldPrice}</p>
            <p className="text-gray-600 text-sm">per night, incl. taxes</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => router.push(`/hotels/${hotel.id}`)}
              className="px-4 py-2 border border-gray-400 rounded-lg"
            >
              View Details
            </button>

            <button
              onClick={() => router.push(`/hotels/${hotel.id}/book`)}
              className="px-4 py-2 bg-[#06ACC6] text-white rounded-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
