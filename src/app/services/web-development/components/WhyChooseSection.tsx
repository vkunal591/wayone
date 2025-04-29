export default function WhyChooseUsSection() {
    const features = [
      {
        icon: "bi-kanban",
        title: "Efficient Project Management",
        description:
          "We ensure that all your trading activities are carried out with the utmost precision. Our intuitive platform and expert team simplify the trading process, allowing you to concentrate on key decisions and strategies without any unnecessary distractions or delays.",
      },
      {
        icon: "bi-people",
        title: "Expert Team at Your Service",
        description:
          "Our team at WayOne consists of skilled professionals who are dedicated to supporting you every step of the way. From real-time market analysis to round-the-clock customer support, our experts are always available to provide the assistance you need for a successful trading journey.",
      },
      {
        icon: "bi-clock-history",
        title: "Timely Project Completion",
        description:
          "Time is valuable, and we understand that. Our platform ensures that all tasks, from trade execution to account management, are completed within the agreed timeframes. With our efficient service, we help you stay ahead of the competition and meet your trading goals on time.",
      },
    ];
  
    return (
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold">
              Why Choose <span className="text-primary">WayOne</span>
            </h2>
            <p className="mt-4 text-gray-600">
              WayOne is a modern web app solution built for speed, security, and scalability. With a modular
              architecture, cloud-ready setup, and developer-friendly tools, it simplifies building and
              maintaining high-performance applications for startups and enterprises alike.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition-all"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="flex justify-center mb-4 text-primary text-4xl">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-sm text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  