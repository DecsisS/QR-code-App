import React, { useState } from 'react';
import style from './qrGenerator.module.css';
import { QRCodeSVG } from 'qrcode.react';
import { GEN_DATA } from '../../../constants/constants';

const QrGenerator = () => {
    const [text, setText] = useState('');
    const [resultQr, setResult] = useState('');

    const changeHandler = (event) => {
        setText((text) => text = event.target.value);
    };

    const clickHandler = (event) => {
        setResult((result) => result = text);
        setText((text) => text = '');

        const lastData = JSON.parse(localStorage.getItem(GEN_DATA)) || [];
        localStorage.setItem(GEN_DATA, JSON.stringify([...lastData, text]))
    }
    return (
        <div className={style.container}>
            <form>
                <input onChange={changeHandler} value={text} type="text" placeholder="Enter text" />
                <button onClick={clickHandler} type="button">Generate</button>
            </form>
            {resultQr !== '' && text === ''
                && <div className={style.qrBlock}>
                    <p>Your QR-code is done!</p>
                    <QRCodeSVG value={resultQr} size='200'/>
                </div>
            }
        </div>
    );
};

export default QrGenerator;