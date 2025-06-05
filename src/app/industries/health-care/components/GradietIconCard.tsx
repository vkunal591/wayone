import React from 'react';
import { IconType } from 'react-icons';
import { FaRocket, FaCogs, FaCheckCircle } from 'react-icons/fa';

interface ProcessStep {
    title: string;
    description: string;
    number: number;
    delay: number;
    icon: IconType; // Dynamically passed icon
}

interface GradietIconCardProps {
    title: string;
    subtitle: string;
    highlight?: string;
    description: string;
    steps: ProcessStep[];
}

const GradietIconCard: React.FC<GradietIconCardProps> = ({
    title,
    subtitle,
    highlight,
    description,
    steps,
}) => {
    return (
        <section id="ui-ux-process" className="py-4 lg:py-16">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-start" data-aos="fade-up">
                    <h6 className="text-primary font-medium">{subtitle}</h6>
                    <h2 className="text-4xl text-gray-800 font-medium">
                        {title} <span className="text-primary">{highlight}</span>
                    </h2>
                    <p className="text-gray-600 mt-3" style={{ width: '50%' }}>
                        {description}
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="rounded-4xl mb-4 flex-1"
                                style={{
                                    backgroundImage: 'linear-gradient(to bottom, #d0d7ed, #ffffff)',
                                }}
                                data-aos="fade-up"
                                data-aos-delay={`${step.delay}`}
                            >
                                <div className="flex flex-row items-start gap-4 p-8">
                                    <div className="fw-medium">
                                        <div className="text-primary text-5xl mb-4">
                                            <Icon />
                                        </div>

                                        <h6 className="mb-2 text-lg font-medium text-primary">{step.title}</h6>
                                        <p className="text-gray-800">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GradietIconCard;
