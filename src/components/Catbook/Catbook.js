import React from 'react';
import catbook from './catbook.png';
import './Catbook.css';

const Catbook = () => {
    return (
        <div>
            <img className='catbook' src={catbook} alt='Catbook' width='20%' />
        </div>
    );
}

export default Catbook;