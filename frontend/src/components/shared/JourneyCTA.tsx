"use client";
import { Button } from "@/components/ui/button";

export default function JourneyCTA() {
  return (
    <section className="bg-white py-3 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Ready to Start Your Journey?
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Contact our travel experts for personalized assistance and exclusive deals.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* Primary Button */}
        <Button className="bg-[#06ACC6] text-white text-lg px-6 py-3 rounded-xl hover:bg-[#059bb3] transition-all duration-300 shadow-md">
          Get Free Consultation
        </Button>

        {/* Secondary Button */}
        <Button className="bg-white border-2 border-[#06ACC6] text-[#06ACC6] text-lg px-6 py-3 rounded-xl hover:bg-[#06ACC6] hover:text-white transition-all duration-300 shadow-md">
          View All Packages
        </Button>
      </div>
    </section>
  );
}
