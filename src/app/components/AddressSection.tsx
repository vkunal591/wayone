import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AddressSection: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="h-full flex flex-col lg:flex-row items-center justify-between relative">

        {/* Right Side (India) */}
        <Link href={"/"} className='inline-block w-full md:1/3' >
          <div className="cs-address-bo w-full text-center lg:text-left justify-start">
            <div className="img w-4/5 mx-auto  lg:mx-0">
              <Image width={900} height={900} src="/assets/images/india.png" alt="India" className="w-full " />
            </div>
            <h2 className="text-2xl text-primary font-semibold mt-4">INDIA</h2>
            <p className="pe-5 text-gray-700 mt-2">
              9 Laxmi Garden, 2nd floor above ICICI bank, <br />
              Shivaji marg, New Delhi (110015)
            </p>
          </div>
        </Link>

        {/* Mid Side (Australia) */}
        <Link href={"https://aboveallagency.com.au/"} target='blank' className='inline-block w-full md:1/3' >
          <div className="cs-address-bo w-full  text-center  lg:text-center  md:border-l-2 md:border-r-2 border-gray-300 px-8">
            <div className="img  mx-auto  lg:mx-0">
              <Image width={900} height={900} src="/assets/images/australlia.png" alt="India" className="w-full py-6" />
            </div>
            <h2 className="text-2xl text-primary font-semibold mt-4">Australia</h2>
            <p className="pe-5 text-gray-700 mt-2">
              U19/10 Gladstone Rd, castle Hill NSW 2154
            </p>
          </div>
        </Link>

        {/* Left Side (Dubai) */}
        <Link href={"https://wayone.ae/"} target='blank'  className='inline-block w-full md:1/3' >
          <div className="cs-address-box flex flex-col lg:items-end w-full  text-center lg:text-right mt-8 lg:mt-0">
            <div className="img w-3/4 ml-auto mx-auto md:mx-0">
              <Image width={900} height={900} src="/assets/images/dubai city line-01 1.png" alt="Dubai" className="w-full" />
            </div>
            <h2 className="text-2xl text-primary font-semibold mt-4">DUBAI</h2>
            <p className="text-gray-700 mt-2">
              Al Moosa Tower 18th floor Office no #1804, <br />
              Sheikh Zayed Road, Dubai, U.A.E
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddressSection;
