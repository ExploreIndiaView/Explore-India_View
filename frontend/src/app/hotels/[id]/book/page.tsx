"use client";

import { HOTELS } from "@/services/Options";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookHotel({ params }: any) {
  const router = useRouter();
  const hotel = HOTELS.find((h) => h.id === params.id);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [nights, setNights] = useState(1);

  if (!hotel) {
    return <div className="p-10 text-center text-xl font-semibold">Hotel not found!</div>;
  }

  const totalPrice = hotel.price * nights;

  const handleBooking = () => {
    alert(`Booking confirmed for ${hotel.name}\nTotal: ₹${totalPrice}`);
    router.push("/"); // after booking go to homepage
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Book {hotel.name}</h1>

      {/* Booking Form */}
      <div className="space-y-5">

        <div>
          <label className="font-medium">Full Name</label>
          <input
            type="text"
            className="w-full border px-4 py-2 rounded-lg mt-1"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="font-medium">Mobile Number</label>
          <input
            type="number"
            className="w-full border px-4 py-2 rounded-lg mt-1"
            placeholder="Enter your mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div>
          <label className="font-medium">Number of Nights</label>
          <input
            type="number"
            className="w-full border px-4 py-2 rounded-lg mt-1"
            value={nights}
            onChange={(e) => setNights(Number(e.target.value))}
            min={1}
          />
        </div>

        <div className="text-xl font-semibold">
          Total Price: ₹{totalPrice}
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-[#F97415] text-white py-3 rounded-lg mt-4"
        >
          Confirm Booking
        </button>

      </div>
    </div>
  );
}
