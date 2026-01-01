import React from 'react'
import ServiceCard from './ServiceCard'
import { HiDesktopComputer } from 'react-icons/hi'
import { FiSmartphone, FiZap } from 'react-icons/fi'
import './ExpertiseSection.css'

const ExpertiseSection = () => {
    const services = [
        {
            icon: <HiDesktopComputer />,
            title: 'Website Development',
            description: 'Custom, responsive web solutions from landing pages to complex enterprise portals, with code you can trust.'
        },
        {
            icon: <FiSmartphone />,
            title: 'App Development',
            description: 'Native and cross-platform mobile applications. We build intuitive apps for iOS and Android that users love to engage with.'
        },
        {
            icon: <FiZap />,
            title: 'Re-create & Automation',
            description: 'Modernize legacy systems and automate repetitive tasks. We breathe new life into old systems and streamline your workflows.'
        }
    ]

    return (
        <section className="expertise-section" id="services">
            <div className="container">
                <div className="expertise-header">
                    <span className="section-badge">WHAT WE DO</span>
                    <h2 className="section-title">Expertise Driven by Innovation</h2>
                    <p className="section-description">
                        We don't just write code; we re-create experiences and automate processes to help your business scale effortlessly.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExpertiseSection