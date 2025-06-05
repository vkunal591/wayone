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

const webFaq = [
  {
    question: "What is web development?",
    answer:
      "Web development refers to the process of creating and maintaining websites, involving both the front-end (user interface) and back-end (server-side) development to ensure functionality and performance.",
  },
  {
    question: "Why is web development important for my business?",
    answer:
      "A well-developed website is essential for a strong online presence, improved user experience, and reaching a larger audience, ultimately driving growth and revenue.",
  },
  {
    question: "What types of websites do you develop?",
    answer:
      "We specialize in developing eCommerce websites, corporate websites, landing pages, blogs, and more, each tailored to your business needs.",
  },
  {
    question: "Do you offer responsive web design?",
    answer:
      "Yes, all our websites are designed to be responsive, ensuring they perform seamlessly across desktops, tablets, and mobile devices.",
  },
  {
    question: "Can you help redesign my existing website?",
    answer:
      "Absolutely! We can redesign your website to enhance its visual appeal, functionality, and user experience, making it more competitive and engaging.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use a variety of technologies such as HTML5, CSS3, JavaScript, React, Node.js, and PHP, depending on your project requirements.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on the complexity of the project. A simple website might take a few weeks, while more complex projects like eCommerce sites could take a few months.",
  },
  {
    question: "Do you offer SEO services for websites?",
    answer:
      "Yes, we provide SEO optimization during the development process to ensure your website ranks well on search engines, improving visibility and traffic.",
  },
  {
    question: "Will my website be secure?",
    answer:
      "Yes, we implement industry-standard security measures, including SSL encryption, regular updates, and security audits to ensure your website is secure from threats.",
  },
  {
    question: "Can you integrate third-party services with my website?",
    answer:
      "Yes, we offer integration with various third-party tools, such as payment gateways, CRMs, email marketing platforms, and social media APIs.",
  },
];

export const metadata = {
  title: "Web Design & Development Services Company | WayOne",
  description:
    "WayOne, a leading web design and development company offers creative, responsive, and user-friendly websites for your business online. Contact us today!",
  metadataBase: new URL("https://wayone.co.in/services/web-development/"),
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
        <FaqSection faqsData={webFaq} />
      </div>
    </div>
  );
}
