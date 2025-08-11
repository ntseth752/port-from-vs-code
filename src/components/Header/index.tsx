import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const services = [
        { name: 'Web Design', href: '#web-design' },
        { name: 'UI/UX Design', href: '#ui-ux' },
        { name: 'Mobile Development', href: '#mobile' },
        { name: 'Motion Graphics', href: '#motion' }
    ];

    return (
        <header className="header">
            <div className="header-navbar">
                <div className="logo">NT SETH</div>
                <nav className={menuOpen ? 'open' : ''}>
                    <ul>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li className="dropdown">
                            <a href="#services" 
                               onClick={(e) => {
                                   e.preventDefault();
                                   setDropdownOpen(!dropdownOpen);
                               }}
                               className="dropdown-trigger"
                            >
                                Services {dropdownOpen ? '↑' : '↓'}
                            </a>
                            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                                {services.map(service => (
                                    <li key={service.href}>
                                        <a href={service.href} 
                                           onClick={() => {
                                               setDropdownOpen(false);
                                               setMenuOpen(false);
                                           }}
                                        >
                                            {service.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                        <li><a href="#location" onClick={() => setMenuOpen(false)}>Location</a></li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <Link to="/login" className="btn btn-login">Login</Link>
                    <Link to="/signup" className="btn btn-signup">Sign Up</Link>
                </div>
                <button 
                    className={`menu-toggle${menuOpen ? ' open' : ''}`} 
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                        setDropdownOpen(false);
                    }} 
                    aria-label="Toggle menu"
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
            <div className="header-bg">
                <div className="header-content">
                    <div className="header-info">
                        <span className="intro">Hello, I'm <span className="highlight">NTAWUYIRUSHINTEGE Seth</span></span>
                        <h1 className="title">Creative Designer</h1>
                        <p className="desc">Professional Web/Mobile UI/UX Designer & Developer</p>
                        <div className="header-buttons">
                            <a href="#contact" className="btn btn-primary">Hire Me</a>
                            <a href="#projects" className="btn btn-secondary">View Work</a>
                        </div>
                    </div>
                    <div className="header-image-wrapper">
                        <img src="/profile.jpg" alt="Profile" className="header-image" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;