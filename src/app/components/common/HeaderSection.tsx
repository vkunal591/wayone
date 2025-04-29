import React from "react";

const HeaderSection = ({ subtitle, title, highlight, description }: any) => {
    return (
        <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="text-sm uppercase font-medium text-primary tracking-wide mb-2">
                {subtitle}
            </div>
            <h2 className="text-3xl font-bold">
                {title}{" "}
                <span className="text-primary">{highlight}</span>
            </h2>
            <p className="text-gray-600 mt-4">
                {description}
            </p>
        </div>
    );
};

export default HeaderSection;
