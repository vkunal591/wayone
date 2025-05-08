import React from 'react';
import { AiOutlineAim } from 'react-icons/ai';
import { BiLaptop } from 'react-icons/bi';

interface Step {
  title: string;
  description: string;
  iconClass: string;
  delay: number;
}

interface BlockChainProcessSectionProps {
  subtitle: string;
  title: string;
  description: string;
  steps: Step[];
}

const BlockChainProcessSection: React.FC<BlockChainProcessSectionProps> = ({
  subtitle,
  title,
  description,
  steps,
}) => {
  return (
    <section id="ui-ux-process" className="py-4 lg:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-start" data-aos="fade-up">
          <h6 className="text-primary font-semibold">{subtitle}</h6>
          <h2 className="text-4xl text-gray-800 font-bold">
            From Initial Concept to <span className="text-primary">Seamless Deployment</span>
          </h2>
          <p className="text-gray-600 mt-3" style={{ width: '50%' }}>
            {description}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-lg mb-4 flex-1"
              style={{
                backgroundImage: 'linear-gradient(to right, #d0d7ed, #ffffff)',
              }}
              data-aos="fade-up"
              data-aos-delay={`${step.delay}`}
            >
              <div className="flex flex-row items-center justify-center text-left p-6 rounded">
                <div className="fw-semibold">
                  <div
                    className="p-2 px-3 fs-1 rounded"
                    style={{ color: '#0038A0' }}
                  >
                    <AiOutlineAim className={`text-5xl ${step.iconClass}`}></AiOutlineAim>
                  </div>
                  <h6 className="mb-2 font-medium text-primary">{step.title}</h6>
                  <p className='text-gray-800'>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockChainProcessSection;
