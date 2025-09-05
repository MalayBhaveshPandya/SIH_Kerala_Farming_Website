import { Link } from "react-router-dom";
import "./Login.css";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Schemes from "../components/Schemes";

export default function Signup() {
  return (
    <BackgroundWrapper>
      <div className="auth-container">
        <h2 className="auth-title">🌾 Farmer Signup</h2>
        <form className="auth-form">
          <input
            type="text"
            placeholder="Full Name"
            className="auth-input"
            required
          />
          <input
            type="phone"
            placeholder="Phone"
            className="auth-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            required
          />
          <button type="submit" className="auth-btn">
            Signup
          </button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <Schemes />
    </BackgroundWrapper>
  );
}
