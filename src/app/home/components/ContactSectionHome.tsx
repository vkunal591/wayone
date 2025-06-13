"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiMapPin, BiPhone, BiSolidPhoneCall } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaUser, FaPhone, FaEnvelope, FaBriefcase, FaClipboard } from "react-icons/fa";
// Example icon imports (adjust as per your icon library)

const data = [
  {
    icon: <BiMapPin className="w-5 h-5 text-blue-900" />,
    title: "Our Address",
    desc: "9 Laxmi Garden, 2nd floor above ICICI bank, Shivaji marg, New Delhi (110015)",
    link: "https://maps.google.com",
  },
  {
    icon: <BiPhone className="w-5 h-5 text-blue-900" />,
    title: "Call Us",
    desc: "+91 988 9988 909",
    link: "tel:+919889988909",
  },
  {
    icon: <BiPhone className="w-5 h-5 text-blue-900" />,
    title: "Call Us",
    desc: "+91 759 9990 331",
    link: "tel:+917599990331",
  },
  {
    icon: <CgMail className="w-5 h-5 text-blue-900" />,
    title: "Email",
    desc: "info@wayone.co.in",
    link: "mailto:info@wayone.co.in",
  },
];

export default function ContactSectionHome() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    project: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add actual form submission logic here (API call etc.)
    setShowModal(true);
    setFormData({ name: "", mobile: "", email: "", subject: "", project: "" });
  };
  return (
    <section
      id="ContactUs"
      className=" relative p-4 lg:p-10 bg-gray-100 font-[montserrat]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 from-30%  to-red-800 to-80% opacity-90 z-0" />

      <div className="relative">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:w-3/4 m-auto mb-4  font-bold text-gray-100">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-3xl text-white ">
            Let’s connect and transform your ideas into impactful,
            market-leading solutions
          </p>
        </div>
        <div className="grid lg:grid-cols-5 items-center gap-4">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 shadow  m-auto p-4 py-8 rounded-2xl bg-white border-blue-800 border-4"
            >
              <div className="relative">
                <FaUser className="absolute left-2 top-3 text-blue-900" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full pl-8 pb-2 border-b-1 border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>

              <div className="relative">
                <BiSolidPhoneCall className="absolute left-2 top-2 text-xl text-blue-900" />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile No"
                  className="w-full pl-8 pb-2 border-b-1 border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-2 top-3 text-blue-900" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-8 pb-2 border-b-1 border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>

              {/* <div className="relative">
                <FaClipboard className="absolute left-2 top-3 text-blue-900" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full pl-8 pb-2 border-b-1 border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none"
                />
              </div> */}

              <div className="relative">
                <FaBriefcase className="absolute left-2 top-3 text-blue-900" />
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full pl-8 pb-2 border-b-1 border-blue-900 bg-transparent text-gray-700 focus:outline-none"
                >
                  <option value="" disabled>
                    Select Project Type
                  </option>
                  <option value="Website">Website</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Project Details"
                  onChange={handleChange}
                  className="w-full pb-2 pl-2 border-b-1 border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition"
              >
                Submit
              </button>
              {/* <p className="text-xs text-gray-500 mt-2">
                <span className="font-semibold text-sm mr-2">Note:</span>
                We respect your privacy. Your details will never be shared.
              </p> */}
            </form>
          </div>
          <div className="lg:col-span-2 h-full">
            {" "}
            {/* Ensure this wrapper fills available height */}
            <div className="flex flex-col  gap-5 h-full shadow m-auto p-10 rounded-2xl bg-white border-blue-800 border-4">
              <h3 className="text-xl font-extrabold">Touch With Us</h3>

              <div className="flex flex-col justify-start gap-4 flex-1">
                {" "}
                {/* Optional: to stretch links */}
                {data.map((card, index) => (
                  <Link
                    key={index}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 pr-4 border-r border-gray-300 last:border-none"
                  >
                    <div className="mt-1 h-full">{card.icon}</div>
                    <div className="flex flex-col justify-center h-full">
                      <h4 className="text-lg font-semibold text-blue-900">
                        {card.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{card.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
