import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav_logo">
          <h2>InvestoPrime</h2>
        </div>
        <div className="link">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Investmnet</li>
            </a>
            <a href="#">
              <li>Services</li>
            </a>
          </ul>
        </div>
        <div className="nav_btn">
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
