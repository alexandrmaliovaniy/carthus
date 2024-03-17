import { ReportHandler } from 'web-vitals';
import * as QWE from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = QWE;
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
    }
};

export default reportWebVitals;