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
        title: "Unifi Cars",
        description:
            "Unifi Cars is a reliable online platform for buying and selling used cars. We make things easy with easy-to-understand prices and intuitive interface, saving you time finding or selling your car fast and securely.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/UNIFICARS (2) 1.png",
        link: "#",
    },
    {
        title: "Wayon FX",
        description:
            "Wayone FX is a premier online trading platform that offers real-time information, tools, and resources for trading forex and cryptocurrencies. Through safe transactions and an easy-to-use interface, we enable traders to thrive in the international market.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/WAYONE (2) 1.png",
        link: "#",
    },
    {
        title: "Donlop",
        description:
            "Donlop is a leading destination for quality tyres. We have a variety of tyres for every type of vehicle, providing durability, safety, and performance. Get the perfect fit for your vehicle with our expert advice and product range.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/dunlopbahrain (1) 1.png",
        link: "#",
    },
    {
        title: "Saash",
        description:
            "Saash is a fashion brand offering elegant jewelry and curated gift boxes for women. Known for its oxidized silver-tone pieces and stylish designs, Saash combines tradition with modern aesthetics, making it a popular choice for trendy ethnic accessories.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/SASSHI (1) 1.png",
        link: "#",
    },
];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Smart Digital Solutions for Seamless  "} title2={"Oil & Gas with Smart Digital Solutions"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/oil.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="Innovating Efficiency in Oil & Gas"
                    highlightedText=""
                    paragraphs={[
                        "Wayone is a forward-thinking IT solutions provider committed to driving digital transformation. With expertise in cutting-edge technologies, we empower businesses with scalable, innovative, and efficient solutions tailored to their unique needs.",
                        "Wayone is a forward-thinking IT solutions provider committed to driving digital transformation. With expertise in cutting-edge technologies, we empower businesses with scalable, innovative, and efficient solutions tailored to their unique needs."
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
