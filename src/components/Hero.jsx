import React, { useState, useEffect, useRef } from "react";
import { FaRightLong } from "react-icons/fa6";

export const Hero = () => {
  const text = "Empowering Businesses to Launch, Scale, and Succeed";
  const fasterText = " Faster"; // Keep it separate for styling
  const fullText = text + fasterText; // Complete sequence

  const [val, setVal] = useState("");
  const [forwardDirection, setForwardDirection] = useState(true);
  const i = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal(() => {
        let mainText = fullText.substring(0, i.current);
        let cursor = "|";

        if (forwardDirection) {
          i.current++;
          if (i.current > fullText.length) {
            setForwardDirection(false); // Start backspacing
          }
        } else {
          i.current--;
          if (i.current < 0) {
            setForwardDirection(true); // Restart animation
          }
        }

        return mainText + cursor;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [forwardDirection]);

  return (
    <div className="mt-[6rem] font-sans">
      <p className="opacity-[0.5] mb-[2rem] text-white text-lg">
        Agency to DESIGN | DEVELOP | DELIVER
      </p>
      <h2 className="text-white text-start  text-3xl md:text-7xl font-bold md:leading-[7rem]">
        {val.split(" ").map((word, index) => (
          <span
            key={index}
            className={word === "Faster|" ? "text-blue-600" : ""}
          >
            {word}{" "}
          </span>
        ))}
      </h2>
      <button
        type="button"
        className="mt-[2rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase"
      >
        Connect With Us <FaRightLong className="ms-[0.5rem] inline" />
      </button>
    </div>
  );
};
