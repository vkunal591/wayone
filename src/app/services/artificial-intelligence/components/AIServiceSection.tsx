import Image from 'next/image';
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
    <section id="services" className="py-4 lg:py-16">
      <div className="container mx-auto ">
        <div className="text-left  my-4" data-aos="fade-up">
          <span className="text-sm font-medium text-gray-600 mb-2 block">{subtitle}</span>
          <h2 className="text-4xl font-extrabold text-gray-900 w-full">
            <span className="text-primary">{heading}</span>
            <br />
            Transforming Ideas into Intelligent Solutions
          </h2>
          <p className="mt-3 text-lg text-gray-600 lg:w-1/2">{description}</p>
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
                <Image src={service?.icon} width={1200} height={1200} alt='logo' className={'w-12 h-12 object-contain '}></Image>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mt-4">{service.title}</h3>
              <p className="text-sm font-medium text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;
