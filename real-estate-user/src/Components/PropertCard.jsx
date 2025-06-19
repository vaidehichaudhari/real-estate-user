import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  if (!property) return null;

  return (
    <Card className="h-100 shadow-sm border-0 rounded-3">
      <Link to={`/property/${property.id}`}>
        {property.image ? (
          <Card.Img
            variant="top"
            src={`http://localhost:9000/uploads/${property.image}`}
            alt={property.title}
            style={{
              height: "180px",
              objectFit: "cover",
              borderTopLeftRadius: "0.375rem",
              borderTopRightRadius: "0.375rem",
            }}
          />
        ) : (
          <div
            style={{
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f8f9fa",
              color: "#6c757d",
              fontSize: "1rem",
              fontWeight: 500,
              borderTopLeftRadius: "0.375rem",
              borderTopRightRadius: "0.375rem",
            }}
          >
            No Image
          </div>
        )}
      </Link>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-1" style={{ fontWeight: "600", fontSize: "1.1rem" }}>
          {property.title}
        </Card.Title>

        <div className="mb-2">
          <Badge bg="info" className="me-2 text-dark">{property.city}</Badge>
          <Badge bg="secondary">{property.type}</Badge>
        </div>

        <Card.Text className="mb-3" style={{ fontWeight: "700", fontSize: "1.15rem", color: "#198754" }}>
          ₹{property.price?.toLocaleString("en-IN")}
        </Card.Text>

        <Link to={`/property/${property.id}`} className="mt-auto">
          <Button variant="outline-primary" className="w-100">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;

