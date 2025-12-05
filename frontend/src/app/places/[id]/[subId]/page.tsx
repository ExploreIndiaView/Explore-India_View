"use client";

import { PLACES } from "@/services/Options";

export default function SubPlacePage({ params }: any) {
  const { id, subId } = params;

  const place = PLACES.find((p) => p.id === id);
  const subPlace = place?.places?.find((sp) => sp.id === subId);

  if (!place || !subPlace) {
    return (
      <div className="text-center mt-10 text-gray-500 text-xl">
        Content not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">{subPlace.name}</h1>

      {/* IMAGE */}
      <img
        src={subPlace.image}
        alt={subPlace.name}
        className="w-full h-64 object-cover rounded-xl shadow-lg"
      />

      {/* DESCRIPTION */}
      <p className="mt-6 text-gray-700 leading-relaxed text-lg">
        {subPlace.description}
      </p>

      {/* BEST TIME */}
      {subPlace.bestTime && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Best Time to Visit</h2>
          <p className="text-gray-700">{subPlace.bestTime}</p>
        </div>
      )}

      {/* TOP PLACES */}
      {subPlace.topPlaces && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Top Places to Visit</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {subPlace.topPlaces.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* FOODS */}
      {subPlace.foodsToTry && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Foods to Try</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {subPlace.foodsToTry.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* TRAVEL TIPS */}
      {subPlace.travelTips && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Travel Tips</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {subPlace.travelTips.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
