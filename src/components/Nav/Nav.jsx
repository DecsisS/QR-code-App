import React from 'react';
import style from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={style.container}>
            <NavLink to="/qr_scanner">QR - scanner</NavLink>
            <NavLink to="/qr_generator">QR - generator</NavLink>
            <NavLink to="/history_of_scan">History of scan</NavLink>
            <NavLink to="/history_of_generate">History of generate</NavLink>
        </nav>
    );
};

export default Nav;