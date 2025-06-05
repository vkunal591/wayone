import React from 'react';

interface Technology {
    name: string;
    icon: string; // Path to the technology icon
}

interface TechnologiesSectionProps {
    title: string;
    subtitle: string;
    description: string;
    technologies: Technology[];
}

const SaasTechnologiesSection: React.FC<TechnologiesSectionProps> = ({
    title,
    subtitle,
    description,
    technologies,
}) => {
    return (
        <section id="ui-ux-process" className="py-4 lg:py-16">
            <div className="container mx-auto px-6">
                <div className="text-start" data-aos="fade-up">
                    <h6 className="text-primary font-medium">{subtitle}</h6>
                    <h2 className="font-medium text-3xl">
                        <span className="text-primary">{title}</span> Powering Innovation
                        <br /> with Cutting-Edge Tools
                    </h2>
                    <p className="text-gray-600 mt-4 w-1/2">{description}</p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center"
                        >
                            <img
                                src={tech.icon}
                                alt={`${tech.name} logo`}
                                className="mb-2 w-16 h-16 object-contain"
                            />
                            <p className="text-lg font-medium text-center">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SaasTechnologiesSection;
