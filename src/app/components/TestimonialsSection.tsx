"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

SwiperCore.use([Pagination, Autoplay]);

const testimonials: any = [
  {
    image: "/assets/images/testimonials/testimonials-1.jpg",
    name: "Rajesh Kumar",
    testimonial:
      "“WayOne's team completely transformed our online presence. Their SEO and digital marketing expertise helped us rank higher on search engines, bringing in more leads than ever before!”",
  },
  {
    image: "/assets/images/testimonials/testimonials-2.jpg",
    name: "Nisha Gupta",
    testimonial:
      "“WayOne’s web development team built a custom website for us that perfectly reflects our brand. The entire process was seamless, and the final product exceeded our expectations.”",
  },
  {
    image: "/assets/images/testimonials/testimonials-3.jpg",
    name: "Arvind Sharma",
    testimonial:
      "“The branding and design services provided by WayOne gave our company a modern, professional look that resonates with our target audience. We’ve noticed a significant increase in customer engagement!”",
  },
  {
    image: "/assets/images/testimonials/testimonials-4.jpg",
    name: "Sneha Mehta",
    testimonial:
      "“The results from WayOne’s digital marketing campaigns have been outstanding. Our social media following has grown significantly, and we’re seeing tangible results from their PPC and SEO efforts.”",
  },
  {
    image: "/assets/images/testimonials/testimonials-5.jpg",
    name: "Karan Singh",
    testimonial:
      "“WayOne’s mobile app development team delivered an intuitive, user-friendly app that has enhanced our customer experience. Their team’s attention to detail was exceptional.”",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="testimonials cs-testimonials section py-16"
    >
      <div className="section-heading text-left mb-12 lg:w-4/5 me-auto">
        <h2 className="text-3xl text-gray-800 font-medium">
          1200+ Clients,
          {" "}
          <span className="text-primary">
            Unmatched Satisfaction, and Growing!
          </span>
        </h2>
        <p className="mt-4 text-gray-700">
          We’re proud to have earned the trust of over 1200 clients who rely on our expertise to fuel their success—and that number keeps rising!
        </p>
      </div>

      <div className="container mx-auto">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="col-lg-3 relative info"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              height={400}
              width={400}
              src="/assets/images/testi1.png"
              alt="Client 1"
              className="w-full h-auto"
            />
            <div className="absolute bottom-5 left-5 text-white text-2xl font-medium flex items-center  gap-4">
              <span className=" rounded-full text-2xl bg-white p-4">
                <FaPlay className=" text-primary" />
              </span>
              Mrs Suji
            </div>
          </div>
          <div
            className="col-lg-3 info relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              height={400}
              width={400}
              src="/assets/images/testi2.png"
              alt="Client 2"
              className="w-full h-auto"
            />
            <div className="absolute bottom-5 left-5 text-white text-2xl font-medium flex items-center  gap-4">
              <span className=" rounded-full text-2xl bg-white p-4">
                <FaPlay className=" text-primary" />
              </span>
              Mrs William
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <Swiper
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{ clickable: true }}
              className="swiper-container"
            >
              {testimonials.map((testimonial: any, index: any) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item  p-6 rounded-lg">
                    <p className="text-lg text-gray-600 italic">
                      <span>“{testimonial.testimonial}”</span>
                    </p>
                    <div className="flex items-center mt-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-img w-16 h-16 object-cover rounded-full flex-shrink-0"
                      />
                      <div className="ml-4">
                        <h3 className="font-medium text-xl text-gray-800">
                          {testimonial.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
