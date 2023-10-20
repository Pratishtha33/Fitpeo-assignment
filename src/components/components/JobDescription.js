import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/AvailableJobs.css'

function JobDescription({ job, searchQuery }) {
    /* const display = event =>{
        event.currentTarget.style.color = 'red';
        event.currentTarget.style.display = 'block';
        document.getElementsByClassName("jdw-top").style.color = "red";
    }; */
        
    //     const filteredJobData = searchQuery
    //     ? jobs.filter((job) =>
    //     job.title.toLowerCase().includes(searchQuery.toLowerCase())
    //   ): jobs;
    const filteredJobData = job;
    console.log(filteredJobData);
    const [show, setShow] = useState(false)
    return (
        <section id="JobDescription">
            <div className="jdw">
                {show ? (
                    <div className="hidden">
                        <h5 className="job-role">{filteredJobData.details}</h5>

                        <div className="job-tags">
                            {filteredJobData.tags.map((tag) => (
                                <div className="tag" key={tag}>{tag}</div>
                            ))}
                        </div>

                        <hr></hr>
                        <div className="job-tags-2">
                            <div className="job-salary">Salary: {filteredJobData.salary}</div>
                            <div className="job-apply">
                                <button>
                                    <Link to="/job-details">Apply Now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}

                <div className="jdw-top">
                    <div className="jdw-top-left">
                        <div className="Company-logo">
                            <img src={filteredJobData.logo} alt="Company Logo"></img>
                        </div>
                        <div className="Job-head">
                            <h3 className="Job-title">{filteredJobData.title}</h3>
                            <h3 className="Company-title">{filteredJobData.company}</h3>
                        </div>
                    </div>

                    <h3 className="Job-status">{filteredJobData.status}</h3>
                    <button className="showDetails" onClick={() => setShow(!show)}>
                        Details
                    </button>
                </div>
            </div>
        </section>
    );
}

export default JobDescription;