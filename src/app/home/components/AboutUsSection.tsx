"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";


const cards = [
  {
    icon: <FaCogs className="text-blue-900 text-5xl" />,
    title: "Custom Development",
    desc: "Your business is unique, and so are your challenges. We create bespoke solutions that perfectly match your needs, helping you stay ahead in a competitive market.",
  },
  {
    icon: <FaRocket className="text-blue-900 text-5xl" />,
    title: "Fast Delivery",
    desc: "We understand the urgency of business. Our agile approach ensures that we deliver high-quality solutions quickly, without compromising on precision.",
  },
  {
    icon: <FaUsers className="text-blue-900 text-5xl" />,
    title: "Expert Team",
    desc: "Our seasoned professionals bring deep industry expertise, working alongside you to drive success at every step. When you work with us, you have a team that’s invested in your growth.",
  },
  {
    icon: <FaLightbulb className="text-blue-900 text-5xl" />,
    title: "Innovative Solutions",
    desc: "We don’t just follow trends—we set them. Our forward-thinking mindset helps you tap into new opportunities and keep your business ahead of the curve.",
  },
  {
    icon: <FaShieldAlt className="text-blue-900 text-5xl" />,
    title: "Security First",
    desc: "We take your security seriously. Our robust security protocols ensure your data and platforms are safe from threats, so you can focus on what matters most: your business.",
  },
  {
    icon: <FaAward className="text-blue-900 text-5xl" />,
    title: "Proven Success",
    desc: "With a track record of success across diverse industries, we have the trust and confidence of clients who rely on us for exceptional results, time and time again.",
  },
];



export default function AboutUsSection() {
  return (
    <section
      id="AboutUs"
      className="min-h-screen p-4 lg:p-10 bg-white font-[montserrat]"
    >
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Image */}
        <div className="lg:w-2/5">
          <Image
            src="/assets/images/aboutussection.webp"
            alt="About Us"
            width={900}
            height={900}
            className="w-full h-auto  object-contain"
          />
        </div>

        {/* Right Content */}
        <div className=" lg:w-3/5">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Why Partner with Us?
          </h2>
          <p className="text-gray-700 mb-6">
            We don't just build solutions—we craft experiences. By combining the
            brilliance of human intelligence with groundbreaking technology, we
            deliver adaptive mobility solutions customised to a wide range of
            industries across the globe.
          </p>

          {/* Grid of Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 flex items-center h-full border-r border-gray-300 pr-4">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
