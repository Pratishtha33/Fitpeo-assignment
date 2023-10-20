import React from "react";
import '../stylesheets/AdminProfile.css'
import AdminSideNav from "../components/AdminSideNav";


import { Typography, TextField, Select, MenuItem, Checkbox, Button } from '@mui/material';
import TopNav from "../components/TopNav";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
class CreateJobs extends React.Component {
    render() {
        return (
            <div className="r">
                <div className="main-section">
                    <div className="left-section">
                        <AdminSideNav />
                    </div>
                    <div className="right-section">
                        <TopNav />
                        <div className="profile-container">
                            <div className="profile-heading">
                                <h3>Create Jobs</h3>
                                <h5>&nbsp;Connect, Engage, and Empower: Streamline Job Posting for Maximum Impact</h5>
                            </div>
                            <div className="create-job">
                                <div style={{ backgroundColor: '#ccc' }}>
                    

                                    <main style={{ backgroundColor: '#fff', padding: '6px', paddingLeft: '16px', paddingRight: '16px', paddingTop: '6px', paddingBottom: '6px' }}>
                                        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
                                            <form action="" method="post">
                                               

                                                <div style={{paddingTop: '8px', paddingBottom: '8px', marginBottom: '16px' }}>
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="job-title">Title</label>
                                                        <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="email" id="job-title" name="job-title" placeholder="Frontend Developer" autoFocus />
                                                    </div>

                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="apply-link">Company Name</label>
                                                        <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="email" id="apply-link" name="apply-link" placeholder="Netflix" />
                                                    </div>

                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="apply-link">Batch</label>
                                                        <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="email" id="apply-link" name="apply-link" placeholder="2024" />
                                                    </div>

                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="apply-link">Last Date to Apply</label>
                                                        <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="email" id="apply-link" name="apply-link" placeholder="DD-MM-YYYY" />
                                                    </div>

                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="apply-link">Offer</label>
                                                        <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="email" id="apply-link" name="apply-link" placeholder="20K " />
                                                    </div>
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="apply-link">Skills</label>
                                                        <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="email" id="apply-link" name="apply-link" placeholder="eg. Python" />
                                                    </div>
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="apply-link">Backlogs</label>
                                                        <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="email" id="apply-link" name="apply-link" placeholder="" />
                                                    </div>
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="apply-link">PPO</label>
                                                        <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="email" id="apply-link" name="apply-link" placeholder="" />
                                                    </div>
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="apply-link">Duration</label>
                                                        <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="email" id="apply-link" name="apply-link" placeholder="" />
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                                        <div style={{ width: '30%', marginBottom: '0' }}>
                                                            <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="job-type">Job Type</label>
                                                            <div style={{ position: 'relative' }}>
                                                                <select style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} id="job-type" name="job-type">
                                                                    <option>Full-time</option>
                                                                    <option>Part-time</option>
                                                                    <option>Freelance</option>
                                                                    <option>Contract</option>
                                                                </select>

                                                                <div style={{ pointerEvents: 'none', position: 'absolute', top: '0', right: '0', display: 'flex', alignItems: 'center', padding: '2px', color: '#000' }}>
                                                                    <svg style={{ fill: 'currentColor', height: '16px', width: '16px' }} xmlns="" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style={{ width: '70%' }}>
                                                            <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="location">Location</label>
                                                            <input style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px' }} type="text" id="location" name="location" placeholder="Schwerin" />

                                                            <div style={{ marginBottom: '12px' }}>
                                                                <label style={{ display: 'flex', alignItems: 'center', color: '#666', fontSize: '14px' }} htmlFor="remote">
                                                                    <input style={{ marginRight: '4px' }} type="checkbox" id="remote" name="remote" />
                                                                    Remote
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ display: 'block', marginBottom: '8px', color: '#000', fontSize: '14px' }} htmlFor="description">Description</label>
                                                        <textarea style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '12px', minHeight: '200px' }} id="description" name="description" placeholder="Enter job description"></textarea>
                                                    </div>

                                                    <div>
                                                        <Button style={{ backgroundColor: '#00897B', color: '#fff', padding: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer' }} variant="contained" type="submit">Submit</Button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default CreateJobs;