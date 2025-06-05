import Image from "next/image";
import React from "react";
import { AiOutlineAim } from "react-icons/ai";

interface ProcessStep {
  title: string;
  description: string;
  number: number;
  delay: number;
  image: string;
}

interface AIProcessProps {
  title: string;
  subtitle: string;
  description: string;
  steps: ProcessStep[];
}

const AIProcessSection: React.FC<AIProcessProps> = ({
  title,
  subtitle,
  description,
  steps,
}) => {
  return (
    <section id="ui-ux-process" className="py-4 lg:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-start" data-aos="fade-up">
          <h6 className="text-primary font-medium">{subtitle}</h6>
          <h2 className="text-4xl text-gray-800 font-medium">
            From Initial Concept to{" "}
            <span className="text-primary">Seamless Deployment</span>
          </h2>
          <p className="text-gray-600 mt-3" style={{ width: "50%" }}>
            {description}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl mb-4 flex-1"
              style={{
                backgroundImage: "linear-gradient(to bottom, #d0d7ed, #ffffff)",
              }}
              data-aos="fade-up"
              data-aos-delay={`${step.delay}`}
            >
              <div className="flex flex-row items-center justify-center text-left p-6">
                <div className="fw-medium text-center">
                  <span className="font-medium text-primary m-auto  justify-center mb-2 rounded-full inline-block bg-white p-4">
                    <Image
                      width={40}
                      height={40}
                      src={step?.image}
                      alt="logo"
                    />
                  </span>

                  <h6 className="mb-2 font-medium text-center text-primary">
                    {step.title}
                  </h6>
                  <p className="text-gray-800 text-center">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProcessSection;
