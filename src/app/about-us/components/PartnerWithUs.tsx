// components/PartnerWithUs.js
export default function PartnerWithUs() {
    return (
      <section className="partner-with-us py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6">Why Partner with Us?</h2>
          <p className="text-gray-700">
            At WayOne, we pride ourselves on delivering innovative, secure, and reliable trading solutions. Whether you're
            a beginner or an experienced trader, our platform is designed to support your success in the global market,
            providing you with a seamless and professional trading experience.
          </p>
        </div>
  
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <img
                  src="/assets/images/icon/project.png"
                  alt="Efficient Project Management"
                  className="mx-auto w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Efficient Project Management</h3>
              <p className="text-gray-600">
                We ensure that all your trading activities are carried out with the utmost precision. Our intuitive
                platform and expert team simplify the trading process, allowing you to concentrate on key decisions and
                strategies without any unnecessary distractions or delays.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <img
                  src="/assets/images/icon/active.png"
                  alt="Expert Team at Your Service"
                  className="mx-auto w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team at Your Service</h3>
              <p className="text-gray-600">
                Our team at WayOne consists of skilled professionals who are dedicated to supporting you every step of the way.
                From real-time market analysis to round-the-clock customer support, our experts are always available to help
                you achieve a successful trading journey.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <img
                  src="/assets/images/icon/deal.png"
                  alt="Timely Project Completion"
                  className="mx-auto w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Timely Project Completion</h3>
              <p className="text-gray-600">
                Time is valuable, and we understand that. Our platform ensures that all tasks, from trade execution to
                account management, are completed within agreed timeframes. With our efficient service, we help you stay
                ahead of the competition and meet your trading goals on time.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  