import React from "react";
import logo from "../Img/Nr2.jpg";
import { NavLink } from "react-router-dom";
import "../Css/Navbar.css";

const Home = () => {
  return (
    <header>
      <div className="container container-flex">
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav>
          <div classname="navbar">
            <NavLink to="/" className="NavItem" activeClassName="activeItem">
              Home
            </NavLink>
            <NavLink
              to="/about "
              className="NavItem"
              activeClassName="activeItem"
            >
              About
            </NavLink>
            <NavLink
              to="/contact 
            "
              className="NavItem"
              activeClassName="activeItem"
            >
              Contact
            </NavLink>
            <NavLink
              to="/service "
              className="NavItem"
              activeClassName="activeItem"
            >
              Service
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Home;
