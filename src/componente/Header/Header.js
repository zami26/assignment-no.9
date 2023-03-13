import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-primary container justify-content-between d-flex align-items-center'>
            <p className='text-uppercase fs-4 fw-bolder text-white'>Crazy Quiz</p>
            <nav className='link'>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Topics</NavLink>
                <NavLink to='/statistic'>Statistic</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </nav>
        </div>
    );
};

export default Header;