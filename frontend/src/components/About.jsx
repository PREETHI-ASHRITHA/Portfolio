import React from 'react';
import './About.css';
import { FaCode, FaServer, FaMobile } from 'react-icons/fa';

const About = () => {
    const skills = [
        {
            icon: <FaCode />,
            title: "Frontend Development",
            description: "Experienced in building responsive and interactive user interfaces using React.js, HTML5, CSS3, and JavaScript."
        },
        {
            icon: <FaServer />,
            title: "Backend Development",
            description: "Proficient in server-side programming with Node.js, Express.js, and database management using MongoDB and SQL."
        },
        {
            icon: <FaMobile />,
            title: "Full Stack Development",
            description: "Skilled in full stack development with React Native expertise, building complete cross-platform mobile solutions from responsive UIs to robust backend services."
        }
    ];

    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2 className="section-title">About Me</h2>
                
                <div className="about-text">
                    <p className="bio">
                        I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                        My journey in web development started with curiosity and has evolved into a professional pursuit of creating 
                        seamless, user-centric applications.
                    </p>
                    <p className="mission">
                        My mission is to create innovative digital solutions that not only meet technical requirements 
                        but also provide exceptional user experiences. I believe in continuous learning and staying 
                        updated with the latest technologies and best practices in software development.
                    </p>
                </div>

                <div className="skills-container">
                    <h3>Experience</h3>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">
                                    {skill.icon}
                                </div>
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;