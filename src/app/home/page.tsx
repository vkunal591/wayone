"use client";
import Image from "next/image";
import React, { useState } from "react";
import HomeSection from "./components/Home";
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import TwoColumnSection from "./components/TwoColumnSection";
import ServicesCardSection from "./components/ServicesCardSection";
import ContactSectionHome from "./components/ContactSectionHome";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ClockCard from "./components/ClockCard";
import FloatingButtons from "./components/FlotingButtons";

const indiaData = [
  {
    icon: <FaMapMarkerAlt className="text-blue-700 text-xl" />,
    title: "Head Office",
    desc: "9 Laxmi Garden, 2nd floor above ICICI bank, Shivaji marg, New Delhi (110015)",
    link: "https://maps.google.com",
  },
  {
    icon: <FaPhone className="text-blue-700 text-xl" />,
    title: "Call Us",
    desc: "+91 759 9990 331",
    link: "tel:+917599990331",
  },
  {
    icon: <FaEnvelope className="text-blue-700 text-xl" />,
    title: "Email",
    desc: "info@wayone.co.in",
    link: "mailto:info@wayone.co.in",
  },
];

const dubayData = [
  {
    icon: <FaMapMarkerAlt className="text-blue-700 text-xl" />,
    title: "Head Office",
    desc: "Al Moosa Tower 18th floor Office no #1804, Sheikh Zayed Road, Dubai, U.A.E",
    link: "https://maps.google.com",
  },
  {
    icon: <FaPhone className="text-blue-700 text-xl" />,
    title: "Call Us",
    desc: "+971 055 6476 847",
    link: "tel:+9710556476847",
  },
  {
    icon: <FaEnvelope className="text-blue-700 text-xl" />,
    title: "Email",
    desc: "info@wayone.ae",
    link: "mailto:info@wayone.ae",
  },
];

const australiaData = [
  {
    icon: <FaMapMarkerAlt className="text-blue-700 text-xl" />,
    title: "Head Office",
    desc: "U19/10 Gladstone Rd, Castle Hill NSW 2154",
    link: "https://maps.google.com",
  },
  {
    icon: <FaPhone className="text-blue-700 text-xl" />,
    title: "Call Us",
    desc: "+61 041 1537 183",
    link: "tel:+610411537183",
  },
  {
    icon: <FaEnvelope className="text-blue-700 text-xl" />,
    title: "Email",
    desc: "sales@aboveallagency.com.au",
    link: "mailto:sales@aboveallagency.com.au",
  },
];

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMobileMenu = () => {
    console.log(isMobileMenuOpen);
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleScrollToSection = (label: string) => {
    setActive(label);
    const section = document.getElementById(label);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-[montserrat] scroll-smooth">
      {/* Navbar */}
      <nav className="w-full bg-white fixed z-50  flex flex-col shadow-md">
        {/* Decorative Bars */}
        <div className="relative w-full">
          <span className="w-full h-1.5 bg-blue-900 absolute top-0 z-[8]" />
          <span className="w-11/12 h-1 border-[1.7rem] border-b-0 z-[1] border-t-blue-900 absolute top-0 right-[-5%] border-transparent bg-transparent" />

          {/* Top Info Bar - hidden on small screens */}
          <ul className="flex absolute top-0 right-0 w-4/5 z-[100000] text-white text-xs bg-transparent items-center gap-4 py-1.5 px-2">
            {[
              "info@wayone.com",
              "+91 988 9988 909",
              "+91 759 9990 331",
              "9 Laxmi Garden, 2nd floor above ICICI bank, Shivaji marg, New Delhi (110015)",
            ].map((item, i) => (
              <li
                key={i}
                className={`whitespace-nowrap ${
                  i > 1 && "hidden md:inline-block"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-end lg:min-h-20  px-4 md:px-10 py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/images/logo.png"
              width={800}
              height={800}
              alt="Wayone IT Solutions PVT. LTD Logo"
              className="object-contain w-40 h-16 mt-3 lg:mt-0 md:w-40 lg:h-16"
            />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6">
            {["Home", "AboutUs", "Services", "Portfolio", "ContactUs"].map(
              (label, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleScrollToSection(label)}
                    className={`cursor-pointer transition-all duration-300 ease-in-out ${
                      active === label
                        ? "border-b-2 border-blue-900 text-blue-900"
                        : "border-b-2 border-transparent text-gray-700"
                    }`}
                  >
                    {label.replace(/([A-Z])/g, " $1").trim()}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with transition */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <ul className="flex flex-col items-center gap-3 py-4  bg-white border-t border-gray-200">
            {["Home", "AboutUs", "Services", "Portfolio", "ContactUs"].map(
              (label, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      handleScrollToSection(label);
                      toggleMobileMenu();
                    }}
                    className={`cursor-pointer transition-all duration-300 ease-in-out ${
                      active === label
                        ? "text-blue-900 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {label.replace(/([A-Z])/g, " $1").trim()}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
      {/* Page Sections */}
      <div className="pt-[5rem]">
        <HomeSection />
      </div>

      <AboutUsSection />

      <ServicesSection />
      <TwoColumnSection
        title="Meet the Dream Team: Where Creativity Meets Technology"
        subtitle="Together We're Stronger"
        description1="We are a multinational creative powerhouse, blending design expertise with cutting-edge technology and intelligent solutions to revolutionize your business. Our team is a unique mix of logical thinkers, creative innovators, and skilled problem-solvers."
        description2="Since 2015, we’ve grown with passionate, experienced, and tech-savvy professionals who are committed to bringing you the most appropriate solutions and strategic consultation. Every member of our team plays a key role in ensuring that our clients achieve their set goals."
        imageSrc="/assets/images/homepageTeam.png"
      />

      <TwoColumnSection
        title="Our Process: Turning Ideas into Global Products"
        subtitle="From Concept to Canvas, and Beyond"
        description1="At the heart of our approach is collaboration. We listen to your ideas, craft them into a tangible product, and then ensure its global presence. Our team designs websites and applications for Android and iOS with the utmost attention to detail, working closely with project stakeholders and clients at every step of the way."
        description2="Whether it’s a startup or an established enterprise, we bring your vision to life, delivering results that speak volumes."
        imageSrc="/assets/images/homepageTeam.png"
        reverse={true}
      />

      <ServicesCardSection />

      <ContactSectionHome />

      <section className="p-4 lg:p-10">
        <h2 className="text-4xl font-bold text-primary text-center">
          Our Branches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20 lg:gap-y-8 w-full max-w-7xl py-16">
          <ClockCard
            country="India"
            flag="/assets/images/india.webp"
            timezone="Asia/Kolkata"
            data={indiaData}
          />
          <ClockCard
            country="Dubai"
            flag="/assets/images/DUBAI.webp"
            timezone="Asia/Dubai"
            data={dubayData}
          />
          <ClockCard
            country="Australia"
            flag="/assets/images/Australia.webp"
            timezone="Australia/Sydney"
            data={australiaData}
          />
        </div>
      </section>
      <FloatingButtons />
    </div>
  );
}
