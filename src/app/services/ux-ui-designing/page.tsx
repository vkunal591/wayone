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
      "We start by understanding your business goals, user behavior, and key challenges. Through workshops, user research, and market insights, we gather everything needed to build a design strategy that’s both practical and powerful",
    delay: 100,
    image: "/assets/images/icon/idea.png",
  },
  {
    icon: "bi-palette",
    title: "02. UI/UX Design",
    description:
      "Our designers translate insights into intuitive user flows, wireframes, and high-fidelity visuals. We focus on usability, accessibility, and aesthetics—creating experiences that look stunning and feel effortless across every screen",
    delay: 200,
    image: "/assets/images/icon/ux-design.png",
  },
  {
    icon: "bi-code-slash",
    title: "03. Development",
    description:
      "We deliver clean, developer-friendly design systems and assets, ensuring smooth handoff to your tech team. Whether you're using in-house or external developers, our UI kits and guidelines make execution smooth",
    delay: 300,
    image: "/assets/images/icon/software2.png",
  },
  {
    icon: "bi-bug",
    title: "04. Testing",
    description:
      "Before launch, we validate every interaction through usability testing, feedback loops, and iterative refinements. We fix gaps, enhance experience, and ensure that the final product performs flawlessly for real users",
    delay: 400,
    image: "/assets/images/icon/online.png",
  },
];

const uiuxfaqs=[
  {
    "question": "What is UI/UX development?",
    "answer": "UI/UX development focuses on designing the user interface (UI) and user experience (UX) to ensure that a product is not only visually appealing but also easy to use."
  },
  {
    "question": "Why is UI/UX important for my app or website?",
    "answer": "A well-designed UI/UX improves user engagement, retention, and satisfaction, which directly impacts your business’s success."
  },
  {
    "question": "What is the difference between UI and UX design?",
    "answer": "UI design focuses on the visual aspects of a product (buttons, colors, layout), while UX design focuses on the overall user experience and functionality."
  },
  {
    "question": "Can you help improve the user experience of my existing website or app?",
    "answer": "Yes, we offer UI/UX redesign services to enhance the usability, aesthetics, and functionality of your existing digital products."
  },
  {
    "question": "How do you approach UI/UX design?",
    "answer": "Our process involves user research, wireframing, prototyping, and user testing to ensure that the final design is both beautiful and functional."
  },
  {
    "question": "Do you offer mobile-first design?",
    "answer": "Yes, we design with a mobile-first approach, ensuring that your app or website performs flawlessly on mobile devices before scaling to larger screens."
  },
  {
    "question": "How do you ensure the usability of the design?",
    "answer": "We conduct usability testing with real users, gather feedback, and make data-driven design decisions to optimize user interactions."
  },
  {
    "question": "What tools do you use for UI/UX design?",
    "answer": "We use industry-leading tools like Figma, Sketch, Adobe XD, and InVision for designing and prototyping user interfaces."
  },
  {
    "question": "How do you measure the success of UI/UX designs?",
    "answer": "We use analytics, user feedback, and A/B testing to assess the effectiveness of our designs in terms of usability, engagement, and conversion rates."
  },
  {
    "question": "Can you redesign my website or app from scratch?",
    "answer": "Yes, we can completely overhaul your digital products, focusing on both visual appeal and optimal user experience to ensure the best possible results."
  }
]

export const metadata = {
  title: "Best UI UX Design Company in India | WayOne IT Solutions",
  description:
    "WayOne is a UI UX Design Company in Delhi, India. We create user-friendly interfaces and experiences for digital products such as websites and mobile apps.",
  metadataBase: new URL("https://wayone.co.in/services/ux-ui-designing/"),
};


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
          title="Where Ideas Meet Interface – Our Proven Design Process"
          description="Our UI/UX design services blends with a process of strategy, creativity, and collaboration to transform raw ideas into visually compelling, user-friendly digital experiences that are built to perform and scale across platforms."
          steps={steps}
        />
      </div>

      <div className="max-w-7xl m-auto p-4 lg:px-16">
        <IndustriesSection />
        <PartnerWithUsSection />
        <FaqSection faqsData={uiuxfaqs} />
      </div>
    </div>
  );
}
