import React from "react";
import "./BackgroundWrapper.css";

export default function BackgroundWrapper({ children }) {
  return (
    <div className="background-wrapper">
      {/* Spline Background */}
      <img className="background-img" src="/background.png" />

      {/* Page Content */}
      <div className="background-content">{children}</div>
    </div>
  );
}
