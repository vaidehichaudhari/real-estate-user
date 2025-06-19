import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0d1b2a",
        color: "#f0f0f0",
        paddingTop: "40px",
        position: "relative",
        zIndex: 1000,
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* Brand & Contact */}
          <Col md={4}>
            <h4 style={{ color: "#61dafb", fontWeight: "bold" }}>
              <FaBuilding className="me-2" />
              RealEstate
            </h4>
            <p>Your trusted partner in real estate.</p>
            <p>
              <FaMapMarkerAlt className="me-2" /> Mumbai, India
            </p>
            <p>
              <FaPhoneAlt className="me-2" /> +91 98765 43210
            </p>
            <p>
              <FaEnvelope className="me-2" /> support@shopvista.com
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 className="mb-3" style={{ color: "#61dafb" }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/listing" className="text-light text-decoration-none">Properties</a></li>
              <li><a href="/register" className="text-light text-decoration-none">Register</a></li>
              <li><a href="/login" className="text-light text-decoration-none">Login</a></li>
            </ul>
          </Col>

          {/* Social & Map */}
          <Col md={4}>
            <h5 className="mb-3" style={{ color: "#61dafb" }}>Connect & Visit</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <FaTwitter />
              </a>
              <a href="mailto:support@shopvista.com" className="text-light fs-5">
                <FaEnvelope />
              </a>
            </div>
            <div style={{ borderRadius: "8px", overflow: "hidden" }}>
              <iframe
                title="Shopvista Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160986428!2d72.74109813726312!3d19.08219783894444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f72b8ba2f%3A0x3a18c3e3c6b5dd9b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718785453257!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "#2c3e50", marginTop: "30px" }} />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} <span style={{ color: "#61dafb" }}>Shopvista</span>. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
