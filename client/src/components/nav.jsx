import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">John Lino.dev</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to='/' onClick={() => setIsOpen(!isOpen)}>
          Home
        </Link>
        <Link to='/about' onClick={() => setIsOpen(!isOpen)}>
          About
        </Link>
        <Link to='/projects' onClick={() => setIsOpen(!isOpen)}>
          Projects
        </Link>
        <Link to='/contact' onClick={() => setIsOpen(!isOpen)}>
          Contact
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};
