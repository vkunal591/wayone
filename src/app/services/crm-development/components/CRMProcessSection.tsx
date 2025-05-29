import Image from "next/image";
import React from "react";
import { BiBulb } from "react-icons/bi";

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  delay: number;
  image: string;
}

interface CRMProcessSectionProps {
  subtitle: string;
  title: string;
  description: string;
  steps: ProcessStep[];
}

const CRMProcessSection: React.FC<CRMProcessSectionProps> = ({
  subtitle,
  title,
  description,
  steps,
}) => {
  return (
    <section id="ui-ux-process" className="py-4 lg:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-start mb-10" data-aos="fade-up">
          <h6 className="text-primary font-semibold">{subtitle}</h6>
          <h2 className="text-4xl text-gray-800 font-bold">
            {title.split("<span class='highlight'>")[0]}
            <span className="text-primary">
              {title.split("<span class='highlight'>")[1]}
            </span>
          </h2>
          <p className="text-gray-600 mt-3" style={{ width: "50%" }}>
            {description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 flex-wrap justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full mb-6"
              data-aos="fade-up"
              data-aos-delay={`${step.delay}`}
            >
              <div className="border-2 border-color-primary h-full rounded-lg p-6 flex flex-col items-center text-center">
                <div className=" text-primary mb-4">
                  <Image
                    width={100}
                    height={100}
                    src={step?.image}
                    alt={`logo`}
                  />
                </div>
                <h6 className="text-primary text-lg font-semibold mb-3">{`${step.stepNumber}. ${step.title}`}</h6>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMProcessSection;
