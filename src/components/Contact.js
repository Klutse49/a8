import React, { useState } from 'react';
import styles from '../styles/Contact.module.css'; 

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState([]);
    const [formSuccess, setFormSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = [];

        if (!name.trim()) errors.push('Name is required.');
        else if (/\d/.test(name)) errors.push('Name cannot contain numbers.');
        if (!validateEmail(email)) errors.push('Invalid email format.');
        if (!message.trim()) errors.push('Message is required.');

        if (errors.length > 0) {
            setFormErrors(errors);
            setFormSuccess('');
        } else {
            setFormSuccess(`Thank you, ${name}, for your message.`);
            setName('');
            setEmail('');
            setMessage('');
            setFormErrors([]);
        }
    };

    return (
        <section className={styles.contact}>
            <h2>Contact Me</h2>
            {formErrors.length > 0 && (
                <div className={styles.errorMessage}>
                    {formErrors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}
            {formSuccess && <div className={styles.successMessage}>{formSuccess}</div>}
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message:</label>
                    <textarea id="message" name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </section>
    );
};

export default Contact;
