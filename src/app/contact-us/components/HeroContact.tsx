"use client";
import { Post } from "@/utils/api";
import axios from "axios";
import { useState } from "react";

export const BASE_URL = process.env.BASE_URL;

export default function HeroContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.toString().trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validation (optional)
    setErrors((prevErrors: any) => {
      const updatedErrors = { ...prevErrors };
      if (name === "firstName" && !value.trim()) updatedErrors.firstName = "First name is required";
      else if (name === "firstName") delete updatedErrors.firstName;

      if (name === "lastName" && !value.trim()) updatedErrors.lastName = "Last name is required";
      else if (name === "lastName") delete updatedErrors.lastName;

      if (name === "email" && !value.trim()) updatedErrors.email = "Email is required";
      else if (name === "email") delete updatedErrors.email;

      if (name === "phone" && !value.toString().trim()) updatedErrors.phone = "Phone is required";
      else if (name === "phone") delete updatedErrors.phone;

      if (name === "message" && !value.trim()) updatedErrors.message = "Message is required";
      else if (name === "message") delete updatedErrors.message;

      return updatedErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const res: any = await Post(`/api/contact`, formData, 5000);
      console.log(res)
      if (res.success) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {

        setErrors({ form: res.message || "Failed to submit form" });
      }
    } catch (err) {
      console.log(err)
      setErrors({ form: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hero" className="hero py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-7/12">
              <div className="contact-form space-y-6">
                <h2 className="text-3xl md:text-4xl font-medium">
                  Let’s Connect and Build Something Amazing Together
                </h2>
                <p className="text-gray-700">
                  Contact us to explore innovative, results-driven solutions for your digital marketing goals.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        placeholder="First Name"
                        className={`w-full p-3 border rounded ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>
                    <div className="w-full md:w-1/2">
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Last Name"
                        className={`w-full p-3 border rounded ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                  </div>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    className={`w-full p-3 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="number"
                    placeholder="Phone Number"
                    className={`w-full p-3 border rounded ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className={`w-full p-3 border rounded ${errors.message ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                  {errors.form && (
                    <p className="text-red-500 text-sm text-center">{errors.form}</p>
                  )}

                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary w-full text-center text-white font-medium px-6 py-3 rounded-lg transition"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Form"}
                  </button>
                </form>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-5/12">
              <img
                src="/assets/images/contact-img.png"
                alt="Contact"
                className="mx-auto lg:mx-0 w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm text-center">
            <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
            <p>Your message has been submitted successfully.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-4 py-2 bg-primary text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
