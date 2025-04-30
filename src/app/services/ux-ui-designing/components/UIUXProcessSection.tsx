import React from 'react';
import { AiTwotoneRedEnvelope } from 'react-icons/ai';
import { BiBulb } from 'react-icons/bi';
import { CgBulb } from 'react-icons/cg';
import { FaOutdent } from 'react-icons/fa';

// Interface for each step in the process
interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

interface UIUXProcessSectionProps {
  subtitle: string;
  title: string;
  description: string;
  steps: ProcessStep[];
}

const UIUXProcessSection: React.FC<UIUXProcessSectionProps> = ({
  subtitle,
  title,
  description,
  steps,
}) => {
  return (
    <section id="ui-ux-process" className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-start" data-aos="fade-up">
          <h6 className="highlight text-blue-600">{subtitle}</h6>
          <h2 className="font-bold text-3xl">
            {title.split('<span class="highlight">')[0]}
            <span className="highlight text-blue-600">
              {title.split('<span class="highlight">')[1]}
            </span>
          </h2>
          <p className="text-gray-600 mt-3" style={{ width: '50%' }}>
            {description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`col-12 mb-4 p-3 rounded flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              data-aos="fade-up"
              data-aos-delay={`${step.delay}`}
            >
              <div className="me-3 text-primay text-4xl">
                <BiBulb className={`text-7xl text-primary ${step.icon}`}/>
              </div>
              <div className="fw-semibold" style={{ width: '35%' }}>
                <h4 className="mb-2">{step.title}</h4>
                <p className="m-0">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUXProcessSection;
