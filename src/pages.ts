import { addCss } from './components/add-css';
import { insertFilterIcon } from './components/insert-filter-icon';
import { log } from './components/logger';
import { observeTitle } from './components/observeTitle';
import { removeStaticAds } from './components/removeStaticAds';
import { HIDDEN_POST_FLAG, UP, DOWN, PROMOTED_POST_HIDDEN } from './const';
import { hidePromotedPosts } from './posts/hide-promoted-posts';
import { PAGES } from './presets';
import { debounce } from './utils';
import {
    isClosestElementIdStrategy,
    isHideByHeight,
    isHideChildrenByClass,
    isSiblingElementIdStrategy,
} from './utils/is-strategy';
import { waitForSelector } from './utils/wait-for-selector';

export const filterType: keyof typeof PAGES = 'feed';
const LOCAL_STORAGE_KEY = 'linkedin-plus';

export class PageFilter {
    static init() {
        for (const pageKey of Object.keys(PAGES)) {
            if (window.location.href.includes(pageKey)) {
                return new PageFilter(pageKey);
            }
        }
    }

    constructor(public pageKey: keyof typeof PAGES) {
        addCss(PAGES[this.pageKey].filterIconContainer.css);
        observeTitle();

        waitForSelector(PAGES[this.pageKey].firstLoadSelector)
            .then(this.init)
            .catch((error) => {
                log.error(error);
            });
    }

    public init = () => {
        removeStaticAds();
        this.processPage();
        this.observePage();
    };

    public processPage = debounce(() => {
        const { selector } = PAGES[this.pageKey].filterIconContainer;
        log.message('processPage');
        this.hidePageIds();
        hidePromotedPosts();
        insertFilterIcon(selector, (e) => this.handleFilterClick(e));
    }, 400);

    public hidePageIds() {
        const storage = this.readFromLocalStorage();
        log.message(`Filtering saved posts by id: ${storage.size} posts`);

        for (const id of Array.from(storage)) {
            // :not(.hiddenPost) - in order not to double hide posts
            const selector = `${this.getSelectorWithId(id)}:not(.${HIDDEN_POST_FLAG})`;
            const el = document.querySelector<HTMLElement>(selector);
            if (!el) {
                continue;
            }

            log.message(`ID found. hiding ID:${id}`);
            this.hideElement(el, 'down');
        }
    }

    public toggleFromStorage = (id: string) => {
        const storage = this.readFromLocalStorage();

        if (!storage.has(id)) {
            storage.add(id);
            log.message(`'${id}' Added`);
        } else {
            storage.delete(id);
            log.message(`'${id}' Removed`);
        }

        localStorage.setItem(this.getStorageKey(), JSON.stringify(Array.from(storage)));
    };

    public handleFilterClick(e: Event) {
        log.message('Filter icon clicked');

        const eventTarget = e.currentTarget as HTMLElement;

        const elWithId = this.getElementWithId(eventTarget);
        const ids = this.getIdFromElement(elWithId);

        const storage = this.readFromLocalStorage();

        for (const id of ids) {
            if (!storage.has(id)) {
                this.hideElement(eventTarget);
            } else {
                this.unhidePost(eventTarget);
            }

            this.toggleFromStorage(id);
        }
    }

