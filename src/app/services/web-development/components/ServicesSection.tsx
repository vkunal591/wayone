// components/ServicesSection.js
import HeaderSection from "@/app/components/common/HeaderSection";
import { BiCart, BiLaptop, BiWindow, BiPalette } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const services = [
  {
    icon: <BiCart className="text-4xl text-primary" />,
    title: "E-Commerce Development",
    description:
      "We build secure, scalable, and customized e-commerce platforms tailored to your unique business needs. From personalized storefronts to smooth checkout processes, we help you increase sales and enhance customer experiences.",
  },
  {
    icon: <BiLaptop className="text-4xl text-primary" />,
    title: "Web Application Development",
    description:
      "Our team develops robust web applications that address real-world challenges. Whether it's a custom dashboard, SaaS product, or internal tool, we focus on performance, security, and delivering user-centered solutions.",
  },
  {
    icon: <FaGear className="text-4xl text-primary" />,
    title: "Website Maintenance & Support",
    description:
      "Keep your website running smoothly with our ongoing maintenance and support services. We manage updates, backups, performance optimization, and security monitoring, so you can focus on growing your business.",
  },
  {
    icon: <BiWindow className="text-4xl text-primary" />,
    title: "CMS Development",
    description:
      "We create flexible and user-friendly content management systems using platforms like WordPress, Strapi, and headless CMS solutions. Empower your team to manage content easily and scale your website as your business grows.",
  },
  {
    icon: <BiPalette className="text-4xl text-primary" />,
    title: "UI/UX Design & Development",
    description:
      "We craft intuitive, visually appealing user experiences that engage and convert. By blending design thinking with the latest UI trends, we create interfaces that not only look great but drive user satisfaction and business success.",
  },
  {
    icon: <FaLaptop className="text-4xl text-primary" />,
    title: "Custom Website Development",
    description:
      "From initial concept to final launch, we develop fully customized websites that align with your brand and business objectives. Whether it’s a business website, landing page, or a complex web solution, we deliver responsive, fast, and future-ready solutions.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section pb-16   ">
      <div className="container mx-auto ">

        <HeaderSection
          subtitle="Our Web Development Services"
          title="Transforming Ideas into"
          br={true}
          highlight="Powerful Websites"
          description="At WayOne, we specialize in turning your ideas into high-performance websites that help you achieve your business goals. Our services are designed to ensure a seamless online experience, from concept to execution"
          textAlign="text-left me-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-200/40 p-6 text-center rounded-4xl shadow transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
            >
              <div className="mb-4 mx-auto bg-white inline-block rounded-full p-4 text-3xl">{service.icon}</div>
              <h3 className="text-xl text-primary font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600 text-justify font-[cabin]">{service.description}</p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
