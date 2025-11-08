"use client";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="bg-[#06ACC6] text-center py-20 px-6">
      <h2 className="text-4xl font-bold text-white mb-4">
        Ready for Your Next Adventure?
      </h2>
      <p className="text-white mb-10 max-w-2xl mx-auto text-lg">
        Let us create the perfect Indian journey for you. From planning to execution, we handle everything.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* Orange Button */}
        <Button className="bg-[#FA8938] text-white text-lg px-6 py-3 rounded-xl hover:bg-[#e87a2f] transition-all duration-300 shadow-md">
          Start Planning
        </Button>

        {/* White Button */}
        <Button className="bg-white text-[#06ACC6] text-lg px-6 py-3 rounded-xl hover:bg-[#e6f9fc] transition-all duration-300 shadow-md">
          Next
        </Button>
      </div>
    </section>
  );
}
