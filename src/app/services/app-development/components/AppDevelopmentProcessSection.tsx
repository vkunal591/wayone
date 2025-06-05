// components/DevelopmentProcessSection.tsx

import React from "react";
import { FaCode } from "react-icons/fa";

type ProcessStep = {
  id: string;
  icon: string;
  title: string;
};

type DevelopmentProcessSectionProps = {
  processSteps: ProcessStep[];
};

const AppDevelopmentProcessSection: React.FC<
  DevelopmentProcessSectionProps
> = ({ processSteps }) => {
  return (
    <section id="development-process" className="py-4 lg:py-16">
      <div className="container mx-auto ">
        <div className="section-header text-left mb-16" data-aos="fade-up">
          <span className="section-subtitle text-xl text-gray-500">
            Our App Development Process
          </span>
          <h2 className="text-3xl font-medium text-gray-900 mt-2">
            Turning Big Ideas into Effortless,{" "}
            <span className="text-primary"> Game-Changing Apps</span>
          </h2>
          <p className="section-desc text-gray-700 mt-4">
            From brainstorm to launch, we mold your concepts into smooth apps
            that involve users, yield outcomes, and make lasting impressions.{" "}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4">
          {processSteps.map((step, index) => (
            <div className="flex flex-col justify-center items-center ">
              <div className="border-[1.5px] border-blue-900 border-dashed rounded-full p-2 mb-6">
                <div
                  key={step.id}
                  className=" flex flex-col w-30 h-30 justify-center items-center text-center text-primary text-4xl bg-blue-900/15  p-6 rounded-full "
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                >
                  <i className={step.icon}></i>
                  {/* <FaCode /> */}
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentProcessSection;
