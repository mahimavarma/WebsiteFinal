import React from "react";

const NotificationBanner = () => {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        color: "#b3b3b3",
        padding: "6px 16px",
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "12px",
        border: "1px solid #2c2c2c",
        fontSize: "14px",
        fontWeight: 500,
        boxShadow: "0 0 0 1px #1e1e1e",
      }}
    >
      <span
        style={{
          backgroundColor: "#a084ff",
          color: "#fff",
          fontSize: "11px",
          fontWeight: "bold",
          padding: "2px 8px",
          borderRadius: "6px",
          marginRight: "10px",
        }}
      >
        NEW
      </span>
      Timeline-based Interactions and Animations are here!
    </div>
  );
};

export default NotificationBanner;
