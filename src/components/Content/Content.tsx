import { FC } from 'react';
import style from './_content.module.scss';
import { Route, Routes } from 'react-router-dom';
import QrGenerator from '../pages/QrGenerator/QrGenerator.tsx';
import QrScanner from '../pages/QrScanner/QrScanner.tsx';
import HistoryScan from '../pages/HistoryPages/HistoryScan.tsx';
import HistoryGen from '../pages/HistoryPages/HistoryGen.tsx';
import DefaultPage from '../pages/DefaultPage.tsx';
import { Paths } from '../../constants/constants.ts';

const Content: FC = () => {
    return (
        <div className={style.container}>
            <Routes>
                <Route path="" element={<DefaultPage />} />
                <Route path={Paths.qr_scan} element={<QrScanner />} />
                <Route path={Paths.qr_gen} element={<QrGenerator />} />
                <Route path={Paths.hist_scan} element={<HistoryScan />} />
                <Route path={Paths.hist_gen} element={<HistoryGen />} />
            </Routes>
        </div>
    );
};

export default Content;