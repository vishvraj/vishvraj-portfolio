// components/ExperienceSection.js
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import INFO from '../../data/user.js';
import './styles/experience.css';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="card-top">
        <img src={experience.img} alt="logo" className="card-image" />
        <div className="card-body">
          <div className="card-role">{experience.role}</div>
          <div className="card-company">{experience.company}</div>
          <div className="card-date">{experience.date}</div>
        </div>
      </div>
      <div className="card-description">
        <span>{experience.desc}</span>
        {experience.skills && (
          <>
            <br />
            <div className="card-skills">
              <b>Skills:</b>
              <div className="skill-items">
                {experience.skills.map((skill, i) => (
                  <div key={i} className="skill">• {skill}</div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {experience.doc && (
        <a href={experience.doc} target="_blank" rel="noreferrer">
          <img src={experience.doc} alt="doc" className="card-doc" />
        </a>
      )}
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = INFO.experiences;

  return (
    <div className="experience-container" id="experience">
      <div className="experience-wrapper">
        <div className="experience-title">Experience</div>
        <div className="experience-desc">
          My work experience as a software engineer and working on different companies and projects.
        </div>
        <div className="timeline-section">
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: '#000000' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
