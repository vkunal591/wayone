import React from 'react';

interface ProcessStep {
    title: string;
    description: string;
    number: number;
    delay: number;
}

interface AIProcessProps {
    title: string;
    subtitle: string;
    description: string;
    steps: ProcessStep[];
}

const AIProcessSection: React.FC<AIProcessProps> = ({ title, subtitle, description, steps }) => {
    return (
        <section id="ui-ux-process" className="py-4 lg:py-16">
            <div className="container mx-auto ">
                <div className="text-start" data-aos="fade-up">
                    <h6 className="text-primary text-lg font-semibold">{subtitle}</h6>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">
                        {title} <span className="text-primary">Seamless Deployment</span>
                    </h2>
                    <p className="text-gray-600 mt-3 lg:w-1/2">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 flex-wrap justify-center">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="p-6 mb-4 rounded-lg border-2 border-color-primary w-full "
                            data-aos="fade-up"
                            data-aos-delay={`${step.delay}`}
                        >
                            <div className="flex flex-col p-4">
                                <div className="font-semibold text-primary text-xl mb-2">{`0${step.number}. ${step.title}`}</div>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIProcessSection;
