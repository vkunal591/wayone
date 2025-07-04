"use client"
// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeroSection = ({
  client = false,
  title1,
  title2,
  description,
  awardShow = false,
  primaryLink,
  secondaryLink,
  primaryLinkTitle,
  secondaryLinkTitle,
}: {
  client?: boolean;
  title1?: any;
  title2?: any;
  description?: any;
  awardShow?: any;
  primaryLink?: any;
  secondaryLink?: any;
  primaryLinkTitle?: any;
  secondaryLinkTitle?: any;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="hero" className="hero section px-4  pt-[6rem]">
      <div className="container mx-auto text-center ">
        <motion.div
          ref={ref}
          variants={fadeUpVariant}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center justify-center space-y-8 lg:space-y-5"
        >
          {client && (
            <div className="happy-client flex items-center gap-2 py-10">
              <Image
                src="/assets/images/happy-client.png"
                alt="Happy Client"
                width={70}
                height={70}
              />
              <p className="text-base text-gray-700 font-medium">
                50k Satisfied Customer
              </p>
            </div>
          )}

          <h1 className="text-3xl md:text-3xl lg:text-5xl/16 font-medium text-gray-800">
            {title1 || "Advanced Web & App Development "} <br className="hidden md:inline" />
            <span className="text-primary">
              {title2 || "Solutions for  Your Business"}
            </span>
          </h1>

          <p className="text-lg font-[cabin] lg:w-4/5 text-gray-600 px-4 md:px-16">
            {description ||
              "We provide innovative and scalable web and mobile application solutions, developed with latest  technologies and framework to improve performance, guarantee system reliability, and business efficiency across various digital platforms"}
          </p>

          <div className="hero-btn flex space-x-4 justify-center">
            {primaryLink && (
              <Link
                href={primaryLink ?? "/about-us"}
                className="btn1 text-sm button-primary text-white px-6 py-3 rounded-md flex items-center space-x-2 "
              >
                <span>{primaryLinkTitle}</span>
                <IoArrowForward className="bg-white p-1 text-primary rounded-full text-2xl" />
              </Link>
            )}
            {secondaryLink && (
              <Link
                href={secondaryLink ?? "/about-us"}
                className="btn2 text-sm button-seondary border border-blue-800 text-gray-800 px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-gray-300"
              >
                <span>{secondaryLinkTitle}</span>
                <IoArrowForward className="bg-primary p-1 text-white rounded-full text-2xl" />
              </Link>
            )}
          </div>

          {awardShow && (
            <div className="container lg:mt-8 m-auto lg:max-w-4xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="w-full flex items-center justify-center"
                  >
                    <Image
                      src={`/assets/images/0${num}.png`}
                      alt={`Award ${num}`}
                      width={750}
                      height={700}
                      className="w-4/5 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
