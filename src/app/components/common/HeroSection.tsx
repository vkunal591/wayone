// components/HeroSection.tsx

import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section id="hero" className="hero section bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center justify-center space-y-8 lg:space-y-5">
          <div className="happy-client flex items-center gap-2">
            <Image
              src="/assets/images/happy-client.png"
              alt="Happy Client"
              width={70}
              height={70}
              className=""
            />
            <p className="text-base text-gray-700 font-medium">
              Over 100+ Satisfied Clients
            </p>
          </div>

          <h1 className="text-3xl lg:text-5xl/16 font-extrabold text-gray-800">
            Empowering Business Growth <br className="hidden md:inline" />
            <span className="text-primary">with Smarter IT Solutions</span>
          </h1>

          <p className="text-base font-[cabin] lg:w-4/5 text-gray-600 px-4 md:px-16">
            In today’s rapidly evolving digital landscape, traditional methods
            simply aren’t enough. At WayOne, we deliver intelligent IT solutions
            designed to streamline operations, reduce costs, and maximize
            performance. From seamless system integrations to advanced software
            development, we tailor every solution to your business needs —
            ensuring you're not just keeping up with change, but leading it.
          </p>

          <div className="hero-btn flex space-x-4 justify-center">
            <button className="btn1 text-sm  bg-primary text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-primary">
              <span>What We Do</span>
              <IoArrowForward className="bg-white p-1 text-primary rounded-full text-2xl" />
            </button>
            <button className="btn2 text-sm bg-gray-100 border border-blue-800 text-gray-800 px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-300">
              <span>Our Work</span>
              <IoArrowForward className="bg-primary p-1 text-white rounded-full text-2xl" />

            </button>
          </div>

          <div className="container award-logo mt-16">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-1/4 md:w-1/5 flex items-center justify-center">
                <Image
                  src="/assets/images/01.png"
                  alt="Award 1"
                  width={150}
                  height={100}
                />
              </div>
              <div className="w-1/4 md:w-1/5 flex items-center justify-center">
                <Image
                  src="/assets/images/02.png"
                  alt="Award 2"
                  width={150}
                  height={100}
                />
              </div>
              <div className="w-1/4 md:w-1/5 flex items-center justify-center">
                <Image
                  src="/assets/images/03.png"
                  alt="Award 3"
                  width={150}
                  height={100}
                />
              </div>
              <div className="w-1/4 md:w-1/5 flex items-center justify-center">
                <Image
                  src="/assets/images/04.png"
                  alt="Award 4"
                  width={150}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
