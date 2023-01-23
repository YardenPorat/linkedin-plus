export interface HideByBase {
    fromParentSelector: string;
}
export interface HideByHeight extends HideByBase {
    strategy: 'hide-by-height';
    height: number;
}
export interface HideByClass extends HideByBase {
    strategy: 'hide-children-by-class';
    classesToHide: string[];
}
export type HideStrategy = HideByHeight | HideByClass;

export interface ElementWithIdBase {
    selector: string;
    idAttribute: string;
    multipleIdIdentifier?: string;
    separator: string;
}

export interface ClosestElementWithId extends ElementWithIdBase {
    strategy: 'closest';
}

export interface NextSiblingWithId extends ElementWithIdBase {
    strategy: 'sibling';
}

export type ElementWithIdStrategy = ClosestElementWithId | NextSiblingWithId;

export interface FilterPageData {
    hrefIncludes: string;
    firstLoadSelector: string;
    idContainerSelector: string;
    filterIconContainer: {
        selector: string;
        setParentStyles?: { [key: string]: string };
    };
    elementWithId: ElementWithIdStrategy;
    hideFromFilterClick: HideStrategy;
}

export const PAGES: Record<string, FilterPageData> = {
    jobs: {
        hrefIncludes: 'linkedin.com/jobs/search',
        firstLoadSelector: '.jobs-search-results-list',
        idContainerSelector: 'div[data-job-id="${id}"]',
        filterIconContainer: {
            selector: '[data-job-id]',
        },
        elementWithId: {
            strategy: 'sibling',
            selector: '[data-job-id]',
            idAttribute: 'data-job-id',
            separator: ':',
        },
        hideFromFilterClick: {
            strategy: 'hide-by-height',
            fromParentSelector: 'div',
            height: 45,
        },
    },

    feed: {
        hrefIncludes: 'linkedin.com/feed',
        firstLoadSelector: 'main#main',
        idContainerSelector: '[data-id="urn:li:activity:${id}"]',
        filterIconContainer: { selector: '.feed-shared-control-menu' },
        elementWithId: {
            strategy: 'closest',
            selector: '[data-id]',
            idAttribute: 'data-id',
            multipleIdIdentifier: 'aggregate',
            separator: ':',
        },
        hideFromFilterClick: {
            strategy: 'hide-children-by-class',
            fromParentSelector: '[data-urn]',
            classesToHide: [
                '.feed-shared-update-v2__update-content-wrapper',
                '.feed-shared-update-v2__description-wrapper',
                '.feed-shared-update-v2__content',
                '.social-details-social-activity',
                '.Elevation-0dp',
                '.ad-banner-container',
                '.feed-shared-document__container',
                '.feed-shared-showcase', // Assessment badges, Open to work,
                '.update-components-showcase', // Open to work
            ],
        },
    },
};
