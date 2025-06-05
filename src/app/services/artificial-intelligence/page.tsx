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
  title: " Building the Future of Business with Advanced,",
  heiglight: "Scalable AI Development",
  shortDesc: "Custom, Scalable & High-Performance App Solutions",
  description:
    "Customised AI apps designed for performance, growth, and intelligent automation for all industries",
  ctaText: "Start Your Project",
  ctaLink: "#contact",
  subheading: "Artificial Development Services – Wayone",
};

const aiservices = [
  {
    icon: "/assets/images/icon/ai1.png",
    title: "Machine Learning",
    description:
      "Machine learning allows systems to learn automatically from data, adjust to new patterns, and make decisions based on data. It assists companies in enhancing accuracy, automating tasks, and providing insights that optimize performance and growth continuously.",
    delay: 100,
  },
  {
    icon: "/assets/images/icon/ai2.png",
    title: "Natural Language Processing",
    description:
      "Natural Language Processing (NLP) enables machines to understand, interpret, and generate human language. It enhances chatbots, sentiment analysis, voice assistants, and automated content generation, creating smooth and efficient communication between machines and humans.",
    delay: 200,
  },
  {
    icon: "/assets/images/icon/ai3.png",
    title: "Business Intelligence",
    description:
      "Business Intelligence (BI) translates raw data into actionable information. Through the process of analyzing trends in data, BI tools assist organizations in making data-driven decisions, strategic planning, optimizing the efficiency of operations, and pushing growth, yet boosting competitiveness within the market.",
    delay: 300,
  },
  {
    icon: "/assets/images/icon/ai4.png",
    title: "Generative AI",
    description:
      "Generative AI utilizes sophisticated algorithms to produce novel content, designs, and solutions. From creating text and images to generating synthetic data, it creates avenues for innovation, automation, and creativity in industries such as marketing, design, and entertainment.",
    delay: 400,
  },
  {
    icon: "/assets/images/icon/ai5.png",
    title: "Chatbot Applications",
    description:
      "Chatbots based on AI automate customer support, respond to queries, and improve user experience. They provide 24/7 service, simplify communication, and deliver personalized experiences, thereby improving customer satisfaction.",
    delay: 500,
  },
  {
    icon: "/assets/images/icon/ai6.png",
    title: "AI Powered Apps",
    description:
      "AI-powered applications combine machine learning and intelligent automation to improve business functionality. These apps automate processes, analyze data, forecast trends, and enhance decision-making, making businesses more agile, innovative, and responsive to market needs.",
    delay: 600,
  },
];

const aiprocessSteps = [
  {
    title: "Discover",
    description:
      "We dive deep into your objectives, data, and market requirements to determine the proper AI direction and scope.",
    number: 1,
    delay: 100,
  },
  {
    title: "Design",
    description:
      "We design intelligent, user-focused AI solutions with attention to flexibility, scalability, and performance.",
    number: 2,
    delay: 200,
  },
  {
    title: "Proof of Concept",
    description:
      "An operational prototype is created to ensure functionality, model accuracy, and business effectiveness.",
    number: 3,
    delay: 300,
  },
  {
    title: "Implementation",
    description:
      "We deploy, integrate, and refine your AI solution while ensuring ongoing support and performance monitoring.",
    number: 4,
    delay: 400,
  },
];

const aiFaqs = [
  {
    question: "What is AI development?",
    answer:
      "AI development involves creating systems that can perform tasks that usually require human intelligence, such as machine learning, data analysis, and natural language processing.",
  },
  {
    question: "How can AI help my business?",
    answer:
      "AI can automate tasks, improve decision-making, enhance customer experiences, and optimize operations, leading to increased efficiency and productivity.",
  },
  {
    question: "What types of AI applications do you develop?",
    answer:
      "We specialize in building machine learning models, chatbots, predictive analytics, recommendation engines, and more tailored to your business needs.",
  },
  {
    question: "How long does it take to develop an AI solution?",
    answer:
      "The timeline depends on the complexity of the solution. A simple AI model might take a few weeks, while more complex systems can take several months.",
  },
  {
    question: "Do you provide ongoing support for AI solutions?",
    answer:
      "Yes, we offer maintenance and support to ensure your AI system stays up-to-date and continues to perform optimally.",
  },
  {
    question: "What industries can benefit from AI?",
    answer:
      "AI can benefit industries such as healthcare, finance, retail, manufacturing, logistics, and more by automating processes and providing actionable insights.",
  },
  {
    question: "Do I need a large dataset to build AI models?",
    answer:
      "While a large dataset is ideal for training accurate AI models, we can work with smaller datasets and use techniques like transfer learning to make the most of available data.",
  },
  {
    question: "How do you ensure the AI system is accurate?",
    answer:
      "We use rigorous testing and validation processes to ensure AI systems are accurate, reliable, and meet your business requirements.",
  },
  {
    question: "Is AI development expensive?",
    answer:
      "The cost of AI development varies based on complexity. We work to provide cost-effective solutions, optimizing performance while staying within budget.",
  },
  {
    question: "Can AI be integrated with my existing systems?",
    answer:
      "Yes, we can integrate AI with your existing infrastructure, whether it's an app, website, or business process, to enhance functionality and performance.",
  },
];


export const metadata = {
  title: "Artificial Intelligence Development Services | AI Software",
  description:
    "We offer the best artificial intelligence software development services, from data preparation for AI algorithms to system deployment to thousands of users.",
  metadataBase: new URL("https://wayone.co.in/services/artificial-intelligence/"),
};

export default function page() {
  return (
    <div className="bg-white">
      <ContactHeroSection {...dynamicData} />
      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <AIServiceSection
          subtitle="Our Artificial Development Services"
          heading="Build AI That Thinks, Learns, and Scales With Your Vision"
          description="We transform ideas into smart AI products that solve problems and provide measurable outcomes."
          services={aiservices}
        />
        <AIProcessSection
          subtitle="Our Artificial Development Process"
          title="From Concept to Code: A Smarter Path to Scalable AI Solutions"
          description="A collaborative, end-to-end process that guarantees every AI solution is secure, relevant, and future-proof."
          steps={aiprocessSteps}
        />
      </div>

      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <IndustriesSection />
        <PartnerWithUsSection />
        <FaqSection faqsData={aiFaqs} />
      </div>
    </div>
  );
}
