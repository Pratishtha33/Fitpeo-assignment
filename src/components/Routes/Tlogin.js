import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import "../stylesheets/Tlogin.css";

const Tlogin = () => {
  const navigate = useNavigate();
  return (
    <div className="tlogin">
      <div className="left">
        <div className="heading">
          TEACHER PORTAL
          <button
            type="button"
            onClick={() => {
              navigate(`/student/login`);
            }}
            title="Switch to Student Portal"
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
              <label for="erno">Employee Number - </label>
              <input
                type="text"
                name="erno"
                id="erno"
                placeholder="Enter your Employee Number"
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
        </div>
      </div>
      <div className="right">{/* Can put in something here */}</div>
    </div>
  );
};

export default Tlogin