import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="#home" className="navbar-logo">
         <img
          src="/images/rubium-logo.png"
          alt="Rubium AI"
        />

         <span>RUBIUM AI</span>
        </a>


        {/* NAVIGATION */}
        <nav className="navbar-links">

          <a href="#services">
            What We Build
          </a>

          <a href="#industries">
            Industries
          </a>

          <a href="#process">
            Solutions
          </a>

          <a href="#technology">
            Technology
          </a>

          <a href="#about">
            About
          </a>

        </nav>


        {/* CTA */}
        <a
          href="#contact"
          className="navbar-cta"
        >
          Book a Call
          <span>↗</span>
        </a>

      </div>
    </header>
  );
}

export default Navbar;