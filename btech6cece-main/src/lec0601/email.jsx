import React, { useState } from 'react';

const Email = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(null);

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Validate email
        if (emailRegex.test(value)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Email Validator</h2>
            <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    width: '300px',
                    marginBottom: '10px',
                }}
            />
            <div>
                {isValid === null ? (
                    <p>Enter an email address to validate.</p>
                ) : isValid ? (
                    <p style={{ color: 'green' }}>Valid email address!</p>
                ) : (
                    <p style={{ color: 'red' }}>Invalid email address.</p>
                )}
            </div>
        </div>
    );
};

export default Email;
