import React from "react";
import "./Footer.css";
import Colors from "../../styles/Colors";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: Colors.backgroundPage,
        color: Colors.textSecondary,
      }}
    >
      <div className="container">
        <p>© 2025 Athotec Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
