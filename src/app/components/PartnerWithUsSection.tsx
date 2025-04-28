import React from 'react';

type PartnerCard = {
  imgSrc: string;
  title: string;
  description: string;
};

const partnerCards: PartnerCard[] = [
  {
    imgSrc: '/assets/images/icon/project.png',
    title: 'Efficient Project Management',
    description:
      'At WayOne, we ensure seamless project management, executing all trading activities with utmost precision. Our intuitive platform and skilled experts simplify the trading process, allowing you to focus on critical decisions and strategies without unnecessary distractions.',
  },
  {
    imgSrc: '/assets/images/icon/active.png',
    title: 'Dedicated Team of Experts',
    description:
      'Our team of highly skilled and experienced professionals is committed to supporting you at every stage. From live market analysis to prompt customer support, our experts are always available to provide the assistance you need, ensuring a smooth trading experience.',
  },
  {
    imgSrc: '/assets/images/icon/deal.png',
    title: 'Timely Project Completion',
    description:
      'We value your time. WayOne guarantees that every process, from trade execution to account management, is completed on schedule. With our efficient and timely services, we help you stay ahead of the competition and achieve your trading goals within the expected timeframe.',
  },
];

const PartnerWithUsSection: React.FC = () => {
  return (
    <section className="partner-with-us cs-partner-with-us py-16">
      <div className="section-heading text-center mb-8 m-auto lg:w-4/5 ">
        <h2 className="text-3xl text-gray-800 font-semibold">Why Partner with Us?</h2>
        <p className="mt-4 -lg text-gray-700">
          At WayOne, we are dedicated to providing innovative, secure, and efficient solutions that empower your business. Whether you are a new entrepreneur or an experienced professional, our tailored services are designed to ensure success in an ever-evolving digital landscape. By partnering with us, you gain access to cutting-edge tools and strategies that drive growth, enhance performance, and keep you ahead of the competition.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerCards.map((card, index) => (
            <div key={index} className="col">
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="card-image p-4">
                  <img src={card.imgSrc} alt={card.title} className="mx-auto w-16 h-16 object-contain" />
                </div>
                <div className="card-content p-4">
                  <h1 className="text-2xl font-semibold text-gray-800">{card.title}</h1>
                  <p className="mt-2 text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUsSection;
