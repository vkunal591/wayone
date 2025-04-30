import React from 'react';

type TechnologyItem = {
  src: string;
  alt: string;
  size: 'large' | 'small';
};

const technologyItems: TechnologyItem[] = [
  { src: '/assets/images/icon/tech1.png', alt: 'Technology 1', size: 'large' },
  { src: '/assets/images/icon/tech2.png', alt: 'Technology 2', size: 'large' },
  { src: '/assets/images/icon/tech3.png', alt: 'Technology 3', size: 'large' },
  { src: '/assets/images/icon/tech4.png', alt: 'Technology 4', size: 'large' },
  { src: '/assets/images/icon/tech5.png', alt: 'Technology 5', size: 'large' },
  { src: '/assets/images/icon/tech6.png', alt: 'Technology 6', size: 'small' },
  { src: '/assets/images/icon/tech7.png', alt: 'Technology 7', size: 'small' },
  { src: '/assets/images/icon/tech8.png', alt: 'Technology 8', size: 'small' },
  { src: '/assets/images/icon/tech9.png', alt: 'Technology 9', size: 'small' },
  { src: '/assets/images/icon/tech10.png', alt: 'Technology 10', size: 'small' },
];

const TechnologySection: React.FC = () => {
  return (
    <section className="technology cs-technology py-16">
      <div className="section-heading text-left mb-8 me-auto ">
        <h2 className="text-4xl font-semibold lg:w-3/5 text-gray-800">
          Our <span className="text-primary">Technology Partners</span>
        </h2>
        <p className="mt-4 font-[cabin] lg:w-3/5 text-gray-700">
          At WayOne, we collaborate with leading technology innovators to deliver best-in-class solutions for your
          business. Through our strategic partnerships, we gain access to the latest tools and technologies, enabling
          us to offer secure, scalable, and innovative solutions that meet the evolving demands of our clients. Together,
          we’re shaping the future of business with technology that drives growth, efficiency, and success.
        </p>
      </div>

      <div className="container mx-auto">
        {/* Top Row (Larger Images) */}
        <div className="row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {technologyItems
            .filter(item => item.size === 'large')
            .map((item, index) => (
              <div key={index} className="col">
                <img src={item.src} alt={item.alt} className="tech-img-large mx-auto" />
              </div>
            ))}
        </div>

        {/* Bottom Row (Smaller Images) */}
        <div className="row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologyItems
            .filter(item => item.size === 'small')
            .map((item, index) => (
              <div key={index} className="col">
                <img src={item.src} alt={item.alt} className="tech-img-small mx-auto" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
