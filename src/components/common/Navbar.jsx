import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import Button from './Button'
import './Navbar.css';
import logo from '../assets/nu3ons_logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        <div className="logo-icon"><img src={logo} alt="Logo" className='logo' /></div>
                        <span className="logo-text">nu3ons</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="navbar-menu desktop-menu">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li>
                            <Link
                                to="/"
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('services');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        window.location.href = '/#services';
                                    }
                                    if (closeMenu) closeMenu();
                                }}
                            >
                                Services
                            </Link>
                        </li>
                        <li><Link to="/projects" className="nav-link">Work</Link></li>
                    </ul>

                    {/* CTA Button */}
                    <div className="navbar-cta desktop-cta">
                        <Button variant="primary" size="medium">Contact Us</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="mobile-menu-toggle" onClick={toggleMenu}>
                        <HiMenu size={28} />
                    </button>
                </div>

                {/* Mobile Menu */}
                {/* Mobile Menu Overlay */}
                <div
                    className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
                    onClick={closeMenu}
                />

                {/* Mobile Menu Sidebar */}
                <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
                    <div className="mobile-menu-header">
                        <Link to="/" className="navbar-logo" onClick={closeMenu}>
                            <div className="logo-icon"><img src={logo} alt="Logo" className='logo' /></div>
                            <span className="logo-text">nu3ons</span>
                        </Link>
                        <button className="mobile-menu-close" onClick={closeMenu}>
                            <HiX size={28} />
                        </button>
                    </div>

                    <ul className="mobile-menu-list">
                        <li><Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/#services" className="mobile-nav-link" onClick={closeMenu}>Services</Link></li>
                        <li><Link to="/projects" className="mobile-nav-link" onClick={closeMenu}>Work</Link></li>
                    </ul>
                    <div className="mobile-menu-cta">
                        <Button variant="primary" size="medium" onClick={closeMenu}>Contact Us</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar