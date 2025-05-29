// components/PortfolioSection.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination } from "swiper/modules";

const portfolioItems = [
  {
    title: "Fever99.com- CRM",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    description:
      "We developed a custom CRM for Fever99.com to handle dynamic user data, automate communication, and manage real-time engagement metrics.",
    image: "/assets/images/screens/fever99.png",
  },
 
];

export default function OurWorkSlide() {
  return (
    <section className="py-4 lg:py-16 bg-white">
      <div className="w-full">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">
            {"Our CRM Development Services"}
          </span>
          <h2 className="text-4xl text-gray-800 font-bold">
            Proven Results Through Customized
            <br />
            <span className="text-primary">CRM Implementations</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            We design high-performing CRM solutions for companies from every
            industry, helping them streamline customer interactions, track
            performance, and increase overall productivity. 
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full bg-white"
        >
          {portfolioItems.map((item, idx) => (
            <SwiperSlide className="" key={idx}>
              <div className="flex flex-col lg:flex-row items-center gap-8 w-10/12 m-auto ">
                <div className="lg:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl text-gray-800 font-semibold">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-100 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                  <a
                    href="#"
                    className="inline-block mt-6 text-primary border border-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition"
                  >
                    Let's Discuss Your Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
