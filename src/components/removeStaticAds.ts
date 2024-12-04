const waitForSelectorSync = (selector: string, callback: any, limit = 30, delay = 300) => {
    if (limit === 0) return;
    if (document.querySelector(selector)) {
        callback();
    } else {
        setTimeout(() => {
            waitForSelectorSync(selector, callback, limit--);
        }, delay);
    }
};

export const removeStaticAds = () => {
    const selectors = [
        'section.ad-banner-container.is-header-zone',
        'section.ad-banner-container.artdeco-card',
        'div > div > aside > div.scaffold-layout__sticky.scaffold-layout__sticky--is-active.scaffold-layout__sticky--lg > div > section > iframe',
    ];
    for (const selector of selectors) {
        waitForSelectorSync(
            selector,
            () => {
                const element = document.querySelector(selector) as HTMLElement;
                element.style.display = 'none';
            },
            10,
            1000
        );
    }
};
