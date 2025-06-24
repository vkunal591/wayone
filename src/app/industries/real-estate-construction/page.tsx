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
        description: 'We explore digital paths that makes sense for your company through thorough checking of the market, examining the stakeholder specific to your project or company, benchmarking against specific competitors, etc. A digital journey can take many forms - from a real estate listing, to a sophisticated tool to manage construction.',
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Development',
        description: 'Our developers build superb web and mobile platforms according to defined real estate or construction workflows, and distil the values of data and interoperability to interconnect systems for real-time collaboration, site monitoring, and client servicing.',
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Deployment',
        description: 'We deploy the perfect, equipped with pre-deployment testing, configuration of the backend, and any systems integration of need. Post-deployment we monitor for uptime, performance, and user engagement - and can provide ongoing support and enhancement depending on changing projects or market direction.',
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];


const portfolioData = [
    {
        title: "Makaan Directory",
        description:
            "Makaan Directory is your go-to platform for buying, selling, or renting houses. They offer detailed listings of residential properties with verified information, helping buyers and sellers connect smoothly. Their easy-to-use directory makes house-hunting convenient and transparent.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/makaandirectory.png",
        link: "/contact-us",
    },
    {
        title: "Earth Home",
        description:
            "Earth Home provides top-grade electric wires and takes on electrical wiring contracts. Their products are durable, safe, and designed for residential and commercial use. With skilled electricians and quality materials, Earth Home ensures reliable and efficient electrical installations.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/earthhome.png",
        link: "/contact-us",
    },
];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Build Smarter. Sell Faster."} title2={"Go Digital with Confidence."} description={"Revolutionize your real estate and construction operations with next-gen digital solutions. From property portals to project tracking and CRM automation — we help you simplify workflows, increase ROI, and deliver smooth experiences that drive growth and trust in a competitive market."} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/education.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Smart Tech Partners for  "
                    highlightedText="Real Estate & Construction Success "
                    paragraphs={[
                        "We design tech-enabled solutions for builders, developers and sellers of property. Whether its real-time monitoring of construction sites, digital sales journeys or intelligent property management — we integrate innovation and efficiency, with scalable, outcome-driven technology for a future-ready real estate or construction business model.",
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

                <PortfolioSection
                    sectionTitle="Where "
                    highlightedText="Innovation Meets Results"
                    sectionDescription="See how we've helped real estate and construction brands launch smarter platforms, apps and data-driven experiences."
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
                    subtitle="Real Estate Industries Challenges"
                    title="The Biggest Digital Challenges for "
                    highlight="Real Estate & Construction"
                    description="Ineffective data visibility, inefficient operations, slow progressions, and discombobulated workflows stifle productivity in real estate and construction."
                    steps={aiprocessSteps}
                />

                <TestimonialsSection />
                <ContactSection />
            </div>

        </div>
    )
}
