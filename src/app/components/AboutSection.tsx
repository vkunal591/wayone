// components/AboutSection.tsx

import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section id="about" className="about section py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row gap-10">
          <div
            className="lg:w-1/2 flex items-center justify-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <Image
              src="/assets/images/wayone-about.png"
              alt="About WayOne"
              width={600}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>

          <div
            className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3 className=" font-medium text-primary">About Us</h3>
              <h2 className="text-4xl font-semibold text-gray-800 mt-4">
                Innovative IT & Digital Solutions for a{" "}
                <span className="text-primary">Smarter India</span>
              </h2>
              <p className="text-base font-[cabin] text-gray-600 mt-4">
                WayOne is one of India’s leading digital and IT solution
                providers, committed to helping businesses grow through powerful
                web development and strategic digital marketing. Our expert team
                blends creativity, industry insight, and cutting-edge technology
                to build tailored solutions that deliver measurable, long-term
                results.
              </p>
              <p className="text-base font-[cabin] text-gray-600 mt-4">
                We offer a complete suite of services — from content marketing
                and social media management to SEO and PPC — all crafted to
                enhance your brand’s online visibility and performance.
              </p>
              <div className=" mt-8">
                <a
                  href="/about"
                  className=" inline-flex items-center justify-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary transition-all duration-300"
                >
                  <span>Explore More</span>
                  <IoArrowForward className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
