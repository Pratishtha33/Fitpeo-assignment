import React from "react";
import "../stylesheets/AdminDashboard.css";
import "../components/SideNav";
import AdminSideNav from "../components/AdminSideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faBriefcase, faClock } from "@fortawesome/free-solid-svg-icons";
import TopNav from "../components/TopNav";
import SingleLineChart from "../components/graphs/LineChart";
import PieChartComponent from "../components/graphs/PieChart";
import PlacementTable from "../components/PlacementTable";


  const lineChartData = [
    { package: '10', students: 8 },
    { package: '6', students: 15 },
    { package: '12', students: 6 },
    { package: '4', students: 10 },
    { package: '15', students: 4 },
    { package: '8', students: 20 },
    { package: '5', students: 12 },
    { package: '9', students: 9 },
    { package: '7', students: 14 },
    { package: '11', students: 7 },
  ];
  const pieChartData = [
    { name: 'Placed', value: 12 },
    { name: 'Seeking Placement', value: 25 },
    { name: 'Not Actively Looking', value: 21 },
  ];
 
  const studentsData = [
    {
      name: 'John Doe',
      rollNumber: '2021001',
      branch: 'CSE',
      company: 'ABC Corp',
      offers: 3,
      status: 'Placed',
      package: '$100,000',
    },
    {
      name: 'Jane Smith',
      rollNumber: '2021002',
      branch: 'MEC',
      company: 'XYZ Inc',
      offers: 2,
      status: 'Placed',
      package: '$90,000',
    },
    {
      name: 'Alice Johnson',
      rollNumber: '2021003',
      branch: 'CHEM',
      company: 'PQR Ltd',
      offers: 1,
      status: 'Placed',
      package: '$80,000',
    },
    {
      name: 'Michael Brown',
      rollNumber: '2021004',
      branch: 'CSE',
      company: 'LMN Corp',
      offers: 4,
      status: 'Placed',
      package: '$110,000',
    },
    {
      name: 'Emily Davis',
      rollNumber: '2021005',
      branch: 'MEC',
      company: 'UVW Inc',
      offers: 2,
      status: 'Seeking Placement',
      package: '$0',
    },
    {
      name: 'David Wilson',
      rollNumber: '2021006',
      branch: 'CHEM',
      company: 'OPQ Ltd',
      offers: 3,
      status: 'Seeking Placement',
      package: '$0',
    },
    {
      name: 'Sophia Taylor',
      rollNumber: '2021007',
      branch: 'CSE',
      company: 'RST Corp',
      offers: 1,
      status: 'Not Looking',
      package: '$0',
    },
    {
      name: 'Daniel Anderson',
      rollNumber: '2021008',
      branch: 'MEC',
      company: 'FGH Inc',
      offers: 2,
      status: 'Seeking Placement',
      package: '$0',
    },
    {
      name: 'Olivia Clark',
      rollNumber: '2021009',
      branch: 'CHEM',
      company: 'IJK Ltd',
      offers: 1,
      status: 'Placed',
      package: '$70,000',
    },
    {
      name: 'James Johnson',
      rollNumber: '2021010',
      branch: 'CSE',
      company: 'LMN Corp',
      offers: 3,
      status: 'Placed',
      package: '$95,000',
    },
    // Add more student objects here...
  ];
  
  
  
class AdminDashboard extends React.Component {
    render() {
        return (
            <div className="admin-dashboard">
              <div className="main-section">
                    <div className="left-section">
                        <AdminSideNav />
                    </div>
                    <div className="right-section">
                        <TopNav/>
                        <div className="dashboard-mc">
                            <div className="metrics">
                                <div className="metrics-heading">
                                    <h3>Dashboard</h3>
                                    <h5>&nbsp;Empowering efficient placement management through comprehensive data insights</h5>
                                </div>
                                <div className="metrics-cards">
                                    <div className="metric-card" id="metric-card-1">
                                        <div className="mc-1" id="applied">
                                            <div className="mc-1-icon">
                                                <FontAwesomeIcon class="fai" icon={faBriefcase} />
                                            </div>
                                            <div className="mc-1-metric">32</div>
                                            <div className="mc-1-name">Jobs Active</div>
                                        </div>
                                        <div className="mc-1" id="in-progress">
                                            <div className="mc-1-icon">
                                                <FontAwesomeIcon class="fai" icon={faClock} />
                                            </div>
                                            <div className="mc-1-metric">12</div>
                                            <div className="mc-1-name">Awaiting Results</div>
                                        </div>
                                    </div>
                                    <div className="metric-card" id="metric-card-2">
                                        <PieChartComponent data={pieChartData}/>
                                    </div>
                                    <div className="metric-card" id="metric-card-3">
                                       <SingleLineChart data={lineChartData}/>
                                    </div>
                                </div>
                            </div>
                            <div className="job-related">
                                <PlacementTable data={studentsData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AdminDashboard;


