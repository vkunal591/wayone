import Image from "next/image";
import Link from "next/link";
import { FaPaintBrush, FaLaptopCode, FaChartLine, FaTags } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";


interface PortfolioItem {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  link: string;
}

interface PortfolioSectionProps {
  layout?: string;
  sectionTitle: string;
  highlightedText: string;
  sectionDescription: string;
  portfolioItems: PortfolioItem[];
  classNames?: {
    section?: string;
    wrapper?: string;
    heading?: string;
    headingTitle?: string;
    highlighted?: string;
    headingDescription?: string;
    row?: string;
    portfolioItem?: string;
    itemContainer?: string;
    contentCol?: string;
    title?: string;
    tagsWrapper?: string;
    tag?: string;
    description?: string;
    button?: string;
    imageCol?: string;
    imageOuter?: string;
    imageInner?: string;
    image?: string;
  };
}


const tagIcons: any = {
  "UX/UI Design": <FaPaintBrush className="" />,
  "Development": <FaLaptopCode className="" />,
  "Strategy": <FaChartLine className="" />,
  "Quality Assurance": <SlBadge className="" />,
};

const PortfolioSection = ({
  layout = "",
  sectionTitle,
  highlightedText,
  sectionDescription,
  portfolioItems,
  classNames = {},
}: PortfolioSectionProps) => {
  return (
    <section className={`portfolio-page cs-portfolio py-16 ${classNames.section ?? ""}`}>
      <div className={`container mx-auto ${layout} ${classNames.wrapper ?? ""}`}>
        <div className={`section-heading text-left mr-auto ${classNames.heading ?? ""}`}>
          <h2 className={`text-4xl font-medium lg:w-3/4 mb-2 text-gray-800 ${classNames.headingTitle ?? ""}`}>
            {sectionTitle}{" "}
            <span className={`text-primary ${classNames.highlighted ?? ""}`}>{highlightedText}</span>
          </h2>
          <p className={`font-[cabin] lg:w-3/5 text-gray-600 ${classNames.headingDescription ?? ""}`}>
            {sectionDescription}
          </p>
        </div>

        <div className={`row grid grid-cols-1 gap-8 overflow-hidden ${classNames.row ?? ""}`}>
          {portfolioItems.map((item, index) => (
            <div key={index} className={`portfolio-item py-16 col-lg-12 col-sm-12 ${classNames.portfolioItem ?? ""}`}>
              <div className={`flex flex-col-reverse lg:flex-row items-center ${classNames.itemContainer ?? ""}`}>
                {/* Content */}
                <div className={`lg:w-1/2 lg:pl-4 ${classNames.contentCol ?? ""}`}>
                  <h3 className={`mt-4 mb-6 text-4xl font-medium text-gray-800 ${classNames.title ?? ""}`}>
                    {item.title}
                  </h3>



                  <p className={`text-gray-700 font-[cabin] mb-6 ${classNames.description ?? ""}`}>
                    {item.description}
                  </p>

                  <p className="text-gray-50 font-medium mb-4">Design & Development Process</p>
                  <div
                    className={`widebloktag cs-portfolio-work mb-4 text-sm text-gray-600 grid  md:grid-cols-2 gap-2 ${classNames.tagsWrapper ?? ""}`}
                  >
                    {item.tags.map((tag: any, i) => (
                      <span
                        key={i}
                        className={`flex items-center gap-2 px-4 py-2  text-white rounded-md text-xs `}
                      >
                        <span className="w-10 h-10 flex justify-center items-center text-2xl bg-white rounded-full text-primary">
                          {tagIcons[tag] ?? <FaTags className="text-white/70" />}
                        </span>
                        <span className="text-base">{tag}</span>
                      </span>
                    ))}
                  </div>


                  <Link
                    href={item.link}
                    className={`mt-6 inline-flex items-center  rounded-lg p-3 ${classNames.button ?? ""}`}
                  >
                    <span>Let's Discuss Your Project</span>
                    <i className="fas fa-chevron-right fa-icon ml-2" />
                    <span className="circle ml-2" />
                  </Link>
                </div>

                {/* Image */}
                <div className={`lg:w-1/2 ${classNames.imageCol ?? ""}`}>
                  <div className={`images-wide-blocktt overflow-hidden ${classNames.imageOuter ?? ""}`}>
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={800}
                        height={500}
                        className={` hover:scale-95 h-96 object-contain transition-all ease-in-out duration-300 rounded-lg ${classNames.image ?? ""}`}
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

export default PortfolioSection;
