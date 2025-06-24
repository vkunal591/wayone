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
        description: 'We explore your brand goals, operational requirements, and the guest journey. We don’t simply the guest journey - we help scope a solution architecture that will bring more visible occupancies, increase repeat loyalty, and make for memorable guest engagements across all digital touchpoints.',
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Development',
        description: 'We develop custom technology ecosystems — property websites, booking applications, digital concierge, CRMs — powered by the cloud, automation, and analytics. Each piece of technology is geared toward ongoing effective maintenance and positive guest engagement',
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Deployment',
        description: 'Once we have tested and configured the entire system, we deploy to your property, our deployment is accompanied by final documentation and training for your teams. Our support team continues to support the performance of deployments and recommend upgrades from the guest experience and user behaviour.',
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];


const portfolioData = [
    {
        title: "Bluesky Banquet Hall ",
        description:
            "Blue Sky Banquet offers elegant party hall and marriage home services, perfect for weddings, receptions, birthdays, and corporate events, with customizable décor, catering, and event management support.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/bluesky.png",
        link: "#",
    },
];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Digitally Transforming Guest Experiences through  "} title2={" Hospitality & Travel Technology"} description={"Hospitality and Travel technology providing guest seamless journeys; booking engine & CRM, digital concierge, review management represented in context tools to build guests experiences which mean hotels, resorts and travel brands can do better, smarter and grow digitally in an 'experience-first' world. "} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/tourism.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Transforming Guest Experiences  "
                    highlightedText=" through Technology "
                    paragraphs={[
                        "Wayone is about creating and providing custom hospitality and travel technology to deliver better customer experience and bookings conversion rates while enhancing property operations. Be it a boutique resort or travel agent, our technology let you own the frictionless digital experience managing the guest life cycle end to end.",                        
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

                <PortfolioSection
                    sectionTitle="Hospitality solutions that "
                    highlightedText="people remember"
                    sectionDescription="•	See firsthand how we’ve changed hospitality brands with our digital products and high levels of customizations and automating user experiences. "
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
                    subtitle="Hospitality Tourism Industries Challenges"
                    title="Tackling Digital Challenges in "
                    highlight="an Evolving Industry"
                    description="From OTA reliance to inadequate digital visibility — we assist brands in overcoming the biggest issues that impact guest experience and revenue growth."
                    steps={aiprocessSteps}
                />


                <TestimonialsSection />
                <ContactSection />
            </div>

        </div>
    )
}
