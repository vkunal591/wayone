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
import PortfolioSection from "./components/PortfolioSection";
const aiprocessSteps = [
    {
        title: 'Ideation',
        description: "We begin with your business model and compliance obligations and your users' journey, and we establish a strategic roadmap that responds to digital banking behaviours, security frameworks and growth indicators to ensure you are proceeding with an aspirational and compliant path forward.",
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Development',
        description: 'We develop trusted frameworks within scalable platforms - mobile apps, loan processing engines, data encryption, APIs and real-time data analytics. Always shipped to ensure you have demonstrated compliance with ISO/GDPR/PCI-DSS standards to align trust and confidence with your high-stakes financial services.',
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Deployment',
        description: 'We are an end-to-end service including testing, performance reviews and compliance checks. After deployment, we continue to add value by providing dedicated support, real-time monitoring and updates, so your financial services platform behaves as expected as you adapt user behaviour to emerging technology.',
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];


const portfolioData = [
    {
        title: "Esteem Finance",
        description:
            "Esteem Finance, an extension of Esteem Cars, provides easy and accessible financing for used car buyers. With customised loan options, competitive interest rates, and minimal paperwork, they help customers own their dream car with flexible repayment solutions and fast loan approvals.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/esteemcars.png",
        link: "/contact-us",
    },

];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Secure. Scalable. Smart — Digital Innovation for   "} title2={"Finance & Banking Subheading"} description={"We develop smart digital systems that enable financial enterprises to gain massive scale while reducing risk and improving customer experience. Our full suite of services include core banking and fintech systems, AI driven automation, and helping better modernise legacy systems and accelerate financial transformation while ensuring trust and compliance at every level."} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/finance.jpg"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Meeting the needs of Financial Institutions with"
                    highlightedText="future-fit technology Subheading"
                    paragraphs={[
                        "Wayone enables Banks, NBFCs and fintechs to digitise completely with secure, resilient, and scalable IT solutions. Our solutions, whether they be digital banking platforms, loan automation tools, secure payment systems, or AI driven analytics, are built to deliver greater efficiency, compliance, and achieve successful outcomes for customers.",
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

                <PortfolioSection
                    sectionTitle="Delivering Authentic Fintech Solutions  "
                    highlightedText="That Build Trust Subtitle"
                    sectionDescription="Join us as we partner with finance companies to build trusted, secure focus performance and innovation - for their customers."
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
                    subtitle="Finance and Banking  Industries Challenges"
                    title="Confronting the Digital Challenges "
                    highlight="Facing Finance & Banking Today."
                    description="Outdated legacy systems, regulatory obligations and increased fraud is stifling progress, while our solutions provide ease of compliance, security and digital currency transformation."
                    steps={aiprocessSteps}
                />

                <TestimonialsSection />
                <ContactSection />
            </div>

        </div>
    )
}
