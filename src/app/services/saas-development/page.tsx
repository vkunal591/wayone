import FaqSection from "@/app/components/common/FaqSection";
import React from "react";
import ContactHeroSection from "../web-development/components/ContactSection";
import TechnologiesSection from "../web-development/components/TechnologySection";
import WhyChooseUsSection from "../web-development/components/WhyChooseSection";
import IndustriesSection from "../web-development/components/IndustriesSection";
import AIProcessSection from "../artificial-intelligence/components/AIProcessSection";
import AIServiceSection from "../artificial-intelligence/components/AIServiceSection";
import SaasServices from "./components/SaasServices";
import SaasProcessSection from "./components/SaasProcessSection";
import SaasTechnologiesSection from "./components/TechnologySection";
import BlockChainProcessSection from "../blockchain-development/components/BlockChainProcessSection";
import PartnerWithUsSection from "@/app/components/PartnerWithUsSection";

const dynamicData = {
  title: "Experience Scalable, Secure & Future-Ready SaaS Solutions ",
  heiglight: "That Drive Your Business Growth",
  shortDesc:
    "Custom SaaS solutions that are made for growth, scalability, and smooth operation.",
  description:
    "We offer top-performance SaaS applications that grow with your business with innovative technology solutions that are secure, reliable, and scalable to meet your evolving needs.",
  ctaText: "Start Your Project",
  ctaLink: "#contact",
  subheading: "Saas Development Services – Wayone",
};

const saasservicesData = [
  {
    id: 1,
    title: "SaaS Product Design & UI/UX",
    description:
      "We create intuitive and easy-to-use interfaces with elegant designs providing seamless user experiences, customer satisfaction, and engagement particular to your target market.",
    delay: 100,
  },
  {
    id: 2,
    title: "SaaS Product Strategy Development",
    description:
      "Our team collaborates with you to create clear-cut and precise product strategies with emphasis on features, market fit, and scalability to ensure your SaaS product addresses the customers requirements and dominates the market",
    delay: 200,
  },
  {
    id: 3,
    title: "Custom SaaS Application Development",
    description:
      "We develop Customised SaaS software applications that meet your specific business needs so they are flexible, scalable, and adaptable to increasing user loads with streamlined business processes.",
    delay: 300,
  },
  {
    id: 4,
    title: "Multi-Tenant Architecture Design",
    description:
      "Our multi-tenant design makes it easy to manage many customers in a single application with protection and segregation of data as well as optimal utilization of resources as well as scalability for your SaaS application.",
    delay: 400,
  },
  {
    id: 5,
    title: "Cloud Migration and Integration",
    description:
      "We provide seamless cloud migration solutions that ensure your SaaS platform operates seamlessly in the cloud and with legacy systems to ensure seamless, uninterrupted processes throughout migration.",
    delay: 500,
  },
  {
    id: 6,
    title: "API Development & Integration",
    description:
      "We build strong APIs that enable smooth inter-operability across various platforms and third-party systems, enriching your SaaS product capabilities and enabling effortless data transfer between systems.",
    delay: 600,
  },
  {
    id: 7,
    title: "SaaS Performance Optimization",
    description:
      "Our optimization packages address your SaaS application's performance, scalability, and reliability to offer the optimal experience depending on various loads.",
    delay: 700,
  },
  {
    id: 8,
    title: "Technology and Third-Party Integration",
    description:
      "We integrate the latest technology and third-party software building blocks into your SaaS apps with additional functionality, security, and smooth integration into other applications, offering improved user experience.",
    delay: 800,
  },
  {
    id: 9,
    title: "API Development & Integration",
    description:
      "We integrate the latest technologies and third-party tools into your SaaS applications, ensuring enhanced functionality, security, and smooth interactions with other software ecosystems, delivering a superior user experience.",
    delay: 900,
  },
];

const steps = [
  {
    title: "Discovery and Planning",
    description:
      "Understanding your business needs and setting clear objectives for the SaaS product.",
    iconClass: "bi-hospital",
    delay: 100,
  },
  {
    title: "Design and  Prototyping",
    description:
      "Crafting wireframes and prototypes to visualize functionality and ensure design alignment.",
    iconClass: "bi-hospital",
    delay: 200,
  },
  {
    title: "Development",
    description:
      "Delivering secure, scalable, and user-focused digital product solutions",
    iconClass: "bi-hospital",
    delay: 300,
  },
  {
    title: "Testing and Assurance",
    description:
      "Ensuring smooth performance with end-to-end quality assurance processes",
    iconClass: "bi-hospital",
    delay: 400,
  },
];

