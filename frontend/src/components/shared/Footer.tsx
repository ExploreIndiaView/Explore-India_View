// import {
//   ChevronRight,
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPlus,
//   MessageCircle,
//   PhoneCall,
//   Twitter,
//   Youtube,
// } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// function Footer() {
//   return (
//     <div className="bg-[url(https://img.freepik.com/free-photo/abstract-wave-cyan-color-black-background_1268-28760.jpg?t=st=1706202170~exp=1706205770~hmac=c064fc4e73ad1a1e01a1f0782257b32e7a155abf6f8c97fe918c827d1c953e32&w=1060)] p-5 text-white bg-cover bg-no-repeat mt-5">
//       {/* content */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {/* Quick Links */}
//         <div className="p-3">
//           <h1 className="text-xl font-bold font-serif">Quick Links</h1>
//           <div className="font-mono text-sm mt-2">
//             <Link
//               href={"/"}
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//             >
//               <ChevronRight
//                 size={15}
//                 className="text-purple-800"
//                 strokeWidth={5}
//               />
//               Home
//             </Link>
//             <Link
//               href={"/about"}
//               className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
//             >
//               <ChevronRight
//                 size={15}
//                 className="text-purple-800"
//                 strokeWidth={5}
//               />
//               About
//             </Link>
//             <Link
//               href={"/package"}
//               className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
//             >
//               <ChevronRight
//                 size={15}
//                 className="text-purple-800"
//                 strokeWidth={5}
//               />
//               Package
//             </Link>
//             <Link
//               href={"/hotels"}
//               className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
//             >
//               <ChevronRight
//                 size={15}
//                 className="text-purple-800"
//                 strokeWidth={5}
//               />
//               Hotels
//             </Link>
//             <Link
//               href={"/privacy-policy"}
//               className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
//             >
//               <ChevronRight
//                 size={15}
//                 className="text-purple-800"
//                 strokeWidth={5}
//               />
//               Privacy Policy
//             </Link>
//             <Link
//               href={"/terms-and-conditions"}
//               className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
//             >
//               <ChevronRight
//                 size={15}
//                 className="text-purple-800"
//                 strokeWidth={5}
//               />
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="p-3">
//           <h1 className="text-xl font-bold font-serif">Contact Information</h1>
//           <div className="text-sm font-mono mt-2">
//             <Link
//               href="tel:+919588041628"
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//             >
//               <PhoneCall
//                 size={15}
//                 className="fill-purple-700 text-purple-600"
//               />
//               +91 9588041628
//             </Link>
//             <Link
//               href="tel:+918209598333"
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//             >
//               <PhoneCall
//                 size={15}
//                 className="fill-purple-700 text-purple-600"
//               />
//               +91 8209598333
//             </Link>
//             <Link
//               href="tel:+918426090454"
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//             >
//               <PhoneCall
//                 size={15}
//                 className="fill-purple-700 text-purple-600"
//               />
//               +91 8426090454
//             </Link>
//             <Link
//               href="mailto:exploreindiaview@gmail.com"
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//             >
//               <Mail size={15} className="fill-purple-700 text-white" />
//               exploreindiaview@gmail.com
//             </Link>
//             <Link
//               href="/"
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//             >
//               <MapPlus size={15} className="fill-purple-700 text-purple-600" />
//               Rajasthan, India-302012
//             </Link>
//           </div>
//         </div>

//         {/* Follow Us */}
//         <div className="p-3">
//           <h1 className="text-xl font-bold font-serif">Contact Information</h1>
//           <div className="text-sm font-mono mt-2">
//             <Link
//               href={"https://www.facebook.com/profile.php?id=61575066421510"}
//               target="_blank"
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//             >
//               <Facebook size={15} className="fill-purple-700 text-purple-600" />
//               Facebook
//             </Link>
//             <Link
//               href={"https://www.linkedin.com/in/n-cube-4808662bb/"}
//               target="_blank"
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//             >
//               <Linkedin size={15} className="fill-purple-700 text-purple-600" />
//               Linkedin
//             </Link>
//             <Link
//               href={"https://www.youtube.com/@Ncube-r8p"}
//               target="_blank"
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//             >
//               <Youtube size={15} className="fill-purple-700 text-purple-600" />
//               Youtube
//             </Link>
//             <Link
//               href={
//                 "/https://www.instagram.com/explore_india_view/?next=%2F&hl=en"
//               }
//               className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
//               target="_blank"
//             >
//               <Instagram size={15} className="fill-purple-700 " />
//               Instagram
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* Copyright */}
//       <div className="font-serif text-sm mt-2">
//         <p className="text-center">
//           &copy; {new Date().getFullYear()} Incredible Tour To India. All rights
//           reserved.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Footer;




