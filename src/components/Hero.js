import React from 'react';

const Hero = props => {
    return (
        <section className="hero-container">
            {props.children}
        </section>
    );
}

export default Hero;
