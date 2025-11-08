"use client";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section className="bg-white py-7 text-center">
      <h2 className="text-3xl font-bold mb-3">
        Stay Updated with Our Latest Stories
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Subscribe to our newsletter and never miss inspiring travel stories,
        expert tips, and exclusive destination guides.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06ACC6]"
        />
        <Button className="bg-[#06ACC6] hover:bg-[#0592a9] text-white px-6 py-3 rounded-xl font-semibold w-full sm:w-auto">
          Subscribe
        </Button>
      </div>
    </section>
  );
}
