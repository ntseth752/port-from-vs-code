import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A modern portfolio website built with React and TypeScript, featuring smooth animations and responsive design.',
        image: '/images/bg.jpg',
        link: '#'
    },
    {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with user authentication, product management, and payment integration.',
        image: '/images/bg.jpg',
        link: '#'
    },
    {
        title: 'Mobile App UI',
        description: 'Clean and intuitive mobile app interface design for a fitness tracking application.',
        image: '/images/bg.jpg',
        link: '#'
    }
];

const Projects: React.FC = () => {
    return (
        <section className="projects-section">
            <div className="container">
                <div className="title">
                    <h2>My <span>Projects</span></h2>
                    <p>Here are some of the projects I've worked on. Feel free to check them out.</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div
                                className="project-media"
                                style={{ backgroundImage: `url(${project.image})` }}
                                role="img"
                                aria-label={project.title}
                            >
                                <div className="project-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;