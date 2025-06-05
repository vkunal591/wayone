import FaqSection from "@/app/components/common/FaqSection";
import React from "react";
import ContactHeroSection from "../web-development/components/ContactSection";
import TechnologiesSection from "../web-development/components/TechnologySection";
import WhyChooseUsSection from "../web-development/components/WhyChooseSection";
import IndustriesSection from "../web-development/components/IndustriesSection";
import AIServiceSection from "./components/AIServiceSection";
import AIProcessSection from "./components/AIProcessSection";
import PartnerWithUsSection from "@/app/components/PartnerWithUsSection";

const dynamicData = {
  title: "Build the Future with Powerful, Custom API Development Service",
  heiglight: " ",
  shortDesc: "Fast, Reliable, and Scalable Solutions for Your Business Needs",
  description:
    "We deliver bespoke APIs that streamline integration's, ensuring secure, real-time performance for SaaS, ECommerce, and mobile applications",
  ctaText: "Start Your Project",
  ctaLink: "#contact",
  subheading: "API Development Services – Wayone",
};

const aiservices = [
  {
    icon: "bi bi-gear",
    title: "Social Networking API Integration",
    description:
      "Tap the power of the social web with secure platform integration of Facebook, Twitter, Instagram, and LinkedIn. We make it easy for your app to take advantage of features such as user login, sharing of content, and analytics tracking to facilitate engagement and individualized user experiences — all via clean, scalable APIs.",
    delay: 100,
  },
  {
    icon: "bi bi-gear",
    title: "Payment API Integration",
    description:
      "We simplify online payments by integrating trusted gateways like Stripe, Razorpay, and PayPal. Our secure payment API integrations feature one-time and recurring transaction support, subscriptions, invoices, refunds, and multi-currency processing — all for regulatory compliance and fast checkouts of your users",
    delay: 200,
  },
  {
    icon: "bi bi-gear",
    title: "Shipping API Integration",
    description:
      "Automate order fulfilment with carrier direct integrations like FedEx, Blue Dart, and Delhivery. Our shipping API products offer automated rate calculation, real-time tracking, print label, and delivery status updates — reducing time and enhancing customer satisfaction.",
    delay: 300,
  },
];

const aiprocessSteps = [
  {
    title: "01. Design",
    description:
      "Define endpoints, protocols, and architecture to support app goals and scalability.",
    number: 1,
    delay: 100,
    image: "/assets/images/icon/ux-design.png",
  },
  {
    title: "02. Development",
    description:
      "Code secure, optimized APIs using REST, GraphQL, or custom standards.",
    number: 2,
    delay: 200,
    image: "/assets/images/icon/front.png",
  },
  {
    title: "03. Testing",
    description:
      "Run stress, security, and functional tests to ensure smooth  performance",
    number: 3,
    delay: 300,
    image: "/assets/images/icon/software2.png",
  },
  {
    title: "04. Launch",
    description:
      "Deploy, document, and support seamless integration into your digital ecosystem.",
    number: 4,
    delay: 400,
    image: "/assets/images/icon/launch.png",
  },
];

const apiFaqs = [
  {
    question: "What is API development?",
    answer:
      "API development involves creating Application Programming Interfaces (APIs) that enable software applications to communicate and share data with each other.",
  },
  {
    question: "Why do I need APIs for my business?",
    answer:
      "APIs enable seamless integration between systems, enhance functionality, and help automate workflows, improving efficiency and reducing errors.",
  },
  {
    question: "What types of APIs do you develop?",
    answer:
      "We develop RESTful APIs, GraphQL APIs, SOAP APIs, and custom APIs, each tailored to meet the specific needs of your business.",
  },
  {
    question: "Can APIs improve my existing systems?",
    answer:
      "Yes, APIs can integrate your existing software with new tools, services, or platforms, improving functionality and data exchange.",
  },
  {
    question: "Are APIs secure?",
    answer:
      "We implement robust security protocols, such as encryption, token authentication, and access controls, to ensure that your APIs are secure and protected from unauthorized access.",
  },
  {
    question: "How long does it take to develop an API?",
    answer:
      "The development time depends on the complexity of the API. Simple APIs can be built in a few weeks, while more complex ones may take a couple of months.",
  },
  {
    question: "Can you help integrate APIs with third-party systems?",
    answer:
      "Yes, we specialize in integrating APIs with third-party applications, services, and platforms to enhance functionality and streamline operations.",
  },
  {
    question: "What technologies do you use for API development?",
    answer:
      "We use technologies like Node.js, Express.js, Python, and GraphQL to develop robust, scalable, and high-performance APIs.",
  },
  {
    question: "Do you provide ongoing API maintenance and updates?",
    answer:
      "Yes, we offer continuous support and maintenance to ensure that your APIs stay updated and function smoothly.",
  },
  {
    question: "Can I track API usage and performance?",
    answer:
      "Yes, we implement monitoring tools that allow you to track API usage, performance, and error logs to ensure optimal functionality.",
  },
];

export const metadata = {
  title: "Professional API Development & Integration Services",
  description:
    "End-to-end API development services. ROI-driven custom APIs to personalize UX and simplify company workflows. Get fully functional APIs in just ~8 weeks!",
  metadataBase: new URL("https://wayone.co.in/services/api-development/"),
};

export default function page() {
  return (
    <div className="bg-white">
      <ContactHeroSection {...dynamicData} />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <AIServiceSection
          subtitle="Our API Development Services"
          heading="API Development Services Built Around Your Tech Stack"
          description="We do not think in terms of one-size-fits-all APIs. For each solution we create Customised API to suit your application structure, purpose, and expansion strategy. Our APIs operate in the background to accelerate your apps, make them smarter, and easier to scale."
          services={aiservices}
        />
        <AIProcessSection
          subtitle="Our Artificial Development Process"
          title="From Initial Concept to"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          steps={aiprocessSteps}
        />
      </div>

      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <IndustriesSection />

        <PartnerWithUsSection />
        <FaqSection faqsData={apiFaqs} />
      </div>
    </div>
  );
}
