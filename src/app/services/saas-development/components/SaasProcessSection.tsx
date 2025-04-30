import React from 'react';

interface ProcessStep {
  title: string;
  description: string;
  icon: string; // Path to the icon image
}

interface UiUxProcessSectionProps {
  subtitle: string;
  title: string;
  description: string;
  steps: ProcessStep[];
}

const SaasProcessSection: React.FC<UiUxProcessSectionProps> = ({
  subtitle,
  title,
  description,
  steps,
}) => {
  return (
    <section id="ui-ux-process" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-start" data-aos="fade-up">
          <h6 className="text-primary font-bold">{subtitle}</h6>
          <h2 className="font-bold text-3xl">
            {title}
            <span className="text-primary block">
              Seamless <br /> Deployment
            </span>
          </h2>
          <p className="text-gray-600 mt-4 w-1/2">{description}</p>
        </div>

        <div className="relative mt-12">
          <span
            className="absolute top-0 h-4 w-full block rounded-full bg-primary"
    
          ></span>

          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-1/4 p-4 text-center"
              >
                <img
                  src={step.icon}
                  alt={`Step ${index + 1} icon`}
                  className="mb-2 w-16 h-16"
                />
                <p className="text-lg font-semibold mb-2 w-4/5 m-auto ">{step.title}</p>
                <p className="text-sm text-gray-800">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasProcessSection;
