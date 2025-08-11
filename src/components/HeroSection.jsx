import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#0a0a0a",
        color: "#fff",
        padding: "50px 20px 0px 20px",
        textAlign: "center",
        fontFamily: "Nahomi",
      }}
    >
      {/* Notification Banner */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#141414",
          color: "#b3b3b3",
          padding: "6px 16px",
          borderRadius: "12px",
          border: "1px solid #2c2c2c",
          boxShadow: "0 0 0 1px #1e1e1e",
          marginBottom: "30px",
          fontSize: "14px",
          fontWeight: 500,
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

      {/* Main Heading */}
      <h1
        style={{
          fontSize: "80px",
          fontWeight: "400",
          margin: "0 auto",
          maxWidth: "900px",
          fontFamily: "Nahomi",
          lineHeight: 1,
        }}
      >
        Build websites.
        <br />
        Faster. Better. Visually.
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginTop: "1rem",
        }}
      >
        {/* Subheading */}
        <p
          style={{
            marginTop: "",
            fontSize: "24px",
            color: "#a0a0a0",
          }}
        >
          Experience a visual website builder
          <br />
          with limitless customization capabilities.
        </p>

        {/* CTA Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage:
              "linear-gradient(0deg, rgb(163,117,255) 0%, #5E2EBE 100%)",
            borderRadius: "12px",
          }}
        >
          <button
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "14px 32px",
              border: "none",
              cursor: "pointer",
              //   boxShadow: "0 4px 20px rgba(160,132,255,0.4)",
            }}
          >
            Build for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
