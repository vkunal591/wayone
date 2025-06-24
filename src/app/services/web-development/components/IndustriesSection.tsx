import HeaderSection from "@/app/components/common/HeaderSection";
import Image from "next/image";
import Link from "next/link";
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
  { icon: <BsTruck size={32} />, label: "Logistics & Transportation" },
  { icon: <BsHouseGear size={32} />, label: "Real Estate & Construction" },
  { icon: <BsBook size={32} />, label: "Education & E-Learning" },
  { icon: <BsCupHot size={32} />, label: "Hospitality & Tourism" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-4 lg:py-16 bg-white">
      <div className="container mx-auto">
        {/* CTA Banner */}
        <div className="bg-primary relative overflow-hidden text-white text-center rounded-xl p-8 py-16 mb-16 shadow-lg">
          <p className="text-lg mb-4 lg:w-3/5 m-auto">
            Take advantage of our experience and advanced methods to ensure the
            success of your web app.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-6 py-2 rounded-full font-medium transition hover:bg-gray-100"
          >
            Kick Start Your Project
          </Link>
          <Image
            width={100}
            height={100}
            src="/assets/images/icon/righcomputer.png"
            alt="Computer Icon"
            className="w-32 h-32 absolute left-[-1%] bottom-0"
          />
          <Image
            width={100}
            height={100}
            src="/assets/images/icon/webdev.png"
            alt="Code Icon"
            className="w-32 h-32 absolute rotate-[-45deg] top-[-10%] right-0"
          />
        </div>

        <HeaderSection
          subtitle="Services Global Industries"
          title="Empowering Global Industries with  "
          br={false}
          highlight="Innovative IT Solutions"
          description="Wayone empowers businesses all over the world with bespoke apps that drive innovation, simplify processes, and provide unmatched value across sectors such as healthcare, finance, and retail."
          textAlign="text-left me-auto"
        />

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-4  rounded-xl hover:shadow-md transition"
            >
              <div className="text-primary rounded-xl bg-gray-100 p-6">
                {industry.icon}
              </div>
              <span className="text-center font-medium text-gray-800">
                {industry.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
