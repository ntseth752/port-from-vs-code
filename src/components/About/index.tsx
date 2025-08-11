import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-info">
                    <span className="about-greeting">Hello, Welcome</span>
                    <h1 className="about-title">Hello I am NT Seth</h1>
                    <p className="about-desc">
                        If you need more information about us contact us to get more understanding
                    </p>
                    <a href="#contact" className="about-btn">Contact us</a>
                </div>
                <div className="about-image-wrapper">
                    <img src="/profile.jpg" alt="Anderson Coper" className="about-image" />
                </div>
            </div>
        </section>
    );
};

export default About;