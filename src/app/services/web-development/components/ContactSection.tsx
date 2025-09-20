"use client";

import { Post } from "@/utils/api";
import Link from "next/link";
import React, { useState } from "react";

export default function ContactHeroSection({
  title,
  heiglight,
  shortDesc,
  description,
  ctaText,
  ctaLink,
  subheading,
}: {
  title?: string;
  heiglight?: string;
  shortDesc?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  subheading?: string;
}) {
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
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())
    )
      newErrors.email = "Invalid email address.";
    if (!formData.subject.trim())
      newErrors.subject = "Subject is required.";
    if (!formData.message.trim())
      newErrors.message = "Message is required.";
    if (formData.phone && !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be exactly 10 digits.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Something went wrong.";
      setErrors({ form: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-section max-w-7xl m-auto p-4 lg:p-16 pt-28 bg-white">
      <div className="mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Hero Content */}
          <div className="w-full lg:w-6/12">
            <div className="hero-content space-y-5">
              {subheading && (
                <span className="text-base text-primary font-medium tracking-widest">
                  {subheading}
                </span>
              )}

              <h1 className="text-4xl md:text-4xl font-medium leading-tight text-gray-800">
                {title || "Build Future-Ready "}
                <span className="text-primary">
                  {heiglight || "Websites with Wayone"}
                </span>
              </h1>
              <p className="text-gray-600 text-lg font-medium">
                {shortDesc ||
                  "Custom, Scalable & High-Performance Web Solutions"}
              </p>
              <p className="text-gray-700 text-sm">
                {description ||
                  "Elevate your online presence with WayOne's expert web development services. We specialize in designing responsive, user-friendly websites that not only look great but also deliver tangible results. Our solutions are tailored to meet your unique business needs, ensuring scalability and performance at every step."}
              </p>
              <div>
                <Link
                  href={ctaLink || "#services"}
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  {ctaText || "View Portfolio"}
                  <i className="fa-solid fa-arrow-right text-primary bg-white p-2 rounded-full ml-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Form */}
          <div className="w-full lg:w-5/12 lg:pt-8">
            <div className="hero-form-area bg-primary text-gray-50 rounded-2xl shadow-md p-8">
              <form
                onSubmit={handleSubmit}
                className="consultation-form space-y-3"
              >
                <h3 className="font-medium mb-4">
                  Get a Free Consultation – Contact Us Today!
                </h3>

                <div className="flex gap-3">
                  <div className="w-full">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-300">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-300">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-300">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-300">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-300">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your project requirements"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg h-28 resize-none"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-300">{errors.message}</p>
                  )}
                </div>

                {errors.form && (
                  <p className="text-sm text-red-300">{errors.form}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${
                    loading ? "bg-gray-300" : "bg-white"
                  } text-primary font-medium py-2.5 rounded-lg transition`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {formSubmitted && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Thank You!
            </h2>
            <p className="text-gray-700">
              Your message has been sent successfully. We’ll get back to you
              soon.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
