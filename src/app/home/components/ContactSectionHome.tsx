"use client";

import { Post } from "@/utils/api";
import Link from "next/link";
import React, { useState } from "react";
import { BiMapPin, BiPhone, BiSolidPhoneCall } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.subject.trim()) newErrors.subject = "Please select a project type.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be exactly 10 digits.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      await Post("/api/contact", formData, 5000);
      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error: any) {
      const message = error?.response?.data?.message || "Something went wrong.";
      setErrors({ form: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="ContactUs"
      className="relative p-4 lg:p-10 bg-gray-100 font-[montserrat]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 from-30% to-red-800 to-80% opacity-90 z-0" />
      <div className="relative">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:w-3/4 m-auto mb-4 font-bold text-gray-100">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-3xl text-white">
            Let’s connect and transform your ideas into impactful, market-leading solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-5 items-center gap-4">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 shadow m-auto p-4 py-8 rounded-2xl bg-white border-blue-800 border-4"
            >
              {/* First + Last Name */}
              <div className="flex items-center justify-between gap-4">
                <div className="relative w-full">
                  <FaUser className="absolute left-2 top-3 text-blue-900" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full pl-8 pb-2 border-b border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div className="relative w-full">
                  <FaUser className="absolute left-2 top-3 text-blue-900" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full pl-8 pb-2 border-b border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <BiSolidPhoneCall className="absolute left-2 top-2 text-xl text-blue-900" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile No"
                  className="w-full pl-8 pb-2 border-b border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-2 top-3 text-blue-900" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-8 pb-2 border-b border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Subject Select */}
              <div className="relative">
                <FaBriefcase className="absolute left-2 top-3 text-blue-900" />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full pl-8 pb-2 border-b border-blue-900 bg-transparent text-gray-700 focus:outline-none"
                >
                  <option value="" disabled>Select Project Type</option>
                  <option value="Website">Website</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Marketing">Marketing</option>
                </select>
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Project Details"
                  className="w-full pb-2 pl-2 border-b border-blue-900 bg-transparent placeholder-gray-500 focus:outline-none resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Global form error */}
              {errors.form && <p className="text-red-500 text-center">{errors.form}</p>}

              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {formSubmitted && (
                <p className="text-green-600 text-sm text-center">
                  Thank you! We'll contact you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 h-full">
            <div className="flex flex-col gap-5 h-full shadow m-auto p-10 rounded-2xl bg-white border-blue-800 border-4">
              <h3 className="text-xl font-extrabold">Touch With Us</h3>
              <div className="flex flex-col justify-start gap-4 flex-1">
                {data.map((card, index) => (
                  <Link
                    key={index}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 pr-4 border-r border-gray-300 last:border-none"
                  >
                    <div className="mt-1">{card.icon}</div>
                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold text-blue-900">{card.title}</h4>
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
