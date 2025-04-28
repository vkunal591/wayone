import React from 'react';

type IndustryItem = {
  src: string;
  alt: string;
  label: string;
};

const industryItems: IndustryItem[] = [
  { src: '/assets/images/icon/healthcare 4.png', alt: 'Healthcare', label: 'Healthcare' },
  { src: '/assets/images/icon/money 2.png', alt: 'Finance & Banking', label: 'Finance & Banking' },
  { src: '/assets/images/icon/retailer 3.png', alt: 'Retail & E-Commerce', label: 'Retail & E-Commerce' },
  { src: '/assets/images/icon/healthcare 4.png', alt: 'Government & Smart Cities', label: 'Government & Smart Cities' },
  { src: '/assets/images/icon/logistics 2.png', alt: 'Logistics & Transportation', label: 'Logistics & Transportation' },
  { src: '/assets/images/icon/property 2.png', alt: 'Real Estate & Constructions', label: 'Real Estate & Constructions' },
  { src: '/assets/images/icon/higher-education 2.png', alt: 'Education & E-learning', label: 'Education & E-learning' },
  { src: '/assets/images/icon/hotel-cleaning 2.png', alt: 'Hospitality & Tourism', label: 'Hospitality & Tourism' },
  { src: '/assets/images/icon/oil-drum 2.png', alt: 'Oil & Gas / Energy', label: 'Oil & Gas / Energy' },
  { src: '/assets/images/icon/insurance 2.png', alt: 'Event & Ticket', label: 'Event & Ticket' },
  { src: '/assets/images/icon/manufacture 1.png', alt: 'Manufacturing & Industrial', label: 'Manufacturing & Industrial' },
  { src: '/assets/images/icon/connection 2.png', alt: 'Technology & Innovation', label: 'Technology & Innovation' },
];

const IndustriesSection: React.FC = () => {
  return (
    <section className="industries cs-industries py-16">
      <div className="section-heading text-center mb-8 m-auto lg:w-4/5">
        <h2 className="text-3xl text-gray-800 font-semibold">
          Industries <span className="text-primary">We Serve with Innovation</span>
        </h2>
        <p className="mt-4  text-gray-700  ">
          At WayOne, we provide customized digital solutions to a diverse range of industries including healthcare, retail, manufacturing, finance, and education. Our bespoke services are designed to optimize operations, enhance efficiency, and help businesses stay ahead in their respective markets. We focus on delivering high-quality, innovative solutions that drive performance, productivity, and growth.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industryItems.map((item, index) => (
            <div key={index} className="col flex justify-center items-center">
              <div className="industry-content text-center">
                <img src={item.src} alt={item.alt} className="mx-auto mb-4 w-20 h-20 object-contain" />
                <p className="text-xl font-semibold text-gray-800">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
