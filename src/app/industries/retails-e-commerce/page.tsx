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
        description: 'We initiate with your vision, market data, and user behavior to construct a focused, holistic strategy. Any action is based on our sustainability plan - to make your retail business relevant, and your plans supported in leading the way.',
        number: 1,
        delay: 100,
        icon: FaRocket,
    },
    {
        title: 'Development',
        description: "We create fast, responsive platforms with secure payment systems, intuitive UI/UX, and backend flexibility — perfect for growing retail and e-commerce operations. Every feature is designed to delight users and simplify your team's work behind the scenes.",
        number: 2,
        delay: 200,
        icon: FaCogs,
    },
    {
        title: 'Deployment',
        description: 'From testing to launch, we ensure your e-commerce or retail solution runs smoothly. Post-launch, we offer ongoing optimization, real-time performance monitoring, and upgrades so your brand stays current, competitive, and always customer-ready.',
        number: 3,
        delay: 300,
        icon: FaCheckCircle,
    },
];


const portfolioData = [
    {
        title: "Maskeen",
        description:
            "Maskeen Toys specializes in manufacturing and selling high-quality children's toys. From educational games to fun playsets, their products are designed to entertain and engage young minds. With a focus on safety and creativity, they make childhood more joyful and interactive.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/maskeen.png",
        link: "#",
    },
    {
        title: "Icon Furniture",
        description:
            "Icon Furniture offers premium-quality outdoor furniture that combines style, durability, and comfort. From garden sets to patio loungers, their designs enhance open spaces. They provide weather-resistant, elegant solutions perfect for residential and commercial outdoor settings.",
        tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
        imageSrc: "/assets/images/screens/iconfurniture.png",
        link: "#",
    },
];


export default function Page() {

    return (
        <div className="max-w-7xl !pt-24 mx-auto bg-white">
            <div className="max-w-7xl m-auto px-4 lg:px-16 bg-white">
                <HeroSection title1={"Boost Your Retail & E-Commerce"} title2={" Game with Next-Gen Digital Power"} description={"Stay ahead of the digital retail competition. We provide customer-centric, data-driven solutions that enhance engagement, increase sales, and streamline activities - for ambitious retail and eCommerce brands that are ready to grow smarter and faster."} />
                <WhoWeAre
                    imageSrc="/assets/images/industry/ecom.png"
                    imageAlt="About WayOne"
                    heading="Who We Are"
                    subheading="We Build Digital Retail Brands  "
                    highlightedText="That Sell Smarter"
                    paragraphs={[
                        "We are a technology partner focused on the future for retail and eCommerce businesses. From user-friendly to instant, we view technology as an experience that connects your customers and converts purchases. Our mission is to grow retail with agile, smart, and scalable digital solutions that position your brand for success",
                    ]}
                    linkText="Know More"
                    linkHref="/about-us"
                />

                <PortfolioSection
                    sectionTitle="Retail Wins That Speak"
                    highlightedText="Louder Than Words"
                    sectionDescription="See how our smart solutions have helped retail brands scale, connect, and thrive in a competitive digital world."
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
                    subtitle="Retails & E-commerce Challenges"
                    title="Retail Roadblocks to Digital Transformation - "
                    highlight="And How We Solve Them"
                    description="We build future-ready retail technology opposed to existing resistance to personalization, inventory elimination, omnichannel synchronization, and buyer behavior change."
                    steps={aiprocessSteps}
                />

                <TestimonialsSection />
                <ContactSection />
            </div>
        </div>
    )
}
