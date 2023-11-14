import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Img/Nr2.jpg";
import "../Css/ServiceStyle.css";

const Services = () => {
  return (
    <>
      <h1>Service page</h1>
      <div className="services">
        <div className="card">
          <h2>Web Development</h2>
          <img src={logo} alt="servicesOne" className="SeImg" />
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa "
          </p>
          <div className="btnBox">
            <div className="btn">
              <NavLink
                to="/about "
                className="NavItem"
                activeClassName="activeItem"
              >
                Web Development
              </NavLink>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>Web Development</h2>
          <img src={logo} alt="servicesOne" className="SeImg" />
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa "
          </p>
          <div className="btnBox">
            <div className="btn">
              <NavLink
                to="/about "
                className="NavItem"
                activeClassName="activeItem"
              >
                Web Development
              </NavLink>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>Web Development</h2>
          <img src={logo} alt="servicesOne" className="SeImg" />
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa "
          </p>
          <div className="btnBox">
            <div className="btn">
              <NavLink
                to="/about "
                className="NavItem"
                activeClassName="activeItem"
              >
                Web Development
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
