import React from 'react';

const CancellationPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Cancellation and Refund Policy – Explore India View</h1>
      <p className="mb-6 leading-relaxed">
        At Explore India View, we strive to provide the best possible experience to our users. However, we understand that circumstances may change, and you may need to cancel or modify your booking.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">1. Cancellation Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cancellations made within 24 hours of booking may be eligible for a full refund, provided the service has not already been confirmed/processed.</li>
          <li>Cancellations made before 48 hours of the scheduled service may be eligible for a partial refund after deducting processing charges or partner cancellation fees.</li>
          <li>Non-refundable services: Certain services such as confirmed hotel bookings, or special deals may be non-refundable as per our partner’s policy. These will be clearly mentioned at the time of booking.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">2. Refund Process</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Refunds, if applicable, will be initiated to the original payment method (card, UPI, wallet, or bank).</li>
          <li>Refunds are usually processed within 7–10 business days. Timelines may vary depending on your bank/payment provider.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">3. Contact for Cancellations</h2>
        <p className="leading-relaxed">
          To cancel or modify a booking, please contact our support team at <a href="mailto:support@exploreindiaview.com" className="text-blue-500 underline">support@exploreindiaview.com</a> with your booking reference number.
        </p>
      </section>
    </div>
  );
};

export default CancellationPolicy;