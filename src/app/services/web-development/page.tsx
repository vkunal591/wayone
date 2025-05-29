import React from "react";
import ContactHeroSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import OurWorkSlide from "./components/OurWorkSlide";
import DevelopmentProcessSection from "./components/DevelopmentProcessSection";
import IndustriesSection from "./components/IndustriesSection";
import TechnologiesSection from "./components/TechnologySection";
import WhyChooseUsSection from "./components/WhyChooseSection";
import FaqSection from "../../components/common/FaqSection";
import PartnerWithUsSection from "@/app/components/PartnerWithUsSection";

const dynamicData = {
  title: "Power Your Business with Future-Ready ",
  heiglight: "Web Design and Development Services by Wayone",
  shortDesc:
    "Custom-Built Web Solutions That Evolve with Your Business and Drive Results",
  description:
    "Wayone designs scalable, high-performance websites that drive growth and align with your business goals.",
  ctaText: "Start Your Project",
  ctaLink: "#contact",
  subheading: "Web Development Services – Wayone",
};

export default function page() {
  return (
    <div className="bg-white">
      <ContactHeroSection {...dynamicData} />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <ServicesSection />
      </div>
      <OurWorkSlide />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <DevelopmentProcessSection />
        <IndustriesSection />
        <TechnologiesSection />
        <PartnerWithUsSection />
        <FaqSection />
      </div>
    </div>
  );
}
