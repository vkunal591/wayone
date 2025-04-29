// components/PortfolioSection.js
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination } from "swiper/modules";

const portfolioItems = [
  {
    title: "Unifi Cars",
    tags: ["UX/UI Design", "Development", "Strategy"],
    description:
      "Unifi Cars is a reliable online platform for buying and selling used cars. We make things easy with easy-to-understand prices and intuitive interface, saving you time finding or selling your car fast and securely.",
    image: "/assets/images/UNIFICARS (2) 1.png",
  },
  {
    title: "Wayon FX",
    tags: ["UX/UI Design", "Development", "Strategy"],
    description:
      "Wayon FX is a premier online trading platform that offers real-time information, tools, and resources for trading forex and cryptocurrencies. Through safe transactions and an easy-to-use interface, we enable traders to thrive in the international market.",
    image: "/assets/images/WAYONE (2) 1.png",
  },
  {
    title: "Donlop",
    tags: ["UX/UI Design", "Development", "Strategy"],
    description:
      "Donlop is a leading destination for quality tyres. We have a variety of tyres for every type of vehicle, providing durability, safety, and performance. Get the perfect fit for your vehicle with our expert advice and product range.",
    image: "/assets/images/dunlopbahrain (1) 1.png",
  },
  {
    title: "Saash",
    tags: ["UX/UI Design", "Development", "Strategy"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/SASSHI (1) 1.png",
  },
];

export default function OurWorkSlide() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Showcasing <span className="text-primary">Our Excellence</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            At WayOne, we focus on creating exceptional designs that seamlessly combine creativity and functionality. Every project we undertake reflects our unwavering commitment to excellence and innovation, ensuring we consistently exceed client expectations.
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
                  <img src={item.image} alt={item.title} className="rounded-lg" />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
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
