import {
    ClosestElementWithId,
    ElementWithIdStrategy,
    HideByClass,
    HideByHeight,
    HideStrategy,
    NextSiblingWithId,
} from '../presets';

export function isHideChildrenByClass(
    hide: HideByClass | HideByHeight
): hide is HideByClass {
    return (hide as HideByClass).strategy === 'hide-children-by-class';
}

export function isHideByHeight(hide: HideStrategy): hide is HideByHeight {
    return (hide as HideByHeight).strategy === 'hide-by-height';
}

export function isClosestElementIdStrategy(
    elementWithId: ElementWithIdStrategy
): elementWithId is ClosestElementWithId {
    return (elementWithId as ClosestElementWithId).strategy === 'closest';
}

export function isSiblingElementIdStrategy(
    elementWithId: ElementWithIdStrategy
): elementWithId is NextSiblingWithId {
    return (elementWithId as NextSiblingWithId).strategy === 'sibling';
}
