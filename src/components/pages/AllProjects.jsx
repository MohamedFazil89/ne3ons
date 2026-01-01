import React, { useEffect } from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import ProjectCard from '../home/ProjectCard'
import { projects } from '../../data/projects'
import './AllProjects.css'

const AllProjects = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="all-projects-page">
            <Navbar />
            <main className="all-projects-main">
                <div className="container">
                    <div className="all-projects-header">
                        <span className="section-badge">PORTFOLIO</span>
                        <h1 className="page-title">All Projects</h1>
                        <p className="page-description">
                            Explore our complete portfolio of digital solutions, web platforms, and creative designs.
                        </p>
                    </div>

                    <div className="all-projects-grid">
                        {projects.map((project, index) => (
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
            </main>
            <Footer />
        </div>
    )
}

export default AllProjects
