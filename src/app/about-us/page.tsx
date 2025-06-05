import React from "react";
import HeroSection from "../components/common/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import OurVission from "./components/OurVision";
import OurCoreValue from "./components/OurCoreValue";
import PartnerWithUs from "./components/PartnerWithUs";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import PartnerWithUsSection from "../components/PartnerWithUsSection";
import OurTeam from "../components/OurTeam";

export default function page() {
  return (
    <div className="bg-white">
      <HeroSection
        title1={"Discover Who We Are – Your Dedicated Partner"}
        title2={" in Technological Innovation and Excellence"}
        description={
          "We utilize Advanced technologies to build scalable, high-performance solutions that facilitate business revolution. Our professional team provides precision-engineered products, ensuring that integration and optimization across all digital platforms are smooth for sustainable growth"
        }
        primaryLinkTitle={"Explore More"}
        primaryLink={"/contact-us"}
      />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <WhoWeAre />
        <OurVission />
        <OurCoreValue />
        <OurTeam />
        <PartnerWithUsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
}
