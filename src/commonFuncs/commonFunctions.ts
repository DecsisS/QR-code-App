import { STORAGE_DATA } from "../constants/constants";

type FuncUpdateStroage =
    (dataType: STORAGE_DATA.GEN_DATA | STORAGE_DATA.SCAN_DATA, value: string) => void;

export const updateStorage: FuncUpdateStroage = (dataType, value) => {
    const lastData: string | null = localStorage.getItem(dataType);
    if (lastData) {
        const lastDataArray: Array<string> = JSON.parse(lastData);
        localStorage.setItem(
            dataType, JSON.stringify([...lastDataArray, value])
        );
    } else {
        localStorage.setItem(
            dataType, JSON.stringify([value])
        );
    };
};