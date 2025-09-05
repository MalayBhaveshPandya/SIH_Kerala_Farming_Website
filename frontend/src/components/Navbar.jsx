import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ✅ CSS is in the same folder as Navbar.jsx

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="/symbol.svg"
            style={{ width: "30px", height: "30px" }}
          ></img>{" "}
          Kerala Farmers
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" onClick={() => setIsOpen(false)}>
            Signup
          </Link>
        </li>
        {/* <li>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
        </li> */}
        <li>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/chatbot" onClick={() => setIsOpen(false)}>
            Ask Anything
          </Link>
        </li>
        <li>
          <img
            className="farmer"
            src="/farmer.svg"
            alt="Farmer"
            style={{ width: "30px", height: "30px" }}
          />
        </li>
      </ul>
    </nav>
  );
}
