import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [usePhone, setUsePhone] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const payload = usePhone
        ? { phone: identifier, password }
        : { email: identifier, password };

      const response = await axios.post("http://localhost:9000/api/user/login", payload);

      if (response.data.success) {
        toast.success("Login successful!");
        if (rememberMe) {
          localStorage.setItem("rememberedUser", identifier);
        }
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Server error";
      toast.error(msg);
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  // FIXED IMAGE URL (Real estate theme)
  const imageUrl =
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80";


  return (
    <div className="container mt-5">
      <div className="row shadow-lg rounded overflow-hidden" style={{ minHeight: "550px" }}>
        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block p-0" style={{ position: "relative" }}>
          <img
            src={imageUrl}
            alt="Real Estate"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.8)",
              minHeight: "550px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))",
            }}
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 bg-white p-5 d-flex flex-column justify-content-center">
          <h3 className="text-center mb-4 text-primary fw-bold">Login to Your Account</h3>

          {/* Social login buttons */}
          <div className="d-flex justify-content-center gap-3 mb-3">
            <button className="btn btn-outline-danger w-50">
              <FaGoogle className="me-2" /> Google
            </button>
            <button className="btn btn-outline-primary w-50">
              <FaFacebook className="me-2" /> Facebook
            </button>
          </div>

          <p className="text-center text-muted">or use credentials to login</p>

          <form onSubmit={handleSubmit}>
            {/* Email or phone */}
            <div className="mb-3 input-group">
              <span className="input-group-text">
                {usePhone ? <FaPhone /> : <FaEnvelope />}
              </span>
              <input
                type={usePhone ? "tel" : "email"}
                className="form-control"
                placeholder={usePhone ? "Enter phone number" : "Enter email"}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
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

            {/* Remember me + Forgot password */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="btn btn-link text-decoration-none p-0"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              Login
            </button>
          </form>

          {/* Toggle login method */}
          <p className="text-center mt-3">
            {usePhone ? "Login using Email?" : "Login using Phone?"}{" "}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary ms-1"
              onClick={() => {
                setUsePhone(!usePhone);
                setIdentifier("");
              }}
            >
              Switch
            </button>
          </p>

          <p className="text-center mt-2">
            Don't have an account?{" "}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
              className="text-decoration-none"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
