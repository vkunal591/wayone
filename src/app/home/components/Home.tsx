"use client";
import AnimatedButton from "@/app/components/common/AnimatedButton";
import Image from "next/image";
import { useState } from "react";
import { BiPhoneCall, BiSolidPhoneCall } from "react-icons/bi";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaClipboard,
  FaBriefcase,
} from "react-icons/fa";

export default function HomeSection() {
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
      id="Home"
      className="min-h-screen bg-cover bg-center p-4 lg:p-10 relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/assets/images/home.webp')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-red-900 opacity-90 z-0" />
      <div className=" w-full relative z-10 max-w-7xl rounded-xl  lg:p-8 flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          <p className="text-white text-sm font-medium">Welcome to WayOne</p>
          <h1 className="text-4xl font-bold text-gray-100 leading-tight">
            Let’s build something <span className="text-white">amazing</span>{" "}
            together.
          </h1>
          <p className="text-gray-200 text-base">
            Ready to turn your ideas into reality? We create innovative digital
            solutions that make your vision come to life. Whether you're
            launching a new project or enhancing an existing one, we're here to
            help every step of the way. Get Started
          </p>
          <AnimatedButton
            label="Get Started"
            href="/"
            onClick={() => console.log("Clicked!")}
            className="mt-4"
          />

          <Image
            src={"/assets/images/homesection.png"}
            width={800}
            height={800}
            alt=""
            className="object-contain"
          />
        </div>

        {/* Right Contact Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 shadow lg:w-3/4 m-auto p-4 py-8 rounded-2xl bg-white border-blue-800 border-4"
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
              <BiSolidPhoneCall className="absolute left-2 top-3 text-xl text-blue-900" />
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
            {/* 
            <div className="relative">
              <FaClipboard className="absolute left-2 top-3 text-blue-900" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full pl-8 pb-2 border-b-2 border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none"
              />
            </div> */}

            {/* <div className="relative">
              <FaBriefcase className="absolute left-2 top-3 text-blue-900" />
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full pl-8 pb-2 border-b-2 border-blue-900 bg-transparent text-gray-700 focus:outline-none"
              >
                <option value="" disabled>
                  Select Project Type
                </option>
                <option value="Website">Website</option>
                <option value="Mobile App">Mobile App</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div> */}

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
            <p className="text-xs text-gray-500 mt-2">
              <span className="font-semibold text-sm mr-2">Note:</span>
              We respect your privacy. Your details will never be shared.
            </p>
          </form>
        </div>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center w-[90%] max-w-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Thank You!
            </h3>
            <p className="text-gray-700 mb-6">
              Your request has been submitted successfully. We’ll get back to
              you soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
