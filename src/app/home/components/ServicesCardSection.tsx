"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Dynamic data for each section
const data = {
  technologies: [
    {
      name: "Android",
      icon: "/assets/images/techicons/android.svg",
      alt: "Android",
    },
    {
      name: "Shopify",
      icon: "/assets/images/techicons/shopify.svg",
      alt: "Shopify",
    },
    {
      name: "React Native",
      icon: "/assets/images/techicons/react netive.svg",
      alt: "React Native",
    },
    {
      name: "Vue js",
      icon: "/assets/images/techicons/vue js.svg",
      alt: "Vue js",
    },
    {
      name: "HTML",
      icon: "/assets/images/techicons/HTML.svg",
      alt: "HTML",
    },
    {
      name: "NET",
      icon: "/assets/images/techicons/NET.svg",
      alt: "NET",
    },
    {
      name: "Node js",
      icon: "/assets/images/techicons/NODE JS.svg",
      alt: "Node js",
    },
    {
      name: "Wordpress",
      icon: "/assets/images/techicons/WORD PRESS.svg",
      alt: "Wordpress",
    },
    {
      name: "Python",
      icon: "/assets/images/techicons/PYTHAN.svg",
      alt: "Python",
    },
  ],
  services: [
    {
      name: "IOS",
      icon: "/assets/images/techicons/ios.svg",
      alt: "IOS",
      link: "https://arramton.com/ios-app-development-company",
    },
    {
      name: "Android",
      icon: "/assets/images/techicons/android.svg",
      alt: "Android",
      link: "https://arramton.com/android-app-development-company",
    },
    {
      name: "Cloud Service",
      icon: "/assets/images/techicons/cloud services.svg",
      alt: "Cloud Service",
      link: "https://arramton.com/cloud-consulting-services",
    },
    {
      name: "Web Development",
      icon: "/assets/images/techicons/web development.svg",
      alt: "Web Development",
      link: "https://arramton.com/web-development-company",
    },
    {
      name: "PWAs",
      icon: "/assets/images/techicons/pwas.svg",
      alt: "PWAs",
      link: "https://arramton.com/progressive-web-app-development-company",
    },
    {
      name: "Wearable",
      icon: "/assets/images/techicons/wearable.svg",
      alt: "Wearable",
      link: "https://arramton.com/wearable-app-development-company",
    },
    {
      name: "AR VR",
      icon: "/assets/images/techicons/arvr.svg",
      alt: "AR VR",
      link: "https://arramton.com/ar-vr-services",
    },
    {
      name: "IOT",
      icon: "/assets/images/techicons/iot.svg",
      alt: "IOT",
      link: "https://arramton.com/iot-services",
    },
    {
      name: "DevOps",
      icon: "/assets/images/techicons/dev ops.svg",
      alt: "DevOps",
      link: "https://arramton.com/devops-services",
    },
    {
      name: "AI-ML-Development",
      icon: "/assets/images/techicons/ai development.svg",
      alt: "AI-ML-Development",
      link: "https://arramton.com/ai-development-services",
    },
    {
      name: "Software Development",
      icon: "/assets/images/techicons/software development.svg",
      alt: "Software Development",
      link: "https://arramton.com/software-development-service",
    },
    {
      name: "Data Science",
      icon: "/assets/images/techicons/data science.svg",
      alt: "Data Science",
      link: "https://arramton.com/data-analytics-services",
    },
    {
      name: "Business Intelligence",
      icon: "/assets/images/techicons/bussiness inteligence.svg",
      alt: "Business Intelligence",
      link: "https://arramton.com/business-intelligence-services",
    },
    {
      name: "OTT",
      icon: "/assets/images/techicons/ott.svg",
      alt: "OTT",
      link: "https://arramton.com/ott-app-development",
    },
  ],
  industries: [
    {
      name: "Education",
      icon: "/assets/images/techicons/On Demand.svg",
      alt: "On Demand",
      link: "/education-app-development",
    },
    {
      name: "Grocery",
      icon: "/assets/images/techicons/Health & Fitness.svg",
      alt: "Health & Fitness",
      link: "/grocery-app-development",
    },
    {
      name: "Single-Vendor",
      icon: "/assets/images/techicons/Social Networking.svg",
      alt: "Social Networking",
      link: "/single-vendor-ecommerce-app-development",
    },
    {
      name: "Multi-Vendor",
      icon: "/assets/images/techicons/Entertainment.svg",
      alt: "Entertainment",
      link: "/multi-vendor-ecommerce",
    },
    {
      name: "Tours & Travel",
      icon: "/assets/images/techicons/Tours & Travel.svg",
      alt: "Tours & Travel",
    },
    {
      name: "Events",
      icon: "/assets/images/techicons/Events.svg",
      alt: "Events",
    },
    {
      name: "Restaurant",
      icon: "/assets/images/techicons/Restaurant.svg",
      alt: "Restaurant",
    },
    {
      name: "E-comm",
      icon: "/assets/images/techicons/E-commerce.svg",
      alt: "E-comm",
    },
    {
      name: "SaaS",
      icon: "/assets/images/techicons/SaaS.svg",
      alt: "SaaS",
    },
    {
      name: "Telecom",
      icon: "/assets/images/techicons/Telecom.svg",
      alt: "Telecom",
    },
    {
      name: "Finance",
      icon: "/assets/images/techicons/Finance.svg",
      alt: "Finance",
    },
    {
      name: "Wellness",
      icon: "/assets/images/techicons/Wellness.svg",
      alt: "Wellness",
    },
    {
      name: "Real Estate",
      icon: "/assets/images/techicons/Real Estate.svg",
      alt: "Real Estate",
    },
    {
      name: "Education",
      icon: "/assets/images/techicons/Education.svg",
      alt: "Education",
    },
    {
      name: "News Magazines",
      icon: "/assets/images/techicons/news magaziens.svg",
      alt: "News Magazines",
    },
    {
      name: "Taxi Booking",
      icon: "/assets/images/techicons/taxi booking.svg",
      alt: "Taxi Booking",
    },
    {
      name: "Food Delivery",
      icon: "/assets/images/techicons/food delivery.svg",
      alt: "Food Delivery",
    },
    {
      name: "Agriculture",
      icon: "/assets/images/techicons/agriculture.svg",
      alt: "Agriculture",
    },
    { name: "NGO", icon: "/assets/images/techicons/ngo.svg", alt: "NGO" },
    {
      name: "Payment/Wallet",
      icon: "/assets/images/techicons/wallet.svg",
      alt: "Payment/Wallet",
    },
    {
      name: "Chating App",
      icon: "/assets/images/techicons/chating app.svg",
      alt: "Chating App",
    },
    {
      name: "Director & Organisation",
      icon: "/assets/images/techicons/director 7 Organisation.svg",
      alt: "Director & Organisation",
    },
    {
      name: "ERP & CRM",
      icon: "/assets/images/techicons/erp & CRM.svg",
      alt: "ERP & CRM",
    },
    {
      name: "Automotive",
      icon: "/assets/images/techicons/Automotive.svg",
      alt: "Automotive",
    },
  ],
};

