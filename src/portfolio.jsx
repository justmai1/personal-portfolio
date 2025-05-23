import projects from '../projects.json';
import React, { useState } from 'react';

export const Navbar = () => {
    return (
      <nav>
        <div className="nav-header">
          <h1>Justin Mai</h1>
          <p>Data Analyst. Statistician. Student.</p>
        </div>
        <div className="navbar">
          <div className="left-nav">
            <a href="#show"><p>show</p></a>
            <a href="#me"><p>me</p></a>
            <a href="#experience"><p>experience</p></a>
            <a href="#projects"><p>projects</p></a>
          </div>
          <div className="right-nav">
            <a href="https://www.linkedin.com/in/justinmai1/" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/justmai1/personal-portfolio/blob/main/img/linkedin.png?raw=true" alt="Linkedin icon" />
            </a>
            <a href="https://github.com/justmai1" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/justmai1/personal-portfolio/blob/main/img/github.png?raw=true" alt="Github icon" />
            </a>
          </div>
        </div>
      </nav>
    )
  }

  export const Showcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };
  
    const { name, image, alt, link, description, authors } = projects[currentIndex];
  
    return (
      <section id="show">
        <div className="showcase-container">
          <button className="arrow left" onClick={handlePrev}>&lt;</button>
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
          <img src={image} alt={alt} className="project-image" />
            <div className="content">
              <h1>{name}</h1>
              <div className="project-info">
                <p>{description}</p>
                <p><strong>Authors:</strong> {authors}</p>
              </div>
            </div>
          </a>
          <button className="arrow right" onClick={handleNext}>&gt;</button>
        </div>
      </section>
    );
  };
  
  
  
export const Me = () => {
    return(
        <section className="me" id="me">
            <div>
                <h1>Hello 👋, I'm <b>Justin</b>!</h1>
                <p><b>Data Analyst. UW Statistics + Informatics Student. </b> 
                    Passionate about commincating stories and solutions through data, 
                    leaving a positive impact on my community.</p>
                <a href="https://drive.google.com/file/d/1gJYDcYEq3DG2iF7TtUYhzdjPHuJmS37c/view?usp=sharing" target='_blank'><button>Resume</button></a>
            </div>
            <img src="https://github.com/justmai1/personal-portfolio/blob/main/img/me_enhanced.jpg.png?raw=true" alt="Justin Mai"/>
        </section>
    )
}

export const Experience = () => {
    return(
    <div className="experience" id="experience">
        <div className="job-experiences">
            <h1>Experience</h1>
            <div className="scroll">

                <div className="experience-item">
                    <h2>Incoming Data Modeling Engineer @ <b>King County</b></h2>
                    <h2><i>Jun 2025 - Sept 2025</i></h2>
                    <p className="keywords">| BI | Data | Predictive Modeling | Wastewater Treatment |</p>
                    <p className="description">
                        Working with the Modeling Group for the Wastewater Treatment Division to inform decisions
                        concerning water quality, public health, and environmental impacts. Developing summary statistics
                        and dashboards.
                    </p>
                </div>

                <div className="experience-item">
                    <h2>Teaching Assistant @ <b>UW: iSchool</b></h2>
                    <h2><i>Mar 2025 - Present</i></h2>
                    <p className="keywords">| Higher-Level Education | Database Design | SQL | Azure |</p>
                    <p className="description">
                        Teach 70+ students and lead lab sections of 35+ students. 
                        Support students in learning SQL, ad-hoc analysis, and database design.
                        Opportunity to present course materials and support students along their academic journies.
                    </p>
                </div>

                <div className="experience-item">
                    <h2>Student @ <b>UW: iSchool + Statistics</b></h2>
                    <h2><i>Sept 2022 - Present</i></h2>
                    <p className="keywords">| Interdisciplinary | Data Science | Statistical Analysis |</p>
                    <p className="description">
                        Pursuing a double major in Informatics and Statistics has been a transformative experience, 
                        providing me with a strong foundation for a career in data analysis. 
                        My Statistics coursework equips me with the theoretical knowledge to deeply analyze complex data problems
                        by applying regression modeling, hypothesis testing, probability theory, etc., 
                        while my Informatics studies enhance my technical proficiency in tools like Python and SQL.
                    </p>
                </div>

                <div className="experience-item">
                    <h2>Data Analyst & Research Assistant @ <b>UW: Anti-Eviction Lab</b></h2>
                    <h2><i>Mar 2024 - Sept 2024</i></h2>
                    <p className="keywords">| Gentrification | GIS Mapping | Data Analysis |</p>
                    <p className="description">
                        The Anti-Eviction Lab at UW is partnered with the Anti-Eviction Mapping Project which is focused on storytelling 
                        through mediums such as data visualizations, GIS maps, and oral histories that communicates acts of displacement 
                        and resistance against gentrification. I was set to look deeper into neighborhoods in Seattle potentially facing 
                        gentrification and displacement as locations to conduct oral histories at.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export const Footer = () => {
    return(
    <footer>
        <div className="email">
            <span className="material-icons" aria-label="Email">email</span>
            <a href="mailto:maijustin7@gmail.com">maijustin7@gmail.com</a>
        </div>
        <div className="copyright">
            <span className="material-icons" aria-label="copyright">copyright</span>
            <p>Justin Mai 2025</p>
        </div>
    </footer>
    )
}

  