// components/educationection.js
import React from 'react';
import INFO from '../../data/user.js';
import './styles/Education.css';

const EducationCard = ({ education }) => {
  return (
    <div className="education-card">
      <div className="card-top">
        <img src={education.img} alt="logo" className="card-image" />
        <div className="card-body">
          <div className="card-role">{education.institution}</div>
          <div className="card-company">{education.course}</div>
          <div className="card-date">{education.duration}</div>
        </div>
      </div>
      <div className="card-description">
        <span>{education.desc}</span>
        {education.coursework && (
          <>
            <br />
            <div className="card-skills">
              <b>Course Work :</b>
              <div className="skill-items">
                {education.coursework.map((skill, i) => (
                  <div key={i} className="skill">• {skill}</div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {education.doc && (
        <a href={education.doc} target="_blank" rel="noreferrer">
          <img src={education.doc} alt="doc" className="card-doc" />
        </a>
      )}
    </div>
  );
};

const Educationsection = () => {
  const educationList = INFO.education || [];

  return (
    <div className="education-container" id="education">
      <div className="education-wrapper">
        {educationList.map((education, index) => (
          <div key={education.id || index} className="education-item">
            <EducationCard education={education} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educationsection;


