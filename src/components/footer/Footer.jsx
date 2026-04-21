import React from "react";
import "./Footer.css";
import { FiHome, FiSettings, FiBook, FiUser } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-icon-wrapper">
          <FiHome className="footer-icons" />
          <span className="footer-icon-tooltip">Home</span>
        </div>
        <div className="footer-icon-wrapper">
          <FiBook className="footer-icons" />
          <span className="footer-icon-tooltip">Blog</span>
        </div>
        <div className="footer-icon-wrapper">
          <FiUser className="footer-icons" />
          <span className="footer-icon-tooltip">About</span>
        </div>
        <div className="footer-icon-wrapper">
          <FiSettings className="footer-icons" />
          <span className="footer-icon-tooltip">Settings</span>
        </div>
      </div>

      <p className="footer-copy">© 2026 Vikas Chauhan. All rights reserved.</p>
    </div>
  );
}

export default Footer;
