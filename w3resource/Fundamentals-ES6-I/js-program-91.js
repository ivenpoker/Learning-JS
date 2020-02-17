// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns true if a provided predicate function returns false for all elements in #
// #                     a collection, false otherwise.                                                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const doApplyFunc = (data = [], func=f=>f) =>
    data.every((val) => !func(val));

(() => {

    console.log(doApplyFunc([1, 2, 3, 4, 5, 9], (val) => val < 0));
    console.log(doApplyFunc([0, 1, 3, 0], (x) => x === 2));
    console.log(doApplyFunc([0, 0, 0]));

})();