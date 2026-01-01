import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { FiArrowRight } from 'react-icons/fi'
import { projects } from '../../data/projects'
import './ProjectsSection.css'

const ProjectsSection = () => {
    const navigate = useNavigate();

    // Show only first 3 projects on home page
    const displayedProjects = projects.slice(0, 3);

    return (
        <section className="projects-section">
            <div className="container">
                <div className="projects-header">
                    <div className="projects-header-left">
                        <span className="section-badge">OUR PORTFOLIO</span>
                        <h2 className="section-title">Our Projects</h2>
                        <p className="section-description">
                            Discover how we help brands grow through digital transformation. Here are a few of our latest success stories.
                        </p>
                    </div>

                    <div className="projects-header-right">
                        <button onClick={() => navigate('/projects')} className="view-all-link">
                            View All Projects
                            <FiArrowRight className="arrow-icon" />
                        </button>
                    </div>
                </div>

                <div className="projects-grid">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            category={project.category}
                            title={project.title}
                            description={project.description}
                            gradient={project.gradient}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection