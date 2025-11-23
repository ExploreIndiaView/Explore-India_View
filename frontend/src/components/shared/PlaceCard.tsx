"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PACKAGETYPE } from "@/services/types";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function PlaceCard({
  pack,
  lineclamp,
}: {
  pack: PACKAGETYPE;
  lineclamp?: boolean;
}) {
  const navigate = useRouter();

  return (
    <Card className="shadow-xl h-auto w-[90%] flex flex-col bg-white mx-auto overflow-hidden">
      {/* Image Section */}
      <CardHeader className="flex justify-center p-0 overflow-hidden">
        <div className="w-[300px] group overflow-hidden">
          <Image
            src={pack.image}
            alt={pack.name}
            layout="responsive"
            height={1000}
            width={500}
            className="object-cover aspect-video transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      </CardHeader>

      {/* Text Content */}
      <CardContent className="px-5 pt-2">
        <h2 className="font-bold text-lg text-black text-left">{pack.name}</h2>

        <p className="mt-2 text-left text-gray-700 font-medium">
          {pack.days} days / {pack.nights} nights
        </p>

        <span className="inline-block mt-3 px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
          Highlights
        </span>
      </CardContent>

      {/* Buttons */}
      <CardFooter className="flex justify-between px-5 pb-4">
        <Button
          size="sm"
          className="bg-[#11A4D4] hover:bg-[#1ABC9C] text-white w-[150px]"
          onClick={() => navigate.push(`/packages/${pack.__id}`)}
        >
          View Details
        </Button>

        <Button
          size="sm"
          variant="outline"
          className="text-black hover:bg-blue w-[150px]"
          onClick={() => navigate.push(`/booking/${pack.__id}`)}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PlaceCard;
