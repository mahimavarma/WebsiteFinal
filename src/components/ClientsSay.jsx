import React from "react";
import { ClientCard } from "./ClientCard";

export const ClientsSay = () => {
  const clientReviews = [
    {
      review:
        "The customer support chatbot from LVL Automations has been a game-changer for our business. Our response time has decreased by 80% and customer satisfaction has increased significantly.",
      name: "Robert Johnson",
      designation: "CEO",
      org: "TechSolutions Inc.",
    },
    {
      review:
        "The Gmail outreach bot has revolutionized our sales process. We're now connecting with 5x more prospects while maintaining a personal touch. Worth every penny!",
      name: "Sarah Mitchell",
      designation: "Sales Director",
      org: "GrowthWave",
    },
    {
      review:
        "Our custom CRM from LVL Automations has streamlined our entire operation. The AI insights have helped us identify opportunities we would have otherwise missed.",
      name: "David Thompson",
      designation: "Operations Manager",
      org: "Innovate Group",
    },
  ];

  return (
    <div className="service-section my-16 w-[95%] mx-auto">
      <div className="">
        <h4 className="text-center text-5xl font-semibold my-2">
          What Our Clients Say
        </h4>
        <p className="text-center text-xl text-gray">
          Hear from businesses that have transformed their operations with our
          AI automation solutions.
        </p>
      </div>
      <div className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientReviews.map((item, index) => {
          return <ClientCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};
