import React from "react";

const ServiceSection = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        className="sidebar-custom"
        style={{
          position: "sticky",
          top: "70px",
          width: "17%",
          height: "100vh",
          backgroundColor: "#f0f0f0",
          padding: "1rem",
          color: "black",
        }}
      >
        SideBar
      </div>
      <div style={{ width: "80%", padding: "1rem" }}>
        <p>oneo</p>
        {/* Add more content to test scrolling */}
        {[...Array(250)].map((_, i) => (
          <p key={i}>Content line {i + 1}</p>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
