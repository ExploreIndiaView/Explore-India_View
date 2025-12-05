"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PlaceProps = {
  place: {
    id: string;
    name: string;
    image: string;
  };
};

export default function PlaceCard({ place }: PlaceProps) {
  const router = useRouter();

  return (
    <div
      className="rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
      onClick={() => router.push(`/places/${place.id}`)}
    >
      <Image
        src={place.image}
        alt={place.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{place.name}</h2>
      </div>
    </div>
  );
}
