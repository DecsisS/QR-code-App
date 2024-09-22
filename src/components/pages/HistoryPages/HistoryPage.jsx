import React from 'react';
import style from './historyPage.module.css';
import { SCAN_DATA, GEN_DATA } from '../../../constants/constants';
import { QRCodeSVG } from 'qrcode.react';

const HistoryPage = (props) => {
    const elements = [];

    const pushInElements = (dataType) => {
        const data = JSON.parse(localStorage.getItem(dataType)) || [];
        data.forEach((el) => {
            elements.push(el);
        })
    }

    if (props.page === 'scan') {
        pushInElements(SCAN_DATA);
    } else {
        pushInElements(GEN_DATA);
    }

    return (
        <div className={style.container}>
            {props.page === 'scan'
                ? <h4>History of scan</h4>
                : <h4>History of generate</h4>}
            {elements.length !== 0
                ? elements.reverse().map((elem, i) => {
                    return <p key={i}>{elem}<QRCodeSVG value={elem} size="50" /></p>
                })
                : <h3>Empty</h3>
            }
        </div>
    )
};

export default HistoryPage;