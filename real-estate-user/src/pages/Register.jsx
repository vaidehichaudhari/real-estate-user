import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebook,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:9000/api/user/register", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        setSuccess(response.data.message);
        toast.success("Registration successful!");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        const msg = response.data.message || "Registration failed";
        setError(msg);
        toast.error(msg);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Server error";
      setError(msg);
      toast.error(msg);
    }
  };

  const goToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const imageUrl =
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80";

  return (
    <div className="container mt-5">
      <div className="row shadow-lg rounded overflow-hidden">
        {/* Left Real Estate Image with Overlay */}
        <div className="col-md-6 d-none d-md-block p-0 position-relative">
          <img
            src={imageUrl}
            alt="Real Estate"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover", minHeight: "550px", filter: "brightness(0.8)" }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(0,0,0,0.6))",
            }}
          ></div>
        </div>

        {/* Right Form Section */}
        <div className="col-md-6 bg-white p-5">
          <h3 className="text-center mb-4 text-primary fw-bold">Create Your Account</h3>

          {/* Social Login Buttons */}
          <div className="d-flex justify-content-center gap-3 mb-3">
            <button className="btn btn-outline-danger w-50">
              <FaGoogle className="me-2" /> Google
            </button>
            <button className="btn btn-outline-primary w-50">
              <FaFacebook className="me-2" /> Facebook
            </button>
          </div>

          <p className="text-center text-muted">or use email to register</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              Register
            </button>
          </form>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <a href="/" onClick={goToLogin} className="text-decoration-none">
              Login
            </a>
          </p>

          {error && <p className="text-danger text-center mt-2">{error}</p>}
          {success && <p className="text-success text-center mt-2">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
