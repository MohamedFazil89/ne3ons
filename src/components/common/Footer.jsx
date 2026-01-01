import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

import logo from '../assets/nu3ons_logo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Logo and Description */}
                    <div className="footer-section">
                        <Link to="/" className="footer-logo">
                            <div className="logo-icon"><img src={logo} alt="Logo" className='logo' /></div>
                            <span className="logo-text">nu3ons</span>
                        </Link>
                        <p className="footer-description">
                            Digital transformation agency helping businesses scale through innovative web solutions.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/work">Work</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/web-development">Web Development</Link></li>
                            <li><Link to="/services/app-development">App Development</Link></li>
                            <li><Link to="/services/automation">Automation</Link></li>
                            <li><Link to="/services/consulting">Consulting</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h4 className="footer-title">Contact</h4>
                        <ul className="footer-contact">
                            <li>
                                <a href="tel:+917356926820">+91 735-6926-820</a>
                            </li>
                            <li>
                                <a href="tel:+918769803978">+91 876-980-3978</a>
                            </li>
                            <li>
                                <a href="mailto:nu3ons@gmail.com">nu3ons@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} nu3ons. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer