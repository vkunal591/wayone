"use client";
import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

interface TeamMember {
  name: string;
  image: string;
  position: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Maria Disuza",
    image: "/assets/images/team1.png",
    position: "Product Manager",
  },
  {
    name: "Wayne Ramano",
    image: "/assets/images/team2.png",
    position: "Software Deveoper",
  },
  {
    name: "Shonze Maria",
    image: "/assets/images/team3.png", // Replace with actual image
    position: "Senior Manager",
  },
];

const OurTeam: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="testimonials cs-testimonials section py-16"
    >
      <div className="section-heading text-left mb-12 lg:w-4/5 me-auto">
        <h4 className="text-primary">Meet Our Team</h4>
        <h2 className="text-3xl text-gray-800 font-medium">
          The Minds <span className="text-primary">Behind Innovation</span>
        </h2>
        <p className="mt-4 text-gray-700">
          Our team is a dynamic mix of thinkers, creators, and problem-solvers.
          Each member brings a unique set of skills and expertise to the table,
          contributing to our ability to push boundaries and deliver exceptional
          solutions. We’re passionate about technology and are dedicated to
          helping businesses succeed. With years of experience in IT and
          development, our team is committed to creating the future, one project
          at a time.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              {/* Image */}
              <Image
                height={400}
                width={400}
                src={member.image}
                alt={member.name}
                className="w-full h-auto object-cover"
              />

              {/* Bottom White to Top Transparent Overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, black -10%, transparent 50%)",
                }}
              />

              {/* Content */}
              <h2 className="absolute bottom-10 left-5 text-gray-50 text-2xl font-medium flex flex-col items-center gap-4 z-20">
                {member.name}
              </h2>
              <p className="absolute bottom-5 left-5 text-gray-200 text-sm flex flex-col items-center gap-4 z-20">
                {member?.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
