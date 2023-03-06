import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-primary container justify-content-between d-flex align-items-center'>
            <p className='text-uppercase fs-4 fw-bolder text-white'>Crazy Quiz</p>
            <div className='link'>
                <Link to='/'>Topics</Link>
                <Link to='/statistic'>Statistic</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;