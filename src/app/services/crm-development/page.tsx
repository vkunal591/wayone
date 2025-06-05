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

const crmFaqs = [
  {
    question: "What is CRM development?",
    answer:
      "CRM (Customer Relationship Management) development involves creating software that helps businesses manage customer interactions, streamline processes, and improve customer satisfaction.",
  },
  {
    question: "Why should I use a CRM for my business?",
    answer:
      "A CRM helps you track customer interactions, manage leads, and improve sales, ultimately leading to stronger relationships and higher revenue.",
  },
  {
    question: "What CRM platforms do you develop?",
    answer:
      "We specialize in developing custom CRM solutions using platforms like Salesforce, HubSpot, and Zoho, or create tailored CRM systems to meet your specific needs.",
  },
  {
    question: "How does a CRM improve customer relationships?",
    answer:
      "A CRM centralizes customer data, allowing you to personalize communication, track interactions, and offer more responsive, customer-centric service.",
  },
  {
    question: "Can CRM systems integrate with other tools?",
    answer:
      "Yes, we can integrate your CRM with marketing platforms, email systems, social media, and other tools to ensure seamless data flow.",
  },
  {
    question: "Is CRM software secure?",
    answer:
      "Yes, we implement robust security measures, including encryption and user authentication, to protect your customer data and privacy.",
  },
  {
    question: "How long does it take to develop a custom CRM?",
    answer:
      "The timeline depends on your requirements but typically ranges from a few weeks to a few months for a fully functional CRM solution.",
  },
  {
    question: "Can CRM help automate sales processes?",
    answer:
      "Yes, CRM systems can automate lead tracking, follow-up reminders, and sales reporting, saving time and improving efficiency.",
  },
  {
    question: "Do you offer CRM training and support?",
    answer:
      "Yes, we provide training and ongoing support to ensure your team can use the CRM effectively and derive maximum value from it.",
  },
  {
    question: "How do I know which CRM system is right for my business?",
    answer:
      "We assess your business needs, processes, and goals to recommend the best CRM solution, whether it's an off-the-shelf system or a custom-built platform.",
  },
];


export const metadata = {
  title: "CRM Software Development Company | WayOne IT Solutions",
  description:
    "WayOne, a trusted CRM development company, specializes in creating custom CRM software to improve your business operations and boost efficiency. Contact us now!",
  metadataBase: new URL("https://wayone.co.in/services/crm-development/"),
};

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
        <FaqSection faqsData={crmFaqs} />
      </div>
    </div>
  );
}