// // src/components/shared/Footer.tsx
// import {
//   ChevronRight,
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Twitter,
//   Youtube,
// } from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";

// function Footer() {
//   return (
//     <div className="bg-[#1a202c] p-12 text-white mt-5">
//       {/* Main Footer Content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        
//         {/* Column 1: Explore India */}
//         <div>
//           <h1 className="text-2xl font-bold mb-4">Explore India</h1>
//           <p className="text-sm mb-4">
//             Your trusted partner for authentic Indian travel experiences. We create unforgettable journeys that showcase India's incredible diversity, culture, and natural beauty.
//           </p>
//           <div className="flex items-center text-sm mb-2">
//             <Phone size={16} className="mr-2" />
//             <span>+91 98765 43210</span>
//           </div>
//           <div className="flex items-center text-sm mb-2">
//             <Mail size={16} className="mr-2" />
//             <span>info@indiatours.com</span>
//           </div>
//           <div className="flex items-center text-sm">
//             <MapPin size={16} className="mr-2" />
//             <span>New Delhi, India</span>
//           </div>
//         </div>

//         {/* Column 2: Quick Links */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">Quick Links</h2>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link href={"/about"} className="hover:text-gray-400">About Us</Link>
//             </li>
//             <li>
//               <Link href={"/tours"} className="hover:text-gray-400">Our Tours</Link>
//             </li>
//             <li>
//               <Link href={"/destinations"} className="hover:text-gray-400">Destinations</Link>
//             </li>
//             <li>
//               <Link href={"/private-tours"} className="hover:text-gray-400">Private Tours</Link>
//             </li>
//             <li>
//               <Link href={"/reviews"} className="hover:text-gray-400">Reviews</Link>
//             </li>
//             <li>
//               <Link href={"/blog"} className="hover:text-gray-400">Blog</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Column 3: Popular Destinations */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">Popular Destinations</h2>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link href={"/destinations/rajasthan"} className="hover:text-gray-400">Rajasthan Tours</Link>
//             </li>
//             <li>
//               <Link href={"/destinations/kerala"} className="hover:text-gray-400">Kerala Backwaters</Link>
//             </li>
//             <li>
//               <Link href={"/destinations/golden-triangle"} className="hover:text-gray-400">Golden Triangle</Link>
//             </li>
//             <li>
//               <Link href={"/destinations/himalayan"} className="hover:text-gray-400">Himalayan Adventures</Link>
//             </li>
//             <li>
//               <Link href={"/destinations/south-india"} className="hover:text-gray-400">South India</Link>
//             </li>
//             <li>
//               <Link href={"/destinations/north-east"} className="hover:text-gray-400">North East India</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Column 4: Stay Updated */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
//           <p className="text-sm mb-4">
//             Subscribe to our newsletter for travel tips, exclusive deals, and destination insights.
//           </p>
//           <div className="flex space-x-2">
//             <Input type="email" placeholder="Your email address" className="bg-gray-700 border-none text-white placeholder-gray-400" />
//             <Button className="bg-teal-500 hover:bg-teal-600">Subscribe</Button>
//           </div>
//           <div className="flex space-x-4 mt-6">
//             <Link href="https://www.facebook.com" target="_blank" className="hover:text-gray-400">
//               <Facebook size={24} />
//             </Link>
//             <Link href="https://www.linkedin.com" target="_blank" className="hover:text-gray-400">
//               <Linkedin size={24} />
//             </Link>
//             <Link href="https://www.youtube.com" target="_blank" className="hover:text-gray-400">
//               <Youtube size={24} />
//             </Link>
//             <Link href="https://www.instagram.com" target="_blank" className="hover:text-gray-400">
//               <Instagram size={24} />
//             </Link>
//             <Link href="https://www.twitter.com" target="_blank" className="hover:text-gray-400">
//               <Twitter size={24} />
//             </Link>
//           </div>
//         </div>

//       </div>

