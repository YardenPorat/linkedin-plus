export interface IWaitForSelector {
    selector: string;
    callback: any;
    limit: number;
    delay: number;
}

export const waitForSelector = (selector: string, callback: any, limit = 30, delay = 300) => {
    if (limit === 0) return;
    if (document.querySelector(selector)) {
        callback();
    } else {
        setTimeout(() => {
            waitForSelector(selector, callback, limit--);
        }, delay);
    }
};
