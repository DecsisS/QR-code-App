import { FC } from 'react';
import style from './_nav.module.scss';
import { Link } from 'react-router-dom';
import { Paths } from '../../constants/constants';

const Nav: FC = () => {
    return (
        <nav className={style.container}>
            <Link to={Paths.qr_scan}>QR - scanner</Link>
            <Link to={Paths.qr_gen}>QR - generator</Link>
            <Link to={Paths.hist_scan}>History of scan</Link>
            <Link to={Paths.hist_gen}>History of generate</Link>
        </nav>
    );
};

export default Nav;