//       {/* Footer Bottom Links & Copyright */}
//       <div className="border-t border-gray-700 pt-6 mt-6 text-sm text-gray-400 text-center md:text-left">
//         <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
//           <p>&copy; {new Date().getFullYear()} India Tours. All rights reserved. | Crafted with love for incredible journeys</p>
//           <div className="flex flex-wrap justify-center space-x-4">
//             <Link href="/help" className="hover:text-gray-300">Help Center</Link>
//             <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
//             <Link href="/booking-support" className="hover:text-gray-300">Booking Support</Link>
//             <Link href="/travel-insurance" className="hover:text-gray-300">Travel Insurance</Link>
//             <Link href="/terms-and-conditions" className="hover:text-gray-300">Terms & Conditions</Link>
//             <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Footer() {
  return (
    <div className="bg-[#1a202c] p-12 text-white mt-5">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        
        {/* Column 1: Explore India */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Explore India</h1>
          <p className="text-sm mb-4">
            Your trusted partner for authentic Indian travel experiences. We create unforgettable journeys that showcase India's incredible diversity, culture, and natural beauty.
          </p>
          <div className="flex items-center text-sm mb-2">
            <Phone size={16} className="mr-2" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center text-sm mb-2">
            <Mail size={16} className="mr-2" />
            <span>info@indiatours.com</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin size={16} className="mr-2" />
            <span>New Delhi, India</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={"/about"} className="hover:text-gray-400">About Us</Link>
            </li>
            <li>
              <Link href={"/tours"} className="hover:text-gray-400">Our Tours</Link>
            </li>
            <li>
              <Link href={"/destinations"} className="hover:text-gray-400">Destinations</Link>
            </li>
            <li>
              <Link href={"/private-tours"} className="hover:text-gray-400">Private Tours</Link>
            </li>
            <li>
              <Link href={"/cancellation-policy"} className="hover:text-gray-400">Cancellation Policy</Link>
            </li>
            <li>
              <Link href={"/shipping-delivery-policy"} className="hover:text-gray-400">Delivery Policy</Link>
            </li>
            <li>
              <Link href={"/contact-us"} className="hover:text-gray-400">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Popular Destinations */}
        <div>
          <h2 className="text-xl font-bold mb-4">Popular Destinations</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={"/destinations/rajasthan"} className="hover:text-gray-400">Rajasthan Tours</Link>
            </li>
            <li>
              <Link href={"/destinations/kerala"} className="hover:text-gray-400">Kerala Backwaters</Link>
            </li>
            <li>
              <Link href={"/destinations/golden-triangle"} className="hover:text-gray-400">Golden Triangle</Link>
            </li>
            <li>
              <Link href={"/destinations/himalayan"} className="hover:text-gray-400">Himalayan Adventures</Link>
            </li>
            <li>
              <Link href={"/destinations/south-india"} className="hover:text-gray-400">South India</Link>
            </li>
            <li>
              <Link href={"/destinations/north-east"} className="hover:text-gray-400">North East India</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Stay Updated */}
        <div>
          <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for travel tips, exclusive deals, and destination insights.
          </p>
          <div className="flex space-x-2">
            <Input type="email" placeholder="Your email address" className="bg-gray-700 border-none text-white placeholder-gray-400" />
            <Button className="bg-teal-500 hover:bg-teal-600">Subscribe</Button>
          </div>
          <div className="flex space-x-4 mt-6">
            <Link href="https://www.facebook.com" target="_blank" className="hover:text-gray-400">
              <Facebook size={24} />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" className="hover:text-gray-400">
              <Linkedin size={24} />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" className="hover:text-gray-400">
              <Youtube size={24} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="hover:text-gray-400">
              <Instagram size={24} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" className="hover:text-gray-400">
              <Twitter size={24} />
            </Link>
          </div>
        </div>

      </div>

      {/* Footer Bottom Links & Copyright */}
      <div className="border-t border-gray-700 pt-6 mt-6 text-sm text-gray-400 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} India Tours. All rights reserved. | Crafted with love for incredible journeys</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <Link href="/help" className="hover:text-gray-300">Help Center</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
            <Link href="/booking-support" className="hover:text-gray-300">Booking Support</Link>
            <Link href="/travel-insurance" className="hover:text-gray-300">Travel Insurance</Link>
            <Link href="/terms-and-conditions" className="hover:text-gray-300">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;