import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import StoryList from '../components/StoryList';

const Stories = () => {
    return (
        <Fragment>
            <Hero>
                <h1
                    style={{
                        color: '#F4F4F4',
                        textAlign: 'center',
                        fontSize: '50px',
                        letterSpacing: '.2rem',
                    }}>
                    Stories
                </h1>
            </Hero>
            <div className='storylist-container'>
                <StoryList title={'Latest'} />
                <StoryList title={"Editor's Picks"} />
            </div>
        </Fragment>
    );
};

export default Stories;
