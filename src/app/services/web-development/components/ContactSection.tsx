// components/HeroSection.js
export default function ContactHeroSection() {
    return (
      <section className="hero-section py-16 pt-28 bg-white">
        <div className=" mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Hero Content */}
            <div className="w-full lg:w-6/12">
              <div className="hero-content space-y-5">
                <span className="text-sm text-primary font-semibold uppercase tracking-widest">
                  Web Development Services – Wayone
                </span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Build Future-Ready <span className="text-primary">Websites with Wayone</span>
                </h1>
                <p className="text-gray-600 font-medium">Custom, Scalable & High-Performance Web Solutions</p>
                <p className="text-gray-700">
                  Elevate your online presence with WayOne's expert web development services. We specialize in designing
                  responsive, user-friendly websites that not only look great but also deliver tangible results. Our
                  solutions are tailored to meet your unique business needs, ensuring scalability and performance at
                  every step.
                </p>
                <div>
                  <a
                    href="#services"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                  >
                    View Portfolio <i className="bi bi-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
  
            {/* Hero Form */}
            <div className="w-full lg:w-4/12">
              <div className="hero-form-area bg-primary text-gray-50 p-6 rounded-3xl shadow-md">
                <form className="consultation-form space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Get a Free Consultation – Contact Us Today!</h3>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0Serci rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0Serci rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0Serci rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Business Name (Optional)"
                      className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0Serci rounded"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Enter your project requirements"
                      className="w-full p-3 border border-gray-300 bg-white text-gray-800 outline-0Serci rounded h-28 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
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
  