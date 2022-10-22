import { log } from '../components/logger';
import { HIDDEN_POST_FLAG } from '../const';
import { hideAllChildren } from './hide-all-children';

const DATA_ID = 'data-id';

export const hideByParentElement = (el: Element) => {
    //el = data-id="urn:li:activity...
    if (el.hasAttribute(DATA_ID)) {
        const success = hideAllChildren(el);
        if (success) {
            el.classList.add(HIDDEN_POST_FLAG);
        }
    } else {
        log(`ERROR. trying to hide parent with wrong el.`);
    }
};
