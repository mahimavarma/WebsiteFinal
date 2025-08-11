import React from "react";
import ContactAndBooking from "./ContactAndBooking";

export const GetInTouch = () => {
  return (
    <div className="">
      <div className="my-28">
        <h4 className="text-center text-5xl font-semibold my-2">
          Get in Touch
        </h4>
        <p className="my-5 text-center text-xl text-gray">
          Have questions about our services? Reach out to us directly or
          schedule a consultation call.
        </p>
      </div>
      <div className="w-[60%] mx-auto flex items-center justify-center">
        <ContactAndBooking />
      </div>
    </div>
  );
};
