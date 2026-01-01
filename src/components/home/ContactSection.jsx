import React from 'react'
import { FiPhone, FiMail } from 'react-icons/fi'
import './ContactSection.css'

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-background">
                <div className="contact-orb orb-1"></div>
                <div className="contact-orb orb-2"></div>
            </div>

            <div className="container">
                <div className="contact-content">
                    <h2 className="contact-title">
                        Let's Build Something <br />
                        <span className="gradient-text">Amazing Together</span>
                    </h2>

                    <p className="contact-description">
                        Ready to transform your ideas into reality? We are just a call away. Reach out to us directly for immediate assistance.
                    </p>

                    <div className="contact-methods">
                        <div className="contact-method">
                            <div className="contact-method-icon">
                                <FiPhone />
                            </div>
                            <div className="contact-method-info">
                                <span className="contact-method-label">CONTACT NUMBERS</span>
                                <a href="tel:+917356926820" className="contact-method-value">
                                    +91 735-6926-820
                                </a>
                                <a href="tel:+918769803978" className="contact-method-value">
                                    +91 876-980-3978
                                </a>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="contact-method-icon">
                                <FiMail />
                            </div>
                            <div className="contact-method-info">
                                <span className="contact-method-label">EMAIL ADDRESS</span>
                                <a href="mailto:nu3ons@gmail.com" className="contact-method-value">
                                    nu3ons@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection