import React from 'react';
import './Footer.css';

// Add this to your public/index.html file for social media icons:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <h3>NT Seth</h3>
                    <p>A passionate developer building modern and responsive web applications.</p>
                    <ul className="social-links">
                        <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NT Seth. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;