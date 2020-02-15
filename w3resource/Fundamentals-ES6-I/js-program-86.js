// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the maximum value of an array, after mapping each element to value using   #
// #                     the provided function.                                                          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findMaxAfterMap = (someArr = [], func = f=>f) =>
    someArr.map((val) => func(val)).sort().reverse()[0];

(() => {

    console.log(findMaxAfterMap([1, 2, 3, 4, 5], (val) => val));
    console.log(findMaxAfterMap([1, 2, 3, 4, 5], (val) => val - 5));

})();