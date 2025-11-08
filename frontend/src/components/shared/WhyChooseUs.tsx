"use client";
import { Map, Users, Compass, Star } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Why Choose Explore India View?
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover what makes us stand out and why travelers trust us for their unforgettable Indian experiences.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300">
          <Star className="w-12 h-12 mx-auto mb-4 text-[#06ACC6] border-2 border-black rounded-full p-2 bg-white" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Local Knowledge</h3>
          <p className="text-gray-600">
            Deep understanding of Indian culture, hidden gems, and authentic experiences.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300">
          <Users className="w-12 h-12 mx-auto mb-4 text-[#06ACC6] border-2 border-black rounded-full p-2 bg-white" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Service</h3>
          <p className="text-gray-600">
            Every journey is customized to your preferences, ensuring comfort and connection.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300">
          <Map className="w-12 h-12 mx-auto mb-4 text-[#06ACC6] border-2 border-black rounded-full p-2 bg-white" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Experience</h3>
          <p className="text-gray-600">
            From booking to travel, we handle every detail for a smooth and memorable adventure.
          </p>
        </div>
      </div>
    </section>
  );
}
