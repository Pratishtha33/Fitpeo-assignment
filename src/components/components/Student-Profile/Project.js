import React from 'react';
import '../../stylesheets/Project.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faPlus,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function Project(props) {
  const [inputValue, setInputValue] = useState("");
  const [skills, setskills] = useState(['React', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Node.js', 'Webpack', 'Java']);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setskills((prevskills) => [...prevskills, inputValue]);
    setInputValue("");
    console.log("Function called");
    console.log(skills);
  };
  const { title, company, location, date, imageSrc } = props;

  const SkillCard = ({ skill }) => {
    return (
      <div id="skill-card">{skill}</div>
    );
  };

  const projects = [
    {
      projectName: "Social Network App",
      duration: "3 months",
      githubLink: "https://github.com/myusername/social-network-app",
      hostedLink: "https://socialnetworkapp.com",
      description:"A social networking app built using MERN stack and WebRTC for video calling. ",
      techStackUsed: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Redux",
        "WebRTC",
      ],
    },
    {
      projectName: "E-commerce Platform",
      duration: "6 months",
      githubLink: "https://github.com/myusername/ecommerce-platform",
      hostedLink: "https://myecommerceplatform.com",
      description:" A complete e-commerce platform built using Microservices architecture and Kubernetes for scalability. Users can browse products, add them to their cart, and make secure payments. ",
      techStackUsed: [
        "React",
        "Node.js",
        "Redux",
        "Docker",
        "Kubernetes",
        "GraphQL",
      ],
    },
    {
      projectName: "AI Chatbot",
      duration: "4 months",
      githubLink: "https://github.com/myusername/ai-chatbot",
      hostedLink: "https://myaichatbot.com",
      description:"An AI-powered chatbot built using NLP and machine learning to provide intelligent conversation and assistance. The chatbot can understand natural language and respond to queries related to a variety of topics.",
      techStackUsed: [
        "Python",
        "Django",
        "React",
        "NLP",
        "Machine Learning",
        "AWS",
      ],
    },
  ];
  const ProjectCard = ({ project }) => {
    return (
      <div id="project-card">
        <div id="project-card-top">
          <div id="top-lft">
            <h4>{project.projectName}</h4>
            <h5>{project.duration}</h5>
          </div>
          <div id="top-rgt">
            <a href={project.hostedLink} ><FontAwesomeIcon icon={faLink} /></a>
            <a href={project.githubLink} ><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
        <div id="project-card-mid">{project.description}</div>
        <div id="project-card-btm">Tech Stack: {project.techStackUsed.join(", ")}</div>
      </div>
    );
  };
  return (
    <section id="projects">
      <div className='skills'>
        <div id="skills-lft" className='section-lft'>
          <h3>SKILLS</h3>
        </div>
        <div id="skills-rgt">
          <div id="skill-cards">
            {skills.map(skill => (
              <SkillCard skill={skill} key={skill} />
            ))}
          </div>
          <div id="add-more-skills">
            <input value={inputValue} onChange={handleChange} ></input>
            <button onClick={handleSubmit}> Add </button>
          </div>
        </div>
      </div>
      <div className='projects'>
        <div id="projects-lft">
          <h3>PROJECTS</h3>
        </div>
        <div id="projects-rgt">

          {projects.map(project => (
            <ProjectCard project={project} key={project} />
          ))}


        </div>
      </div>
    </section>
  );
}

export default Project;
