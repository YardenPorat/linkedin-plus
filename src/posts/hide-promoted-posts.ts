import { log } from '../components/logger';

const logger = log.bind(log, 'hide-promoted-posts.ts |');

const PROMOTED_SELECTORS = [
    '.feed-shared-actor__sub-description.t-12.t-normal.t-black--light',
    '.feed-shared-actor__description.t-12.t-normal.t-black--light',
    '.update-components-actor__description.t-12.t-normal.t-black--light',
];
export const hidePromotedPosts = () => {
    //choosing page elements to hide
    const promotedPosts = Array.from(document.querySelectorAll(PROMOTED_SELECTORS.join(', '))) as HTMLElement[];
    logger(`Filtering promoted posts: ${promotedPosts.length} posts`);
    const arr = promotedPosts.filter((item) => item.innerText.includes('Promoted'));
    logger(`total promoted: ${arr.length} posts`);

    arr.forEach((promoted) => {
        const post = promoted.closest('div.feed-shared-update-v2') as HTMLElement;
        if (!post) {
            logger('Did not find post');
            return;
        }
        const companyName = post.querySelector('.update-components-actor__title')?.textContent;
        if (companyName) {
            logger(`Hiding promoted post from ${companyName}`);
        } else {
            logger('Did not find company name');
        }
        post.classList.add('hiddenPromoted');
        post.innerText = 'Promoted post hidden by LinkedIn Plus';
    });
    arr.length && logger(`${arr.length} promoted posts hidden`);
};
