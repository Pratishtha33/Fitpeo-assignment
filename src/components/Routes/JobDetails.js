import React from "react";
import '../stylesheets/JobDetails.css'
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare, faLocationDot, faIndustry, faSquareArrowUpRight, faDollarSign, faHourglass
} from "@fortawesome/free-solid-svg-icons";
import {
    faCalendar, faUser, faEarthAsia,
} from "@fortawesome/free-regular-svg-icons";

const technicalSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'Git',
    'Webpack',
];
const perksAndBenefits = [
    'Flexible work hours',
    'Health insurance',
    'Paid time off',
    '401(k) retirement plan',
    'Remote work options',
    'Professional development opportunities',
    'Gym membership',
];
const aboutCompany = `Tesla is a leading electric vehicle and clean energy company founded by Elon Musk, JB Straubel, Martin Eberhard, Marc Tarpenning, and Ian Wright in 2003. Headquartered in Palo Alto, California, Tesla designs, manufactures, and sells electric cars, solar energy products, and energy storage solutions. The company is known for its cutting-edge technology, innovative designs, and commitment to sustainability. Tesla's electric vehicles, such as the Model S, Model 3, Model X, and Model Y, have revolutionized the automotive industry and played a significant role in accelerating the global transition to sustainable transportation. `
const aboutJob = `As a Software Engineer (SWE) at Tesla, you'll have the opportunity to work at the forefront of cutting-edge technology and contribute to the development of innovative software solutions. You'll collaborate with a talented team of engineers and designers to create software that powers Tesla's electric vehicles, autonomous driving systems, and energy products. From designing and implementing complex algorithms to optimizing performance and ensuring scalability, you'll be involved in all stages of the software development lifecycle.`
const responsibilities = [
    'Developing and maintaining high-quality software applications',
    'Collaborating with cross-functional teams to define project requirements',
    'Designing and implementing efficient and scalable software solutions',
    'Writing clean and well-documented code',
    'Conducting code reviews and providing constructive feedback',
    'Troubleshooting and debugging software issues',
];
const requirements = [
    'Bachelor’s or Master’s degree in Computer Science or a related field',
    'Minimum CGPA of 3.0 on a 4.0 scale',
    'No more than 2 active backlogs',
    'Strong proficiency in programming languages such as JavaScript, Python, or C++',
    'Experience with web development frameworks such as React or Angular',
    'Familiarity with version control systems like Git',
];
const otherInformation = [
    { label: 'Number of Openings', value: 5 },
    { label: 'Start Date', value: 'August 1, 2023' },
    { label: 'Employment Type', value: 'Full-time' },
    { label: 'Salary Range', value: 'Competitive' },
];


const skillsList = technicalSkills.map((skill, index) => (
    <div key={index} id="skill-card">{skill}</div>
));
const perksList = perksAndBenefits.map((perk, index) => (
    <li key={index}>{perk}</li>
));
class JobDetails extends React.Component {

    render() {
        return (
            <div className="r">
                <div className="main-section">
                    <div className="left-section">
                        <SideNav />
                    </div>
                    <div className="right-section">
                        <TopNav />
                        <section className="job-details">
                            <div className="jd-top">
                                <div id="jd-t-1">
                                    <img src="https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" id="company-logo"></img>
                                </div>
                                <div id="jd-t-2">
                                    <div id="jd-t-2-1"><h3>Tesla <FontAwesomeIcon id="small-icon" icon={faSquareArrowUpRight}></FontAwesomeIcon></h3></div>
                                    <div id="jd-t-2-2">Software Developer Engineer</div>
                                    <div id="jd-t-2-3">
                                        <div class="jdt-details" id="" >
                                            <div id="jdt-details-logo"><FontAwesomeIcon id="icon-size" icon={faDollarSign} /></div>
                                            <div id="jdt-details-value">
                                                <h4>Stipend</h4>
                                                <h5>20K per month</h5>
                                            </div>
                                        </div>
                                        <div class="jdt-details" id="" >
                                            <div id="jdt-details-logo"><FontAwesomeIcon id="icon-size" icon={faCalendar} /></div>
                                            <div id="jdt-details-value">
                                                <h4>Duration</h4>
                                                <h5>2 months</h5>
                                            </div>
                                        </div>

                                        <div class="jdt-details" id="" >
                                            <div id="jdt-details-logo"><FontAwesomeIcon id="icon-size" icon={faLocationDot} /></div>
                                            <div id="jdt-details-value">
                                                <h4> Office Location</h4>
                                                <h5>Mumbai</h5>
                                            </div>
                                        </div>
                                        <div class="jdt-details" id="" >
                                            <div id="jdt-details-logo"><FontAwesomeIcon id="icon-size" icon={faIndustry} /></div>
                                            <div id="jdt-details-value">
                                                <h4>Job Type</h4>
                                                <h5>In-office</h5>
                                            </div>
                                        </div>
                                        <div class="jdt-details" id="" >
                                            <div id="jdt-details-logo"><FontAwesomeIcon id="icon-size" icon={faHourglass} /></div>
                                            <div id="jdt-details-value">
                                                <h4>Apply By</h4>
                                                <h5>22 May 23'</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jd-rest">
                                <div className="jd-rest-left">
                                    <div className="jdrl" id="jdrl-1">
                                        <h3>About Tesla</h3>
                                        <p>{aboutCompany}</p>
                                    </div>
                                    <div className="jdrl" id="jdrl-2">
                                        <h3>About Job</h3>
                                        <p>{aboutJob}</p>
                                    </div>
                                    <div className="jdrl" id="jdrl-3">
                                        <h3>Responsibilities</h3>
                                        <ul>
                                            {responsibilities.map((responsibility, index) => (
                                                <li key={index}>{responsibility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="jdrl" id="jdrl-4">
                                        <h3>Requirements</h3>
                                        <ul>
                                            {requirements.map((responsibility, index) => (
                                                <li key={index}>{responsibility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="apply-btn">
                                        <div className="jdrl-metrics">
                                            Students Applied : 296
                                        </div>
                                        <button className="btn-primary">Apply</button>
                                    </div>

                                </div>

                                <div className="jd-rest-right">
                                    <div className="jdrr" id="jdrr-1">
                                        <h4>Skills Required</h4>
                                        <div className="skills-req">
                                            {skillsList}
                                        </div>
                                    </div>
                                    <div className="jdrr" id="jdrr-2">
                                        <h4>Perks / Benefits</h4>
                                        <ul>
                                            {perksList}
                                        </ul>
                                    </div>
                                    <div className="jdrr" id="jdrr-2">
                                        <h4>Other Information</h4>
                                        <ul>
                                            {otherInformation.map((info, index) => (
                                                <li key={index}>
                                                    <strong style={{ color: '#1d3557' }}>{info.label} : </strong>
                                                    {info.value}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
export default JobDetails;