import React from 'react';

export default function ContactHeroSection({ title, heiglight, shortDesc, description, ctaText, ctaLink, subheading }: {
  title?: string;
  heiglight?: string;
  shortDesc?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  subheading?: string;
}) {
  return (
    <section className="hero-section py-16 pt-28 bg-white">
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          {/* Hero Content */}
          <div className="w-full lg:w-6/12">
            <div className="hero-content space-y-5">
              {/* Optional Subheading */}
              {subheading && (
                <span className="text-base text-primary font-medium tracking-widest">
                  {subheading}
                </span>
              )}

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {title || "Build Future-Ready "}
                <span className="text-primary">{heiglight || "Websites with Wayone"}</span>
              </h1>
              <p className="text-gray-600 font-medium">{shortDesc || "Custom, Scalable & High-Performance Web Solutions"}</p>
              <p className="text-gray-700 text-sm">
                {description ? description : "Elevate your online presence with WayOne's expert web development services. We specialize in designing responsive, user-friendly websites that not only look great but also deliver tangible results. Our solutions are tailored to meet your unique business needs, ensuring scalability and performance at every step."}
              </p>
              <div>
                <a
                  href={ctaLink || "#services"}
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  {ctaText || "View Portfolio"} <i className="bi bi-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Form */}
          <div className="w-full lg:w-4/12">
            <div className="hero-form-area bg-primary text-gray-50 rounded-2xl shadow-md p-8">
              <form className="consultation-form space-y-3">
                <h3 className=" font-semibold mb-4">Get a Free Consultation – Contact Us Today!</h3>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Business Name (Optional)"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Enter your project requirements"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0 rounded-lg h-28 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-primary font-semibold py-2.5 rounded-lg  transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
