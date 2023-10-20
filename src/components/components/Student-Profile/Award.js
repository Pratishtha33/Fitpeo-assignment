import React from 'react';
import '../../stylesheets/Award.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faPlus, faPenToSquare, faAngleDown, faAngleUp, faDeleteLeft, faTrashCan
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function Award(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [expanded, setExpanded] = useState({});
  const [showIcons, setShowIcons] = useState(false);
  const [addPublication, setAddPublication] = useState(false);

  const handleSubmit = (event) => {
    setAddPublication(!addPublication);
    event.preventDefault();
    const PublicationsData = {
      title: title,
      date: date,
      platform: platform,
      link: link,
      description: description
    };
    console.log(PublicationsData); // replace with code to save data to a database or use the data as needed
  };
  const toggleExpansion = (index) => {
    setExpanded({
      ...expanded,
      [index]: !expanded[index]
    });
  };

  const handleUpdateClick = () => {
    setShowIcons(!showIcons);
  };
  const handleEditClick = () => {
    console.log("Edit Function Called");
  }
  const handleDeleteClick = () => {
    console.log("Delete Function Called");
  }
  const handleAddClick = () => {
    setAddPublication(!addPublication);
    console.log(addPublication);
  }
  const publications = [
    {
      title: "Introduction to Game Development and Production LifeCycle",
      date: "12 Jan, 2022",
      platform: "Medium",
      link: "https://medium.com/intro-to-gamedev-and-production-lifecycle",
      description: "A detailed description of the major technologies being used in the modern world for development of Video Games and their components."
    },
    {
      title: "Advanced React and Redux Techniques",
      date: "30 May, 2022",
      platform: "LinkedIn Learning",
      link: "https://www.linkedin.com/learning/advanced-react-and-redux-techniques",
      description: "This course covers advanced techniques for building scalable and maintainable applications with React and Redux."
    },
    {
      title: "Introduction to Machine Learning with Python",
      date: "17 Sep, 2022",
      platform: "Udemy",
      link: "https://www.udemy.com/introduction-to-machine-learning-with-python",
      description: "A beginner's guide to machine learning with Python. This course covers the basics of machine learning and how to implement it using popular libraries such as scikit-learn."
    }
  ];

  const PublicationCard = ({ title, date, platform, link, description, index }) => {
    return (
      <div id={`publications-card-${index}`} className='publications-card'>
        <div id="test">
          <h3>{title}</h3>
          <h5>
            <FontAwesomeIcon
              icon={expanded[index] ? faAngleUp : faAngleDown}
              className="arrow-icon"
              onClick={() => toggleExpansion(index)}
            /> &nbsp;
            {showIcons && (
              <>
                <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditClick} /> &nbsp;
                <FontAwesomeIcon icon={faTrashCan} onClick={handleDeleteClick} />
              </>
            )}
          </h5>
        </div>
        <h5>{platform} ({date})</h5>
        {expanded[index] && (
          <div id="show-items" style={{ display: 'flex', flexDirection: 'column' }}>
            <a href={link} target="_blank" rel="noreferrer">
              <button>Show Publication <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
            </a>
            <p>{description}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="awards">
      <div id="publications" className='awards-sub-sec'>
        <div id="publications-lft" className='awards-ssl section-lft'><h3>Publications</h3></div>
        <div id="publications-rgt" className='awards-ssr'>
          {!addPublication ? (
            <div>
              {publications.map((publication, index) => (
                <PublicationCard
                  title={publication.title}
                  date={publication.date}
                  platform={publication.platform}
                  link={publication.link}
                  description={publication.description}
                  index={index}
                  key={publication.title}
                />
              ))}
            </div>
          ) : (
            <div id="publications-form">
              <form onSubmit={handleSubmit}>
                <div>
                <label>
                  <p>Publication Title :</p>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                  <p>Date </p>
                  <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                  <p>Platform/Conference </p>
                  <input type="text" value={platform} onChange={(e) => setPlatform(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                  <p>Link </p>
                  <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
                </label>
                </div>
                <div className='text-area'>
                <label>
                  <p>Description </p>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                </div>
              </form>
            </div>
          )}
          <div className='update-del-section'>
            <div className='crud-buttons'>
              {!addPublication ?(
                <div id="btn-rgt">
                <button id="create" onClick={handleAddClick}>Add Publication</button>
                <button id="update" onClick={handleUpdateClick}>Update</button>
              </div>
              ): (
               <></>
              )}
              
              <div id="btn-lft">
                <button id="save" onClick={handleSubmit}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="honors" className='awards-sub-sec'>
        <div id="honors-lft" className='awards-ssl'></div>
        <div id="honors-rgt" className='awards-ssr'></div>
      </div>
      <div id="certifications" className='awards-sub-sec'>
        <div id="certifications-lft" className='awards-ssl'></div>
        <div id="certifications-rgt" className='awards-ssr'></div>
      </div>
      <div id="patents" className='awards-sub-sec'>
        <div id="patents-lft" className='awards-ssl'></div>
        <div id="patents-rgt" className='awards-ssr'></div>
      </div> */}
    </section>
  );
}

export default Award;
