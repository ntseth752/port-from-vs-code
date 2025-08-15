import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

const MainContent = () => (
    <>
        <Header />
        <main>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
                {/* Modern project section with anchor links for menu */}
                <div id="web-design" className="service-section">
                    <h2>Web Design</h2>
                    <p>Modern, responsive web design services for businesses and individuals.</p>
                </div>
                <div id="ui-ux" className="service-section">
                    <h2>UI/UX Design</h2>
                    <p>Intuitive and engaging user interface and experience design.</p>
                </div>
                <div id="mobile" className="service-section">
                    <h2>Mobile Development</h2>
                    <p>Cross-platform mobile app development for iOS and Android.</p>
                </div>
                <div id="motion" className="service-section">
                    <h2>Motion Graphics</h2>
                    <p>Animated graphics and video content for digital products.</p>
                </div>
            </section>
            <section id="pricing">
                <Pricing />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </main>
        <div id="location" className="map-section" style={{ margin: '40px 0 0 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="map-title" style={{ fontSize: '2.3rem', fontWeight: 800, color: '#10bfae', marginBottom: '18px', letterSpacing: '0.04em', textShadow: '0 2px 12px #10bfae33' }}>Location</h2>
            <div className="map-embed-wrapper" style={{ width: '90vw', maxWidth: '900px', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(16,191,174,0.18)' }}>
                <iframe
                    title="Google Map Rwanda-Kigali-Masaka"
                    src="https://www.google.com/maps?q=Masaka%2C%20Kigali%2C%20Rwanda&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '16px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        <Footer />
    </>
);

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;