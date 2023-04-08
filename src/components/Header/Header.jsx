import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';
// ====================================================================== //

const Header = () => {
    return (
        <div className="header flex justify-between">
            <div className="log">
                <h4 className='font-bold'>24 Hour School</h4>
            </div>
            <nav className='mymenu flex'>
                <ActiveLink to='/'>Course</ActiveLink>
                <ActiveLink to='/test'>Admission_Test</ActiveLink>
                <ActiveLink to='/contact'>Contact</ActiveLink>
                <ActiveLink to='/login'>Login</ActiveLink>
                <ActiveLink to='/signup'>Signup</ActiveLink>
            </nav>
        </div>
    );
};

export default Header;