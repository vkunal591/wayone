import HeaderSection from "@/app/components/common/HeaderSection";
import HeroSection from "@/app/components/common/HeroSection";
import ContactSection from "@/app/components/ContactSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import { FaRocket, FaCogs, FaCheckCircle } from "react-icons/fa";
import GradietIconCard from "../health-care/components/GradietIconCard";
import IconCard from "../health-care/components/IconCard";
import WhatWeHaveDone from "../health-care/components/WhatWeHaveDone";
import WhoWeAre from "../health-care/components/WhoWeAre";
import OurWork from "@/app/components/OurWork";
import PortfolioSection from "../finance-banking/components/PortfolioSection";
const aiprocessSteps = [
    {
        title: 'Ideation',
        description: 'The beginning of the process begins with clearly understood academic purposes, user types and delivery model of your institution. We will collaboratively construct a techno diversity road map to achieve the learner outcomes, assist managerial roles with management and create a platform that can dynamically accommodate the changes dictated by education.',
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Development',
        description: 'We will construct strong, scalable platforms with infinite abilities for content management, assessments, tracking students, embedding video content and analytics. Each module will be constructed to have accessibility, performance and security features that meet data privacy and all device and browser types.',
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Deployment',
        description: 'As a result of extensive testing, your solution will be deployed with as little disruption for the users as possible. We will also construct the trainer, documentation and resources for educators and managers so that everyone is confident and ready to transition your platform, while knowing that it will grow with the institutions needs.',
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];


const portfolioData = [
    {
        title: "Hebrew Academy",
        description:
            "Hebrew Academy teaches the Hebrew language through expert-led classes, helping learners build strong language skills for academic, cultural, or religious purposes in a structured and supportive environment.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/hebrewacad.png",
        link: "/contact-us",
    },
];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Revolutionizing Learning for  "} title2={"the Digital Age"} description={"Enable learning that is immersive, elastic and tech-enabled across platforms for educational institutions, universities, and online education providers. From the digital classroom to AI-enabled learning analytics, we partner with institutions to increase the quality of teaching, improve operations, and deliver engaging educational experiences across platforms and formats."} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/realestate.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Revolutionizing Learning Experiences for  "
                    highlightedText="a Digital-First Future."
                    paragraphs={[
                        "At Wayone, we develop made-to-order custom educational platforms that create an easier experience between educators and learners. From custom LMS, live class to exam automation - we build tailored solutions that are then adopted by institutions to successfully scale, engage and develop the future of digital education.",
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

                <PortfolioSection
                    sectionTitle="Delivering Results for"
                    highlightedText=" Classrooms and Campuses"
                    sectionDescription="Learn about the ways our education solutions have supported institutions to enhance access, engagement and operational efficiencies at scale. "
                    portfolioItems={portfolioData}
                    classNames={{
                        section: "",
                        heading: "mb-12",
                        headingTitle: "text-5xl text-black",
                        highlighted: "text-red-600",
                        description: "text-md text-white",
                        tag: "bg-white/20 text-white",
                        button: "bg-white hover:bg-white/90 text-primary button-seondary font-medium",
                        image: "",
                        itemContainer: "gap-10",
                        portfolioItem:"bg-primary p-6 rounded-xl",
                        title:"text-white",
                     
                    }}
                />

            </div>
            <div className="max-w-7xl m-auto px-4 lg:px-16">
                <GradietIconCard
                    subtitle="Education Industries Challenges"
                    title="Confronting Important "
                    highlight="Challenges to Modern Education"
                    description="We will confront the challenges to education in a digital world, including engagement, data management and ensuring access to hybrid delivery. "
                    steps={aiprocessSteps}
                />

    

                <TestimonialsSection />
                <ContactSection />
            </div>

        </div>
    )
}
