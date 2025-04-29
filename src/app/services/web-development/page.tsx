import React from 'react'
import ContactHeroSection from './components/ContactSection'
import ServicesSection from './components/ServicesSection'
import OurWorkSlide from './components/OurWorkSlide'
import DevelopmentProcessSection from './components/DevelopmentProcessSection'
import IndustriesSection from './components/IndustriesSection'
import TechnologiesSection from './components/TechnologySection'
import WhyChooseUsSection from './components/WhyChooseSection'
import FaqSection from '../../components/common/FaqSection'


export default function page() {
    return (
        <div className=''>
            <ContactHeroSection />
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
