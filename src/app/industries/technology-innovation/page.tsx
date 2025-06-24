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
        description: 'We collaborate with you to define product purpose, technical feasibility, core features, and user expectations—laying the foundation for a strong MVP or enterprise rollout.',
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Development',
        description: 'Our dev team translates design and functionality into robust applications, microservices, or platforms integrated with APIs, analytics, and automation.',
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Deployment',
        description: 'We deploy applications to cloud servers, app stores, or enterprise networks. Full lifecycle support includes performance tuning, CI/CD pipelines, analytics dashboards, and version control.',
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];


const portfolioData = [
    {
        title: "SkyField ",
        description:
            "Skyfield provides professional décor services for weddings, parties, and events. From floral arrangements to theme-based setups, they transform venues into stunning spaces that reflect your vision and style.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/skyfield.png",
        link: "#",
    },
    {
        title: "Volvrit",
        description:
            "Volvrit is a trusted IT service provider offering innovative solutions in web development, software, and digital transformation to help businesses grow efficiently with advanced technology and reliable support.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/volvrit.png",
        link: "/contact-us",
    },

];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Disruptive Advancement through "} title2={"NextGen Technology & Innovation"} description={"Accelerate your transformation with next level digital innovation. From AI-enabled automation to smart product engineering, we help tech-led brands create efficiencies, develop disruptive products, and gain a competitive edge in an ultra-competitive market with scalable, intelligent, and agile digital solutions."} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/tech.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Bringing Technology-First Solutions "
                    highlightedText="to the Digital Age"
                    paragraphs={[
                        "Wayone is your partner in technology innovation – creating future-ready products and platforms utilizing AI, cloud, I0T and intelligence from data. We help startups, enterprises, and digital-native brands originate, enhance and scale tech ecosystems to serve current market needs and produce positive, real-world impacts.",
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

                <PortfolioSection
                    sectionTitle="Showcasing"
                    highlightedText="Our Excellence"
                    sectionDescription="We specialize in delivering exceptional designs..."
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
                        portfolioItem: "bg-primary p-6 rounded-xl",
                        title: "text-white",

                    }}
                />

            </div>
            <div className="max-w-7xl m-auto px-4 lg:px-16">
                <GradietIconCard
                    subtitle="Technology Industries Challenges"
                    title="Key Challenges in the "
                    highlight="Technology Industry"
                    description="Technology industry struggles with fast innovation, data protection, talent shortage, and adapting to constant market shifts."
                    steps={aiprocessSteps}
                />
                <TestimonialsSection />
                <ContactSection />
            </div>

        </div>
    )
}
