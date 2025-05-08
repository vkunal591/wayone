import FaqSection from '@/app/components/common/FaqSection';
import React from 'react'
import ContactHeroSection from '../web-development/components/ContactSection';
import DevelopmentProcessSection from '../web-development/components/DevelopmentProcessSection';
import IndustriesSection from '../web-development/components/IndustriesSection';
import OurWorkSlide from '../web-development/components/OurWorkSlide';
import ServicesSection from '../web-development/components/ServicesSection';
import TechnologiesSection from '../web-development/components/TechnologySection';
import WhyChooseUsSection from '../web-development/components/WhyChooseSection';
import AppServicesSection from './components/AppServiceSection';
import AppDevelopmentProcessSection from './components/AppDevelopmentProcessSection';
import App from 'next/app';
import AppPortfolioSection from './components/AppPortfolioSection';


const dynamicData = {
    title: "Transform Your Vision into Reality with",
    heiglight: " Wayone's Expert App Development Services",
    shortDesc: "Custom, Scalable & High-Performance Web Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    subheading: "App Development Services – Wayone"
};


const services = [
    {
        id: '1',
        icon: 'bi bi-phone',
        title: 'Android/IOS Application Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 100,
    },
    {
        id: '2',
        icon: 'bi bi-apple',
        title: 'Flutter App Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 200,
    },
    {
        id: '3',
        icon: 'bi bi-gear',
        title: 'React Native App Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        delay: 300,
    },
];

const processSteps = [
    {
        id: '1',
        icon: 'bi bi-bar-chart', // Replace with appropriate icons
        title: 'Research',
    },
    {
        id: '2',
        icon: 'bi bi-palette', // Replace with appropriate icons
        title: 'Design',
    },
    {
        id: '3',
        icon: 'bi bi-code-slash', // Replace with appropriate icons
        title: 'Development',
    },
    {
        id: '4',
        icon: 'bi bi-clipboard-check', // Replace with appropriate icons
        title: 'Testing',
    },
    {
        id: '5',
        icon: 'bi bi-box', // Replace with appropriate icons
        title: 'Deployment',
    },
];



const portfolioItems = [
    {
        id: '1',
        title: 'Fever99.Com - User\'s Screen',
        images: [
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
            '/assets/images/screens/fever4.png',
            '/assets/images/screens/fever5.png',
        ],
    },
    {
        id: '2',
        title: 'Fever99.Com - User\'s Screen',
        images: [
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
            '/assets/images/screens/fever4.png',
            '/assets/images/screens/fever5.png',
        ],
    },
    {
        id: '3',
        title: 'Fever99.Com - User\'s Screen',
        images: [
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
            '/assets/images/screens/fever4.png',
            '/assets/images/screens/fever5.png',
        ],
    },
];
export default function page() {
    return (
        <div className='bg-white'>
            <ContactHeroSection {...dynamicData} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <AppServicesSection services={services} />
                <AppDevelopmentProcessSection processSteps={processSteps} />
            </div>
            <AppPortfolioSection items={portfolioItems} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <IndustriesSection />
                <TechnologiesSection />
                <WhyChooseUsSection />
                <FaqSection />
            </div>
        </div>
    )
}
