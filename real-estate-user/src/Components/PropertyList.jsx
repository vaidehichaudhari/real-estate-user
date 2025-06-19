import React from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const PropertyList = ({ properties, loading }) => {
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (!properties.length) {
    return <p className="text-center">No properties found.</p>;
  }

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {properties.map((property) => (
        <Col key={property.id}>
          <Card className="h-100 shadow-sm border-0 rounded-3">
            <Link to={`/property/${property.id}`}>
              <Card.Img
                variant="top"
                src={`http://localhost:9000/uploads/${property.image}`}
                alt={property.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
            </Link>
            <Card.Body>
              <Card.Title>{property.title}</Card.Title>
              <Card.Text>
                {property.city} | {property.type} <br />
                ₹{property.price.toLocaleString("en-IN")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PropertyList;
