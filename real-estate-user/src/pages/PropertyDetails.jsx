import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Form,
  Button,
  Alert,
  InputGroup,
} from "react-bootstrap";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaHome,
  FaWarehouse,
  FaCalendarAlt,
  FaUtensils,
  FaCouch,
  FaTree,
  FaShieldAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { getPropertyById, createInquiry } from "../Services/api";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "Property-Specific",
  });
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: "" });

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState({ success: null, message: "" });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await getPropertyById(id);
        if (response?.success && response?.property) {
          setProperty(response.property);
        }
      } catch (err) {
        console.error("Error fetching property:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    setInquiryData({ ...inquiryData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createInquiry({ ...inquiryData, propertyId: id });
      if (res.success) {
        setSubmitStatus({ success: true, message: "Inquiry submitted successfully!" });
        setInquiryData({ name: "", email: "", phone: "", message: "", inquiryType: "Property-Specific" });
      } else {
        throw new Error(res.message || "Failed to submit inquiry.");
      }
    } catch (err) {
      setSubmitStatus({ success: false, message: err.message });
    }
  };

  // Newsletter subscribe handler (mock example)
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      setNewsletterStatus({ success: false, message: "Please enter a valid email." });
      return;
    }
    // Simulate API call
    setNewsletterStatus({ success: true, message: "Subscribed successfully!" });
    setNewsletterEmail("");
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading property...</p>
      </div>
    );
  }

  if (!property) {
    return <p className="text-center text-muted">Property not found.</p>;
  }

  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Img
              src={`http://localhost:9000/uploads/${property.image}`}
              alt={property.title}
              style={{ objectFit: "cover", width: "100%", height: "400px" }}
            />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold" style={{ fontSize: "1.5rem" }}>
                {property.title}
              </Card.Title>
              <Card.Subtitle className="text-success fs-5">
                ₹{property.price.toLocaleString("en-IN")}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-4 shadow-sm border-0 h-100 d-flex flex-column justify-content-center">
            <h5 className="mb-3">Inquire About This Property</h5>
            {submitStatus.message && (
              <Alert variant={submitStatus.success ? "success" : "danger"}>
                {submitStatus.message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label><FaUser className="me-2" /> Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={inquiryData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaEnvelope className="me-2" /> Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={inquiryData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaPhone className="me-2" /> Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={inquiryData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={inquiryData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit Inquiry
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <hr className="my-5" />

      <Row>
        <Col md={12}>
          {/* Overview */}
          <h4 className="mb-3 border-bottom pb-2">🏷 Overview</h4>
          <Row className="text-center">
            <Col xs={6} md={2} className="mb-3">
              <FaHome size={22} className="text-primary mb-1" />
              <div><strong>Type</strong></div>
              <div>{property.type}</div>
            </Col>
            <Col xs={6} md={2} className="mb-3">
              <FaRulerCombined size={22} className="text-primary mb-1" />
              <div><strong>Size</strong></div>
              <div>{property.area} sqft</div>
            </Col>
            <Col xs={6} md={2} className="mb-3">
              <FaBed size={22} className="text-primary mb-1" />
              <div><strong>Bedrooms</strong></div>
              <div>{property.bedrooms}</div>
            </Col>
            <Col xs={6} md={2} className="mb-3">
              <FaBath size={22} className="text-primary mb-1" />
              <div><strong>Bathrooms</strong></div>
              <div>{property.bathrooms}</div>
            </Col>
            <Col xs={6} md={2} className="mb-3">
              <FaWarehouse size={22} className="text-primary mb-1" />
              <div><strong>Garage</strong></div>
              <div>1</div>
            </Col>
            <Col xs={6} md={2} className="mb-3">
              <FaCalendarAlt size={22} className="text-primary mb-1" />
              <div><strong>Year</strong></div>
              <div>2022</div>
            </Col>
          </Row>

          {/* Address */}
          <h4 className="mb-3 border-bottom pb-2 mt-4">📍 Address</h4>
          <Row>
            <Col md={4}><strong>City:</strong> {property.city}</Col>
            <Col md={4}><strong>State:</strong> {property.state}</Col>
            <Col md={4}><strong>Full Address:</strong> {property.address}</Col>
          </Row>

          {/* Description */}
          <h4 className="mb-3 border-bottom pb-2 mt-4">📝 Description</h4>
          <p>{property.description}</p>

          {/* Features */}
          <h4 className="mb-3 border-bottom pb-2 mt-4">✨ Features</h4>
          <Row className="mb-4">
            <Col md={6} className="d-flex align-items-start mb-3">
              <FaUtensils size={24} className="text-primary me-3" />
              <div>
                <strong>Modular Kitchen</strong>
                <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                  Equipped with modern appliances and smart storage solutions.
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-start mb-3">
              <FaCouch size={24} className="text-primary me-3" />
              <div>
                <strong>Furnished</strong>
                <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                  Fully furnished rooms with premium furniture and decor.
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-start mb-3">
              <FaTree size={24} className="text-primary me-3" />
              <div>
                <strong>Balcony</strong>
                <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                  Spacious balcony offering beautiful views and fresh air.
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-start mb-3">
              <FaShieldAlt size={24} className="text-primary me-3" />
              <div>
                <strong>24x7 Security</strong>
                <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                  Round-the-clock security service for peace of mind.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Newsletter Section */}
      <hr />
      <Row className="justify-content-center text-center py-4 bg-light rounded">
        <Col md={8}>
          <h4 className="mb-3">Subscribe to Our Newsletter</h4>
          <p className="mb-4 text-muted">Get updates on new properties and exclusive offers.</p>

          {newsletterStatus.message && (
            <Alert variant={newsletterStatus.success ? "success" : "danger"}>
              {newsletterStatus.message}
            </Alert>
          )}

          <Form onSubmit={handleNewsletterSubmit}>
            <InputGroup>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="primary">
                <FaPaperPlane />
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
