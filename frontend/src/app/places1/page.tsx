"use client";

import CreateOwnPackageModal from "@/components/shared/CreateOwnPackageModal";
import PlaceCard from "@/components/shared/PlaceCard1";
import { PLACES } from "@/services/Options";
import React, { useRef } from "react";

function Place1() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: any) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (ref: any) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const placesRow1 = PLACES.slice(0, 9);
  const placesRow2 = PLACES.slice(9, 18);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl mb-6 font-bold text-center font-serif">
         Places
      </h1>

      {/* <CreateOwnPackageModal /> */}

      {/* ROW 1 */}
      <div className="relative my-8">
        {/* Left Button */}
        <button
          onClick={() => scrollLeft(row1Ref)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-white p-3 rounded-full z-10"
        >
          ◀
        </button>

        {/* Scrollable List */}
        <div
          ref={row1Ref}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-10"
        >
          {placesRow1.map((place, idx) => (
            <div key={idx} className="shrink-0"> 
              <PlaceCard place={place} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scrollRight(row1Ref)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-white p-3 rounded-full z-10"
        >
          ▶
        </button>
      </div>

      {/* ROW 2 */}
      <div className="relative my-8">
        {/* Left Button */}
        <button
          onClick={() => scrollLeft(row2Ref)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-white p-3 rounded-full z-10"
        >
          ◀
        </button>

        {/* Scrollable List */}
        <div
          ref={row2Ref}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-10"
        >
          {placesRow2.map((place, idx) => (
            <div key={idx} className="shrink-0">
              <PlaceCard place={place} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scrollRight(row2Ref)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-white p-3 rounded-full z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Place1;
