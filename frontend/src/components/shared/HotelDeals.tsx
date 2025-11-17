"use client";
import { Star, Wifi, Waves, UtensilsCrossed, Space } from "lucide-react";

export default function HotelDeals() {
  return (
    <section className="bg-white py-1 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <div className="border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-4">
          <div className="relative">
            <img
              src="/images/hotel3.png"
              alt="Luxury Stay"
              className="w-full h-48 object-cover rounded-xl"
            />
            <span className="absolute top-3 right-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-lg">
              16% OFF
            </span>
          </div>

          <h3 className="text-lg font-semibold mt-4">Luxury Stay</h3>
          <p className="text-gray-600 text-sm">The Taj Mahal Palace</p>
          <p className="text-gray-500 text-sm">Mumbai, Maharashtra</p>

          <div className="flex items-center gap-2 mt-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <p className="font-semibold">4.8</p>
            <p className="text-gray-500 text-sm">(2847 reviews)</p>
          </div>

          {/* Amenities */}
          <div className="flex items-center gap-3 mt-3 text-gray-600">
            <Wifi className="w-5 h-5" />
            <Waves className="w-5 h-5" />
            <Space className="w-5 h-5" />
            <UtensilsCrossed className="w-5 h-5" />
          </div>

          {/* Price */}
          <div className="mt-4">
            <p className="text-xl font-bold text-gray-900">₹15,999</p>
            <p className="text-gray-500 line-through">₹18,999</p>
            <p className="text-gray-500 text-sm">per night</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-4">
          <div className="relative">
            <img
              src="/images/hotel2.png"
              alt="Heritage Hotel"
              className="w-full h-48 object-cover rounded-xl"
            />
            <span className="absolute top-3 right-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-lg">
              13% OFF
            </span>
          </div>

          <h3 className="text-lg font-semibold mt-4">Heritage Hotel</h3>
          <p className="text-gray-600 text-sm">The Taj Mahal Palace</p>
          <p className="text-gray-500 text-sm">Mumbai, Maharashtra</p>

          <div className="flex items-center gap-2 mt-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <p className="font-semibold">4.8</p>
            <p className="text-gray-500 text-sm">(2847 reviews)</p>
          </div>

          <div className="flex items-center gap-3 mt-3 text-gray-600">
            <Wifi className="w-5 h-5" />
            <Waves className="w-5 h-5" />
            <Space className="w-5 h-5" />
            <UtensilsCrossed className="w-5 h-5" />
          </div>

          <div className="mt-4">
            <p className="text-xl font-bold text-gray-900">₹15,999</p>
            <p className="text-gray-500 line-through">₹18,999</p>
            <p className="text-gray-500 text-sm">per night</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-4">
          <div className="relative">
            <img
              src="/images/hotel1.png"
              alt="Beach Resort"
              className="w-full h-48 object-cover rounded-xl"
            />
            <span className="absolute top-3 right-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-lg">
              31% OFF
            </span>
          </div>

          <h3 className="text-lg font-semibold mt-4">Beach Resort</h3>
          <p className="text-gray-600 text-sm">The Taj Mahal Palace</p>
          <p className="text-gray-500 text-sm">Mumbai, Maharashtra</p>

          <div className="flex items-center gap-2 mt-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <p className="font-semibold">4.8</p>
            <p className="text-gray-500 text-sm">(2847 reviews)</p>
          </div>

          <div className="flex items-center gap-3 mt-3 text-gray-600">
            <Wifi className="w-5 h-5" />
            <Waves className="w-5 h-5" />
            <Space className="w-5 h-5" />
            <UtensilsCrossed className="w-5 h-5" />
          </div>

          <div className="mt-4">
            <p className="text-xl font-bold text-gray-900">₹15,999</p>
            <p className="text-gray-500 line-through">₹18,999</p>
            <p className="text-gray-500 text-sm">per night</p>
          </div>
        </div>

      </div>
    </section>
  );
}
