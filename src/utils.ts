export const debounce = <T extends (...args: any[]) => any>(callback: T, waitFor: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): ReturnType<T> => {
        let result: any;
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            result = callback(...args);
        }, waitFor);
        return result;
    };
};

export const getPosition = (str: string, subString: string, index: number) => {
    return str.split(subString, index).join(subString).length;
};

export const getParentEl = (el: Element) => {
    const MAX_ELEMENTS = 10;
    // let counter = 0;
    while (!el.hasAttribute('data-id')) {
        el = el.parentElement!;
    }
    return el;
};

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
