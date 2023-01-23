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
