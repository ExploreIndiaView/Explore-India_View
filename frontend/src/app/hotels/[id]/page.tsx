"use client";
import { HOTELS } from "@/services/Options";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HotelDetails({ params }: any) {
  const router = useRouter();
  const hotel = HOTELS.find((h) => h.id === params.id);

  if (!hotel) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Hotel not found!
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Hotel Image */}
      <div className="w-full h-72 rounded-xl overflow-hidden mb-6">
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hotel Info */}
      <h1 className="text-3xl font-bold">{hotel.name}</h1>

      <p className="text-gray-600 mt-2">
        ⭐ {hotel.rating} ({hotel.reviews} reviews)
      </p>

      <p className="text-gray-500 mt-1">{hotel.location}</p>
      <p className="text-gray-500">{hotel.distance}</p>

      <div className="mt-4 text-gray-700">
        <strong>Amenities: </strong>
        {hotel.amenities.join(" · ")}
      </div>

      {/* Price Section */}
      <div className="mt-6">
        <p className="text-2xl font-bold">₹{hotel.price}</p>
        <p className="line-through text-gray-500">₹{hotel.oldPrice}</p>
        <p className="text-gray-600">per night, including taxes</p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => router.push(`/hotels/${hotel.id}/book`)}
          className="px-6 py-3 bg-[#06ACC6] text-white rounded-lg"
        >
          Book Now
        </button>

        <button
          onClick={() => router.back()}
          className="px-6 py-3 border rounded-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
