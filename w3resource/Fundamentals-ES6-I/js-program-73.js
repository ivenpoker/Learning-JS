// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the difference between two arrays, after applying the provided function   #
// #                     to each array element of both.                                                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findDiffInArray = (arrA = [], arrB = [], func = f => f) => {
    arrA = arrA.map((val) => func(val));
    arrB = arrB.map((val) => func(val));
    return arrA.reduce((acc, val) =>
        !arrB.includes(val) ?
            [...acc, val] : acc, []);
};

(() => {

    console.log(findDiffInArray([2.1, 1.2], [2.3, 3.4], Math.floor));
    console.log(findDiffInArray([{x: 2}, {x: 1}], [{x: 1}], (val) => val.x));

})();