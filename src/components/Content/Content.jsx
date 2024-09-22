import React from 'react';
import style from './content.module.css';
import { Route, Routes } from 'react-router-dom';
import QrGenerator from '../pages/QrGenerator/QrGenerator.jsx';
import QrScanner from '../pages/QrScanner/QrScanner.jsx';
import HistoryScan from '../pages/HistoryPages/HistoryScan.jsx';
import HistoryGen from '../pages/HistoryPages/HistoryGen.jsx';

const Content = () => {
    return (
        <div className={style.container}>
            <Routes>
                <Route path="/qr_scanner"element={<QrScanner />} />
                <Route path="//qr_generator" element={<QrGenerator />} />
                <Route path="/history_of_scan" element={<HistoryScan />} />
                <Route path="/history_of_generate" element={<HistoryGen />} />
            </Routes>
        </div>
    );
};

export default Content;