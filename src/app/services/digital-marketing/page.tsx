import FaqSection from '@/app/components/common/FaqSection';
import React from 'react'
    ;
import ContactHeroSection from '../web-development/components/ContactSection';
import TechnologiesSection from '../web-development/components/TechnologySection';
import WhyChooseUsSection from '../web-development/components/WhyChooseSection';
import IndustriesSection from '../web-development/components/IndustriesSection';
import AIServiceSection from './components/AIServiceSection';
import AIProcessSection from './components/AIProcessSection';


const dynamicData = {
    title: "Crafting Engaging & User-Centric UI/UX Designs for Seamless Experiences",
    heiglight: " ",
    shortDesc: "Custom, Scalable & High-Performance Web Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    subheading: "Digital Marketing Services – Wayone"
};



const aiservices = [
    {
        icon: 'bi bi-gear',
        title: 'Search Engine Optimization',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 100,
    },
    {
        icon: 'bi bi-gear',
        title: 'Social Media Marketing',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 200,
    },
    {
        icon: 'bi bi-gear',
        title: 'Search Engine Marketing',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 300,
    },
    {
        icon: 'bi bi-gear',
        title: 'Email Marketing',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 400,
    },
    {
        icon: 'bi bi-gear',
        title: 'Content Marketing',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 500,
    },
    {
        icon: 'bi bi-gear',
        title: 'AI Powered AppsPaid Adverting',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 600,
    },
];



const aiprocessSteps = [
    {
        title: 'Discover',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        number: 1,
        delay: 100,
    },
    {
        title: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        number: 2,
        delay: 200,
    },
    {
        title: 'Proof of Concept',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        number: 3,
        delay: 300,
    },
    {
        title: 'Implementation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        number: 4,
        delay: 400,
    },
];



export default function page() {
    return (
        <div className=''>
            <ContactHeroSection {...dynamicData} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <AIServiceSection
                    subtitle="Our Digital Marketing Services"
                    heading="Result-Driven Digital Marketing Services to Elevate Your Brand"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    services={aiservices}
                />
                <AIProcessSection
                    subtitle="Our Artificial Development Process"
                    title="From Initial Concept to"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    steps={aiprocessSteps}
                />
            </div>

            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <IndustriesSection />
                <TechnologiesSection />
                <WhyChooseUsSection />
                <FaqSection />
            </div>
        </div>
    )
}
