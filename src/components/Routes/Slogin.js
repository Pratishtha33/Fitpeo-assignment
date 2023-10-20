import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/Slogin.css";

const Slogin = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="left">
        <div className="heading">
          STUDENT PORTAL
          <button
            type="button"
            onClick={() => {
              navigate(`/admin/login`);
            }}
            title="Switch to Teacher Portal"
          >
            <SwapHorizIcon />
            <span>Switch</span>
          </button>
        </div>
        <div className="card">
          <div className="head">Log In</div>
          <div className="subhead">
            Welcome back! Please enter your details.
          </div>
          <div className="form">
            <form>
              <label for="erno">Enrollment Number - </label>
              <input
                type="text"
                name="erno"
                id="erno"
                placeholder="Enter your Enrollment Number"
              />
              <label for="pass">Password - </label>
              <input
                type="text"
                name="pass"
                id="pass"
                placeholder="Enter your Password"
              />
              <input type="submit" value="Sign in"></input>
            </form>
          </div>
          <center>
            <div className="foot">
              New to this place? <Link to="/student/register">Sign Up</Link>
            </div>
          </center>
        </div>
      </div>
      <div className="right">{/* Can put in something here */}</div>
    </div>
  );
};

export default Slogin;
