"use client";
import { Info, AlertTriangle, ShieldCheck, HeartHandshake, Link, DollarSign, CheckCircle } from "lucide-react";

export default function TermsSection() {
  return (
    <>
    <section className="bg-white py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Terms & Disclaimers
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Please read these important terms and disclaimers before using our services.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300">
          <Info className="w-12 h-12 mx-auto mb-4 text-black rounded-full p-2 bg-white" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Information Accuracy
          </h3>
          <p className="text-gray-600">
            While we strive for accuracy, travel information, prices, and itineraries are subject to change. 
            We recommend verifying details before booking and are not liable for any inaccuracies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-black  rounded-full p-2 bg-white" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Service Limitations
          </h3>
          <p className="text-gray-600">
            External factors such as weather, strikes, or government restrictions may affect services. 
            We are not responsible for such unforeseen changes or cancellations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-black rounded-full p-2 bg-white" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Liability Disclaimer
          </h3>
          <p className="text-gray-600">
            Explore India View acts as an intermediary between travelers and service providers and cannot be held 
            responsible for third-party actions or issues beyond our control.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white py-10 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Full Terms of Use
      </h2>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg space-y-4">
        <p>
          By using this website, you acknowledge that travel plans and services may be subject to change due to
          weather conditions, political situations, natural disasters, or other unforeseen circumstances.
        </p>

        <p>
          All bookings are subject to the terms and conditions of the respective service providers.
          Cancellation and refund policies vary by provider and package type.
        </p>

        <p>
          This website may contain links to external sites. We are not responsible for the content or
          privacy practices of these external websites.
        </p>
      </div>
    </section>
     <section className="bg-white py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Affiliate Disclosure
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Transparency is important to us. Here's how our affiliate partnerships work.
      </p>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
        <h3 className="text-2xl font-semibold text-left text-gray-900 mb-3">
          Our Commitment to You
        </h3>
        <p className="text-left">
          We only recommend products and services we genuinely believe will enhance your travel experience. 
          Our affiliate partnerships never influence our honest reviews and recommendations.
        </p>
      </div>
    </section>
    <section className="bg-white py-16 px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {/* Card 1 */}
    <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 text-left">
      <DollarSign className="w-12 h-12 mb-4 text-black rounded-full p-2 bg-white" />
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
        How It Works
      </h3>
      <p className="text-gray-600">
        When you purchase through our affiliate links, we may earn a small commission at no extra
        cost to you. This helps us maintain our website and create valuable content for travelers.
      </p>
    </div>

    {/* Card 2 */}
    <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 text-left">
      <HeartHandshake className="w-12 h-12 mb-4 text-black rounded-full p-2 bg-white" />
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
        Supporting Our Mission
      </h3>
      <p className="text-gray-600">
        These partnerships enable us to keep our content free and support our team in researching and 
        curating the best travel experiences for you.
      </p>
    </div>
  </div>
</section>
 <section className="bg-white py-5 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-5">Our Promise</h2>

      {/* Three Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-10">
        {/* Card 1 */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 w-64">
          <h3 className="text-5xl font-bold text-[#06ACC6] mb-2">100%</h3>
          <p className="text-gray-700 text-lg">Honest Reviews</p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 w-64">
          <h3 className="text-5xl font-bold text-[#06ACC6] mb-2">$0</h3>
          <p className="text-gray-700 text-lg">Extra Cost to You</p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 w-64">
          <CheckCircle className="w-12 h-12 mx-auto text-[#06ACC6] mb-2" />
          <p className="text-gray-700 text-lg">Full Transparency</p>
        </div>
      </div>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-10 text-gray-700 text-lg leading-relaxed">
        We believe in ethical marketing practices and will always disclose when content contains
        affiliate links. Your trust is our most valuable asset.
      </p>
    </section>
    </>
  );

}
