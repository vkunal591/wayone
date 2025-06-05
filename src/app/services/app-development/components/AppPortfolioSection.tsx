// components/PortfolioSection.tsx

import React from 'react';

type PortfolioItem = {
    id: string;
    title: string;
    images: string[];
};

type PortfolioSectionProps = {
    items: PortfolioItem[];
};

const AppPortfolioSection: React.FC<PortfolioSectionProps> = ({ items }) => {
    return (
        <section id="portfolio" className="py-4 lg:py-16 bg-gray-50">
            <div className="container mx-auto p-4 ">
                <div className="section-header text-left mb-16" data-aos="fade-up">
                    <div className="section-subtitle text-xl text-primary text-gray-500">Our Portfolio</div>
                    <h2 className="text-3xl font-medium text-gray-900 mt-2">
                        From Initial Concept to <span className="text-primary">Seamless <br /> Deployment</span>
                    </h2>
                    <p className="section-desc text-gray-700 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="app-showcase" data-aos="fade-up">
                    <div className="space-y-12">
                        {items.map((item) => (
                            <div key={item.id} className="app-item">
                                <h3 className="text-left text-2xl font-medium text-gray-900 mb-5">{item.title}</h3>
                                <div
                                    className="app-screens overflow-x-auto overflow-y-hidden whitespace-nowrap flex gap-6"
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                    {item.images.map((image, index) => (
                                        <img key={index} src={image} alt={item.title} className="w-80 h-auto object-cover rounded-lg" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppPortfolioSection;
