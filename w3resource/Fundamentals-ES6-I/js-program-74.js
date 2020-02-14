// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Filters out all values from an array for which the comparator function does not #
// #                     return true.                                                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const differenceWith = (arr = [], val, compFunc = f => f) =>
    arr.filter(a => val.findIndex((b) => compFunc(a, b)) === -1);

(() => {

    console.log(differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0],
        (a, b) => Math.round(a) === Math.round(b)));

})();