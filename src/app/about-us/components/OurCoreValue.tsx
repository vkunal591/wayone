// components/CoreValues.js
export default function OurCoreValue() {
  return (
    <section className="values py-16 ">
      <div className="mx-auto text-center mb-12">
        <h3 className="text-lg text-primary font-medium lg:w-3/4 m-auto uppercase mb-2">
          Our Core Values
        </h3>
        <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6">
          The Pillars of Innovation, Excellence and Integrity{" "}
        </h2>
        <p className="text-gray-700 font-[cabin] m-auto lg:w-4/5 mb-6">
          Our fundamental values drive everything we do. We have a dedication to
          continuous innovation, upholding the highest standards of excellence,
          and acting with integrity in every one of our business dealings. Our
          values influence the way we bring exceptional IT solutions and ensure
          each project we engage in is built on a sound ethical and professional
          foundation. By complying with these principles, we ensure that we have
          innovative solutions in place to accommodate and exceed expectations
          of clients.
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
            <h2 className="text-xl font-medium mb-2 text-primary">
              Innovation
            </h2>
            <p className="text-gray-600">
              Always pushing boundaries with new ideas.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-2 text-primary">Integrity</h2>
            <p className="text-gray-600">
              Transparent and ethical business practices.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-2 text-primary">
              Excellence
            </h2>
            <p className="text-gray-600">
              Commitment to delivering top-quality solutions.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-2 text-primary">
              Collaboration
            </h2>
            <p className="text-gray-600">
              Building strong partnerships for mutual growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