    public observePage = () => {
        const target = document.querySelector(PAGES[this.pageKey].firstLoadSelector);
        if (!target) {
            log.error(`Observable target not found (${PAGES[this.pageKey].firstLoadSelector})`);
            return;
        }

        const mainFeedObserver = new MutationObserver((mutations) => {
            let addedNodes = 0;
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node instanceof HTMLElement && node.textContent !== PROMOTED_POST_HIDDEN) {
                        addedNodes++;
                        break;
                    }
                }

                if (addedNodes > 0) {
                    this.processPage();
                    break;
                }
            }
        });
        const config = { subtree: true, characterData: true, childList: true };
        mainFeedObserver.observe(target, config);
        log.message('Observer started');
    };

    private getElementWithId(el: HTMLElement) {
        const { elementWithId } = PAGES[this.pageKey];

        let parent: HTMLElement | null = null;
        if (isClosestElementIdStrategy(elementWithId)) {
            parent = el.closest<HTMLElement>(elementWithId.selector);
        } else if (isSiblingElementIdStrategy(elementWithId)) {
            parent = el.parentElement!.querySelector<HTMLElement>(elementWithId.selector);
        }

        if (!parent) {
            log.message(`Selector: "${elementWithId.selector}"`);
            throw new Error(`Did not find parent element to hide.
            Selector: ${elementWithId.selector}`);
        }

        return parent;
    }

    private hideElement(el: HTMLElement, direction: typeof UP | typeof DOWN = UP) {
        const { hideFromFilterClick } = PAGES[this.pageKey];

        const directionSelector = direction === UP ? 'closest' : 'querySelector';
        const parent = el.parentElement![directionSelector]<HTMLElement>(hideFromFilterClick.fromParentSelector);
        if (!parent) {
            // eslint-disable-next-line no-console
            console.error(
                'Selector: ',
                hideFromFilterClick.fromParentSelector,
                '\nDirection: ',
                direction,
                '\nElement: ',
                el
            );
            throw new Error(`Could not find parent element to hide from`);
        }

        if (isHideChildrenByClass(hideFromFilterClick)) {
            this.hideOrUnhideChildrenByClass(true, parent);
        } else if (isHideByHeight(hideFromFilterClick)) {
            parent.style.height = `${hideFromFilterClick.height}px`;
            parent.style.overflow = `hidden`;
        } else {
            throw new Error(`Unknown hide strategy`);
        }

        el.classList.add(HIDDEN_POST_FLAG);
    }

    private unhidePost = (el: HTMLElement) => {
        const { hideFromFilterClick } = PAGES[this.pageKey];
        const parent = el.parentElement!.closest<HTMLElement>(hideFromFilterClick.fromParentSelector);
        if (!parent) {
            throw new Error(`Could not find parent element to unhide from`);
        }

        if (isHideChildrenByClass(hideFromFilterClick)) {
            this.hideOrUnhideChildrenByClass(false, parent);
        } else if (isHideByHeight(hideFromFilterClick)) {
            parent.setAttribute('style', '');
        } else {
            throw new Error(`Unknown hide strategy`);
        }
    };

    private hideOrUnhideChildrenByClass(isHide: boolean, parent: HTMLElement) {
        const { hideFromFilterClick } = PAGES[this.pageKey];
        if (!isHideChildrenByClass(hideFromFilterClick)) {
            throw new Error(`hideOrUnhideChildrenByClass should only be called with HideChildrenByClass strategy`);
        }

        const childrenToHide = parent.querySelectorAll<HTMLElement>(hideFromFilterClick.classesToHide.toString());

        const display = isHide ? 'none' : '';
        childrenToHide.forEach((child) => {
            child.style.display = display;
        });
    }

    private getSelectorWithId(id: string) {
        return PAGES[this.pageKey].idContainerSelector.replace('${id}', id);
    }

    private getIdFromElement = (el: Element) => {
        const idText = el.getAttribute(PAGES[this.pageKey].elementWithId.idAttribute);
        if (!idText) {
            log.message(`ERROR. trying to get id from element without id`);
            return [];
        }

        const { separator, multipleIdIdentifier } = PAGES[this.pageKey].elementWithId;
        let id;
        if (multipleIdIdentifier && idText.includes(multipleIdIdentifier)) {
            log.message('id is aggregated');

            const regex = new RegExp(/(\d+)/g);
            const matches = idText.match(regex);
            if (!matches) {
                throw new Error(`Cannot match ids in "${idText}"`);
            }
            id = matches;
        } else {
            //not aggregated
            const splittedByColon = idText.split(separator);
            id = [splittedByColon[splittedByColon.length - 1]];
        }

        log.message(`ID returned from getId: ${id.join(', ')}`);
        return id;
    };

    private readFromLocalStorage = (): Set<string> => {
        const savedPosts = new Set<string>(JSON.parse(localStorage.getItem(this.getStorageKey()) ?? '[]'));
        return savedPosts;
    };

    private getStorageKey = () => `${LOCAL_STORAGE_KEY}-${this.pageKey}`;
}
