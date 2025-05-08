import FaqSection from '@/app/components/common/FaqSection';
import React from 'react'
    ;
import ContactHeroSection from '../web-development/components/ContactSection';
import TechnologiesSection from '../web-development/components/TechnologySection';
import WhyChooseUsSection from '../web-development/components/WhyChooseSection';
import IndustriesSection from '../web-development/components/IndustriesSection';
import AIProcessSection from '../artificial-intelligence/components/AIProcessSection';
import AIServiceSection from '../artificial-intelligence/components/AIServiceSection';
import SaasServices from './components/SaasServices';
import SaasProcessSection from './components/SaasProcessSection';
import SaasTechnologiesSection from './components/TechnologySection';
import BlockChainProcessSection from '../blockchain-development/components/BlockChainProcessSection';



const dynamicData = {
    title: "Build Scalable & Secure SaaS Solution to Drive Business Growth",
    heiglight: " ",
    shortDesc: "Custom, Scalable & High-Performance Web Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    subheading: "Saas Development Services – Wayone"
};

const saasservicesData = [
    {
        id: 1,
        title: 'SaaS Product Design & UI/UX',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 100,
    },
    {
        id: 2,
        title: 'SaaS Product Strategy Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 200,
    },
    {
        id: 3,
        title: 'Custom SaaS Application Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 300,
    },
    {
        id: 4,
        title: 'Multi-Tenant Architecture Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 400,
    },
    {
        id: 5,
        title: 'Cloud Migration and Integration',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 500,
    },
    {
        id: 6,
        title: 'API Development & Integration',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 600,
    },
    {
        id: 7,
        title: 'SaaS Performance Optimization',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 700,
    },
    {
        id: 8,
        title: 'Technology and Third-Party Integration',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 800,
    },
    {
        id: 9,
        title: 'API Development & Integration',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 900,
    },
];

const steps = [
    {
        title: 'Defining',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        iconClass: 'bi-hospital',
        delay: 100,
    },
    {
        title: 'Designing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        iconClass: 'bi-hospital',
        delay: 200,
    },
    {
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        iconClass: 'bi-hospital',
        delay: 300,
    },
    {
        title: 'Testing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        iconClass: 'bi-hospital',
        delay: 400,
    },
];


const technologies = [
    { name: 'Solidity', icon: '../assets/images/tech/cube 1.svg' },
    { name: 'Java', icon: '../assets/images/tech/java 1.svg' },
    { name: 'Python', icon: '../assets/images/tech/python 2.svg' },
    { name: 'Swift', icon: '../assets/images/tech/swift 1.svg' },
    { name: 'React', icon: '../assets/images/tech/atom 3.svg' },
    { name: 'Node.js', icon: '../assets/images/tech/programing 3.svg' },
];



export default function page() {
    return (
        <div className='bg-white'>
            <ContactHeroSection {...dynamicData} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <SaasServices
                    subtitle="Our SaaS Development Services"
                    title="SaaS Development Services"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    services={saasservicesData}
                />
                <BlockChainProcessSection
                    subtitle="Our Digital Marketing Process"
                    title="From Initial Concept to Seamless Deployment"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    steps={steps}
                />
                <SaasTechnologiesSection
                    subtitle="Technologies We Use"
                    title="Technologies We Use"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    technologies={technologies}
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
