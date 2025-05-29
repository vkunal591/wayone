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
                  <h2 className="text-4xl font-medium text-gray-800 mb-4">
                    Our Vision
                  </h2>
                  <p className="text-gray-700 text-justify text-lg font-[cabin]">
                    Our vision  is to be the most sought-after and best Mobile
                    and App development partner. Our goal is to empower
                    businesses through  the provision of innovative and scalable
                    technology solutions that meet changing client needs. With
                    the application of emerging and new technologies,
                    we aim to propel businesses towards success, growth, and
                    efficiency globally. With unshakable resolve to excellence,
                    quality, and dependability, we're constructing a
                    new universe of the digital age. We aspire to
                    provide custom IT solutions that not only support the
                    current needs of businesses but also predict tomorrow’s
                    prospects to help companies thrive in digital transformation
                    era.
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
                  <h2 className="text-4xl font-medium text-gray-800 mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-700 text-lg text-justify font-[cabin]">
                    Wayone believes in empowering companies
                    with groundbreaking IT solutions and digital
                    transformation skills that deliver actual outcomes. We
                    are dedicated to delivering actual business solutions by delivering value-based technology
                    solutions that fit every single
                    customer's requirement. Through maintaining leadership of the
                    current trends and being responsive in
                    a timely manner to emerging technologies,
                    we aim to offer quantifiable results in
                    the area of enhancing operating effectiveness,
                    business performance, and customer satisfaction. 
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
