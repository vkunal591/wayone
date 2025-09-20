// components/AboutSection.tsx

import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section id="about" className="about section">
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
            className="lg:w-1/2 flex flex-col justify-center lg:text-center lg:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3 className=" font-medium text-primary">About Us</h3>
              <h2 className="text-4xl font-medium text-gray-800 mt-2">
                Delivering Secure Mobile & Web Solutions for{" "}
                <span className="text-primary">Modern Solutions</span>
              </h2>
              <p className="text-base font-[cabin] text-gray-600 mt-4">
                Wayone IT Solutions PVT. LTD is an advanced technology for enterprises which require high-quality, scalable, and high-performing digital apps. We render custom mobile and web development solutions as per the needs of enterprise requirements of the current times. Our experienced team of experts apply the latest frameworks and agile development principles to develop applications that are secure, accessible, and future-ready. Whether a business application, e-commerce website, or enterprise software, we ensure seamless integration, quick deployment, and extended support — helping businesses streamline operations and achieve digital success with confidence.
              </p>

              <div className=" mt-8">
                <Link
                  href="/about-us"
                  className=" inline-flex button-primary items-center justify-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary transition-all duration-300"
                >
                  <span>Explore More</span>
                  <IoArrowForward className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
