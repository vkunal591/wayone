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

const digitalFaqs =[
  {
    "question": "What is digital marketing?",
    "answer": "Digital marketing refers to using online platforms, tools, and strategies to promote products or services, increase brand awareness, and drive traffic and sales."
  },
  {
    "question": "Why is digital marketing important for my business?",
    "answer": "Digital marketing allows you to reach a larger, more targeted audience at a fraction of the cost of traditional marketing, leading to higher ROI."
  },
  {
    "question": "What digital marketing services do you offer?",
    "answer": "We offer SEO, PPC, social media marketing, email marketing, content marketing, and more to drive traffic, engage users, and increase conversions."
  },
  {
    "question": "How long does it take to see results from digital marketing?",
    "answer": "The timeframe varies based on the strategy. SEO results may take months, while PPC and social media campaigns can show results within weeks."
  },
  {
    "question": "Do you provide custom digital marketing strategies?",
    "answer": "Yes, we tailor our digital marketing strategies based on your goals, industry, and target audience to ensure maximum impact."
  },
  {
    "question": "How do you measure the success of digital marketing campaigns?",
    "answer": "We use analytics tools to track KPIs like website traffic, conversion rates, engagement, and ROI to assess the success of your campaigns."
  },
  {
    "question": "Can digital marketing help my business rank higher on search engines?",
    "answer": "Yes, through SEO, we optimize your website to rank higher on search engines, increasing visibility and driving organic traffic."
  },
  {
    "question": "What platforms do you use for digital marketing?",
    "answer": "We use a variety of platforms, including Google Ads, Facebook, Instagram, LinkedIn, and others, depending on your audience and goals."
  },
  {
    "question": "Do you offer content marketing services?",
    "answer": "Yes, we create and distribute high-quality content that resonates with your audience, drives engagement, and boosts conversions."
  },
  {
    "question": "Can you help with online reputation management?",
    "answer": "Yes, we help businesses monitor and improve their online reputation by managing reviews, feedback, and customer interactions."
  }
]

export const metadata = {
  title: "Digital Marketing Services - Affordable for Small Business",
  description:
    "Affordable digital marketing services for small businesses. Boost your online presence with SEO, social media & more. Get started with us today!",
  metadataBase: new URL("https://wayone.co.in/services/digital-marketing/"),
};

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
        <FaqSection faqsData={digitalFaqs} />
      </div>
    </div>
  );
}
