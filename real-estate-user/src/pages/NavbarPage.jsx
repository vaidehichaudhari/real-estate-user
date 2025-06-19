import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  FaBuilding,
  FaSignInAlt,
  FaUserPlus,
  FaListUl,
} from "react-icons/fa";

const NavbarPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      className="shadow-sm py-3"
      style={{ borderBottom: "2px solid #0d6efd" }}
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            fontWeight: "900",
            fontSize: "1.75rem",
            color: "#0d6efd",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaBuilding size={28} />
          RealEstate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto" style={{ fontWeight: "600" }}>
            {[
              { to: "/", label: "Home", icon: <FaBuilding size={18} /> },
              { to: "/listing", label: "Listings", icon: <FaListUl size={18} /> },
              { to: "/register", label: "Register", icon: <FaUserPlus size={18} /> },
              { to: "/login", label: "Login", icon: <FaSignInAlt size={18} /> },
            ].map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={`nav-link d-flex align-items-center ${
                  isActive(to) ? "active" : ""
                }`}
                style={{
                  color: isActive(to) ? "#0d6efd" : "#555",
                  transition: "color 0.3s, box-shadow 0.3s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0d6efd";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(13, 110, 253, 0.3)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive(to) ? "#0d6efd" : "#555";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <span className="me-2">{icon}</span>
                {label}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .nav-link {
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 0.35rem;
          cursor: pointer;
          user-select: none;
        }
        .nav-link.active {
          font-weight: 700;
          background-color: #d0e2ff;
        }
        .navbar-toggler {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </Navbar>
  );
};

export default NavbarPage;
