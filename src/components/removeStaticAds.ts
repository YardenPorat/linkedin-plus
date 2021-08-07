import { IWaitForSelector, waitForSelector } from '../utils';

export const removeStaticAds = () => {
    const selectors = [
        'section.ad-banner-container.is-header-zone',
        'section.ad-banner-container.artdeco-card',
    ];
    for (const selector of selectors) {
        waitForSelector(
            selector,
            () => {
                const element = document.querySelector(selector) as HTMLElement;
                element.style.visibility = 'hidden';
            },
            10,
            1000
        );
    }
};
