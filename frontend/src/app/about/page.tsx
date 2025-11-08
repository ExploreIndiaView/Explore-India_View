import React from "react";
import { DollarSign, Headphones, MapPlusIcon } from "lucide-react";
import Image from "next/image";
import { TbHeart, TbWorld, TbUsers, TbLock } from "react-icons/tb";


function About() {
  return (
    <>
      {/* Top Gradient Strip */}
      <div className="w-full bg-gradient-to-r from-[#11A4D4] to-[#1ABC9C] py-6 text-center text-white">
        <h1 className="text-2xl md:text-3xl font-bold font-serif">
          About Explore India View
        </h1>
        <p className="text-sm md:text-base mt-2 font-Inter ">
          Your trusted partner for authentic, personalized, and <br/>
           unforgettable journeys across Incredible India.
        </p>
      </div>
      {/* Who We Are Section */}
<div className="bg-white text-black py-10 px-6 text-center">
  <h2 className="text-2xl md:text-3xl font-bold font-Inter mb-4">
    Who We Are
  </h2>
  <p className="text-sm md:text-base font-Inter leading-relaxed max-w-3xl mx-auto">
    Explore India View is your gateway to discovering the incredible diversity,
    rich heritage, and breathtaking landscapes of India. We specialize in
    crafting personalized travel experiences that showcase the authentic beauty
    of our incredible nation — from the snow-capped Himalayas to the tropical
    backwaters of Kerala.
    <br />
    <br />
    Our mission is simple: to make your India travel dreams come true with
    seamless planning, expert guidance, and unforgettable memories that last a
    lifetime.
  </p>
</div>
{/* Our Story Section */}
<div className="bg-white text-black py-12 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Left Content */}
    <div className="md:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold font-Inter mb-4">
        Our Story
      </h2>
      <p className="text-sm md:text-base font-Inter leading-relaxed">
        Born from a deep love for India's diverse landscapes and rich cultural
        tapestry, Explore India View began as a dream to share the magic of our
        homeland with travelers from around the world.
        <br />
        <br />
        Our founder, Arjun Sharma, after years of working in luxury hospitality
        across India, realized that many travelers were missing out on the
        authentic experiences that make India truly special. Armed with insider
        knowledge and a network of local experts, he set out to create a
        platform that would bridge this gap.
        <br />
        <br />
        Today, we're proud to have helped thousands of travelers discover hidden
        gems, experience local cultures, and create memories that last a
        lifetime. Every journey we craft is a testament to our belief that
        travel has the power to transform lives and build bridges between
        cultures.
      </p>
    </div>
    

    {/* Right Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
src="./images/tajmahal.jpg" 
        alt="Explore India View Story"
        className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"
      />
    </div>
  </div>
</div>
   <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        The principles that guide every decision we make and every 
        experience we create
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full border-2 border-black bg-white">
              <TbHeart className="text-black text-4xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer First</h3>
          <p className="text-gray-600">
            Your satisfaction and memorable experiences are at the heart of everything we do.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full border-2 border-black bg-white">
              <TbWorld className="text-black text-4xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Travel</h3>
          <p className="text-gray-600">
            We promote responsible tourism that preserves India's natural beauty and cultural heritage.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full border-2 border-black bg-white">
              <TbUsers className="text-black text-4xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Communities</h3>
          <p className="text-gray-600">
            Supporting local businesses, guides, and artisans to create authentic, meaningful connections.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full border-2 border-black bg-white">
              <TbLock className="text-black text-4xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Trust & Transparency</h3>
          <p className="text-gray-600">
            Honest pricing, clear communication, and reliable service you can count on.
          </p>
        </div>
      </div>
    </section>
     <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        The passionate experts behind your extraordinary travel experiences
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-2 border-white bg-white flex items-center justify-center">
              <img
                src="/images/about3.jpg"
                alt="Arjun Sharma"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Arjun Sharma</h3>
          <p className="text-gray-500 mb-3">Founder & CEO</p>
          <p className="text-gray-600">
            With 15+ years in India's travel industry, Arjun's passion for showcasing India's beauty drives our mission.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-2 border-white bg-white flex items-center justify-center">
              <img
                src="/images/about2.jpg"
                alt="Priya Patel"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Priya Patel</h3>
          <p className="text-gray-500 mb-3">Head of Operations</p>
          <p className="text-gray-600">
            Former luxury hotel manager, Priya ensures every journey exceeds expectations with meticulous attention to detail.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-2 border-white bg-white flex items-center justify-center">
              <img
                src="/images/about1.jpg"
                alt="Vikram Singh"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Vikram Singh</h3>
          <p className="text-gray-500 mb-3">Cultural Expert</p>
          <p className="text-gray-600">
            Heritage specialist and local guide coordinator, bringing authentic cultural experiences to every tour.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Achievements</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Numbers that reflect our commitment to excellence and customer satisfaction
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-4xl font-bold text-[#11A4D4] mb-2">50,000+</h3>
          <p className="text-gray-700 font-medium">Happy Travelers</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-4xl font-bold text-[#11A4D4] mb-2">500+</h3>
          <p className="text-gray-700 font-medium">Unique Destinations</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-4xl font-bold text-[#11A4D4] mb-2">4.9/5</h3>
          <p className="text-gray-700 font-medium">Customer Rating</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-4xl font-bold text-[#11A4D4] mb-2">10+</h3>
          <p className="text-gray-700 font-medium">Years Experience</p>
        </div>
      </div>
    </section>
     <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Industry Recognition</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto mt-12">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="w-9 h-9 rounded-full border-2 border-white bg-white flex items-center justify-center">
              <img
                src="/images/icon.png"
                alt="TripAdvisor Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            TripAdvisor Certificate of Excellence
          </h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="w-9 h-9 rounded-full border-2 border-white bg-white flex items-center justify-center">
              <img
                src="/images/icon.png"
                alt="India Tourism Board Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            India Tourism Board <br/>Partner
          </h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <div className="w-9 h-9 rounded-full border-2 border-white bg-white flex items-center justify-center">
              <img
                src="/images/icon.png"
                alt="Sustainable Tourism Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Sustainable Tourism <br/>Certified
          </h3>
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-r from-[#11A4D4] to-[#1ABC9C] text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Explore India?</h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg">
        Join thousands of satisfied travelers who trusted us with their 
        India adventure. Let's start planning your unforgettable 
        journey today.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-6 py-3  text-lg font-medium hover:bg-white/30 transition">
          Start Your Journey
        </button>
        <button className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-6 py-3 text-lg font-medium hover:bg-white/30 transition">
          Contact Our Experts
        </button>
      </div>
    </section>
    </>
  );
}

export default About;
