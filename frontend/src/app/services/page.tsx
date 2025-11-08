"use client";
import JourneyCTA from "@/components/shared/JourneyCTA";
import TravelServices from "@/components/shared/TravelServices";
import TravelStories from "@/components/shared/TravelStories";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import FeaturedPost from "@/components/shared/FeaturedPost";
import Image from "next/image";
import LatestPosts from "@/components/shared/FeaturedPost";
import NewsletterSection from "@/components/shared/NewsletterSection";
import FinalCTA from "@/components/shared/FinalCTA";
import TermsSection from "@/components/shared/TermsSection";

export default function ServicesPage() {
  return (
    <>
    <div className="relative w-full h-screen">
      {/* Full-screen background image */}
      <Image
        src="/images/udaipur.png" // replace with your image path
        alt="Udaipur"
        layout="fill"
        objectFit="cover"
        className="brightness-90"
      />

      {/* Bottom white strip (narrowed & centered) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md w-[50%] md:w-[80%] lg:w-[70%] shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-8">
        
        {/* Left content */}
        <div className="lg:w-1/2 text-left space-y-2">
          <h2 className="text-4xl font-bold font-Volkhov text-gray-900">UDAIPUR</h2>
          <p className="text-gray-700 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        {/* Right content */}
        <div className="lg:w-1/2 flex flex-col items-end mt-6
         lg:mt-0 space-y-2 text-right">
          <p className="text-[#11A4D4] font-semibold text-lg">
            Public Transportations
          </p>
          <p className="text-[#1ABC9C] font-semibold text-lg">
            Nature & Adventure
          </p>
          <p className="text-[#FF5733] font-semibold text-lg">
            Private Transportations
          </p>
          <p className="text-[#9B59B6] font-semibold text-lg">
            Business Tours
          </p>
          
        </div>
      </div>
      
    </div>
    <TravelServices/>
    <WhyChooseUs/>
    <JourneyCTA/>
    <TravelStories/>
    <LatestPosts/>
    <NewsletterSection/>
    <FinalCTA/>
    <TermsSection/>
    </>
  );
}
