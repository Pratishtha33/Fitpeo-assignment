import React, { useEffect, useState } from "react";
import '../stylesheets/AdminProfile.css'
import AdminSideNav from "../components/AdminSideNav";
import TopNav from "../components/TopNav";
import axios from 'axios';
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";

const AdminProfile = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/profile/1809G`).then((response)=>{
            setData(response.data.Item);
        }).catch((error)=>{
            throw error;
        })
    }, []);
    const [formValues, setFormValues] = useState({});
    
    useEffect(()=>{
        setFormValues({
            emp_no: data.emp_no,
            image: data.image_url,
            name: data.name,
            designation: data.designation,
            email: data.email,
            contact: data.contact_no
        });
    }, [data])
    // render() {
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
                        <h3>Profile</h3>
                        <h5>&nbsp;You can edit and add fields to your profile and make any other necessary changes.</h5>
                    </div>
                    <div className="admin-profile">
                        <div className="admin-profile-top">
                            <img className="admin-image" src={formValues.image}></img>
                        </div>
                        <div className="admin-profile-btm">
                            <div id="admin-data">
                                <div className='card-sub-container'>
                                    <div className='main-head'>Name  </div>
                                    <div className='inside'>{formValues.name}</div>
                                </div>
                                <div className='card-sub-container'>
                                    <div className='main-head'>Designation  </div>
                                    <div className='inside'>{formValues.designation}</div>
                                </div>
                                {/* <div className='card-sub-container'>
                                    <div className='main-head'>Education </div>
                                    <div className='inside'>M.tech in CSE</div>
                                </div> */}
                                <div className='card-sub-container'>
                                    <div className='main-head'>Email</div>
                                    <div className='inside'>{formValues.email}</div>
                                </div>
                                <div className='card-sub-container'>
                                    <div className='main-head'>Contact</div>
                                    <div className='inside'>{formValues.contact}</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div> 
                    </div>
                </div>
            </div>
                
           
        );
    // }
}
export default AdminProfile;