// src/pages/Dashboard.jsx
// import { useState } from "react";
import "./Schemes.css";

export default function Dashboard() {
  // const [currentStep, setCurrentStep] = useState(1);

  // const steps = ["Ploughing", "Sowing", "Irrigation", "Harvesting", "Selling"];

  const schemes = [
    {
      name: "PM-Kisan Samman Nidhi",
      desc: "Provides direct income support of ₹6000/year to farmers.",
      link: "https://pmkisan.gov.in/",
    },
    {
      name: "Pradhan Mantri Fasal Bima Yojana",
      desc: "Crop insurance scheme to protect farmers against losses.",
      link: "https://pmfby.gov.in/",
    },
    {
      name: "Kisan Credit Card (KCC)",
      desc: "Provides farmers with timely credit for farming needs.",
      link: "https://www.myscheme.gov.in/schemes/kcc",
    },
    {
      name: "Soil Health Card Scheme",
      desc: "Gives soil health reports for better crop decisions.",
      link: "https://soilhealth.dac.gov.in/",
    },
  ];

  return (
    <div className="dashboard">
      {/* Govt Schemes */}
      <div className="schemes">
        <h1 className="h2">Active Government Schemes for You</h1>
        <div className="scheme-list">
          {schemes.map((scheme, index) => (
            <div className="scheme-card" key={index}>
              <h3>{scheme.name}</h3>
              <p>{scheme.desc}</p>
              <a href={scheme.link} target="_blank" rel="noreferrer">
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
