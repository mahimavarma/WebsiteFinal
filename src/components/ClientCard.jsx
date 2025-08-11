import React from "react";

export const ClientCard = ({ item }) => {
  return (
    <div className="card">
      <p className="text-2xl custom-envelope">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-quote w-8 h-8 text-primary opacity-30"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </p>
      <p className="my-5">{item.review}</p>

      <div className="flex items-center">
        <div className="custom-envelope w-[12%]">
          {item.name.split(" ").map((word) => {
            return word[0];
          })}
        </div>
        <div className="mx-4">
          <p>{item.name}</p>
          <p className="light-color">{item.designation + ", " + item.org}</p>
        </div>
      </div>
    </div>
  );
};
