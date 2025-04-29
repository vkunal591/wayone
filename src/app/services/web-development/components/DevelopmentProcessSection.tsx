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
        <section id="development-process" className="py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm text-primary uppercase font-semibold tracking-wide">
                        Our Web Development Process
                    </span>
                    <h2 className="text-4xl font-bold mt-4">Turning Ideas into High-Performing</h2>
                    <h2 className="text-4xl font-bold text-primary mb-6">Digital Experiences</h2>
                    <p className="text-gray-600">
                        At WayOne, we specialize in transforming innovative ideas into impactful digital experiences. Our
                        solutions are designed to deliver outstanding performance, enhance user engagement, and drive
                        business success across all digital platforms.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid gap-8">
                    {processSteps.map((stepData, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 transition hover:shadow-xl"
                        >
                            <div className="text-primary text-xl font-bold mb-4">
                                <span className="bg-blue-100 text-primary px-3 py-1 rounded-full">
                                    {stepData.step}
                                </span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-6">{stepData.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                {stepData.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center space-x-2 bg-blue-50 p-2 rounded-lg text-gray-700`}>
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
