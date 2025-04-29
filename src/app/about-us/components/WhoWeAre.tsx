'use client';

import Image from 'next/image';

const WhoWeAre: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text Content */}
          <div
            className="flex flex-col justify-center w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-700">Who We Are</h3>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Innovating IT Solutions for a{' '}
                <span className="text-blue-800">Smarter Tomorrow</span>
              </h2>
              <p className="text-gray-600">
                WayOne is a leading Indian IT and digital solutions company, committed to helping businesses
                thrive in today’s fast-evolving digital environment. Our expert team blends creativity, strategy,
                and cutting-edge technology to deliver tailor-made solutions that produce real, measurable results.
              </p>
              <p className="text-gray-600">
                From web development and app creation to SEO, social media, and performance marketing, we provide
                end-to-end services that strengthen your digital presence and drive long-term growth. Our mission
                is simple — to turn your digital vision into lasting business value.
              </p>
              <div className="text-center lg:text-left">
                <a
                  href="#"
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
                </a>
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
