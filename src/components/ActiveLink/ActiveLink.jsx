import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? 'text-green-800' : ''}
            >
                {children}
            </NavLink>
        </div >
    );
};

export default ActiveLink;