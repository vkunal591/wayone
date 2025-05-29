import FaqSection from "@/app/components/common/FaqSection";
import React from "react";
import ContactHeroSection from "../web-development/components/ContactSection";
import TechnologiesSection from "../web-development/components/TechnologySection";
import WhyChooseUsSection from "../web-development/components/WhyChooseSection";
import IndustriesSection from "../web-development/components/IndustriesSection";
import AIServiceSection from "./components/UIUXServiceSection";
import AIProcessSection from "./components/UIUXProcessSection";
import UIUXServicesSection from "./components/UIUXServiceSection";
import UIUXProcessSection from "./components/UIUXProcessSection";
import PartnerWithUsSection from "@/app/components/PartnerWithUsSection";

const dynamicData = {
  title: "UI/UX Design Services That Feels Right, ",
  heiglight: "Looks Great & Works Perfectly",
  shortDesc: "Intuitive designs that make your users stay, engage, and convert",
  description:
    "We don't just create interfaces — we craft digital experiences that are simple and gorgeous. Our UI/UX design services  revolves around user action, intuitive interaction, and visual elegance. Be it a website, web application, or mobile app, we build products that are user-oriented, brand-tuned, and scaling-ready",
  ctaText: "Start Your Project",
  ctaLink: "#contact",
  subheading: "UI/UX Designing Services – Wayone",
};

const services = [
  {
    icon: "bi-gear",
    title: "UI/UX Design Consulting",
    description:
      "Our guidance helps define the best design strategy for your product. We combine user research, market knowledge, and design thinking to pair your goals with what your users truly need—offering a roadmap to improve usability, boost retention, and add clarity to all interface interactions",
    delay: 100,
    image: "/assets/images/icon/ux.png",
  },
  {
    icon: "bi-gear",
    title: "Wireframing & Prototyping",
    description:
      "Turn your concepts into working visuals with our wireframing and prototyping services. We define user flows, screen layouts, and core actions with accuracy—enabling you to test, refine, and iterate your product early on, before a line of code is written.",
    delay: 200,
    image: "/assets/images/icon/prototype.png",
  },
  {
    icon: "bi-gear",
    title: "Web App UX/UI Design",
    description:
      "We develop high-performance web applications with intuitive navigation, modern layouts, and responsive design. Our solutions streamline tedious workflows, increase productivity, and provide a uniform experience across devices—perfect for SaaS platforms, dashboards, and bespoke web software",
    delay: 300,
    image: "/assets/images/icon/uiux.png",
  },
  {
    icon: "bi-gear",
    title: "Mobile App UX/UI Design",
    description:
      "From Android to iOS, we craft mobile apps that look and feel native. Our mobile-first design methodology provides intuitive flows, clear calls to action, and optimized visual design—so your app is easy to use, stunning to behold, and adored by users",
    delay: 400,
    image: "/assets/images/icon/software.png",
  },
  {
    icon: "bi-gear",
    title: "Website Design",
    description:
      "We build websites that reflect your brand and drive action. Clean, intentional, and responsive designs lead users smoothly from interest to conversion. Whether landing pages or entire-business sites, we build digital touchpoints that leave lasting impressions",
    delay: 500,
    image: "/assets/images/icon/front.png",
  },
  {
    icon: "bi-gear",
    title: "Responsive Design",
    description:
      "One design, every screen. Our responsive design approach ensures your platform looks sharp and works perfectly on desktops, tablets, and smartphones. We focus on flexible grids, fast load times, and seamless transitions—so your users have a consistent experience wherever they go. ",
    delay: 600,
    image: "/assets/images/icon/responsive.png",
  },
];

const steps = [
  {
    icon: "bi-lightbulb",
    title: "01. Ideation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 100,
    image: "/assets/images/icon/idea.png",
  },
  {
    icon: "bi-palette",
    title: "02. UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 200,
    image: "/assets/images/icon/ux-design.png",
  },
  {
    icon: "bi-code-slash",
    title: "03. Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 300,
    image: "/assets/images/icon/software2.png",
  },
  {
    icon: "bi-bug",
    title: "04. Testing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 400,
    image: "/assets/images/icon/online.png",
  },
];

export default function page() {
  return (
    <div className="bg-white">
      <ContactHeroSection {...dynamicData} />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <UIUXServicesSection
          subtitle="Our UI/UX Designing Services"
          title="Intuitive & Impactful UI/UX Design Services for Every Digital Touch point"
          description="Whether you are a startup or an enterprise, we make your product vision real in clean, intelligent, and user-centered design."
          services={services}
        />
        <UIUXProcessSection
          subtitle="Our UI/UX Designing Process"
          title="From Initial Concept to Seamless  Deployment"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          steps={steps}
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
