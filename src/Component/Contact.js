import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Contact.css";

const Contact = () => {
  return (
    <>
      <h1>Contact page</h1>
      <form className="contact">
        <div>
          <label htmlFor="name">Name </label>
          <input type="text" placeholder="enter name" />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="text" placeholder="enter name" />
        </div>
        <div>
          <label htmlFor="adress">Adress </label>
          <input type="text" placeholder="enter name" />
        </div>
        <div className="btnBox">
          <div className="btn">
            <NavLink
              to="/contact "
              className="NavItem"
              activeClassName="moreinfo"
            >
              Enter Details
            </NavLink>
          </div>
        </div>
      </form>
    </>
  );
};
export default Contact;
