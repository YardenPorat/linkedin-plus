import { IWaitForSelector, waitForSelector } from '../utils';

export const removeStaticAds = () => {
    const selectors = [
        'section.ad-banner-container.is-header-zone',
        'section.ad-banner-container.artdeco-card',
        'div > div > aside > div.scaffold-layout__sticky.scaffold-layout__sticky--is-active.scaffold-layout__sticky--lg > div > section > iframe',
    ];
    for (const selector of selectors) {
        waitForSelector(
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
