// app/booking/[packageId]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PACKAGES } from "@/services/Options"; 
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  const { packageId } = useParams();
  const [pkg, setPkg] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    guests: 1,
    rooms: 1,
    startDate: "",
    endDate: "",
    addOns: {
      insurance: false,
      pickup: false,
      meals: false,
    },
    paymentMethod: "card",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const found = PACKAGES.find((p) => p.__id.toString() === packageId);
    setPkg(found || null);
  }, [packageId]);

  if (!pkg)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const target = e.target as HTMLInputElement; // cast to HTMLInputElement
  const { name, value, type } = target;

  if (type === "checkbox") {
    setFormData((prev) => ({
      ...prev,
      addOns: {
        ...prev.addOns,
        [name]: target.checked, // now TypeScript knows `checked` exists
      },
    }));
  } else if (type === "number") {
    setFormData((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const increment = (field: "guests" | "rooms") => {
    setFormData((prev) => ({ ...prev, [field]: prev[field] + 1 }));
  };
  const decrement = (field: "guests" | "rooms") => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] > 1 ? prev[field] - 1 : 1,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.mobile || !formData.startDate || !formData.endDate) {
      alert("Please fill all required fields.");
      return;
    }
    console.log("Booking submitted:", formData);
    setSubmitted(true);
  };

  const totalPrice = pkg.price * formData.guests + (formData.addOns.insurance ? 500 : 0) + (formData.addOns.pickup ? 300 : 0) + (formData.addOns.meals ? 200 : 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Left: Package Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/25 flex items-end p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {pkg.name}
              </h1>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow space-y-4">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p>{pkg.Overview?.[0]}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow space-y-4">
            <h2 className="text-2xl font-bold">Highlights</h2>
            <ul className="list-disc list-inside text-gray-700">
              {pkg.Highlight?.map((h: string, idx: number) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="sticky top-6 bg-white rounded-xl shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold">Book Your Trip</h2>

          {/* Personal Info */}
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile *"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Dates */}
          <div className="flex gap-2">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Guests & Rooms */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span>Guests:</span>
              <button onClick={() => decrement("guests")} className="px-3 py-1 bg-gray-200 rounded">-</button>
              <span>{formData.guests}</span>
              <button onClick={() => increment("guests")} className="px-3 py-1 bg-gray-200 rounded">+</button>
            </div>
            <div className="flex items-center gap-2">
              <span>Rooms:</span>
              <button onClick={() => decrement("rooms")} className="px-3 py-1 bg-gray-200 rounded">-</button>
              <span>{formData.rooms}</span>
              <button onClick={() => increment("rooms")} className="px-3 py-1 bg-gray-200 rounded">+</button>
            </div>
          </div>

          {/* Add-ons */}
          <div className="space-y-2">
            <h3 className="font-semibold">Add-ons:</h3>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="insurance"
                checked={formData.addOns.insurance}
                onChange={handleChange}
              />
              Travel Insurance (+₹500)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="pickup"
                checked={formData.addOns.pickup}
                onChange={handleChange}
              />
              Airport Pickup (+₹300)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="meals"
                checked={formData.addOns.meals}
                onChange={handleChange}
              />
              Meals (+₹200)
            </label>
          </div>

          {/* Payment */}
          <div className="space-y-2">
            <h3 className="font-semibold">Payment Method:</h3>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            >
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="wallet">Wallet</option>
            </select>
          </div>

          {/* Summary */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Package:</strong> {pkg.name}</p>
            <p><strong>Duration:</strong> {pkg.days} days</p>
            <p><strong>Total Guests:</strong> {formData.guests}</p>
            <p><strong>Total Price:</strong> ₹{totalPrice}</p>
          </div>

          {/* Submit */}
          <Button
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleSubmit}
          >
            Confirm Booking
          </Button>

          {/* Success message */}
          {submitted && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
              Booking Confirmed! Check your email for details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
