import FaqSection from '@/app/components/common/FaqSection';
import React from 'react'
    ;
import ContactHeroSection from '../web-development/components/ContactSection';
import TechnologiesSection from '../web-development/components/TechnologySection';
import WhyChooseUsSection from '../web-development/components/WhyChooseSection';
import IndustriesSection from '../web-development/components/IndustriesSection';
import SaasTechnologiesSection from './components/TechnologySection';
import BlockchainServicesSection from './components/BlockChainServicesSection';
import BlockChainProcessSection from './components/BlockChainProcessSection';



const dynamicData = {
    title: "Secure, Scalable & Future-Ready Blockchain Solutions for Your Business",
    heiglight: " ",
    shortDesc: "Custom, Scalable & High-Performance Web Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    subheading: "Blockchain Development Services – Wayone"
};

const services = [
    {
        title: 'Blockchain Consulting',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Custom Blockchain',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Decentralized Application (dApp) Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Smart Contract Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'NFT Platform Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Cryptocurrency Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];


const processSteps: any = [
    {
        title: 'Discovery and Planning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
        icon: '../assets/images/icon/arrow.svg',
    },
    {
        title: 'Design and Prototyping',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
        icon: '../assets/images/icon/arrow.svg',
    },
    {
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
        icon: '../assets/images/icon/arrow.svg',
    },
    {
        title: 'Testing and Assurance',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
        icon: '../assets/images/icon/arrow.svg',
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
        <div className=''>
            <ContactHeroSection {...dynamicData} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <BlockchainServicesSection
                    subtitle="Our Blockchain Development Services"
                    title="Blockchain Development"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    services={services}
                />
                <BlockChainProcessSection
                    subtitle="Our Saas Development Process"
                    title="From Initial Concept to"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    steps={processSteps}
                />
                <SaasTechnologiesSection
                    subtitle="Technologies We Use"
                    title="Technologies We Use"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
