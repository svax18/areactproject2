import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Img/Nr1.jpg";
import "../Css/Home.css";

const MyElement = <car brand="Ford" />;
const About = () => {
  return (
    <div className="MainSec">
      <div className="contentBox">
        <h1>About us</h1>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <div className="btnBox">
          <div className="btn">
            <NavLink
              to="/contact "
              className="NavItem"
              activeClassName="activeItem"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={logo} alt="home"></img>
      </div>
    </div>
  );
};
export default About;
