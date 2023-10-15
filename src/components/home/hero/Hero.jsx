import React from 'react';
import './hero.css';

const Hero = () => {
    const line1 = "REINVENT WHAT YOUR";
    const line2 = "BUSSINESS COULD BE";
    
    const createSpans = (line) => {
        return [...line].map((char, index) => {
            return char === ' ' ? char : <span key={index}>{char}</span>;
        });
    };

    return (
        <div className="hero">
            <h1>{createSpans(line1)}<br />{createSpans(line2)}</h1>
        </div>
    );
}

export default Hero;
