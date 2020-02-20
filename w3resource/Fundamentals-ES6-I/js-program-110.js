// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets every element that exists in any of the two arrays once.                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const union = (arrA, arrB) => Array.from(new Set([...arrA, ...arrB]));

(() => {

    console.log(union([1, 2, 3], [4, 3, 2]));
    console.log(union([1, 2, 3], [1, 2, 3]));

})();