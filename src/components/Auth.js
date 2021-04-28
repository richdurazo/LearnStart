import React from 'react';
import CommonButton from './ui/CommonButton';

const Auth = () => {
    return (
        <section className='auth flex-column'>
            <h3>Sign Up</h3>
            <input type='email' />
            <input type='password' />
            <CommonButton buttonText={'Sign Up'} />
        </section>
    );
};

export default Auth;
