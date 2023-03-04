import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componente/Header/Header';
import Home from '../componente/Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Home></Home> */}
        </div>
    );
};

export default Main;