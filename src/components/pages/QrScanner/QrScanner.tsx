import { FC, useState } from 'react';
import style from './_qrScanner.module.scss';
import { Scanner, IDetectedBarcode } from '@yudiel/react-qr-scanner';
import { STORAGE_DATA } from '../../../constants/constants.js';
import { SettingsScan } from '../../../types/qrScanTypes.js';
import { updateStorage } from '../../../commonFuncs/commonFunctions.js';

const QrScanner: FC = () => {
    const [data, setData] = useState<string>('');
    
    const scanHandler = (result: IDetectedBarcode[]): void => {
        setData((d) => d = result[0].rawValue);

        updateStorage(STORAGE_DATA.SCAN_DATA, result[0].rawValue);
    };

    const scanSettings: SettingsScan = {
        settings: {
            audio: false,
            finder: false,
            
        },
        styleCam: {
            container: {
                height: '70%',
            }
        },
    } as const;

    return (
        <div className={style.container}>
            <p>QR-code scanner</p>
            <Scanner
                onScan={scanHandler}
                components={scanSettings.settings}
                styles={scanSettings.styleCam} />
            {data !== ''
                && <span>This is: <i>{data}</i></span>}
        </div>
    );
};

export default QrScanner;