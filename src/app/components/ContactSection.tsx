"use client";
import Image from "next/image";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setFormSubmitted(true);
  };

  return (
    <div className="wrapper cs-wrapper py-16">
      <div className="contact-container flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="contact-form w-full md:w-2/4 bg-gray-100 p-6 lg:p-16 rounded-4xl ">
          <h2 className="text-2xl font-medium text-left text-primary mb-4">
            Let’s Build the Future Together! Contact Us Today
          </h2>
          <p className=" text-gray-700 mb-6 text-left">
            Reach out now to discuss how our innovative solutions can accelerate your business growth and transform your digital landscape
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Phone Number (Optional)"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="submit-btn button-primary text-white py-3 px-6 rounded-lg w-full  transition duration-300"
            >
              Submit
            </button>
          </form>

          {formSubmitted && (
            <div className="mt-4 text-center text-green-600">
              <p>Thank you for reaching out! We will get back to you soon.</p>
            </div>
          )}
        </div>
        <div className="contact-image w-full md:w-2/4 rounded-4xl md:rounded-none overflow-hidden mb-8 md:mb-0">
          <Image
            width={900}
            height={700}
            src="/assets/images/image 08.png"
            alt="Company Building"
            className="lg:w-5/6"
          />
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