const technologies = [
  { name: "Solidity", icon: "/assets/images/tech/cube 1.svg" },
  { name: "Java", icon: "/assets/images/tech/java 1.svg" },
  { name: "Python", icon: "/assets/images/tech/python 2.svg" },
  { name: "Swift", icon: "/assets/images/tech/swift 1.svg" },
  { name: "React", icon: "/assets/images/tech/atom 3.svg" },
  { name: "Node.js", icon: "/assets/images/tech/programing 3.svg" },
];

const saasFaqs = [
  {
    question: "What is SaaS development?",
    answer:
      "SaaS (Software as a Service) development involves creating software applications that are hosted online and available to users on a subscription basis.",
  },
  {
    question: "Why should I consider building a SaaS product?",
    answer:
      "SaaS products offer scalability, flexibility, and lower upfront costs compared to traditional software. They also provide continuous updates and can be accessed from any device.",
  },
  {
    question: "How long does it take to develop a SaaS product?",
    answer:
      "The timeline depends on your product’s complexity. On average, it takes several months to build a fully functional, scalable SaaS application.",
  },
  {
    question: "Can you help me with SaaS product idea validation?",
    answer:
      "Yes, we help you validate your SaaS idea through market research, user feedback, and prototype development to ensure your product has market potential.",
  },
  {
    question: "What technologies do you use for SaaS development?",
    answer:
      "We use modern technologies like React, Node.js, Python, AWS, and Docker to build secure, scalable, and reliable SaaS products.",
  },
  {
    question: "Do you offer SaaS product maintenance and support?",
    answer:
      "Yes, we provide ongoing support and maintenance to ensure your SaaS application remains up-to-date and performs optimally.",
  },
  {
    question: "Can I customize my SaaS application?",
    answer:
      "Absolutely! Our SaaS products are designed with customization in mind to meet your specific business needs and user requirements.",
  },
  {
    question: "Is SaaS secure?",
    answer:
      "Yes, we implement high-level security features such as encryption, user authentication, and regular updates to ensure your SaaS application is secure.",
  },
  {
    question: "How do you handle user data in SaaS development?",
    answer:
      "We follow best practices for data protection, ensuring user privacy and compliance with data security regulations such as GDPR.",
  },
  {
    question: "Can you help with the deployment of my SaaS product?",
    answer:
      "Yes, we assist with the seamless deployment of your SaaS application, ensuring smooth launch and integration with existing systems.",
  },
];

export const metadata = {
  title: "SaaS Application Development Service | WayOne",
  description:
    "WayOne offers expert SaaS application development services to deliver scalable, secure, and customizable cloud-based solutions tailored to your business needs.",
  metadataBase: new URL("https://wayone.co.in/services/saas-development/"),
};

export default function page() {
  return (
    <div className="bg-white">
      <ContactHeroSection {...dynamicData} />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <SaasServices
          subtitle="Our SaaS Development Services"
          title="Complete SaaS Development Solutions: Scalable, Secure, and Customised to Your Business Needs"
          description="We provide a complete range of SaaS development services that are future-proof, scalable, and secure, allowing your business to remain competitive in today's digital economy. Our strategy ensures robust performance, flexibility, and efficiency."
          services={saasservicesData}
        />
        <BlockChainProcessSection
          subtitle="Our Saas Development Process"
          title="A Simple, Effective Approach to SaaS Development: From Concept to Launch"
          description="We implement a structured yet agile SaaS development process ensuring smooth product development, scaling, and deployment. Every step is meant to build a high-quality SaaS product in accordance with your business objectives."
          steps={steps}
        />
        <SaasTechnologiesSection
          subtitle="Technologies We Use"
          title="Technologies We Use"
          description="We use the latest technologies and frameworks to build scalable, secure, and high-performance SaaS applications. Our tech stack ensures robust, future-proof solutions that meet your business’s growing needs."
          technologies={technologies}
        />
      </div>

      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <PartnerWithUsSection />
        <FaqSection faqsData={saasFaqs} />
      </div>
    </div>
  );
}
