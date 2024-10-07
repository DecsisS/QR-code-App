import { FC } from 'react';
import style from './_historyPage.module.scss';
import { STORAGE_DATA } from '../../../constants/constants.ts';
import { QRCodeSVG } from 'qrcode.react';
import { HistoryPages } from '../../../types/commonTypes.ts';

const HistoryPage: FC<{ page: HistoryPages }> = (props) => {
    const elements: Array<string> = [];

    const pushInElements = (dataType: string): void => {
        const data: string | null = localStorage.getItem(dataType);
        if (data) {
            const dataArray: Array<string> = JSON.parse(data);
            dataArray.forEach((el) => {
                elements.push(el);
            });
        };
    };

    function assertCannotReach(x: never): void {
        throw new Error(`Error loading history of ${x}`);
    };

    switch (props.page) {
        case 'scan':
            pushInElements(STORAGE_DATA.SCAN_DATA);
            break;
        case 'gen':
            pushInElements(STORAGE_DATA.GEN_DATA);
            break;
        default:
            assertCannotReach(props.page);
    };

    return (
        <div className={style.container}>
            {props.page === 'scan' && <h4>History of scanned</h4>}
            {props.page === 'gen' && <h4>History of generate</h4>}
            {elements.length !== 0
                ? elements.reverse().map((elem, i) => {
                    return (<div key={i}>
                        <p>{elem}</p>
                        <QRCodeSVG value={elem} size={50} />
                    </div>)
                })
                : <h3>Empty</h3>
            }
        </div>
    )
};

export default HistoryPage;