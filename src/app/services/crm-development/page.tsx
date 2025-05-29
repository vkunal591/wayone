import FaqSection from "@/app/components/common/FaqSection";
import React from "react";
import ContactHeroSection from "../web-development/components/ContactSection";
import TechnologiesSection from "../web-development/components/TechnologySection";
import WhyChooseUsSection from "../web-development/components/WhyChooseSection";
import IndustriesSection from "../web-development/components/IndustriesSection";
import SaasTechnologiesSection from "./components/TechnologySection";
import BlockchainServicesSection from "./components/BlockChainServicesSection";
import CRMProcessSection from "./components/CRMProcessSection";
import OurWorkSlide from "./components/OurWorkSlide";
import PartnerWithUsSection from "@/app/components/PartnerWithUsSection";

const dynamicData = {
  title: "Smart CRM Development Services to ",
  heiglight: "Power Business Growth",
  shortDesc:
    "Customised CRM Platforms That Automate, Streamline & Scale Your Operations",
  description:
    "At Wayone, we build custom CRM solutions that centralize data, automate workflows, and enhance customer engagement—empowering businesses to boost productivity and make smarter, data-driven decisions.",
  ctaText: "Start Your Project",
  ctaLink: "#contact",
  subheading: "CRM Development Services – Wayone",
};

const services = [
  {
    title: "01. CRM Consulting Services",
    description:
      "We evaluate your business requirements and suggest a CRM architecture that aligns with your objectives. Our consulting service encompasses process mapping, tool selection, tech stack planning, and readiness audits to lead a successful CRM implementation",
    delay: 100,
  },
  {
    title: "02. Custom CRM Software Development",
    description:
      "We evaluate your business requirements and suggest a CRM architecture that aligns with your objectives. Our consulting service encompasses process mapping, tool selection, tech stack planning, and readiness audits to lead a successful CRM implementation",
    delay: 200,
  },
  {
    title: "03. CRM Mobile App Development",
    description:
      "Access your CRM anywhere, anytime. We build fully responsive, feature-rich mobile CRM apps for Android and iOS — so your sales and support teams remain connected and productive on the move",
    delay: 300,
  },
  {
    title: "04. Cloud-Based CRM Development",
    description:
      "Our cloud-based CRM systems provide flexibility, scalability, and secure access from any device. Cut local infrastructure costs and simplify team collaboration across locations with 99.9% uptime",
    delay: 400,
  },
  {
    title: "05. CRM Implementation Service",
    description:
      "From data migration and system configuration to user training, we provide a seamless go-live experience. Our experts take care of everything — so you can use your CRM effectively from day one.",
    delay: 500,
  },
  {
    title: "06. CRM Integration Service",
    description:
      "We integrate your CRM with essential platforms like ERPs, accounting tools, email marketing apps, payment gateways, and customer service tools — creating a unified digital workflow",
    delay: 600,
  },
];

const steps = [
  {
    stepNumber: 1,
    title: "Define Goals",
    description:
      "Understand goals, pain points, and key workflows to define CRM objectives.",
    delay: 100,
    image: "/assets/images/icon/target.png",
  },
  {
    stepNumber: 2,
    title: "Solution Architecture",
    description:
      "Build a scalable, modular system design that fits your tech and business stack",
    delay: 200,
    image: "/assets/images/icon/solution.png",
  },
  {
    stepNumber: 3,
    title: "Develop Data Models",
    description:
      "Structure data flows, relationships, roles, and automation to reflect real-world use.",
    delay: 300,
    image: "/assets/images/icon/code.png",
  },
  {
    stepNumber: 4,
    title: "Implement",
    description:
      "Ensure user onboarding, system testing, and final deployment with zero disruption.",
    delay: 400,
    image: "/assets/images/icon/implementation.png",
  },
];

export default function page() {
  return (
    <div className="bg-white">
      <ContactHeroSection {...dynamicData} />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <BlockchainServicesSection
          subtitle="Our CRM Development Services"
          title="Build Smarter Relationships with Our Complete CRM Development Services"
          description="From initial consulting to post-deployment support, our services cover the entire life-cycle of CRM development services. Every solution we deliver is customised to match your workflows, technology environment, and customer engagement goals."
          services={services}
        />
        <CRMProcessSection
          subtitle="Our CRM Development Services"
          title="A Strategic Workflow That Turns Ideas into Scalable CRM Platforms"
          description="From planning to deployment, we follow a structured approach to deliver scalable, efficient, and business-aligned CRM Development services."
          steps={steps}
        />
        <OurWorkSlide />
      </div>

      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <IndustriesSection />
        <PartnerWithUsSection />
        <FaqSection />
      </div>
    </div>
  );
}
