export const observeTitle = () => {
  // select the target node
  var target = document.querySelector('title') as HTMLTitleElement;

  // create an observer instance
  var titleObserver = new MutationObserver(mutations => {
    const titleText = (mutations[0].target as HTMLElement).innerText as string;
    if (titleText.includes('(')) {
      console.log('page title hidden');
      target.innerText = titleText.slice(4);
    }
  });

  // configuration of the observer:
  var config = { subtree: true, characterData: true, childList: true };

  // pass in the target node, as well as the observer options
  titleObserver.observe(target, config);
};
