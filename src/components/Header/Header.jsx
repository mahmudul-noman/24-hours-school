import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// ====================================================================== //

const Header = () => {
    return (
        <nav>
            <Link to='/home'>Course</Link>
            <Link to='/test'>Admission-Test</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Login</Link>
        </nav>
    );
};

export default Header;