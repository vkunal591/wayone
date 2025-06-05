// components/ServicesSection.tsx

import React from 'react';

type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  delay: number;
};

type ServicesSectionProps = {
  services: Service[];
};

const AppServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section id="services" className="py-4 lg:py-16">
      <div className="container mx-auto ">
        <div className="section-header text-left mb-16" data-aos="fade-up">
          <span className="section-subtitle text-xl text-gray-500">Our App Development Services</span>
          <h2 className="text-3xl font-medium text-gray-900 mt-2">
            Innovative <span className="text-primary">App Development Services</span>
            <br />
            Customized to Your Business Needs
          </h2>
          <p className="section-desc text-gray-700 mt-4">
            we specialize in creating mobile and web applications that are customized to your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card bg-white p-6  border-2  border-blue-900 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay={service.delay.toString()}
            >
              <div className="service-icon-wrapper mb-6">
                <div className="service-icon text-primary text-6xl">
                  <i className={service.icon}></i>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-10">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppServicesSection;
