import React, { useState } from 'react';
import '../../stylesheets/About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faPlus, faPenToSquare, faAngleDown, faAngleUp, faDeleteLeft, faTrashCan
} from "@fortawesome/free-solid-svg-icons";

function About() {
 // const { title, company, location, date, imageSrc } = props;
  const [editMode, setEditMode] = useState(false);
  const headline = "Junior Year student pursuing B.tech in Computer Science & Engineering.";
  const about = "I'm Krati Jain, a web development enthusiast and student at JUET. Creating user-friendly web experiences is my passion. I stay updated with the latest trends and seek opportunities to enhance my skills. Collaborating on innovative projects fuels my drive. As a web developer, I aim to make a positive impact in the ever-evolving world of technology."
  const handleEditClick = () => {
    setEditMode((prevState) => !prevState);
  };


  return (
    <>
      <section className='about-sec'>
        <div className='about-sec-lft'>
          <div className='asl-top'>
            <img src="https://images.unsplash.com/photo-1517842536804-bf6629e2c291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
          </div>
      
          <div className='asl-about'>
            <h5>Headline</h5>
            
            {editMode ? (
              <textarea type="text" className='inside-headline' defaultValue= {headline}/>
            ) : (
              <p>{headline}</p>
            )}
          </div>
          <div className='asl-about'>
            <h5>About</h5>
            {editMode ? (
              <textarea type="text" className='inside-headline' id = "about-txt" defaultValue= {about}/>
            ) : (
              <p>{about}</p>
            )}
          </div>
        </div>
        <div className='about-sec-rgt'>
          {editMode ? (
            <div className='edit-item' onClick={handleEditClick}>Save</div>
          ) : (
            <div className='edit-item' onClick={handleEditClick}>
              Edit <FontAwesomeIcon icon={faPenToSquare} />
            </div>
          )}
          <div className='card-sub-container'>
            <div className='main-head'>Name  </div>
            <div className='inside'>Krati Jain</div>
          </div>
          {/* <div className='card-sub-container'>
                <div className='main-head'>Last Name  </div>
                <div className='inside'>Jain</div>
          </div> */}
          <div className='card-sub-container'>
            <div className='main-head'>Date of Birth  </div>
            <div className='inside'>22-05-2002</div>
          </div>
          <div className='card-sub-container'>
            <div className='main-head'>Father's Name  </div>
            <div className='inside'>Mr. Ratnesh Kumar Jain</div>
          </div>
          <div className='card-sub-container'>
            <div className='main-head'>Mother's Name  </div>
            <div className='inside'>Mrs. Alka Jain</div>
          </div>
          <div className='card-sub-container'>
            <div className='main-head'>Address  </div>
            {editMode ? (
              <input type="text" className='inside' id="inside-val" defaultValue="242/3 Yahiya Ganj" />
            ) : (
              <div className='inside'>242/3 Yahiya Ganj</div>
            )}
          </div>
          <div className='card-sub-container'>
            <div className='main-head'>City  </div>
            {editMode ? (
              <input type="text" className='inside' id="inside-val" defaultValue="Lucknow" />
            ) : (
              <div className='inside'>Lucknow</div>
            )}
          </div>
          <div className='card-sub-container'>
            <div className='main-head'>State  </div>
            {editMode ? (
              <input type="text" className='inside' id="inside-val" defaultValue="Uttar Pradesh" />
            ) : (
              <div className='inside'>Uttar Pradesh</div>
            )}
          </div>
          {/* <div className='card-sub-container'>
            <div className='main-head'>Pincode : </div>
            {editMode ? (
              <input type="text" className='inside' id="inside-val" defaultValue="226004" />
            ) : (
              <div className='inside'>226004</div>
            )}
          </div> */}

        </div>
      </section>
    </>
  );
}

export default About;
