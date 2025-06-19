import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "320px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            fontSize: "2.8rem",
            marginBottom: "1rem",
            textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          Create Your Perfect Living Space
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "1.5rem",
            textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
          }}
        >
          Explore exquisite interior designs and find homes that fit your style and comfort.
        </p>
        <Button
          variant="light"
          size="lg"
          onClick={() => navigate("/register")}
          style={{ fontWeight: "600", borderRadius: "0.5rem", padding: "0.6rem 2rem" }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Banner;
