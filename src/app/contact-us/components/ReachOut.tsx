import Link from "next/link";

// components/ReachOut.js
export default function ReachOut() {
  return (
    <section className="reach-out py-16 ">
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <h6 className="text-primary uppercase tracking-wide font-semibold">Reach Out To Us</h6>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We Love to <span className="text-primary">Hear You</span>
        </h2>
        <p className="text-gray-700">
          Share your ideas and challenges, and let’s explore how we can drive success together.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* Email Support */}
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/icon/Vector.png"
              alt="Email Icon"
              className="w-8 h-8 mb-3"
            />
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <Link href="mailto:info@wayone.co.in" className=" hover:underline">
              info@wayone.co.in
            </Link>
          </div>

          {/* Visit Office */}
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/icon/Vector (1).png"
              alt="Location Icon"
              className="w-6 h-6 mb-3"
            />
            <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
            <p className="text-gray-700">
              9 Laxmi Garden, 2nd floor above ICICI bank,<br />
              Shivaji Marg, New Delhi (110015)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
