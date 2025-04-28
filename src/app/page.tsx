import Image from "next/image";
import HeroSection from "./components/common/HeroSection";
import FeatureCards from "./components/FeatureCards";
import AboutSection from "./components/AboutSection";
import OurWork from "./components/OurWork";
import TechnologySection from "./components/TechnologySection";
import IndustriesSection from "./components/IndustriesSection";
import PartnerWithUsSection from "./components/PartnerWithUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import AddressSection from "./components/AddressSection";

const featuresData = [
  {
    title: "Web Development",
    description:
      "We specialize in building and maintaining responsive, user-friendly websites that ensure functionality and optimal user experience. Our expertise spans both front-end and back-end development, delivering seamless, high-performance solutions.",
    iconSrc: "/assets/images/icon/service1.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 100,
  },
  {
    title: "App Development",
    description:
      "From intuitive mobile applications to robust enterprise solutions, we create custom apps designed for superior performance, scalability, and real-time functionality tailored to your specific requirements.",
    iconSrc: "/assets/images/icon/mobile-development 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 200,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Leverage the power of AI to automate processes, analyze data, and make smarter decisions, helping your business stay ahead in today’s competitive market.",
    iconSrc: "/assets/images/icon/artificial-intelligence 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 300,
  },
  {
    title: "SaaS Development",
    description:
      "Our custom Software-as-a-Service (SaaS) solutions improve operational efficiency, automate workflows, and offer scalable options to meet your business’s evolving needs.",
    iconSrc: "/assets/images/icon/saas 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 400,
  },
  {
    title: "UI/UX Designing",
    description:
      "We craft visually appealing and intuitive interfaces that elevate user experiences, ensuring your digital platforms are not only functional but also aesthetically engaging.",
    iconSrc: "/assets/images/icon/ux 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 600,
  },
  {
    title: "Digital Marketing",
    description:
      "We drive targeted traffic, boost brand visibility, and deliver measurable results with strategies like SEO, SEM, content marketing, and social media management.",
    iconSrc: "/assets/images/icon/megaphone 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 600,
  },
  {
    title: "CRM Development",
    description:
      "We design customized CRM systems that streamline customer interactions, enhance satisfaction, and help businesses build long-lasting relationships with their clients.",
    iconSrc: "/assets/images/icon/customer 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 700,
  },
  {
    title: "ERP Management",
    description:
      "Our ERP solutions integrate core business functions, improving efficiency, decision-making, and providing real-time insights to help your business grow.",
    iconSrc: "/assets/images/icon/gear 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 800,
  },
];

export default function Home() {
  return (
    <div className="mt-[6rem]">
      <HeroSection />
      <div className="p-4 lg:px-16 bg-white">
        <FeatureCards features={featuresData} />
        <AboutSection />
        <OurWork />
        <TechnologySection />
        <IndustriesSection />
        <PartnerWithUsSection />
        <TestimonialsSection />
        <ContactSection />
        <AddressSection />
      </div>
    </div>
  );
}
