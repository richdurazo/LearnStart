import React from 'react';

const Banner = props => {
    return (
        <section className='banner-container'>
            {props.children}
        </section>
    );
}

export default Banner;
