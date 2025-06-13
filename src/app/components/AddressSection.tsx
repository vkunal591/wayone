import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddressSection: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="h-full flex flex-col lg:flex-row items-center justify-between relative">
        {/* Right Side (India) */}
        <div className="inline-block w-full md:1/3">
          <div className="cs-address-bo w-full text-center lg:text-left justify-start">
            <div className="img w-4/5 mx-auto  lg:mx-0">
              <Image
                width={900}
                height={900}
                src="/assets/images/india.png"
                alt="India"
                className="w-full "
              />
            </div>
            <h2 className="text-2xl text-primary font-medium mt-4">INDIA</h2>
            <Link
              href={"tel:+919889988909"}
              className="pr-2 border-r-[1.5px] border-gray-400"
            >
              +91 9889 9889 09
            </Link>

            <Link href={"tel:+917599990331"} className="pl-2">
              +91 7599 9903 31
            </Link>
            <p className="pe-5 text-gray-700 mt-2">
              9 Laxmi Garden, 2nd floor above ICICI bank, <br />
              Shivaji marg, New Delhi (110015)
            </p>
          </div>
        </div>

        {/* Mid Side (Australia) */}
        <div className="inline-block w-full md:1/3">
          <div className="cs-address-bo w-full  text-center  lg:text-center  md:border-l-2 md:border-r-2 border-gray-300 px-8">
            <div className="img  mx-auto  lg:mx-0">
              <Image
                width={900}
                height={900}
                src="/assets/images/dubai city line-01 1.png"
                alt="India"
                className="w-full"
              />
            </div>
            <h2 className="text-2xl text-primary font-medium mt-4">DUBAI</h2>
            <Link href={"tel:+971 0556476847"}>+971 0556 4768 47</Link>
            <p className="pe-5 text-gray-700 mt-2">
              Al Moosa Tower 18th floor Office no #1804, Sheikh Zayed Road,
              Dubai, U.A.E
            </p>
          </div>
        </div>

        {/* Left Side (Dubai) */}
        <div className="inline-block w-full md:1/3">
          <div className="cs-address-box flex flex-col lg:items-end w-full  text-center lg:text-right mt-8 lg:mt-0">
            <div className="img w-3/4 ml-auto mx-auto md:mx-0">
              <Image
                width={900}
                height={900}
                src="/assets/images/australlia.png"
                alt="Dubai"
                className="w-full  py-6"
              />
            </div>
            <h2 className="text-2xl text-primary font-medium mt-4">
              AUSTRALIA
            </h2>
            <Link href={"tel:+610411537183"}>+61 0411 5371 83</Link>
            <p className="text-gray-700 mt-2">
              U19/10 Gladstone Rd, castle Hill NSW 2154
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
