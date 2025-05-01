import HeaderSection from '@/app/components/common/HeaderSection'
import React from 'react'

export default function WhatWeHaveDone() {
    return (
        <div className='lg:py-16 bg-white'>
            <HeaderSection
                subtitle={"What We Have Done"}
                title={"Healthcare Project We’ve Delivered with Innovation & Excellence"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
                textAlign={"text-left"}
            />
            <h3 className='text-4xl text-primary font-bold mb-8'>
                Fever99.Com - Front End Work
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-color-primary rounded-2xl p-6'>
                <div className='bg-transparent border border-color-primary p-4 rounded-lg text-center font-semibold text-primary shadow-md'>
                    Patient's Panel
                </div>
                <div className='bg-transparent border border-color-primary p-4 rounded-lg text-center font-semibold text-primary shadow-md'>
                    Doctor's Panel
                </div>
                <div className='bg-transparent border border-color-primary p-4 rounded-lg text-center font-semibold text-primary shadow-md'>
                    Nurse's Panel
                </div>
            </div>

            <div className="app-item">
                <h3 className='text-4xl text-primary font-bold mb-8 mt-8'>
                    Fever99.Com - Back End Work
                </h3>

                <div
                    className="app-screens overflow-x-auto overflow-y-hidden whitespace-nowrap flex gap-6"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {[
                        '/assets/images/screens/fever1.png',
                        '/assets/images/screens/fever2.png',
                        '/assets/images/screens/fever3.png',
                        '/assets/images/screens/fever4.png',
                        '/assets/images/screens/fever5.png',
                        '/assets/images/screens/fever3.png',
                        '/assets/images/screens/fever4.png',
                        '/assets/images/screens/fever5.png',
                    ].map((image, index) => (
                        <img key={index} src={image} alt={""} className="w-80 h-auto object-cover rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    )
}
