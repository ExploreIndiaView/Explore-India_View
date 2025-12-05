"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// The same offers array (you can also import it)
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
    description: "Romantic getaways with exclusive perks for newlyweds.",
  },
  {
    id: 3,
    label: "Group Deal",
    labelColor: "bg-blue-500",
    logo: "/images/exclusivelogo.png",
    discount: "25% OFF",
    title: "Group Booking Deal",
    description: "Special rates for groups of 6 or more travelers.",
  },
];

export default function OfferPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  // find correct offer
  const offer = EXCLUSIVE_OFFERS.find(
    (offer) => offer.id === Number(params.id)
  );

  // if offer not found
  if (!offer) {
    return (
      <div className="p-10 text-center text-white">
        <h1 className="text-3xl font-bold">Offer Not Found ❌</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#11A4D4] to-[#1ABC9C] text-white p-6 md:p-14">
      {/* Back Button */}
      <Button
        onClick={() => router.back()}
        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl mb-6"
      >
        ← Back
      </Button>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/10 p-10 rounded-2xl shadow-xl">

        {/* Label */}
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${offer.labelColor}`}
        >
          {offer.label}
        </span>

        {/* Image */}
        <div className="flex justify-center mt-6">
          <Image
            src={offer.logo}
            alt="Offer Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mt-6">
          {offer.title}
        </h1>

        {/* Discount */}
        <p className="text-3xl font-semibold text-center mt-2">
          {offer.discount}
        </p>

        {/* Description */}
        <p className="text-lg text-center mt-4 opacity-90">
          {offer.description}
        </p>

        {/* Validity */}
        <p className="text-center mt-4 text-sm">✔ Valid for limited time</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button className="bg-[#F97415] hover:bg-[#e56712] text-white px-6 py-3 rounded-xl">
            Claim This Offer
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl">
            View All Offers
          </Button>
        </div>
      </div>

      {/* Extra Highlights Section */}
      <div className="max-w-4xl mx-auto mt-10 backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Why Choose This Offer?</h2>

        <ul className="list-disc pl-6 space-y-2 text-white/90">
          <li>Save more with exclusive limited-time discounts</li>
          <li>Perfect for families, groups, or couples</li>
          <li>Special privileges included in every offer</li>
          <li>100% secure booking process</li>
        </ul>
      </div>
    </div>
  );
}
