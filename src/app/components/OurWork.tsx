// components/PortfolioSection.tsx

import Image from "next/image";
import Link from "next/link";

interface OurWord {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  link: string;
}

const OurWords: OurWord[] = [
  {
    title: "Unifi Cars",
    description:
      "Unifi Cars is a reliable online platform for buying and selling used cars. We make things easy with easy-to-understand prices and intuitive interface, saving you time finding or selling your car fast and securely.",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    imageSrc: "/assets/images/UNIFICARS (2) 1.png",
    link: "/contact-us",
  },
  {
    title: "Wayon FX",
    description:
      "Wayone FX is a premier online trading platform that offers real-time information, tools, and resources for trading forex and cryptocurrencies. Through safe transactions and an easy-to-use interface, we enable traders to thrive in the international market.",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    imageSrc: "/assets/images/WAYONE (2) 1.png",
    link: "/contact-us",
  },
  {
    title: "Donlop",
    description:
      "Donlop is a leading destination for quality tyres. We have a variety of tyres for every type of vehicle, providing durability, safety, and performance. Get the perfect fit for your vehicle with our expert advice and product range.",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    imageSrc: "/assets/images/dunlopbahrain (1) 1.png",
    link: "/contact-us",
  },
  {
    title: "Saash",
    description:
      "Saash is a fashion brand offering elegant jewelry and curated gift boxes for women. Known for its oxidized silver-tone pieces and stylish designs, Saash combines tradition with modern aesthetics, making it a popular choice for trendy ethnic accessories.",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    imageSrc: "/assets/images/SASSHI (1) 1.png",
    link: "/contact-us",
  },
];

const OurWork = ({ layout }:{layout?: any}) => {
  return (
    <section className="portfolio-page cs-portfolio py-16">
      <div className={`container mx-auto ${layout}`}>
        <div className="section-heading text-left  mr-auto">
          <h2 className="text-4xl font-semibold lg:w-3/4 mb-4 text-gray-800">
            Showcasing <span className="text-primary">Our Excellence</span>
          </h2>
          <p className="font-[cabin] lg:w-3/5 text-gray-600">
            We specialize in delivering exceptional designs that blend
            creativity with functionality, ensuring that every project showcases
            our commitment to excellence and innovation.
          </p>
        </div>

        <div className="row grid grid-cols-1 gap-8">
          {OurWords.map((item, index) => (
            <div
              key={index}
              className="portfolio-item col-lg-12 col-sm-12 "
            >
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="lg:w-1/2">
                  <h3 className="mt-4 mb-6 text-4xl font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <div className="widebloktag cs-portfolio-work mb-4 text-sm text-gray-600">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block mr-2 px-4 py-2 bg-blue-800/10 text-primary text-white rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 font-[cabin] mb-6">{item.description}</p>
                  <Link
                    href={item.link}
                    className="mt-6 inline-flex items-center button-primary rounded-lg p-3  "
                  >
                    <span>Let's Discuss Your Project</span>
                    <i className="fas fa-chevron-right fa-icon ml-2" />
                    <span className="circle ml-2" />
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="images-wide-blocktt">
                    <div className="tilt-outer">
                      <div
                        className="innerwidedevice tilt-inner"
                        data-tilt
                        data-tilt-max="4"
                        data-tilt-speed="1000"
                        data-tilt-perspective="2000"
                      >
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          width={800}
                          height={500}
                          className="hover:scale-105 transition-all ease-in-out duration-300 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
