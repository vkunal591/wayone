import React from 'react';

interface Service {
    id: number;
    title: string;
    description: string;
    delay: number;
}

interface ServicesSectionProps {
    subtitle: string;
    title: string;
    description: string;
    services: Service[];
}

const SaasServices: React.FC<ServicesSectionProps> = ({ subtitle, title, description, services }) => {
    return (
        <section id="services" className="services-section lg:py-16">
            <div className="container mx-auto ">
                <div className="text-left  my-4" data-aos="fade-up">
                    <span className="section-subtitle block mb-2 text-primary">{subtitle}</span>
                    <h2 className="text-4xl text-gray-800 font-bold">
                        End-to-End <span className="text-primary">{title}</span>
                    </h2>
                    <p className="section-desc mt-3 text-gray-600">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="col-lg-4 col-md-4 p-12 text-start rounded-xl border-2 border-color-primary"
                
                            data-aos="fade-up"
                            data-aos-delay={`${service.delay}`}
                        >
                            <span className="text-primary font-bold">{String(service.id).padStart(2, '0')}</span>
                            <h3 className="highlight text-gray-800 text-xl mb-2 font-semibold">{service.title}</h3>
                            <p className="text-sm text-justify text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SaasServices;
