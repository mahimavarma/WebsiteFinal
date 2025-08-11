import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Layers,
  FileText,
  Pen,
  Code,
  ClipboardCheck,
  Rocket,
} from "lucide-react";

const ProcessTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set([0]));
  const [lineHeight, setLineHeight] = useState(0);
  const [stepOpacities, setStepOpacities] = useState({});
  const cardRefs = useRef([]);
  const svgRefs = useRef([]);
  const elementRef = useRef(null);

  const processSteps = [
    {
      icon: Layers,
      title: "Architecture",
      description:
        "We lay the groundwork with robust, scalable system architectures that are tailored to your enterprise objectives, ensuring a strategic and future-ready technology foundation.",
      isRight: false,
      svgName: "architecture-svgrepo-com.svg",
    },
    {
      icon: FileText,
      title: "Research",
      description:
        "Our teams conduct in-depth research into market trends, user needs, and emerging technologies, delivering insight-driven strategies that anchor every solution in real-world value.",
      isRight: true,
      svgName: "research-svgrepo-com.svg",
    },
    {
      icon: Pen,
      title: "Design",
      description:
        "We bring visions to life through sophisticated, user-centric designs, blending aesthetics with functionality to create experiences that elevate engagement and reinforce brand identity.",
      isRight: false,
      svgName: "design-svgrepo-com.svg",
    },
    {
      icon: Code,
      title: "Build",
      description:
        "Leveraging advanced development frameworks and agile methodologies, we transform concepts into resilient, high-performance digital products ready to scale and adapt with your business.",
      isRight: true,
      svgName: "code-svgrepo-com.svg",
    },
    {
      icon: ClipboardCheck,
      title: "Testing",
      description:
        "Our comprehensive, multi-layered testing protocols safeguard integrity, quality, and security, ensuring every deliverable meets the highest benchmark for reliability.",
      isRight: false,
      svgName: "testing-svgrepo-com.svg",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description:
        "We execute seamless, meticulously managed deployments—enabling rapid, trouble-free launches and supporting ongoing optimization for sustained business impact.",
      isRight: true,
      svgName: "deployment-svgrepo-com.svg",
    },
  ];

  const calculateStepOpacity = useCallback(
    (index) => {
      const dotElement = cardRefs.current[index];
      const container = elementRef.current;

      if (!dotElement || !container) return 0.3;

      const dotRect = dotElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const dotCenter = dotRect.top + dotRect.height / 2 - containerRect.top;

      if (index === processSteps.length - 1) {
        return lineHeight >= dotCenter ? 1 : 0.3;
      }

      return lineHeight >= dotCenter ? 1 : 0.3;
    },
    [lineHeight, processSteps.length]
  );

  const updateStepOpacities = useCallback(() => {
    const newOpacities = {};
    processSteps.forEach((_, index) => {
      newOpacities[index] = calculateStepOpacity(index);
    });
    setStepOpacities(newOpacities);
  }, [calculateStepOpacity, processSteps]);

  const handleScroll = useCallback(() => {
    const timelineElement = elementRef.current;
    if (!timelineElement) return;

    const rect = timelineElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const timelineTop = rect.top + window.scrollY;
    const timelineHeight = timelineElement.offsetHeight;
    const scrollTop = window.scrollY;

    const progressInsideTimeline = Math.min(
      Math.max(scrollTop + windowHeight / 2 - timelineTop, 0),
      timelineHeight
    );

    const lastDotIndex = processSteps.length - 1;
    const lastDotElement = cardRefs.current[lastDotIndex];
    let maxLineHeight = timelineHeight;

    if (lastDotElement) {
      const lastDotRect = lastDotElement.getBoundingClientRect();
      const lastDotCenter =
        lastDotRect.top + lastDotRect.height / 2 + scrollTop - timelineTop;
      maxLineHeight = lastDotCenter;
    }

    const finalLineHeight = Math.min(progressInsideTimeline, maxLineHeight);

    setLineHeight(finalLineHeight);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const globalProgress = Math.min(scrollTop / (docHeight * 0.8), 1);
    setScrollProgress(globalProgress);

    const stepsToShow = Math.floor(globalProgress * processSteps.length) + 1;
    const newVisibleSteps = new Set();

    for (let i = 0; i < Math.min(stepsToShow, processSteps.length); i++) {
      newVisibleSteps.add(i);
    }

    setVisibleSteps(newVisibleSteps);
    updateStepOpacities();
  }, [processSteps.length, updateStepOpacities]);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          handleScroll();
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    handleScrollEvent();

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [handleScroll]);

  useEffect(() => {
    updateStepOpacities();
  }, [updateStepOpacities]);

  const getStepOpacity = (index) => {
    return stepOpacities[index] || 0.3;
  };

  const getStepScale = (index) => {
    const opacity = stepOpacities[index] || 0.3;
    return 0.95 + (opacity - 0.3) * 0.05 / 0.7;
  };

  const getIconScale = (index) => {
    return visibleSteps.has(index) && index === 0 ? 1.49488 : 1;
  };

  const getIconBgColor = (index) => {
    return visibleSteps.has(index) && index === 0
      ? "rgb(12, 74, 110)"
      : "rgb(0, 42, 63)";
  };

  const getIconGlow = (index) => {
    const opacity = stepOpacities[index] || 0.3;
    return opacity >= 1
      ? "0 0 12px rgba(6,182,212,0.6)"
      : "0 0 8px rgba(6,182,212,0.3)";
  };

  const getDotBackgroundColor = (index) => {
    const dotElement = cardRefs.current[index];
    const container = elementRef.current;

    if (!dotElement || !container) return "#ffffff";

    const dotRect = dotElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const dotCenter = dotRect.top + dotRect.height / 2 - containerRect.top;
    return lineHeight >= dotCenter ? "rgb(7,154,227)" : "#ffffff";
  };

  const getDotGlow = (index) => {
    const dotElement = cardRefs.current[index];
    const container = elementRef.current;

    if (!dotElement || !container) return "0 0 8px rgba(6,182,212,0.3)";

    const dotRect = dotElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const dotCenter = dotRect.top + dotRect.height / 2 - containerRect.top;
    return lineHeight >= dotCenter
      ? "0 0 12px rgba(6,182,212,0.6)"
      : "0 0 8px rgba(6,182,212,0.3)";
  };

  const getDotSize = (index) => {
    const dotElement = cardRefs.current[index];
    const container = elementRef.current;

    if (!dotElement || !container) return "w-4 h-4";

    const dotRect = dotElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const dotCenter = dotRect.top + dotRect.height / 2 - containerRect.top;
    return lineHeight >= dotCenter ? "w-6 h-6" : "w-4 h-4";
  };

  const getCardStyles = (index) => {
    const opacity = stepOpacities[index] || 0.3;
    const scale = getStepScale(index);

    return {
      opacity,
      transform: `scale(${scale})`,
      transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
    };
  };

  const getSvgStyles = (index) => {
    const opacity = index === processSteps.length - 1 ? stepOpacities[index] || 0.3 : stepOpacities[index] || 0.3;
    const scale = 0.9 + (opacity - 0.3) * 0.1 / 0.7;

    return {
      opacity,
      transform: `scale(${scale})`,
      transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
    };
  };

  return (
    <div className="min-h-screen font-sans text-white p-4 md:p-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Our Process
      </h1>

      <div ref={elementRef} className="max-w-6xl mx-auto relative">
        <div
          className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-px bg-[#2D99BA] transition-all duration-700 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          style={{
            height: `${lineHeight}px`,
            transformOrigin: "center top",
          }}
        ></div>

        <div className="space-y-40">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const iconScale = getIconScale(index);
            const iconBgColor = getIconBgColor(index);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className="relative !mt-12"
                style={getCardStyles(index)}
              >
                <div
                  className={`absolute left-3 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10 transition-all duration-500 ease-out ${getDotSize(index)}`}
                  style={{
                    backgroundColor: getDotBackgroundColor(index),
                    boxShadow: getDotGlow(index),
                  }}
                ></div>

                <div
                  className={`
                  flex items-center min-w-[300px] md:min-w-[300px] xl:min-w-[560px]
                  ${
                    step.isRight
                      ? "ml-10 md:ml-0 md:justify-end"
                      : "ml-10 md:ml-[calc(50%+25px)] justify-start md:justify-end"
                  }
                  ${
                    step.isRight
                      ? "md:w-[calc(50%-60px)] md:pr-[20px]"
                      : "md:w-[calc(50%-60px)]"
                  }
                `}
                >
                  {step.svgName && (
                    <div
                      ref={(el) => (svgRefs.current[index] = el)}
                      data-svg-index={index}
                      className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 items-center justify-center w-[calc(50%-70px)] ${
                        step.isRight ? "right-0" : "left-0"
                      }`}
                      style={getSvgStyles(index)}
                    >
                      <img
                        src={`/${step.svgName}`}
                        alt={`${step.title} Illustration`}
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                  )}

                  <div
                    className="bg-slate-900/80 backdrop-blur-sm rounded-[24px] p-6 flex-1 w-full border border-slate-700/50 hover:border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300"
                    style={{
                      background:
                        "radial-gradient(153.71% 117.75% at 100% 0%, #01222E 0%, #021921 100%)",
                    }}
                  >
                    <div
                      className={`flex flex-col gap-4 ${
                        step.isRight ? "items-start md:items-end" : "items-start"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="p-4 rounded-full border border-slate-700/50 transition-all duration-300 flex items-center justify-center"
                          style={{
                            background:
                              "radial-gradient(153.71% 117.75% at 100% 0%, #01222E 0%, #021921 100%)",
                            backgroundColor: iconBgColor,
                            boxShadow: getIconGlow(index),
                          }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                          {step.title}
                        </h3>
                      </div>
                      <div
                        className={`space-y-2 flex flex-col ${
                          step.isRight ? "items-start md:items-end" : "items-start"
                        }`}
                      >
                        <p
                          className={`text-sm md:text-base leading-relaxed text-slate-300 ${
                            step.isRight ? "text-left md:text-right" : "text-left"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;