import { FC } from 'react';
import style from './_defaultPage.module.scss';
import defaultImg from '../../imgs/qr-default.png';

const DefaultPage: FC = () => {
    return (
        <div className={style.container}>
            <h1>Hello! We glad to see you on our QR-code App</h1>
            <img src={defaultImg} alt="Our QR-code" />
        </div>
    )
}
export default DefaultPage;