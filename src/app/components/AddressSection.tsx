import React from 'react';

const AddressSection: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="h-full flex flex-col md:flex-row items-center justify-between relative">

        {/* Right Side (India) */}
        <div className="cs-address-bo w-full md:w-1/2 text-center md:text-left">
          <div className="img w-3/4 mx-auto md:mx-0">
            <img src="/assets/images/india.png" alt="India" className="w-full" />
          </div>
          <h2 className="text-2xl text-primary font-semibold mt-4">INDIA</h2>
          <p className="pe-5 text-gray-700 mt-2">
            9 Laxmi Garden, 2nd floor above ICICI bank, <br />
            Shivaji marg, New Delhi (110015)
          </p>
        </div>

        <span
          className="absolute border-r-2"
          style={{
            width: '1px',
            height: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        ></span>

        {/* Left Side (Dubai) */}
        <div className="cs-address-box flex flex-col items-end w-full md:w-1/2 text-center md:text-right mt-8 md:mt-0">
          <div className="img w-3/4 ml-auto mx-auto md:mx-0">
            <img src="/assets/images/dubai city line-01 1.png" alt="Dubai" className="w-full" />
          </div>
          <h2 className="text-2xl text-primary font-semibold mt-4">DUBAI</h2>
          <p className="text-gray-700 mt-2">
            Al Moosa Tower 18th floor Office no #1804, <br />
            Sheikh Zayed Road, Dubai, U.A.E
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
