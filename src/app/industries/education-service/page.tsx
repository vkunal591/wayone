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
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur suscipit, dolor provident alias tenetur magni sapiente aspernatur aliquam reprehenderit sunt eum tempora asperiores illum, impedit ea fugiat quisquam rerum?',
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur suscipit, dolor provident alias tenetur magni sapiente aspernatur aliquam reprehenderit sunt eum tempora asperiores illum, impedit ea fugiat quisquam rerum?',
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Deployment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur suscipit, dolor provident alias tenetur magni sapiente aspernatur aliquam reprehenderit sunt eum tempora asperiores illum, impedit ea fugiat quisquam rerum?',
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];


const portfolioData = [
    {
        title: "Hebrew Academy",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/hebrewacad.png",
        link: "#",
    },
];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Smart Digital Solutions for "} title2={"Real Estate & Construction Excellence"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/realestate.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Smart Solutions for "
                    highlightedText="Real Estate & Construction"
                    paragraphs={[
                        "Wayone is a forward-thinking IT solutions provider committed to driving digital transformation. With expertise in cutting-edge technologies, we empower businesses with scalable, innovative, and efficient solutions tailored to their unique needs.",
                        "Wayone is a forward-thinking IT solutions provider committed to driving digital transformation. With expertise in cutting-edge technologies, we empower businesses with scalable, innovative, and efficient solutions tailored to their unique needs."
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
                        portfolioItem:"bg-primary p-6 rounded-xl",
                        title:"text-white",
                     
                    }}
                />

            </div>
            <div className="max-w-7xl m-auto px-4 lg:px-16">
                <GradietIconCard
                    subtitle="Healthcare Industries Challenges"
                    title="Key Challenges in the Healthcare Industry"
                    highlight=""
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    steps={aiprocessSteps}
                />

                <IconCard
                    subtitle="Healthcare Industries Challenges"
                    title="Key Challenges in the Healthcare Industry"
                    highlight=""
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    steps={aiprocessSteps}
                />

                <TestimonialsSection />
                <ContactSection />
            </div>

        </div>
    )
}
