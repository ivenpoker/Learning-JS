// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Applies a function against an accumulator and each key in the object (from left #
// #                     to right).                                                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const applyFunc = (obj = {}, func=f=>f) =>
    Object.keys(obj).reduce((acc, key) => func(acc, key), {});

(() => {

    console.log(applyFunc({a: 1, b: 2}, (acc, key) => ({...acc, [key]: key})));

})();