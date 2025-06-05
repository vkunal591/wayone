// components/FloatingButtons.tsx

import React from "react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 z-[100000] flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/917599990331" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <BsWhatsapp className="w-5 h-5" />
      </Link>

      {/* Call Button */}
      <Link
        href="tel:+917599990331" // Replace with your number
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <BiPhoneCall className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default FloatingButtons;
