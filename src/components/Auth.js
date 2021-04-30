import React from 'react';
import AuthForm from './AuthForm';

const Auth = props => {
    return (
        <section className='auth flex-column'>
            <h3>Sign Up</h3>
            <AuthForm />
        </section>
    );
};

export default Auth;
