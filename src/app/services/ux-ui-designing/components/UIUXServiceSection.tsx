import Image from "next/image";
import React from "react";
import { AiOutlineAlipay } from "react-icons/ai";

// Interface for each service in the section
interface Service {
  icon: string;
  title: string;
  description: string;
  delay: number;
  image: string;
}

interface ServicesSectionProps {
  subtitle: string;
  title: string;
  description: string;
  services: Service[];
}

const UIUXServicesSection: React.FC<ServicesSectionProps> = ({
  subtitle,
  title,
  description,
  services,
}) => {
  return (
    <section id="services" className="py-4 lg:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="section-header text-left  my-4" data-aos="fade-up">
          <span className="section-subtitle text-primary d-block mb-2">
            {subtitle}
          </span>
          <h2 className="text-4xl text-gray-800 font-bold">{title}</h2>
          <p className="section-desc mt-3 text-gray-600">{description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card text-start border-2 border-color-primary rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay={`${service.delay}`}
            >
              <div className="text-primary text-4xl mb-4">
                <Image src={service?.image} alt="logo" width={70} height={70} />
              </div>
              <h3 className="font-medium text-xl text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUXServicesSection;
