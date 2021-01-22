export const getParentEl = (el: Element) => {
  const MAX_ELEMENTS = 10;
  // let counter = 0;
  while (!el.hasAttribute('data-id')) {
    el = el.parentElement!;
  }
  return el;
};
