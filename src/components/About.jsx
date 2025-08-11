import React from "react";
import { FaCheck } from "react-icons/fa";
import brainImage from "/assets/img/brain.jpg"; // Adjust path based on your setup

export const About = () => {
  return (
    <section className="text-white px-6 md:px-16 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            src={brainImage}
            alt="AI Brain"
            className="rounded-2xl w-full max-w-md mx-auto lg:mx-0"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About LVL Automations
          </h2>
          <p className="text-gray-300 mb-4">
            At LVL Automations, we're passionate about leveraging cutting-edge
            AI technology to transform businesses. Our team of experts
            specializes in creating custom automation solutions that drive
            efficiency, reduce costs, and enhance customer experiences.
          </p>
          <p className="text-gray-300 mb-6">
            We believe that AI should be accessible to businesses of all sizes.
            Whether you're a startup looking to scale or an established
            enterprise seeking to optimize operations, our tailored solutions
            can help you reach your goals.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <FaCheck className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-bold">Expert Team</h4>
                <p className="text-sm text-gray-400">
                  Specialists in AI, automation, and software development
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-bold">Custom Solutions</h4>
                <p className="text-sm text-gray-400">
                  Tailored to your specific business needs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-bold">Ongoing Support</h4>
                <p className="text-sm text-gray-400">
                  Continuous maintenance and optimization
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheck className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-bold">Proven Results</h4>
                <p className="text-sm text-gray-400">
                  Track record of successful implementations
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="custom-btn font-medium px-8 py-3">
            Schedule a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};
