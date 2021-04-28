import React, { Fragment } from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import CommonButton from '../components/ui/CommonButton';
import { withRouter } from 'react-router-dom';
import Panel from '../components/Panel';

const Landing = (props) => {
    const onHandleReadNow = () => {
        props.history.push('/stories');
    }
    return (
        <Fragment>

            <Hero>
                <div className="landing-hero__container flex-column">
                    <h1>Stay Hungry. Stay Foolish.</h1>
                    <p>Learn from the hottest startups in the world.</p>
                    <div className="landing-hero__button">
                        <CommonButton click={onHandleReadNow} buttonText={'Read Now'} />
                    </div>
                </div>
            </Hero>

            <Banner>
                <div className="landing-banner__container center-items flex-column">
                    <h2>Smart tools for founders.</h2>
                    <p>LearnStart is the simplest way for startup founders to discover inspiring stories from startup founders from all over the world, all in one place.</p>
                </div>
            </Banner>
            <Panel></Panel>
            <Banner>
                <div className="landing-footer__container">
                    <h2>Lets Get Started.</h2>
                    <CommonButton click={onHandleReadNow} buttonText={'Read Now'} />
                </div>
            </Banner>

        </Fragment>
    );
};

export default withRouter(Landing);
