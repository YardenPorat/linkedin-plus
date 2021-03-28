import { waitForSelector } from '../utils';

export const removeStaticAds = () => {
    const selectors = ['iframe.ad-banner'];
    for (const selector of selectors) {
        waitForSelector(selector, () => {
            const element = document.querySelector(selector) as HTMLElement;
            element.style.visibility = 'hidden';
        });
    }
};
