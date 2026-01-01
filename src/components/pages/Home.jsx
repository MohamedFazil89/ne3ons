import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import HeroSection from '../home/HeroSection'
import ExpertiseSection from '../home/ExpertiseSection'
import ProjectsSection from '../home/ProjectsSection'
import WhyPartnerSection from '../home/WhyPartnerSection'
import ContactSection from '../home/ContactSection'
import './Home.css'

const Home = ({ startAnimation = true }) => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                // heavy delay to ensure content load or use standard timeout
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);
    return (
        <div className="home-page">
            <Navbar />
            <main>
                <HeroSection startAnimation={startAnimation} />
                <ExpertiseSection />
                <ProjectsSection />
                <WhyPartnerSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}

export default Home