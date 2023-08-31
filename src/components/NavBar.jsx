import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Redux Store</div>

      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </nav>
  );
};

export default NavBar;
