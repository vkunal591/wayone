import FaqSection from "@/app/components/common/FaqSection";
import React from "react";
import ContactHeroSection from "../web-development/components/ContactSection";
import TechnologiesSection from "../web-development/components/TechnologySection";
import WhyChooseUsSection from "../web-development/components/WhyChooseSection";
import IndustriesSection from "../web-development/components/IndustriesSection";
import AIServiceSection from "./components/AIServiceSection";
import AIProcessSection from "./components/AIProcessSection";
import UIUXServicesSection from "../ux-ui-designing/components/UIUXServiceSection";
import PartnerWithUsSection from "@/app/components/PartnerWithUsSection";

const dynamicData = {
  title: "Driving Business Growth with Data-Led Digital Marketing Services",
  heiglight: " ",
  shortDesc: "Targeted. Scalable. ROI-Driven Results",
  description:
    "We assist businesses in growing online via strategic digital marketing services that are made to attract, engage, and convert across every digital channel.",
  ctaText: "Start Your Project",
  ctaLink: "#contact",
  subheading: "Digital Marketing Services – Wayone",
};

const aiservices = [
  {
    icon: "bi bi-gear",
    title: "Search Engine Optimization",
    description:
      "We enhance your website to rank higher in search engines, generate organic traffic, and increase visibility through ethical SEO methods, keyword strategy, and technical audits.",
    delay: 100,
    image: "/assets/images/icon/seo.png",
  },
  {
    icon: "bi bi-gear",
    title: "Social Media Marketing",
    description:
      "We design platform-specific approaches that establish brand recognition, increase followers, and create engagement on leading social sites such as Instagram, Facebook, LinkedIn, and others.",
    delay: 200,
    image: "/assets/images/icon/social.png",
  },
  {
    icon: "bi bi-gear",
    title: "Search Engine Marketing",
    description:
      "Our SEM campaigns are designed with visibility and performance. Whether Google Ads or YouTube ads, we assist you to target your ideal audience with the right message.",
    delay: 300,
    image: "/assets/images/icon/sem.png",
  },
  {
    icon: "bi bi-gear",
    title: "Email Marketing",
    description:
      "We build and automate customized email campaigns that engage leads, retain customers, and drive repeat sales—keeping your brand at the forefront of your audience.",
    delay: 400,
    image: "/assets/images/icon/email.png",
  },
  {
    icon: "bi bi-gear",
    title: "Content Marketing",
    description:
      "We develop high-quality, SEO-optimized content—guides, videos, infographics, blogs—that builds authority, pushes traffic, and connects with your audience on their journey.",
    delay: 500,
    image: "/assets/images/icon/digital.png",
  },
  {
    icon: "bi bi-gear",
    title: "AI Powered AppsPaid Adverting",
    description:
      "Maximize reach and conversions with targeted paid campaigns across Google, Facebook, LinkedIn, and more. We manage ad budgets efficiently to deliver maximum ROI.",
    delay: 600,
    image: "/assets/images/icon/paid-ads.png",
  },
];

const aiprocessSteps = [
  {
    title: "Requirement Gathering",
    description:
      "We learn about your business, goals, target audience, and competitors to form a strong foundation for the perfect marketing plan.",
    number: 1,
    delay: 100,
  },
  {
    title: "Strategy Building",
    description:
      "Our experts create a customized digital marketing plan with the right channels, content, and methods in line with your goals.",
    number: 2,
    delay: 200,
  },
  {
    title: "Execution",
    description:
      "We execute your strategy on chosen digital platforms, making each campaign optimized for engagement, reach, and conversions.",
    number: 3,
    delay: 300,
  },
  {
    title: "Reporting",
    description:
      "We monitor vital metrics and offer comprehensive performance reports with analysis to ensure transparency and ongoing campaign enhancements.",
    number: 4,
    delay: 400,
  },
];

export default function page() {
  return (
    <div className="bg-white    ">
      <ContactHeroSection {...dynamicData} />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <UIUXServicesSection
          subtitle="Our Digital Marketing Services"
          title="Performance-Focused Digital Marketing Services That Deliver Real Results"
          description="Our digital marketing services are designed to create leads, increase visibility, and optimize ROI with a data-driven strategy specific to your business objectives."
          services={aiservices}
        />
        <AIProcessSection
          subtitle="Our Digital Marketing Process"
          title="From Strategy to Success — A Process That Delivers Measurable Growth"
          description="We follow a structured, data-driven process to ensure your digital campaigns are effective, result-oriented, and aligned with your business goals."
          steps={aiprocessSteps}
        />
      </div>

      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <IndustriesSection />
        <PartnerWithUsSection />
        <FaqSection />
      </div>
    </div>
  );
}
