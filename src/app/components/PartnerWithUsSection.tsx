import React from "react";

type PartnerCard = {
  imgSrc: string;
  title: string;
  description: string;
};

const partnerCards: PartnerCard[] = [
  {
    imgSrc: "/assets/images/icon/project.png",
    title: "Efficient Project Management",
    description:
      "Our agile project management guarantees timely delivery within budget. With detailed planning, milestones, and regular feedback, we reduce risks and keep your project on track from beginning to end.",
  },
  {
    imgSrc: "/assets/images/icon/active.png",
    title: "Dedicated Team of Experts",
    description:
      "Our skilled team collaborates with you closely to provide customised, high-quality solutions that match your business objectives, guaranteeing impactful and effective results",
  },
  {
    imgSrc: "/assets/images/icon/deal2.png",
    title: "Timely Project Completion",
    description:
      "We respect time. Our dedication to project completion on time, without ever sacrificing quality, has built us trust across industries, allowing you to proceed with confidence.",
  },
];

const PartnerWithUsSection: React.FC = () => {
  return (
    <section className="partner-with-us cs-partner-with-us py-16">
      <div className="section-heading text-left mb-8 m-auto ">
        <h2 className="text-4xl font-medium lg:w-3/4 ">
          Why Choose <span className="text-primary">WayOne?</span>
        </h2>
        <p className="mt-4 -lg text-gray-700 lg:w-3/5">
          With years of experience and a client-centric approach, we provide
          smooth collaboration, delivering innovative solutions that drive your
          business forward. Our emphasis on innovation, quality, and long-term
          success makes us the ideal partner for your next project.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerCards.map((card, index) => (
            <div key={index} className="col">
              <div className="card bg-white shadow-lg rounded-3xl h-100 p-2 lg:p-6 overflow-hidden">
                <div className="card-image p-4">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="mx-auto w-16 h-16 object-contain"
                  />
                </div>
                <div className="card-content text-center p-4">
                  <h1 className="text-xl font-medium lg:w-4/5 m-auto text-primary">
                    {card.title}
                  </h1>
                  <p className="mt-2 text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUsSection;
