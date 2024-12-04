const DEFAULT_TIMEOUT = 15000;

export async function waitForSelector(selector: string, timeout = DEFAULT_TIMEOUT): Promise<Element> {
    const startTime = Date.now();

    return new Promise<Element>((resolve, reject) => {
        function checkSelector() {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
            } else if (Date.now() - startTime >= timeout) {
                reject(new Error(`Timeout exceeded while waiting for selector: ${selector}`));
            } else {
                requestAnimationFrame(checkSelector);
            }
        }

        checkSelector();
    });
}
