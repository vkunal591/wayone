import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

interface WhoWeAreProps {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  subheading: string;
  highlightedText: string;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
  reverseLayout?: boolean; // Optional: switch image and text sides
}

const WhoWeAre = ({
  id = "about",
  imageSrc,
  imageAlt,
  heading,
  subheading,
  highlightedText,
  paragraphs,
  linkText,
  linkHref,
  reverseLayout = true,
}: WhoWeAreProps) => {
  return (
    <section id={id} className="">
      <div className="container mx-auto" data-aos="fade-up">
        <div className={`flex flex-col ${reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10`}>
          {/* Image Block */}
          <div
            className="lg:w-1/2 rounded-4xl overflow-hidden flex items-center justify-center lg:p-10"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Block */}
          <div
            className="lg:w-1/2 flex flex-col justify-center lg:text-center lg:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3 className="font-medium text-primary">{heading}</h3>
              <h2 className="text-4xl font-semibold text-gray-800 mt-4">
                {subheading}{" "}
                <span className="text-primary">{highlightedText}</span>
              </h2>
              {paragraphs.map((text, index) => (
                <p key={index} className="text-base font-[cabin] text-gray-600 mt-4">
                  {text}
                </p>
              ))}
              <div className="mt-8">
                <Link
                  href={linkHref}
                  className="inline-flex button-primary items-center justify-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary transition-all duration-300"
                >
                  <span>{linkText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
