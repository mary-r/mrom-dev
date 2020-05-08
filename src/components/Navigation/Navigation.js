import React from 'react';
import logo from './logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <img className='logo' src={logo} alt='Logo' />
            <div>
                <p>About</p>
                <p>Work</p>
                <p>Contact</p>
            </div>
        </div>
    );
}

export default Navigation;