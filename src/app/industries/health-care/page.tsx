import HeaderSection from "@/app/components/common/HeaderSection";
import HeroSection from "@/app/components/common/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeHaveDone from "./components/WhatWeHaveDone";
import AIProcessSection from "@/app/services/api-development/components/AIProcessSection";
import { FaRocket, FaCogs, FaCheckCircle } from "react-icons/fa";
import GradietIconCard from "./components/GradietIconCard";
import IconCard from "./components/IconCard";
import ContactSection from "@/app/components/ContactSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import AboutSection from "./components/WhoWeAre";
const aiprocessSteps = [
    {
        title: 'Data Security & Privacy',
        description: 'Protecting patient data is paramount within the health sector. Encrypted data security, access control, and compliance with international healthcare regulations must be adopted to maintain patient privacy, trust, and compliance in digital care that use sensitive information.',
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Mobile Health',
        description: 'Mobility with reliable and established mHealth apps, accessibility using synced data and shoulder experience for patient-centered, expensive and accessible digital care devices and notes and for sustainability by professionals of digital care.',
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Personalized Healthcare',
        description: "Technology advantages (using AI, analytics) compares value to traditional health choices and when used as an innovative, predictable operational tool for Health care delivery over a patient's pathway experience.",
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];




export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Smart Healthcare IT Solutions to ultimately "} title2={"provide better Patient Care"} description={"Our smart and scalable healthcare IT Solutions increases patient care, smooth clinical workflows and makes data-driven decisions better for news, hospitals, clinics, and wellness centers."} />
                <WhoWeAre
                    imageSrc="/assets/images/whoweare.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Smart"
                    highlightedText="Health & Fitness Software Solutions"
                    paragraphs={[
                        "Wayone builds engaging, sophisticated, advanced digital health and fitness platforms designed for clinical objectives and lifestyle choices. Smooth integration and real time tracking with personalized user experiences allows clients to utilize our services for outstanding impact.",
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

            </div>
            <WhatWeHaveDone />
            <div className="max-w-7xl m-auto px-4 lg:px-16">
                <GradietIconCard
                    subtitle="Healthcare Industries Challenges"
                    title="Key Challenges in the "
                    highlight="Healthcare Industry"
                    description="Solving tomorrow's health issues today with technology led solutions specific for realistic health-related challenges."
                    steps={aiprocessSteps}
                />

         
                <TestimonialsSection />
                <ContactSection />
            </div>

        </div>
    )
}
