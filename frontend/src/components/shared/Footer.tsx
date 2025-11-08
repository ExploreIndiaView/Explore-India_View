import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#020817] text-white p-10 font-inter">
      {/* 4-column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Explore India */}
        <div>
          <h2 className="text-xl font-bold mb-4">Explore India</h2>
          <p className="text-sm font-mono mb-3">
            Your trusted partner for authentic Indian travel experiences. We create unforgettable journeys that showcase India's incredible diversity, culture, and natural beauty.
          </p>
          <p className="text-sm font-mono mb-1">+91 98765 43210</p>
          <p className="text-sm font-mono mb-1">info@indiatours.com</p>
          <p className="text-sm font-mono">New Delhi, India</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="text-sm font-mono space-y-1">
            <li>About Us</li>
            <li>Our Tours</li>
            <li>Destinations</li>
            <li>Private Tours</li>
            <li>Reviews</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Popular Destinations */}
        <div>
          <h2 className="text-xl font-bold mb-4">Popular Destinations</h2>
          <ul className="text-sm font-mono space-y-1">
            <li>Rajasthan Tours</li>
            <li>Kerala Backwaters</li>
            <li>Golden Triangle</li>
            <li>Himalayan Adventures</li>
            <li>South India</li>
            <li>North East India</li>
          </ul>
        </div>

        {/* Stay Updated */}
       {/* Stay Updated */}
<div>
  <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
  <p className="text-sm font-mono mb-3">
    Subscribe to our newsletter for travel tips, exclusive deals, and destination insights.
  </p>
  <div className="flex mb-3 items-center gap-2">
    <button className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
      Subscribe
    </button>
    <input
      type="email"
      placeholder="Your email address"
      className="p-2 rounded-md text-black flex-1"
    />
  </div>
  <div className="flex gap-3 mt-2">
    <Facebook size={20} className="cursor-pointer hover:text-purple-500" />
    <Twitter size={20} className="cursor-pointer hover:text-purple-500" />
    <Instagram size={20} className="cursor-pointer hover:text-purple-500" />
    <Youtube size={20} className="cursor-pointer hover:text-purple-500" />
  </div>
</div>

      </div>

      {/* Bottom Links */}
      <div className="flex flex-wrap justify-center gap-9 text-sm mt-10 font-mono">
        <Link href={"/"}>Help Center</Link>
        <Link href={"/"}>Contact Us</Link>
        <Link href={"/"}>Booking Support</Link>
        <Link href={"/"}>Travel Insurance</Link>
        <Link href={"/"}>Terms & Conditions</Link>
        <Link href={"/"}>Privacy Policy</Link>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 font-mono">
        © 2024 India Tours. All rights reserved. | Crafted with <span className="text-red-500">❤️</span> for incredible journeys
      </div>
    </div>
  );
}

export default Footer;
