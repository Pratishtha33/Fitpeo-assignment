import React from "react";
import '../stylesheets/AvailableJobs.css'
import SideNav from "../components/SideNav";
import JobDescription from "../components/JobDescription";
import JobFilter from "../components/JobFilter";
import TopNav from "../components/TopNav";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass, faSearch
} from "@fortawesome/free-solid-svg-icons";


const jobData = [
    {
        id: 1,
        title: 'Junior UI/UX Designer',
        company: 'Slack Technologies, LLC',
        logo: 'https://uploads-ssl.webflow.com/63c99565084633765bf05638/63c995650846336138f05cff_Slack.jpeg',
        eligibility: 'CGPA > 8.0',
        salary: '22 lpa',
        status: 'Eligible',
        details: 'We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.',
        tags: ['2024', 'Full Time', 'Remote']
    },
    {
        id: 2,
        title: 'Software Engineer',
        company: 'Tesla',
        logo: 'https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
        eligibility: 'CGPA > 3.5, No backlogs',
        salary: 'Competitive',
        status: 'Eligible',
        details: 'Join us at Tesla and be part of the team that is revolutionizing the automotive industry with sustainable energy solutions. As a Software Engineer, you will work on cutting-edge projects and contribute to the development of innovative software for our electric vehicles and autonomous driving systems.',
        tags: ['2023', 'Full Time', 'Palo Alto']
    },
    {
        id: 3,
        title: 'Data Scientist',
        company: 'Google',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfyJvPeGXlnDwOz3CFreFGyTApC7eNQ_uhae58Q39GbCnGbhdbpwDeCWVxEmxFNrn6Kk&usqp=CAU',
        eligibility: 'CGPA > 3.5, No backlogs',
        salary: 'Highly Competitive',
        status: 'Eligible',
        details: 'Join Google as a Data Scientist and work on cutting-edge machine learning algorithms and data analytics projects. You will have the opportunity to leverage large datasets and develop insights that drive strategic decision-making for various Google products and services.',
        tags: ['2023', 'Full Time', 'Mountain View']
    },
    {
        id: 4,
        title: 'Product Manager',
        company: 'Amazon',
        logo: 'https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg',
        eligibility: 'CGPA > 3.0',
        salary: 'Competitive',
        status: 'Eligible',
        details: 'Amazon is seeking a talented Product Manager to lead the development and launch of new products. As a Product Manager, you will work closely with cross-functional teams, conduct market research, and define product strategies to drive customer satisfaction and business growth.',
        tags: ['2023', 'Full Time', 'Seattle']
    },
    {
        id: 5,
        title: 'Frontend Developer',
        company: 'Facebook',
        logo: 'https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg',
        eligibility: 'CGPA > 3.0',
        salary: 'Competitive',
        status: 'Eligible',
        details: 'Join Facebook as a Frontend Developer and contribute to building user-friendly and interactive web applications. You will collaborate with designers and backend engineers to implement cutting-edge features and optimize the performance of Facebook\'s web platforms.',
        tags: ['2023', 'Full Time', 'Menlo Park']
    },
    {
        id: 6,
        title: 'Cybersecurity Analyst',
        company: 'Microsoft',
        logo: 'https://w7.pngwing.com/pngs/68/376/png-transparent-company-microsoft-logo-microsoft-logo-windows-technology-flat-and-simple-part-icon.png',
        eligibility: 'CGPA > 3.2, No backlogs',
        salary: 'Competitive',
        status: 'Eligible',
        details: 'As a Cybersecurity Analyst at Microsoft, you will play a crucial role in protecting Microsoft\'s systems and infrastructure from potential threats. You will perform security assessments, monitor network activity, and implement effective security measures to ensure the confidentiality and integrity of Microsoft\'s data.',
        tags: ['2023', 'Full Time', 'Redmond']
    },
    {
        id: 7,
        title: 'Data Engineer',
        company: 'Netflix',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Ujl9k6lwzEejBgy5bQVutzS4-ytAIcbsCg&usqp=CAU',
        eligibility: 'CGPA > 3.0',
        salary: 'Competitive',
        status: 'Eligible',
        details: 'Join Netflix as a Data Engineer and be part of the team responsible for managing and analyzing large-scale data infrastructure. You will design data pipelines, optimize data workflows, and collaborate with data scientists to drive data-driven insights and recommendations.',
        tags: ['2023', 'Full Time', 'Los Gatos']
    }
]

class AvailableJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        };
    }

    handleSearch = (event) => {
        this.setState({ searchQuery: event.target.value });
    };
    render() {
        const { searchQuery } = this.state;

        return (
            <div className="aj">
                <div className="main-section">
                    <div className="left-section">
                        <SideNav />
                    </div>
                    <div className="right-section">
                        <TopNav />
                        <div className="profile-heading">
                            <h3>Available Jobs</h3>
                            <h5>
                                &nbsp;List of guidelines to be followed during the placement
                                season of 2023-2024 batch.
                            </h5>
                        </div>
                        <div className="job-page-container">
                            <div className="job-page">
                                <div className="search-box">
                                    <input value={searchQuery}
                                        onChange={this.handleSearch} placeholder="&nbsp; Search for a Job by Company name, skill or keyword"></input>
                                    <button>Search <FontAwesomeIcon id="search-icon" icon={faSearch}></FontAwesomeIcon></button>
                                </div>
                                <div className="job-container">
                                    {jobData.map((job) => (
                                        <JobDescription key={job.id} job={job} searchQuery={searchQuery} />
                                    ))}
                                </div>
                            </div>
                            <div className="some-box">
                                <div className="job-filters">
                                    <JobFilter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AvailableJobs;