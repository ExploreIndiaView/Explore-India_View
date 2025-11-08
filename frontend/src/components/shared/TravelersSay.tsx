"use client";
import React from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    stars: 5,
    text: "Our Golden Triangle tour was absolutely incredible! The guide was knowledgeable, the accommodations were luxurious, and every detail was perfectly planned. India Tours made our dream trip a reality.",
    photo: "/images/traveler1.jpg",
    name: "Rohit Sharma",
  },
  {
    id: 2,
    stars: 5,
    text: "South India Explorer was phenomenal! The temples, backwaters, and cultural experiences exceeded our expectations. Every moment was memorable and seamless.",
    photo: "/images/traveler2.jpg",
    name: "Priya Kapoor",
  },
  {
    id: 3,
    stars: 5,
    text: "Himalayan Adventure was an unforgettable experience. The trekking routes, mountain views, and hospitality made it a once-in-a-lifetime trip. Highly recommend!",
    photo: "/images/traveler3.jpg",
    name: "Arjun Mehta",
  },
];

function TravelersSay() {
  return (
    <div className="px-6 md:px-16 py-10 bg-white">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-1 font-serif border-b-4 border-gray-200  pb-2">
        What Our Travelers Say
      </h1>
       <p className="text-gray-500 text-sm md:text-base text-center mb-10 leading-relaxed">
Don't just take our word for it. Here's what our satisfied   <br />
travelers have to say about their incredible India experiences <br/>
       </p>



      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border rounded-2xl shadow-md p-6 flex flex-col bg-white"
          >
            {/* Stars */}
            <div className="flex mb-3">
              {Array.from({ length: testimonial.stars }).map((_, idx) => (
                <span key={idx} className="text-yellow-400 mr-1 text-lg">
                  ★
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              {testimonial.text}
            </p>

            {/* Traveler Info */}
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="font-semibold text-gray-800">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelersSay;
