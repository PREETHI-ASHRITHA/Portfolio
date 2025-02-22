import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Home.css';

const Home = () => {
    const handleDownloadCV = () => {
        const cvUrl = 'RESUME80.pdf';
        window.open(cvUrl, '_blank');
    };

    const socialLinks = [
        {
            icon: <FaGithub size={24} />,
            url: "https://github.com/PREETHI-ASHRITHA?tab=overview&from=2023-12-01&to=2023-12-31",
            name: "GitHub"
        },
        {
            icon: <FaLinkedinIn size={24} />,
            url: "https://www.linkedin.com/in/gunnam-preethi-ashritha-b343a3248/",
            name: "LinkedIn"
        },
        {
            icon: <MdEmail size={24} />,
            url: "mailto:preethiashrithagunnam@gmail.com",
            name: "Email"
        }
    ];

    return (
        <section className="home">
            <div className="blob-background">
                <div className="blob"></div>
            </div>

            <div className="home-content">
                <div className="text-content">
                    <h1>Hi, I'm Preethi Ashritha</h1>
                    <h2>Full Stack Developer</h2>
                    <p>Transforming ideas into reality through code.</p>
                </div>

                <div className="image-container">
                    <img 
                        src="Thub.jpg" 
                        alt="Preethi" 
                        className="profile-image"
                    />
                </div>

                <button 
                    className="download-cv"
                    onClick={handleDownloadCV}
                >
                    Download CV
                </button>

                <div className="social-links">
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;









