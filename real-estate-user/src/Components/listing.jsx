import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchProperties } from "../Services/api"; // your api call
import PropertyCard from "../Components/PropertCard";
import { Container, Row } from "react-bootstrap";

const Listing = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const [properties, setProperties] = useState([]);

  const filters = {
    location: query.get("location") || "",
    type: query.get("type") || "",
    priceRange: query.get("priceRange") || "",
    purpose: query.get("purpose") || "",
  };

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      try {
        const res = await searchProperties(filters);
        setProperties(res.properties || []);
      } catch (error) {
        console.error("Search error:", error);
      }
    };

    fetchFilteredProperties();
  }, [search]); // runs whenever URL changes

  return (
    <Container className="py-4">
      <Row>
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found for this search.</p>
        )}
      </Row>
    </Container>
  );
};

export default Listing;
