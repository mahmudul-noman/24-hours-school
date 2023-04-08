import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
// ====================================================================== //

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <button className="btn">Button</button>
            <button className="btn btn-primary">Button</button>
            <button className="btn btn-secondary">Button</button>
            <button className="btn btn-accent">Button</button>
            <button className="btn btn-ghost">Button</button>
            <button className="btn btn-link">Button</button>
        </div>
    );
};

export default Home;