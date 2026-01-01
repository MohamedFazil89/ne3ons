import React from 'react'
import './FeatureItem.css'

const FeatureItem = ({ icon, title, description }) => {
    return (
        <div className="feature-item">
            <div className="feature-icon-wrapper">
                <div className="feature-icon">
                    {icon}
                </div>
            </div>

            <div className="feature-content">
                <h4 className="feature-title">{title}</h4>
                <p className="feature-description">{description}</p>
            </div>
        </div>
    )
}

export default FeatureItem