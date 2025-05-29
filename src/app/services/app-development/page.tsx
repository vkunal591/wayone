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
import PartnerWithUsSection from '@/app/components/PartnerWithUsSection';


const dynamicData = {
    title: "Bring Your Ideas to Life with Wayone’s ",
    heiglight: "Expert App Development Services",
    shortDesc: "Custom, Scalable & High-Performance App Development",
    description: "we offer end-to-end app development services that turn your own ideas into reality. Our team designs customized, high-performing applications with smooth user interfaces and functionality in line with your business requirements.",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    subheading: "App Development Services – Wayone"
};


const services = [
    {
        id: '1',
        icon: 'fa-brands fa-android',
        title: 'Android/IOS Application Development',
        description:
            'We specialize in developing native mobile apps for iOS and Android. We make sure each app is customized to its platform, providing a smooth, natural experience and using platform-specific capabilities to deliver the best possible experience to users.',
        delay: 100,
    },
    {
        id: '2',
        icon: 'fa-brands fa-flutter',
        title: 'Flutter App Development',
        description:
            'With the strength of Flutter, we develop cross-platform apps that run flawlessly on both Android and iOS platforms. Flutter allows us to save time in development while delivering an excellent native-like quality of experience to your users.',
        delay: 200,
    },
    {
        id: '3',
        icon: 'fa-solid fa-gear',
        title: 'React Native App Development',
        description:
            'Our React Native app development services enable us to develop apps that are both quick and scalable with native app platform. It also enables us to provide an identical experience both on iOS and Android.',
        delay: 300,
    },
];

const processSteps = [
    {
        id: '1',
        icon: 'fa-brands fa-searchengin', // Replace with appropriate icons
        title: 'Research',
    },
    {
        id: '2',
        icon: 'fa-solid fa-swatchbook', // Replace with appropriate icons
        title: 'Design',
    },
    {
        id: '3',
        icon: 'fa-solid fa-code', // Replace with appropriate icons
        title: 'Development',
    },
    {
        id: '4',
        icon: 'fa-regular fa-file-lines', // Replace with appropriate icons
        title: 'Testing',
    },
    {
        id: '5',
        icon: 'fa-solid fa-sitemap', // Replace with appropriate icons
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
                <PartnerWithUsSection />
                <FaqSection />
            </div>
        </div>
    )
}
