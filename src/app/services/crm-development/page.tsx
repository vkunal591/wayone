import FaqSection from '@/app/components/common/FaqSection';
import React from 'react'
    ;
import ContactHeroSection from '../web-development/components/ContactSection';
import TechnologiesSection from '../web-development/components/TechnologySection';
import WhyChooseUsSection from '../web-development/components/WhyChooseSection';
import IndustriesSection from '../web-development/components/IndustriesSection';
import SaasTechnologiesSection from './components/TechnologySection';
import BlockchainServicesSection from './components/BlockChainServicesSection';
import CRMProcessSection from './components/CRMProcessSection';
import OurWorkSlide from './components/OurWorkSlide';



const dynamicData = {
    title: "Custom CRM Development to Streamline Operations & Boost Engagement",
    heiglight: " ",
    shortDesc: "Custom, Scalable & High-Performance Web Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    subheading: "CRM Development Services – Wayone"
};

const services = [
    {
        title: '01. CRM Consulting Services',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 100,
    },
    {
        title: '02. Custom CRM Software Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 200,
    },
    {
        title: '03. CRM Mobile App Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 300,
    },
    {
        title: '04. Cloud-Based CRM Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 400,
    },
    {
        title: '05. CRM Implementation Service',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 500,
    },
    {
        title: '06. CRM Integration Service',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 600,
    },
];


const steps = [
    {
        stepNumber: 1,
        title: 'Define Goals',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 100,
    },
    {
        stepNumber: 2,
        title: 'Solution Architecture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 200,
    },
    {
        stepNumber: 3,
        title: 'Develop Data Models',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 300,
    },
    {
        stepNumber: 4,
        title: 'Implement',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 400,
    },
];



export default function page() {
    return (
        <div className='bg-white'>
            <ContactHeroSection {...dynamicData} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <BlockchainServicesSection
                    subtitle="Our Blockchain Development Services"
                    title="Blockchain Development"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    services={services}
                />
                <CRMProcessSection
                    subtitle="Our Saas Development Process"
                    title="From Initial Concept to"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    steps={steps}
                />
                <OurWorkSlide />
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
