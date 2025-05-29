import React from "react";
import HeroSection from "../components/common/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import OurWork from "../components/OurWork";

export default function page() {
  return (
    <div className="bg-white">
      <HeroSection
        title1={"Showcasing Excellence in Delivering"}
        title2={" Innovative Solutions"}
        description={
          "we are dedicated to offering innovative solutions that address the distinct requirements of businesses in various industries. Our professionals 24*7  work offer customized strategies with maximum impact and quantifiable results. We are committed to innovation, efficiency, and excellence, and work towards developing solutions that not only fulfill expectations but surpass them."
        }
      />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <OurWork />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
}
