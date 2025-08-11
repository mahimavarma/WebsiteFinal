  "use client"

    import React, { useState, useEffect, useCallback } from "react";

    const portfolioData = [
      {
        id: 1,
        title: "Artificial Intelligence & Intelligent Automation",
        services: [
          "AI-powered Conversational Agents & virtual assistants",
          "Smart Calling Solutions with next-gen AI agents",
          "End-to-End Workflow Automation (Make, n8n)",
          "Predictive Analytics & machine learning insights",
        ],
        content: {
          title: "AI & Intelligent Automation",
          description:
            "Deploy hyper-personalized chatbots, smart calling solutions, and predictive analytics to eliminate bottlenecks and unlock scalable productivity with actionable insights.",
          type: "ai"
        },
      },
      {
        id: 2,
        title: "Data Analytics & Business Intelligence",
        services: [
          "Comprehensive Data Engineering & ETL pipelines",
          "Modern Data Architecture (SQL, NoSQL, hybrid)",
          "Advanced Business Intelligence dashboards",
          "KPI Monitoring & Predictive Insights",
        ],
        content: {
          title: "Data Analytics & BI",
          description:
            "Architect robust data lakes, deploy custom dashboards with Power BI and Tableau, and track business-critical metrics with precision analytics.",
          type: "analytics"
        },
      },
      {
        id: 3,
        title: "Mobile Application & SaaS Engineering",
        services: [
          "Enterprise Mobile Apps (iOS, Android, React Native)",
          "Progressive Web Apps (PWAs)",
          "SaaS at Scale with cloud infrastructure",
          "Feature-Rich Integration & secure payment systems",
        ],
        content: {
          title: "Mobile & SaaS Development",
          description:
            "Deliver high-performing native and cross-platform apps, engineer robust multi-tenant SaaS platforms with world-class usability and scalability.",
          type: "mobile"
        },
      },
      {
        id: 4,
        title: "Enterprise Web & E-Commerce Solutions",
        services: [
          "Bespoke Website Development with modern tech stack",
          "E-Commerce Excellence (Shopify, WooCommerce)",
          "Modern CMS Deployments (WordPress, Webflow)",
          "SEO-First Design & ongoing maintenance",
        ],
        content: {
          title: "Web & E-Commerce Solutions",
          description:
            "Build custom digital platforms, architect frictionless shopping experiences, and achieve standout visibility through technical SEO optimization.",
          type: "web"
        },
      },
      {
        id: 5,
        title: "Digital Marketing, Multimedia & Social Platforms",
        services: [
          "Performance-Driven Digital Campaigns (Google, Meta)",
          "Full-Spectrum Social Media Management",
          "Creative Video Production & editing",
          "Content Strategy & SEO-optimized calendars",
        ],
        content: {
          title: "Digital Marketing & Multimedia",
          description:
            "Orchestrate cross-channel strategies, craft brand voices, create captivating video content, and deliver end-to-end content strategy for measurable ROI.",
          type: "marketing"
        },
      },
      {
        id: 6,
        title: "Total Lifecycle Maintenance & Support",
        services: [
          "Universal Maintenance Excellence for all assets",
          "24/7 Monitoring & Security with threat detection",
          "Continuous Improvement & adaptive enhancements",
          "White-Glove Technical Support & rapid response",
        ],
        content: {
          title: "Maintenance & Support",
          description:
            "Reliable proactive support, comprehensive uptime monitoring, routine updates, and dedicated experts delivering swift resolution without boundaries.",
          type: "support"
        },
      },
    ];

    const AnimatedPortfolioSections = () => {
      const [currentSection, setCurrentSection] = useState(0);
      const [isAnimating, setIsAnimating] = useState(false);
      const [isPaused, setIsPaused] = useState(false);

      const handleSectionTransition = useCallback((newIndex) => {
        if (newIndex !== currentSection && !isAnimating) {
          setIsAnimating(true);
          setTimeout(() => {
            setCurrentSection(newIndex);
            setTimeout(() => setIsAnimating(false), 100);
          }, 300);
        }
      }, [currentSection, isAnimating]);

      const handleSectionClick = useCallback((index) => {
        setIsPaused(true);
        handleSectionTransition(index);
        setTimeout(() => setIsPaused(false), 100);
      }, [handleSectionTransition]);

      useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
          setIsAnimating(true);
          setTimeout(() => {
            setCurrentSection((prev) => (prev + 1) % portfolioData.length);
            setTimeout(() => setIsAnimating(false), 100);
          }, 300);
        }, 5000);

        return () => clearInterval(interval);
      }, [isPaused]);

      const currentSectionData = portfolioData[currentSection];

      return (
        <div className="min-h-screen text-white overflow-hidden lg:pl-10">
          <div className="max-w-7xl mx-auto p-4 lg:p-8">
            <div className="text-center mb-8 lg:mb-16">
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                Services we offer
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Side - Cards 1-3 */}
              <div className="space-y-8 pb-8">
                {portfolioData.slice(0, 3).map((section, index) => (
                  <div
                    key={section.id}
                    className={`relative cursor-pointer group transition-all duration-700 ease-out transform ${
                      currentSection === index
                        ? "opacity-100 scale-105 translate-x-0"
                        : "opacity-70 hover:opacity-90 scale-100 hover:scale-102 hover:translate-x-2"
                    }`}
                    onClick={() => handleSectionClick(index)}
                  >
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                    {/* Section Number and Title */}
                    <div className="flex items-center space-x-6 mb-2 p-4">
                      <span
                        className={`text-xl font-bold transition-all duration-500 ${
                          currentSection === index
                            ? "text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text"
                            : "text-gray-500 group-hover:text-gray-400"
                        }`}
                      >
                        {String(section.id).padStart(2, "0")}
                      </span>
                      <h2
                        className={`text-xl font-bold transition-all duration-500 ${
                          currentSection === index
                            ? "text-white"
                            : "text-gray-400 group-hover:text-gray-300"
                        }`}
                      >
                        {section.title}
                      </h2>
                    </div>

                    {/* Services Grid */}
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 gap-4 ml-12 pb-5 pr-10 transition-all duration-700 ${
                        currentSection === index
                          ? "opacity-100 transform translate-x-0"
                          : "opacity-60 transform translate-x-4 group-hover:opacity-80 group-hover:translate-x-2"
                      }`}
                    >
                      {section.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className={`flex items-center space-x-3 transition-all duration-500 hover:scale-105 ${
                            currentSection === index
                              ? "transform translate-x-0 opacity-100"
                              : "transform translate-x-6 opacity-70"
                          }`}
                          style={{ transitionDelay: `${serviceIndex * 100}ms` }}
                        >
                          <div
                            className={`min-w-[6px] min-h-[6px] w-[6px] h-[6px] rounded-full transition-all duration-500 ${
                              currentSection === index
                                ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                                : "bg-gray-600 group-hover:bg-gray-500"
                            }`}
                            style={{ transform: 'none' }}
                          />
                          <span
                            className={`text-sm font-medium transition-colors duration-500 ${
                              currentSection === index
                                ? "text-gray-200"
                                : "text-gray-500 group-hover:text-gray-400"
                            }`}
                          >
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Active Section Indicator */}
                    {currentSection === index && (
                      <div className="absolute left-0 top-0 w-1.5 h-full rounded-full shadow-lg shadow-cyan-400/50 animate-pulse" />
                    )}

                    {/* Subtle Border Animation */}
                    <div
                      className={`absolute inset-0 border-2 rounded-2xl pt-10 transition-all duration-500 ${
                        currentSection === index
                          ? "border-cyan-400/30 shadow-xl shadow-cyan-400/20"
                          : "border-transparent group-hover:border-slate-600/50"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Right Side - Cards 4-6 */}
              <div className="space-y-8 pb-8">
                {portfolioData.slice(3, 6).map((section, index) => {
                  const actualIndex = index + 3; // Adjust index for cards 4-6
                  return (
                    <div
                      key={section.id}
                      className={`relative cursor-pointer group transition-all duration-700 ease-out transform ${
                        currentSection === actualIndex
                          ? "opacity-100 scale-105 translate-x-0"
                          : "opacity-70 hover:opacity-90 scale-100 hover:scale-102 hover:translate-x-2"
                      }`}
                      onClick={() => handleSectionClick(actualIndex)}
                    >
                      {/* Hover Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                      {/* Section Number and Title */}
                      <div className="flex items-center space-x-6 mb-2 p-4">
                        <span
                          className={`text-xl font-bold transition-all duration-500 ${
                            currentSection === actualIndex
                              ? "text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text"
                              : "text-gray-500 group-hover:text-gray-400"
                          }`}
                        >
                          {String(section.id).padStart(2, "0")}
                        </span>
                        <h2
                          className={`text-xl font-bold transition-all duration-500 ${
                            currentSection === actualIndex
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-300"
                          }`}
                        >
                          {section.title}
                        </h2>
                      </div>

                      {/* Services Grid */}
                      <div
                        className={`grid grid-cols-1 md:grid-cols-2 gap-4 ml-12 pb-5 pr-10 transition-all duration-700 ${
                          currentSection === actualIndex
                            ? "opacity-100 transform translate-x-0"
                            : "opacity-60 transform translate-x-4 group-hover:opacity-80 group-hover:translate-x-2"
                        }`}
                      >
                        {section.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className={`flex items-center space-x-3 transition-all duration-500 hover:scale-105 ${
                              currentSection === actualIndex
                                ? "transform translate-x-0 opacity-100"
                                : "transform translate-x-6 opacity-70"
                            }`}
                            style={{ transitionDelay: `${serviceIndex * 100}ms` }}
                          >
                            <div
                              className={`min-w-[6px] min-h-[6px] w-[6px] h-[6px] rounded-full transition-all duration-500 ${
                                currentSection === actualIndex
                                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                                  : "bg-gray-600 group-hover:bg-gray-500"
                              }`}
                              style={{ transform: 'none' }}
                            />
                            <span
                              className={`text-sm font-medium transition-colors duration-500 ${
                                currentSection === actualIndex
                                  ? "text-gray-200"
                                  : "text-gray-500 group-hover:text-gray-400"
                              }`}
                            >
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Active Section Indicator */}
                      {currentSection === actualIndex && (
                        <div className="absolute left-0 top-0 w-1.5 h-full rounded-full shadow-lg shadow-cyan-400/50 animate-pulse" />
                      )}

                      {/* Subtle Border Animation */}
                      <div
                        className={`absolute inset-0 border-2 rounded-2xl pt-10 transition-all duration-500 ${
                          currentSection === actualIndex
                            ? "border-cyan-400/30 shadow-xl shadow-cyan-400/20"
                            : "border-transparent group-hover:border-slate-600/50"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-12 lg:mt-20 space-x-4">
              {portfolioData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSectionClick(index)}
                  className={`relative transition-all duration-500 hover:scale-125 ${
                    currentSection === index
                      ? "w-12 h-4 bg-[#2D99BA] rounded-full shadow-lg shadow-[#2D99BA]/50"
                      : "w-4 h-4 bg-gray-600 rounded-full hover:bg-gray-500"
                  }`}
                  aria-label={`Go to section ${index + 1}`}
                >
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    };
    export default AnimatedPortfolioSections;