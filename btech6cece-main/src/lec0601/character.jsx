import React, { useState } from 'react';

const CharacterCounter = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Character Counter</h2>
            <input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={handleChange}
                style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    width: '300px',
                    marginBottom: '10px',
                    display: 'block',
                }}
            />
            <p>Total Characters: {text.length}</p>
        </div>
    );
};

export default CharacterCounter;
