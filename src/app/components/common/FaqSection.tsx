"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeaderSection from "./HeaderSection";

export default function FaqSection({ faqsData }: any) {
  const faqs = [
    {
      question: "Q1. How long does it take to develop a website?",
      answer:
        "The timeline for website development varies based on the complexity, features, and scope of the project. A simple informational website might take 2-4 weeks, while a complex e-commerce platform or web application could take 2-3 months or more. We provide detailed timelines during the planning phase after understanding your specific requirements.",
    },
    {
      question: "Q2. What technologies do you use for web development?",
      answer:
        "We use a variety of modern technologies based on project requirements. For frontend development, we work with HTML5, CSS3, JavaScript, React, Angular, and Vue.js. For backend development, we utilize Node.js, PHP, Python, Laravel, Express.js, and Django. Our database solutions include MySQL, PostgreSQL, MongoDB, and Firebase. We always select the technology stack that best fits your project's needs and business goals.",
    },
    {
      question: "Q3. Will my website be mobile-friendly and SEO-optimized?",
      answer:
        "Absolutely! All websites we develop are fully responsive and mobile-friendly, ensuring they look and function perfectly across all devices and screen sizes. We also implement SEO best practices throughout the development process, including proper HTML structure, meta tags, schema markup, optimized loading speeds, and mobile optimization to help your website rank well in search engines.",
    },
    {
      question: "Q4. Can you redesign my existing website?",
      answer:
        "Yes, we offer comprehensive website redesign services. We'll evaluate your current website, identify areas for improvement, and develop a strategy to enhance its design, functionality, and user experience. Whether you need a complete overhaul or specific improvements, we can help modernize your online presence while preserving your brand identity and improving conversion rates.",
    },
    {
      question: "Q5. Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer ongoing support and maintenance packages to ensure your website continues to perform optimally after launch. Our maintenance services include regular updates, security patches, performance monitoring, content updates, technical support, and troubleshooting. We have flexible maintenance plans that can be tailored to your specific needs and budget.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-4 lg:py-16 ">
      <div className="container mx-auto">
        <HeaderSection
          title="Frequently Asked Questions"
          highlight="FAQ's"
          description="We understand that you may have questions about our web development services. Below are some of the most frequently asked questions by our clients. If you have any other questions, feel free to reach out to us!"
        />
        <div
          className="space-y-4 mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {faqsData &&
            faqsData?.map((faq: any, index: any) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl bg-gray-200/40 shadow transition-all duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-6 text-left font-medium text-gray-800"
                >
                 {`Q${index+1}.`}{" "} {faq.question}
                  <span className="text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                <div
                  className={`px-6 text-gray-600 text-sm overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <div>{faq.answer}</div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-16 p-6 py-16 rounded-2xl relative overflow-hidden bg-primary flex flex-col space-y-4 justify-between items-center text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl text-center font-medium">
            Let's Build Something Amazing Together!
          </h3>

          <Link
            href="/contact-us"
            className="mt-4 md:mt-0 bg-white text-primary font-medium px-6 py-2 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Contact Now
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
      </div>
    </section>
  );
}
