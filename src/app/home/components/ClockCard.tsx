"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ClockCardProps {
  country: string;
  flag: string;
  timezone: string;
  data: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    link: string;
  }[];
}

const AnalogClock = ({ timezone }: { timezone: string }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const localTime = new Date(
        now.toLocaleString("en-US", { timeZone: timezone })
      );
      setTime(localTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  return (
    <div className="relative top-[-50px] w-24 h-0 rounded-full flex items-center justify-center">
      <Image
        src={"/assets/images/clock-bg.png"}
        width={700}
        height={700}
        alt={"Clock"}
        className="w-28 h-28 object-contain absolute bottom-[-70px] "
      />
      <span className="absolute w-3 h-3 bg-gray-200 shadow z-[500] rounded-full top-2" />{" "}
      <div
        className="absolute w-1 h-6 bg-blue-600 origin-bottom"
        style={{
          transform: `rotate(${(360 / 12) * (hours % 12) + minutes / 2}deg)`,
        }}
      />
      <div
        className="absolute w-0.5 h-8 bg-blue-800 origin-bottom"
        style={{ transform: `rotate(${(360 / 60) * minutes}deg)` }}
      />
      <div
        className="absolute w-0.5 h-9 bg-red-500 origin-bottom"
        style={{ transform: `rotate(${(360 / 60) * seconds}deg)` }}
      />
    </div>
  );
};

const ClockCard = ({ country, flag, timezone, data }: ClockCardProps) => {
  return (
    <div className="flex flex-col h-80 shadow m-auto p-10 rounded-2xl bg-white border border-gray-300 w-full">
      <AnalogClock timezone={timezone} />
      <div className="flex items-center justify-end gap-3 relative mb-4">
        <h3 className="text-xl font-extrabold text-blue-900">{country}</h3>
        <span className="text-3xl">
          <Image
            src={flag}
            width={700}
            height={800}
            alt={country}
            className="w-14 h-10"
          />
        </span>
      </div>

      <div className="flex flex-col justify-start  flex-1 pt-2">
        {data.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 pr-4  last:border-none"
          >
            <div className="mt-1 h-full">{card.icon}</div>
            <div className="flex flex-col justify-center h-full">
              <h4 className="text-lg font-semibold text-blue-900">
                {card.title}
              </h4>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ClockCard;
