import HeaderSection from "@/app/components/common/HeaderSection";
import HeroSection from "@/app/components/common/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeHaveDone from "./components/WhatWeHaveDone";

export default function Page() {

    return (

        <div className="p-4 lg:p-16 !pt-24 mx-auto">
            <HeroSection title1={"Smart Healthcare IT Solutions for Better Patient Care"} title2={""} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} />

            <div className="max-w-7xl m-auto p-4 lg:px-16 bg-white">
                <WhoWeAre />
                <WhatWeHaveDone />
            </div>

        </div>
    )
}
