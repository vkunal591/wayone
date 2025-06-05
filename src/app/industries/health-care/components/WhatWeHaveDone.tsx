'use client'
import React, { useState } from 'react'
import HeaderSection from '@/app/components/common/HeaderSection'

// Separate images for frontend and backend panels
const imageData = {
    patient: {
        frontend: [
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
        ],
        backend: [
            '/assets/images/screens/mockup.png',
            '/assets/images/screens/tabmockup.png',
        ]
    },
    doctor: {
        frontend: [
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
        ],
        backend: [
            '/assets/images/screens/mockup.png',
            '/assets/images/screens/tabmockup.png',
        ]
    },
    nurse: {
        frontend: [
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
            '/assets/images/screens/fever1.png',
            '/assets/images/screens/fever2.png',
            '/assets/images/screens/fever3.png',
        ],
        backend: [
            '/assets/images/screens/mockup.png',
            '/assets/images/screens/tabmockup.png',
        ]
    }
};

export default function WhatWeHaveDone() {
    const [activePanel, setActivePanel] = useState<'patient' | 'doctor' | 'nurse'>('patient');

    const handlePanelClick = (panel: 'patient' | 'doctor' | 'nurse') => {
        setActivePanel(panel);
    };

    const renderImageSlider = (images: string[], title: string) => (
        <div className="app-item mb-16">
            <h3 className='text-4xl text-primary font-medium mb-8 mt-8 px-4 lg:px-16'>
                {title}
            </h3>
            <div className="app-screens w-full overflow-x-auto whitespace-nowrap flex gap-6 px-4 lg:px-16" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`${title}-${index}`} className="h-auto object-cover rounded-lg" />
                ))}
            </div>
        </div>
    );

    const currentData = imageData[activePanel];

    return (
        <div className='lg:py-16 bg-white'>
            <div className='px-4 lg:px-16'>
                <HeaderSection
                    subtitle={"What We Have Done"}
                    title={"Healthcare Project We’ve Delivered with Innovation & Excellence"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    textAlign={"text-left"}
                />

                <h3 className='text-4xl text-primary font-medium mb-8 mt-8'>
                    Fever99.Com - {activePanel.charAt(0).toUpperCase() + activePanel.slice(1)} Panel
                </h3>

                {/* Panel Switch Buttons */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-color-primary rounded-2xl p-6 mb-16'>
                    <button
                        className={`p-4 rounded-lg text-center font-medium shadow-md border transition-colors duration-200 ${activePanel === 'patient' ? 'bg-primary text-white' : 'text-primary border-color-primary bg-transparent'}`}
                        onClick={() => handlePanelClick('patient')}
                    >
                        Patient's Panel
                    </button>
                    <button
                        className={`p-4 rounded-lg text-center font-medium shadow-md border transition-colors duration-200 ${activePanel === 'doctor' ? 'bg-primary text-white' : 'text-primary border-color-primary bg-transparent'}`}
                        onClick={() => handlePanelClick('doctor')}
                    >
                        Doctor's Panel
                    </button>
                    <button
                        className={`p-4 rounded-lg text-center font-medium shadow-md border transition-colors duration-200 ${activePanel === 'nurse' ? 'bg-primary text-white' : 'text-primary border-color-primary bg-transparent'}`}
                        onClick={() => handlePanelClick('nurse')}
                    >
                        Nurse's Panel
                    </button>
                </div>
            </div>

            {/* Frontend and Backend Sliders */}
            {renderImageSlider(currentData.frontend, `Fever99.Com - ${activePanel.charAt(0).toUpperCase() + activePanel.slice(1)} Panel - Front End Screens`)}
            {renderImageSlider(currentData.backend, `Fever99.Com - ${activePanel.charAt(0).toUpperCase() + activePanel.slice(1)} Panel - Back End Screens`)}
        </div>
    );
}
