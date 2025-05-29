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
      "Build an effortless shopping experience for your shoppers with a custom-developed e-commerce platform that optimizes conversions and customer loyalty.",
  },
  {
    icon: <BiLaptop className="text-4xl text-primary" />,
    title: "Web Application Development",
    description:
      "Create secure and scalable web design and development services that meet your unique business requirements, providing smooth functionality and customer satisfaction.",
  },
  {
    icon: <FaGear className="text-4xl text-primary" />,
    title: "Website Maintenance & Support",
    description:
      "Guarantee the performance and longevity of your website with our full maintenance services, including technical support, security checks, and updates.",
  },
  {
    icon: <BiWindow className="text-4xl text-primary" />,
    title: "CMS Development",
    description:
      "Organize your content easily with our customised CMS solutions, created to offer you complete control while providing simplicity and flexibility.",
  },
  {
    icon: <BiPalette className="text-4xl text-primary" />,
    title: "UI/UX Design & Development",
    description:
      "Design an intuitive, engaging user interface with smooth design and development that improves user experience, boosts engagement, and drives conversions.",
  },
  {
    icon: <FaLaptop className="text-4xl text-primary" />,
    title: "Custom Website Development",
    description:
      "From conceptualization to deployment, we deliver bespoke websites designed to scale with your business and meet your long-term goals.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section pb-16   ">
      <div className="container mx-auto ">

        <HeaderSection
          subtitle="Our Web Development Services"
          title="Crafting Scalable, High-Performance Websites "
          br={false}
          highlight="for Every Business"
          description="From online stores to custom web design and development services. Wayone ensures that your web solution is built with scalability and performance in mind."
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
