import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Img/Nr2.jpg";
import "../Css/ServiceStyle.css";
import MyContent from "../Component/Props";

const Services = () => {
  return (
    <>
      <h1>Service page</h1>
      <div className="services">
        <div className="card">
          <>
            <MyContent
              Title="Web Devolopment"
              Information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in."
            />
          </>

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
          <>
            <MyContent
              Title="Hosting servers"
              Information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit amet. Eget duis at tellus at. Mi bibendum neque egestas congue quisque egestas diam in. Dolor purus non enim."
            />
          </>
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
          <>
            <MyContent
              Title="It advice"
              Information="vulputate dignissim suspendisse in. Nunc aliquet bibendum enim facilisis gravida. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Ac auctor augue mauris augue neque gravida. Condimentum lacinia quis vel eros. Id faucibus nisl tincidunt eget.."
            />
          </>
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
