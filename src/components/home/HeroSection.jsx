import React, { useState, useEffect } from 'react'
import Button from '../common/Button'
import { FiCheck } from 'react-icons/fi'
import './HeroSection.css'

const HeroSection = ({ startAnimation = true }) => {
    const [typedCode, setTypedCode] = useState('')
    const codeSnippet = `const service = {
  name: 'nu3ons',
  status: 'ready',
  speed: '100% Optimized'
};`

    useEffect(() => {
        if (!startAnimation) return;

        let index = 0
        const interval = setInterval(() => {
            if (index < codeSnippet.length) {
                setTypedCode(codeSnippet.substring(0, index + 1))
                index++
            } else {
                clearInterval(interval)
            }
        }, 50)

        return () => clearInterval(interval)
    }, [startAnimation])

    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    {/* Left Content */}
                    <div className="hero-left">
                        <div className="hero-badge">
                            DIGITAL TRANSFORMATION AGENCY
                        </div>

                        <h1 className="hero-title">
                            We Build The <br />
                            <span className="gradient-text">Future of Web</span>
                        </h1>

                        <p className="hero-description">
                            Innovative website and application development tailored to elevate your business. We turn complex problems into elegant digital solutions.
                        </p>

                        <div className="hero-cta">
                            <Button variant="primary" size="large">
                                Call Us Now
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Code Editor */}
                    <div className="hero-right">
                        <div className="code-editor">
                            <div className="code-editor-header">
                                <div className="code-dots">
                                    <span className="dot dot-red"></span>
                                    <span className="dot dot-yellow"></span>
                                    <span className="dot dot-green"></span>
                                </div>
                                <span className="code-title">index.js</span>
                            </div>

                            <div className="code-editor-body">
                                <pre className="code-content">
                                    <code>{typedCode}</code>
                                </pre>
                            </div>

                            <div className="code-status">
                                <div className="status-indicator">
                                    <FiCheck className="status-icon" />
                                    <span>100% Optimized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection