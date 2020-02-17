// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Moves the specified amount of elements to the end of the array.                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const moveArrayElementsToEnd = (arr = [], offset = 0) =>
    [...arr.slice(offset), ...arr.slice(0, offset)];

(() => {

    console.log(moveArrayElementsToEnd([1, 2, 3, 4, 5], 2));
    console.log(moveArrayElementsToEnd([1, 2, 3, 4, 5], -2));

})();