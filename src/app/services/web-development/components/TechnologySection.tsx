import HeaderSection from "@/app/components/common/HeaderSection";

export default function TechnologiesSection() {
    const techGroups = [
        ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "TAILWIND"],
        ["TYPESCRIPT", "PHP", "REACT.JS", "BOOTSTRAP", "NEXT.JS"],
        ["NODE.JS", "ANGULAR.JS", "EXPRESS.JS", "RUN"],
        ["MONGODB", "POSTGRESQL", "LARAVEL", "MYSQL", "REDIS"],
    ];

    return (
        <section id="technologies" className="py-20">
            <div className="container mx-auto">
                <HeaderSection
                    subtitle="Web App Frameworks & Languages"
                    title="Building Scalable, Secure, and"
                    highlight="High-Performance Solutions"
                    description="Discover the most powerful web development languages and frameworks used to create fast, secure, and scalable applications. From frontend to backend, learn how to choose the right stack and best practices to build reliable, high-performance web solutions."
                />
                <div className="grid grid-cols-2 lg:grid-cols-4 lg:w-4/5 m-auto">
                    {techGroups.map((group, i) => (
                        <div key={i} className="space-y-3">
                            {group.map((tech, j) => (
                                <div key={j} className="flex items-center space-x-2">
                                    <span className="h-2 w-2 bg-primary rounded-full"></span>
                                    <span className="text-gray-800 font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
