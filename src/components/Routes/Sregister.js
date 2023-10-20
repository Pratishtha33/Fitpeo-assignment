import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import "../stylesheets/Sregister.css";

const Sregister = () => {
  const navigate = useNavigate();
  return (
    <div className="register">
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
          <div className="head">Register</div>
          <div className="subhead">Kindly use your Webkiosk details.</div>
          <div className="form">
            <form>
              <label for="erno">Enrollment Number - </label>
              <input
                type="text"
                name="erno"
                id="erno"
                placeholder="Enter your Enrollment Number"
              />
              <label for="dob">Date of Birth - </label>
              <input
                type="text"
                name="dob"
                id="dob"
                placeholder="Enter your Date of Birth"
              />
              <label for="pass">Password - </label>
              <input
                type="text"
                name="pass"
                id="pass"
                placeholder="Enter your Password"
              />
              <input type="submit" value="Sign up"></input>
            </form>
          </div>
          <center>
            <div className="foot">
              Already have an account? <Link to="/student/login">Sign in</Link>
            </div>
          </center>
        </div>
      </div>
      <div className="right">{/* Can put in something here */}</div>
    </div>
  );
};

export default Sregister;
