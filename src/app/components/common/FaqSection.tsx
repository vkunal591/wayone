"use client"
import Link from "next/link";
import { useState } from "react";

export default function FaqSection() {
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
        <section id="faq" className="py-20 ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-32" data-aos="fade-up">
                    <h2 className="text-3xl font-bold">
                        Frequently Asked Question (<span className="text-primary">FAQ's</span>)
                    </h2>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    {faqs.map((faq, index) => (
                        <div key={index} className="borser border-gray-200 rounded-xl bg-white shadow">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                            >
                                {faq.question}
                                <span className="text-xl">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600 text-sm">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div
                    className="mt-16 p-6 py-16 rounded-2xl relative overflow-hidden bg-primary flex flex-col space-y-4 justify-between items-center text-white"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h3 className="text-xl font-semibold">Let's Build Something Amazing Together!</h3>

                    <Link
                        href="/contact-us"
                        className="mt-4 md:mt-0 bg-white text-primary font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
                    >
                        Contact Now
                    </Link>
                    <img
                        src="../assets/images/icon/righcomputer.png"
                        alt="Computer Icon"
                        className="w-32 h-32 absolute left-[-1%]"
                    />
                    <img
                        src="../assets/images/icon/webdev.png"
                        alt="Code Icon"
                        className="w-32 h-32 absolute rotate-[-45deg] top-[-10%] right-0"
                    />
                </div>
            </div>
        </section>
    );
}
