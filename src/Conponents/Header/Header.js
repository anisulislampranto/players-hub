import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo' >
                <h1>PlayersHub</h1>
            </div>
            <div className='navigation' >
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

        </div>

    );
};

export default Header;