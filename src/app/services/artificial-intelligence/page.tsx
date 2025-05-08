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
    title: "Empowering Businesses with Cutting-Edge AI Solutions for Innovation and Growth",
    heiglight: " ",
    shortDesc: "Custom, Scalable & High-Performance Web Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    subheading: "AI Development Services – Wayone"
};



const aiservices = [
    {
        icon: 'bi bi-gear',
        title: 'Machine Learning',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 100,
    },
    {
        icon: 'bi bi-gear',
        title: 'Natural Language Processing',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 200,
    },
    {
        icon: 'bi bi-gear',
        title: 'Business Intelligence',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 300,
    },
    {
        icon: 'bi bi-gear',
        title: 'Generative AI',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 400,
    },
    {
        icon: 'bi bi-gear',
        title: 'Chatbot Applications',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores amet non rem facilis esse similique blanditiis tenetur labore eos minus iste.',
        delay: 500,
    },
    {
        icon: 'bi bi-gear',
        title: 'AI Powered Apps',
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
        <div className='bg-white'>
            <ContactHeroSection {...dynamicData} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <AIServiceSection
                    subtitle="Our Artificial Development Services"
                    heading="Advanced AI Development Services"
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
