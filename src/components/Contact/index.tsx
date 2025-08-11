import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, message });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="title">
                    <h2>Get In Touch <span>Me</span></h2>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div>
                            <h3>Address _</h3>
                            <p>Rwanda-Kigali-Masaka</p>
                        </div>
                        <div>
                            <h3>Phone _</h3>
                            <p>078846464</p>
                        </div>
                        <div>
                            <h3>E mail _</h3>
                            <p>ntseth@gmail.com</p>
                        </div>
                        <div>
                            <h3>Website _</h3>
                            <p>www.abc.xyz.com</p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <button type="submit">Contact us</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;