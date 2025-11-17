"use client";
import HotelDeals from "@/components/shared/HotelDeals";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  return (
    <>
    <section className="w-full py-10">
      {/* Strip Background */}
      <div
  className="w-full py-10 px-4 text-center"
  style={{
    background: "linear-gradient(90deg, #FAFAFA, #a3e2f8ff, #FAFAFA)",
    backgroundPosition: "center top -30px",
  }}
>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900">
          Find Your Perfect Stay
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 mt-3 text-lg">
          Discover amazing hotels across India with the best prices and
          exclusive deals
        </p>

        {/* Search Bar Section */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-4 max-w-5xl mx-auto">

          {/* Destination */}
          <div className="flex flex-col text-left w-full lg:w-60">
            <label className="font-medium text-gray-700">Destination</label>
            <input
              type="text"
              placeholder="City, landmark, or hotel name"
              className="mt-1 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#11A4D4]"
            />
          </div>

          {/* Check In */}
          <div className="flex flex-col text-left w-full lg:w-40">
            <label className="font-medium text-gray-700">Check In</label>
            <input
              type="date"
              className="mt-1 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#11A4D4]"
            />
          </div>

          {/* Check Out */}
          <div className="flex flex-col text-left w-full lg:w-40">
            <label className="font-medium text-gray-700">Check Out</label>
            <input
              type="date"
              className="mt-1 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#11A4D4]"
            />
          </div>

          {/* Guests & Rooms */}
          <div className="flex flex-col text-left w-full lg:w-48">
            <label className="font-medium text-gray-700">Guests & Rooms</label>
            <input
              type="text"
              placeholder="2 guests, 1 room"
              className="mt-1 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#11A4D4]"
            />
          </div>

          {/* Search Button */}
          <button
            className="mt-6 lg:mt-7 bg-[#F97415] hover:bg-[#EE9D2B] text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            Search Hotels
          </button>
        </div>
      </div>
    </section>
    <div className="max-w-6xl mx-auto mt-6 flex items-center gap-4 justify-start px-4">
  {/* List View */}
  <button className="bg-[#11A4D4] text-white font-medium px-5 py-2 rounded-lg shadow-sm hover:bg-[#0f93bf] transition">
    List View
  </button>

  {/* Map View */}
  <button className="border text-black font-medium px-5 py-2 rounded-lg shadow-sm hover:bg-[#11A4D41A] transition">
    Map View
  </button>
</div>
<div className="max-w-6xl mx-auto mt-10 px-4 text-left">
  <h2 className="text-2xl font-bold text-gray-900">
    Recommended for You
  </h2>

  <p className="text-gray-600 mt-1">
    Handpicked hotels based on your preferences
  </p>
</div>
<HotelDeals/>
{/* Hotels Found + Sort By */}
<section className="w-full bg-white py-10">
  <div className="max-w-6xl mx-auto flex items-center justify-between">
    {/* Left */}
    <div>
      <h2 className="text-xl font-bold">2,847 hotels found</h2>
      <p className="text-gray-600 text-sm">Best prices guaranteed</p>
    </div>

    {/* Right */}
    <div className="flex items-center gap-2">
      <span className="text-gray-700 font-medium">Sort by:</span>
      <select className="border border-gray-300 rounded-md px-3 py-2">
        <option>Price: Low to High</option>
      </select>
    </div>
  </div>

  {/* Hotel Cards List */}
  <div className="max-w-6xl mx-auto mt-8 space-y-6">

    {/* CARD */}
    <div className="flex gap-5 border rounded-xl p-4 shadow-sm">
      {/* Image */}
      <div className="w-40 h-32 bg-gray-200 rounded-lg">
   
        <Image
          src="/images/hotel8.png"   // replace with your image path
          alt="Hotel image"
          width={160}             // match w-40 (40 * 4 = 160px)
          height={128}            // match h-32 (32 * 4 = 128px)
          className="object-cover"
        />


      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">Royal Plaza Hotel</h3>
        <p className="text-gray-600 text-sm flex items-center gap-2">
          ⭐ 4.5 <span className="text-gray-500">(1247)</span>
        </p>

        <p className="text-gray-500 text-sm">Connaught Place, New Delhi</p>
        <p className="text-green-600 font-medium text-sm">Free cancellation</p>

        <p className="text-gray-500 text-sm mt-1">0.5 km from India Gate</p>

        {/* Icons */}
        <div className="flex gap-3 text-sm text-gray-700 mt-2">
          wifi · pool · gym · restaurant · spa
        </div>

        {/* Price + Buttons */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">₹3,999</p>
            <p className="line-through text-gray-500 text-sm">₹4,999</p>
            <p className="text-gray-600 text-sm">per night, incl. taxes</p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-400 rounded-lg">
              View Details
            </button>
            <button className="px-4 py-2 bg-[#06ACC6] text-white rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
     <div className="flex gap-5 border rounded-xl p-4 shadow-sm">
      {/* Image */}
      <div className="w-40 h-32 bg-gray-200 rounded-lg">
        <Image
          src="/images/hotel9.png"   // replace with your image path
          alt="Hotel image"
          width={160}             // match w-40 (40 * 4 = 160px)
          height={128}            // match h-32 (32 * 4 = 128px)
          className="object-cover"
        />

      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">Royal Plaza Hotel</h3>
        <p className="text-gray-600 text-sm flex items-center gap-2">
          ⭐ 4.5 <span className="text-gray-500">(1247)</span>
        </p>

        <p className="text-gray-500 text-sm">Connaught Place, New Delhi</p>
        <p className="text-green-600 font-medium text-sm">Free cancellation</p>

        <p className="text-gray-500 text-sm mt-1">0.5 km from India Gate</p>

        {/* Icons */}
        <div className="flex gap-3 text-sm text-gray-700 mt-2">
          wifi · pool · gym · restaurant · spa
        </div>

        {/* Price + Buttons */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">₹3,999</p>
            <p className="line-through text-gray-500 text-sm">₹4,999</p>
            <p className="text-gray-600 text-sm">per night, incl. taxes</p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-400 rounded-lg">
              View Details
            </button>
            <button className="px-4 py-2 bg-[#06ACC6] text-white rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
     <div className="flex gap-5 border rounded-xl p-4 shadow-sm">
      {/* Image */}
      <div className="w-40 h-32 bg-gray-200 rounded-lg">
        <Image
          src="/images/hotel10.png"   // replace with your image path
          alt="Hotel image"
          width={160}             // match w-40 (40 * 4 = 160px)
          height={128}            // match h-32 (32 * 4 = 128px)
          className="object-cover"
        />

      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">Royal Plaza Hotel</h3>
        <p className="text-gray-600 text-sm flex items-center gap-2">
          ⭐ 4.5 <span className="text-gray-500">(1247)</span>
        </p>

        <p className="text-gray-500 text-sm">Connaught Place, New Delhi</p>
        <p className="text-green-600 font-medium text-sm">Free cancellation</p>

        <p className="text-gray-500 text-sm mt-1">0.5 km from India Gate</p>

        {/* Icons */}
        <div className="flex gap-3 text-sm text-gray-700 mt-2">
          wifi · pool · gym · restaurant · spa
        </div>

        {/* Price + Buttons */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">₹3,999</p>
            <p className="line-through text-gray-500 text-sm">₹4,999</p>
            <p className="text-gray-600 text-sm">per night, incl. taxes</p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-400 rounded-lg">
              View Details
            </button>
            <button className="px-4 py-2 bg-[#06ACC6] text-white rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
     <div className="flex gap-5 border rounded-xl p-4 shadow-sm">
      {/* Image */}
      <div className="w-40 h-32 bg-gray-200 rounded-lg">
        <Image
          src="/images/hotel12.png"   // replace with your image path
          alt="Hotel image"
          width={160}             // match w-40 (40 * 4 = 160px)
          height={128}            // match h-32 (32 * 4 = 128px)
          className="object-cover"
        />

      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">Royal Plaza Hotel</h3>
        <p className="text-gray-600 text-sm flex items-center gap-2">
          ⭐ 4.5 <span className="text-gray-500">(1247)</span>
        </p>

        <p className="text-gray-500 text-sm">Connaught Place, New Delhi</p>
        <p className="text-green-600 font-medium text-sm">Free cancellation</p>

        <p className="text-gray-500 text-sm mt-1">0.5 km from India Gate</p>

        {/* Icons */}
        <div className="flex gap-3 text-sm text-gray-700 mt-2">
          wifi · pool · gym · restaurant · spa
        </div>

        {/* Price + Buttons */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">₹3,999</p>
            <p className="line-through text-gray-500 text-sm">₹4,999</p>
            <p className="text-gray-600 text-sm">per night, incl. taxes</p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-400 rounded-lg">
              View Details
            </button>
            <button className="px-4 py-2 bg-[#06ACC6] text-white rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
     <div className="flex gap-5 border rounded-xl p-4 shadow-sm">
      {/* Image */}
      <div className="w-40 h-32 bg-gray-200 rounded-lg">
        <Image
          src="/images/hotel13.png"   // replace with your image path
          alt="Hotel image"
          width={160}             // match w-40 (40 * 4 = 160px)
          height={128}            // match h-32 (32 * 4 = 128px)
          className="object-cover"
        />

      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">Royal Plaza Hotel</h3>
        <p className="text-gray-600 text-sm flex items-center gap-2">
          ⭐ 4.5 <span className="text-gray-500">(1247)</span>
        </p>

        <p className="text-gray-500 text-sm">Connaught Place, New Delhi</p>
        <p className="text-green-600 font-medium text-sm">Free cancellation</p>

        <p className="text-gray-500 text-sm mt-1">0.5 km from India Gate</p>

        {/* Icons */}
        <div className="flex gap-3 text-sm text-gray-700 mt-2">
          wifi · pool · gym · restaurant · spa
        </div>

        {/* Price + Buttons */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">₹3,999</p>
            <p className="line-through text-gray-500 text-sm">₹4,999</p>
            <p className="text-gray-600 text-sm">per night, incl. taxes</p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-400 rounded-lg">
              View Details
            </button>
            <button className="px-4 py-2 bg-[#06ACC6] text-white rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
    


    {/* COPY THIS CARD 5 MORE TIMES WITH DIFFERENT CONTENT */}
  </div>
</section>

</>
  );

}
