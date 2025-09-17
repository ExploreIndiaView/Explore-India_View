import React from 'react';
import Link from 'next/link';

const ShippingDeliveryPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Shipping and Delivery Policy (Service Delivery Policy) – Explore India View</h1>
      <p className="mb-6 leading-relaxed">
        Explore India View provides digital services and bookings only. We do not ship any physical goods.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">1. Service Confirmation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Once you successfully complete a booking/payment on our platform, you will receive an instant confirmation via email and/or SMS.</li>
          <li>Booking details, e-tickets, vouchers, or confirmation numbers will be delivered to the registered email ID and phone number provided during checkout.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">2. Delivery Timeline</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Most bookings are confirmed instantly.</li>
          <li>In rare cases, there may be delays due to network or partner issues. If this happens, our support team will assist you.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">3. Customer Support</h2>
        <p className="leading-relaxed">
          If you do not receive your booking confirmation within the expected timeline, please reach out to us at <a href="mailto:exploreindiaview@gmail.com" className="text-blue-500 underline">exploreindiaview@gmail.com</a> or call us at <Link href="tel:+919588041628" className="text-blue-500 underline">+91-9588041628</Link>.
        </p>
      </section>
    </div>
  );
};

export default ShippingDeliveryPolicy;