// SectionCard component for each section (Technology, Services, Industries)
const SectionCard = ({ title, items }: any) => {
  const scrollContainerRef = useRef<any>(null);

  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: -150, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full lg:w-1/3 my-5 px-4">
      <h2 className="text-center text-4xl font-bold mb-4">{title}</h2>
      <div className=" p-4 rounded-lg text-center border">
        <button onClick={scrollUp} className="bg-transparent mb-2">
          <Image
            width={500}
            height={500}
            src="/assets/images/techicons/arrow-up.svg"
            alt="Arrow Up"
            className="w-6 h-6 mx-auto"
          />
        </button>
        <div
          ref={scrollContainerRef}
          className="max-h-100  overflow-y-auto hide-scrollbar py-"
          style={{ scrollBehavior: "smooth" }}
        >
          {[...Array(Math.ceil(items.length / 3))].map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-center flex-wrap">
              {items
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((item: any, index: any) => (
                  <div key={index} className="w-1/3 px-2 text-center mb-4">
                    <div className="hidden md:flex lg:flex justify-center items-center h-22 w-22 m-auto bg-gray-50 border border-gray-300 rounded-full mb-2">
                      {item.link ? (
                        <Link href={item.link} className="m-auto">
                          <Image
                            width={700}
                            height={700}
                            src={item.icon}
                            alt={item.alt}
                            className="h-10 w-10"
                          />
                        </Link>
                      ) : (
                        <Image
                          width={700}
                          height={700}
                          src={item.icon}
                          alt={item.alt}
                          className="h-10 w-10 m-auto"
                        />
                      )}
                    </div>
                    <div className="flex md:hidden lg:hidden justify-center items-center h-16 bg-gray-200 rounded-md mb-2">
                      {item.link ? (
                        <Link href={item.link} className="m-auto">
                          <img
                            src={item.icon}
                            alt={item.alt}
                            className="h-8 w-8"
                          />
                        </Link>
                      ) : (
                        <Image
                          width={700}
                          height={700}
                          src={item.icon}
                          alt={item.alt}
                          className="h-8 w-8 m-auto"
                        />
                      )}
                    </div>
                    <h4
                      className="text-sm font-medium"
                      dangerouslySetInnerHTML={{
                        __html: item.name.replace(/\//g, "<br/>"),
                      }}
                    ></h4>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <button onClick={scrollDown} className="bg-transparent mt-2">
          <Image
            width={500}
            height={500}
            src="/assets/images/techicons/arrow-down.svg"
            alt="Arrow Down"
            className="w-6 h-6 mx-auto"
          />
        </button>
      </div>
    </div>
  );
};

// Main ServicesSection component
const ServicesCardSection = () => {
  return (
    <section         id="Services"
 className="scroll-smooth max-w-7xl p-4 md:p-16">
      <div className="my-5">
        <div className="container mx-auto px-0 md:px-5">
          <div className="flex flex-wrap -mx-4">
            <SectionCard title="Technology" items={data.technologies} />
            <SectionCard title="Services" items={data.services} />
            <SectionCard title="Industries" items={data.industries} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCardSection;
