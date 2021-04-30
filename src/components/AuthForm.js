import React, { useRef, useState } from 'react';
import CommonButton from './ui/CommonButton';

const AuthForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
    const passwordInputRef = useRef('');
    
    const emailInputChangeHandler = event => {
        setEnteredEmail(event.target.value)
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        if (enteredEmail === '') {
            setEnteredEmailIsValid(false);
            return;
        }
    }

    const emailInputClasses = enteredEmailIsValid ? 'form-control' : 'invalid';

    return (
        <form className='auth-form flex-column' onSubmit={formSubmissionHandler}>
            <div className={emailInputClasses} >
                <input
                    placeholder="Email"
                    type='email'
                    onChange={emailInputChangeHandler} />
            </div>
            <div className='form-control'>
                <input
                    placeholder="password"
                    ref={passwordInputRef}
                    type='password' />
            </div>
            <div className='form-actions'>
                <CommonButton type={'submit'} buttonText={'Continue'} />
            </div>
        </form>
    );
};

export default AuthForm;
