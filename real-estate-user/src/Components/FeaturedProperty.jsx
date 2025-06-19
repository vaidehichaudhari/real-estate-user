import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllProperties } from "../Services/api"; // Replace with your actual API call

const FeaturedProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await getAllProperties();
        if (res.success && Array.isArray(res.properties)) {
          const featured = res.properties.slice(0, 6); // You can filter featured items based on a flag
          setProperties(featured);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Featured Properties</h2>
        <p className="text-muted">Explore our handpicked properties just for you.</p>
      </div>

      <Row xs={1} sm={2} md={3} className="g-4">
        {properties.map((property) => (
          <Col key={property.id}>
            <Card className="h-100 shadow-sm border-0" onClick={() => navigate(`/property/${property.id}`)} style={{ cursor: "pointer" }}>
              <Card.Img
                variant="top"
                src={`http://localhost:9000/uploads/${property.image}`}
                alt={property.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <Badge bg="info" className="text-dark">{property.type}</Badge>
                  <Badge bg="light" className="text-primary">₹{property.price.toLocaleString("en-IN")}</Badge>
                </div>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {property.city}, {property.state}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProperty;
