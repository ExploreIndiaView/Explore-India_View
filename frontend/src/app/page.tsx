'use client';
import AboutUs from "@/components/shared/AboutUs";
import Disclaimer from "@/components/shared/Disclaimer";
import { Landing } from "@/components/shared/Landing";
import Packages from "@/components/shared/Packages";
import Services from "@/components/shared/Services";
import { CAROUSELIMAGE } from "@/services/Options";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import InquirySection from "@/components/shared/InquirySection";
import PrivateTours from "@/components/shared/PrivateTours";
import ExclusiveOffers from "@/components/shared/ExclusiveOffer";
import TravelersSay from "@/components/shared/TravelersSay";
import Package from "./package/page";
import Place1 from "./places1/page";


function page() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      offset: 120,   // offset (in px) from the original trigger point
    })
    
  }, []);
  return (
    <div data-aos='fade-up'>
      <Landing IMAGES={CAROUSELIMAGE} />
      {/* <Disclaimer/> */}
      <Packages/>
      <Place1/>
      <Services />
      <PrivateTours/>
      <ExclusiveOffers/>
      <TravelersSay/>
      {/* <AboutUs /> */}
      <InquirySection expand={true}/>
    </div>
  
  );
}

export default page;
