import React from 'react';
import JDCards from './JDCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/ApplicationDashboard.css';

function RecentlyAdded() {
    const jobDescriptions = [
        {
            title: 'Sr. Frontend Engineer',
            company: 'Slack',
            location: 'California',
            date: '2 days ago',
            imageSrc: 'https://cdn.dribbble.com/users/121337/screenshots/5885287/slack.png?compress=1&resize=400x300'
        },
        {
            title: 'Full Stack Developer',
            company: 'Tech Solutions',
            location: 'Boston, MA',
            date: '1 day ago',
            imageSrc: 'https://cdn.dribbble.com/userupload/5931564/file/original-456ee1f112e5bc768f2cd024bb123ef4.jpg?compress=1&resize=752x'
        },
        {
            title: 'Sr. Frontend Engineer',
            company: 'Slack',
            location: 'California',
            date: '2 days ago',
            imageSrc: 'https://cdn.dribbble.com/users/121337/screenshots/5885287/slack.png?compress=1&resize=400x300'
        },
        {
            title: 'Full Stack Developer',
            company: 'Tech Solutions',
            location: 'Boston, MA',
            date: '1 day ago',
            imageSrc: 'https://cdn.dribbble.com/userupload/5931564/file/original-456ee1f112e5bc768f2cd024bb123ef4.jpg?compress=1&resize=752x'
        },
        {
            title: 'Sr. Frontend Engineer',
            company: 'Slack',
            location: 'California',
            date: '2 days ago',
            imageSrc: 'https://cdn.dribbble.com/users/121337/screenshots/5885287/slack.png?compress=1&resize=400x300'
        },
    ];

    return (
        <div className="recently-added">
            <h3> Recently Added Jobs&nbsp;&nbsp;<FontAwesomeIcon className="clock" icon={faClock} /> </h3>
            <hr className='mid-hr'></hr>
            <div className='small-jd-cards'>
                {jobDescriptions.map(job => (
                    <JDCards
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        date={job.date}
                        imageSrc={job.imageSrc}
                    />
                ))}
            </div>
            <div className='view-more'><a href='/'>View More <FontAwesomeIcon icon={faAnglesRight} /></a></div>
        </div>
    );
}

export default RecentlyAdded;