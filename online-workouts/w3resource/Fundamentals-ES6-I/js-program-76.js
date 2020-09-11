// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Executes a provided function once for each array element, starting form the     #
// #                     array's last element.                                                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const forEachRight = (arr = [], callback = f => f) =>
    arr
        .slice(0)           // Make a copy
        .reverse()          // Reverse the copy
        .forEach(callback); // Apply 'callback' for each element in reversed copy

(() => {

    forEachRight([1, 2, 3, 4, 5], (val) => console.log(val));

})();