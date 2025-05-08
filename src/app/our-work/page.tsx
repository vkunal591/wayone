import React from 'react'
import HeroSection from '../components/common/HeroSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import OurWork from '../components/OurWork'

export default function page() {
    return (
        <div className='bg-white'>
            <HeroSection title1={"Showcasing Excellence"} title2={"in Delivering Innovative Solutions"} description={"In today’s fast-paced digital age, business transformation requires more than traditional approaches. At WayOne, our IT solutions are designed to automate your processes and drive progress. We work closely with you to provide customized services that optimize efficiency, reduce costs, and enhance overall performance. From seamless integration to cutting-edge software, we ensure that your business stays ahead of the curve."} />
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <OurWork />
                <TestimonialsSection />
                <ContactSection />
            </div>
        </div>
    )
}
