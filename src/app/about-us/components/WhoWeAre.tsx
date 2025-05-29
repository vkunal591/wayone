"use client";

import Image from "next/image";
import Link from "next/link";

const WhoWeAre: React.FC = () => {
  return (
    <section id="about" className="py-4 lg:py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text Content */}
          <div
            className="flex flex-col justify-center w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <h3 className="text-primary">Who We Are</h3>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800 mb-4">
                Innovators in <br />
                <span className="text-blue-800">Web & App Development</span>
              </h2>
              <p className="text-gray-600 mb-4 font-[cabin]">
                As web and app development innovators, we are experts at
                designing bespoke digital solutions that deliver business
                success. Our team combines creativity with the latest technology
                to develop scalable, user-friendly websites and mobile apps,
                providing smooth functionality and improved user experiences
                that enable businesses to remain competitive in the digital
                world.
              </p>
              <div className="text-center lg:text-left">
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  <span>Explore More</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 01.5-.5h11.793l-4.147-4.146a.5.5 0 11.708-.708l5 5a.5.5 0 010 .708l-5 5a.5.5 0 11-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="w-full lg:w-1/2 flex items-center justify-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <Image
              src="/assets/images/Group 56.png"
              alt="About"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
