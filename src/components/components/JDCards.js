import React from 'react';
import '../stylesheets/ApplicationDashboard.css';

function JDCards(props) {
  const { title, company, location, date, imageSrc } = props;

  return (
    <div className='jd-card'>
      <div className='jd-card-lft'>
        <img src={imageSrc} alt={title}></img>
      </div>
      <div className='jd-card-rgt'>
        <div className='jdc-rgt-top' id="job-role">{title}</div>
        <div className='jdc-rgt-btm'>
          <div id='company'>{company}, <span id='location'>{location}</span></div>
          <div id='date'>{date}</div>
        </div>
      </div>
    </div>
  );
}

export default JDCards;
