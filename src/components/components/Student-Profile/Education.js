import React, { useState } from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import '../../stylesheets/Education.css';
import EduCard from './EduCard';

function Education() {
  const class10th = {
    grade: 'Class 10th',
    schoolName: 'ABC Public School',
    board: 'State Board of Education',
    year: 2022,
    percentageCGPA: 9.2,
  };
  const class12th = {
    grade: 'Class 12th',
    schoolName: 'XYZ Senior Secondary School',
    board: 'Central Board of Secondary Education (CBSE)',
    year: 2024,
    percentageCGPA: 92, // Updated to a number
  };
  const college = {
    collegeName: 'ABC College',
    degree: 'Bachelor of Technology',
    branch: 'Computer Science',
    currentSemester: 7,
    cgpa: {
      1: 8.5,
      2: 8.8,
      3: 8.7,
      4: 8.9,
      5: 9.2,
      6: 9.1,
      7: 9.3,
      8: 0,
    },
  };

  const [selectedOption, setSelectedOption] = useState('10');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="education-container">
        <div className="sub-nav-bar">
          <ul>
            <li onClick={() => handleOptionClick('10')}>Class 10th</li>
            <li onClick={() => handleOptionClick('12')}>Class 12th</li>
            <li onClick={() => handleOptionClick('Clg')}>Undergraduation</li>
          </ul>
        </div>
        {selectedOption === '10' && <EduCard obj={class10th}></EduCard>}
        {selectedOption === '12' && <EduCard obj={class12th}></EduCard>}
        {selectedOption === 'Clg' && (
          <Card className="educard">
            <CardContent>
              <Typography variant="h5">Undergraduation</Typography>
              <div className="card-sub-container">
                <div className="main-head">Degree: </div>
                <div className="inside">{college.degree}</div>
              </div>
              <div className="card-sub-container">
                <div className="main-head">Branch: </div>
                <div className="inside">{college.branch}</div>
              </div>
              <div className="card-sub-container">
                <div className="main-head">Enrollment Number: </div>
                <div className="inside">201B137</div>
              </div>
              <div className="card-sub-container">
                <div className="main-head">Current Semester: </div>
                <div className="inside">{college.currentSemester}</div>
              </div>
              <div className="card-sub-container">
                <div className="main-head">CGPA: </div>
                <div className="inside">8.5</div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}

export default Education;
