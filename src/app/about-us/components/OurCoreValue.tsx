// components/CoreValues.js
export default function OurCoreValue() {
    return (
      <section className="values py-16 ">
        <div className="mx-auto text-left mb-12">
          <h3 className="text-lg text-primary font-medium lg:w-3/4 uppercase mb-2">Our Core Values</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Pillars of Innovation, Excellence, and Integrity
          </h2>
          <p className="text-gray-700 font-[cabin] lg:w-4/5 mb-6">
            At WayOne, our core values are the foundation of everything we do. We are deeply committed to continuous
            innovation, maintaining the highest standards of excellence, and operating with integrity in all our business
            interactions. These principles guide us as we deliver exceptional IT solutions, ensuring that every project is
            built on a solid ethical and professional foundation. By upholding these values, we consistently provide
            innovative solutions that not only meet but exceed the expectations of our clients.
          </p>
        </div>
  
        <div className="container mx-auto text-center px-4">
          <div className="mb-12">
            <img
              src="/assets/images/Group 57.png"
              alt="Core Values Tree"
              className="mx-auto w-48 md:w-full"
            />
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-medium mb-2 text-primary">Innovation</h2>
              <p className="text-gray-600">
                Constantly pushing the boundaries with fresh ideas and forward-thinking solutions.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium mb-2 text-primary">Integrity</h2>
              <p className="text-gray-600">
                Operating with transparency, honesty, and ethical practices in every aspect of our business.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium mb-2 text-primary">Excellence</h2>
              <p className="text-gray-600">
                Striving for perfection and delivering high-quality, effective solutions.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium mb-2 text-primary">Collaboration</h2>
              <p className="text-gray-600">
                Fostering strong, lasting partnerships for mutual growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  