import React from 'react';

const StoryCard = props => {
    return (
        <div className="storycard-container">
            <div className="storycard-square">
            </div>
            <div>
                <h3>{props.title}</h3>
                <div className="storycard-header">
                    <div className="storycard-circle"></div>
                    <div>Jon Snow</div>
                </div>
            </div>
        </div>
    );
}

export default StoryCard;
