import React from 'react'
import ContactHeroSection from './components/ContactSection'
import ServicesSection from './components/ServicesSection'
import OurWorkSlide from './components/OurWorkSlide'
import DevelopmentProcessSection from './components/DevelopmentProcessSection'
import IndustriesSection from './components/IndustriesSection'
import TechnologiesSection from './components/TechnologySection'
import WhyChooseUsSection from './components/WhyChooseSection'
import FaqSection from '../../components/common/FaqSection'

const dynamicData = {
    title: "Build Future-Ready",
    heiglight: " Websites with Wayone",
    shortDesc: "Custom, Scalable & High-Performance Web Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    subheading: "Digital Transformation Services"
};

export default function page() {
    return (
        <div className='bg-white'>
            <ContactHeroSection {...dynamicData} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <ServicesSection />
            </div>
            <OurWorkSlide />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <DevelopmentProcessSection />
                <IndustriesSection />
                <TechnologiesSection />
                <WhyChooseUsSection />
                <FaqSection />
            </div>
        </div>
    )
}
