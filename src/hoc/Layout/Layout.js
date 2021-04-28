import React, { Fragment } from 'react';
import NavBar from '../../components/NavBar';
import SlideDrawer from '../../components/ui/SlideDrawer';
import Close from '../../components/ui/Close';
import { withRouter } from 'react-router-dom';

const Layout = props => {
    const [openSlide, setOpenSlide] = React.useState(false);

    const handleSignup = () => {
        setOpenSlide(!openSlide)
    }
    const handleClose = () => {
        setOpenSlide(false)
    }
    const onHandleHome = () => {
        props.history.push('/')
    }
    return (
        <Fragment>
            <NavBar onHome={onHandleHome} onSignUp={handleSignup} />
                {props.children}
            <SlideDrawer open={openSlide}>
                <Close handleClose={handleClose}/>
            </SlideDrawer>
        </Fragment>
    );
}

export default withRouter(Layout);
