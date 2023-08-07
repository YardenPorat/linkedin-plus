// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
export interface IWaitForSelector {
    selector: string;
    callback: (e: Event) => void;
    limit: number;
    delay: number;
}

export const waitForSelector = (selector: string, callback = noop, limit = 30, delay = 300) => {
    if (limit === 0) return;
    if (document.querySelector(selector)) {
        callback();
    } else {
        setTimeout(() => {
            waitForSelector(selector, callback, limit--);
        }, delay);
    }
};
