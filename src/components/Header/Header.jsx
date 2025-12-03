import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="header-logo">
          <Link to="/">Athotec Solutions</Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/" className="btn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/board-games" className="btn">
                Board Games
              </Link>
            </li>
            <li>
              <Link to="/about" className="btn">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
