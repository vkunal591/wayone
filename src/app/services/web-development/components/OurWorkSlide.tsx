// components/PortfolioSection.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import HeaderSection from "@/app/components/common/HeaderSection";

const portfolioItems = [
  {
    title: "Unifi Cars",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    description:
      "Unifi Cars is a simple used car website that deals in all kinds of used car buying and selling  process and supports hassle-free booking and quick service. It has a clean interface where users can search, pick, and book cars with ease. With built-in secure payment gateways, the website supports a smooth transaction process. Users can also filter cars according to choice and view real-time availability status. This platform not only streamlines car rental but also enhances customer satisfaction with its easy-to-use design.",
    image: "/assets/images/UNIFICARS (2) 1.png",
  },
  {
    title: "WayOne FX",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    description:
      "WayOne FX is a premier online trading platform that offers real-time information, tools, and resources for trading forex and cryptocurrencies. Through safe transactions and an easy-to-use interface, we enable traders to thrive in the international market.",
    image: "/assets/images/WAYONE (2) 1.png",
  },
  {
    title: "Donlop",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    description:
      "Donlop is a leading destination for quality tyres. We have a variety of tyres for every type of vehicle, providing durability, safety, and performance. Get the perfect fit for your vehicle with our expert advice and product range.",
    image: "/assets/images/dunlopbahrain (1) 1.png",
  },
  {
    title: "Saash",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/SASSHI (1) 1.png",
  },
];

export default function OurWorkSlide() {
  return (
    <section className="py-4 lg:py-16 bg-white">
      <div className="w-full">
        <div className="max-w-7xl m-auto px-4 lg:px-16">
          <HeaderSection
            subtitle="Our Build Projects"
            title="Shaping Brands Through Exceptional "
            br={true}
            highlight="Web Design and Development Services"
            description="From concept to code, we shape impactful digital solutions that define your brand and grow your business through expert web design and development services."
            textAlign="text-left me-auto"
          />
        </div>
        <Swiper
          slidesPerView={1}
          pagination={true}
          navigation
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
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
