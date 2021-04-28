import React from 'react';

const NavBar = props => {
    return (
        <header className="main-header">
            <div>
                <h3 className="logo" onClick={props.onHome}>LearnStart</h3>
            </div>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li onClick={props.onSignUp}>
                        Sign Up
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
