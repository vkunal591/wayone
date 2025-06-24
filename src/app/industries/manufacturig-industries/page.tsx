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
        description: "We first assess your manufacturing flow, existing systems and issues. We will strategize with you on building out your smart factory using automation, data analytics and integration. We don't treat plants as the same, which is why we design for you. ",
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Development',
        description: 'We will leverage all of our experience to develop the solutions for example dashboards for production management, inventory management, machine monitoring and maintenance reminders so the managers can use accurate real-time data to optimize plant efficiency while making faster and informed decisions.',
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Deployment',
        description: 'Deployment is a programmable sequence with machine to machine integration, user onboarding and phased deployment. We prioritize full lifecycle support with upgrades, analytics dashboards and digital training tools for the best operational return, using digital technology.',
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];


const portfolioData = [
    {
        title: "Billeyo",
        description:
            "Billleyo is a unique platform where users can earn reward points by watching videos. These points can be redeemed for exciting offers and discounts. It’s an engaging way to enjoy content while gaining benefits, turning entertainment into earnings.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/billeyo.png",
        link: "/contact-us",
    },
];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Digitally Driven - For the World of"} title2={"Industrial and Manufacturing "} description={"We partner with organizations with a supply chain, a smart factory or on-demand production, to capitalize on the Industrial Revolution 4.0 and smart (digital) assets, including real-time production intelligence so manufacturers can become more efficient, keep downtimes at bay and maximize operational visibility in support of the supply chain while remaining competitive in a transformed data first industrial ecosystem. "} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/industry.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Bringing Smart Technology to "
                    highlightedText="a 100 Year Old Industry"
                    paragraphs={[
                        "Wayone integrates smart (digital) IT like their ERP system, IoT machines, predictive maintenance, and digital twins to move manufacturing and industrial processes into the 21st century by leveraging automation, analytics, and innovation so companies can connect and modernize their production ecosystem for speed, flexibility and (digital) forward-thinking technology. ",
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

                <PortfolioSection
                    sectionTitle="Transforming Industrial Brands with"
                    highlightedText=" Scalable Digital Solutions "
                    sectionDescription="See how our smart manufacturing platforms improve traceability, decrease manual errors and take the production process from live to production. "
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
                    subtitle="Healthcare Industries Challenges"
                    title="We have the best digital solutions for the"
                    highlight="challenges of manufacturing."
                    description="Whatever systems of record that require integration, we provide the modern, connected, scalable technical infrastructure."
                    steps={aiprocessSteps}
                />

        
                <TestimonialsSection />
                <ContactSection />
            </div>

        </div>
    )
}
