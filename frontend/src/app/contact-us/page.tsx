import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Contact Us – Explore India View</h1>
      <p className="mb-8 leading-relaxed">
        We’re here to help you!
      </p>

      <div className="space-y-4 text-lg">
        <p><span className="font-semibold">Business Name:</span> Explore India View</p>
        <p><span className="font-semibold">Website:</span> <a href="https://exploreindiaview.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://exploreindiaview.com</a></p>
        
        <div className="flex items-center space-x-2">
          <MapPin className="text-indigo-600" />
          <p><span className="font-semibold">Office Address:</span> 65-B SHree Balaji Nagar Sirsi Jaipur Rajasthan 302012</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Mail className="text-indigo-600" />
          <p><span className="font-semibold">Email:</span> <a href="mailto:exploreindiaview@gmail.com" className="text-blue-500 underline">exploreindiaview@gmail.com</a></p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Phone className="text-indigo-600" />
          <p><span className="font-semibold">Phone:</span> <Link href="tel:+919588041628" className="text-blue-500 underline">+91-9588041628</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;