import React, { useState } from 'react';
import style from './qrScanner.module.css';
import { Scanner } from '@yudiel/react-qr-scanner';
import { SCAN_DATA } from '../../../constants/constants.js';

const QrScanner = () => {
    const [data, setData] = useState('');
    const scanHandler = (result) => {
        setData((data) => data = result[0].rawValue);

        const lastData = JSON.parse(localStorage.getItem(SCAN_DATA)) || [];
        localStorage.setItem(SCAN_DATA, JSON.stringify([...lastData, result[0].rawValue]));
    };

    const settings = {
        audio: false,
        finder: false,
    };  

    const styleCam = {
        container: {
            height: '70%',
        }
    };

    return (
        <div className={style.container}>
            <p>QR-code scanner</p>
            <Scanner
                onScan={scanHandler}
                components={settings}
                styles={styleCam} />
            {data !== ''
                && <span>This is: <i>{data}</i></span>}
        </div>
    );
};

export default QrScanner;