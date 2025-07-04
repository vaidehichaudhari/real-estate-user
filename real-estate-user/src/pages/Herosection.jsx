import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaTag,
  FaRupeeSign,
  FaBed,
  FaSearch,
} from "react-icons/fa";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState(""); // property type (sale/rent)
  const [priceRange, setPriceRange] = useState("");
  const [bedroom, setBedroom] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      location,
      type,
      priceRange,
      bedroom,
    }).toString();

    navigate(`/listing?${queryParams}`);
  };

  return (
    <div
      className="py-5 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "450px",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.65), rgba(0,0,0,0.35))",
          zIndex: 0,
        }}
      ></div>

      <Container className="position-relative" style={{ zIndex: 1, maxWidth: "1000px" }}>
        <Row className="justify-content-center text-center mb-4">
          <Col lg={8}>
            <h1 className="fw-bold display-5" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
              Find Your Dream Property
            </h1>
            <p className="lead" style={{ fontWeight: "500", textShadow: "1px 1px 5px rgba(0,0,0,0.6)" }}>
              Search from a wide range of properties across your favorite locations.
            </p>
          </Col>
        </Row>

        <Form onSubmit={handleSearch}>
          <Row className="g-3 justify-content-center align-items-center">
            {/* Location */}
            <Col md={3} sm={6}>
              <InputGroup className="shadow-sm rounded">
                <InputGroup.Text style={{ backgroundColor: "#0d6efd", color: "white", border: "none" }}>
                  <FaMapMarkerAlt />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="City / Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ borderRadius: "0 0.5rem 0.5rem 0", border: "none" }}
                />
              </InputGroup>
            </Col>

            {/* Property Type */}
            <Col md={2} sm={6}>
              <InputGroup className="shadow-sm rounded">
                <InputGroup.Text style={{ backgroundColor: "#0d6efd", color: "white", border: "none" }}>
                  <FaTag />
                </InputGroup.Text>
                <Form.Select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={{ borderRadius: "0 0.5rem 0.5rem 0", border: "none" }}
                >
                  <option value="">Property Type</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </Form.Select>
              </InputGroup>
            </Col>

            {/* Price Range */}
            <Col md={2} sm={6}>
              <InputGroup className="shadow-sm rounded">
                <InputGroup.Text style={{ backgroundColor: "#0d6efd", color: "white", border: "none" }}>
                  <FaRupeeSign />
                </InputGroup.Text>
                <Form.Select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  style={{ borderRadius: "0 0.5rem 0.5rem 0", border: "none" }}
                >
                  <option value="">Price Range</option>
                  <option value="0-500000">Below ₹5,00,000</option>
                  <option value="500000-1000000">₹5L – ₹10L</option>
                  <option value="1000000-5000000">₹10L – ₹50L</option>
                  <option value="5000000+">Above ₹50L</option>
                </Form.Select>
              </InputGroup>
            </Col>

            {/* Bedroom */}
            <Col md={2} sm={6}>
              <InputGroup className="shadow-sm rounded">
                <InputGroup.Text style={{ backgroundColor: "#0d6efd", color: "white", border: "none" }}>
                  <FaBed />
                </InputGroup.Text>
                <Form.Select
                  value={bedroom}
                  onChange={(e) => setBedroom(e.target.value)}
                  style={{ borderRadius: "0 0.5rem 0.5rem 0", border: "none" }}
                >
                  <option value="">Bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">3+</option>
                </Form.Select>
              </InputGroup>
            </Col>

            {/* Search Button */}
            <Col md={2} sm={6}>
              <Button
                variant="primary"
                type="submit"
                className="w-100 shadow"
                style={{
                  borderRadius: "0.5rem",
                  padding: "12px 0",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 12px rgba(13, 110, 253, 0.6)",
                  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0b5ed7";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(11, 94, 215, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(13, 110, 253, 0.6)";
                }}
              >
                <FaSearch />
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default HeroSection;
