import React from "react";
import '../stylesheets/Resume.css'
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
class Resume extends React.Component {
    render() {
        return (
            <div className="r">
                <div className="main-section">
                    <div className="left-section">
                        <SideNav />
                    </div>
                    <div className="right-section">
                        <TopNav/>
                        <h1>Resume</h1>
                        <p>To be added soon</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Resume;