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
      "We offer end-to-end web, app, and enterprise tech solutions that drive digital growth. Our services guarantee performance, security, and smooth user experience across platforms, customized to your business requirements.",
    iconSrc: "/assets/images/icon/service1.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 100,
    link: "/web-development"
  },
  {
    title: "App Development",
    description:
      "From native to cross-platform apps, we create user-centric mobile apps with Flutter, Kotlin, and Swift. Our apps deliver smooth UI, fast loading, and enterprise-level functionality to drive maximum digital mobility for your users.",
    iconSrc: "/assets/images/icon/mobile-development 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 200,
    link: "/services/app-development"
  },
  {
    title: "Artificial Intelligence",
    description:
      "We use AI-driven solutions like chatbots, predictive analytics, and recommendation engines to automate processes, personalize user experiences, and enhance operational efficiency across business functions.",
    iconSrc: "/assets/images/icon/artificial-intelligence 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 300,
    link: "/services/artificial-intelligence"
  },
  {
    title: "SaaS Development",
    description:
      "Our team constructs multi-tenant architecture, subscription billing-integrated, cloud-native-deployed SaaS products that are secure and scalable, providing high availability, easy maintenance, and seamless performance for successful growing software companies.",
    iconSrc: "/assets/images/icon/saas 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 400,
    link: "/services/saas-development"
  },
  {
    title: "UI/UX Designing",
    description:
      "We create intuitive and visually appealing UI/UX designs with a focus on usability, accessibility, and interaction flow. Our design process ensures high engagement and conversion across all platforms and screen sizes.",
    iconSrc: "/assets/images/icon/ux 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 600,
    link: "/services/ux-ui-designing"
  },
  {
    title: "Digital Marketing",
    description:
      "We provide performance-oriented digital marketing services such as SEO, PPC, content marketing, and social media management. Our strategies increase online visibility, drive qualified traffic, and business growth that can be measured",
    iconSrc: "/assets/images/icon/megaphone 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 600,
    link: "/services/digital-marketing"
  },
  {
    title: "BlockChain Development",
    description:
      "We provide decentralized blockchain application development for sectors such as fintech, logistics, and healthcare. Our services involve smart contract development, DApps, and tokenization on Ethereum, Polygon, and other secure platforms.",
    iconSrc: "/assets/images/icon/gear 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 800,
    link: "/services/blockchain-development"
  },
  {
    title: "API Development",
    description:
      "We develop secure, strong, and Restful APIs for smooth communication between your systems and third-party services. Our APIs provide real-time data flow, strong authentication, and high scalability across platforms.",
    iconSrc: "/assets/images/icon/programmer 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 700,
    link: "/services/api-development"
  },
  {
    title: "CRM Development",
    description:
      "We create bespoke CRM solutions to automate customer management, sales pipelines, and integrate with your current systems. Our CRMs are secure, scalable, and customized for your business processes.",
    iconSrc: "/assets/images/icon/customer 2.png",
    buttonText: "Learn more",
    bgColor: "bg-gray-50",
    delay: 700,
    link: "/services/crm-development"
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection client={true} awardShow={true} primaryLinkTitle={"What We Do"} primaryLink={"/our-work"} secondaryLinkTitle={"View More"} secondaryLink={"/about-us"} />
      <div className="max-w-7xl m-auto p-4 lg:px-16 bg-white">
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
