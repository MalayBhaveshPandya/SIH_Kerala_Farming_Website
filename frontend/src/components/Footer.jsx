import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Kerala Farmers</h3>
          <p>Empowering farmers with technology and information.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/support">Support</a>
        </div>

        <div className="footer-right">
          <p>
            &copy; {new Date().getFullYear()} Kerala Farmers. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
