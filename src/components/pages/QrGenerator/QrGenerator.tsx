import { FC, useState } from 'react';
import style from './_qrGenerator.module.scss';
import { QRCodeSVG } from 'qrcode.react';
import GenForm from './GenForm';

const QrGenerator: FC = () => {
    const [resultQr, setResult] = useState<string>('');

    return (
        <div className={style.container}>
            <GenForm setResult={setResult} />
            {resultQr !== ''
                && <div className={style.qrBlock}>
                    <p>Your QR-code is done!</p>
                    <QRCodeSVG value={resultQr} size={200} />
                </div>
            }
        </div>
    );
};

export default QrGenerator;