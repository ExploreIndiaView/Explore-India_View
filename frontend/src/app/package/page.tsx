"use client";
import CreateOwnPackageModal from "@/components/shared/CreateOwnPackageModal";
import PlaceCard from "@/components/shared/PlaceCard1";
import { PLACES } from "@/services/Options";
import React from "react";

function Package() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif">
        Places
      </h1>

      <CreateOwnPackageModal />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PLACES.map((place, idx) => (
  <PlaceCard place={place} key={idx} />
))}

      </div>
    </div>
  );
}

export default Package;
