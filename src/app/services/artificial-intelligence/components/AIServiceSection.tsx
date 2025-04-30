import React from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

interface ServicesSectionProps {
  subtitle: string;
  heading: string;
  description: string;
  services: Service[];
}

const AIServicesSection: React.FC<ServicesSectionProps> = ({ subtitle, heading, description, services }) => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-left p-5 my-4" data-aos="fade-up">
          <span className="text-sm font-semibold text-gray-600 mb-2 block">{subtitle}</span>
          <h2 className="text-4xl font-extrabold text-gray-900 w-full">
            <span className="text-primary">{heading}</span>
            <br />
            Transforming Ideas into Intelligent Solutions
          </h2>
          <p className="mt-3 text-lg text-gray-600 w-1/2">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card text-left p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay={`${service.delay}`}
            >
              <div className="text-blue-600 text-4xl">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">{service.title}</h3>
              <p className="text-sm font-semibold text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;
