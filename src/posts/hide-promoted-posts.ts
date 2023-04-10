import { log } from '../components/logger';

const logger = log.bind(log, 'hide-promoted-posts.ts |');

const PROMOTED_SELECTORS = [
    '.feed-shared-actor__sub-description.t-12.t-normal.t-black--light',
    '.feed-shared-actor__description.t-12.t-normal.t-black--light',
    '.update-components-actor__description.t-12.t-normal.t-black--light',
];
export const hidePromotedPosts = () => {
    //choosing page elements to hide
    const promotedPosts = Array.from(document.querySelectorAll<HTMLElement>(PROMOTED_SELECTORS.join(', ')));
    logger(`Filtering promoted posts: ${promotedPosts.length} posts`);
    const arr = promotedPosts.filter((el) => el.parentElement!.innerText.includes('Promoted'));
    logger(`Total promoted: ${arr.length} posts`);

    for (const promoted of arr) {
        const post = promoted.closest('div.feed-shared-update-v2') as HTMLElement;
        if (!post) {
            logger('Did not find post');
            continue;
        }
        const companyName = post.querySelector('.update-components-actor__title [aria-hidden="true"]')?.textContent;
        if (companyName) {
            logger(`Hiding promoted post from '${companyName.trim()}'`);
        } else {
            logger('Did not find company name');
        }
        post.classList.add('hiddenPromoted');
        post.innerText = 'Promoted post hidden by LinkedIn Plus';
    }

    arr.length && logger(`${arr.length} promoted posts hidden`);
};
