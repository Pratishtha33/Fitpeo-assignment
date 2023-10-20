import React from "react";
import "../stylesheets/Profile.css";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import TopNav from "../components/TopNav";
import { BrowserRouter as Router, Switch, Route, Outlet, Link } from "react-router-dom";
import About from "../components/Student-Profile/About";
import Education from "../components/Student-Profile/Education";
import Projects from "../components/Student-Profile/Project";
import Experience from "../components/Student-Profile/Experience";
import Awards from "../components/Student-Profile/Award";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesRight, faArrowUpRightFromSquare, faPhone, faEnvelope, faAddressBook, faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter, faLinkedin, faFigma } from '@fortawesome/free-brands-svg-icons';

const about = "Hi, I'm a third-year student pursuing a Bachelor's degree in Computer Science and Engineering. I'm passionate about programming, algorithms, and data structures. In the past, I've worked on various projects related to web development, mobile app development, and machine learning.";
const trimmedAboutText = about.slice(0, 200) + "...";
const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Node.js', 'Webpack', 'Java'];
const SkillCard = ({ skill }) => {
  return (
    <div id="skill-card">{skill}</div>
  );
};


class Profile extends React.Component {
  
  render() {
    return (

      <DashboardLayout>
        <TopNav />
        <div className="profile-container">
          <div className="profile-heading">
            <h3>Profile</h3>
            <h5>&nbsp;You can edit and add fields to your profile to increase your chances of being recruited.</h5>
          </div>
          <div className="profile-sub-container">
            <div className="profile-category">
              <div id="profile-sub" className="profile-category-nav">
                <ul>
                  <li><Link to="/profile/about">About</Link></li>
                  <li><Link to="/profile/education">Education</Link></li>
                  <li><Link to="/profile/projects">Projects</Link></li>
                  <li><Link to="/profile/experiences">Experience</Link></li>
                  <li><Link to="/profile/awards">Awards</Link></li>
                </ul>
              </div>
              <div className="profile-category-body">
                <Outlet />
              </div>
            </div>
            <div id="profile-sub" className="profile-right-nav">
              <div id="profile-right-nav-top">
                <div id="profile-pic-small">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ></img></div>
              </div>
              <div id="profile-right-nav-mid">
                <div id="basic-info">

                  <h4 id="name">Krati Jain</h4>
                  <h5 id="er-no"> 201B137 </h5>
                  <p id="tagline"> Junior Year student pursuing B.tech in Computer Science & Engineering.</p>
                  <div id="socials">
                    <ul id="socials-icons">
                      <li id="s1"><FontAwesomeIcon icon={faGithub} /></li>
                      <li><FontAwesomeIcon icon={faTwitter} /></li>
                      <li><FontAwesomeIcon icon={faLinkedin} /></li>
                      <li><FontAwesomeIcon icon={faFigma} /></li>
                    </ul>
                    <button id="personal-website">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                  </div>
                </div>
                <div id="contact-info">
                  <h4>Contact Information</h4>
                  <div className="contact-container">
                    <h5> <FontAwesomeIcon icon={faPhone} /> Phone </h5>
                    <h6>+91 700 744 0611</h6>
                  </div>
                  <div className="contact-container">
                    <h5> <FontAwesomeIcon icon={faEnvelope} /> Email</h5>
                    <h6>iamkrati22@gmail.com</h6>
                  </div>
                  <div className="contact-container">
                    <h5><FontAwesomeIcon icon={faLocationDot} /> Address </h5>
                    <h6>242/3 Yahiya Ganj, Lucknow</h6>
                  </div>
                </div>

              </div>
              <div id="profile-right-nav-btm">
                <div id="about-info">
                  <h4>About</h4>
                  <p>
                    {trimmedAboutText} <Link to = "/" id = "read-more">Read More</Link >
                  </p>
                </div>
                <div id="skills-info">
                  <h4>Skills </h4>
                  <div id="skill-cards">
                    {skills.map(skill => (
                      <SkillCard skill={skill} key={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

    );
  }
}
export default Profile;
