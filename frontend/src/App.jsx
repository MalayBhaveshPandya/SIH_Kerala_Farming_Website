import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import D1 from "./pages/D1";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/" element={<D1 />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
