import React from 'react'
import HeroSection from '../components/common/HeroSection'
import WhoWeAre from './components/WhoWeAre'
import OurVission from './components/OurVision'
import OurCoreValue from './components/OurCoreValue'
import PartnerWithUs from './components/PartnerWithUs'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'

export default function page() {
    return (
        <div className=''>
            <HeroSection title1={"Transforming the Future of IT with"} title2={"Innovation and Technology"} description={"At WayOne, we are redefining how businesses leverage technology by providing innovative IT solutions that shape the future. Our goal is to empower businesses to unlock their full potential using advanced digital platforms and customized technology solutions. We focus on moving away from traditional methods to deliver modern, efficient solutions with measurable results. By collaborating closely with our clients and understanding their unique needs, we bring ideas to life, driving growth, efficiency, and productivity in today’s fast-paced digital world."} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <WhoWeAre />
                <OurVission />
                <OurCoreValue />
                <PartnerWithUs />
                <TestimonialsSection />
                <ContactSection />
            </div>
        </div>
    )
}
