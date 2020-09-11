// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the 'n' maximum elements from the provided array.                          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findMaxNumber = (mainNums = [], nMax = 1) =>
    nMax >= mainNums.length ? [...mainNums].sort().reverse() :
        [...mainNums].sort((a, b) => a < b).slice(0, nMax).reverse();

(() =>{

    console.log(findMaxNumber([1, 2, 3, 4, 5], 3));
    console.log(findMaxNumber([10, 5, 4, 3, 1], -1));
    console.log(findMaxNumber([19, 5, 2, 4, 9, 11, -12, -3, 0, -9], 4));

})();