"use client";
import { Post } from "@/utils/api";
import Image from "next/image";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.firstName.trim()) newErrors.name = "Name is required.";
    if (!formData.lastName.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    // Validate 10-digit phone if provided
    if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Live validation on input change
    setErrors((prev: any) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      await Post("/api/contact", {
        firstName: formData.firstName,
        lastName: formData?.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: "General Contact",
        message: formData.message,
      }, 5000);

      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
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
            <div className="flex items-center justify-between gap-4 ">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone Number (Optional)"
                className={`w-full p-3 border rounded-lg ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {errors.form && (
              <p className="text-red-500 text-sm text-center">{errors.form}</p>
            )}

            <button
              type="submit"
              className="submit-btn button-primary text-white py-3 px-6 rounded-lg w-full transition duration-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
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
