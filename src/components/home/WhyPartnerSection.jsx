import React from 'react'
import FeatureItem from './FeatureItem'
import { FiZap, FiCpu, FiHeadphones } from 'react-icons/fi'
import './WhyPartnerSection.css'
import team_work from "../assets/teamwork.jpg"

const WhyPartnerSection = () => {
    const features = [
        {
            icon: <FiZap />,
            title: 'Lightning Fast Delivery',
            description: 'We value your time. Our agile development process ensures quick turnarounds without compromising quality.'
        },
        {
            icon: <FiCpu />,
            title: 'Creative Problem Solving',
            description: "We don't just follow instructions; we consult. We find the best technological path for your specific goals."
        },
        {
            icon: <FiHeadphones />,
            title: 'Direct Support',
            description: 'Talk directly to the developers. No middlemen, no confusion. Clear communication is our priority.'
        }
    ]

    return (
        <section className="why-partner-section">
            <div className="container">
                <div className="why-partner-content">
                    {/* Left Content */}
                    <div className="why-partner-left">
                        <span className="section-badge">WHY CHOOSE US</span>
                        <h2 className="section-title">
                            Why partner with <span className="gradient-text">nu3ons</span>?
                        </h2>

                        <div className="features-list">
                            {features.map((feature, index) => (
                                <FeatureItem
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Team Image */}
                    <div className="why-partner-right">
                        <div className="team-image-wrapper">
                            <div className="team-image-background"></div>
                            <div className="team-image-placeholder">
                                <img src={team_work} alt="Team Working" className="team-work-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyPartnerSection