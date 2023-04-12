import { getLogger } from './logger';

const log = getLogger(['observeTitle.ts']);

export const observeTitle = () => {
    // select the target node
    const target = document.querySelector('title') as HTMLTitleElement;

    // create an observer instance
    const titleObserver = new MutationObserver((mutations) => {
        const titleText = (mutations[0].target as HTMLTitleElement).innerText;
        if (titleText.includes('(')) {
            log('page title hidden');
            target.innerText = titleText.slice(4);
        }
    });

    // configuration of the observer:
    const config = { subtree: true, characterData: true, childList: true };

    // pass in the target node, as well as the observer options
    titleObserver.observe(target, config);
};
