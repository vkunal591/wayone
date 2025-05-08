// components/VisionMission.js
export default function OurVission() {
  return (
    <section className="vision-mission py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Vision */}
          <div className="lg:w-1/2">
            <div className="flex gap-4">
              <div className="w-12">
                <div className="image-wrapper">
                  <img src="/assets/images/Group 59.png" alt="Vision Icon" />
                </div>
              </div>
              <div className="flex-1">
                <div className="content">
                  <h2 className="text-4xl font-medium text-gray-800 mb-4">Our Vision</h2>
                  <p className="text-gray-700 text-justify text-lg font-[cabin]">
                    At WayOne, our vision is to be India's most trusted and sought-after IT solutions and digital
                    transformation partner. We aim to empower businesses by providing innovative, scalable technology
                    solutions that address the ever-evolving needs of our clients. By leveraging emerging technologies,
                    we help businesses navigate the path to success, growth, and operational efficiency. With a strong
                    commitment to excellence, quality, and reliability, we are building a new digital landscape for the
                    businesses of tomorrow. Our focus is on delivering custom IT solutions that not only cater to the
                    current needs of businesses but also anticipate future opportunities, helping them thrive in this
                    era of rapid digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="lg:w-1/2">
            <div className="flex gap-4">
              <div className="w-12">
                <div className="image-wrapper">
                  <img src="/assets/images/Group 59.png" alt="Mission Icon" />
                </div>
              </div>
              <div className="flex-1">
                <div className="content">
                  <h2 className="text-4xl font-medium text-gray-800 mb-4">Our Mission</h2>
                  <p className="text-gray-700 text-lg text-justify font-[cabin]">
                    At WayOne, we believe in empowering businesses by providing innovative IT solutions and digital
                    transformation expertise that deliver real, measurable results. We are committed to offering
                    value-driven technology solutions that are tailored to meet the unique needs of every client.
                    By staying ahead of current trends and staying agile in adopting emerging technologies, we aim to
                    drive quantifiable outcomes in improving operational efficiency, boosting business performance, and
                    enhancing customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
