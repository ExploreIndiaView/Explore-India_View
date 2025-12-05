"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


const EXCLUSIVE_OFFERS = [
  {
    id: 1,
    label: "Most Populated",
    labelColor: "bg-green-500",
    logo: "/images/exclusivelogo.png",
    discount: "25% OFF",
    title: "Early Bird Special",
    description:
      "Book 60 days in advance and save big on your India adventure.",
  },
  {
    id: 2,
    label: "Couples Special",
    labelColor: "bg-pink-500",
    logo: "/images/exclusivelogo.png",
    discount: "30% OFF",
    title: "Honeymoon Package",
    description:
      "Romantic getaways with exclusive perks for newlyweds.",
  },
  {
    id: 3,
    label: "Group Deal",
    labelColor: "bg-[#3B82F6]",
    logo: "/images/exclusivelogo.png",
    discount: "25% OFF",
    title: "Group Booking Deal",
    description:
      "Special rates for groups of 6 or more travelers.",
  },
];

function ExclusiveOffers() {
  const router = useRouter();

  return (
    <div className="px-6 md:px-16 py-10 bg-gradient-to-r from-[#11A4D4] to-[#1ABC9C] text-white">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 font-serif border-white ">
        Exclusive Offers & Deals
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {EXCLUSIVE_OFFERS.map((offer) => (
          <div
            key={offer.id}
            className="backdrop-blur-md bg-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg"
          >
            {/* Label */}
            <span
              className={`text-sm md:text-base font-semibold px-4 py-1 rounded-full ${offer.labelColor} text-white mb-3`}
            >
              {offer.label}
            </span>

            {/* Logo */}
            <Image
              src={offer.logo}
              alt={offer.title}
              width={60}
              height={60}
              className="mb-3 object-contain"
            />

            {/* Discount */}
            <p className="text-lg md:text-xl font-bold mb-2">{offer.discount}</p>

            {/* Title */}
            <h2 className="font-bold text-md md:text-lg mb-2">{offer.title}</h2>

            {/* Description */}
            <p className="text-sm md:text-base mb-3">{offer.description}</p>

            {/* Validity */}
            <p className="text-sm mb-4">Valid: Limited Time</p>

            {/* Claim Offer Button */}
           <Button
  className="bg-[#F97415] hover:bg-[#e56712] text-white px-5 py-2 rounded-lg"
  onClick={() => router.push(`/offers/${offer.id}`)}
>
  Claim Offer
</Button>

          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
  <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8  w-[700px] text-center shadow-lg">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-bold mb-3">🎉 Flash Sale Alert!</h2>

    {/* Description */}
    <p className="text-white mb-6">
      Get an additional <span className="font-bold">15% OFF</span> on all bookings made this week. <br />
      Use code <span className="font-semibold">FLASH15</span>
    </p>

    {/* Buttons */}
    <div className="flex justify-center gap-4 mb-4">
      <Button className="bg-[#F97415] hover:bg-[#e56712] text-white px-5 py-2 rounded-lg">
        Book Now & Save
      </Button>
      <Button className="border backdrop-blur-md bg-white/10 border-white bg- text-white px-5 py-2 rounded-lg hover:bg-white/10">
        View All Deals
      </Button>
    </div>

    {/* Terms */}
    <p className="text-xs text-gray-200">
      * Terms and conditions apply. Cannot be combined with other offers.
    </p>
  </div>
</div>

    </div>
  );
}

export default ExclusiveOffers;
