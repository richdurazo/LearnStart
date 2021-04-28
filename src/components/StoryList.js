import React from 'react';
import StoryCard from './ui/StoryCard';

const StoryList = (props) => {
    return (
        <section className='story-list'>
            <h3>{props.title}</h3>
            <div className='story-list__cards'>
                <StoryCard title={'How I survived death.'} />
                <StoryCard
                    title={
                        'One day I woke up, and I realised that I was dead for a bit.'
                    }
                />
                <StoryCard title={'How I survived death.'} />
            </div>
        </section>
    );
};

export default StoryList;
