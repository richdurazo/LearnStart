import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Backdrop from './Backdrop';

const SlideDrawer = (props) => {
    const [attachedClasses, setAttachedClasses] = useState([
        'slide-drawer',
        'container-drawer',
        'slide-drawer-close',
    ]);

    useEffect(() => {
        props.open ? setAttachedClasses([
            'slide-drawer',
            'container-drawer',
            'slide-drawer-open',
        ]) : setAttachedClasses([
            'slide-drawer',
            'container-drawer',
            'slide-drawer-close',
        ]);

    }, [props, setAttachedClasses]);

    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div
                style={{ height: '100%' }}
                className={attachedClasses.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    );
};

export default SlideDrawer;
