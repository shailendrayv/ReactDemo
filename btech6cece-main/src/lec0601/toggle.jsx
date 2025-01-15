import React, { useState } from 'react';

const TextVisibilityToggler = () => {
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Text Visibility Toggler</h2>
            <input
                type="text"
                placeholder="Enter some text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    width: '300px',
                    marginBottom: '10px',
                    display: 'block',
                }}
            />
            <button
                onClick={handleToggle}
                style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    cursor: 'pointer',
                }}
            >
                {isVisible ? 'Hide Text' : 'Show Text'}
            </button>
            <div style={{ marginTop: '20px', fontSize: '16px' }}>
                {isVisible && <p>{text}</p>}
            </div>
        </div>
    );
};

export default TextVisibilityToggler;
