import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ image, category, title, description, gradient, link }) => {
    return (
        <div className="project-card">
            <div className="project-image" style={{ background: gradient }}>
                <div className="project-image-overlay"></div>
                {image && <img src={image} alt={title} />}
            </div>

            <div className="project-content">
                <span className="project-category">{category}</span>
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>

            <div className="project-overlay">
                <button className="project-view-btn" onClick={() => window.location.href = link}>View Project</button>
            </div>
        </div>
    )
}

export default ProjectCard