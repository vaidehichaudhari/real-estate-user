import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle, FaThumbsUp, FaHeadset, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle size={30} color="#1976d2" />,
    title: "Trusted & Reliable",
    description: "Thousands of happy clients trust us to find their dream homes.",
  },
  {
    icon: <FaThumbsUp size={30} color="#1976d2" />,
    title: "Top Quality Listings",
    description: "We offer carefully verified, premium properties only.",
  },
  {
    icon: <FaHeadset size={30} color="#1976d2" />,
    title: "24/7 Support",
    description: "Our experts are always ready to assist you with any queries.",
  },
  {
    icon: <FaShieldAlt size={30} color="#1976d2" />,
    title: "Safe & Secure",
    description: "Your data and transactions are protected with top security standards.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      style={{
        position: "relative",
        padding: "30px 20px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
        color: "white",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          zIndex: 1,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <h3 className="text-center fw-bold mb-4" style={{ color: "#1976d2" }}>
          Why Our Services Are The Best
        </h3>
        <Row className="g-3 justify-content-center">
          {features.map((feature, idx) => (
            <Col key={idx} md={6} lg={5}>
              <Card
                className="border-0 px-3 py-2 h-100"
                style={{
                  backgroundColor: "transparent",
                  color: "#1976d2",
                  boxShadow: "0 3px 10px rgba(25, 118, 210, 0.15)",
                }}
              >
                <div className="d-flex align-items-start">
                  <div className="me-3">{feature.icon}</div>
                  <div>
                    <h6 className="mb-1 fw-semibold">{feature.title}</h6>
                    <p className="mb-0 small text-dark">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
