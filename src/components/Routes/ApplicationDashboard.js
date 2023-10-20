import React from "react";
import "../stylesheets/ApplicationDashboard.css";
import "../components/SideNav";
import SideNav from "../components/SideNav";
import RecentlyAdded from "../components/RecentlyAdded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckSquare,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { PieChart, Pie, Cell, Legend, Label } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import JobHistory from "../components/JobHistory";
import TopNav from "../components/TopNav";
const data = [
    { name: "Applied", value: 12 },
    { name: "In-Progress", value: 10 },
    { name: "Rejected", value: 17 },
];

const data2 = [
    { name: "TCS", studentsPlaced: 25 },
    { name: "Google", studentsPlaced: 12 },
    { name: "Infosys", studentsPlaced: 15 },
    { name: "Amazon", studentsPlaced: 9 },
    { name: "Testbook", studentsPlaced: 15 },
];

const colors = ["#1d3557", "#274c87", "#2a9df4"];
class ApplicationDashboard extends React.Component {
    render() {
        return (
            <div className="ad">
                <div className="main-section">
                    <div className="left-section">
                        <SideNav />
                    </div>
                    <div className="right-section">
                        <TopNav/>
                        <div className="dashboard-mc">
                            <div className="metrics">
                                <div className="metrics-heading">
                                    <h3>Dashboard</h3>
                                    <h5>&nbsp;Take's a look at your montly job search application.</h5>
                                </div>
                                <div className="metrics-cards">
                                    <div className="metric-card" id="metric-card-1">
                                        <div className="mc-1" id="applied">
                                            <div className="mc-1-icon">
                                                <FontAwesomeIcon class="fai" icon={faCheckSquare} />
                                            </div>
                                            <div className="mc-1-metric">32</div>
                                            <div className="mc-1-name">Jobs Applied</div>
                                        </div>
                                        <div className="mc-1" id="in-progress">
                                            <div className="mc-1-icon">
                                                <FontAwesomeIcon class="fai" icon={faVideo} />
                                            </div>
                                            <div className="mc-1-metric">12</div>
                                            <div className="mc-1-name">Interviewed</div>
                                        </div>
                                    </div>
                                    <div className="metric-card" id="metric-card-2">
                                        <PieChart width={350} height={250}>
                                            <Pie
                                                data={data}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={80}
                                                label
                                            >
                                                {data.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                                ))}
                                            </Pie>
                                            <Legend />
                                        </PieChart>
                                    </div>
                                    <div className="metric-card" id="metric-card-3">
                                        <BarChart
                                            className="barchart"
                                            width={450}
                                            height={250}
                                            data={data2}
                                        >
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip />
                                            <Bar
                                                dataKey="studentsPlaced"
                                                fillOpacity={0.9}
                                                fill="#1d3557"
                                                barSize={30}
                                            />
                                        </BarChart>
                                    </div>
                                </div>
                            </div>
                            <div className="job-related">
                                <JobHistory />
                                <RecentlyAdded />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ApplicationDashboard;
