// components/FeatureCards.tsx

import Image from 'next/image';
import Link from 'next/link';

type Feature = {
  title: string;
  description: string;
  iconSrc: string;
  buttonText: string;
  bgColor: string;
  delay: number;
  link?: string | undefined;
};

type FeatureCardsProps = {
  features: Feature[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <section id="features-cards" className="section py-16  ">
      <div className="container mx-auto">
        <div className="section-heading text-left  mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium lg:w-3/4 text-gray-800">
            Our Core Development &
            <span className="text-primary">Technology Services</span>
          </h2>
          <p className="font-[cabin] lg:w-4/5 text-base text-gray-600 mt-4">
            We offer a wide range of services to boost your online presence and business growth. Our team of professionals is committed to creating personalized strategies that help your brand outshine the rest in today’s competitive digital environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-box p-5 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${feature.bgColor}`}
              data-aos="zoom-in"
              data-aos-delay={feature.delay.toString()}
            >
              <Image src={feature.iconSrc} alt={feature?.title} width={1200} height={1200} unoptimized className="mb-4 w-12 object-contain" />
              <h4 className="text-xl font-medium text-gray-800 mb-2">{feature?.title}</h4>
              <p className="text-sm  font-[cabin] text-gray-600 line-clamp-6 mb-4">{feature.description}</p>
              <Link href={feature?.link || "/"} className="mt-4 px-4 py-1.5 text-sm button-primary text-white rounded-lg hover:bg-primary">
                {feature.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
