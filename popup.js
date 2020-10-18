window.onload = event => {
    init();
};

const init = () => {
    console.log('page is fully loaded');
    const body = document.querySelector('body');
    pageHeight = body.scrollHeight;

    window.addEventListener('scroll', function () {
        if (body.scrollHeight > pageHeight) {
            pageHeight = body.scrollHeight;
            hidePromotedAds();
        }
    });
};

const hidePromotedAds = () => {
    //choosing page elements to hide
    arr = [
        ...document.querySelectorAll(
            'span.feed-shared-actor__sub-description.t-12.t-normal.t-black--light'
        ),
    ]; // get all the divs in an array
    console.log(`found ${arr.length} spans`);
    arr = arr.filter(item => item.innerText == 'Promoted');
    console.log(arr); //TODO: REMOVE
    console.log(`found ${arr.length} promoted posts`);
    arr.forEach(promoted => {
        promoted.innerText = 'Hidden by LinkedIn Plus';
        promoted.parentNode.parentNode.parentNode.parentNode.style.display =
            'none';
    });
};

// ignore this part downwards///////////////////////////////////////////////////////////

const htmlIcon = `<aaaa style="position: absolute; right: -25px; cursor: pointer;" class="close-ad" id="ngszpo0"><svg fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
  <g id="Bounding_Boxes">
  <g id="ui_x5F_spec_x5F_header_copy_3">
  </g>
  <path fill="none" d="M0,0h24v24H0V0z"></path>
  </g>
  <g id="Duotone">
  <g id="ui_x5F_spec_x5F_header_copy_2">
  </g>
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
  </g>
  </svg></aaaa>`;

const x = () => {
    //Insert X button
    // arr2 = Array.from(document.querySelectorAll('.feed_item'));
    // arr2.forEach(a => {
    //     a.insertAdjacentHTML('beforebegin', htmlIcon);
    // });
    // /* Get all elements with class="close" */
    // var closebtns = document.getElementsByClassName('close-ad');
    // var i;
    // /* Loop through the elements, and hide the parent, when clicked on */
    // for (i = 0; i < closebtns.length; i++) {
    //     closebtns[i].addEventListener('click', function (event) {
    //         //event.preventDefault();
    //         //to el: "color_container"
    //         this.nextSibling.firstElementChild.style.backgroundColor = 'gray';
    //         //3 elements upward to "feed_item_X"
    //         id = this.nextSibling.getAttribute('item-id');
    //         //add to db
    //         saveStuff(id);
    //     });
    // }
    // let saveData = { filtered: readFromLocalStorage() };
    // //console.log(saveData);
    // searchHideOnLoad();
    // function readFromLocalStorage() {
    //     // Retrieve your data from locaStorage (get from localStorage or create new Obj)
    //     let info = localStorage.getItem('filtered')
    //         ? JSON.parse(localStorage.getItem('filtered'))
    //         : [];
    //     return info;
    // }
    // // Store your data
    // function saveStuff(id) {
    //     console.log(`Checking id: ${id}`);
    //     //console.log(`current storage:${saveData.filtered}`);
    //     let i = saveData.filtered.indexOf(id);
    //     if (id != null) {
    //         if (i == -1) {
    //             saveData.filtered.push(id);
    //             console.log(
    //                 `ID '${id}' wasn't on storage, therefore it was added to storage and grayed`
    //             );
    //         } else {
    //             removeFromStorage(i, id);
    //             console.log(
    //                 `ID '${id}' was already on storage, so it was removed`
    //             );
    //         }
    //     }
    //     localStorage.setItem('filtered', JSON.stringify(saveData.filtered));
    //     //console.log(localStorage.getItem('filtered'));
    //     function removeFromStorage(i, id) {
    //         //remove from array
    //         saveData.filtered.splice(i, 1);
    //         //give ad normal height
    //         const hideMe = document.querySelector(`[item-id="${id}"]`);
    //         hideMe.firstElementChild.style.backgroundColor = null;
    //     }
    // }
    // // Hide on first load id's from localStorage
    // function searchHideOnLoad() {
    //     saveData.filtered.forEach(c => {
    //         console.log(`try initial hide: ${c}`);
    //         const hideMeInit = document.querySelector(`[item-id="${c}"]`);
    //         if (hideMeInit) {
    //             //check if ID is on the page
    //             //console.log(`el to hide: ${hideMeInit}`);
    //             hideMeInit.firstElementChild.style.backgroundColor = 'gray';
    //             console.log(`'${c}' was succesfully hidden`);
    //         }
    //     });
    // }
};
