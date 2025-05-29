// components/HeroContact.js
export default function HeroContact() {
  return (
    <section id="hero" className="hero py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-7/12">
              <div className="contact-form space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Let’s Connect and Build Something Amazing Together
                </h2>
                <p className="text-gray-700">
                  Contact us to explore innovative, results-driven solutions for
                  your digital marketing goals.
                </p>

                <form className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full md:w-1/2 p-3 border border-gray-300 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full md:w-1/2 p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                  <textarea
                    placeholder="Message"
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded"
                  ></textarea>
                  <button
                    type="submit"
                    className=" bg-primary hover:bg-primary w-full text-center text-white font-semibold px-6 py-3 rounded-lg transition"
                  >
                    Submit Form
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
    </section>
  );
}
