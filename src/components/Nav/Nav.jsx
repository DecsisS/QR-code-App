import React from 'react';
import style from './nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={style.container}>
            <Link to="/qr_scanner">QR - scanner</Link>
            <Link to="/qr_generator">QR - generator</Link>
            <Link to="/history_of_scan">History of scan</Link>
            <Link to="/history_of_generate">History of generate</Link>
        </nav>
    );
};

export default Nav;