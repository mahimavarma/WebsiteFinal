import React from "react";

export const InitialComponent = () => {
  return (
    <section class="hero-bg min-h-screen flex mask">
      <div class="w-[95%] mx-auto px-6 py-24">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            AI-Powered Business Automation Solutions
          </h1>
          <p class="text-xl text-gray-200 mb-8">
            Transform your business with cutting-edge AI technology. Streamline
            operations, reduce costs, and enhance customer experiences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn bg-primary text-white px-8 py-3 whitespace-nowrap hover:bg-opacity-90 transition-all duration-300 text-center">
              Explore Our Services
            </button>
            <a
              href="https://calendly.com/lvlautomations/ai-consultation-call"
              target="_blank"
              rel="noopener noreferrer"
              class="btn bg-transparent border-2 border-white text-white px-8 py-3 whitespace-nowrap hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
