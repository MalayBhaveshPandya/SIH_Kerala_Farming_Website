import { Link } from "react-router-dom";
import "./Login.css";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Schemes from "../components/Schemes";

export default function Login() {
  return (
    <BackgroundWrapper>
      <div className="auth-container">
        <h2 className="auth-title">🌿 Farmer Login</h2>
        <form className="auth-form">
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
            Login
          </button>
        </form>
        <p className="auth-footer">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </div>
      <Schemes />
    </BackgroundWrapper>
  );
}
