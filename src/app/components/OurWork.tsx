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
      "Unifi Cars specializes in the buying and selling of used cars. With a wide selection of quality pre-owned vehicles, they ensure a smooth and transparent process for both sellers and buyers.",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    imageSrc: "/assets/images/UNIFICARS (2) 1.png",
    link: "/contact-us",
  },
  // {
  //   title: "Esteem Cars",
  //   description:
  //     "Esteem Cars is a trusted name in the preowned car market. They offer thoroughly inspected, verified, and well-maintained cars, making them ideal for a hassle-free car purchase experience.",
  //   tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
  //   imageSrc: "/assets/images/esteem cars.png",
  //   link: "/contact-us",
  // },
  {
    title: "Esteem Finance",
    description:
      "Esteem Finance provides easy and accessible financing for used car buyers, with customised loan options, competitive interest rates, and minimal paperwork for quick approvals.",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    imageSrc: "/assets/images/Esteem Finance.png",
    link: "/contact-us",
  },
  {
    title: "BYD",
    description:
      "BYD (Build Your Dreams) is a global leader in electric vehicles, offering innovative and sustainable mobility solutions focused on performance, safety, and energy efficiency.",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    imageSrc: "/assets/images/BYD.png",
    link: "/contact-us",
  },
  {
    title: "Books Wagon",
    description:
      "Books Wagon is an online bookstore with a vast collection ranging from academic and competitive exam materials to novels and children’s literature, catering to every reader.",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    imageSrc: "/assets/images/BooksWagon.png",
    link: "/contact-us",
  },
  {
    title: "Dunlop",
    description:
      "Dunlop is a renowned tyre brand offering durable and high-performance tyres for cars, bikes, and commercial vehicles, trusted for safety and reliability worldwide.",
    tags: ["UX/UI Design", "Development", "Strategy", "Quality Assurance"],
    imageSrc: "/assets/images/dunlopbahrain 1 (1).png",
    link: "/contact-us",
  }
]

const OurWork = ({ layout }: { layout?: any }) => {
  return (
    <section className="portfolio-page cs-portfolio py-16">
      <div className={`container mx-auto ${layout}`}>
        <div className="section-heading text-left  mr-auto">
          <h2 className="text-4xl font-medium lg:w-3/4 mb-4 text-gray-800">
            Where Every Project Tells a  <span className="text-primary">Story of Innovation</span>
          </h2>
          <p className="font-[cabin] lg:w-3/5 text-gray-600">
            We design bespoke digital solutions that combine creativity, technology, and strategy—every project reflecting our commitment to innovation, creating tangible impact and useful user experiences on a variety of industries and platforms.
          </p>
        </div>

        <div className="row grid grid-cols-1 ">
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
                    className="mt-6 inline-flex items-center text-sm button-primary rounded-lg p-3  "
                  >
                    <span>Let's Discuss Your Project</span>
                    <i className="fas fa-chevron-right fa-icon ml-2" />
                    <span className="circle ml-2" />
                  </Link>
                </div>
                <div className="lg:w-1/2 ">
                  <div className="images-wide-blocktt overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={800}
                      height={500}
                      className=" hover:scale-95 h-96 object-contain transition-all ease-in-out duration-300 rounded-lg"
                    />
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
