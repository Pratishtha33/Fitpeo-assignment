import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import '../../stylesheets/Education.css';
function EduCard(obj) {
    console.log(obj.obj.grade);
  return (
   <>
        <Card className='educard'>
        <CardContent>
          <Typography variant="h5">{obj.obj.grade}</Typography>
          <div className='card-sub-container'>
                <div className='main-head'>School Name: </div>
                <div className='inside'>{obj.obj.schoolName}</div>
            </div>
            <div className='card-sub-container'>
                <div className='main-head'>Board: </div>
                <div className='inside'>{obj.obj.board}</div>
            </div>
            <div className='card-sub-container'>
                <div className='main-head'>Year of Passing: </div>
                <div className='inside'>{obj.obj.year}</div>
            </div>
            <div className='card-sub-container'>
                <div className='main-head'>Percentage/CGPA: </div>
                <div className='inside'>{obj.obj.percentageCGPA}</div>
            </div>
            <div className='card-sub-container'>
                <div className='main-head'>Grade </div>
                <div className='inside'>A</div>
            </div>
        </CardContent>
      </Card>
   </>
  );
}

export default EduCard;
