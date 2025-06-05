import React from 'react';

interface Service {
  title: string;
  description: string;
}

interface BlockchainServicesSectionProps {
  subtitle: string;
  title: string;
  description: string;
  services: Service[];
}

const BlockchainServicesSection: React.FC<BlockchainServicesSectionProps> = ({
  subtitle,
  title,
  description,
  services,
}) => {
  return (
    <section id="services" className="py-4 lg:py-16">
      <div className="container mx-auto ">
        {/* Section Header */}
        <div className="text-left  my-4" data-aos="fade-up">
          <span className="text-primary font-medium mb-2 block">{subtitle}</span>
          <h2 className="text-4xl text-gray-800 font-medium">
            Secure & Scalable <span className="text-primary">{title}</span>
            <br />
            Services
          </h2>
          <p className="mt-3 text-gray-600">{description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-12 text-start bg-gray-200 rounded-xl  hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={`${100 * (index + 1)}`}
            >
              <h3 className="text-xl font-medium text-primary">{`${index + 1}. ${service.title}`}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainServicesSection;
