import HeaderSection from "@/app/components/common/HeaderSection";

// components/DevelopmentProcessSection.js
const processSteps = [
    {
        step: "01",
        title: "Discover, Strategize and Architect",
        items: [
            "Product Discovery",
            "Market Research",
            "User Persona",
            "Feature Roadmap",
            "Product Strategy",
            "Solution Architecture",
            "Information Architecture",
            "Data Strategy",
        ],
    },
    {
        step: "02",
        title: "Design and Prototype",
        items: [
            "User Journey Mapping",
            "Clickable Wireframe Creation",
            "User Experience Mapping",
            "Visual User Interface",
            "Content Mapping",
            "HTML    Development",
            "Iterative Design",
        ],
    },
    {
        step: "03",
        title: "Development Process",
        items: [
            "System Architecture",
            "Scrum Methodology",
            "Front-end Development",
            "Back-end Development",
            "API Development",
            "CMS Development",
            "Continuous Integration",
            "Release Management",
        ],
    },
    {
        step: "04",
        title: "Quality Assurance and Testing",
        items: [
            "Manual and Automation Testing",
            "Performance Testing",
            "Security Testing",
            "Usability Testing",
            "A/B Testing",
        ],
    },
];

export default function DevelopmentProcessSection() {
    return (
        <section id="development-process" className="py-4 lg:py-16">
            <div className="container mx-auto">
                
                <HeaderSection
                    subtitle="Our Web Development Process"
                    title="Turning Ideas into High-Performing Digital Experiences"
                    br={false}
                    highlight="Digital Experiences"
                    description="At WayOne, we specialize in transforming innovative ideas into impactful digital experiences. Our solutions are designed to deliver outstanding performance, enhance user engagement, and drive business success across all digital platforms."
                    textAlign="text-left me-auto"
                />

                {/* Steps */}
                <div className="grid gap-8">
                    {processSteps.map((stepData, index) => (
                     <div
                     key={index}
                     className="bg-gray-200/40 rounded-4xl shadow-lg p-8"
                   >
                     <div className="text-primary text-xl font-medium mb-4">
                       <span className="bg-blue-100/50 text-primary px-3 py-1 rounded-full">
                         {stepData.step}
                       </span>
                     </div>
                     <h3 className="text-2xl text-gray-800 font-medium mb-6">{stepData.title}</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                       {stepData.items.map((item, i) => (
                         <div
                           key={i}
                           className="flex items-center space-x-2 bg-blue-50/50 border border-gray-200 p-2 rounded-lg text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:scale-105 hover:shadow-md"
                         >
                           <span className="text-primary text-lg">•</span>
                           <span>{item}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                   
                    ))}
                </div>
            </div>
        </section>
    );
}
