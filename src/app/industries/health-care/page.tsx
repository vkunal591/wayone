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




export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Smart Healthcare IT Solutions for Better Patient Care"} title2={""} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} />
                <WhoWeAre
                    imageSrc="/assets/images/whoweare.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Smart"
                    highlightedText="Health & Fitness"
                    paragraphs={[
                        "Wayone is a forward-thinking IT solutions provider committed to driving digital transformation.",
                        "With expertise in cutting-edge technologies, we empower businesses with scalable, innovative, and efficient solutions tailored to their unique needs."
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

            </div>
            <WhatWeHaveDone />
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
