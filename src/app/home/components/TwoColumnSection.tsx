"use client";
import Image from "next/image";
import React from "react";

interface TwoColumnSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  imageSrc: string;
  reverse?: boolean; // Toggle flex direction
  sectionClass?: string;
  textClass?: string;
  imageClass?: string;
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  id,
  title,
  subtitle,
  description1,
  description2,
  imageSrc,
  reverse = false,
  sectionClass = "",
  textClass = "",
  imageClass = "",
}) => {
  return (
    <section
      id={id}
      className={`min-h-[70vh] py-10 px-5 lg:px-20 flex flex-col lg:flex-row items-start justify-between gap-10 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${sectionClass} font-[montserrat]`}
    >
      {/* Text Content */}
      <div className={`flex-1 pt-4 ${textClass}`}>
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
          {title}
        </h2>
        <p className="text-xl text-blue-900 mb-2">{subtitle}</p>
        <p className="text-gray-700  mb-3">{description1}</p>
        <p className="text-gray-700 ">{description2}</p>
      </div>

      {/* Image */}
      <div className={`lg:w-2/5 ${imageClass}`}>
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default TwoColumnSection;
