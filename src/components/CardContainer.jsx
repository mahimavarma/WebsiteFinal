import React from "react";
import { Card } from "./Card";

export const CardContainer = () => {
  const cardData = [
    {
      name: "Customer Support Chatbot",
      description:
        "24/7 automated customer support with AI-powered chatbots that understand and respond to customer inquiries instantly.",
      amount: "$1000",
    },
    {
      name: "Gmail Outreach Bot",
      description:
        "Automated email outreach system sending 50-1000 emails daily with a guaranteed 25% response rate and minimal spam flags.",
      amount: "$5000",
    },
    {
      name: "AI Voice Agent",
      description:
        "24/7 virtual receptionist or sales representative that handles calls, appointments, and customer inquiries with natural conversation.",
      amount: "$2500",
    },
    {
      name: "Fully Automated SAAS",
      description:
        "Custom software-as-a-service solutions with AI automation to streamline your business processes and operations.",
      amount: "Custom Pricing",
    },
    {
      name: "Custom CRMs",
      description:
        "Tailored customer relationship management systems with AI-powered insights, automation, and seamless integrations.",
      amount: "Custom Pricing",
    },
    {
      name: "App Development",
      description:
        "Full-stack mobile and web application development with AI integration, from concept to deployment and maintenance.",
      amount: "Starting at $5,000+",
    },
  ];

  return (
    <div className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
};
