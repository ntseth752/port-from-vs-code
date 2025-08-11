import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Project One',
        description: 'Description of project one.',
        image: 'https://via.placeholder.com/350x250',
        link: 'https://link-to-project-one.com'
    },
    {
        title: 'Project Two',
        description: 'Description of project two.',
        image: 'https://via.placeholder.com/350x250',
        link: 'https://link-to-project-two.com'
    },
    {
        title: 'Project Three',
        description: 'Description of project three.',
        image: 'https://via.placeholder.com/350x250',
        link: 'https://link-to-project-three.com'
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
                            <img src={project.image} alt={project.title} />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;