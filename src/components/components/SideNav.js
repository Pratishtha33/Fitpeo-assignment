import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "../stylesheets/SideNav.css";

const SideNav = () => {
  return (
    <section id="SideNav">
      <div class="logo">
        <img src="juetlogo.jpg" alt="logo" />
        <h3>Training & Placement Portal</h3>
      </div>
      <hr />
      <div className="navbar">
        <ul>
          <li>

            <Link to="/">

              <FontAwesomeIcon icon={solid("chart-line")} />{" "}
              &nbsp;&nbsp;Dashboard
            </Link>
          </li>
          <li>

            <Link to="/profile">

              <FontAwesomeIcon icon={regular("user")} /> &nbsp;&nbsp;Profile
            </Link>
          </li>
          <li>

            <Link to="/jobs">

              <FontAwesomeIcon icon={solid("list")} /> &nbsp;&nbsp;Available
              Jobs
            </Link>
          </li>
          <li>

            <Link to="/resume">

              <FontAwesomeIcon icon={regular("pen-to-square")} />{" "}
              &nbsp;&nbsp;Resume
            </Link>
          </li>
          <li>

            <Link to="/policy">

              <FontAwesomeIcon icon={regular("file-lines")} />{" "}
              &nbsp;&nbsp;Placement Policy
            </Link>
          </li>
          <li>

            <Link to="/">

              <FontAwesomeIcon icon={solid("arrow-right-from-bracket")} />{" "}
              &nbsp;&nbsp;Log Out
            </Link>
          </li>
        </ul>
      </div>

      <hr className="fade"></hr>
      <div className="user-card">
        <div className="uc-left">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="img"
          ></img>
        </div>
        <div className="uc-right">
          <h4>John Doe</h4>
          <p>veryrandom@mail.com</p>
        </div>
        {/* <p className="logout"> <Link to="/"> <FontAwesomeIcon icon={solid("arrow-right-from-bracket")} /></Link></p> */}
      </div>
    </section>
  );
};
export default SideNav;
