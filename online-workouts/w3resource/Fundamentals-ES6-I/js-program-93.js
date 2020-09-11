
// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes an event listener from an element.                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const offListener = (elem = {}, evt, callback, opts = false) =>
    elem.removeEventListener(evt, callback, opts);

(() => {

    const newElem = document.createElement('h1');
    newElem.addEventListener('click', () => console.log('heading clicked'));
    console.log(offListener(newElem, 'click', () => {
        console.log('Just switched off the click listener for h1');
    }))

})();