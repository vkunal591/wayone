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
        description: "We start by identifying the areas in your logistics flow to create visibility and a more efficient logistics process from inventory to delivery. We will work together to identify digital prioritization and goals, operational KPI's, integrations, consistent with your business model and customer expectations.",
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Development',
        description: "We develop full-scale platforms with tracking and visibility for order management, notifications, and analytics delivered through cloud, API, and mobile-first solutions. Think about automation, cost efficiency, and user performance wishing to 'automated multimode' logistics experience. ",
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Deployment',
        description: 'We deploy solutions to your operational systems with minimal business disruption while your people have full understanding about features.  We will provide full support, version-upgrade, and monitor analytics expectations after the launch to help you evolve your platform to emerging demand, global trends and customer needs.',
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];


const portfolioData = [
    {
        title: "Kapil & Sons",
        description:
            "Kapil and Sons operates in the logistics sector, providing reliable transportation and supply chain solutions. They handle goods movement efficiently across regional and national networks, ensuring timely and secure delivery. Their services support industries with smooth cargo operations and logistics management.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/kapilandsons.png",
        link: "/contact-us",
    },
];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Harnessing Smart Technology Solutions for  "} title2={"Logistics & Transport Optimisation"} description={"Collaborate with us to develop custom designed logistics and transport technology platforms to optimise your supply chain efficiency. With visibility into real-time vehicle tracking, warehouse automation, and last mile delivery optimisation, logistics companies can continue to deliver smarter, faster and more transparently - securely and at scale, with technology led for the future website section. "} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/logisti.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Operational Excellence for "
                    highlightedText="Logistics & Transport"
                    paragraphs={[
                        "Wayone is a digital transformation specialist for logistics and transport companies. With leading experience in digital automation, the Internet of things (IoT) and real time data analytics, we help deliver end to end optimisation - from fleet management + navigation; through to shipment tracking and inventory management - building connected, agile and cost effective logistics networks.",
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

                <PortfolioSection
                    sectionTitle="Operational Excellence for"
                    highlightedText=" Logistics & Transport"
                    sectionDescription="Wayone is a digital transformation specialist for logistics and transport companies. With leading experience in digital automation, the Internet of things (IoT) and real time data analytics, we help deliver end to end optimisation - from fleet management + navigation; through to shipment tracking and inventory management - building connected, agile and cost effective logistics networks."
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
                    subtitle=" Logistics & Transport Industries Challenges"
                    title="Innovations to keep "
                    highlight="Supply chains moving"
                    description="Wayone is a digital transformation specialist for logistics and transport companies. With leading experience in digital automation, the Internet of things (IoT) and real time data analytics, we help deliver end to end optimisation - from fleet management + navigation; through to shipment tracking and inventory management - building connected, agile and cost effective logistics networks."
                    steps={aiprocessSteps}
                />

     

                <TestimonialsSection />
                <ContactSection />
            </div>

        </div>
    )
}
