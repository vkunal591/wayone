"use client";
import AnimatedButton from "@/app/components/common/AnimatedButton";
import Image from "next/image";
import React from "react";

export default function ServicesSection() {
  const clients = [
    "/assets/images/clients/client-1.png",
    "/assets/images/clients/client-2.png",
    "/assets/images/clients/client-3.png",
    "/assets/images/clients/client-4.png",
    "/assets/images/clients/client-5.png",
    "/assets/images/clients/client-6.png",
    "/assets/images/clients/client-7.png",
    "/assets/images/clients/client-8.png",
  ];

  return (
    <section
      id="Portfolio"
      className=" relative p-4 lg:p-10 bg-gray-100 font-[montserrat]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 from-30%  to-red-800 to-80% opacity-90 z-0" />

      <div className="relative">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-100">
            Your Project, Our Portfolio: Building Your Digital Legacy
          </h2>
        </div>

        {/* Infinite Logo Scroll */}
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="flex animate-marquee space-x-10">
            {clients.concat(clients).map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Client ${i + 1}`}
                width={150}
                height={80}
                className="object-contain bg-white p-1.5 px-4 h-14 rounded w-auto grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-12 max-w-3xl mx-auto text-gray-100 text-lg">
          <p>
            We don’t just offer services—we create digital experiences that
            elevate your brand. From custom development and branding to
            performance marketing and IT consulting, we equip businesses with
            innovative and scalable solutions tailored to their unique needs.
          </p>
        </div>
        <div className="w-full text-center pt-4">
          <AnimatedButton
            label="Get Started"
            href="#home"
            className="mx-auto inline-block"
          />
        </div>
      </div>
    </section>
  );
}
