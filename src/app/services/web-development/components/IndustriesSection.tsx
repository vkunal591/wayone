import {
    BsHospital,
    BsBank,
    BsShop,
    BsBuilding,
    BsTruck,
    BsHouseGear,
    BsBook,
    BsCupHot,
    BsFuelPump,
    BsTicketPerforated,
  } from "react-icons/bs";
  
  const industries = [
    { icon: <BsHospital size={32} />, label: "Healthcare" },
    { icon: <BsBank size={32} />, label: "Finance & Banking" },
    { icon: <BsShop size={32} />, label: "Retail & E-Commerce" },
    { icon: <BsBuilding size={32} />, label: "Government & Smart Cities" },
    { icon: <BsTruck size={32} />, label: "Logistics & Transportation" },
    { icon: <BsHouseGear size={32} />, label: "Real Estate & Construction" },
    { icon: <BsBook size={32} />, label: "Education & E-Learning" },
    { icon: <BsCupHot size={32} />, label: "Hospitality & Tourism" },
    { icon: <BsFuelPump size={32} />, label: "Oil & Gas / Energy" },
    { icon: <BsTicketPerforated size={32} />, label: "Event & Ticket" },
  ];
  
  export default function IndustriesSection() {
    return (
      <section id="industries" className="py-20 bg-white">
        <div className="container mx-auto px-4">
  
          {/* CTA Banner */}
          <div className="bg-primary text-white text-center rounded-xl p-8 py-16 mb-16 shadow-lg">
            <p className="text-lg mb-4 lg:w-3/5 m-auto">
              Take advantage of our experience and advanced methods to ensure the success of your web app.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-6 py-2 rounded-full font-semibold transition hover:bg-gray-100"
            >
              Kick Start Your Project
            </a>
          </div>
  
          {/* Industry Info */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-primary text-sm font-medium uppercase tracking-wide mb-2">
              Serving Global Industries
            </div>
            <h2 className="text-3xl font-bold">Empowering Global Industries with</h2>
            <h2 className="text-3xl font-bold text-primary mb-4">Innovative IT Solutions</h2>
            <p className="text-gray-600">
              At WayOne, we provide cutting-edge IT solutions that empower industries worldwide. Our tailored
              services drive growth, efficiency, and transformation, helping businesses stay competitive in an
              ever-evolving digital landscape.
            </p>
          </div>
  
          {/* Industry Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="text-primary mb-3">{industry.icon}</div>
                <span className="text-center font-medium text-gray-800">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  