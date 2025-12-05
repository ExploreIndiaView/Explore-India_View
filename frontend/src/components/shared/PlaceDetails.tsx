"use client";

import { PLACES } from "@/services/Options";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PlaceSubList({ params }: any) {
  const router = useRouter();

  // Find the main place (example: Jammu & Kashmir)
  const place = PLACES.find((p) => p.id === params.id);

  if (!place) {
    return (
      <div className="text-center mt-10 text-gray-500 text-xl">
        No place found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">{place.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {place.places?.map((sub) => (
          <div
            key={sub.id}
            onClick={() =>
              router.push(`/places/${place.id}/${sub.id}`)
            }
            className="rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <Image
              src={sub.image}
              alt={sub.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{sub.name}</h2>
              <p className="text-gray-600 text-sm">{sub.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
