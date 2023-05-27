import { getLogger } from '../components/logger';
import { PROMOTED_POST_HIDDEN } from '../const';

const log = getLogger(['hide-promoted-posts.ts']);

const PROMOTED_SELECTORS = [
    '.feed-shared-actor__sub-description.t-12.t-normal.t-black--light',
    '.feed-shared-actor__description.t-12.t-normal.t-black--light',
    '.update-components-actor__description.t-12.t-normal.t-black--light',
];
export const hidePromotedPosts = () => {
    //choosing page elements to hide
    const promotedPosts = Array.from(document.querySelectorAll<HTMLElement>(PROMOTED_SELECTORS.join(', ')));
    log(`Filtering promoted posts: ${promotedPosts.length} posts`);
    const arr = promotedPosts.filter((el) => el.parentElement!.innerText.includes('Promoted'));
    log(`Total promoted: ${arr.length} posts`);

    for (const promoted of arr) {
        const post = promoted.closest('div.feed-shared-update-v2') as HTMLElement;
        if (!post) {
            log('Did not find post');
            continue;
        }
        const companyName = post.querySelector('.update-components-actor__title [aria-hidden="true"]')?.textContent;
        if (companyName) {
            log(`Hiding promoted post from '${companyName.trim()}'`);
        } else {
            log('Did not find company name');
        }
        post.classList.add('hiddenPromoted');
        post.innerText = PROMOTED_POST_HIDDEN;
    }

    arr.length && log(`${arr.length} promoted posts hidden`);
};
