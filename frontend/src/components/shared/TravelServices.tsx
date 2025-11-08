"use client";
import { Button } from "@/components/ui/button";
import { travelOptions } from "../../services/Options";

export default function TravelServices() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Travel Services</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Comprehensive travel solutions designed to make your Indian adventure seamless and unforgettable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {travelOptions.map(({ id, icon: Icon, title, description, features, popular }) => (
          <div
            key={id}
            className="border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <Icon className="w-10 h-10 text-black" />
              {popular && (
                <span className="bg-[#FA8938] text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
            </div>

            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-3">{description}</p>
            <ul className="text-sm text-gray-500 space-y-1 mb-4 list-disc list-inside">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button className="bg-[#06ACC6] text-white hover:bg-[#059bb3] w-[300px] transition-all">
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
