import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchProperties } from "../Services/api";
import PropertyCard from "../Components/PropertCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const Listing = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const filters = {
    location: query.get("location") || "",
    type: query.get("type") || "",
    priceRange: query.get("priceRange") || "",
    bedroom: query.get("bedroom") || "",
  };

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      setLoading(true);
      try {
        const res = await searchProperties(filters);
        setProperties(res.properties || []);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProperties();
  }, [search]);

  return (
    <Container className="py-4">
      <h3 className="mb-4">Property Listings</h3>
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Loading properties...</p>
        </div>
      ) : (
        <Row>
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <Col>
              <div className="text-center mt-5">
                <h5>No properties found for your search.</h5>
                <p>Try adjusting the filters or location.</p>
              </div>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default Listing;
