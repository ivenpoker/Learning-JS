// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the nth element of an array.                                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const getTheNthElementOfArray = (arr = [], nth = 0) =>
    !isNaN(nth) && nth >= 0 && nth < arr.length ? arr[nth] : null;

(() => {

    console.log(getTheNthElementOfArray([1, 2, 3, 4, 5], 3));
    console.log(getTheNthElementOfArray([1, 2, 3, 4, 5], -1));
    console.log(getTheNthElementOfArray([1, 2, 3, 4, 5], 0));
    console.log(getTheNthElementOfArray([1, 2, 3, 4, 5], 5));
    console.log(getTheNthElementOfArray([1, 2, 3, 4, 5], 'testing'));

})();