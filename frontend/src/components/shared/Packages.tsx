"use client";
import { PACKAGES } from "@/services/Options";
import { Button } from "../ui/button";
import PlaceCard from "./PlaceCard";
import { useRouter } from "next/navigation";
import CreateOwnPackageModal from "./CreateOwnPackageModal";

function Packages() {
  const router = useRouter();
  return (
    <div className="md:px-16">
      {PACKAGES.length > 0 && (
        <div className="p-5">
         <h1 className="mt-10 text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
            Featured Tour Packages
          </h1>
   <p className="text-gray-500 text-sm md:text-base text-center mb-8 leading-relaxed">
  Discover our most popular destinations with carefully curated experiences <br />
  that showcase India's incredible diversity.
</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {PACKAGES.map(
              (pack, idx) => idx < 6 && <PlaceCard key={idx} pack={pack} />
            )}
          </div>

            {/* <CreateOwnPackageModal /> */}


          
          <div className="flex justify-center">
  <Button
    onClick={() => {
      router.push("/package");
    }}
    size="lg"
    className="mt-5 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold cursor-pointer "
  >
    View All Packages
  </Button>


          </div>
        </div>
      )}
    </div>
  );
}

export default Packages;
