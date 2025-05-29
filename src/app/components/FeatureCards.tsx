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
          <h2 className="text-4xl font-bold lg:w-3/4 text-gray-800">
            Our Core Development &
            <span className="text-primary">Technology Services</span>
          </h2>
          <p className="font-[cabin] lg:w-3/5 text-base text-gray-600 mt-4">
            We offer a wide range of services to boost your online presence and business growth. Our team of professionals is committed to creating personalized strategies that help your brand outshine the rest in today’s competitive digital environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-box p-8 rounded-4xl shadow-lg transition-all duration-300 hover:scale-105 ${feature.bgColor}`}
              data-aos="zoom-in"
              data-aos-delay={feature.delay.toString()}
            >
              <Image src={feature.iconSrc} alt={feature?.title} width={1200} height={1200} className="mb-4 w-16" />
              <h4 className="text-xl font-semibold text-gray-800">{feature?.title}</h4>
              <p className="text-base font-[cabin] h-36 text-gray-600 line-clamp-6 mt-2">{feature.description}</p>
              <Link href={feature?.link || "/"} className="mt-4 px-6 py-2 button-primary text-white rounded-lg hover:bg-primary">
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
