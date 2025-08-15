import React from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <div className="title">
                    <h2>Pricing <span>Plans</span></h2>
                    <p>Choose the plan that fits your needs.</p>
                </div>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h3>Basic</h3>
                        <p className="price">$19<span>/mo</span></p>
                        <ul>
                            <li>1 project</li>
                            <li>Email support</li>
                        </ul>
                        <button>Get Started</button>
                    </div>
                    <div className="pricing-card featured">
                        <h3>Pro</h3>
                        <p className="price">$49<span>/mo</span></p>
                        <ul>
                            <li>5 projects</li>
                            <li>Priority support</li>
                        </ul>
                        <button>Choose Pro</button>
                    </div>
                    <div className="pricing-card">
                        <h3>Enterprise</h3>
                        <p className="price">Custom</p>
                        <ul>
                            <li>Unlimited projects</li>
                            <li>Dedicated support</li>
                        </ul>
                        <button>Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

