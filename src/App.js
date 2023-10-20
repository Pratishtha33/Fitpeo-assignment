import React from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import Profile from './components/Routes/Profile';
import Resume from './components/Routes/Resume';
import SideNav from './components/components/SideNav';
import ApplicationDashboard from './components/Routes/ApplicationDashboard';
import AvailableJobs from './components/Routes/AvailableJobs';
import PlacementPolicy from './components/Routes/PlacementPolicy';
import Slogin from './components/Routes/Slogin';
import About from './components/components/Student-Profile/About';
import Award from './components/components/Student-Profile/Award';
import Education from './components/components/Student-Profile/Education';
import Experience from './components/components/Student-Profile/Experience';
import Project from './components/components/Student-Profile/Project';
import JobDetails from "./components/Routes/JobDetails";

//Admin 
import AdminDashboard from './components/Routes/AdminDashboard';
import AdminProfile from './components/Routes/AdminProfile';
import CreateJobs from './components/Routes/CreateJobs';
import EditPolicy from './components/Routes/EditPolicy';

// import Student from './components/Routes/Student';
import Sregister from './components/Routes/Sregister';
import Tlogin from './components/Routes/Tlogin';


function App() {
  return (
    <>
    <Router>
      {/* <SideNav /> */}
    <Routes>
                <Route exact path='*' element={<Navigate to='/' />}></Route>
                 <Route exact path='/' element={<ApplicationDashboard/>}></Route>
                 <Route exact path='/student/login' element={<Slogin/>}></Route>
                 <Route exact path='/admin/login' element={<Tlogin/>}></Route>
                 <Route exact path='/student/register' element={<Sregister/>}></Route>
                 <Route exact path='/jobs' element={<AvailableJobs/>}>
                      {/* <Route exact path='id' element={<About/>}></Route> */}
                 </Route>
                 <Route exact path='/admin' element={<AdminDashboard/>}></Route>
                 <Route exact path='/admin-profile' element={<AdminProfile/>}></Route>
                 <Route exact path='/edit-policy' element={<EditPolicy/>}></Route>
                 <Route exact path='/create-jobs' element={<CreateJobs/>}></Route>

                 <Route exact path='/job-details' element={<JobDetails />}></Route>
                 <Route exact path='/resume' element={< Resume />}></Route>
                 <Route exact path='/policy' element={<PlacementPolicy/>}></Route>
                 <Route exact path='/profile' element={< Profile />}>
                      <Route exact path='' element={<About/>}></Route>
                      <Route exact path='projects' element={<Project/>}></Route>
                      <Route exact path='education' element={< Education />}></Route>
                      <Route exact path='experiences' element={<Experience/>}></Route>
                      <Route exact path='awards' element={< Award />}></Route>
                 </Route>
                
    </Routes>
    </Router>
    </>
  );
}

export default App;
