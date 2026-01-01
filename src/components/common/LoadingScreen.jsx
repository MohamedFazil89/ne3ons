import React, { useEffect, useState } from 'react'
import logo from '../assets/nu3ons_logo.png'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fade out after animation duration
        const timer = setTimeout(() => {
            setIsFading(true);
            // Complete after fade out
            setTimeout(() => {
                onComplete();
            }, 800); // Wait for fade out transition
        }, 2200); // Display duration

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <div className="loading-logo-wrapper">
                    <div className="loading-ring"></div>
                    <img src={logo} alt="nu3ons" className="loading-logo" />
                </div>

                <div className="loading-text-container">
                    <div className="loading-dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <span className="loading-status-text">INITIALIZING...</span>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen
