import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

export const Card = ({ item }) => {
  return (
    <div className="card">
      <p className="text-2xl custom-envelope">
        <FaRegEnvelope />
      </p>
      <h2 className="my-5 text-2xl font-bold">{item.name}</h2>
      <p className="my-5">{item.description}</p>
      <h5 className="custom-color my-5 text-2xl font-semibold">
        {item.amount}
      </h5>
      <button className="custom-btn">Book A Call</button>
    </div>
  );
};
