// components/AboutSection.tsx

import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const WhoWeAre = () => {
    return (
        <section id="about" className="">
            <div className="container mx-auto" data-aos="fade-up">
                <div className="flex flex-col lg:flex-row-reverse gap-10">
                    <div
                        className="lg:w-1/2 flex items-center justify-center"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                    >
                        <Image
                            src="/assets/images/whoweare.png"
                            alt="About WayOne"
                            width={600}
                            height={400}
                            className="object-contain w-full h-full"
                        />
                    </div>

                    <div
                        className="lg:w-1/2 flex flex-col justify-center lg:text-center lg:text-left"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="content">
                            <h3 className=" font-medium text-primary">Who We Are</h3>
                            <h2 className="text-4xl font-semibold text-gray-800 mt-4">
                                Smart {" "}
                                <span className="text-primary">
                                    Health & Fitness
                                </span> {" "}
                                Software Solutions
                            </h2>
                            <p className="text-base font-[cabin] text-gray-600 mt-4">
                                Wayone is a forward-thinking IT solutions provider committed to driving digital transformation. With expertise in cutting-edge technologies, we empower businesses with scalable, innovative, and efficient solutions tailored to their unique needs.
                            </p>
                            <p className="text-base font-[cabin] text-gray-600 mt-4">
                                Wayone is a forward-thinking IT solutions provider committed to driving digital transformation. With expertise in cutting-edge technologies, we empower businesses with scalable, innovative, and efficient solutions tailored to their unique needs.
                            </p>
                            <div className=" mt-8">
                                <Link
                                    href="/about"
                                    className=" inline-flex button-primary items-center justify-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary transition-all duration-300"
                                >
                                    <span>Know More</span>
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
